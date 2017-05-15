define(['jquery', 'movieCollection', 'movieView', 'Backbone'],
function ($, MovieCollection, MovieView, Backbone) {
  return Backbone.View.extend({
    tagName: 'div',
    id: 'catalog-sidebar',

    initialize: function () {
      this.render()
    },

    render: function () {
      var _this = this
      _.each(_this.collection, function (movie) {
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
