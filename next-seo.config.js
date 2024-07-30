import { DefaultSeo } from 'next-seo';

const SEO = {
  title: 'DXN Ayacucho | Productos de Salud y Bienestar',
  description: 'Bienvenido a DXN Ayacucho. Descubre nuestra gama de productos de salud y bienestar. Únete a nuestra red de afiliados y mejora tu calidad de vida.',
  openGraph: {
    type: 'website',
    locale: 'es_ES',
    url: 'https://dxnayacucho.vercel.app/',
    site_name: 'DXN Ayacucho | Productos de Salud y Bienestar',
  },
};

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <DefaultSeo {...SEO} />
      <Component {...pageProps} />
    </>
  );
}
