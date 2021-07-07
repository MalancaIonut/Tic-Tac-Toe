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
	if (checkId(1, 4, 7, lastSet)) {
		makeCellGreen(1, 4, 7);
		return 1;
	} else if (checkId(2, 5, 8, lastSet)) {
		makeCellGreen(2, 5, 8);
		return 1;
	} else if (checkId(3, 6, 9, lastSet)) {
		makeCellGreen(3, 6, 9);
		return 1;
	}
	return 0;
}
// Check the horizontal line
function horizontalCheck(lastSet) {
	if (checkId(1, 2, 3, lastSet)) {
		makeCellGreen(1, 2, 3);
		return 1;
	} else if (checkId(4, 5, 6, lastSet)) {
		makeCellGreen(4, 5, 6);
		return 1;
	} else if (checkId(7, 8, 9, lastSet)) {
		makeCellGreen(7, 8, 9);
		return 1;
	}
	return 0;
}
// Check the Main Diagonal
function mainDiagonalCheck(lastSet) {
	if (checkId(1, 5, 9, lastSet)) {
		makeCellGreen(1, 5 , 9);
		return 1;
	}
	return 0;
}
// Check the Secondary Diagonal
function secDiagonalCheck(lastSet) {
	if (checkId(3, 5, 7, lastSet)) {
		makeCellGreen(3, 5, 7);
		return 1;
	}
	return 0;
}
// The game is draw
function draw() {
	displayAfter();
	document.getElementById("victoryDraw").innerHTML = "It's a DRAW";
	document.getElementById("victoryDraw").style.color = "red";
	document.getElementById("victoryDraw").style.visibility = 'visible';
}
// The game have a winner
function victory(lastSet) {
	displayAfter();
	document.getElementById("victoryDraw").innerHTML = "The WINNER is: " + lastSet;
	document.getElementById("victoryDraw").style.visibility = 'visible';
}

function makeCellGreen(id1, id2, id3) {
	document.getElementById("cell" + id1).style.backgroundColor = "green";
	document.getElementById("cell" + id2).style.backgroundColor = "green";
	document.getElementById("cell" + id3).style.backgroundColor = "green";
}

function displayAfter() {
	$('.ui-shadow').attr('disabled', 'disabled');
	document.getElementById("refresh").style.visibility = 'visible';
	document.getElementById("isTurn").innerHTML = "Try again!";
	document.getElementById("isTurn").style.color = "green";
}

function checkId(id1, id2, id3, lastSet) {
	if (document.getElementById("cell" + id1).value === lastSet && document.getElementById("cell" + id2).value === lastSet && document.getElementById("cell" + id3).value === lastSet) {
		return true;
	}
	return false;
}
// Refresh the page
function refreshPage() {
	window.location.reload();
}
