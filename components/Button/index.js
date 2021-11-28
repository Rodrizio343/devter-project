import React from "react";
import { colors } from "../../styles/theme";

const Button = ({ children, onClick }) => {
  return (
    <>
      <button onClick={onClick}>{children}</button>
      <style jsx>{`
        button {
          align-items: center;
          background: ${colors.black};
          border-radius: 9999px;
          border: 0;
          color: #fff;
          cursor: pointer;
          display: flex;
          font-weight: 800;
          padding: 8px 24px;
          transition: opacity 0.3s ease;
        }
        button:hover {
          opacity: 0.7;
        }
        button > :global(svg) {
          margin-right: 8px;
        }
      `}</style>
    </>
  );
};

export default Button;
