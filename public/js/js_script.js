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

let p1 = document.createElement('p')
let txt1 = document.createTextNode("{{text}}");
p1.id = 'p1';
p1.appendChild(txt1);
document.body.appendChild(p1);
let p2 = document.createElement('p');
let txt2 = document.createTextNode("{{text}}");
p2.id = 'p2';
p2.appendChild(txt2);
document.body.appendChild(p2);
let p3 = document.createElement('p')
let txt3 = document.createTextNode("{{text}}");
p3.id = 'p3';
p3.appendChild(txt3);
document.body.appendChild(p3);
let p4 = document.createElement('p')
let txt4 = document.createTextNode("{{text}}");
p4.id = 'p4';
p4.appendChild(txt4);
document.body.appendChild(p4);
let p5 = document.createElement('p')
let txt5 = document.createTextNode("{{text}}");
p5.id = 'p5';
p5.appendChild(txt5);
document.body.appendChild(p5);
