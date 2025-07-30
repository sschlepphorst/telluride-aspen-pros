-- Create table for storing Instagram posts
CREATE TABLE public.instagram_posts (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  instagram_id TEXT NOT NULL UNIQUE,
  permalink TEXT NOT NULL,
  media_url TEXT,
  thumbnail_url TEXT,
  caption TEXT,
  media_type TEXT NOT NULL,
  timestamp TIMESTAMP WITH TIME ZONE NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.instagram_posts ENABLE ROW LEVEL SECURITY;

-- Create policy for public read access (since Instagram posts are public)
CREATE POLICY "Instagram posts are publicly viewable" 
ON public.instagram_posts 
FOR SELECT 
USING (true);

-- Create policy for system updates (only backend can update)
CREATE POLICY "System can manage Instagram posts" 
ON public.instagram_posts 
FOR ALL 
USING (false);

-- Create index for better performance
CREATE INDEX idx_instagram_posts_timestamp ON public.instagram_posts(timestamp DESC);
CREATE INDEX idx_instagram_posts_instagram_id ON public.instagram_posts(instagram_id);

-- Create function to update timestamps
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create trigger for automatic timestamp updates
CREATE TRIGGER update_instagram_posts_updated_at
  BEFORE UPDATE ON public.instagram_posts
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();