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

const vm = new Vue({
  el: '#submitButton',
  methods: {
      markDone: function() {
        let pName = document.getElementById("name").value;
        let pMail = document.getElementById("E-mail").value;
        let pStreetName = document.getElementById("streetName").value;
        let pStreetNumber = document.getElementById("number").value;
        let pPayment = document.getElementById("payment").value;
        
        
        let burgerIndex = "Burgers of choice: "; //Used indexes instead of names, becuase of how long the names were.

        let allCheckBoxes = document.getElementsByName("burgerBox");
        for (let box of allCheckBoxes){
          if (box.checked){
            burgerIndex += box.value + " ";
          }
        }

        let pGender;
        let allRadioButtons = document.getElementsByName("gender");
        for (let radio of allRadioButtons){
          if (radio.checked){
            pGender = radio.value;
            break;
          }
        }

        let dataArray = [pName, pMail, pStreetName, pStreetNumber, pPayment, burgerIndex, pGender];
        console.log("Klick!" + pGender);

        let order = document.getElementById("recOrder");
        order.textContent = "Recieved order: " + dataArray.toString();
      }
  }
});





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