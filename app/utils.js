define(['underscore', 'jquery', 'backbone', 'app/router/AppRoutes'],
  function (_, $, Backbone, Router) {
    function templateHelper (id) {
      return _.template($('#' + id).html())
    }

    var movies = []

    var eventAgregattor = _.extend({}, Backbone.Events)

    eventAgregattor.on('movieSelected', function (movie) {
      var urlPath = 'selectMovie/' + movie.id
      var router = new Router()
      router.navigate(urlPath, {trigger: true})
    })

    return {
      templateHelper: templateHelper,
      eventAgregattor: eventAgregattor,
      movies: movies
    }
  })
