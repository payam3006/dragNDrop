const q = console.log;
const body = document.getElementById("body");
const container = document.getElementById("container");
const dragItem = document.getElementById("dragItem");
let correctTarget = false;
let currentBox = "box1";
// const previusBox = document.getElementById(`${currentBox}`);

/////////////////setDragImage////////////////////////////////
const img = document.createElement("div");
img.id = "img";
img.classList.add("onDrag");
img.draggable = "true";

// body.onmousemove = function (ev) {
//   q(ev.clientX, ev.clientX);
// };

const drag = (ev) => {
  // q(ev.target.id);
  if (ev.target.id == currentBox) {
    ev.dataTransfer.setData("text", ev.target.id);
    document.getElementById(`${ev.target.id}`).classList.remove("img");
    // previusBox.removeChild(dragItem);
    /////////////////setDragImage////////////////////////////////

    container.appendChild(img);
    ev.dataTransfer.setDragImage(img, ev.offsetX, ev.offsetY);
  } else {
    ev.preventDefault();
  }
};

function allowDrop(ev) {
  ev.preventDefault();
  // q(ev.target.id);
}

const dragEnter = (ev) => {
  document.getElementById(`${ev.target.id}`).classList.add("dragOn");
  correctTarget = true;
};

const dragLeave = (ev) => {
  document.getElementById(`${ev.target.id}`).classList.remove("dragOn");
  correctTarget = false;
};

const drop = (ev) => {
  // q(ev.dataTransfer.getData("text"), ev.target.id);
  currentBox = ev.target.id;
  // document
  //   .getElementById(`${ev.dataTransfer.getData("text")}`)
  //   .classList.remove("img");
  document.getElementById(`${ev.target.id}`).classList.add("img");
  document.getElementById(`${ev.target.id}`).classList.remove("dragOn");
  container.removeChild(img);

  /////////////////////////NOT Work!!!////////////////////////////////
  // if (correctTarget) {
  //   document.getElementById(`${ev.target.id}`).classList.add("img");
  //   document.getElementById(`${ev.target.id}`).classList.remove("dragOn");
  //   container.removeChild(img);
  // } else {
  //   q("NOT Correct Target", ev.dataTransfer.getData("text"), ev.target.id);
  // }
};

const dragEnd = (ev) => {
  if (!correctTarget) {
    document.getElementById(`${ev.target.id}`).classList.add("img");

    q("NOT Correct Target", ev.dataTransfer.getData("text"), ev.target.id);
  }
};
