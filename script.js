const question = "apple";
const choices = ["りんご", "バナナ", "ぶどう", "みかん"];
const answer = "りんご";

document.body.innerHTML += "<h2>Q. apple はどれ？</h2>";

choices.forEach(choice => {
  const btn = document.createElement("button");
  btn.innerText = choice;

  btn.onclick = () => {
    if (choice === answer) {
      alert("正解！");
    } else {
      alert("ちがいます");
    }
  };

  document.body.appendChild(btn);
});
