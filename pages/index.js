import Head from "next/head";
import Header from "../components/Header";
import Main from "../components/Main";
import Footer from "../components/Footer";
import { NextSeo } from "next-seo";

export default function Home() {
  return (
    <div className="text-white bg-black">
      <NextSeo
        title="Sanaat | Sanat'ın diğer dili"
        description="Sanaat, insanlığın duygu ve düşünce dünyasını ifade etmenin eşsiz bir yoludur."
        canonical="sanaat.org"
      />
      <Head>
        <title>Sanaat</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Main />
      <Footer />
    </div>
  );
}
