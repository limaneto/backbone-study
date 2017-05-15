define(['movieModel', 'backbone'],
function (Movie, Backbone) {
  return Backbone.Collection.extend({
    model: Movie,
    url: 'http://localhost:3000/catalog'
  })
})
