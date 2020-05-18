/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

/* HTML:
  <div class="carousel">
    <div class="left-button"> < </div>
    <img src="./assets/carousel/mountains.jpeg" />
    <img src="./assets/carousel/computer.jpeg" />
    <img src="./assets/carousel/trees.jpeg" />
    <img src="./assets/carousel/turntable.jpeg" />
    <div class="right-button"> > </div>
  </div>
*/



function createCarousel() {

  //Create Element

  const carousel = document.createElement ('div')
  const leftButton = document.createElement ('div')
  const img1 = document.createElement ('img')
  img1.src = "./assets/carousel/mountains.jpeg" 
  const img2 = document.createElement ('img')
  img2.src = "./assets/carousel/computer.jpeg"
  const img3 = document.createElement ('img')
  img3.src = "./assets/carousel/trees.jpeg"
  const img4 = document.createElement ('img')
  img4.src = "./assets/carousel/turntable.jpeg" 
  const rightButton = document.createElement ('div')

 //Create HTML Structure

carousel.appendChild(leftButton)
carousel.appendChild(img1)
carousel.appendChild(img2)
carousel.appendChild(img3)
carousel.appendChild(img4)
carousel.appendChild(rightButton)
//Create Classes

carousel.classList.add('carousel')
leftButton.classList.add('left-button')
rightButton.classList.add('right-button')
// img1.classList.add('img')
// img2.classList.add('img')
// img3.classList.add('img')
// img4.classList.add('img')

//Event Listener

leftButton.addEventListener('click', () => {
  leftButton.classList.toggle('hide-btn')
})

return carousel

}

const CarouselContainer = document.querySelector('.carousel-container');
const newCarousel = createCarousel();
CarouselContainer.appendChild(newCarousel);

