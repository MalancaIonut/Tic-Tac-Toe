var numberOfEntries = 1;
document.getElementById("isTurn").innerHTML = "It's X's turn";

// If a cell is selected
function selectCell(id) {
	if (document.getElementById(id).value != "") {
		return false;
	} // In case a cell it`s selected twice
	if (numberOfEntries % 2 != 0) {
		document.getElementById(id).setAttribute('value', "x");
		document.getElementById("isTurn").innerHTML = "It's 0's turn";
		const bttn = document.getElementById(id);
		bttn.innerText = "X";
		++numberOfEntries;
	} else {
		document.getElementById(id).setAttribute('value', "0");
		document.getElementById("isTurn").innerHTML = "It's X's turn";
		const bttn = document.getElementById(id);
		bttn.innerText = "0";
		++numberOfEntries;
	}
	var winner = "";
	if (numberOfEntries > 4) {
		var isTurn = document.getElementById(id).value;
		winner += verticalCheck(isTurn);
		winner += horizontalCheck(isTurn);
		winner += mainDiagonalCheck(isTurn);
		winner += secDiagonalCheck(isTurn);
		if(winner.indexOf('1') > -1) {
			victory(isTurn);
			return false;
		}
	} 
	if (numberOfEntries === 10) {
		draw();
	}
	return false;
}
// Check the vertical line
function verticalCheck(lastSet) {
	if ((document.getElementById("cell1").value === lastSet) && (document.getElementById("cell4").value === lastSet) && (document.getElementById("cell7").value === lastSet)) {
		document.getElementById("cell1").style.backgroundColor = "green";
		document.getElementById("cell4").style.backgroundColor = "green";
		document.getElementById("cell7").style.backgroundColor = "green";
		return 1;
	} else if ((document.getElementById("cell2").value === lastSet) && (document.getElementById("cell5").value === lastSet) && (document.getElementById("cell8").value === lastSet)) {
		document.getElementById("cell2").style.backgroundColor = "green";
		document.getElementById("cell5").style.backgroundColor = "green";
		document.getElementById("cell8").style.backgroundColor = "green";
		return 1;
	} else if ((document.getElementById("cell3").value === lastSet) && (document.getElementById("cell6").value === lastSet) && (document.getElementById("cell9").value === lastSet)) {
		document.getElementById("cell3").style.backgroundColor = "green";
		document.getElementById("cell6").style.backgroundColor = "green";
		document.getElementById("cell9").style.backgroundColor = "green";
		return 1;
	}
	return 0;
}
// Check the horizontal line
function horizontalCheck(lastSet) {
	if (document.getElementById("cell1").value === lastSet && document.getElementById("cell2").value === lastSet && document.getElementById("cell3").value === lastSet) {
		document.getElementById("cell1").style.backgroundColor = "green";
		document.getElementById("cell2").style.backgroundColor = "green";
		document.getElementById("cell3").style.backgroundColor = "green";
		return 1;
	} else if (document.getElementById("cell4").value === lastSet && document.getElementById("cell5").value === lastSet && document.getElementById("cell6").value === lastSet) {
		document.getElementById("cell4").style.backgroundColor = "green";
		document.getElementById("cell5").style.backgroundColor = "green";
		document.getElementById("cell6").style.backgroundColor = "green";
		return 1;
	} else if (document.getElementById("cell7").value === lastSet && document.getElementById("cell8").value === lastSet && document.getElementById("cell9").value === lastSet) {
		document.getElementById("cell7").style.backgroundColor = "green";
		document.getElementById("cell8").style.backgroundColor = "green";
		document.getElementById("cell9").style.backgroundColor = "green";
		return 1;
	}
	return 0;
}
// Check the Main Diagonal
function mainDiagonalCheck(lastSet) {
	if (document.getElementById("cell1").value === lastSet && document.getElementById("cell5").value === lastSet && document.getElementById("cell9").value === lastSet) {
		document.getElementById("cell1").style.backgroundColor = "green";
		document.getElementById("cell5").style.backgroundColor = "green";
		document.getElementById("cell9").style.backgroundColor = "green";
		return 1;
	}
	return 0;
}
// Check the Secondary Diagonal
function secDiagonalCheck(lastSet) {
	if (document.getElementById("cell3").value === lastSet && document.getElementById("cell5").value === lastSet && document.getElementById("cell7").value === lastSet) {
		document.getElementById("cell3").style.backgroundColor = "green";
		document.getElementById("cell5").style.backgroundColor = "green";
		document.getElementById("cell7").style.backgroundColor = "green";
		return 1;
	}
	return 0;
}
// The game is draw
function draw() {
	$('.ui-shadow').attr('disabled', 'disabled');
	document.getElementById("refresh").style.visibility = 'visible';
	document.getElementById("isTurn").innerHTML = "Try again!";
	document.getElementById("isTurn").style.color = "green";
	document.getElementById("victoryDraw").innerHTML = "It's a DRAW";
	document.getElementById("victoryDraw").style.color = "red";
	document.getElementById("victoryDraw").style.visibility = 'visible';
}
// The game have a winner
function victory(lastSet) {
	$('.ui-shadow').attr('disabled', 'disabled');
	document.getElementById("refresh").style.visibility = 'visible';
	document.getElementById("isTurn").innerHTML = "Try again!";
	document.getElementById("isTurn").style.color = "green";
	document.getElementById("victoryDraw").innerHTML = "The WINNER is: " + lastSet;
	document.getElementById("victoryDraw").style.visibility = 'visible';
}
// Refresh the page
function refreshPage() {
	window.location.reload();
}
