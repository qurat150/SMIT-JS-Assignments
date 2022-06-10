// var months = ["Jan" , "Feb" , "March" , "April" , "May" , "June" , "July" , "Aug" , "Sep" , "Oct" , "Nov" , "Dec"]
// console.log(months)
// for(i = 0 ; i > 11 ; i++)
// console.log(month[i])

// console.log(a)
// var a
//hoisting islike that it doesn,t matter k hum variablekahan bana rhy hain lkn javaScript strt hoty hi sb se pehly variables bana leti hai...! hoisting srf varioable bana deta h lkn value assign nh krta
// hoistring function bh strt mn hi bana deta h with value...
// var a = "Hello"
// console.log(a)
// isi liye hme pehly varaible bana lena chahiye.

var months = ["jan", "FEb", "MaRch", "ApRil", "MaY", "JuNe", "JuLy", "AuG", "SeP", "OcT", "NoV", "DeC"]

var newArr = []
for (i = 0; i < months.length; i++) {
    var lowernames = months[i].slice(0, 1).toUpperCase()
    var uppernames = months[i].slice(1).toLowerCase()
    var finalnames = lowernames + uppernames 
    console.log(finalnames)

    newArr.push(finalnames)
    console.log(newArr)
}
//months[i]= months[i].toLowerCase()

// var _name="quRat"
// _name.slice(0 , 1).toUpperCase()
// _name.slice(1).toLowerCase()
// var newName = _name.slice(0 , 1).toUpperCase() + _name.slice(1).toLowerCase()
// console.log(newName)

