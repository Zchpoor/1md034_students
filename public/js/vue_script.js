new Vue({
  el: '#burgerList',
  data: {
    menu: food
  },
  methods: {
    name: function() {
      return this.food.name;
    }
  }
})






/*
function burgerMaker(name, kCal){
  this.name = name;
  this.kCal = kCal;
}

let a = new burgerMaker("burgare 1", 300);
let b = new burgerMaker("burgare 2", 210);

let ol = document.getElementById("list");
let li = document.createElement("li");
let liText = document.createTextNode((a.name));
li.appendChild(liText);
ol.appendChild(li);

new Vue({
  el: '#app',
  data: {
    burgers: [a, b]
  },
  methods: {
    name: function() {
      return this.burgers;
    }
  }
})

*/