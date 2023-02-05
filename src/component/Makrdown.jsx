import React, { useState } from "react";
import ReactMarkdown from "react-markdown";
import rehypeHighlight from "rehype-highlight";

const Makrdown = () => {
  const [markdown, setMakrkDown] = useState("#Welcome");
  return (
    <div>
      <div className="left_side">
        <textarea
          name=""
          value={markdown}
          onChange={(e) => setMakrkDown(e.target.value)}
          id=""
          cols="30"
          rows="10"
        ></textarea>
      </div>
      <div className="rigth_side">
        <ReactMarkdown rehypePlugins={[rehypeHighlight]}>
          {markdown}
        </ReactMarkdown>
      </div>
    </div>
  );
};

export default Makrdown;
