import Img from './img.png';

function addImg() {
    const img = document.createElement('img');
    img.alt = 'web design';
    img.width = 300;
    img.src = Img;
    const body = document.querySelector('body');
    body.appendChild(img);
}

export default addImg;
