import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AMIT Coders Blog",
  description: "AMIT Coders Blogs",
};

export default function Blog() {
  return (
    <div className="text-black">
      <h1>AMIT Blog</h1>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis
        tenetur eveniet sapiente maiores et officiis nam! Velit dolorum maxime
        rem aliquam veniam! Molestiae dolore placeat, voluptatum ad porro
        inventore asperiores!
      </p>
    </div>
  );
}
