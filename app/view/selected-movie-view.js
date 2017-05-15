define(['utils', 'Backbone', 'templates'],
function (utils, Backbone, Templates) {
  return Backbone.View.extend({
    tagName: 'div',
    className: 'card selected-movie-container',

    initialize: function () {
      this.template = Templates.getSelectedMovieTemplate()
    },

    render: function () {
      this.$el.html(this.template(this.model.toJSON()))
      return this
    }
  })
})
