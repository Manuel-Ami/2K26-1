let cam : unknown ;
cam = "camera";
if (typeof cam === "string") {
    console.log(cam.toUpperCase());
}


function createError(message:string, code:number): never {
    throw {message, code};
}