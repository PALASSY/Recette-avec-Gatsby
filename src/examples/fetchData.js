import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const ComponentName = () => {
  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
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
  `)
  // return <pre>{JSON.stringify(data, null, 4)}</pre>
  return (
    <div>
      <h1>{data.site.siteMetadata.person.name}</h1>
      <div>
        {data.site.siteMetadata.complexeData.map((item, index) => {
          return (
            <p key={index}>
              {item.name} {item.age} ans
            </p>
          )
        })}
      </div>
    </div>
  )
}

export default ComponentName
