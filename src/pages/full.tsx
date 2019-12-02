import React from "react";
import { NextPage } from "next";
import dynamic from "next/dynamic";

const ConstellationWithNoSSR = dynamic(
  () => import("../components/trophies/constellation"),
  { ssr: false }
);

const Full: NextPage = () => {
  return (
    <main>
      <ConstellationWithNoSSR />
      <style jsx>{`
        main {
          height: 100vh;
          width: 100vw;
          overflow: hidden;
        }
      `}</style>
    </main>
  );
};

export default Full;
