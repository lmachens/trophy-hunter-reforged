import React from "react";
import Head from "next/head";
import SideNav from "../components/general/sideNav";
import { NextPage } from "next";
import Header from "../components/general/header";
import SubNav from "../components/general/subNav";
import dynamic from "next/dynamic";

const ConstellationWithNoSSR = dynamic(
  () => import("../components/trophies/constellation"),
  { ssr: false }
);

const Home: NextPage = () => (
  <div>
    <Head>
      <title>Home</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <div className="layout flex">
      <SideNav />
      <div className="flex column">
        <Header />
        <main className="flex">
          <ConstellationWithNoSSR />
        </main>
      </div>
    </div>
    <style jsx>{`
      .layout {
        height: 100vh;
        background-repeat: no-repeat;
        background-size: cover;
        background-image: linear-gradient(90deg, #1a2a3c, #4f5e6f),
          url(/images/bg.png);
        background-blend-mode: overlay;
      }

      .flex {
        display: flex;
        flex-grow: 1;
        position: relative;
        overflow: hidden;
      }

      .column {
        flex-direction: column;
      }

      main {
        width: 100%;
      }
    `}</style>
  </div>
);

export default Home;
