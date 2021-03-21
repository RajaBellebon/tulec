import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';

import Layout from '../components/layout';

const getImages = () => {
  const { allFile } = useStaticQuery(
    graphql`
      query {
        allFile(filter: { sourceInstanceName: { eq: "isreal" } }) {
          edges {
            node {
              childImageSharp {
                fluid(maxWidth: 800) {
                  ...GatsbyImageSharpFluid
                }
              }
              name
            }
          }
        }
      }
    `,
  );
  return allFile.edges;
};

const Nepal = () => {
  const images = getImages();
  return (
    <Layout>
      <h2>🇳🇵 Nepal: Everest Base Camp 🇳🇵</h2>
      <p>⛰️ Let's put some nice pics from our recent travel in Nepal</p>

      {images.map((img: any) => {
        return (
          <Img fluid={img.node.childImageSharp.fluid}  alt={img.node.name} key={img.node.name} />
        );
      })}
    </Layout>
  );
};

export default Nepal;
