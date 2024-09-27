function changeText() {
    const textSection = document.getElementById('textSection');
    textSection.innerHTML = '<p>The text has been changed dynamically!</p>';
}

function changeColor() {
    const title = document.getElementById('title');
    title.style.color = 'red';  // Change the color to green
}

function moveTitle() {
    const title = document.getElementById('title');
    title.style.position = 'relative';
    title.style.left = '100px';  // Move the title 100px to the right
    // title.style.right = '100px';  // Move the title 100px to the left
}

function changeImage() {
    const image = document.getElementById('image');
    image.src = 'prime.jpeg'; // Change the image source
}

function addTextNode() {
    const parentDiv = document.getElementById('parentDiv');
    // const newTextNode = document.createTextNode('This is a new text node added dynamically.');
    // parentDiv.appendChild(newTextNode);  // Append the text node to the parent div

    const newTextNode = document.createTextNode('This is a new text node added dynamically.');
    const preElement = document.createElement('pre');
    preElement.appendChild(newTextNode);
    parentDiv.appendChild(preElement);

}

function deleteNode() {
    const parentDiv = document.getElementById('parentDiv');
    const paragraph = parentDiv.getElementsByTagName('p')[0];  // Access the first <p> tag inside the parentDiv
    // const paragraph1 = parentDiv.getElementsByTagName('p')[1];  // Access the second <p> tag inside the parentDiv
    if (paragraph) {
        parentDiv.removeChild(paragraph);  // Remove the paragraph node
    }
}