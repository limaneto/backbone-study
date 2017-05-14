define(['backbone', 'underscore', 'jquery'], function (Backbone, _, $) {
'use strict'

var Movie = Backbone.Model.extend({
})

var movies = []

var movieCollection = ''

var eventAgregattor = _.extend({}, Backbone.Events)

eventAgregattor.on('movieSelected', function (movie) {
  var urlPath = 'selectMovie/' + movie.id
  var router = new Router()
  router.navigate(urlPath, {trigger: true})
})

var MovieView = Backbone.View.extend({
  tagName: 'div',
  className: 'movie-container',

  initialize: function () {
    this.template = templateHelper('movie-template')
  },

  events: {
    'click': function () {
      eventAgregattor.trigger('movieSelected', this.model)
    }
  },

  render: function () {
    this.$el.html(this.template(this.model))
    return this
  }
})

var SelectedMovieView = Backbone.View.extend({
  tagName: 'div',
  className: 'selected-movie-container',

  initialize: function () {
    this.template = templateHelper('selected-movie-template')
  },

  render: function () {
    this.$el.html(this.template(this.model.toJSON()))
    return this
  }
})

var MovieCollection = Backbone.Collection.extend({
  model: Movie,
  url: 'http://localhost:3000/catalog'
})

var Catalog = Backbone.View.extend({
  initialize: function () {
    var _this = this
    movieCollection = new MovieCollection()
    movieCollection.fetch({
      success: function () {
        movies = movieCollection.toJSON()
        _this.render()
      }
    })
  },

  render: function () {
    var _this = this // avoing referencing global this inside loop
    _.each(movies, function (movie) {
      _this.renderMovie(movie)
    })
  },

  renderMovie: function (movie) {
    var movieView = new MovieView({model: movie})
    this.$el.append(movieView.render().el)
    return this
  }
})

var Router = Backbone.Router.extend({
  routes: {
    'catalog': 'displayCatalog',
    'selectMovie/:id': 'movieSelected'
  },

  displayCatalog: function () {
    var catalog = new Catalog({el: $('#catalog')})
  },
  
  movieSelected: function (id) {
    var selectedElement = movieCollection.get(id.toString())
    $('.selected-movie-container').remove()
    $('body').append(new SelectedMovieView({model: selectedElement}).render().el)
  }
})



function initialize () {
  var router = new Router()
  Backbone.history.start()
  router.navigate('catalog', {trigger: true})
}


function templateHelper (id){
  return _.template( $('#' + id).html() )
}

return {
  init: initialize
}


})