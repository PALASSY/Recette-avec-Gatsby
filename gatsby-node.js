const path = require("path")
const slugify = require("slugify")

exports.createPages = async ({ graphql, actions }) => {
  //Création des pages
  const { createPage } = actions

  //Faire la requêtes des tags dans les recettes
  const result = await graphql(`
    query GetRecipes {
      allContentfulVente {
        nodes {
          content {
            tags
          }
        }
      }
    }
  `)

  //Récupére les Data des recettes et créer les pages
  result.data.allContentfulVente.nodes.forEach(recipe => {
    //récupérer les tags
    recipe.content.tags.forEach(tag => {
      //Nettoyer le tag
      const tagSlug = slugify(tag, { lower: true })
      //Créer toutes les pages, la magie s'opère ici
      createPage({
        path: `/tags/${tagSlug}`,
        component: path.resolve(`src/templates/tag-template.js`),
        context: { tag: tag },
      })
    })
  })
}
