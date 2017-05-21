define(['jquery', 'catalogView', 'selectedMovieView', 'movieCollection', 'Backbone'],
function ($, CatalogView, SelectedMovieView, MovieCollection, Backbone) {
  return Backbone.Router.extend({
    routes: {
      'catalog': 'displayCatalog',
      'catalog/:id': 'movieSelected'
    },

    displayCatalog: function () {
      MovieCollection.fetch({
        success: function (response) {
          $('body').append(new CatalogView({collection: response.toJSON()}).el)
        }
      })
    },

    /**
     * This event creates a new html element with info about the movie selected and appends
     * to the body of the page
     * @param id - Id of the movie's model, provided by the eventAgreggator movieSelected event
     */

    movieSelected: function (id) {
      $('.selected-movie-container').remove()
      $('body').append(new SelectedMovieView({model: MovieCollection.get(id.toString())}).render().el)
    }
  })
})
