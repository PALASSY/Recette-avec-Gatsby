import React, { Component } from "react"

import Layout from "../components/Layout"
import { Link, graphql } from "gatsby"
import RecipesList from "../components/RecipesList"
import SEO from "../components/SEO"

const Contact = ({
  data: {
    allContentfulVente: { nodes: recipes },
  },
}) => {
  return (
    <Layout>
      <SEO title="Contact" />
      <main className="page">
        <section className="contact-page">
          <article className="contact-info">
            <h3>Want To Get Intouch?</h3>
            <p>
              Waistcoat farm-to-table next level, freegan chillwave truffaut
              cliche franzen distillery kale chips paleo shabby chic venmo
              flannel. Brooklyn polaroid vaporware chartreuse.
            </p>
            <p>Dummy text? More like dummy thicc text, amirite?</p>
            <p>
              Raclette health goth cloud bread adaptogen. PBR&B chartreuse hot
              chicken humblebrag.
            </p>
          </article>
          <article>
            <form
              action="https://formspree.io/f/mwkybzqb"
              method="POST"
              className="form contact-form"
            >
              <div className="form-row">
                <label htmlFor="name">Votre nom</label>
                <input type="text" name="name" id="name" />
              </div>
              <div className="form-row">
                <label htmlFor="email">Votre email</label>
                <input type="text" name="email" id="email" />
              </div>
              <div className="form-row">
                <label htmlFor="message">Message</label>
                <textarea name="message" id="message"></textarea>
              </div>
              <button type="submit" className="btn block">
                Valider
              </button>
            </form>
          </article>
        </section>
        <section className="featured-recipes">
          <h4>Ma liste de recettes</h4>
          <RecipesList recipes={recipes} />
        </section>
        <Link to="/" />
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

export default Contact
