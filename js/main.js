/// <reference types="../@types/jquery" />

$(window).on('scroll' , ()=>{
    const scrollTop = $(window).scrollTop()
    const secTop = $('#about').offset().top

    if(scrollTop > secTop - 60){
        $('.header').css('cssText', `
            background-color: rgba(0,0,0,0.7);
            width: 100%;
            padding: 0 60px
        `)
        $('.home .container').css('width', '100%')
    }else {
        $('.header').css('cssText', `
            background-color: transparent;
            width: 80%;
            padding: 0
        `)
        $('.home .container').css('width', '75%')
    }
})

$('.nav-bar ul li a').on('click',({target})=>{
    const destination = $(target).attr('href')
    const destinationTop = $(destination).offset().top

    $('html , body').animate({screenTop: destinationTop} , '2000')
})


const colorBox = $('.colorBox div span')
colorBox.eq(0).css('background-color', '#ff305b')
colorBox.eq(1).css('background-color', '#09c')
colorBox.eq(2).css('background-color', 'red')
colorBox.eq(3).css('background-color', 'blue')
colorBox.eq(4).css('background-color', 'yellow')

$('#sett').on('click',()=>{
    $('.colorBox').animate({width: 'toggle'},1000)
})

$('.colorBox div span').on('click', ({target})=>{
    const chossenColor = $(target).css('background-color')
    $('a.change').css('color', chossenColor)
    $('.change').css('color', chossenColor)
})


$(function () { 
    $('.lds-ripple').fadeOut(2000 , ()=>{
        $('.loading').slideUp(2000, ()=>{
            $('body').css('overflow', 'auto')
        })
    })
})