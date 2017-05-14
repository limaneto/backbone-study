define(['backbone', 'jquery', 'app/view/Catalog', 'app/view/SelectedMovie', 'app/collection/Movie', 'app/utils'],
function (Backbone, $, CatalogView, SelectedMovieView, MovieCollection, utils) {
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
          $('#catalog-sidebar').append(new CatalogView().el)
        }
      })
    },

    movieSelected: function (id) {
      var selectedElement = movieCollection.get(id.toString())
      $('.selected-movie-container').remove()
      $('body').append(new SelectedMovieView({model: selectedElement}).render().el)
    }
  })
})
