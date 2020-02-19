// Check for email presence from a list
// Dice game

var friends = [ // email list of users
    'adam@email.com',
    'mary@gmail.com',
    'sam@yahoo.com',
    'lucy@hotmail.com'
];

document.getElementsByClassName('tooltiptext')[0].innerHTML =
'<li>' + friends.join('</li><li>') + '</li>'; // print the array as list

function checkEmail() {
    var email = document.getElementById('txtEmail');
    var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if (!filter.test(email.value)) {
    alert('Please provide a valid email address');
    email.focus;
    return false;
    } else {
        if (friends.indexOf(email.value) !== -1) {
                //alert("Welcome " + email.value + "!")
                var user = email.value; 
                document.getElementById('user').innerHTML = "Welcome " + user + "!";
            } else{
                alert("I'm sorry, but my mother told me that: \"I can't speak to strangers!\"")
            }
}
}

var dice = {
  sides: 6,
  roll: function () {
    var randomNumber = Math.floor(Math.random() * this.sides) + 1;
    return randomNumber;
  }
}

//Prints dice roll to the page

function printNumber(number) {
  var placeholder = document.getElementById('placeholder');
  placeholder.innerHTML = number;
}

var button = document.getElementById('button');

button.onclick = function() {
  var result = dice.roll();
  printNumber(result);
};
