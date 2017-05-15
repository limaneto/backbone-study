define(['backbone'],
function (Backbone) {
  var eventAgregattor = _.extend({}, Backbone.Events)

  eventAgregattor.on('movieSelected', function (movie) {
    var urlPath = 'catalog/' + movie.id
    require(['app/router/app-router'], function (Router) {
      var router = new Router()
      router.navigate(urlPath, {trigger: true})
    })
  })

  return {
    eventAgregattor: eventAgregattor
  }
})
