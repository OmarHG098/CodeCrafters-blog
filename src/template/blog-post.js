import React, { useEffect } from "react";
import { graphql } from "gatsby";
import { Helmet } from "react-helmet";
import hljs from "highlight.js"; 
import "highlight.js/styles/github-dark.css";


const BlogPost = ({ data }) => {
  const post = data.allFile.edges[0].node.fields.postData;

  useEffect(() => {
    hljs.highlightAll(); // Aplica el resaltado a todos los bloques de código
  }, []); 

  return (
    <div className="container my-5">
       <Helmet>
        <title>{post.title}</title>
        <meta name="description" content={post.body.substring(0, 160)} />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.body.substring(0, 160)} />
        <meta property="og:type" content="article" />
      </Helmet>
      <div className="row justify-content-center">
        <div className="col-lg-8">
          <h1 className="mb-4">{post.title}</h1>
          <p className="text-muted mb-4">{post.date}</p>
          <p className="lead mb-4 text-justify-center">{post.body}</p>
          <div className="card mb-4">
            <div className="card-body">
              <pre className="m-0">
                <code className={post.language}>{post.codeSnippet}</code>
              </pre>
            </div>
          </div>
        </div>
      </div>
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
