
let beingDragged = null;
let initialSquare = null;
const addDragEventsOnSquare = (square) => {
    square.addEventListener("dragstart", pieceDragStart);
    square.addEventListener("dragenter", pieceDragEnter);
    square.addEventListener("dragleave", pieceDragLeave);
    square.addEventListener("dragend", pieceDragEnd);
    square.addEventListener("dragover", e => e.preventDefault(), false);
    square.addEventListener("drop", pieceDrop);
};

const addDragEventsOnSquares = (squareRole) => {
    let squares = document.querySelectorAll(`[data-role="${squareRole}"]`);

    for (let square of squares) {
        addDragEventsOnSquare(square);
    }
};

const getSquareFromEvent = (event) => {
    const parent = event.target.parentNode;
    const target = event.target;

    if (target.dataset.role === 'square') {
        return event.target;
    } else if (parent.dataset.role === 'square') {
        return parent;
    }

    return null;
};

const pieceDragStart = event => {
    const target = event.target;

    if (! target || target.dataset.role !== 'piece') {
        return;
    }

    beingDragged = target;
    initialSquare = getSquareFromEvent(event);

    if (beingDragged.dataset.piece[0] !== getSideToMoveShort()) {
        return;
    }

    target.classList.add("dragging-piece");
};

const pieceDragEnd = event => {
    const target = event.target;

    if (! target) {
        return;
    }

    target.classList.remove("dragging-piece");
}

const pieceDragEnter = event => {
    if (beingDragged.dataset.piece[0] !== getSideToMoveShort()) {
        return;
    }

    const target = event.target;

    if (! target) {
        return;
    }

    target.classList.add("dragged-over");
};

const pieceDragLeave = event => {
    if (beingDragged.dataset.piece[0] !== getSideToMoveShort()) {
        return;
    }

    const target = event.target;

    if (! target) {
        return;
    }

    target.classList.remove("dragged-over");
}

const pieceDrop = (event) => {
    if (beingDragged.dataset.piece[0] !== getSideToMoveShort()) {
        return;
    }

    event.preventDefault();

    let square = getSquareFromEvent(event);

    if (square && square !== initialSquare) {
        square.appendChild(beingDragged);
        changeSidetoMove();
        console.log(beingDragged.dataset.piece, initialSquare.dataset.name + '->' + square.dataset.name);
    }

    event.target.classList.remove("dragged-over");
};
