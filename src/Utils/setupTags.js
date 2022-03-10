const setupTags = recipes => {
  const allTags = {}

  recipes.forEach(recipe => {
    recipe.content.tags.forEach(tag => {
      if (allTags[tag]) {
        allTags[tag] += 1
      } else {
        allTags[tag] = 1
      }
    })
  })
  // console.log(allTags)

  const newTags = Object.entries(allTags).sort((a, b) => {
    const [firstTag] = a
    const [secondTag] = b
    // console.log(firstTag)
    return firstTag.localeCompare(secondTag)
  })
  console.log("#################")
  console.log(newTags)
  console.log("#################")

  return newTags
}

export default setupTags
