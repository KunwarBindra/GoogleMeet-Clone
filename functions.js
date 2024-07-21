// const name_field = "Kunwar"

// function getInput() {
//     var userInput = document.getElementById('name-field').value;
//     let url = `https://clone.gmeet.com/api/meeting/create?name=${userInput}`
//     fetch(url).then((res) => { return res.json() }).then((data) => {
//         console.log(data); console.log(data.url);
//         window.location.href = data.url
//     })
// }

// function getJoin2() {
//     var nameInput = document.getElementById('name-field').value;
//     const urlParams = new URLSearchParams(window.location.search);
//     const myParam = urlParams.get('id');
//     let url = `https://clone.gmeet.com/api/meeting/join/${myParam}?name=${nameInput}`;
//     fetch(url).then((res) => { return res.json() }).then((data) => {
//         console.log(data); console.log(data.url);
//         window.location.href = data.url
//     })
// }

// function getJoin1() {
//     var nameInput = document.getElementById('name-field').value;
//     var link = document.getElementById('link-field').value;
//     var linkInput = link.split("id=")[1]
//     let url = `https://clone.gmeet.com/api/meeting/join/${linkInput}?name=${nameInput}`
//     fetch(url).then((res) => { return res.json() }).then((data) => {
//         console.log(data); console.log(data.url);
//         window.location.href = data.url
//     })
// }

