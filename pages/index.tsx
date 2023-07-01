import React from "react";
import Head from "next/head";
import Header from "../components/Header";
import Main from "../components/Main";
import { NextSeo } from "next-seo";

export default function Home() {
  return (
    <div className="text-black">
      <NextSeo
        title="Home: Luke Trimby - Digital Whiteboard"
        description="Luke Trimby's online Digital Whiteboard"
        canonical="https://whiteboard.luketrimby.com/"
        openGraph={{
          url: "https://whiteboard.luketrimby.com/",
        }}
      />
      <Head>
        <title>Luke Trimby - Digital Whiteboard</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Header />
      <Main />
    </div>
  );
}
