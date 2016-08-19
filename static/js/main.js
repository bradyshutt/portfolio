'use strict'

;(function($) {

  $(function pageReady() {
    $('.arrow a').click((e) => navTo(e.target.getAttribute('href')))
    $('nav a').click((e) => navTo(e.target.getAttribute('href')))
    
  })

  let navTo = (function() {
    let pages = ['#page-about', '#page-home', '#page-projects']
    let curPage = 1

    return function to(page) {
      let idx
      if ((idx = pages.indexOf(page)) > -1) {
        $(pages[curPage]).hide()
        $(page).show()
        $('nav .current').removeClass('current')
        curPage = idx

      } else if (page === '#next') {
        $(pages[curPage]).hide()
        $('nav .current').removeClass('current')
        curPage = (curPage === pages.length - 1) ? 0 : curPage + 1
        $(pages[curPage]).show()

      } else if (page === '#prev') {
        $(pages[curPage]).hide()
        $('nav .current').removeClass('current')
        curPage = (curPage === 0) ? pages.length - 1 : curPage - 1
        $(pages[curPage]).show()
      }

      $('nav .button').eq(curPage).addClass('current')
    }
  })()

  
})(jQuery)

