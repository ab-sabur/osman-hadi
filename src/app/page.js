import Home from "@/components/HomePage/Home";

export const dynamic = "force-static";

export async function generateMetadata() {
  const canonicalUrl = `https://osman-hadi.vercel.app/`;
  return {
    alternates: {
      canonical: canonicalUrl,
    },
  };
}

export default function App() {
  return (
    <>
      <Home />
    </>
  );
}
