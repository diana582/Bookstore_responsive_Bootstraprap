function getCardContent() {
  return `
    <div class="d-flex justify-content-around">
      <div class="text-center">
        <img src="author1.webp" class="author-image" alt="Author 1">
        <p id="par3">Arundhati Roy</p>
      </div>
      <div class="text-center">
        <img src="author2.webp" class="author-image" alt="Author 2">
        <p id="par3">Stephan Coonts</p>
      </div>
      <div class="text-center">
        <img src="author3.webp" class="author-image" alt="Author 3">
        <p id="par3">William words</p>
      </div>
       <div class="text-center">
        <img src="author4.jpeg" class="author-image" alt="Author 3">
        <p id="par3">Stephan King</p>
      </div>
      <div class="text-center">
        <img src="author5.webp" class="author-image" alt="Author 3">
        <p id="par3">John Green</p>
      </div>
    </div>`;
}
function getCardContent2() {
  return `
    <div class="d-flex justify-content-around">
      <div class="text-center">
        <img src="book31.jpg" class="book-image" alt="Author 1">
        <p id="par3">Arundhati Roy</p>
      </div>
      <div class="text-center">
        <img src="book30.jpg" class="book-image" alt="Author 2">
        <p id="par3">Stephan Coonts</p>
      </div>
      <div class="text-center">
        <img src="book32.jpg" class="book-image" alt="Author 3">
        <p id="par3">William words</p>
      </div>
       <div class="text-center">
        <img src="book34.jpg" class="book-image" alt="Author 3">
        <p id="par3">Stephan King</p>
      </div>
      <div class="text-center">
        <img src="book35.jpg" class="book-image" alt="Author 3">
        <p id="par3">John Green</p>
      </div>
    </div>`;
}

function openNav(content) {
  document.getElementById("overlay-content").innerHTML = content;
  document.getElementById("myNav").style.height = "400px";
}

function closeNav() {
  document.getElementById("myNav").style.height= "0px";
}