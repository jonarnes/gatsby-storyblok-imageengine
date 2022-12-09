import * as React from "react"
import { graphql, HeadFC, PageProps, useStaticQuery } from "gatsby"
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image"


export default function IndexPage({ data }) {
    console.log("data: ", data)
    return (
      <div>
      <p>Image from Storyblok
      <GatsbyImage
        image={data.storyblok.edges[1].node.childImageEngineAsset.gatsbyImageData}
        alt="sanity"
      />
      </p>
      </div>
    )
  }
  
  export const query = graphql`
    query {
      storyblok:   allStoryblokEntry {
        edges {
          node {
            childImageEngineAsset {
              gatsbyImageData(width:400, height:300)
            }
          }
        }
      }
  }
  `