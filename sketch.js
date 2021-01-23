var ball;
var database,position;

function setup(){
    createCanvas(500,500);

    database=firebase.database();
    

    ball = createSprite(250,250,10,10);
    ball.shapeColor = "red";
    var ballposition=database.ref("ball/position");
    ballposition.on("value",readPosition,showError);
}

function draw(){
    background("white");
    if(position!==undefined){

    
    if(keyDown(LEFT_ARROW)){
        writeposition(-5,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        writeposition(+5,0);
    }
    else if(keyDown(UP_ARROW)){
        writeposition(0,-5);
    }
    else if(keyDown(DOWN_ARROW)){
        writeposition(0,+5);
    }
    drawSprites();
}
}
function showError(){
    console.log("ERROR");
}

function readPosition(data){
    position=data.val();
    ball.x=position.x;
    ball.y=position.y;
}

function writeposition(x,y){
    database.ref("ball/position").set({
    x:position.x+x,
    y:position.y+y
    });
}

function changePosition(x,y){
    ball.x = ball.x + x;
    ball.y = ball.y + y;
}
