import {initBase} from "./modules/init.js";
import {loadText} from "./modules/createText.js";
import {animate}  from "./modules/animate.js";

initBase();

loadText('minecraft', 10, -45, ["#45a5ed", "#1795a0"], [0, 0, 8], 6);
loadText('Extended Edition', 7, 45, ["#e89a5e", "#ba5a18"], [4, -1, -10], 10);

animate();