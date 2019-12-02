import React from "react";
import SearchInput from "./searchInput";

const Header: React.FC = () => {
  const [searchValue, setSearchValue] = React.useState("");

  return (
    <header>
      <img src="/images/logo.png" alt="Trophy Hunter" />
      <style jsx>{`
        header {
          height: 65px;
          border-bottom: 1px solid rgba(91, 120, 155, 0.2);
          display: flex;
          align-items: center;
        }

        img {
          margin-left: 16px;
        }

        .search {
          height: 40px;
          width: 120px;
        }
      `}</style>
    </header>
  );
};

export default Header;
