define(['jquery', 'catalogView', 'selectedMovieView', 'movieCollection', 'backbone'],
function ($, CatalogView, SelectedMovieView, MovieCollection, Backbone) {
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

    /**
     * This event creates a new html element with info about the movie selected and appends
     * to the body of the page
     * @param id - Id of the movie's model, provided by the eventAgreggator movieSelected event
     */
    movieSelected: function (id) {
      var selectedElement = movieCollection.get(id.toString())
      selectedElement.set({coverImage: 'http://placehold.it/500x400'})
      $('.selected-movie-container').remove()
      $('body').append(new SelectedMovieView({model: selectedElement}).render().el)
    }
  })
})
