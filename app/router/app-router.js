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
     * Because of a weird bug I had to fetch the collection again for a refresh on the page to work
     * @param id - Id of the movie's model, provided by the eventAgreggator movieSelected event
     */

    movieSelected: function (id) {
      MovieCollection.fetch({
        success: function (response) {
          var selectedElement = response.get(id.toString())
          selectedElement.set({coverImage: 'http://placehold.it/500x400'})
          $('.selected-movie-container').remove()
          $('body').append(new SelectedMovieView({model: selectedElement}).render().el)
        }
      })
    }
  })
})
