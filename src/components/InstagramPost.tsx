import { useState, useEffect } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Instagram, ExternalLink } from "lucide-react";

interface InstagramPostProps {
  postUrl: string;
  fallbackDescription?: string;
}

interface InstagramEmbed {
  html: string;
  thumbnail_url?: string;
  author_name?: string;
}

export const InstagramPost = ({ postUrl, fallbackDescription }: InstagramPostProps) => {
  const [embedData, setEmbedData] = useState<InstagramEmbed | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchInstagramEmbed = async () => {
      try {
        const oembedUrl = `https://api.instagram.com/oembed?url=${encodeURIComponent(postUrl)}&maxwidth=320&hidecaption=true`;
        const response = await fetch(oembedUrl);
        
        if (!response.ok) {
          throw new Error('Failed to fetch Instagram embed');
        }
        
        const data = await response.json();
        setEmbedData(data);
      } catch (err) {
        console.error('Error fetching Instagram embed:', err);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    if (postUrl) {
      fetchInstagramEmbed();
    }
  }, [postUrl]);

  if (loading) {
    return (
      <Card className="overflow-hidden">
        <div className="aspect-square bg-muted flex items-center justify-center animate-pulse">
          <Instagram className="h-12 w-12 text-muted-foreground" />
        </div>
        <CardContent className="p-4">
          <div className="h-4 bg-muted rounded animate-pulse mb-2"></div>
          <div className="h-3 bg-muted rounded animate-pulse w-3/4"></div>
        </CardContent>
      </Card>
    );
  }

  if (error || !embedData) {
    return (
      <Card className="overflow-hidden">
        <div className="aspect-square bg-muted flex items-center justify-center">
          <Instagram className="h-12 w-12 text-muted-foreground" />
        </div>
        <CardContent className="p-4">
          <p className="text-sm text-muted-foreground font-medium">
            {fallbackDescription || "Instagram content"}
          </p>
          <p className="text-xs text-muted-foreground mt-1">
            View on Instagram
          </p>
          <a 
            href={postUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center text-xs text-primary hover:underline mt-2"
          >
            <ExternalLink className="h-3 w-3 mr-1" />
            Open in Instagram
          </a>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="overflow-hidden">
      <div 
        className="instagram-embed"
        dangerouslySetInnerHTML={{ __html: embedData.html }}
      />
    </Card>
  );
};