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
        //let pStreetName = document.getElementById("streetName").value;
        //let pStreetNumber = document.getElementById("number").value;
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

        let dataArray = [pName, pMail, pPayment, burgerIndex, pGender];
        console.log("Klick!" + pGender);

        let order = document.getElementById("recOrder");
        order.textContent = "Recieved order: " + dataArray.toString();
      }
  }
});
'use strict';
const socket = io();

/* eslint-disable-next-line no-unused-vars */
const vm = new Vue({
  el: '#dots',
  data: {
    orders: {},
  },
  created: function() {
    /* When the page is loaded, get the current orders stored on the server.
     * (the server's code is in app.js) */
    socket.on('initialize', function(data) {
      this.orders = data.orders;
    }.bind(this));

    /* Whenever an addOrder is emitted by a client (every open map.html is
     * a client), the server responds with a currentQueue message (this is
     * defined in app.js). The message's data payload is the entire updated
     * order object. Here we define what the client should do with it.
     * Spoiler: We replace the current local order object with the new one. */
    socket.on('currentQueue', function(data) {
      this.orders = data.orders;
    }.bind(this));
  },
  methods: {
    getNext: function() {
      /* This function returns the next available key (order number) in
       * the orders object, it works under the assumptions that all keys
       * are integers. */
      let lastOrder = Object.keys(this.orders).reduce(function(last, next) {
        return Math.max(last, next);
      }, 0);
      return lastOrder + 1;
    },
    addOrder: function(event) {
      /* When you click in the map, a click event object is sent as parameter
       * to the function designated in v-on:click (i.e. this one).
       * The click event object contains among other things different
       * coordinates that we need when calculating where in the map the click
       * actually happened. */
      let offset = {
        x: event.currentTarget.getBoundingClientRect().left,
        y: event.currentTarget.getBoundingClientRect().top,
      };
      socket.emit('addOrder', {
        orderId: this.getNext(),
        details: {
          x: event.clientX - 10 - offset.x,
          y: event.clientY - 10 - offset.y,
        },
        orderItems: ['Beans', 'Curry'],
      });
    },
  },
});
