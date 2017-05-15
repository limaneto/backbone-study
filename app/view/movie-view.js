define(['jquery', 'utils', 'eventAgreggator', 'backbone', 'templates'],
function ($, utils, event, Backbone, Templates) {
  return Backbone.View.extend({
    tagName: 'div',
    className: 'card movie-container',

    initialize: function () {
      this.template = Templates.getCompiledMovieTemplate()
    },

    render: function () {
      this.$el.html(this.template(this.model))
      return this
    },

    events: {
      'click': function () {
        event.eventAgregattor.trigger('movieSelected', this.model)
      }
    }
  })
})
