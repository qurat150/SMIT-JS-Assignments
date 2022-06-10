// function calculate() {
//     var subject1 = document.getElementById("subject1").value;
//     var marks1 = document.getElementById("marks1").value;
//     var subject2 = document.getElementById("subject2").value;
//     var marks2 = document.getElementById("marks2").value;
//     var subject3 = document.getElementById("subject3").value;
//     var marks3 = document.getElementById("marks3").value;
//     console.log(subject1, marks1, subject2, marks2, subject3, marks3);

//     if (marks1 <= 100) {
//         document.getElementById("reusltOfsub1").innerHTML = ` ${subject1} = ${marks1}`
//     } else if (marks2 <= 100) {
//         document.getElementById("reusltOfsub2").innerHTML = `${subject2} = ${marks2}`
//     } else if (marks3 <= 100) {
//         document.getElementById("reusltOfsub3").innerHTML = `${subject3} = ${marks3}`
//     }else{
//         document.getElementById("reusltOfsub1").innerHTML = ` Plz Enter value under 100`
//     }
// }


function calculate(num1, num2, num3) {
    var marks1 = document.getElementById("marks1").value;
    var marks2 = document.getElementById("marks2").value;
    var marks3 = document.getElementById("marks3").value;
    var subject1 = document.getElementById("subject1").value;
    var subject2 = document.getElementById("subject2").value;
    var subject3 = document.getElementById("subject3").value;
    var finalpercentage = num1+num2+num3 / 300 * 100
    console.log(+finalpercentage);
    document.getElementById("reusltOfsub1").innerHTML = `${subject1} = ${marks1} out of 100`
    document.getElementById("reusltOfsub2").innerHTML = `${subject2} = ${marks2} out of 100`
    document.getElementById("reusltOfsub3").innerHTML = `${subject3} = ${marks3} out of 100`
    document.getElementById("finalPercentage").innerHTML = `Your Percentage is ${finalpercentage}`
}
