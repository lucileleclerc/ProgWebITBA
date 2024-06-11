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

document.getElementById('sendPersList1').addEventListener('click', function() {
    let child = document.getElementById("carousel1").children[$("#slider1").find('.active').index()].children[0].children[0].children[0].children[0].textContent;
    let newProp = document.createElement('p');
    newProp.textContent = child;
    document.getElementById("prop").appendChild(newProp);

    var select = document.createElement("select");
    var option1 = document.createElement("option");
    var option2 = document.createElement("option");
    var option3 = document.createElement("option");
    var option4 = document.createElement("option");
    var option5 = document.createElement("option"); 
    option1.value = "value1"; 
    option2.value = "value2"; 
    option3.value = "value3"; 
    option4.value = "value4"; 
    option5.value = "value5"; 
    option1.text = "1";
    option2.text = "2";
    option3.text = "3";
    option4.text = "4";
    option5.text = "5"; 
    select.appendChild(option1);
    select.appendChild(option2);
    select.appendChild(option3);
    select.appendChild(option4);
    select.appendChild(option5);  
    
    document.getElementById("grade").appendChild(select);
    document.getElementById("grade").appendChild(document.createElement("br"));

    let hidden = document.getElementById("supp").getAttribute("hidden");
    if (hidden) {
        document.getElementById("supp").removeAttribute("hidden");
        document.getElementById("empty").setAttribute("hidden", true);
    }
});

document.getElementById('sendPersList2').addEventListener('click', function() {
    let child = document.getElementById("carousel2").children[$("#slider2").find('.active').index()].children[0].children[0].children[0].children[0].textContent;
    let newProp = document.createElement('p');
    newProp.textContent = child;
    document.getElementById("prop").appendChild(newProp);

    var select = document.createElement("select");
    var option1 = document.createElement("option");
    var option2 = document.createElement("option");
    var option3 = document.createElement("option");
    var option4 = document.createElement("option");
    var option5 = document.createElement("option"); 
    option1.value = "value1"; 
    option2.value = "value2"; 
    option3.value = "value3"; 
    option4.value = "value4"; 
    option5.value = "value5"; 
    option1.text = "1";
    option2.text = "2";
    option3.text = "3";
    option4.text = "4";
    option5.text = "5"; 
    select.appendChild(option1);
    select.appendChild(option2);
    select.appendChild(option3);
    select.appendChild(option4);
    select.appendChild(option5);  
    
    document.getElementById("grade").appendChild(select);
    document.getElementById("grade").appendChild(document.createElement("br"));

    let hidden = document.getElementById("supp").getAttribute("hidden");
    if (hidden) {
        document.getElementById("supp").removeAttribute("hidden");
        document.getElementById("empty").setAttribute("hidden", true);
    }
});

document.getElementById('suppButton').addEventListener('click', function() {
    let indexDelete = document.getElementById("suppInput").value;

    if (indexDelete>0 && indexDelete<=document.getElementById("prop").children.length-1) {
        document.getElementById("suppInput").value = '';
        document.getElementById("prop").children[indexDelete].remove();
        document.getElementById("grade").children[indexDelete*2-1].remove();
        document.getElementById("grade").children[indexDelete*2-1].remove();
    } else {
        window.alert("Invalid index");
        document.getElementById("suppInput").value = '';
    }

    if (document.getElementById("prop").children.length == 1) {
        document.getElementById("supp").setAttribute("hidden", true);
        document.getElementById("empty").removeAttribute("hidden");
    }
});