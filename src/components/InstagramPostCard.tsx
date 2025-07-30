import { Card, CardContent } from "@/components/ui/card";
import { Instagram, ExternalLink } from "lucide-react";
import { InstagramPost } from "@/hooks/useInstagramPosts";

interface InstagramPostCardProps {
  post: InstagramPost;
}

export const InstagramPostCard = ({ post }: InstagramPostCardProps) => {
  const formatCaption = (caption: string | undefined) => {
    if (!caption) return "Check out our latest tree work";
    
    // Remove hashtags and trim to reasonable length
    const cleanCaption = caption
      .replace(/#\w+/g, '') // Remove hashtags
      .replace(/\s+/g, ' ') // Clean up multiple spaces
      .trim();
    
    return cleanCaption.length > 100 
      ? cleanCaption.substring(0, 100) + '...'
      : cleanCaption;
  };

  const formatDate = (timestamp: string) => {
    return new Date(timestamp).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });
  };

  const imageUrl = post.media_type === 'VIDEO' 
    ? post.thumbnail_url 
    : post.media_url;

  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="aspect-square relative bg-muted">
        {imageUrl ? (
          <img
            src={imageUrl}
            alt={formatCaption(post.caption)}
            className="w-full h-full object-cover"
            loading="lazy"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <Instagram className="h-12 w-12 text-muted-foreground" />
          </div>
        )}
        
        {post.media_type === 'VIDEO' && (
          <div className="absolute top-2 right-2 bg-black/70 rounded-full p-1">
            <svg 
              className="h-4 w-4 text-white" 
              fill="currentColor" 
              viewBox="0 0 24 24"
            >
              <path d="M8 5v14l11-7z"/>
            </svg>
          </div>
        )}
      </div>
      
      <CardContent className="p-4">
        <p className="text-sm text-foreground font-medium mb-2">
          {formatCaption(post.caption)}
        </p>
        
        <div className="flex items-center justify-between text-xs text-muted-foreground">
          <span>{formatDate(post.timestamp)}</span>
          <a 
            href={post.permalink} 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center text-primary hover:underline"
          >
            <ExternalLink className="h-3 w-3 mr-1" />
            View on Instagram
          </a>
        </div>
      </CardContent>
    </Card>
  );
};