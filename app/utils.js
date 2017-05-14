define(['jquery'],
  function ($) {
    function templateHelper (id) {
      return _.template($('#' + id).html())
    }

    return {
      templateHelper: templateHelper
    }
  })
