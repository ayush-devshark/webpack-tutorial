import Img from './img.png';
import mockUp from './altText.txt';

function addImg() {
    const img = document.createElement('img');
    img.alt = mockUp;
    img.width = 300;
    img.src = Img;
    const body = document.querySelector('body');
    body.appendChild(img);
}

export default addImg;
