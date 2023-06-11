import * as THREE from "three";

// Create a scene

var scene = new THREE.Scene();

// Create a camera
var camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  1,
  1100
);

// Create a renderer
var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Create a points material
var pointsMaterial = new THREE.PointsMaterial({
  size: 100,
  color: 0x0000ff,
});

// Read the coordinates from the data.json file
var pointsData = JSON.parse(fs.readFileSync("./data.json"));

// Create a points object
var points = new THREE.PointsGeometry(pointsData);
points.material = pointsMaterial;

// Add the points to the scene
scene.add(points);

// Set the camera position
camera.position.z = 500;

// Start the animation loop
var animate = function () {
  requestAnimationFrame(animate);

  // Update the camera
  camera.lookAt(points.position);

  // Render the scene
  renderer.render(scene, camera);
};

animate();
