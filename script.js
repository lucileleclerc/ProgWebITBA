document.getElementById('suggSubmit').addEventListener('click', function() {
    var newEl = document.getElementById('suggInput').value.trim();

    if (newElement !== '') {
        var listItem = document.createElement('li');
        listItem.textContent = newElement;
        document.getElementById('listeSugg').appendChild(listItem);
        document.getElementById('suggInput').value = '';
    } else {
        alert('Veuillez entrer un élément.');
    }
});