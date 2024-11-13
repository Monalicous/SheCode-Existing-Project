function joinSquad() {
    let nickName = prompt("What is your nickname?")
    let age = prompt("How old are you?");

    if (age >= 16) {
        alert(`Hi ${nickName} welcome to the squad`);
    } else {
        alert(`Oooooooooops ${nickName} better luck next time!😔`);
    }
}

let joinUs = document.querySelector("button");
joinUs.addEventListener("click", joinSquad);