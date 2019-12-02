import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import GamesNavItem from "./gamesNavItem";

const links = [
  { href: "/", alt: "League of Legends", src: "/images/lol.png" },
  { href: "/", alt: "PUBG", src: "/images/pubg.png" },
  { href: "/", alt: "Fortnite", src: "/images/fortnite.png" }
];

const SideNav: React.FC = () => {
  const { pathname } = useRouter();

  return (
    <nav>
      <div className="menu"></div>
      <ul>
        {links.map(({ alt, href, src }) => (
          <GamesNavItem
            key={`nav-link-${href}-${alt}`}
            alt={alt}
            href={href}
            src={src}
            active={href === "/lol"}
          />
        ))}
      </ul>

      <style jsx>{`
        .menu {
          height: 65px;
          border-bottom: 1px solid rgba(91, 120, 155, 0.2);
          margin-bottom: 24px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        nav {
          background: rgba(9, 12, 16, 0.5);
          user-select: none;
          border-right: 1px solid rgba(91, 120, 155, 0.2);
          width: 80px;
        }

        ul {
          margin: 0;
          padding: 0;
        }

        li {
          display: block;
        }
      `}</style>
    </nav>
  );
};

export default SideNav;
