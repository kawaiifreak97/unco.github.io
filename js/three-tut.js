var camera;
var scene;
var renderer;
var mesh;
  
init();
animate();
  
function init() {
  
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera( 70, (window.innerWidth) / (window.innerHeight), 1, 1000);
  
    var light = new THREE.DirectionalLight( 0xffffff );
    light.position.set( 0, 1, 1 ).normalize();
    scene.add(light);
  
    var geometry = new THREE.CubeGeometry( 10, 10, 10);
    
    
    var material = new THREE.MeshPhongMaterial;
    material.map = THREE.ImageUtils.loadTexture('images/tam.jpg');
    
    /*var material1 = new THREE.MeshPhongMaterial( { map: THREE.ImageUtils.loadTexture('images/tam.jpg') } );
    var material2 = new THREE.MeshPhongMaterial( { map: THREE.ImageUtils.loadTexture('images/') } );
    var material3 = new THREE.MeshPhongMaterial( { map: THREE.ImageUtils.loadTexture('images/clouds.jpg') } );
    var material4 = new THREE.MeshPhongMaterial( { map: THREE.ImageUtils.loadTexture('images/stone-wall.jpg') } );
    var material5 = new THREE.MeshPhongMaterial( { map: THREE.ImageUtils.loadTexture('images/water.jpg') } );
    var material6 = new THREE.MeshPhongMaterial( { map: THREE.ImageUtils.loadTexture('images/wood-floor.jpg') } );
  
    var materials = [material1, material2, material3, material4, material5, material6];
  
    var meshFaceMaterial = new THREE.MeshFaceMaterial( materials )*/
    
    mesh = new THREE.Mesh(geometry, material );
    mesh.position.z = -50;
    mesh.position.y = 20;
    mesh.position.x = -40;
    scene.add( mesh );
  
    renderer = new THREE.WebGLRenderer();
    renderer.setSize( window.innerWidth, window.innerHeight );
    document.body.appendChild( renderer.domElement );
  
    window.addEventListener( 'resize', onWindowResize, false );
  
    render();
}
  
function animate() {
    mesh.rotation.x += .01;
    mesh.rotation.y += .01;
  
    render();
    requestAnimationFrame( animate );
}
  
function render() {
    renderer.render( scene, camera );
}
  
function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize( window.innerWidth, window.innerHeight );
    render();
}