require.config({
  paths: {
    jquery: 'node_modules/jquery/dist/jquery',
    underscore: 'node_modules/underscore/underscore-min',
    Backbone: 'node_modules/backbone/backbone-min',
    Handlebars: 'node_modules/handlebars/dist/handlebars.min',
    movieCollection: 'app/collection/movie-collection',
    movieModel: 'app/model/movie-model',
    catalogView: 'app/view/catalog-view',
    movieView: 'app/view/movie-view',
    selectedMovieView: 'app/view/selected-movie-view',
    utils: 'app/utils',
    init: 'app/view/initialize',
    templates: 'app/templates/template-compiler',
    text: 'build/text'
  }
})

require(['app/router/app-router', 'Backbone'], function (Router, Backbone) {
  var router = new Router()
  Backbone.history.start()
  router.navigate('catalog', {trigger: true})
})
