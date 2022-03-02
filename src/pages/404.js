import React from "react"

import Layout from "../components/Layout"
import { Link } from "gatsby"

const Error = () => {
  return (
    <Layout>
      <main className="error-page">
        <section>
          <h1>404</h1>
          <h3>Page non trouvée</h3>
          <Link to="/">Retour page Home</Link>
        </section>
      </main>
    </Layout>
  )
}

export default Error
