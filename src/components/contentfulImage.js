import { graphql, useStaticQuery } from "gatsby"

export default assetUrl => {
    const { allContentAsset } = useStaticQuery(
        graphql`
        query MyQuery {
            allContentfulAsset {
              nodes {
                file {
                  url
                }
                fluid(quality: 90, maxWidth: 300, maxHeight: 400) {
                  src
                }
              }
            }
          }
        `
    )
}