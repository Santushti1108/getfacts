import { ShaderArt } from 'https://cdn.skypack.dev/shader-art';
ShaderArt.register();

const URL = "https://uselessfacts.jsph.pl/api/v2/facts/random?language=en";

const factpara = document.querySelector("#fact");
const button = document.getElementById("click");

button.addEventListener("click", facts);

 async function facts() {
    let promise = await fetch(URL);
    console.log(promise);
    let data = await promise.json();
    factpara.innerText = data.text;
}