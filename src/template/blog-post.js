import React, { useEffect } from "react";
import { graphql } from "gatsby";
import hljs from "highlight.js"; 
import "highlight.js/styles/github-dark.css";


const BlogPost = ({ data }) => {
  const post = data.allFile.edges[0].node.fields.postData;

  useEffect(() => {
    hljs.highlightAll(); // Aplica el resaltado a todos los bloques de código
  }, []); 

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.date}</p>
      <p>{post.body}</p>
      <pre>
        <code className={post.language}>{post.codeSnippet}</code>
      </pre>
    </div>
  );
};

export const query = graphql`
  query ($slug: String!) {
    allFile(filter: { name: { eq: $slug } }) {
      edges {
        node {
          fields {
            postData {
              title
              date
              body
              codeSnippet
              language
            }
          }
        }
      }
    }
  }
`;

export default BlogPost;
