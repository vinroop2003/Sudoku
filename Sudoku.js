$(document).ready(function() {
	var rows = 9;
	var cols = 9;
	
	var tbody = '';
	
	for(var i = 0; i < rows; i++) {
		tbody += "<tr class='row"+ i + "'>";
		for(var j = 0; j < cols; j++) {
			tbody += "<td> <input type='text' value=' " + j + "'></input></td>";
		}
		 tbody += "</tr> ";
	}
	document.getElementById("SudokuTable").innerHTML = tbody;
});