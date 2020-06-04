export default class {

    constructor(fieldOfView, aspect, near, far) {
        this._scene = new THREE.Scene();
        this._camera = new THREE.PerspectiveCamera(fieldOfView, aspect, near, far);
        this._renderer = new THREE.WebGLRenderer();
        this._renderer.setSize(window.innerWidth, window.innerHeight);
        document.body.appendChild(this._renderer.domElement);
    }

    get scene() {
        return this._scene;
    }

    get camera() {
        return this._camera;
    }

    get renderer() {
        return this._renderer;
    }
}