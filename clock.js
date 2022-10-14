function clockUpdate(){
    var now = new Date();
    var hour = now.getHours().toString().length == 1 ? "0" + now.getHours() : now.getHours();
    var minute = now.getMinutes().toString().length == 1 ? "0" + now.getMinutes() : now.getMinutes();
    var time = hour + ":" + minute ;
    document.getElementById("clock").innerHTML = time;
    setTimeout(clockUpdate, 1000);
}
clockUpdate();