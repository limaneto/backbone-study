define('backbone', function (Backbone) {
  return Backbone.View.extend({
    tagName: 'div',
    className: 'selected-movie-container',

    initialize: function () {
      this.template = templateHelper('selected-movie-template')
    },

    render: function () {
      this.$el.html(this.template(this.model.toJSON()))
      return this
    }
  })
})
