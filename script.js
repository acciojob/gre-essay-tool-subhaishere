//your code here

function fun() {
var str = document.getElementById("evaluatedText").value;
var count = 0;
var splitedArr = str.split(' ');
for (var i = 0; i < splitedArr.length; i++) {
        if (splitedArr[i] != "") {
            count += 1;
        }
		}
	document.getElementById("wordCount").innerHTML = count;
}