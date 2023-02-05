import React, { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import rehypeHighlight from "rehype-highlight";
import "./Markdown.css";
import { Light as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/hljs";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";

const Makrdown = () => {
  const [markdown, setMakrkDown] = useState("");
  const [show, setShow] = useState(true);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    (() => {
      window.addEventListener("resize", () => {
        setWindowWidth(window.innerWidth);
      });

      return () => {
        window.removeEventListener("resize", () => {
          setWindowWidth(window.innerWidth);
        });
      };
    })();
  }, [windowWidth, window.innerWidth]);
  console.log(windowWidth);
  return (
    <div>
      <div className="switchButton">
        {windowWidth < 768 && (
          <div className="buttons">
            {!show ? (
              <button onClick={() => setShow(!show)}>Editor</button>
            ) : (
              <button onClick={() => setShow(!show)}>Preview</button>
            )}
          </div>
        )}
      </div>

      {windowWidth < 768 ? (
        <div className="outer_container">
          <div className="inner_container">
            {show ? (
              <div
                className="left_side"
                style={{
                  height: "100%",
                }}
              >
                <textarea
                  name=""
                  value={markdown}
                  onChange={(e) => setMakrkDown(e.target.value)}
                  className=""
                ></textarea>
              </div>
            ) : (
              <div className="rigth_side" style={{ height: "100%" }}>
                <ReactMarkdown
                  children={markdown}
                  rehypePlugins={[rehypeRaw]}
                  remarkPlugins={[[remarkGfm, { singleTilde: true }]]}
                  components={{
                    code({ node, inline, className, children, ...props }) {
                      const match = /language-(\w+)/.exec(className || "");
                      return !inline && match ? (
                        <SyntaxHighlighter
                          children={String(children).replace(/\n$/, "")}
                          style={dracula}
                          language={match[1]}
                          PreTag="div"
                          {...props}
                        />
                      ) : (
                        <code className={className} {...props}>
                          {children}
                        </code>
                      );
                    },
                  }}
                />
              </div>
            )}
          </div>
        </div>
      ) : (
        <div className="outer_container">
          <div className="inner_container row">
            <div className="left_side col-12 col-md-6">
              <textarea
                name=""
                value={markdown}
                onChange={(e) => setMakrkDown(e.target.value)}
                className=""
              ></textarea>
            </div>

            <div className="rigth_side col-12 col-md-6">
              <ReactMarkdown
                children={markdown}
                rehypePlugins={[rehypeRaw]}
                remarkPlugins={[[remarkGfm, { singleTilde: true }]]}
                components={{
                  code({ node, inline, className, children, ...props }) {
                    const match = /language-(\w+)/.exec(className || "");
                    return !inline && match ? (
                      <SyntaxHighlighter
                        children={String(children).replace(/\n$/, "")}
                        style={dracula}
                        language={match[1]}
                        PreTag="div"
                        {...props}
                      />
                    ) : (
                      <code className={className} {...props}>
                        {children}
                      </code>
                    );
                  },
                }}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Makrdown;
