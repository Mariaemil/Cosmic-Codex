handleClick = (ele)=>{
  let links = document.getElementsByClassName('list')
  console.log(links)
  for(i = 0 ; i<links.length ; i++){
    links[i].className = 'list'
  }
  ele.className='list nav-active'
}  
animateLoadingScreen = ()=>{
  var screen = document.querySelector('.screen')
  var rocket = document.querySelector('.rocket')
  setTimeout(() => {
    rocket.classList.add('active')
    screen.classList.add('animateScreen')
  }, 800);
}
animateLoadingScreen()
const slides = document.querySelectorAll('.createBtn');
const customDiv = document.querySelector('.customDiv');

slides.forEach(slide => {
  slide.addEventListener('click', function() {
    // Get header and content from data attributes
    const headerText = this.getAttribute('data-header');
    const info = this.getAttribute('data-content');

    // Create a new div element
    const newDiv = document.createElement('div');
    newDiv.classList.add('dynamic-info');

    // Create a header inside the div
    const newHeader = document.createElement('h1');
    newHeader.textContent = headerText;
    newHeader.className='h1'

    // Create a paragraph inside the div
    const newParagraph = document.createElement('p');
    newParagraph.textContent = info;

    // Append the header and paragraph to the new div
    newDiv.appendChild(newHeader);
    newDiv.appendChild(newParagraph);

    // Clear previous content and append the newly created div to the info container
    customDiv.innerHTML = ''; // Clear previous info
    customDiv.appendChild(newDiv);
    customDiv.style.display='flex'
    setTimeout(() => {
      newDiv.classList.add('show');
    }, 10);
  });
});
