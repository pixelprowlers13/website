let username;

document.getElementById("submit").onclick = function(){
    username = document.getElementById("box").value;
    document.getElementById('h1').textContent = username
    document.getElementById("box").value = ""
}
 