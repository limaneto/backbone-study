define(['backbone', 'jquery', 'app/utils'], function (Backbone, $, utils) {
  return Backbone.View.extend({
    tagName: 'li',
    className: 'movie-container',

    // TODO create a default movie cover url attribute

    initialize: function () {
      this.template = templateHelper('movie-template')
    },

    events: {
      'click': function () {
        utils.eventAgregattor.trigger('movieSelected', this.model)
      }
    },

    render: function () {
      this.$el.html(this.template(this.model))
      return this
    }
  })
})
