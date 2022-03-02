import React from "react"

import Layout from "../components/Layout"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const About = () => {
  return (
    <Layout>
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
      </main>
    </Layout>
  )
}

export default About
