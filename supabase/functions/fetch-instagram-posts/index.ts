import "https://deno.land/x/xhr@0.1.0/mod.ts";
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.52.1';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

interface InstagramPost {
  id: string;
  permalink: string;
  media_url?: string;
  thumbnail_url?: string;
  caption?: string;
  media_type: string;
  timestamp: string;
}

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    console.log('Fetching Instagram posts...');

    const instagramAccessToken = Deno.env.get('INSTAGRAM_ACCESS_TOKEN');
    const supabaseUrl = Deno.env.get('SUPABASE_URL');
    const supabaseServiceKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY');

    if (!instagramAccessToken) {
      throw new Error('Instagram access token not configured');
    }

    if (!supabaseUrl || !supabaseServiceKey) {
      throw new Error('Supabase configuration missing');
    }

    // Initialize Supabase client with service role key for database access
    const supabase = createClient(supabaseUrl, supabaseServiceKey);

    // Fetch latest posts from Instagram Basic Display API
    const response = await fetch(
      `https://graph.instagram.com/me/media?fields=id,permalink,media_url,thumbnail_url,caption,media_type,timestamp&limit=10&access_token=${instagramAccessToken}`
    );

    if (!response.ok) {
      const errorData = await response.text();
      console.error('Instagram API error:', errorData);
      throw new Error(`Instagram API error: ${response.status} ${response.statusText}`);
    }

    const data = await response.json();
    console.log(`Fetched ${data.data?.length || 0} posts from Instagram`);

    if (!data.data || data.data.length === 0) {
      console.log('No posts found from Instagram API');
      return new Response(
        JSON.stringify({ message: 'No posts found', posts: [] }),
        { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    // Transform and store posts in database
    const posts: InstagramPost[] = data.data.map((post: any) => ({
      instagram_id: post.id,
      permalink: post.permalink,
      media_url: post.media_url || null,
      thumbnail_url: post.thumbnail_url || null,
      caption: post.caption || null,
      media_type: post.media_type,
      timestamp: post.timestamp,
    }));

    // Upsert posts to database (insert or update if already exists)
    for (const post of posts) {
      const { error } = await supabase
        .from('instagram_posts')
        .upsert(post, { 
          onConflict: 'instagram_id',
          ignoreDuplicates: false 
        });

      if (error) {
        console.error('Error upserting post:', error);
      }
    }

    console.log(`Successfully processed ${posts.length} Instagram posts`);

    return new Response(
      JSON.stringify({ 
        message: 'Instagram posts updated successfully',
        count: posts.length,
        posts: posts
      }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );

  } catch (error) {
    console.error('Error in fetch-instagram-posts function:', error);
    return new Response(
      JSON.stringify({ 
        error: error.message || 'Internal server error',
        details: 'Check function logs for more information'
      }),
      { 
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      }
    );
  }
});