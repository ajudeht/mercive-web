// //
// // let header = document.querySelector("#header");
// //
// // window.addEventListener('scroll', function(e) {
// //
// // let scrollPos = window.scrollY;
// //
// // console.log(scrollPos);
// // if (scrollPos > 500){
// // if (!header.classList.contains('color')){
// // header.classList.add('color');
// // }
// // } else {
// //   if (header.classList.contains('color')){
// //   header.classList.remove('color');
// //   }
// // }
// //
// // });
//
// var scene = new THREE.Scene();
// 			var camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );
//
// 			var renderer = new THREE.WebGLRenderer();
// 			renderer.setSize( window.innerWidth, window.innerHeight );
// 			document.body.appendChild( renderer.domElement );
//
// 			var geometry = new THREE.BoxGeometry( 1, 1, 1 );
// 			var material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
// 			var cube = new THREE.Mesh( geometry, material );
// 			scene.add( cube );
//
// 			camera.position.z = 5;
//
// var loader = new THREE.JSONLoader();
//
// // load a resource
// loader.load(
// 	// resource URL
// 	'../logo.json',
//
// 	// onLoad callback
// 	function ( geometry, materials ) {
// 		var material = materials[ 0 ];
// 		var object = new THREE.Mesh( geometry, material );
//     scene.add( object );
// 	},
//
// 	// onProgress callback
// 	function ( xhr ) {
// 		console.log( (xhr.loaded / xhr.total * 100) + '% loaded' );
// 	},
//
// 	// onError callback
// 	function( err ) {
// 		console.log( 'An error happened' );
// 	}
// );
//
// var animate = function () {
//   requestAnimationFrame( animate );
//
//   cube.rotation.x += 0.1;
//   cube.rotation.y += 0.1;
//
//   renderer.render(scene, camera);
// };
//
// animate();
