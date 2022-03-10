import React from "react"

import Layout from "../components/Layout"
import { Link, graphql } from "gatsby"
import setupTags from "../Utils/setupTags"
import slugify from "slugify"
import SEO from "../components/SEO"

const Tags = ({
  data: {
    allContentfulVente: { nodes: tags },
  },
}) => {
  //Créer un nouvel Objet Tags à partir de setupTags
  const newTags = setupTags(tags)
  return (
    <Layout>
      <SEO title="Tags" />
      <main className="page">
        <section className="tags-page">
          {newTags.map((tag, index) => {
            //Tag est un tableau
            const [text, number] = tag
            const slug = slugify(text, { lower: true })
            return (
              <Link to={`/tags/${slug}`} key={index} className="tag">
                <h5>{text}</h5>
                <p>{number} recette</p>
              </Link>
            )
          })}
        </section>
      </main>
    </Layout>
  )
}

export const query = graphql`
  {
    allContentfulVente {
      nodes {
        content {
          tags
        }
      }
    }
  }
`

export default Tags
