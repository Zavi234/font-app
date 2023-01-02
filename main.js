leftWristX=0
leftWristY=0

rightWristX=0
rightWristY=0

function preload()
{

}

function setup()
{
   canvas= createCanvas(550,450)
   canvas.position(750,130) 

   video= createCapture(VIDEO)
   video.size(550,550)

   poseneto= ml5.poseNet(video,modelLoaded)
   poseneto.on("pose",gotposes)
}

function draw()
{
    background("#6C91C2")
    textSize(difference)
    fill("#FFE787")

    text("Zaviar",50,400)
}

function gotposes(results)
{
    if(results.length>0)
    {
        console.log(results)

        leftWristX=results[0].pose.leftWrist.x
        rightWristX=results[0].pose.rightWrist.x

        difference=floor(leftWristX - rightWristX)
    }
}

function modelLoaded()
{
    console.log("Posenet has initialized")
}