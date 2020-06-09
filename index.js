function getFirstSelector(selector){
  const uls = document.getElementById('app').querySelectorAll('ul')

  for (var i = 0; i < uls.length; i++){
    if (('.' + uls[i].className) === selector){
      return document.querySelector(selector)
    }
  }
}

function nestedTarget(){

}

function deepestChild(){

}

function increaseRankBy(n){

}
