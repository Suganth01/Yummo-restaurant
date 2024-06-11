var menu = document.querySelector('.menu');
var navbar = document.querySelector('ul');

menu.addEventListener('click', a);
function a() {
    navbar.classList.toggle('slide');
}
function reservation(event) {
    event.preventDefault();

    let name = document.getElementById("name").value;
    let contact = document.getElementById("contact").value;
    let time = document.getElementById("time").value;
    let date = document.getElementById("date").value;
    let persons = document.getElementById("table").value;

    if (name === "") {
        alert("Please provide a Name!");
        return;
    }
    if (persons == 0) {
        alert("Enter a Valid Number!");
        return;
    }

    const data = {
        name: name,
        contact: contact,
        time: time,
        date: date,
        persons: persons
    };

    fetch('/submit-reservation', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
        .then(response => {
            if (response.ok) {
                alert("Table booked!");
            } else {
                alert("Failed to book table.");
            }
        })
        .catch(error => {
            console.error('Error:', error);
            alert('An error occurred.');
        });
}
function loading() {
    document.querySelector('.loader').classList.add('fade-out');
}
window.load = fadeout();
function fadeout() {
    setTimeout(loading, 3000);
}

