

var scene = new THREE.Scene();
var WIDTH = window.innerWidth;
var HEIGHT = window.innerHeight;

var camera = new THREE.PerspectiveCamera( 75,1, 0.1, 1000 );

var renderer = new THREE.WebGLRenderer( { antialias: true });

renderer.setSize( 500, 500 );




var show = document.getElementById('area');

show.appendChild( renderer.domElement );

renderer.setClearColor(0xFD5A94);

var geometry = new THREE.BoxGeometry(1,1,1);
var material = new THREE.MeshBasicMaterial( { color: 0x00ffff, wireframe: true } );
var cube = new THREE.Mesh( geometry, material );

scene.add(cube);

var loader = new THREE.FontLoader();

loader.load( 'fonts/helvetiker_regular.typeface.json', function ( font ) {

	var geometry = new THREE.TextBufferGeometry( 'Hello three.js!', {
		font: font,
		size: 80,
		height: 5,
		curveSegments: 12,
		bevelEnabled: true,
		bevelThickness: 10,
		bevelSize: 8,
		bevelOffset: 0,
		bevelSegments: 5
	} );
} );


function animate() {
    requestAnimationFrame( animate );
	renderer.render( scene, camera );
    camera.position.z = 3;

    cube.rotation.y += 0.05;
    cube.rotation.z += 0.01;
    cube.rotation.x += 0.01;
}
animate();
