$('button').click(() => {
    let element0 = document.createElement("h1");
    element0.innerText = 'MERN Stack';
    document.querySelector('.first').appendChild(element0);

})
function changeText() {
    document.querySelector('h1').innerText = "Welcome to Elevation Acacdemy!";
}
$('button').click(() => {
    $('h1').hide();
})