var button = document.getElementById('button');
var label = document.getElementById("text");
var input = document.getElementById("text-field");

chrome.storage.sync.get("text",({text}) =>{
    label.textContent= text;
});


function update(){
    var value = input.value;
    console.log(`${value}`);

    if (value == "") {
        return;
    }

    label.textContent=value;
    const text = value;
    chrome.storage.sync.set({text});
    input.value = "";
}


document.body.onkeyup = function(e) {
    if(e.keyCode == 13) {
        update();
    }
}


button.addEventListener('click', update);