const body = document.querySelector("body");

const IMAGE_NUMBER = 5; //갖고있는 이미지 개수

function paintImage(imgNumber) {
    const image = new Image();
    image.src = `images/${imgNumber + 1}.jpg`
    // +1하는 이유는 랜덤넘버가 0이될수도 있기때문 
    image.classList.add("bgImage");
    body.prepend(image);
}

function genRandom() {
    const number = Math.floor(Math.random() * IMAGE_NUMBER);
    return number;

}

function init() {
    const randomNumber = genRandom();
    paintImage(randomNumber);
};

init();