import Head from "next/head";

export const PageHead = ({ title }: { title: string }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content="Toskan kotisivu" />
      <meta name="keywords" content="Next.js, React, JavaScript" />
      <meta name="author" content="Toska" />
    </Head>
  );
};
