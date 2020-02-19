// Check for email presence from a list
// Dice game

var friends = [ // email list of users
    'adam@email.com',
    'mary@gmail.com',
    'sam@yahoo.com',
    'lucy@hotmail.com'
];

var tooltip = friends.toString(); // print the array
console.log(tooltip);

document.getElementsByClassName('tooltiptext')[0].innerHTML = tooltip;


function checkEmail() {
    var email = document.getElementById('txtEmail');
    var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if (!filter.test(email.value)) {
    alert('Please provide a valid email address');
    email.focus;
    return false;
    } else {
        if (friends.indexOf(email.value) !== -1) {
                alert("Value exists!")
            } else{
                alert("Value does not exists!")
            }
}
}
