var temp = []
var m = [0,15,15,15,15]
var s = [0,0,0,0,0]

function timer(id) {         
    if (s[id] == 0 && m[id] > 0){
        m[id] = m[id] - 1
        s[id] = 59
    }

    if (s[id] == 0){
        time = m[id] + ":" + "00"
    }
    else if (s[id] < 10){
        time = m[id] + ":" + "0" + s[id] 
    }
    else{
        time = m[id] + ":" + s[id]
    }

    nameId = "timer"+id
    document.getElementById(nameId).innerHTML = "Timer: " + time
    
    if (s[id] > 0 || m[id] > 0){
        s[id] = s[id] - 1
        temp[id] = setTimeout(timer, 999, id)
    }
}

function stopAll(id) {
    clearTimeout(temp[id])
}  

function reset(id){
    m[id] = 15
    s[id] = 0

    time = 15 + ":" + "00"
    nameId = "timer"+id
    document.getElementById(nameId).innerHTML = "Timer: " + time
}