import React from "react"
import Styled from "styled-components"
import big from "../assets/images/big.jpg"
import { StaticImage } from "gatsby-plugin-image"

const Images = () => {
  return (
    <div>
      <Wrapper>
        <h1>Images Gatsby</h1>
        <article>
          <h4>contrainte</h4>
          <StaticImage
            src="../assets/images/recipes/recipe-1.jpeg"
            height={400}
            placeholder="tracedSVG"
            layout="constrained"
            className="exemple"
            as="section"
          />
        </article>
      </Wrapper>
    </div>
  )
}

const Wrapper = Styled.section`
width:70vw;
margin: 0 auto;
article{
  border:2px solid red;
  margin-bottom: 5rem;
}
.exemple{
  border-radius: 1rem;
}
`

export default Images
