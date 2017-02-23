/**
 * First, let's preapare some contexte
 */

// The WIDTH of the scene to render
var __WIDTH__ = 400,

  // The HEIGHT ot the scene to render
  __HEIGHT__ = 400,

  // The angle of the camera that will shox the scene
  // It is express in degres
  __ANGLE__ = 45,

  // The shortest distance the camera can see
  __NEAR__ = 1,

  // The fartest distance the camera can see
  __FAR__ = 1000

// The basic hue used to color our object
__HUE__ = 0;

/**
 * To reder a 3D scene, ThreeJS needs 3 elements :
 * A scene where to put all the objects
 * A camera to manage the point of view
 * A renderer place to show the result
 */
var scene = new THREE.Scene(),
  camera = new THREE.PerspectiveCamera(__ANGLE__,
    __WIDTH__ / __HEIGHT__,
    __NEAR__,
    __FAR__),
  renderer = new THREE.WebGLRenderer();

/**
 * Let's preapare the scene
 */

// Add the camera to the scene
scene.add(camera);

// As all objects, the camera is put at the 0,0,0 coordonate, let's pull it back a little
camera.position.z = 500;

// We need to define the size of the renderer
renderer.setSize(__WIDTH__, __HEIGHT__);

// Let's attach our rendering zone to our page
document.getElementById("myPlanet").appendChild(renderer.domElement);

/**
 * Now we are ready, we can start building our planet
 * To do this, we need a mech define with :
 * A geometry (a sphere) 
 * A material
 */
var geometry, material, mesh;

// First let's build our geometry
// There is other parameters, but you basically just need to define the radius of the Sphere and the number of vertical and horizontal division.
// From the 2 last parameters depend the number of vertex that will be produce : the biger the smoother the form will be but also the slower it will be to render. Make a wise choice to balance the 2.
geometry = new THREE.SphereGeometry(100, 20, 20);

// Then, prepare our material
var myMaterial = {
  wireframe: true,
  wireframeLinewidth: 2
}

// We just have to build the material now
material = new THREE.MeshPhongMaterial(myMaterial);

// Add some color to the material
material.color.setHSV(__HUE__, 1, 1);

// And  we can build our the mesh
mesh = new THREE.Mesh(geometry, material);

// Let's add the mesh to the scene
scene.add(mesh);

/**
 * To be sure that we will see something, we need to add some light to the scene
 */

// Let's create a point light
var pointLight = new THREE.PointLight(0xFFFFFF);

// and set its position
pointLight.position.x = -100;
pointLight.position.y = 100;
pointLight.position.z = 400;

// Now, we can add it to the scene
scene.add(pointLight);


// And finally it's time to see the result
renderer.render(scene, camera);


/**
 * Let's make the sphere spin
 */

// Simple requestAnimationFrame shim
if (!window.requestAnimationFrame) {
  window.requestAnimationFrame = (function() {
    return window.webkitRequestAnimationFrame ||
      window.mozRequestAnimationFrame ||
      window.oRequestAnimationFrame ||
      window.msRequestAnimationFrame ||
      function(callback) {
        window.setTimeout(callback, 1000 / 60);
      };
  })();
}

// The frame computation function
function animate() {
  requestAnimationFrame(animate);

  __HUE__ = __HUE__ < 1 ? __HUE__ += 0.0005 : 0;
  material.color.setHSV(__HUE__, 1, 1);

  mesh.rotation.y -= 0.003;

  renderer.render(scene, camera);
}

// And go!
animate();