import React from "react";
import { graphql } from "gatsby";

const BlogPost = ({ data }) => {
  const post = data.allFile.edges[0].node.fields.postData;

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.date}</p>
      <p>{post.body}</p>
      <pre>
        <code>{post.codeSnippet}</code>
      </pre>
    </div>
  );
};

export const query = graphql`
query($slug: String!) {
  allFile(filter: { name: { eq: $slug } }) {
    edges {
      node {
        fields {
          postData {
            title
            date
            body
            codeSnippet
          }
        }
      }
    }
  }
}
`;

export default BlogPost;