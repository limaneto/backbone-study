define(['jquery', 'catalogView', 'selectedMovieView', 'movieCollection', 'backbone'],
function ($, CatalogView, SelectedMovieView, MovieCollection, Backbone) {
  var movieCollection = ''
  return Backbone.Router.extend({
    routes: {
      'catalog': 'displayCatalog',
      'catalog/:id': 'movieSelected'
    },

    initialize: function () {
      var _this = this
      movieCollection = new MovieCollection()
      movieCollection.fetch({
        success: function (response) {
          _this.movieCollection = response
          _this.displayCatalog(response.toJSON())
        }
      })
    },

    displayCatalog: function (catalog) {
      $('body').append(new CatalogView({collection: catalog}).el)
    },

    /**
     * This event creates a new html element with info about the movie selected and appends
     * to the body of the page
     * Because of a weird bug I had to fetch the collection again for a refresh on the page to work
     * @param id - Id of the movie's model, provided by the eventAgreggator movieSelected event
     */
    movieSelected: function (id) {
      movieCollection = new MovieCollection()
      movieCollection.fetch({
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
