var options = ["rock", "paper", "scissors"];

function rpsgame(choice) {
    var humchoice, botchoice;
    humchoice = choice.id;
    botchoice = options[randint()];
    // console.log(botchoice);
    var result = decide(humchoice, botchoice);
    var result1 = finalmessage(result);
    var resu1 = result1["color"];
    var resu = result1['message'];
    var chosenimages = front(humchoice, botchoice);
    var div1 = document.createElement('div');
    div1.setAttribute('id', 'bot');
    var div2 = document.createElement('div');
    div2.setAttribute('id', 'hum');
    var div3 = document.createElement('div');
    div3.setAttribute('id', 'state');
    // document.getElementById('state').innerHTML = resu;


    div2.innerHTML = "<img src='" + chosenimages[0] + "'" + "height='150px' width='100px' style='box-shadow: 2px 0px 18px 22px rgba(86, 193, 193, 0.75);' >";
    div1.innerHTML = "<img src='" + chosenimages[1] + "'" + "height='150px' width='100px' style=' box-shadow: 2px 0px 18px 22px rgba(230, 70, 70, 0.75);'>";
    div3.innerHTML = "<h1 style='color:" + resu1 + "; padding:4px; font-size: 41px;' > " + resu + "</h1>";
    document.getElementById('contain').appendChild(div1);
    document.getElementById('contain').appendChild(div3);
    document.getElementById('contain').appendChild(div2);




}

function randint() {
    return Math.floor(Math.random() * 3);
}

function decide(h, b) {
    var database = {
        'rock': { 'rock': 0.5, 'paper': 0, 'scissors': 1 },
        'paper': { 'rock': 1, 'paper': 0.5, 'scissors': 0 },
        'scissors': { 'rock': 0, 'paper': 1, 'scissors': 0.5 }
    };
    return database[h][b];
}

function finalmessage(nbr) {
    if (nbr == 1) {
        return { "message": "YOU WON!!", "color": "green" };
    } else if (nbr == 0.5) {
        return { "message": "IT'S A TIE", "color": "blue" };
    } else {
        return { "message": "YOU LOST", "color": "red" };
    }
}

function front(humchoice, botchoice) {
    var imgdb = {

        'rock': document.getElementById('rock').src,
        'paper': document.getElementById('paper').src,
        'scissors': document.getElementById('scissors').src


    }
    document.getElementById('rock').remove();
    document.getElementById('paper').remove();
    document.getElementById('scissors').remove();
    var imgh = imgdb[humchoice];
    var imgb = imgdb[botchoice];
    return [imgh, imgb];
}