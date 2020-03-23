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

  const div1 = document.createElement ('div')
  const div2 = document.createElement ('div')
  const img1 = document.createElement ('img')
  img1.src = "./assets/carousel/mountains.jpeg" 
  const img2 = document.createElement ('img')
  img2.src = "./assets/carousel/computer.jpeg"
  const img3 = document.createElement ('img')
  img3.src = "./assets/carousel/trees.jpeg"
  const img4 = document.createElement ('img')
  img3.src = "./assets/carousel/turntable.jpeg" 
  const div3 = document.createElement ('div')

 //Create HTML Structure

div1.appendChild(div2)
div1.appendChild(div3)
div1.appendChild(img1)
div1.appendChild(img2)
div1.appendChild(img3)
div1.appendChild(img4)

//Create Classes

div1.classList.add('carousel')
div2.classList.add('left-button')
div3.classList.add('right-button')


return div1

}

const container = document.querySelector('.carousel-container').appendChild(createCarousel())
