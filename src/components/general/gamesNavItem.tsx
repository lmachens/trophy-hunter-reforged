import React from "react";
import Link from "next/link";
import ActiveBar from "./activeBar";

interface GamesNavItemProps {
  active?: boolean;
  href: string;
  alt: string;
  src: string;
}

const GamesNavItem: React.FC<GamesNavItemProps> = ({
  active,
  href,
  alt,
  src
}) => (
  <Link href={href}>
    <li>
      {active && <ActiveBar />}

      <img alt={alt} src={src} />

      <style jsx>{`
        li {
          display: flex;
          height: 65px;
          position: relative;
          align-items: center;
          justify-content: center;
          cursor: pointer;
        }

        li:hover {
          background: linear-gradient(
            90deg,
            rgba(31, 43, 62, 0.75),
            rgb(57, 73, 93)
          );
        }
      `}</style>
      <style jsx>{`
        li {
          background: ${active
            ? `linear-gradient(
              90deg,
              rgba(31, 43, 62, 0.3),
              rgba(57, 73, 93, 0.7)
            );`
            : "inherit"};
        }
      `}</style>
    </li>
  </Link>
);

export default GamesNavItem;
