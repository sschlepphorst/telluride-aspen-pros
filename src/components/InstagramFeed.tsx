import { InstagramPost } from "./InstagramPost";

// Replace these with your actual Instagram post URLs
const INSTAGRAM_POSTS = [
  {
    url: "https://www.instagram.com/p/EXAMPLE1/", // Replace with real post URL
    fallback: "Emergency tree removal - Mountain Village storm damage"
  },
  {
    url: "https://www.instagram.com/p/EXAMPLE2/", // Replace with real post URL  
    fallback: "Aspen grove pruning - Telluride residential property"
  },
  {
    url: "https://www.instagram.com/p/EXAMPLE3/", // Replace with real post URL
    fallback: "Large pine removal - San Miguel County ranch"
  }
];

export const InstagramFeed = () => {
  return (
    <div className="grid md:grid-cols-3 gap-6">
      {INSTAGRAM_POSTS.map((post, index) => (
        <InstagramPost
          key={index}
          postUrl={post.url}
          fallbackDescription={post.fallback}
        />
      ))}
    </div>
  );
};