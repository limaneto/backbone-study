define(['utils', 'backbone'],
function (utils, Backbone) {
  return Backbone.View.extend({
    tagName: 'div',
    className: 'card selected-movie-container',

    initialize: function () {
      this.template = utils.templateHelper('selected-movie-template')
    },

    render: function () {
      this.$el.html(this.template(this.model.toJSON()))
      return this
    }
  })
})
