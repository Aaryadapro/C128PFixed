Song_1 = "";
Song_2 = "";
leftWristX = 0;
leftWristY = 0;
rightWristX = 0;
rightWristY = 0;


function setup(){
    canvas = createCanvas(440, 400);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on("pose", gotPoses);
}

function modelLoaded(){
    console.log("poseNet is initialized");
}

function gotPoses(results){
    if(results.length > 0){
        leftWristX = results[0].pose.leftWrist.x;
        leftWristY = results[0].pose.leftWrist.y;
        console.log("Left Wrist X ="+ leftWristX +"Left Wrist Y ="+ leftWristY);

        rightWristX = results[0].pose.rightWrist.x;
        rightWristY = results[0].pose.rightWrist.y;
        console.log("Left Wrist X ="+ rightWristX +"Left Wrist Y ="+ rightWristY);
    }
}

function preload(){
    loadSound("music.mp3");
    loadSound("music2.mp3");
}

function draw(){
    image(video, 0, 0, 600, 500);
}