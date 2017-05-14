define(['jquery'],
  function ($) {
    function templateHelper (id) {
      return _.template($('#' + id).html())
    }

    var movies = []

    return {
      templateHelper: templateHelper,
      movies: movies
    }
  })
