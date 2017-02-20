var contentArray = [];
var numb_array = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];

//creates 2 dimensional array
for (i = 0; i <= 10; i++) {
  contentArray[i] = "row" + numb_array[i];
  contentArray[i] = [];
  for (y = 0; y <= 10; y++) {
	   contentArray[i][y] = "cell" + numb_array[y];
  }

	//changes articles into arrays
}
function translateNumb(rowNr,cellNr) {
  rNr = rowNr;
  cNr = cellNr;
  document.getElementById("display").innerHTML = "rowNr is " + rNr + "<br> cellNr is " + cNr;
  changeStyle()
}
function changeStyle() {
  contentArray[rNr][cNr] = 1;
  var temp = "row";
  var temp2 = "_cell";
  var temp3 = temp + rNr + temp2 + cNr;
  document.getElementById("display").innerHTML += "<br>"+ temp3

  if (contentArray[rNr][cNr] = 1) {
    document.getElementById(temp3).style.backgroundColor = "yellow";
  } else if (contentArray[rNr][cNr] = 2) {
    document.getElementById(temp3).style.backgroundColor = "red";
  }
}
