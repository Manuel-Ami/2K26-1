"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let cam;
cam = "camera";
if (typeof cam === "string") {
    console.log(cam.toUpperCase());
}
function createError(message, code) {
    throw { message, code };
}
