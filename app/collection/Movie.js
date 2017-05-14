define(['backbone', 'app/model/Movie'], function (Backbone, Movie) {
  return Backbone.Collection.extend({
    model: Movie,
    url: 'http://localhost:3000/catalog'
  })
})
