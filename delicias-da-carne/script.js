/*==================
    Slider
==================*/

let destaqueBoxes = document.querySelectorAll("#destaque .box");
let acougueButtons = document.querySelectorAll("#acougue .item-container .button-container .button ");

let counterObj = {
    "bovinos": 0,
    "avinos": 0,
    "suinos": 0,
    "peixaria": 0
};


let slideRightDestaque = sliderDestaque();
let slideAcougue = sliderAcougue();


destaqueBoxes.forEach((box) => {
  box.addEventListener("click", function() {
    slideRightDestaque(destaqueBoxes);
  });
})

function sliderDestaque() {
  let main = 0;

    let slideRight = function(array) {
        if (main === array.length - 1) {
        main = 0;
        } else {
        main++
        }

        let current = array[main];
        let previous = array[main - 1] ?? array[array.length - 1];
        let next = array[main + 1] ?? array[0];

        current.setAttribute("class", "box main-box");
        previous.setAttribute("class", "box left-box");
        next.setAttribute("class", "box right-box");
        
        array.length > 3 ? back.setAttribute("class", "box back-box") : null;

        clearInterval(interval);
        interval = window.setInterval(function() {slideRight(array)}, 5000);
    }

    let interval = window.setInterval(function() {slideRight(destaqueBoxes)}, 5000); 

    return slideRight;
}

acougueButtons.forEach((btn) => {

    btn.addEventListener("click", function() {
        let currentSection = btn.parentElement.parentElement.parentElement;
        let acougueBoxes = currentSection.querySelectorAll(".box");
        slideAcougue(acougueBoxes, btn.id, currentSection.id);
    });
  })

function sliderAcougue() {
    let firstClick = true;

      let slide = function(array, action, id) {

        let main = counterObj[id];

        if (action === "previous") {
            if (firstClick) {
                return;
            } 
            
            if (main === 0) {
                main = array.length - 1;
            } else {
                main--
            }
                  
                let back = main >= 2 ? array[main - 2] :  
                main === 1 ? array[array.length - 1] :
                array[array.length - 2];   
                let current = array[main];
                let previous = array[main - 1] ?? array[array.length - 1];
                let next = array[main + 1] ?? array[0];
        
                current.setAttribute("class", "box main-box");
                previous.setAttribute("class", "box left-box");
                next.setAttribute("class", "box right-box");
                back.setAttribute("class", "box back-box")

        } else if (action === "next") {
            if (firstClick) {
                firstClick = false;
            } 
            
            if (main === array.length - 1) {
                main = 0;
            } else {
                main++
            }
        
                let back = main >= 2 ? array[main - 2] :  
                main === 1 ? array[array.length - 1] :
                array[array.length - 2];   
                let current = array[main];
                let previous = array[main - 1] ?? array[array.length - 1];
                let next = array[main + 1] ?? array[0];
        
                current.setAttribute("class", "box main-box");
                previous.setAttribute("class", "box left-box");
                next.setAttribute("class", "box right-box");
                back.setAttribute("class", "box back-box")
        }
            counterObj[id] = main;
      } 

      return slide;
  
  }

/*==================
    Açougue Dropdown
==================*/

let categories = document.querySelectorAll("#acougue .section-bar");
let acougue = document.querySelector("#acougue");

categories.forEach((cat) => {
    cat.addEventListener("click", (e) => {
        let current = e.currentTarget;

        categories.forEach((cat) => {
            cat === current ? cat.classList.toggle("active") :
                              cat.classList.remove("active");
        });
    })
});

/*==================
    Buy Counter
==================*/

let toCartButton = document.querySelectorAll(".buy button");

console.log(toCartButton)

toCartButton.forEach((btn) => {
    btn.addEventListener("click", () => {
        let parent = btn.parentElement.parentElement.parentElement;
        toCart(btn.id, parent);
    })
})

function toCart(action, parentElement) {
    let itemCounter = parentElement.querySelector(".item-counter"); 


    // como vamos saber em qual elemento estamos???


    let counter = Number(itemCounter.textContent);

    if (counter > 0) {
        action === "add" ? itemCounter.textContent = ++counter :
                            itemCounter.textContent = --counter;
    } else {
        action === "add" ? itemCounter.textContent = ++counter :
        null;
    }
}
