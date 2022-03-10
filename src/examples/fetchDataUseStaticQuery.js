import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const getData = graphql`
  query {
    site {
      info: siteMetadata {
        title
        description
        author
        person {
          age
          name
        }
        simpleData
        complexeData {
          age
          name
        }
      }
    }
  }
`

const FetchDataUseStaticQuery = () => {
  // console.log(useStaticQuery(getData))
  // const data = useStaticQuery(getData)
  const {
    site: {
      info: { title },
    },
  } = useStaticQuery(getData)
  return <h1>{title}</h1>
}

export default FetchDataUseStaticQuery
