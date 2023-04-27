const pieces = document.getElementsByClassName("piece");

let dragged;
const pieceDragStart = event => {
  const target = event.target;

  if (!target) {
    return;
  }
  dragged = target;
  target.classList.add("dragging-piece");
};

const pieceDragEnd = event => {
  const target = event.target;

  if (!target) {
    return;
  }
  target.classList.remove("dragging-piece");
}

const pieceDragEnter = event => {
  const target = event.target;

  if (!target) {
    return;
  }
  if (target.classList.contains("empty-square")) {
    target.classList.add("dragover-square");
  }
};

const pieceDragLeave = event => {
  const target = event.target;

  if (!target) {
    return;
  }
  if (target.classList.contains("empty-square")) {
    target.classList.remove("dragover-square");
  }
}

const pieceDrop = (event) => {
  event.preventDefault();

  const parent = event.target.parentNode;
  const target = event.target;
  if (target.classList.contains("empty-square")) {
    target.classList.remove("dragover-square");

    parent.removeChild(target);
    parent.appendChild(dragged);

    // TODO o piese nu poate sa fie mutata in campul de unde o piesa a plecat, fix it
  }
};

for (const piece of pieces) {
  piece.addEventListener("dragstart", pieceDragStart);
  piece.addEventListener("dragenter", pieceDragEnter);
  piece.addEventListener("dragleave", pieceDragLeave);
  piece.addEventListener("dragend", pieceDragEnd);
  piece.addEventListener("dragover", e => e.preventDefault(), false);
  piece.addEventListener("drop", pieceDrop);
}
