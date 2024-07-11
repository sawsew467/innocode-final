import React from "react";

function Content({ description }: any) {
  return (
    <div
      className="prose"
      dangerouslySetInnerHTML={{ __html: `<div>${description}</div>` }}
    />
  );
}

export default Content;
