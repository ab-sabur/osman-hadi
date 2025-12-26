import ImagesPage from "@/components/ImagesPage";

export const dynamic = "force-static";

export async function generateMetadata() {
  const canonicalUrl = `https://osman-hadi.vercel.app/gallery/}`;
  return {
    title: "ওসমান হাদীর ছবি সমূহ",
    alternates: {
      canonical: canonicalUrl,
    },
  };
}

export default async function GalleryPage({ searchParams }) {
  const resolvedParams = await searchParams;
  return <ImagesPage resolvedParams={resolvedParams} />;
}
