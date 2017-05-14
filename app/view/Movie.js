define(['backbone', 'jquery'], function (Backbone, $) {

  var MovieView = Backbone.View.extend({
    tagName: 'div',
    className: 'movie-container',

    initialize: function () {
      this.template = templateHelper('movie-template')
    },

    events: {
      'click': function () {
        eventAgregattor.trigger('movieSelected', this.model)
      }
    },

    render: function () {
      this.$el.html(this.template(this.model))
      return this
    }
  })

  return MovieView
})