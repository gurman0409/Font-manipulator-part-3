rightWrist = 0;
leftWrist = 0;
difference = 0;
function setup()
{
     canvas = createCanvas(400,400);
     canvas.position(560,150);
     video = createCapture(VIDEO);
     video.size(500,500);

     poseNet = ml5.poseNet(video, modelLoaded);
     poseNet.on('pose', gotPoses);
}

function gotPoses(results)
{
     if(results.length > 0)
     {
          console.log(results);
          rightWrist = results[0].pose.rightWrist.x;
          leftWrist = results[0].pose.leftWrist.x;
          difference = leftWrist - rightWrist;
     }
}

function modelLoaded() {
     console.log('PoseNet is Initialized')
}

function draw() {
     background(94, 94, 94);
     textSize(difference);
     fill(64, 199, 100);
     text('Gurman',100,200);
     random_number_r = Math.floor(Math.random() * 255) + 1;
     random_number_g = Math.floor(Math.random() * 255) + 1;
     random_number_b = Math.floor(Math.random() * 255) + 1;
     document.getElementById("label").style.color = "rgb(" + random_number_r + "," + random_number_g + "," + random_number_r + ")"; 
}
