import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/toaster";
import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import NextTopLoader from "nextjs-toploader";
import "./globals.css";

const urbanist = Urbanist({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Avendaño | DXN",
  description: "Bienvenido a Avendaño venta de productos de DXN",
  openGraph: {
    title: "Avendaño | DXN",
    description: "Bienvenido a Cafetería Avendaño, tu destino para café fresco y deliciosas golosinas. Disfruta de una experiencia única en un ambiente acogedor.",
    url: "https://your-domain.com", // Reemplaza con tu dominio real
    images: [
      {
        url: "https://your-domain.com/og-image.jpg", // Reemplaza con la URL de tu imagen Open Graph
        width: 1200,
        height: 630,
        alt: "Café fresco y deliciosas golosinas en Cafetería Avendaño",
      },
    ],
    siteName: "Cafetería Avendaño",
    locale: "es_ES", // Establece la localización para Open Graph
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
        <meta property="og:title" content="Cafetería Avendaño | Café y Delicias" />
        <meta property="og:description" content="Bienvenido a Cafetería Avendaño, tu destino para café fresco y deliciosas golosinas. Disfruta de una experiencia única en un ambiente acogedor." />
        <meta property="og:url" content="https://your-domain.com" />
        <meta property="og:image" content="https://your-domain.com/og-image.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content="Cafetería Avendaño" />
        <meta property="og:locale" content="es_ES" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@tuTwitterHandle" />
        <meta name="twitter:title" content="Cafetería Avendaño | Café y Delicias" />
        <meta name="twitter:description" content="Bienvenido a Cafetería Avendaño, tu destino para café fresco y deliciosas golosinas. Disfruta de una experiencia única en un ambiente acogedor." />
        <meta name="twitter:image" content="https://your-domain.com/twitter-image.jpg" />
        <meta property="fb:page_id" content="tuFacebookPageID" /> {/* Opcional, reemplaza con tu ID de página de Facebook */}
        <meta property="og:type" content="website" /> {/* Especifica el tipo de contenido */}
        <meta property="og:updated_time" content={new Date().toISOString()} /> {/* Fecha de la última actualización */}
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={urbanist.className}>
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
