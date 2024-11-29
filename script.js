// heading5     --> Menu
let menuName = document.querySelector(".heading5");
let starter = document.querySelector("#starter");
let breakfast = document.querySelector("#breakfast");
let lunch = document.querySelector("#lunch");
let dinner = document.querySelector("#dinner");

// Menu Dishes images
let img1 = document.querySelector("#jsImg1");
let img2  = document.querySelector("#jsImg2");
let img3  = document.querySelector("#jsImg3");
let img4  = document.querySelector("#jsImg4");
let imge5 = document.querySelector("#jsImge5");
let img6  = document.querySelector("#jsImg6");

// Menu Dishes Names
let dish1 = document.querySelector("#dish1");
let dish2 = document.querySelector("#dish2");
let dish3 = document.querySelector("#dish3");
let dish4 = document.querySelector("#dish4");
let dish5 = document.querySelector("#dish5");
let dish6 = document.querySelector("#dish6");

// Menu Dishes Prices
let price1 = document.querySelector("#price1");
let price2 = document.querySelector("#price2");
let price3 = document.querySelector("#price3");
let price4 = document.querySelector("#price4");
let price5 = document.querySelector("#price5");
let price6 = document.querySelector("#price6");


let query1 = starter.onclick = () => {
    menuName.innerText = "Starters";
    img1.setAttribute("src", "img/menu/menu-item-1.png");
    img2.setAttribute("src", "img/menu/menu-item-2.png");
    img3.setAttribute("src", "img/menu/menu-item-3.png");
    img4.setAttribute("src", "img/menu/menu-item-4.png");
    imge5.setAttribute("src", "img/menu/menu-item-5.png");
    img6.setAttribute("src", "img/menu/menu-item-6.png");

    starter.setAttribute("class","btn2 activate");
    breakfast.setAttribute("class","btn2");
    lunch.setAttribute("class","btn2");
    dinner.setAttribute("class","btn2");

    dish1.textContent = "Magnam Tiste";
    dish2.textContent = "Aut Luia";
    dish3.textContent = "Est Eligendi";
    dish4.textContent = "Eos Luibusdam";
    dish5.textContent = "Jubey Liusaamky";
    dish6.textContent = "Laboriosam Direva";

    price1.textContent = "$5.95";
    price2.textContent = "$14.95";
    price3.textContent = "$8.95";
    price4.textContent = "$12.75";
    price5.textContent = "$12.95";
    price6.textContent = "$9.95";
}

let query2 = breakfast.onclick = () => {
    menuName.innerText = "Breakfast";
    img1.setAttribute("src", "img/menu/menu-item-6.png");
    img2.setAttribute("src", "img/menu/menu-item-4.png");
    img3.setAttribute("src", "img/menu/menu-item-5.png");
    img4.setAttribute("src", "img/menu/menu-item-3.png");
    imge5.setAttribute("src", "img/menu/menu-item-1.png");
    img6.setAttribute("src", "img/menu/menu-item-2.png");

    breakfast.setAttribute("class","btn2 activate");
    starter.setAttribute("class","btn2");
    lunch.setAttribute("class","btn2");
    dinner.setAttribute("class","btn2");

    dish1.textContent = "Laboriosam Direva";
    dish2.textContent = "Eos Luibusdam";
    dish3.textContent = "Jubey Liusaamky";
    dish4.textContent = "Est Eligendi";
    dish5.textContent = "Magnam Tiste";
    dish6.textContent = "Aut Luia";

    price1.textContent = "$9.95";
    price2.textContent = "$12.75";
    price3.textContent = "$12.95";
    price4.textContent = "$8.95";
    price5.textContent = "$5.95";
    price6.textContent = "$14.95";
}

let query3 = lunch.onclick = () => {
    menuName.innerText = "Lunch";
    img1.setAttribute("src", "img/menu/menu-item-3.png");
    img2.setAttribute("src", "img/menu/menu-item-1.png");
    img3.setAttribute("src", "img/menu/menu-item-2.png");
    img4.setAttribute("src", "img/menu/menu-item-5.png");
    imge5.setAttribute("src", "img/menu/menu-item-6.png");
    img6.setAttribute("src", "img/menu/menu-item-4.png");

    lunch.setAttribute("class","btn2 activate");
    breakfast.setAttribute("class","btn2");
    starter.setAttribute("class","btn2");
    dinner.setAttribute("class","btn2");

    dish1.textContent = "Est Eligendi";
    dish2.textContent = "Magnam Tiste";
    dish3.textContent = "Aut Luia";
    dish4.textContent = "Jubey Liusaamky";
    dish5.textContent = "Laboriosam Direva";
    dish6.textContent = "Eos Luibusdam";

    price1.textContent = "$8.95";
    price2.textContent = "$5.95";
    price3.textContent = "$14.95";
    price4.textContent = "$12.95";
    price5.textContent = "$9.95";
    price6.textContent = "$12.75";
}

let query4 = dinner.onclick = () => {
    menuName.innerText = "Dinner";
    img1.setAttribute("src", "img/menu/menu-item-4.png");
    img2.setAttribute("src", "img/menu/menu-item-6.png");
    img3.setAttribute("src", "img/menu/menu-item-1.png");
    img4.setAttribute("src", "img/menu/menu-item-2.png");
    imge5.setAttribute("src", "img/menu/menu-item-3.png");
    img6.setAttribute("src", "img/menu/menu-item-5.png");

    dinner.setAttribute("class","btn2 activate");
    breakfast.setAttribute("class","btn2");
    lunch.setAttribute("class","btn2");
    starter.setAttribute("class","btn2");

    dish1.textContent = "Eos Luibusdam";
    dish2.textContent = "Laboriosam Direva";
    dish3.textContent = "Magnam Tiste";
    dish4.textContent = "Aut Luia";
    dish5.textContent = "Est Eligendi";
    dish6.textContent = "Jubey Liusaamky";

    price1.textContent = "$12.75";
    price2.textContent = "$9.95";
    price3.textContent = "$5.95";
    price4.textContent = "$14.95";
    price5.textContent = "$8.95";
    price6.textContent = "$12.95";
}

//   -->    Testimonials

let btn = document.querySelector(".btn3");
let btn2 = document.querySelector("#btn3");
let information = document.querySelector(".information");
let heading8 = document.querySelector(".heading8");
let para7 = document.querySelector(".para7");
let img5 = document.querySelector(".img5");
let count = 1;


let query5 = btn.onclick = () => {

    if (count === 1) {
            img5.setAttribute("src", "img/testimonials/testimonials4.jpg");
            para7.innerText = "entrepreneur";
            heading8.innerText = "john larnsen";
            information.innerText = "Fugiat enim eram quae cillum dolore dolor amet nulla culpa multos export minim fugiat minim velit minim dolor enim duis veniam ipsum anim magna sunt elit fore quem dolore labore illum veniam.";
    
            count = 5;
        }
        else if (count === 5) {
            

            count = 4;
        }
        else if (count === 4) {
            img5.setAttribute("src", "img/testimonials/testimonials3.jpg");
            para7.innerText = "store owner";
            heading8.innerText = "jena carlis";
            information.innerText = "Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam duis minim tempor labore quem eram duis noster aute amet eram fore quis sint minim.";
    
            count = 3;
        }
        else if (count === 3) {
            img5.setAttribute("src", "img/testimonials/testimonials2.jpg");
            para7.innerText = "deisgner";
            heading8.innerText = "sara wilsson";
            information.innerText = "Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid cillum eram malis quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa.";
    
            count = 2;
        }
        else {
            img5.setAttribute("src", "img/testimonials/testimonials1.jpg");
            para7.innerText = "CEO / Founder";
            heading8.innerText = "soul goodman";
            information.innerText = "Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.";
    
            count = 1;
        }
}

let query6 = btn2.onclick = () => {

    if (count === 1) {
        img5.setAttribute("src", "img/testimonials/testimonials2.jpg");
        para7.innerText = "deisgner";
        heading8.innerText = "sara wilsson";
        information.innerText = "Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid cillum eram malis quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa.";

        count = 2;
    }
    else if (count === 2) {
        img5.setAttribute("src", "img/testimonials/testimonials3.jpg");
        para7.innerText = "store owner";
        heading8.innerText = "jena carlis";
        information.innerText = "Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam duis minim tempor labore quem eram duis noster aute amet eram fore quis sint minim.";

        count = 3;
    }
    else if (count === 3) {
        img5.setAttribute("src", "img/testimonials/testimonials4.jpg");
        para7.innerText = "entrepreneur";
        heading8.innerText = "john larnsen";
        information.innerText = "Fugiat enim eram quae cillum dolore dolor amet nulla culpa multos export minim fugiat minim velit minim dolor enim duis veniam ipsum anim magna sunt elit fore quem dolore labore illum veniam.";

        count = 4;
    }
    else {
        img5.setAttribute("src", "img/testimonials/testimonials1.jpg");
        para7.innerText = "CEO & Founder";
        heading8.innerText = "soul goodman";
        information.innerText = "Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.";

        count = 1;
    }
}

// Events Gallery

let previous = document.querySelector(".icon");
let next = document.querySelector("#next");
let eventImg = document.querySelector("#img6");


// Event Description

let heading10 = document.querySelector(".heading10");
let head2 = document.querySelector(".head2");
let para8 = document.querySelector(".para8");


count = 1;

let query7 = previous.onclick = () => {
    if (count===1) {
        heading10.textContent = "Our Events";
        head2.textContent = "at Reliable Cost";
        para8.textContent = "Alias error a maiores illum dolores sed veniam, eum voluptas explicabo sit facilis quis quod voluptates deserunt veritatis. perspiciatis repudiandae quos libero maxime ipsam, Delectus inventore perferendis a odio modi est iusto.";
        eventImg.setAttribute("src", "img/events/event.jpg");

        count = 5;
    }
    else if (count === 5) {
        heading10.textContent = "Wedding Parties";
        head2.textContent = "899$";
        para8.textContent = "Rerum minima, voluptas quos quia quas reiciendis voluptatum inventore corrupti aspernatur vero molestiae ea dolorum repellendus cumque soluta magni facilis corporis optio, delectus modi repellat! ";
        eventImg.setAttribute("src", "img/events/events4.jpg");

        count = 4;
    }
    else if (count === 4) {
        heading10.textContent = "Birthday Parties";
        head2.textContent = "499$";
        para8.textContent = "Laborum aperiam atque omnis minus omnis est qui assumenda quos. Quis id sit quibusdam. Esse quisquam ducimus officia ipsum ut quibusdam maxime. Non enim perspiciatis.";
        eventImg.setAttribute("src", "img/events/events3.jpg");

        count = 3; 
    } else if (count === 3) {
        heading10.textContent = "Private Parties";
        head2.textContent = "289$";
        para8.textContent = "Cupiditate ullam fuga accusantium reiciendis quaerat, explicabo labore iure, animi earum at recusandae possimus porro sequi perferendis Suscipit, delectus amet optio non quasi.";
        eventImg.setAttribute("src", "img/events/events2.jpg");

        count = 2;
    }
    else if (count === 2) {
        heading10.textContent = "Custom Parties";
        head2.textContent = "99$";
        para8.textContent = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. In asperiores nihil sit voluptatum inventore beatae fuga, iure voluptate dolorem consequatur esse ea perspiciatis.";
        eventImg.setAttribute("src", "img/events/events1.jpg");

        count = 1;
    }
    
}


let query8 = next.onclick = () => {
    if (count===1) {
        heading10.textContent = "Custom Parties";
        head2.textContent = "99$";
        para8.textContent = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. In asperiores nihil sit voluptatum inventore beatae fuga, iure voluptate dolorem consequatur esse ea perspiciatis.";

        eventImg.setAttribute("src", "img/events/events1.jpg");
        count = 2;
    }
    else if (count === 2) {
        heading10.textContent = "Private Parties";
        head2.textContent = "289$";
        para8.textContent = "Cupiditate ullam fuga accusantium reiciendis quaerat, explicabo labore iure, animi earum at recusandae possimus porro sequi perferendis Suscipit, delectus amet optio non quasi.";

        eventImg.setAttribute("src", "img/events/events2.jpg");
        count = 3;
    }
    else if (count === 3) {
        heading10.textContent = "Birthday Parties";
        head2.textContent = "499$";
        para8.textContent = "Laborum aperiam atque omnis minus omnis est qui assumenda quos. Quis id sit quibusdam. Esse quisquam ducimus officia ipsum ut quibusdam maxime. Non enim perspiciatis.";

        eventImg.setAttribute("src", "img/events/events3.jpg");
        count = 4;
    }
    else if (count === 4) {
        heading10.textContent = "Wedding Parties";
        head2.textContent = "899$";
        para8.textContent = "Rerum minima, voluptas quos quia quas reiciendis voluptatum inventore corrupti aspernatur vero molestiae ea dolorum repellendus cumque soluta magni facilis corporis optio, delectus modi repellat! ";

        eventImg.setAttribute("src", "img/events/events4.jpg");
        count = 5;
    }
    else {
        heading10.textContent = "Our Events";
        head2.textContent = "at Reliable Cost";
        para8.textContent = "Alias error a maiores illum dolores sed veniam, eum voluptas explicabo sit facilis quis quod voluptates deserunt veritatis. perspiciatis repudiandae quos libero maxime ipsam, Delectus inventore perferendis a odio modi est iusto.";
        
        eventImg.setAttribute("src", "img/events/event.jpg");
        count = 1;
    }

}

let socialIcon1 = document.querySelector("#socialIcon1");//fb
let socialIcon2 = document.querySelector("#socialIcon2");//insta
let socialIcon3 = document.querySelector("#socialIcon3");//x
let socialIcon4 = document.querySelector("#socialIcon4");//lkdin

// Facebook
socialIcon1.addEventListener("mouseover", function(){
    socialIcon1.setAttribute("src", "img/footer/fb.png")
});
socialIcon1.addEventListener("mouseout", function(){
    socialIcon1.setAttribute("src", "img/footer/fbOg.png")
});

// Instagram
socialIcon2.onmouseover = () =>{
    socialIcon2.setAttribute("src", "img/footer/insta.png")
}
socialIcon2.onmouseout = () =>{
    socialIcon2.setAttribute("src", "img/footer/instaOg.png")
}

// Twitter
socialIcon3.onmouseover = () =>{
    socialIcon3.setAttribute("src", "img/footer/twitter.png")
}
socialIcon3.onmouseout = () =>{
    socialIcon3.setAttribute("src", "img/footer/twitterOg.png")
}

// LinkedIn
socialIcon4.onmouseover = () =>{
    socialIcon4.setAttribute("src", "img/footer/lkdin.png")
}
socialIcon4.onmouseout = () =>{
    socialIcon4.setAttribute("src", "img/footer/lkdinOg.png")
}
