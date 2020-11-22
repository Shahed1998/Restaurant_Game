        


var arr_name = [];

function welcome(){
    var p_val = prompt("Plz enter your name to continue:");

    if(p_val == ""){
        alert('Please enter your name');
        p_val = prompt("Plz enter your name to continue:");
        if(p_val == ""){
            p_val = "Anonymous";
        }

    }else if(p_val == null){
        p_val = "Anonymous";
    }
    document.write(p_val);
    
    
}

function success(){
    document.getElementById('btn').innerHTML = "Clicked.... ✅";
    document.getElementById('info').innerHTML = '<hr><h2>Read the instruction</h2><h4>The rule of the game is simple. Enter the name of your friends, this game will choose which friend will pay for all 😜</h4><button id="btn2" onclick="gameBegin()">Lets Begin </button>';

}

function gameBegin(){
     
     var num = prompt('How many members do you have ?');

     if(isNaN(num)){
        document.getElementById('res').innerHTML = 'Please enter a number';
     }else if(num == 1){
        document.getElementById('res').innerHTML = "It's you who have to pay for the complete price ";
     }else{
        for (var i = 1; i <= num; i++) {
            var name = prompt("Customer name " + i);
            whosPaying(name);
        }

        document.getElementById('res').innerHTML = "Among "+arr_name+" <br>🤤 "+whoWillPay()+" will give treat to all of you 🤤<br><h3>Please refresh the page to continue playing the game</h3> </br>";
    }
     

}

function whosPaying(names) {
    arr_name.push(names);
}

 function whoWillPay() {

    var len = arr_name.length;
    var val = Math.floor(Math.random() * len);
    var name = arr_name[val];
    return name;
}



