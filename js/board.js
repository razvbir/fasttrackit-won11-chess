
const isPiece = (value) => value >= 1 && value <= 12;

const Colors = {
    'w': 'white',
    'b': 'black'
}

const Pieces = {
    'wP': 1, // White Pawn
    'wN': 2, // White Knight
    'wB': 3, // White Bishop
    'wR': 4, // White Rook
    'wQ': 5, // White Queen
    'wK': 6, // White King
    'bP': 7, // Black Pawn
    'bN': 8,
    'bB': 9,
    'bR': 10,
    'bQ': 11,
    'bK': 12,
    'none': 0
}

const NumberToPiece = {
    1: 'wP', // White Pawn
    2: 'wN', // White Knight
    3: 'wB', // White Bishop
    4: 'wR', // White Rook
    5: 'wQ', // White Queen
    6: 'wK', // White King
    7: 'bP', // Black Pawn
    8: 'bN',
    9: 'bB',
    10: 'bR',
    11: 'bQ',
    12: 'bK'
};

const boardSetup = [
    [
        [Pieces.wR, Colors.w],
        [Pieces.wN, Colors.b],
        [Pieces.wB, Colors.w],
        [Pieces.wK, Colors.b],
        [Pieces.wQ, Colors.w],
        [Pieces.wB, Colors.b],
        [Pieces.wN, Colors.w],
        [Pieces.wR, Colors.b]
    ],
    [
        [Pieces.wP, Colors.b],
        [Pieces.wP, Colors.w],
        [Pieces.wP, Colors.b],
        [Pieces.wP, Colors.w],
        [Pieces.wP, Colors.b],
        [Pieces.wP, Colors.w],
        [Pieces.wP, Colors.b],
        [Pieces.wP, Colors.w]
    ],
    [
        [Pieces.none, Colors.w],
        [Pieces.none, Colors.b],
        [Pieces.none, Colors.w],
        [Pieces.none, Colors.b],
        [Pieces.none, Colors.w],
        [Pieces.none, Colors.b],
        [Pieces.none, Colors.w],
        [Pieces.none, Colors.b]
    ],
    [
        [Pieces.none, Colors.b],
        [Pieces.none, Colors.w],
        [Pieces.none, Colors.b],
        [Pieces.none, Colors.w],
        [Pieces.none, Colors.b],
        [Pieces.none, Colors.w],
        [Pieces.none, Colors.b],
        [Pieces.none, Colors.w]
    ],
    [
        [Pieces.none, Colors.w],
        [Pieces.none, Colors.b],
        [Pieces.none, Colors.w],
        [Pieces.none, Colors.b],
        [Pieces.none, Colors.w],
        [Pieces.none, Colors.b],
        [Pieces.none, Colors.w],
        [Pieces.none, Colors.b]
    ],
    [
        [Pieces.none, Colors.b],
        [Pieces.none, Colors.w],
        [Pieces.none, Colors.b],
        [Pieces.none, Colors.w],
        [Pieces.none, Colors.b],
        [Pieces.none, Colors.w],
        [Pieces.none, Colors.b],
        [Pieces.none, Colors.w]
    ],
    [
        [Pieces.bP, Colors.w],
        [Pieces.bP, Colors.b],
        [Pieces.bP, Colors.w],
        [Pieces.bP, Colors.b],
        [Pieces.bP, Colors.w],
        [Pieces.bP, Colors.b],
        [Pieces.bP, Colors.w],
        [Pieces.bP, Colors.b]
    ],
    [
        [Pieces.bR, Colors.b],
        [Pieces.bN, Colors.w],
        [Pieces.bB, Colors.b],
        [Pieces.bK, Colors.w],
        [Pieces.bQ, Colors.b],
        [Pieces.bB, Colors.w],
        [Pieces.bN, Colors.b],
        [Pieces.bR, Colors.w]
    ],
];

const board = new Array(120);

const drawBoard = (id) => {
    let boardContainer = document.querySelector(`[data-id=${id}]`);

    let currentBoard = document.createElement('div');
    currentBoard.setAttribute('class', 'chessboard');

    for (let row of boardSetup) {
        currentBoard.appendChild(drawBoardRow(row));
    }

    boardContainer.appendChild(currentBoard);
};

const drawBoardRow = (row) => {
    let newRow = document.createElement('div');
    newRow.setAttribute('class', 'row');

    for (let square of row) {
        newRow.appendChild(drawBoardSquare(square));
    }

    return newRow;
};

const drawBoardSquare = (square) => {
    let newSquare = document.createElement('div');
    newSquare.setAttribute('class', 'square ' + square[1]);

    if (Number.isInteger(square[0]) && isPiece(square[0])) {
        newSquare.appendChild(drawPiece(NumberToPiece[square[0]]));
    }

    return newSquare;
};

const drawPiece = (pieceShortname) => {
    let piece = document.createElement('img');
    piece.setAttribute('src', '/piece/pixel/' + pieceShortname + '.svg');
    piece.setAttribute('alt', pieceShortname);

    return piece;
};

