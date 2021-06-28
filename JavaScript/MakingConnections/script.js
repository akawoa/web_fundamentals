console.log("page loaded...");

var requests = 2;
var connections = document.getElementById("connect");
var connectionsTally = 423;
var totalConnections= document.getElementById("total-connections")
console.log(connections.innerText);

function changeName() {
    
    let replacementName = "Darling Emilia";
    let username = document.getElementById("user");
    console.log(username);
    username.innerText = replacementName; 
}

function removeUser1() {
var removeTodd = document.getElementById("todd");
console.log(connections.innerText);
requests += -1;
connections.innerText = requests;
removeTodd.remove();
}

function removeUser2() {
var removePhil = document.getElementById("phil");
console.log(connections.innerText);
requests += -1;
connections.innerText = requests;
removePhil.remove();
}

function addUser1() {
    var removeTodd = document.getElementById("todd");
    console.log(connections.innerText);
    requests += -1;
    connectionsTally += 1;
    totalConnections.innerText = connectionsTally;
    connections.innerText = requests;
    removeTodd.remove();
    }

    function addUser2() {
        var removeTodd = document.getElementById("phil");
        console.log(connections.innerText);
        requests += -1;
        connections.innerText = requests;
        connectionsTally += 1;
    totalConnections.innerText = connectionsTally;
        removeTodd.remove();
        }

