import {getCamera, getRenderer, getScene} from "./init.js";

 let textMooved = false;

export const animate = () => {

    document.body.appendChild(getRenderer().domElement);

    getRenderer().render(getScene(), getCamera());
    if (!textMooved && getScene().children.length > 1) {

        centerElement(getScene().children[1]);
        centerElementByElement(getScene().children[2], getScene().children[1]);
        textMooved = !textMooved;
    }

    requestAnimationFrame(animate);
}

const centerElement = (element) => {
    getCamera().position.x = element.geometry.boundingSphere.center.x
}

const centerElementByElement = (element, elementToCenter) => {
    element.position.x = (elementToCenter.geometry.boundingSphere.center.x) - element.geometry.boundingSphere.center.x
}