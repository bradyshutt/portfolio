'use strict'

;(function($) {

  $(function pageReady() {
    $('.arrow-link').click(function(e) {
      e.preventDefault()
      navTo(e.currentTarget.getAttribute('href')) 
    })
    $('nav li a').click(function(e) {
      e.preventDefault()
      if (e.currentTarget === this) {
        navTo(e.currentTarget.getAttribute('href')) 
      }
    })
    $('')
    document.body.style.overflow = 'hidden';
  })

  let navTo = (function() {
    let pages = ['#page-about', '#page-home', '#page-projects']
    let curPageNum = 1

    return function(page) {
      let newPageNum = pages.indexOf(page)
      if (newPageNum > -1) {
        $('nav .current').removeClass('current')
        let direction = (newPageNum > curPageNum) ? 'left' : 'right' 
        swapPages(direction, pages[curPageNum], pages[newPageNum]) 
        curPageNum = newPageNum
      }
      else if (page === '#next') {
        $('nav .current').removeClass('current')
        let newPageNum = (curPageNum === pages.length - 1) ? 0 : curPageNum + 1
        swapPages('left', pages[curPageNum], pages[newPageNum])
        curPageNum = newPageNum
      }
      else if (page === '#prev') {
        let newPageNum = (curPageNum === 0) ? pages.length - 1 : curPageNum - 1
        $('nav .current').removeClass('current')
        swapPages('right', pages[curPageNum], pages[newPageNum])
        curPageNum = newPageNum
      }

      $('nav .button').eq(curPageNum).addClass('current')
    }

    function swapPages(dir, oldPage, newPage) {
      let direction = dir[0].toLowerCase()
      if (direction !== 'r' && direction !== 'l')
        throw new Error('Invalid direction to swapPages')
      let toLeft = (direction === 'l')
      let pageWidth = $(window).width()
      let duration = 500
      $(oldPage)
        .animate({
          top: 0,
          left: toLeft ? (-pageWidth) : pageWidth
          }, duration)
      
      $(newPage)
        .offset({ 
          top: 0, 
          left: toLeft ? pageWidth : (-pageWidth) 
          })
        .show()
        .animate({
          left: 0, 
          top: 0 
          }, duration )
      }

  })()

  
})(jQuery)

