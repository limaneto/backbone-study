define(['movieModel', 'Backbone'],
  function (Movie, Backbone) {
    var MovieCollection = Backbone.Collection.extend({
      model: Movie,
      url: 'http://localhost:3000/catalog'
    })

    return new MovieCollection()
  })
