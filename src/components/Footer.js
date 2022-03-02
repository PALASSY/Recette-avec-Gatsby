import React from "react"

const Footer = () => {
  return (
    <footer className="page-footer">
      <p>
        &copy; {new Date().getFullYear()} <span>Cajouépicés </span>. Crée avec
        {""}
        <a href="https://www.gatsbyjs.com/"> Gatsby</a>
      </p>
    </footer>
  )
}

export default Footer
