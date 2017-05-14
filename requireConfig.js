require.config({
  paths: {
    jquery: 'node_modules/jquery/dist/jquery.min',
    underscore: 'node_modules/underscore/underscore-min',
    backbone: 'node_modules/backbone/backbone-min'
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
