import { DefaultSeo } from 'next-seo';

const SEO = {
  title: 'Mi Sitio Web',
  description: 'Descripción de mi sitio web.',
  openGraph: {
    type: 'website',
    locale: 'es_ES',
    url: 'http://localhost:3000',
    site_name: 'Mi Sitio Web',
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
