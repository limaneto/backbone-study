require.config({
  paths: {
    'jquery': 'node_modules/jquery/dist/jquery.min',
    'underscore': 'node_modules/underscore/underscore-min',
    'backbone': 'node_modules/backbone/backbone-min'
  },
  shim: {
    'backbone': {
      deps: [
        'jquery',
        'underscore'
      ],
      exports: 'Backbone'
    },
    'underscore': {
      exports: '_'
    }
  }
})

require(['app/try'], function (Try) {
  Try.init()
})
