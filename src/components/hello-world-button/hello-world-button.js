import './hello-world-button.scss';

class HelloWorldButton {
    btnCSSClass = 'hello-world-button';

    render() {
        const button = document.createElement('button');
        button.innerHTML = 'Hello World';
        button.classList.add(this.btnCSSClass);
        const body = document.querySelector('body');
        button.onclick = function () {
            const p = document.createElement('p');
            p.innerHTML = 'Hello World';
            p.classList.add('hello-world-txt');
            body.appendChild(p);
        };
        body.appendChild(button);
    }
}

export default HelloWorldButton;
