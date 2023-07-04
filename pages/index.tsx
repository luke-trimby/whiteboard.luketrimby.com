import React from "react";
import Head from "next/head";
import Header from "../components/Header";
import { NextSeo } from "next-seo";
import Canvas from '../components/canvas/Canvas';

const Home = () => {
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
      <Canvas width={4096} height={4096} className={"absolute bg-white"} />
    </div>
  );
}

export default Home;
