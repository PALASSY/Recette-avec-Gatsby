import React from "react"

import TagsList from "./TagsList"
import RecipesList from "./RecipesList"

import { graphql, useStaticQuery } from "gatsby"

const query = graphql`
  {
    allContentfulVente(sort: { fields: title, order: ASC }) {
      nodes {
        id
        title
        cookTime
        prepTime
        content {
          tags
        }
        image {
          gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG)
        }
      }
    }
  }
`

const AllRecipes = () => {
  const data = useStaticQuery(query)
  //les recettes obtenues sont dans un tableau
  const recipes = data.allContentfulVente.nodes
  return (
    <section className="recipes-container">
      <TagsList recipes={recipes} />
      <RecipesList recipes={recipes} />
    </section>
  )
}

export default AllRecipes
