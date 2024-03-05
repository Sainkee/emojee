let textValue = document.getElementById("textInput");
let tb = document.querySelector("tbody");

window.onload = displayData(emojiList);

function displayData(query) {
  tb.innerHTML = "";
  query.forEach((data) => {
    let tr = document.createElement("div");
    tr.innerHTML = `
      <span class = "pr-5">
      ${data.emoji}
      </span>
      <span> ${data.aliases}</span>
      <span>
      ${data.description}</span>
      `;

    tr.setAttribute("class", "m-5");
    let hr = document.createElement("hr");

    tb.appendChild(tr);
    tb.appendChild(hr);
  });
}

textValue.addEventListener("input", filterData);

function filterData(e) {
  let value = e.target.value;
  let res = emojiList.filter((ele) => {
    return (
      ele.description.toLowerCase().includes(value) ||
      ele.aliases.some((alias) => alias.toLowerCase().includes(value)) ||
      ele.tags.some((tag) => tag.toLowerCase().includes(value))
    );
  });

  displayData(res);
}
