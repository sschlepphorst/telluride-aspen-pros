import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';

export interface InstagramPost {
  id: string;
  instagram_id: string;
  permalink: string;
  media_url?: string;
  thumbnail_url?: string;
  caption?: string;
  media_type: string;
  timestamp: string;
  created_at: string;
  updated_at: string;
}

export const useInstagramPosts = () => {
  const [posts, setPosts] = useState<InstagramPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchPosts = async () => {
    try {
      setLoading(true);
      setError(null);

      // Fetch posts from our database
      const { data, error: fetchError } = await supabase
        .from('instagram_posts')
        .select('*')
        .order('timestamp', { ascending: false })
        .limit(6);

      if (fetchError) {
        throw fetchError;
      }

      setPosts(data || []);
    } catch (err) {
      console.error('Error fetching Instagram posts:', err);
      setError(err instanceof Error ? err.message : 'Failed to fetch Instagram posts');
    } finally {
      setLoading(false);
    }
  };

  const refreshFromInstagram = async () => {
    try {
      setError(null);
      
      // Call our edge function to fetch latest posts from Instagram
      const response = await supabase.functions.invoke('fetch-instagram-posts');
      
      if (response.error) {
        throw response.error;
      }

      // Refresh the local data after fetching from Instagram
      await fetchPosts();
      
      return response.data;
    } catch (err) {
      console.error('Error refreshing from Instagram:', err);
      setError(err instanceof Error ? err.message : 'Failed to refresh from Instagram');
      throw err;
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return {
    posts,
    loading,
    error,
    refreshFromInstagram,
    refetch: fetchPosts
  };
};