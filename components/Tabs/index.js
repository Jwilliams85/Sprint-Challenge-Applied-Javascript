// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

// div class="tabs">
//     <div class="topics">
//       <span class="title">TRENDING TOPICS:</span>
//     </div>
//   </div>

axios.get('https://lambda-times-backend.herokuapp.com/topics')
.then((response) => {
    const dom = document.querySelector('.topics')
    response.data.topics.forEach(element => {
        dom.appendChild(createTabs(element))
    })
})
.catch((error) => {
    console.log('Network Error')
    console.log(erro)
})

const createTabs = (object) => {

    //Create Elements
  
    const tabs1 = document.createElement('div')
    
    
    //Add Classes

    tabs1.classList.add('tab')
    
    //Add Content

    tabs1.innerHTML = object

return tabs1
}
