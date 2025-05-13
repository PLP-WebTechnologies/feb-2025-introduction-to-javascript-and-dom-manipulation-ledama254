// Wait for the DOM to be fully loaded before executing JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // Task 1: Change text content dynamically
    const changeTextBtn = document.getElementById('change-text-btn');
    const welcomeText = document.getElementById('welcome-text');
    
    changeTextBtn.addEventListener('click', function() {
        welcomeText.textContent = welcomeText.textContent === 'Welcome to JavaScript DOM Manipulation!' 
            ? 'Text changed successfully!' 
            : 'Welcome to JavaScript DOM Manipulation!';
    });
    
    // Task 2: Modify CSS styles via JavaScript
    const changeStyleBtn = document.getElementById('change-style-btn');
    const description = document.querySelector('.description');
    
    changeStyleBtn.addEventListener('click', function() {
        description.classList.toggle('highlight');
    });
    
    // Task 3: Add an element when a button is clicked
    const addElementBtn = document.getElementById('add-element-btn');
    const itemList = document.getElementById('item-list');
    let itemCounter = 3;
    
    addElementBtn.addEventListener('click', function() {
        const newItem = document.createElement('li');
        newItem.textContent = `Item ${itemCounter++}`;
        newItem.classList.add('new-item');
        itemList.appendChild(newItem);
    });
    
    // Task 4: Remove an element when a button is clicked
    const removeElementBtn = document.getElementById('remove-element-btn');
    
    removeElementBtn.addEventListener('click', function() {
        const items = itemList.getElementsByTagName('li');
        if (items.length > 0) {
            itemList.removeChild(items[items.length - 1]);
            if (itemCounter > 3) itemCounter--;
        } else {
            alert('No more items to remove!');
        }
    });
});