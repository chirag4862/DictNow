function getData(text) {
  fetch("https://api.dictionaryapi.dev/api/v2/entries/en/" + text)
    .then((data) => data.json())
    .then((result) => {
      const output = result[0].meanings[0].definitions[0].definition;
      const meaning = document.getElementById("meaning");

      meaning.innerHTML = output;
    });
}

document.getElementById("search").addEventListener("click", () => {
  const text = document.getElementById("textContent").value;
  getData(text);
});
