

import {
    PerspectiveCamera,
    Scene,
    WebGLRenderer,
    AmbientLight,
    Vector3,
}                      from "../../../node_modules/three/build/three.module.js";
import {OrbitControls} from "../../../node_modules/three/examples/jsm/controls/OrbitControls.js";

let scene, camera, renderer, controls;

export const initBase    = () => {
           initScene();
           initCamera();
           initRenderer();
           initControls();
       },
             getScene    = () => scene,
             getCamera   = () => camera,
             getRenderer = () => renderer


const initScene    = () => {
          scene = new Scene();

          scene.add(new AmbientLight(0xffffff, 1));
      },
      initCamera   = (x = 0, y = 0, z = 100) => {
          camera = new PerspectiveCamera(40, window.innerWidth / window.innerHeight, .1, 1000);

          camera.position.x = x;
          camera.position.y = y;
          camera.position.z = z;
      },
      initRenderer = () => {
          renderer = new WebGLRenderer({antialias: true});

          renderer.setSize(window.innerWidth, window.innerHeight);
          renderer.setPixelRatio(window.devicePixelRatio);

          renderer.shadowMap.enabled = true
          renderer.sortObjects       = false;

          const onWindowResize = () => {
              camera.aspect = window.innerWidth / window.innerHeight;

              camera.updateProjectionMatrix();
              renderer.setSize(window.innerWidth, window.innerHeight);
          }

          window.addEventListener('resize', onWindowResize);
      },
      initControls = () => {
          controls = new OrbitControls(camera, renderer.domElement);

          controls.target = new Vector3(0, 0, 0);
          controls.update();
      }