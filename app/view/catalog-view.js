define(['jquery', 'app/collection/movie-collection', 'app/view/movie-view', 'app/utils'],
function ($, MovieCollection, MovieView, utils) {
  return Backbone.View.extend({
    tagName: 'ul',
    id: 'catalog',

    initialize: function () {
      this.render()
    },

    render: function () {
      var _this = this // avoing referencing global this inside loop
      _.each(utils.movies, function (movie) {
        _this.renderMovie(movie)
      })
      return this
    },

    renderMovie: function (movie) {
      var movieView = new MovieView({model: movie})
      this.$el.append(movieView.render().el)
      return this
    }
  })
})
