import { useState } from "react";
import { Button } from "@/components/ui/button";
import { RefreshCw, AlertCircle } from "lucide-react";
import { useInstagramPosts } from "@/hooks/useInstagramPosts";
import { InstagramPostCard } from "./InstagramPostCard";
import { useToast } from "@/hooks/use-toast";

export const InstagramFeed = () => {
  const { posts, loading, error, refreshFromInstagram } = useInstagramPosts();
  const [refreshing, setRefreshing] = useState(false);
  const { toast } = useToast();

  const handleRefresh = async () => {
    try {
      setRefreshing(true);
      await refreshFromInstagram();
      toast({
        title: "Posts updated",
        description: "Latest Instagram posts have been fetched successfully.",
      });
    } catch (err) {
      toast({
        title: "Refresh failed",
        description: "Unable to fetch latest posts. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setRefreshing(false);
    }
  };

  if (loading) {
    return (
      <div className="grid md:grid-cols-3 gap-6">
        {[1, 2, 3].map((i) => (
          <div key={i} className="aspect-square bg-muted rounded-lg animate-pulse" />
        ))}
      </div>
    );
  }

  if (error && posts.length === 0) {
    return (
      <div className="text-center py-12">
        <AlertCircle className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
        <p className="text-muted-foreground mb-4">Unable to load Instagram posts</p>
        <Button onClick={handleRefresh} disabled={refreshing}>
          <RefreshCw className={`h-4 w-4 mr-2 ${refreshing ? 'animate-spin' : ''}`} />
          Try Again
        </Button>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <p className="text-sm text-muted-foreground">
          {posts.length > 0 ? `Showing ${posts.length} recent posts` : 'No posts available'}
        </p>
        <Button
          variant="outline"
          size="sm"
          onClick={handleRefresh}
          disabled={refreshing}
        >
          <RefreshCw className={`h-4 w-4 mr-2 ${refreshing ? 'animate-spin' : ''}`} />
          Refresh
        </Button>
      </div>
      
      {posts.length > 0 ? (
        <div className="grid md:grid-cols-3 gap-6">
          {posts.slice(0, 6).map((post) => (
            <InstagramPostCard key={post.id} post={post} />
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <p className="text-muted-foreground mb-4">No Instagram posts found</p>
          <Button onClick={handleRefresh} disabled={refreshing}>
            <RefreshCw className={`h-4 w-4 mr-2 ${refreshing ? 'animate-spin' : ''}`} />
            Fetch Posts
          </Button>
        </div>
      )}
    </div>
  );
};