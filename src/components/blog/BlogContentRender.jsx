import React from "react";

const BlogContentRender = ({ blocks = [] }) => {
  if (!Array.isArray(blocks) || blocks.length === 0) return null;

  return (
    <>
      {blocks.map((block, idx) => {
        if (!block || !block.type) return null;

        switch (block.type) {
          case "p":
            return <p key={idx}>{block.text}</p>;
          case "h2":
            return <h2 key={idx}>{block.text}</h2>;
          case "h3":
            return <h3 key={idx}>{block.text}</h3>;
          case "blockquote":
            return <blockquote key={idx}>{block.text}</blockquote>;
          case "ul":
            return (
              <ul key={idx}>
                {(block.items || []).map((item, i) => <li key={i}>{item}</li>)}
              </ul>
            );
          case "ol":
            return (
              <ol key={idx}>
                {(block.items || []).map((item, i) => <li key={i}>{item}</li>)}
              </ol>
            );
          case "img":
            return (
              <figure key={idx}>
                <img src={block.src} alt={block.alt || ""} loading="lazy" />
                {block.caption && <figcaption>{block.caption}</figcaption>}
              </figure>
            );
          case "hr":
            return <hr key={idx} />;
          default:
            return null;
        }
      })}
    </>
  );
};

export default BlogContentRender;
