define(function (require) {
  var Handlebars = require('Handlebars')
  var movieContainer = require('text!app/templates/movie-container.tpl')
  var selectedMovieContainer = require('text!app/templates/selected-movie-container.tpl')

  function _compiled (tpl, context) {
    var compiled = Handlebars.compile(tpl)
    return context ? compiled(context) : compiled
  }

  function getCompiledMovieTemplate () {
    return _compiled(movieContainer, arguments[0])
  }

  function getSelectedMovieTemplate () {
    return _compiled(selectedMovieContainer, arguments[0])
  }

  return {
    getCompiledMovieTemplate: getCompiledMovieTemplate,
    getSelectedMovieTemplate: getSelectedMovieTemplate
  }
})
