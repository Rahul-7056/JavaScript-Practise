let peopleEl = document.getElementById('count-el');
let people = 0;
function increment() {
    people += 1;
    peopleEl.textContent = people;
}

let saveEl = document.getElementById('save-el');
function save() {
    var saveCount = people + ' - ';
    saveEl.textContent += saveCount;
    people = 0;
    peopleEl.textContent = people;
}