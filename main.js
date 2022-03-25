function setup()
{
    canvas=createCanvas(400,400);
    canvas.position(100,255);
    Video=createCapture(VIDEO);
    Video.hide()
    tint_colour=""
}

function draw()
{
    image(Video,100,100,200,200);

    fill(200,0,0);
    stroke(0,0,0);
    circle(50,50,70);

    fill(255,255,8)
    square(310,20,70)

    fill(200,0,0);
    stroke(0,0,0);
    circle(350,350,70);

    fill(255,255,8)
    square(15,315,70)

    fill(0,200,0)
    rect(35,80,30,235)

    fill(0,200,0)
    rect(85,335,235,30)

    fill(0,200,0)
    rect(334,89,30,231)

    fill(0,200,0)
    rect(81,39,229,30)

    tint(tint_colour);
}

function take_snapshot()
{
    save('p5.png')
}

function filter_tint()
{
    tint_colour=document.getElementById("color_name").value;
}