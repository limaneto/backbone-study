define(['Backbone'],
function (Backbone) {
  return Backbone.Model.extend({
    defaults: {
      coverImage: 'http://placehold.it/500x400'
    },

    validate: function (attr) {
      if (typeof attr.title === 'undefined' || attr.title === '') { throw new Error('Movie needs title attribute.') }
    }
  })
})
