import VideoPlayerPage from "@/components/VideoPage/VideoPlayerPage";
import React from "react";

export async function generateMetadata({ params }) {
  const { video } = await params;
  const canonicalUrl = `https://osman-hadi.vercel.app/videos/${video}`;
  return {
    title: decodeURIComponent(video),
    alternates: {
      canonical: canonicalUrl,
    },
  };
}

const page = ({ params, searchParams }) => {
  return <VideoPlayerPage params={params} searchParams={searchParams} />;
};

export default page;
