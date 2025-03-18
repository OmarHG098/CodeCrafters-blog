const path = require("path");
const fs = require("fs");

exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions;

  if (node.internal.type === "File" && node.sourceInstanceName === "posts") {
    const filePath = node.absolutePath;
    const fileContent = fs.readFileSync(filePath, "utf-8");
    const postData = JSON.parse(fileContent);

    createNodeField({
      node,
      name: "postData",
      value: postData,
    });
  }
};

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const result = await graphql(`
    query {
      allFile(filter: { sourceInstanceName: { eq: "posts" } }) {
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
            name
          }
        }
      }
    }
  `);
  if (result.errors) {
    console.error(result.errors);
    throw new Error("Error al consultar los posts");
  }
  result.data.allFile.edges.forEach(({ node }) => {
    const post = node.fields.postData;
    createPage({
      path: `/blog/${node.name}`,
      component: path.resolve(`./src/template/blog-post.js`),
      context: {
        slug: node.name,
      },
    });
  });
};
