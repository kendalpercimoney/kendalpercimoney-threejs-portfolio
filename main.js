import * as THREE from 'three';

const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);



    const renderer = new THREE.WebGLRenderer();
    renderer.setClearColor(0x333F47, 1); //background colour
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    function Car() {
      const car = new THREE.Group();

      const leftBackWheel = Wheel();
      leftBackWheel.position.x = -18;
      leftBackWheel.position.y = -14;
      car.add(leftBackWheel);

      const leftFrontWheel = Wheel();
      leftFrontWheel.position.x = 18;
      leftFrontWheel.position.y = -14;
      car.add(leftFrontWheel);

      const rightBackWheel = Wheel();
      rightBackWheel.position.x = -18;
      rightBackWheel.position.y = 14;
      car.add(rightBackWheel);

      const rightFrontWheel = Wheel();
      rightFrontWheel.position.x = 18;
      rightFrontWheel.position.y = 14;
      car.add(rightFrontWheel);

      const main = new THREE.Mesh(
        new THREE.BoxBufferGeometry(60, 30, 15), new THREE.MeshLambertMaterial({color: 0xa52523})
      );
      main.position.z = 12;
      car.add(main);

      const roof = new THREE.Mesh(
        new THREE.BoxBufferGeometry(33, 27, 12), new THREE.MeshLambertMaterial({color: 0x333333})
      );
      roof.position.x = -5;
      roof.position.z = 25.5;
      car.add(roof);

      const rLight = new THREE.Mesh(
        new THREE.BoxBufferGeometry(3, 3, 3), new THREE.MeshLambertMaterial({color: 0xffffff})
      );
      rLight.position.x = 30;
      rLight.position.y = 10;
      rLight.position.z = 15;
      car.add(rLight);

      const lLight = new THREE.Mesh(
        new THREE.BoxBufferGeometry(3, 3, 3), new THREE.MeshLambertMaterial({color: 0xffffff})
      );
      lLight.position.x = 30;
      lLight.position.y = -10;
      lLight.position.z = 15;
      car.add(lLight);



      return car;
    }



    function Wheel() {
      //create new geometry
      const geometry = new THREE.CylinderGeometry(7, 7, 10, 30);
      //create new material
      const material = new THREE.MeshLambertMaterial({color: 0x333333});
      //put them together
      const wheel = new THREE.Mesh(geometry, material);
      //add to scene

      //change position
      wheel.position.z = 6;
      return wheel;

    }
    //Wheel(); //just for testing

    //dont think this works either.
    //Car();

    //this adds the car to the scene.
    scene.add(Car());


    //light
    var light = new THREE.PointLight(0xffffff);
    light.position.set(-200, -200, 500);
    scene.add(light);

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    scene.add(ambientLight);





    camera.position.set(100, -200, 300);
    camera.up.set(0, 0, 1);
    camera.lookAt(0, 0, 0);
    // Add OrbitControls so that we can pan around with the mouse.

    //var cameraControls = new THREE.OrbitControls(camera, renderer.domElement);

    function animate() {
      requestAnimationFrame(animate);
      renderer.render(scene, camera);
      //car.rotation.x += 0.01;
      //pentagon.rotation.y -= 0.01;

      //controls.update();
    }
    animate();