/*const vm = new Vue({
  el: '#p1',
  data: {
    text: burger1.headline()
  }
})
const vm2 = new Vue({
  el: '#p2',
  data: {
    text: burger2.headline()
  }
})
const vm3 = new Vue({
  el: '#p3',
  data: {
    text: burger3.headline()
  }
})
const vm4 = new Vue({
  el: '#p4',
  data: {
    text: burger4.headline()
  }
})
const vm5 = new Vue({
  el: '#p5',
  data: {
    text: burger5.headline()
  }
})
*/


new Vue({
  el: '#burgerList',
  data: {
    menu: [burger1, burger2, burger3, burger4, burger5]
  },
  methods: {
    name: function() {
      //return this.menu.name;
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