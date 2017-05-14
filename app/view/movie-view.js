define(['jquery', 'app/utils', 'app/events/event-agreggator'],
function ($, utils, event) {
  return Backbone.View.extend({
    tagName: 'div',
    className: 'card movie-container',

    // TODO create a default movie cover url attribute

    initialize: function () {
      this.template = utils.templateHelper('movie-template')
    },

    events: {
      'click': function () {
        event.eventAgregattor.trigger('movieSelected', this.model)
      }
    },

    render: function () {
      this.$el.html(this.template(this.model))
      return this
    }
  })
})
