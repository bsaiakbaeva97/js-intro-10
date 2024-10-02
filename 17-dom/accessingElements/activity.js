
const userName = prompt("Please enter your username:");

if (userName) {
    alert(`Welcome ${userName}!`);
    const confirmation = confirm('Do you want to continue?');

    if (confirmation) {
    alert("You have chosen to continue.");
    } else {
    alert("You have canceled the action.");
    } 

    console.log(innerWidth);
    console.log(innerHeight);

    console.log("The page will reload in 10 seconds.");

    setTimeout(function() {
    location.reload();
    }, 10000);
}
else {
    console.log("You haven't provided username");
}








