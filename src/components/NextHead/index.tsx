import Head from "next/head";

interface NextHeadProps {
  title: string;
  description: string;
  ogImage: string;
  ogUrl?: string;
}

export default function NextHead({
  title,
  description,
  ogImage,
  ogUrl,
}: NextHeadProps) {
  return (
    <Head>
      <meta name="description" content={description} />

      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:url" content={`https://www.walissonsilva.com/${ogUrl}`} />
      <meta property="og:site_name" content="Walisson Silva" />
      <meta property="og:type" content="website" />

      <title>{title}</title>
    </Head>
  )
}