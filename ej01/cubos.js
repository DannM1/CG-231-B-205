var WIDTH = window.innerWidth;
var HEIGHT = window.innerHeight;

//Escenario, camara y render
var renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(WIDTH, HEIGHT);
renderer.setClearColor(0xDDDDDD, 1);
document.body.appendChild(renderer.domElement);

var scene = new THREE.Scene();

var camera = new THREE.PerspectiveCamera(80, WIDTH / HEIGHT);
camera.position.z = 4.5;
camera.position.x = -1.2;
camera.position.y = 2;

camera.rotation.set(0, -0.5, 0);
scene.add(camera);

var controls = new THREE.OrbitControls(camera, renderer.domElement);

lado=1;

        //cube 1
        var geometry1 = new THREE.BoxGeometry(lado,lado,lado);
        var material1 = new THREE.MeshToonMaterial({color: 0x00ff00});
        var cube1 = new THREE.Mesh(geometry1, material1);

        //cube 2
        var geometry2 = new THREE.BoxGeometry(lado,lado,lado);
        var material2 = new THREE.MeshToonMaterial({color: 0x0000AA});
        var cube2 = new THREE.Mesh(geometry2, material2);

        //cube 3
        var geometry3 = new THREE.BoxGeometry(lado,lado,lado);
        var material3 = new THREE.MeshToonMaterial({color: 993366});
        var cube3 = new THREE.Mesh(geometry3, material3);


        camera.position.z = 5;

        document.addEventListener('keydown', function(event) {
            switch(event.keyCode) {
                case 49: 
                scene.add(cube1);
                geometry1.translate(0.5,0.5,0.5 );
                break;
                case 50: 
                scene.add(cube2);
                geometry2.translate(0.5,0.5,0.5 );
                break;
                case 51: 
                scene.add(cube3);
                geometry3.translate(0.5,0.5,0.5 );
                break;
                case 81: 
                geometry2.scale(1/2, 1/2, 1/2);
                geometry2.translate(lado/4,lado+0.005,lado/4 );
                break;
                case 87: 
                geometry3.scale(1/4, 1/4, 1/4 );
                geometry3.translate( 0.38 ,lado + 0.5, 0.38  );
                break;
                case 82: 
                scene.remove(cube1);
                scene.remove(cube2);
                scene.remove(cube3);
                break;

            }
        });

const light = new THREE.DirectionalLight(0xffffff, 1);
light.position.set(-1, 2, 4);
scene.add(light);


const size = 150;
const divisions = 160;
const axesHelper = new THREE.AxesHelper(1000);
scene.add(axesHelper);

const gridHelper = new THREE.GridHelper(size, divisions);
scene.add(gridHelper);

function render() {
  requestAnimationFrame(render);
  renderer.render(scene, camera);
}

render();