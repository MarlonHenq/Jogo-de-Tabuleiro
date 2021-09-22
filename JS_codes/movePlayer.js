window.onload = function(){ //Moviment player
    draggable('player_one');
    draggable('player_two');
    draggable('player_three');
    draggable('player_four');
};

var dragObj = null;
function draggable(id){
    var obj = document.getElementById(id);
    obj.style.position = "fixed";
    obj.onmousedown = function(){
            dragObj = obj;
    }
}

document.onmouseup = function(e){
    dragObj = null;
};

document.onmousemove = function(e){
    var x = e.pageX;
    var y = e.pageY;

    if(dragObj == null)
        return;

    dragObj.style.left = x - 25 + "px";
    dragObj.style.top= y - 25 + "px";
};