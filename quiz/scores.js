const highScoresEl = document.getElementById("highscores");
const clearEl = document.getElementById("clear");

var displayScores = () => {
  let data = JSON.parse(localStorage.getItem("info"))  || [];
  console.log(JSON.parse(localStorage.getItem("info")));
  console.log(typeof data);

  data = data.sort(function (a, b) {
    return b.score - a.score;
  });
  for (let i = 0; i < data.length; i++) {
    // let div = document.createElement("div")
    let li = document.createElement("li");
    li.textContent = "" + data[i].userInitials + " " + data[i].score;
    // div.append(li)
    highScoresEl.append(li);
  }
};

clearEl.onclick = function () {
  localStorage.removeItem("info")
  location.reload();
};

displayScores();
