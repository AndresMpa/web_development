"use strict";

//Color palette
const colors = {
  gree: 0x00ff00,
  blue: 0x0000ff,
  grayBlue: 0x2a3b4c,
};

/* The scene is the "teather" where
 * all the things you do will be
 * displayed
 * */
let scene = new THREE.Scene();
scene.background = new THREE.Color(colors.grayBlue);

/* The camera shows the scene in an
 * specific angle
 * */
let camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight
);

/* The render will take the content in the
 * scene and it will show it in the navigator
 * */
let renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

/* Creating the object
 * */

/* This is de geometrical figure that the script
 * is using
 * */
let geometry = new THREE.BoxGeometry();

/* This is the how the geometrical figure will
 * be displayed
 * */
let material = new THREE.MeshBasicMaterial({
  color: colors.blue,
  wireframe: true,
});

/* The cube is made of a geometry, and a material
 * in this case the material is just a color; but
 * using the "wireframe" it can display the content
 * behind it
 * */
let cube = new THREE.Mesh(geometry, material);

scene.add(cube);

/* As a 3D plane, Z axis will control the perpective
 * */

let distanceZ = 2;
camera.position.z = distanceZ;

const app = document.querySelector("#app");

app.addEventListener("keydown", (e) => {
  if (e.key === "ArrowUp") {
    distanceZ += 1;
    camera.position.z = distanceZ;
  }
  if (e.key === "ArrowDown") {
    distanceZ -= 1;
    camera.position.z = distanceZ;
  }
});

/* This function create the animation
 * */
const animate = function () {
  requestAnimationFrame(animate);

  cube.rotation.x += 0.05;
  cube.rotation.y += 0.01;

  renderer.render(scene, camera);
};

animate();
