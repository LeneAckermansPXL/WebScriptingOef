window.addEventListener("load", loaded);

function loaded() {
    let buttonGetFriends = document.getElementById('button_get_persons_friends');
    buttonGetFriends.addEventListener("click", handleGetPersonsFriends);
}


function handleGetPersonsFriends() {
    let url = 'http://localhost:3000/persons/';
    let id = document.getElementById("select_person").value;
    let output = document.getElementById("div_output");
    makeElementEmpty(output);
    if (name.trim()!=''){
        fetch(url + id)
            .then((response) => {
                if (response.status == 200) {
                    return response.json();
                } else {
                    throw `error with status ${response.status}`;
                }
            })
            .then((person) => {
                return person.friends;
            })
            .then((friends) => {
                let ids = friends.join("&id=");
                return fetch(url + `?id=${ids}`);
            })
            .then((persons) => {
                let data = [];
                for (let person of persons) {
                    data.push(person.name);
                }
                let paragraaf = document.createTextNode(person.name +
                    ' heeft vrienden ' + data);
                output.appendChild(paragraaf);
            })
            .catch((error) => {
                output.appendChild(document.createTextNode(error));
            });
    }
}

function makeElementEmpty(element) {
    while (element.hasChildNodes()) {
        element.removeChild(element.firstChild);
    }
}