var ball;
var position;
var database;
function setup(){
    database=firebase.database()
    createCanvas(500,500);
    ball = createSprite(250,250,10,10);
    ball.shapeColor = "red";
    var ballPosition=database.ref('Ball/position')
    ballPosition.on("value",readPosition,showError)
}

function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        changePosition(-5,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        changePosition(+5,0);
    }
    else if(keyDown(UP_ARROW)){
        changePosition(0,-5);
    }
    else if(keyDown(DOWN_ARROW)){
        changePosition(0,+5);
    }
    drawSprites();
}
function changePosition(x,y){
    database.ref('Ball/position').set({
        'x':position.x+x,
       'y':position.y+y
        
    })
    }
function readPosition(data){
    position=data.val()
    console.log(position)
    ball.x=position.x
    ball.y=position.y
}
function showError(){
console.log("error in writing in database")

}