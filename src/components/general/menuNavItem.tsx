import React from "react";
import Link from "next/link";
import ActiveBar from "./activeBar";

interface MenuNavItemProps {
  active?: boolean;
  href: string;
  indent?: boolean;
}

const MenuNavItem: React.FC<MenuNavItemProps> = ({
  active,
  href,
  children,
  indent
}) => (
  <>
    <Link href={href}>
      <li>
        {active && <ActiveBar />}
        {children}

        <style jsx>{`
          li {
            display: flex;
            height: 40px;
            position: relative;
            align-items: center;
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
            padding-left: ${indent ? "50px" : "20px"};
            color: ${active ? "inherit" : "rgb(129, 129, 129)"};
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
  </>
);

export default MenuNavItem;
