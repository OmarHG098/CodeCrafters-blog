import React from "react";
import { Link, graphql } from "gatsby";


const HomePage = ({ data }) => {
  const posts = data.allFile.edges;

  return (
    <div className="container my-5">
      <h1 className="text-center mb-4">Contenido del Blog</h1>
      <div className="row">
        {posts.map(({ node }) => {
          const post = node.fields.postData;
          return (
            <div key={post.title} className="col-md-6 col-lg-4 mb-4">
              <div className="card h-100 shadow-sm">
                <div className="card-body">
                  <h2 className="card-title h5">{post.title}</h2>
                  <p className="card-subtitle mb-2 text-muted">{post.date}</p>
                  <p className="card-text">{post.body.substring(0, 100)}...</p>
                  <Link to={`/blog/${node.name}`} className="btn btn-primary">
                    Leer más
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
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
