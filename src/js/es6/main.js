import ThreeBase from "./modules/ThreeBase.js"


let threeBase = new ThreeBase(25, window.innerWidth / window.innerHeight, 0.1, 1000);
window.console.log('threebase', threeBase);

let geometry = new THREE.BoxGeometry();
let material = new THREE.MeshBasicMaterial( { color: 0x99ff00 } );
let cube = new THREE.Mesh( geometry, material );
window.console.log(cube);
threeBase.scene.add(cube);

threeBase.camera.position.z = 5;

function animate() {
    requestAnimationFrame( animate );
    threeBase.renderer.render( threeBase.scene, threeBase.camera );
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
}

animate();