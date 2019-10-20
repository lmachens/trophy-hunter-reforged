import React from "react";
import Head from "next/head";
import SideNav from "../components/general/sideNav";
import { NextPage } from "next";
import Header from "../components/general/header";
import SubNav from "../components/general/subNav";

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
        <div className="flex">
          <SubNav />
          <main>
            <h1>Welcome to Trophy Hunter!</h1>
          </main>
        </div>
      </div>
    </div>
    <style jsx>{`
      .layout {
        height: 100vh;
        background-repeat: none;
        background-image: linear-gradient(90deg, #1a2a3c, #4f5e6f),
          url(/images/bg.png);
        background-blend-mode: overlay;
      }

      .flex {
        display: flex;
        flex-grow: 1;
      }

      .column {
        flex-direction: column;
      }
    `}</style>
  </div>
);

export default Home;
