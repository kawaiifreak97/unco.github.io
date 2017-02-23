var container;    
var camera;
var scene;
var renderer;
var raycaster;
var mouse;   
var tammesh;


   
  
init();
animate();
  
function init() {
    
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera( 70, 800/800, 1, 1000);
  
    var light = new THREE.DirectionalLight( 0xffffff );
    light.position.set( 0, 1, 1 ).normalize();
    scene.add(light);
    
    
    geometry = new THREE.CubeGeometry( 25, 25, 25 );
    
   /*  var video = document.createElement('video');
    video.src = "videos/tam-dj";
    video.load();
    video.play();

//make your video canvas
var videocanvas = document.createElement('canvas');
var videocanvasctx = videocanvas.getContext('2d');

//set its size
videocanvas.width = 440;
videocanvas.height = 440;

//draw a black rectangle so that your spheres don't start out transparent
videocanvasctx.fillStyle = "#000000";
videocanvasctx.fillRect(0,0,640,480);

//add canvas to new texture
var spheretexture = new THREE.Texture(videocanvas);

//add texture to material that will be wrapped around the sphere
var material = new THREE.MeshBasicMaterial( { map: spheretexture, overdraw: 0.5 } );


//Use whatever values you were using for the sizes of the spheres before
var sphere = new THREE.SphereGeometry(200,2)

//make a mesh from the material and the geometry (the sphere)
var sphereMesh = new THREE.Mesh(sphere, material);

    //particles
    var material = new THREE.PointCloudMaterial({color: 0xffffcc});
    var geometry = new THREE.Geometry();
    var x, y, z;
_.times(1000, function(n){
  x = (Math.random() * 800) - 400;
  y = (Math.random() * 800) - 400;
  z = (Math.random() * 800) - 400;

  geometry.vertices.push(new THREE.Vector3(x, y, z));});
    
    var pointCloud = new THREE.PointCloud(geometry, material);*/
    
    tammaterial = new THREE.MeshPhongMaterial( { map: THREE.ImageUtils.loadTexture('images/tam.jpg') } );
    
    tammesh = new THREE.Mesh(geometry, tammaterial );
    tammesh.position.z = -50;
    tammesh.position.y = 0;
    tammesh.position.x = 0;
    
   
    

    
    scene.add(tammesh);
    
    
    renderer = new THREE.WebGLRenderer();
    renderer.setSize( window.innerWidth, window.innerHeight );
    document.getElementById("TheScene2").appendChild( renderer.domElement );
  
   
    window.addEventListener( 'resize', onWindowResize, false );
  
    render();
}
  
function animate() {
    tammesh.rotation.x += .01;
    tammesh.rotation.y += .01;
    /*tammesh.position.y = Math.sin( Date.now() * 0.00049 ) * 20;*/
    tammesh.position.y = 0;
    
    //camera.lookAt(tammesh)
    
   /*camera.position.x = Math.sin( Date.now() * 0.0004 ) * 100;
   camera.position.y = Math.sin( Date.now() * 0.0005 ) * 120;
   camera.position.z = Math.sin( Date.now() * 0.0007 ) * 300;*/
    
  
 
    render();
    requestAnimationFrame( animate );
}
    
  
  
function render() {
    
	renderer.render( scene, camera );

}
  
  
function onWindowResize() {
    camera.aspect = 800/800;
    camera.updateProjectionMatrix();
    renderer.setSize( window.innerWidth, window.innerHeight);
    render();
}