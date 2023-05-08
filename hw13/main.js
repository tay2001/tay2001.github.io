// Create a scene
const scene = new THREE.Scene();

const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
scene.add(ambientLight);

// Create a camera
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 10;

// Create a renderer
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Create a star geometry
const starGeometry = new THREE.Geometry();
starGeometry.vertices.push(new THREE.Vector3(0, 0, 0));

// Add points to the star geometry
for (let i = 0; i < 5; i++) {
    const angle = i * 2 * Math.PI / 5;
    const x = Math.cos(angle);
    const y = Math.sin(angle);
    starGeometry.vertices.push(new THREE.Vector3(x, y, 0));
}

// Create a material for the star
const starMaterial = new THREE.PointsMaterial({
    color: 0xffffff,
    size: 0.5,
});

// Create the first star object
const star1 = new THREE.Points(starGeometry, starMaterial);
star1.position.set(-2, 0, 0);
scene.add(star1);

// Create the second star object
const star2 = new THREE.Points(starGeometry, starMaterial);
star2.position.set(2, 0, 0);
scene.add(star2);

// Create an OBJ loader
const loader = new THREE.OBJLoader();

// Load the Mario model
loader.load('hw13/mario.obj',
    function (object) {
        // Create a material for the Mario model
        const marioMaterial = new THREE.MeshStandardMaterial({
            color: 0xffffff,
            roughness: 0.7,
            metalness: 0.0,
        });
        // Set the material to all the meshes in the Mario object
        object.traverse(function (child) {
            if (child instanceof THREE.Mesh) {
                child.material = marioMaterial;
            }
        });

        // Position and scale the Mario object
        object.position.set(0, -1, -5);
        object.scale.set(0.1, 0.1, 0.1);

        // Add the Mario object to the scene
        scene.add(object);
    },
    function (xhr) {
        console.log((xhr.loaded / xhr.total * 100) + '% loaded');
    },
    function (error) {
        console.log('An error happened: ' + error);
    });

// Animate the scene
function animate() {
    requestAnimationFrame(animate);
    // Rotate the stars around the z-axis
    star1.rotation.z += 0.01;
    star2.rotation.z -= 0.01;

    // Render the scene
    renderer.render(scene, camera);
}
animate()