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


const createTabs = (tab) => {

    //Create Elements
  
    const tabs1 = document.createElement('div')
    const topics = document.createElement('div')
    const title = document.createElement('span')

    //Create HTMl Structure
    
    tabs1.appendChild(topics)
    topics.appendChild(title)
    
    //Add Classes

    tabs1.classList.add('tabs')
    topics.classList.add('topic')
    title.classList.add('title')

    //Add Content

    topics.textContent =  'TRENDING TOPIC'

return tabs1
}

const tabs = document.querySelector('.tabs')