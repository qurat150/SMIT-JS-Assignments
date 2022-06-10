var attendanceArr = [];
var input = document.querySelector("#timeIn")
var p = document.querySelector("#totalAttendance")

function studentsAttendance() {
    attendanceArr.push(input.value);
    input.value = ""
    // console.log(attendanceArr)
    showDataToPage();
}

function showDataToPage() {
    console.log(attendanceArr)
    p.innerHTML = "Total Attendance is " + attendanceArr.length
}

function deleteAttendance() {
    var index = attendanceArr.indexOf(input.value)
    if (index !== -1) {
        attendanceArr.splice(index, 1)
        input.value = ""
    } else {
        alert("data not found")
    }
    console.log(attendanceArr)
}

function updateAttendance() {
    var updateAtt = attendanceArr.indexOf(input.value)
    console.log(updateAtt)
    if (updateAtt !== -1) {
        var valueToUpdate = prompt("Which value do you like to update?", updateAtt)
        attendanceArr.splice(updateAtt, 1, valueToUpdate)
    } else {
        alert("Data doesn't Exist in Array!")
    }
    console.log(attendanceArr)
}

function viewAttendance() {
    for (i=0 ; i < attendanceArr.length ; i++)
    document.write(attendanceArr[i] + "<br/>")
}