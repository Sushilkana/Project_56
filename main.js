var Pizza_Menu = ["Veggie Pizza","Pepperoni Pizza","Meat Pizza","Margherita Pizza","BBQ Chicken Pizza","Hawaiian Pizza","Buffalo Pizza"];
var Show = "";
var Show2 = "";

function getmenu(){
    for (i=0; i<Pizza_Menu.length;i++){
        console.log(Pizza_Menu[i]);
        Show = Show + Pizza_Menu[i] + "<br>"
    }
    document.getElementById("display_menu").innerHTML=Show;
}

function add_top(){
    var add_new_menu = document.getElementById("add_item").value;
    Pizza_Menu.push(add_new_menu);
}

function add_item(){
    for (i=0; i<Pizza_Menu.length;i++){
        console.log(Pizza_Menu[i]);
        Show2 = Show2 + Pizza_Menu[i] + "<br>"
    }
    document.getElementById("display_addedmenu").innerHTML = Show2
}