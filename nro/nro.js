var qmk = document.querySelector('#qmk')
var dmk = document.querySelector('#dmk')
var divqmk = document.querySelector('#part3')
var divdmk = document.querySelector('#part2')


var fqmk = function() {
    qmk.classList.add('remove')
    dmk.classList.add('open')
    divdmk.classList.add('remove')
    divqmk.classList.add('open')
}

var fdmk = function(){
    qmk.classList.remove('remove')
    dmk.classList.remove('open')
    divdmk.classList.remove('remove')
    divqmk.classList.remove('open')
}

qmk.addEventListener('click', fqmk)
dmk.addEventListener('click', fdmk)

