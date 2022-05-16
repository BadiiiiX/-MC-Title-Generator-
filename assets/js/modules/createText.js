import {Mesh, MeshPhongMaterial} from "../../../node_modules/three/build/three.module.js";
import {FontLoader}              from "../../../node_modules/three/examples/jsm/loaders/FontLoader.js";
import {TextGeometry}            from "../../../node_modules/three/examples/jsm/geometries/TextGeometry.js";
import {getScene}                from "./init.js";

let down = 0;

const loader = new FontLoader();

export const loadText = (text, size, angle, [firstColor, secondColor] = [0xff6600, 0x0000ff], [x, y, z] = [0, 0, 0], h) => {

    loader.load('../assets/json/Minecrafter_Regular.json', (font) => {

        const geometry = new TextGeometry(text, {
            font          : font,
            size          : size,
            height        : h,
            curveSegments : 10,
            bevelEnabled  : true,
            bevelOffset   : 0,
            bevelSegments : 1,
            bevelSize     : 0.3,
            bevelThickness: 1,
        });

        const materials = generateMaterials(firstColor, secondColor);

        const element = generateMesh(geometry, materials, angle);

        element.position.x = x || 0;
        element.position.y = y || 0;
        element.position.z = z || 0;

        getScene().add(element)
        down += 3
    });

}

const generateMaterials = (firstColor, secondColor) => {
          return [
              new MeshPhongMaterial({color: firstColor}), // front
              new MeshPhongMaterial({color: secondColor}), // side
          ];
      },
      generateMesh      = (geometry, materials, angle) => {
          const mesh = new Mesh(geometry, materials);
          mesh.rotateX(angle * Math.PI / 180);
          mesh.position.y = -down;



          return mesh;
      }