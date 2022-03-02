import React, { Component } from "react"

import Layout from "../components/Layout"
// import { Link } from "gatsby"

export default class contact extends Component {
  render() {
    return (
      <Layout>
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
              <form action="" className="form contact-form">
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
        </main>
      </Layout>
    )
  }
}
