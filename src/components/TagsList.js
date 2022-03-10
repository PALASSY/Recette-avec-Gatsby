import React from "react"
import { Link } from "gatsby"
import slugify from "slugify"

import setupTags from "../Utils/setupTags"

const TagsList = ({ recipes }) => {
  const newTags = setupTags(recipes)
  return (
    <div className="tag-container">
      <h4>Recettes</h4>
      <div className="tags-list">
        {newTags.map((tag, index) => {
          //Tag est un tableau
          const [text, number] = tag
          const slug = slugify(text, { lower: true })
          return (
            <Link to={`/tags/${slug}`} key={index}>
              {text} ({number})
            </Link>
          )
        })}
      </div>
    </div>
  )
}

export default TagsList
