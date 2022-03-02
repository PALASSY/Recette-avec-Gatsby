import React from "react"

import Layout from "../components/Layout"
import { StaticImage } from "gatsby-plugin-image"

export default function Home() {
  return (
    <Layout>
      <main className="page">
        <header className="hero">
          <StaticImage
            src="../assets/images/main.jpeg"
            alt="table de cuisine"
            className="hero-img"
            placeholder="tracedSVG"
            layout="fullWidth"
          />
          <div className="hero-container">
            <div className="hero-text">
              <h1>Cajoux épicés</h1>
              <h4>produits créol</h4>
            </div>
          </div>
        </header>
      </main>
    </Layout>
  )
}
