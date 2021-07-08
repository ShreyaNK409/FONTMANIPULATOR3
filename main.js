difference=0;

function setup() {
    video = createCapture(VIDEO);
    video.size(400, 400);
    video.position(50, 150)

    canvas = createCanvas(450, 450);
    canvas.position(600, 130);
    posenet = ml5.poseNet(video, modelLoaded);
    posenet.on("pose", gotPoses);
}

function draw() {
    background("#e6acbd");
    textSize(difference);
    fill("#f20c1f");
    text('Shreya',40,80);

}

function modelLoaded() {
    console.log("model Loaded!!!!");
}

function gotPoses(results) {

    if (results.length > 0) {
        console.log(results);
        rightwristx = results[0].pose.rightWrist.x;
        leftwristx = results[0].pose.leftWrist.x;
        difference = floor(leftwristx - rightwristx);
    }

}
