define(['jquery', 'catalogView', 'selectedMovieView', 'movieCollection'],
function ($, CatalogView, SelectedMovieView, MovieCollection) {
  var movieCollection = ''
  return Backbone.Router.extend({
    routes: {
      'catalog': 'displayCatalog',
      'catalog/:id': 'movieSelected'
    },

    displayCatalog: function () {
      movieCollection = new MovieCollection()
      movieCollection.fetch({
        success: function (response) {
          var catalog = new CatalogView({collection: response.toJSON()})
          $('body').append(catalog.el)
        }
      })
    },

    movieSelected: function (id) {
      var selectedElement = movieCollection.get(id.toString())
      selectedElement.set({coverImage: 'http://placehold.it/500x400'})
      $('.selected-movie-container').remove()
      $('body').append(new SelectedMovieView({model: selectedElement}).render().el)
    }
  })
})
