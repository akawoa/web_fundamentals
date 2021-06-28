var likes1 = 9;
var likes2 = 12;
var likes3 = 9;

function liked1() {
var likeButton1 = document.getElementById("num-likes1");

likeButton1.innerText = likes1++;
}

function liked2() {
    var likeButton2 = document.getElementById("num-likes2");
    
    likeButton2.innerText = likes2++;
    }

    function liked3() {
        var likeButton3 = document.getElementById("num-likes3");
        
        likeButton3.innerText = likes3++;
        }