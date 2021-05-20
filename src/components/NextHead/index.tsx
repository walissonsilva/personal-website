import Head from "next/head";

interface NextHeadProps {
  title: string;
}

export default function NextHead({ title }: NextHeadProps) {
  return (
    <Head>
      <title>{title}</title>
    </Head>
  )
}