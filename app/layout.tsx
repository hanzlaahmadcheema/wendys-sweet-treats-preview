import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { DisclaimerBanner } from "@/components/DisclaimerBanner";
import { MobileActionBar } from "@/components/MobileActionBar";

export const metadata: Metadata = {
  title: "Wendy's Sweet Treats — Home Baker in Kyle, Texas",
  description:
    "Wendy's Sweet Treats is a home bakery in Kyle, Texas. Empanadas, custom cakes, cupcakes, hojarascas norteñas, mini cookies and the Golosa Box — all made from scratch and ordered by DM on Facebook.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <meta name="theme-color" content="#33101d" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,500;0,9..144,600;1,9..144,500&family=Inter:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: "document.documentElement.classList.add('js')",
          }}
        />
      </head>
      <body>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-berry-800 focus:px-4 focus:py-3 focus:font-semibold focus:text-white"
        >
          Skip to main content
        </a>
        <DisclaimerBanner />
        <Header />
        <main id="main" className="pb-20 lg:pb-0">
          {children}
        </main>
        <Footer />
        <MobileActionBar />
      </body>
    </html>
  );
}
