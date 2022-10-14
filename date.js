function setDate(){
    var date = new Date();
    var day = date.getDate() < 10 ? "0" + date.getDate() : date.getDate();
    var month = date.getMonth();
    var year = date.getFullYear();
    var weekday = date.getDay();
    var dayArray = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var monthArray = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var dateText = dayArray[weekday] + ", " + day + " " + monthArray[month] + " " + year;
    document.getElementById("date").innerHTML = dateText;
}
setDate();