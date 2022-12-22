import { Children } from "react";

function Title({ children, as }) {
  const Tag = as;
  return (
    <>
      <Tag>{children}</Tag>
      <style jsx>{`
        ${Tag} {
          color: red;
        }
      `}</style>
    </>
  );
}

export default Title;
