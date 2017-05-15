define(['movieModel', 'Backbone'],
  function (Movie, Backbone) {
    var Collection = Backbone.Collection.extend({
      model: Movie,
      url: 'http://localhost:3000/catalog'
    })

    return new Collection()
  })
