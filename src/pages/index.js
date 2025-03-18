import React from "react";
import { Link, graphql } from "gatsby";


const HomePage = ({ data }) => {
  const posts = data.allFile.edges;

  return (
    <div>
      <h1>Contenido</h1>
      <ul>
        {posts.map(({ node }) => {
          const post = node.fields.postData;
          return (
            <li key={post.title}>
              <Link to={`/blog/${node.name}`}>
                <h2>{post.title}</h2>
                <p>{post.date}</p>
                <p>{post.body.substring(0, 100)}...</p> {/* Muestra un resumen del contenido */}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export const query = graphql`
  query {
    allFile {
      edges {
        node {
          name
          fields {
            postData {
              title
              date
              body
            }
          }
        }
      }
    }
  }
`;

export default HomePage;
