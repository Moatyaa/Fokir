var imgs = Array.from(document.querySelectorAll('.item img'))
var imgContainer = document.getElementById('img-container')
var imgItem = document.getElementById('imgItem')
var closeBtn = document.getElementById('close')
var right = document.getElementById('right')
var left = document.getElementById('left')
var index
console.log(imgs)
closeBtn.addEventListener('click', function(){
    imgContainer.style.display = "none"
})

for(var i = 0; i < imgs.length; i++){
    imgs[i].addEventListener('click', function(e){
        index = imgs.indexOf(e.target)
        imgContainer.style.display = "flex"
        imgItem.style.backgroundImage = `url(${e.target.src})`
    })
}

right.addEventListener('click', next )
left.addEventListener('click', prev )

function next(e){
    index++
    index = index % imgs.length
    imgItem.style.backgroundImage = `url(${imgs[index].src})`
}

function prev(e){
    index--
    console.log(index)
    index = index % imgs.length ? index : imgs.length - 1
    imgItem.style.backgroundImage = `url(${imgs[index].src})`
}