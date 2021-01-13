const setVar = (elem, varName, value) => {
  elem.style.setProperty(varName, value);
}

const $ = (elem) => document.querySelector(elem);

$('#speed').addEventListener('input', e => {
  setVar($('body'), '--speed', e.target.value);
});