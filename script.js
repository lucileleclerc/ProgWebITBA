document.getElementById('suggSubmit').addEventListener('click', function() {
    var newEl1 = document.getElementById('suggTitleInput').value.trim();
    var newEl2 = document.getElementById('suggAuthorInput').value.trim();
    var newEl3 = document.getElementById('suggDescInput').value.trim();

    if (newEl1 !== '') {
        var titleItem = document.createElement('p');
        var authorItem = document.createElement('p');
        var descItem = document.createElement('p');
        titleItem.textContent = newEl1;
        authorItem.textContent = newEl2;
        descItem.textContent = newEl3;
        document.getElementById('listeTitleSugg').appendChild(titleItem);
        document.getElementById('listeAuthorSugg').appendChild(authorItem);
        document.getElementById('listeDescSugg').appendChild(descItem);
        document.getElementById('suggTitleInput').value = '';
        document.getElementById('suggAuthorInput').value = '';
        document.getElementById('suggDescInput').value = '';
    } else {
        alert('Please write at least a title!');
    }
});