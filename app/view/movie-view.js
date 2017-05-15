define(['jquery', 'utils', 'Backbone', 'templates', 'app/events/event-agreggator'],
function ($, utils, Backbone, Templates, event) {
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
        event.eventAggregator.trigger('movieSelected', this.model)
      }
    }
  })
})
