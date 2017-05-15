define(['Backbone'],
function (Backbone) {

  var eventAggregator = _.extend({}, Backbone.Events)

  eventAggregator.on('movieSelected', function (movie) {
    var urlPath = 'catalog/' + movie.id
    require(['app/router/app-router'], function (Router) {
      var router = new Router
      router.navigate(urlPath, {trigger: true})
    })
  })

  return {
    eventAggregator: eventAggregator
  }
})
