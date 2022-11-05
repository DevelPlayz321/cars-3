function setup(){
    var canvas = createCanvas(640, 420);
    canvas.center();
    ObjectDetector = ml5.objectDetector('cocossd',modelLoaded );
    document.getElementById('status').innerHTML = "Status = Detecting Objects........"
}

function preload(){
    img = loadImage("download.jpeg");
}

function draw(){
    image(img , 0, 0, 640, 420);
}

function gotResult(error, result) {
    if(error){
        console.error(error);
    }
    console.log(result);
}

function modelLoaded(){
    console.log('model loaded');
    status = true;
    objectDetector.detect(img, gotResult);
}