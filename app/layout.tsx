import Footer from "@/components/footer";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import Navbar from "@/components/navbar";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/toaster";
import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import NextTopLoader from "nextjs-toploader";
import "./globals.css";

const urbanist = Urbanist({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "DXN Ayacucho | Productos de Salud y Bienestar",
  description: "Bienvenido a DXN Ayacucho. Descubre nuestra gama de productos de salud y bienestar. Únete a nuestra red de afiliados y mejora tu calidad de vida.",
  openGraph: {
    title: "DXN Ayacucho | Productos de Salud y Bienestar",
    description: "Bienvenido a DXN Ayacucho. Descubre nuestra gama de productos de salud y bienestar. Únete a nuestra red de afiliados y mejora tu calidad de vida.",
    url: "https://dxnayacucho.vercel.app/",
    images: [
      {
        url: "https://dxnayacucho.vercel.app/bannerdxn.jpg",
        width: 1200,
        height: 630,
        alt: "Productos de salud y bienestar en DXN Ayacucho",
      },
    ],
    siteName: "DXN Ayacucho",
    locale: "es_ES",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://dxnayacucho.vercel.app/" />
        <link rel="icon" href="/favicon.ico" />
        <meta
          property="og:title"
          content="DXN Ayacucho | Productos de Salud y Bienestar"
        />
        <meta
          property="og:description"
          content="Bienvenido a DXN Ayacucho. Descubre nuestra gama de productos de salud y bienestar. Únete a nuestra red de afiliados y mejora tu calidad de vida."
        />
        <meta property="og:url" content="https://dxnayacucho.vercel.app" />
        <meta
          property="og:image"
          content="https://dxnayacucho.vercel.app/bannerdxn.jpg"
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content="DXN Ayacucho" />
        <meta property="og:locale" content="es_ES" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@tuTwitterHandle" />
        <meta name="google-site-verification" content="s7rwNtOiZLTsTJkm10Dj-B1CNfnpkSjX7iDkXcjEVF4" />
        <meta
          name="twitter:title"
          content="DXN Ayacucho | Productos de Salud y Bienestar"
        />
        <meta
          name="twitter:description"
          content="Bienvenido a DXN Ayacucho. Descubre nuestra gama de productos de salud y bienestar. Únete a nuestra red de afiliados y mejora tu calidad de vida."
        />
        <meta
          name="twitter:image"
          content="https://your-domain.com/twitter-image.jpg"
        />
        <meta property="fb:page_id" content="tuFacebookPageID" />
        <meta property="og:type" content="website" />
        <meta property="og:updated_time" content={new Date().toISOString()} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "DXN Ayacucho | Productos de Salud y Bienestar",
              url: "https://dxnayacucho.vercel.app/",
              logo: "https://dxnayacucho.vercel.app/favicon.ico",
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+51 930 134 408",
                contactType: "Customer Service",
              },
              sameAs: [
                "https://www.facebook.com/profile.php?id=100077437129801",
                "https://wa.me/51930134408",
              ],
            }),
          }}
        />
        
      </head>
      <body className={urbanist.className}>
      <GoogleAnalytics />
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <NextTopLoader
            color="#2299DD"
            initialPosition={0.08}
            crawlSpeed={200}
            height={3}
            crawl={true}
            showSpinner={true}
            easing="ease"
            speed={200}
            shadow="0 0 10px #2299DD,0 0 5px #2299DD"
          />
          <Navbar />
          {children}
          <Toaster />
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
