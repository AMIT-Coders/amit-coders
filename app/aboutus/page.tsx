import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About AMIT?",
  description: "About AMIT?",
};

export default function AboutUs() {
  return (
    <div className="text-black">
      <h1>About AMIT</h1>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis
        tenetur eveniet sapiente maiores et officiis nam! Velit dolorum maxime
        rem aliquam veniam! Molestiae dolore placeat, voluptatum ad porro
        inventore asperiores!
      </p>
    </div>
  );
}
