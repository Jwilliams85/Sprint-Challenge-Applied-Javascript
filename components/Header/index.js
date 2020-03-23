// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component

function Header() {

    //Create Element

    const header = document.createElement ('div')
    const dates = document.createElement ('span')
    const title = document.createElement ('h1')
    const temps = document.createElement ('span')

    //Create HTML Structure

    header.appendChild(dates)
    header.appendChild(title)
    header.appendChild(temps)


    //Create Classes

    header.classList.add('header')
    dates.classList.add('date')
    temps.classList.add('temp')

   //Add Conctent
   
   dates.innerHTML = 'SMARCH 28, 2019'
   title.innerHTML = 'Lambda Times'
   temps.innerHTML = '98°'

  return header

}

 const container = document.querySelector('.header-container').appendChild(Header())

