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

      // is better to save all the rendered views into a array and append to the view than
      // to append movie by movie
      var moviesViews = []
      _.each(_this.collection, function (movie) {
        var movieView = new MovieView({model: movie})
        moviesViews.push(movieView.render().el)
      })

      this.$el.append(moviesViews)
      return this
    }
  })
})
