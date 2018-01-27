// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.

const { remote, ipcRenderer } = require('electron');
const { handleForm } = remote.require('./index');
const currentWindow = remote.getCurrentWindow();

const submitFormButton = document.querySelector("#form");
const responseParagraph = document.getElementById('response');

submitFormButton.addEventListener("submit", function(event){
    event.preventDefault();
    let firstname = document.getElementById("firstname").value;
    alert(firtname)
});