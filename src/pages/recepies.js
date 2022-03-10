import React from "react"

import Layout from "../components/Layout"
import { Link } from "gatsby"
import AllRecipes from "../components/AllRecipes"
import SEO from "../components/SEO"

const Recepies = () => {
  return (
    <Layout>
      <SEO title="Recipes" />
      <main className="page">
        <AllRecipes />
        <Link to="/">Retour page Home</Link>
      </main>
    </Layout>
  )
}

export default Recepies
