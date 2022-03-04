import MockImg from './img.png';
import './mock-image.scss';

class MockImage {
    render() {
        const img = document.createElement('img');
        img.src = MockImg;
        img.alt = 'mock image';
        img.classList.add('mock-image');
        const body = document.querySelector('body');
        body.appendChild(img);
    }
}

export default MockImage;
