"use client";
import React from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";
import { FadeText } from "./magicui/fade-text";
import { CopyButton } from "./copy-button";
import { motion } from "framer-motion";

export function ProjectCarousel() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} layout={true} />
  ));

  return (
    <div className="w-full h-1/2 pt-8">
      <h2 className="max-w-7xl pl-4 mx-auto text-xl md:text-2xl font-light text-neutral-800/80 dark:text-neutral-200/60 font-sans">
        <FadeText
          className="text-2xl font-bold"
          direction="up"
          framerProps={{
            show: { transition: { delay: 0.2, duration: 0.3 } },
          }}
          text="Hi! I'm Prithwijit Choudhury."
        />
      </h2>
      <FadeText
        className="max-w-7xl pl-4 mx-auto text-3xl md:text-5xl font-bold text-neutral-800/90 dark:text-neutral-200/90 font-sans text-wrap"
        text="I create seamless full-stack web applications and also create GenAI projects."
        direction="up"
        framerProps={{
          show: { transition: { delay: 0.4, duration: 0.3 } },
        }}
      />
      <motion.div
        className="mt-6 pl-4 flex justify-start items-center  "
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.3,
          ease: "easeInOut",
          delay: 0.6,
        }}
      >
        <CopyButton />
      </motion.div>
      <Carousel items={cards} />
    </div>
  );
}

const data = [
  {
    category: "Learning Management System",
    title: "DSALearningPlanner",
    src: "/images/dsa.jpg",
    githubLink: "https://dsalearningplanner.vercel.app",
    liveLink: "https://dsalearningplanner.vercel.app",
  },
  {
    category: "AI Code Review Tool",
    title: "RealTimePR",
    src: "/images/realtimepr.jpg",
    githubLink: "https://realtime-pr.vercel.app",
    liveLink: "https://realtime-pr.vercel.app",
  },
  {
    category: "PDF Utility Tool",
    title: "PDFMerger",
    src: "/images/pdfmerger.jpg",
    githubLink: "https://github.com/Jit017/pdfmerger",
    liveLink: "https://github.com/Jit017/pdfmerger",
  },
  {
    category: "URL Shortener",
    title: "LinkShrink",
    src: "/images/linkshrink.png",
    githubLink: "https://github.com/Jit017/linkshrink",
    liveLink: "https://linkshrink.vercel.app",
  },
  {
    category: "AI Content Creator",
    title: "YT Video to Blog Maker",
    src: "/images/ytblog.jpg",
    githubLink: "https://github.com/Jit017/ytvideotoblogmaker",
    liveLink: "https://ytvideotoblogmaker.vercel.app",
  },
  {
    category: "Healthcare Platform",
    title: "MediSync",
    src: "/images/medisync.jpg",
    githubLink: "https://github.com/Jit017/medisync",
    liveLink: "https://medisync.vercel.app",
  },
  {
    category: "AI Video Summarizer",
    title: "VideoSummarizer",
    src: "/images/videosummarizer.jpg",
    githubLink: "https://github.com/Jit017/videosummarizer",
    liveLink: "https://videosummarizer.vercel.app",
  }
];
