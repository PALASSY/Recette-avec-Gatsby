import React from "react"

import Layout from "../components/Layout"
import { Link, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import RecipesList from "../components/RecipesList"
import SEO from "../components/SEO"

const About = ({
  data: {
    allContentfulVente: { nodes: recipes },
  },
}) => {
  return (
    <Layout>
      <SEO title="About" description="Page About" />
      <main className="page">
        <section className="about-page">
          <article>
            <h2>Simply dummy text of the printing and typesetting industry.</h2>
            <p>
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC,
              making it over 2000 years old. Richard McClintock, a Latin
              professor at Hampden-Sydney College
            </p>
            <p>
              Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus
            </p>
            <Link to="/contact" className="btn">
              contact
            </Link>
          </article>
          <StaticImage
            src="../assets/images/about.jpeg"
            alt="Personne sale la nourriture dans un bol"
            className="about-img"
            placeholder="blurred"
          />
        </section>
        <section className="featured-recipes">
          <h4>Mes listes de recettes</h4>
          <RecipesList recipes={recipes} />
        </section>
      </main>
    </Layout>
  )
}

export const query = graphql`
  {
    allContentfulVente(
      sort: { fields: title, order: ASC }
      filter: { featured: { eq: true } }
    ) {
      nodes {
        id
        title
        cookTime
        prepTime
        image {
          gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
        }
      }
    }
  }
`

export default About
