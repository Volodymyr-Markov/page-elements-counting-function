// Выбор всех элементов страницы;
function countAllElements(node){
  var elementList = [];
  var textNodes =[];
  var nodes = node;

  function findAllElements(node) {
    // если нам передали элемент
    if (node && 1 == node.nodeType) {
      // берем его первый дочерний узел
      var child = node.firstChild;
      // пока узлы не закончились
      while (child) {
        //если текстовый узел
        if (3 == child.nodeType){
          textNodes.push(child);
        }
        // если этот узел является элементом
        if (1 == child.nodeType) {
          // что-то делаем с найденным элементом
          elementList.push(child.tagName);
          // рекурсивно перечисляем дочерние узлы
          findAllElements(child);
        };
        // переходим к следующему узлу
      child = child.nextSibling;
      };
    }
  };

  findAllElements(node);

  function countElements(arr){
    var result = {};
    for (var i = 0; i < arr.length; ++i){
      var element = arr[i];
      if (result[element] != undefined)
        ++result[element];
      else
        result[element] = 1;
    }
    for (var key in result){
      console.log("Элемент " + key + " встречается " + result[key] +" раз");
    }
  }

  countElements(elementList);

  return console.log("Количество текстовых узлов на странице: " + textNodes.length);
}

countAllElements(document.documentElement)



/*

var elements = document.getElementsByTagName('*');
var result;
var i = 0,stop = elements.length;
(function closers(){
  result +=', '+ elements[i].tagName;
  i++;
  if(i < stop) {
    setTimeout(closers,0);
  }
}());




// перечисляем содержимое html
findAllElements(document.documentElement);

function aclean(arr) {
    let obj = {};
      arr.forEach(e =>
      obj[ [...e].sort().join('').toLowerCase()] = e); 

      return Object.keys(obj).map(v => obj[v])
    }

function unique(arr) {
  var obj = {};

  for (var i = 0; i < arr.length; i++) {
    var str = arr[i];
    obj[str] = true; // запомнить строку в виде свойства объекта
  }

  return Object.keys(obj); // или собрать ключи перебором для IE8-
}


function unique(arr) {
  var result = [];

  nextInput:
    for (var i = 0; i < arr.length; i++) {
      var str = arr[i]; // для каждого элемента
      for (var j = 0; j < result.length; j++) { // ищем, был ли он уже?
        if (result[j] == str) continue nextInput; // если да, то следующий
      }
      result.push(str);
    }

  return result;
}

