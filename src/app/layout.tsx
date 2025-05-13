import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/themeprovider";
import Footer from "@/components/footer";
import { ScrollToTopButton } from "@/components/scroll-to-top-button";
import { Toaster } from "@/components/ui/sonner";
import TextSVG from "@/components/ui/text-hover-effect";

const manrope = Manrope({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://prithwijit.tech"),
  title: "Prithwijit Choudhury | Portfolio",
  description:
    "Discover the diverse skills and projects of Prithwijit Choudhury (PC), an experienced full stack developer proficient in web development, software engineering, and more.",
  keywords: [
    "prithwijit choudhury",
    "pc",
    "full stack developer",
    "portfolio",
    "web development",
    "software engineering",
    "javascript",
    "typescript",
    "react",
    "nextjs",
    "nodejs",
    "express",
    "mongodb",
    "postgresql",
    "css",
    "html",
    "tailwindcss",
    "git",
    "github",
    "docker",
    "aws",
    "devops",
  ],
  openGraph: {
    title: "Prithwijit Choudhury | Portfolio",
    description:
      "Discover the diverse skills and projects of Prithwijit Choudhury (PC), an experienced full stack developer proficient in web development, software engineering, and more.",
    url: "https://prithwijit.tech",
    type: "website",
    images: [
      { url: "/images/cover.png", width: 1200, height: 630, alt: "Prithwijit's Portfolio" },
      { url: "/images/prithwijit-01.jpg", width: 800, height: 418, alt: "Prithwijit's Portfolio" },
      { url: "/images/prithwijit-02.png", width: 800, height: 418, alt: "Prithwijit's Portfolio" },
      { url: "/images/prithwijit-03.JPG", width: 800, height: 418, alt: "Prithwijit's Portfolio" },
      { url: "/images/prithwijit-04.png", width: 800, height: 418, alt: "Prithwijit's Portfolio" },
      { url: "/images/pc.jpg", width: 800, height: 418, alt: "Prithwijit's Portfolio" },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@prithwijit",
    title: "Prithwijit Choudhury | Portfolio",
    description: "Portfolio of a Full Stack Developer.",
    images: [
      "/images/cover.png",
      "/images/prithwijit-01.jpg",
      "/images/prithwijit-02.png",
      "/images/prithwijit-03.JPG",
      "/images/prithwijit-04.png",
      "/images/pc.jpg",
    ],
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon.ico", type: "image/x-icon" }
    ],
    apple: "/images/apple-touch-icon.png",
  },
  alternates: {
    canonical: "https://prithwijit.tech",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  authors: [
    {
      name: "Prithwijit Choudhury",
      url: "https://prithwijit.tech",
    },
  ],
  creator: "Prithwijit Choudhury",
  publisher: "Prithwijit Choudhury",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0f172a" },
  ],
  category: "technology",
  viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Prithwijit Choudhury",
              url: "https://prithwijit.tech",
              image: "https://prithwijit.tech/images/cover.png",
              sameAs: [
                "https://github.com/Jit017",
                "https://linkedin.com/in/prithwijit-choudhury-7a299b273",
                "https://twitter.com/Prithwijit8",
              ],
              jobTitle: "Full Stack Developer",
              worksFor: {
                "@type": "Organization",
                name: "Freelancer / Open Source",
              },
            }),
          }}
        />
      </head>
      <body className={manrope.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster  />
        </ThemeProvider>
        <Footer />
        <TextSVG text="Prithwijit" />
        <ScrollToTopButton />
      </body>
    </html>
  );
}
