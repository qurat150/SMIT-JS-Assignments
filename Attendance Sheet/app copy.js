var attendanceArr = [];
var getValue = document.getElementById("timeIn");   
function studentsAttendance() {
    attendanceArr.push(getValue.value);
    console.log(attendanceArr);
}
