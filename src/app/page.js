import Home from "@/components/HomePage/Home";

export async function generateMetadata() {
  const canonicalUrl = `https://sharifosmanhadi.info/`;
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
