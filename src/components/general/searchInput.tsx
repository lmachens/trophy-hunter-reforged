import React from "react";

const SearchInput: React.FC<
  React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >
> = props => (
  <>
    <input {...props} />
    <style jsx>
      {`
        input {
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(91, 120, 155, 0.2);
          color: rgb(240, 240, 240);
        }
      `}
    </style>
  </>
);

export default SearchInput;
