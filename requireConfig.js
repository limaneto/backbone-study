require.config({
  paths: {
    jquery: 'node_modules/jquery/dist/jquery',
    underscore: 'node_modules/underscore/underscore-min',
    backbone: 'node_modules/backbone/backbone-min',
    movieCollection: 'app/collection/movie-collection',
    eventAgreggator: 'app/events/event-agreggator',
    movieModel: 'app/model/movie-model',
    appRouter: 'app/router/app-router',
    catalogView: 'app/view/catalog-view',
    movieView: 'app/view/movie-view',
    selectedMovieView: 'app/view/selected-movie-view',
    utils: 'app/utils'
  },
  shim: {
    backbone: {
      deps: [
        'underscore',
        'jquery'
      ],
      exports: 'Backbone'
    },
    underscore: {
      exports: '_'
    }
  }
})

require(['app/router/app-router'], function (Router) {
  var router = new Router()
  Backbone.history.start()
  router.navigate('catalog', {trigger: true})
})
