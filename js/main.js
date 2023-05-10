
let sidesIndex = 0;
let sides = ['w', 'b'];

const getSideToMoveShort = () => {
    return sides[sidesIndex];
};

const changeSidetoMove = () => {
    sidesIndex = (sidesIndex + 1) % 2;
}

drawBoard('chessboard-container');
addDragEventsOnSquares('square');