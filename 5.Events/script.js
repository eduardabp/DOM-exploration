const _initTime = Date.now()

const getElapsedTime = () => {
  return Number((Date.now() - _initTime) / 1000).toFixed(2) + 's'
}

const clickOnSquare = (e) => {
  console.log(e.target.classList[1])
  console.log(getElapsedTime())

  const newSquare = document.createElement("div");
  newSquare.classList.add("displayedsquare");
  newSquare.classList.add(e.target.classList[1]);

  const parent = document.querySelector(".displayedsquare-wrapper");
  parent.appendChild(newSquare);

  const logList = document.querySelector("ul");
  const logItem = document.createElement("li");
  const logMessage = document.createTextNode(getElapsedTime() + " to generate a " + e.target.classList[1] + " square");

  logItem.appendChild(logMessage);
  logList.appendChild(logItem);
}

const actionSquares = document.querySelectorAll('.actionsquare')
for (let actionSquare of actionSquares) {
  actionSquare.addEventListener('click', clickOnSquare)
}
