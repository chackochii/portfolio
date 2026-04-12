import type { Metadata } from "next";
import { Archivo_Black } from "next/font/google";
import "./globals.css";
import ElasticCursor from "@/components/ui/ElasticCursor";
import Particles from "@/components/Particles";
import { ThemeProvider } from "@/components/theme-provider";
import Header from "@/components/header/header";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Footer from "@/components/footer/footer";
import Script from "next/script";
import Preloader from "@/components/preloader";
import EasterEggs from "@/components/easter-eggs";
import { config } from "@/data/config";
import SocketContextProvider from "@/contexts/socketio";
import RemoteCursors from "@/components/realtime/remote-cursors";

export const metadata: Metadata = {
  metadataBase: new URL("https://edwinchacko.online"),
  title: config.title,
  description: config.description.long,
  keywords: config.keywords,
  authors: [{ name: config.author }],

  alternates: {
    canonical: "https://edwinchacko.online",
  },

  openGraph: {
    title: config.title,
    description: config.description.short,
    url: config.site,
    siteName: "Edwin Chacko Portfolio",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: config.ogImg,
        width: 1200,
        height: 630,
        alt: "Edwin Chacko Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: config.title,
    description: config.description.short,
    images: [config.ogImg],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  viewport: "width=device-width, initial-scale=1",
  themeColor: "#000000",
};

const archivoBlack = Archivo_Black({
  subsets: ["latin"],
  weight: "400",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={archivoBlack.className}>
      <head>
        <Script
          id="structured-data" // ✅ REQUIRED FIX
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Edwin Chacko",
              url: "https://edwinchacko.online",
              image: "https://edwinchacko.online/assets/seo/og-image.png",
              sameAs: [
                "https://github.com/chackochii",
                "https://www.linkedin.com/in/edwinchacko/",
              ],
              jobTitle: "MERN Stack Developer",
              description:
                "MERN Stack Developer specializing in React, Node.js, and AWS.",
              knowsAbout: [
                "React",
                "Next.js",
                "Node.js",
                "Express.js",
                "PostgreSQL",
                "AWS",
                "Nginx",
                "MERN Stack",
              ],
              worksFor: {
                "@type": "Organization",
                name: "Torcue",
              },
            }),
          }}
        />
      </head>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          disableTransitionOnChange
        >
          <Particles
            className="fixed inset-0 -z-10 animate-fade-in"
            quantity={100}
          />
          <Preloader>
            <SocketContextProvider>
              <RemoteCursors />

              <TooltipProvider>
                <Header />
                {children}
                <Footer />
              </TooltipProvider>
            </SocketContextProvider>
            <Toaster />
            <EasterEggs />
            <ElasticCursor />
          </Preloader>
        </ThemeProvider>
      </body>
    </html>
  );
}