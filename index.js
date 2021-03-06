function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  return document.getElementById('nested')
}

function increaseRankBy(n) {
  const list = document.querySelectorAll('ul.ranked-list li')
  
  for (var i = 0; i < list.length; i++) {
    list[i].innerHTML = parseInt(list[i].innerHTML) + n
  }
  return list
}

function deepestChild() {
    var startingPoint = document.getElementById('grand-node')
    
    while (startingPoint.childElementCount != 0) {
        startingPoint = startingPoint.firstElementChild
    }
    
    return startingPoint
}  