import React from "react";
import { useRouter } from "next/router";
import MenuNavItem from "./menuNavItem";

const links = [
  { href: "/lol/trophies", title: "Trophies" },
  { href: "/lol/matches", title: "Matches" },
  {
    href: "/lol/guides",
    title: "Guides",
    sub: [
      { href: "/lol/guides/champs", title: "Champions" },
      { href: "/lol/guides/matchup", title: "Matchup" }
    ]
  }
];

const SubNav: React.FC = () => {
  const { pathname } = useRouter();

  return (
    <nav>
      <ul>
        {links.map(({ href, title, sub }) => (
          <>
            <MenuNavItem
              key={`nav-link-${href}-${title}`}
              href={href}
              active={href === "/lol/trophies"}
            >
              {title}
            </MenuNavItem>
            {sub &&
              sub.map(({ href, title }) => (
                <MenuNavItem
                  key={`nav-link-${href}-${title}`}
                  href={href}
                  indent
                >
                  {title}
                </MenuNavItem>
              ))}
          </>
        ))}
      </ul>

      <style jsx>{`
        nav {
          user-select: none;
          background: rgba(9, 14, 20, 0.5);
          border-right: 1px solid rgba(91, 120, 155, 0.2);
          padding-top: 36px;
          width: 200px;
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

export default SubNav;
