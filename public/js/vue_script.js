new Vue({
  el: '#burgerList',
  data: {
    menu: food
  },
  methods: {
    name: function () {
      return this.food.name;
    }
  }
})
const vm2 = new Vue({
  el: '#submitButton',
  data: {
  },
  methods: {
    markDone: function () {
      let pName = document.getElementById("name").value;
      let pMail = document.getElementById("E-mail").value;
      let pPayment = document.getElementById("payment").value;

      let burgerArray = [];
      let allCheckBoxes = document.getElementsByName("burgerBox");
      for (let box of allCheckBoxes) {
        if (box.checked) {
          burgerArray.push(box.value.toString());
        }
      }

      let pGender;
      let allRadioButtons = document.getElementsByName("gender");
      for (let radio of allRadioButtons) {
        if (radio.checked) {
          pGender = radio.value;
          break;
        }
      }

      let dataArray = [pName, pMail, pPayment, pGender];

      vm.addOrder(burgerArray);
      let order = document.getElementById("recOrder");
      order.textContent = "Recieved order: " + dataArray.toString();
    },
  }
});

'use strict';
const socket = io();

const vm = new Vue({
  //el: '#submitButton',
  el: '#dots',
  data: {
    orders: {},
    position: {
      x: 100,
      y: 100,
    },
    index: 0,
  },
  methods: {
    getNext: function () {
      /* This function returns the next available key (order number) in
       * the orders object, it works under the assumptions that all keys
       * are integers. */
      this.index += 1;
      return this.index;
    },
    addOrder: function (order) {
      /* When you click in the map, a click event object is sent as parameter
       * to the function designated in v-on:click (i.e. this one).
       * The click event object contains among other things different
       * coordinates that we need when calculating where in the map the click
       * actually happened. */
      socket.emit('addOrder', {
        orderId: this.getNext(),
        details: {
          x: this.position.x,
          y: this.position.y,
        },
        order,
      });
    },
    displayOrder: function (event) {
      /* When you click in the map, a click event object is sent as parameter
       * to the function designated in v-on:click (i.e. this one).
       * The click event object contains among other things different
       * coordinates that we need when calculating where in the map the click
       * actually happened. */
      let offset = {
        x: event.currentTarget.getBoundingClientRect().left,
        y: event.currentTarget.getBoundingClientRect().top,
      };
      this.position = {
        x: event.clientX - 10 - offset.x,
        y: event.clientY - 10 - offset.y,
      };
    },
    /*
    markDone: function () {
      this.addOrder(event);
      let pName = document.getElementById("name").value;
      let pMail = document.getElementById("E-mail").value;
      //let pStreetName = document.getElementById("streetName").value;
      //let pStreetNumber = document.getElementById("number").value;
      let pPayment = document.getElementById("payment").value;


      let burgerIndex = "Burgers of choice: "; //Used indexes instead of names, becuase of how long the names were.

      let allCheckBoxes = document.getElementsByName("burgerBox");
      for (let box of allCheckBoxes) {
        if (box.checked) {
          burgerIndex += box.value + " ";
        }
      }

      let pGender;
      let allRadioButtons = document.getElementsByName("gender");
      for (let radio of allRadioButtons) {
        if (radio.checked) {
          pGender = radio.value;
          break;
        }
      }

      let dataArray = [pName, pMail, pPayment, burgerIndex, pGender];
      //console.log("Klick!" + pGender);

      let order = document.getElementById("recOrder");
      order.textContent = "Recieved order: " + dataArray.toString();
    }*/
  }
});