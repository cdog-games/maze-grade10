const UP = "https://codehs.com/uploads/c8f962d34cbd3a2b3613a53d2a25454c";
const RIGHT = "https://codehs.com/uploads/c8f962d34cbd3a2b3613a53d2a25454c";
const LEFT = "https://codehs.com/uploads/c8f962d34cbd3a2b3613a53d2a25454c";
const DOWN = "https://codehs.com/uploads/c8f962d34cbd3a2b3613a53d2a25454c";
const CENTER_X = getWidth() / 2;
const CENTER_Y = getHeight() / 2;
let mtndew;
let cup;
let seconds = 0;
var txt;
let end;

function initmtndew(image, x, y) {
    let mtndew = new WebImage(image);
    mtndew.setPosition(20, 445);
    mtndew.setSize(35,35);
    add(mtndew);
    return mtndew;
}


function main() {
    addBackground();
    drawmazewall1();
    drawmazewall2();
    drawmazewall3();
    drawmazewall4();
    drawmazewall5();
    drawmazewall6();
    drawmazewall7();
    drawmazewall8();
    drawmazewall9();
    drawmazewall10();
    drawmazewall11();
    drawmazewall12();
    drawmazewallWIN();
    mtndew = initmtndew(UP, CENTER_X, CENTER_Y);
    setTimer(finishTime, 1000);
    keyDownMethod(changeDirection);
}

function finishTime(){
    seconds++;  
    if (seconds == 1){
        txt = new Text(seconds, "30pt Arial");
        txt.setPosition(200, 50);
        txt.setColor(Color.blue);
        add(txt);
    }else{
        txt.setText(seconds);
    }
}

function checkCollision(){
    let topLeft = getElementAt(mtndew.getX()-1, mtndew.getY()-1);
    let topRight = getElementAt(mtndew.getX()+36, mtndew.getY()-1);
    let bottemLeft = getElementAt(mtndew.getX()+36, mtndew.getY()+36);
    let bottemRight = getElementAt(mtndew.getX()+36, mtndew.getY()+36,mtndew.getX()+36);
    if (topLeft != cup){
       mtndew.setPosition(20,445)
    }
    if (topRight != cup){
         mtndew.setPosition(20,445)
    }
    if (bottemLeft != cup){
        mtndew.setPosition(20,445)
    }
        if (bottemRight != cup){
         mtndew.setPosition(20,445)
    }
    if (topLeft == end || topRight == end){
        removeAll();
        endScreen();
    }
}
function endScreen(){
 endScreen = new WebImage("https://codehs.com/uploads/34222d46c3fb2a9d26e863973d982fad");
 endScreen.setPosition(0,0);
 endScreen.setSize(400,500);
 add(endScreen);
}

function changeDirection(e) {
if (e.key == "ArrowUp") {
    mtndew.setImage(UP);
    mtndew.setSize(35,35);
    mtndew.move(0, -5);
}

if (e.key == "ArrowDown") {
mtndew.setImage(UP);
mtndew.setSize(35,35);
mtndew.move(0, 5);
}

if (e.key == "ArrowRight") {
mtndew.setImage(RIGHT);
mtndew.setSize(35,35);
mtndew.move(5, 0);
}

if (e.key == "ArrowLeft") {
mtndew.setImage(LEFT);
mtndew.setSize(35,35);
mtndew.move(-5, 0);
}
checkCollision();
}

function addBackground(){
    cup = new WebImage("https://codehs.com/uploads/42deaa81cdcb7188f51f44a6b0f824c2");
    cup.setSize(500,500);
    cup.setPosition(0,0);
    add(cup);



}

function drawmazewall1(){
    let mazewall = new Rectangle(345,15);
    mazewall.setColor("blue");
    mazewall.setPosition(0,425);
    add(mazewall);
}

function drawmazewall2(){
    let mazewall = new Rectangle(345,15);
    mazewall.setColor("yellow");
    mazewall.setPosition(90,365);
    add(mazewall);
}

function drawmazewall3(){
    let mazewall = new Rectangle(335,15);
    mazewall.setColor("light");
    mazewall.setPosition(0,305);
    add(mazewall);
}

function drawmazewall4(){
let mazewall = new Rectangle(15,150);
mazewall.setColor("light");
mazewall.setPosition(320,155);
add(mazewall);
}

function drawmazewall5(){
let mazewall = new Rectangle(135,15);
mazewall.setColor("light");
mazewall.setPosition(265,75);
add(mazewall);
}

function drawmazewall6(){
let mazewall = new Rectangle(15,150);
mazewall.setColor("light");
mazewall.setPosition(255,75);
add(mazewall);
}

function drawmazewall7(){
let mazewall = new Rectangle(15,150);
mazewall.setColor("light");
mazewall.setPosition(180,165);
add(mazewall);
}

function drawmazewall8(){
let mazewall = new Rectangle(155,15);
mazewall.setColor("light");
mazewall.setPosition(100,75);
add(mazewall);
}

function drawmazewall9(){
let mazewall = new Rectangle(15,150);
mazewall.setColor("light");
mazewall.setPosition(100,80);
add(mazewall);
}


function drawmazewall10(){
let mazewall = new Rectangle(15,75);
mazewall.setColor("light");
mazewall.setPosition(100,0);
add(mazewall);
}

function drawmazewall11(){
let mazewall = new Rectangle(10,500);
mazewall.setColor("light");
mazewall.setPosition(0,0);
add(mazewall);
}

function drawmazewall12(){
let mazewall = new Rectangle(10,500);
mazewall.setColor("light");
mazewall.setPosition(390,0);
add(mazewall);
}

function drawmazewallWIN(){
end = new Rectangle(75,35);
end.setColor("white");
end.setPosition(15,15);
add(end);
}
main()