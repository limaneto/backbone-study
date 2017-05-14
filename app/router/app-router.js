define(['jquery', 'app/view/catalog-view', 'app/view/selected-movie-view', 'app/collection/movie-collection', 'app/utils'],
function ($, CatalogView, SelectedMovieView, MovieCollection, utils) {
  var movieCollection = ''
  return Backbone.Router.extend({
    routes: {
      'catalog': 'displayCatalog',
      'catalog/:id': 'movieSelected'
    },

    displayCatalog: function () {
      movieCollection = new MovieCollection()
      movieCollection.fetch({
        success: function () {
          utils.movies = movieCollection.toJSON()
          $('body').append(new CatalogView().el)
        }
      })
    },

    movieSelected: function (id) {
      var selectedElement = movieCollection.get(id.toString())
      console.log(selectedElement.set({coverImage: 'http://placehold.it/500x400'}))
      $('.selected-movie-container').remove()
      $('body').append(new SelectedMovieView({model: selectedElement}).render().el)
    }
  })
})
