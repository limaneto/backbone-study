define(['jquery', 'utils', 'eventAgreggator', 'backbone'],
function ($, utils, event, Backbone) {
  return Backbone.View.extend({
    tagName: 'div',
    className: 'card movie-container',

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
