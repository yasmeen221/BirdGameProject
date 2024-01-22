const moveBird = function (birdImage, currentLeft, currentTop) {
  let idStopInterval = setInterval(() => {
    currentLeft += 10;
    if (currentTop >= window.innerHeight - birdImage.height) {
      currentTop = 0;
    }
    currentTop += 5;
    // Handel Top
    if (currentLeft >= window.innerWidth - birdImage.width) {
      clearInterval(idStopInterval);
      birdImage.classList.add("notshow");
      setTimeout(() => {
        setTimeout(() => {
          currentLeft = 0;
          birdImage.style.top = currentTop + "px";
          birdImage.classList.remove("notshow");
        }, 60);
      }, 100);
      moveBird(birdImage, 0, currentTop);
    } else {
      birdImage.style.left = currentLeft + "px";
    }
  }, 100);
};

const scoreElement = document.getElementById("score");
let score = 0;

function killBird() {
  scoreElement.innerText = score + 1;
  // Handel cursor =========question why not play!!!!!!!!!!!!!!
  // const customCursorImage = new Image();
  // customCursorImage.src = "images/mouse.png";
  // customCursorImage.onload = function () {
  //   bird.style.cursor = `url('${customCursorImage.src}'), pointer`;
  // };

  bird.style.display = "none";
  // handel when kill it display another position
  setTimeout(() => {
    bird.style.display = "block";
    score++;
    if (score ==30) {
      alert("you killed bird 😢");
      score = 0;
    
    }
    // moveBird(birdImage, currentLeft, 0);
    const maxX = window.innerWidth - bird.clientWidth;
    const maxY = window.innerHeight - bird.clientHeight;

    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    bird.style.top = `${randomY}px`;
    bird.style.left = `${randomX}px`;
  }, 500);
}

bird.addEventListener("click", killBird);
