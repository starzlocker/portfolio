/*==================
    Slider
==================*/

let destaqueBoxes = document.querySelectorAll("#destaque .box");
let acougueBoxes = document.querySelectorAll("#acougue .box");
let acougueButtons = document.querySelectorAll("#acougue .item-container .button-container .button ");

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
        slideAcougue(acougueBoxes, btn.id);
    });
  })

function sliderAcougue() {
    let main = 0;

      let slide = function(array, action) {
        console.log(action);
        if (action === "previous") {

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
            
      } 

      return slide;
  
  }

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
