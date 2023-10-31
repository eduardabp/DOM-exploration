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

const keyEvent = (e) => {
  if (e.code == "Space") {
    let r = Math.floor(Math.random() * 254);
    let g = Math.floor(Math.random() * 254);
    let b = Math.floor(Math.random() * 254);
    let randomColor = "rgb(" + r + ", " + g + ", " + b + ")";
    body.style.backgroundColor = randomColor;

    const logList = document.querySelector("ul");
    const logItem = document.createElement("li");
    const logMessage = document.createTextNode("After " + getElapsedTime() + " someone used the spacebar");
  
    logItem.appendChild(logMessage);
    logList.appendChild(logItem);
  }

  else if (e.code == "KeyL") {
    const list = document.getElementsByTagName("li");
    while (list.length > 0) {
      list[0].remove();
    }
  }
  else if (e.code == "KeyS") {
    const squares = document.getElementsByClassName("displayedsquare");
    while (squares.length > 0) {
      squares[0].remove();
    }
  }
}

const body = document.querySelector("body");
body.addEventListener("keyup", keyEvent);


