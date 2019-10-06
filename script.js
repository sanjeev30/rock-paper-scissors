function displayApp() {
    document.getElementById("play-button-container").style.display = "none";
    document.getElementById("app").style.display = "block";
    displayImage = true;
}

function showResult(moveNo) {
    var image = Math.floor(Math.random()*3);
    document.getElementById("comp-move").src = "img/"+image+".png";
    document.getElementById("comp-card-name").innerText = getMove(image);
    displayResults(image, moveNo);
    document.getElementById("exit-button").style.display = "block";
}

function displayResults(comp, player) {
    document.getElementById('result-pane').style.display = "block";
    if(comp == player) {
        document.getElementById("result-pane").style.backgroundColor = "rgb(62, 119, 146)";
        document.getElementById("result-text").innerText = "It's a tie";
    } else if(comp == '0' && player == '1') {
        document.getElementById("result-pane").style.backgroundColor = "green";
        document.getElementById("result-text").innerText = "You Win. "+getMove(player)+" covers "+getMove(comp) +".";
    } else if(comp == '0' && player == '2') {
        document.getElementById("result-pane").style.backgroundColor = "red";
        document.getElementById("result-text").innerText = "You Lost. "+getMove(comp)+" beats "+getMove(player) +".";
    } else if(comp == '1' && player == '0') {
        document.getElementById("result-pane").style.backgroundColor = "red";
        document.getElementById("result-text").innerText = "You Lost. "+getMove(comp)+" covers "+getMove(player) +".";
    } else if(comp == '1' && player == '2') {
        document.getElementById("result-pane").style.backgroundColor = "green";
        document.getElementById("result-text").innerText = "You Win. "+getMove(player)+" cuts "+getMove(comp) +".";
    } else if(comp == '2' && player == '0') {
        document.getElementById("result-pane").style.backgroundColor = "green";
        document.getElementById("result-text").innerText = "You Win. "+getMove(player)+" beats "+getMove(comp) +".";
    } else if(comp == '2' && player == '1') {
        document.getElementById("result-pane").style.backgroundColor = "red";
        document.getElementById("result-text").innerText = "You Lost. "+getMove(comp)+" cuts "+getMove(player) +".";
    }
}

function getMove(no) {
    if(no==0) {
        return "Rock";
    } else if(no == 1) {
        return "Paper";
    } else if(no == 2) {
        return "Scissors";
    } else {
        return "nomove"
    }
}

function exitApp() {
    document.getElementById("comp-move").src = "img/3.png";
    document.getElementById("comp-card-name").innerText = "";
    document.getElementById("play-button-container").style.display = "block";
    document.getElementById("app").style.display = "none";
    document.getElementById("result-pane").style.display = "none";
    document.getElementById("exit-button").style.display = "none";
}