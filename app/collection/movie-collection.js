define(['movieModel'],
function (Movie) {
  return Backbone.Collection.extend({
    model: Movie,
    url: 'http://localhost:3000/catalog'
  })
})
