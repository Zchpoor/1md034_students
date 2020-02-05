function menuItem(name, picture, info, gluten, milk) {
    this.picture = picture; // The this keyword refers to the object itself
    this.info = info;
    this.name = name;
    this.milk = milk;
    this.gluten = gluten;
    this.headline = function() {
        return this.name;
    };
    this.info = function() {
        return this.info;
    };
    this.contains = function() {
        ret = "";
        if (milk) {
            ret += " milk";
        }
        if (gluten) {
            ret += " gluten";
        }
        return ret;
    }
}

let burger1 = new menuItem("1. Ordinary hamburger", "http://dev.quantumcloud.com/express-shop-pro/wp-content/uploads/2018/07/BigAls-4oz-Beef-Burger-1.jpg",
    "Just an ordinary burger.", true, false);
let burger2 = new menuItem("2. Extraordinary hamburger", "https://goodwillduluth.files.wordpress.com/2011/11/cheeseburger1.jpg",
    "Basically cheeseburger.", true, true);
let burger3 = new menuItem("3. Hefty hamburger", "https://serecurioso.files.wordpress.com/2013/07/8681252099_4ff4f7f492_o.jpg",
    "Huge hamburger.", true, true);
let burger4 = new menuItem("4. Bacon-burger", "https://bluestatebbq.files.wordpress.com/2011/04/bacon-cheeseburger.jpg",
    "Hamburger, but with bacon!", true, true);
let burger5 = new menuItem('5. Bacon-burger (gluten-free)', 'https://www.rotellasbakery.com/wp-content/uploads/2015/07/Beef-Bacon-Burger-on-Gluten-Free.jpeg',
    'Same as 4, but in gluten-free bread.', false, true);

menu = [burger1, burger2, burger3, burger4, burger5];



let list = document.getElementById("burgerList");
let i = 0;
for (let burger of menu){

let p1 = document.createElement('div')
p1.style.gridColumn = (i % 2) + 1;
let txt1 = document.createTextNode(burger.name);
let contains = document.createTextNode("Contains: " + burger.contains())
p1.appendChild(txt1);
p1.appendChild(contains);
list.appendChild(p1);
i++;

}