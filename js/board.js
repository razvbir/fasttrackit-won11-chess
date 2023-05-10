
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
        [Pieces.bR, Colors.w, 'a8'],
        [Pieces.bN, Colors.b, 'b8'],
        [Pieces.bB, Colors.w, 'c8'],
        [Pieces.bQ, Colors.b, 'd8'],
        [Pieces.bK, Colors.w, 'e8'],
        [Pieces.bB, Colors.b, 'f8'],
        [Pieces.bN, Colors.w, 'g8'],
        [Pieces.bR, Colors.b, 'h8']
    ],
    [
        [Pieces.bP, Colors.b, 'a7'],
        [Pieces.bP, Colors.w, 'b7'],
        [Pieces.bP, Colors.b, 'c7'],
        [Pieces.bP, Colors.w, 'd7'],
        [Pieces.bP, Colors.b, 'e7'],
        [Pieces.bP, Colors.w, 'f7'],
        [Pieces.bP, Colors.b, 'g7'],
        [Pieces.bP, Colors.w, 'h7']
    ],
    [
        [Pieces.none, Colors.w, 'a6'],
        [Pieces.none, Colors.b, 'b6'],
        [Pieces.none, Colors.w, 'c6'],
        [Pieces.none, Colors.b, 'd6'],
        [Pieces.none, Colors.w, 'e6'],
        [Pieces.none, Colors.b, 'f6'],
        [Pieces.none, Colors.w, 'g6'],
        [Pieces.none, Colors.b, 'h6']
    ],
    [
        [Pieces.none, Colors.b, 'a5'],
        [Pieces.none, Colors.w, 'b5'],
        [Pieces.none, Colors.b, 'c5'],
        [Pieces.none, Colors.w, 'd5'],
        [Pieces.none, Colors.b, 'e5'],
        [Pieces.none, Colors.w, 'f5'],
        [Pieces.none, Colors.b, 'g5'],
        [Pieces.none, Colors.w, 'h5']
    ],
    [
        [Pieces.none, Colors.w, 'a4'],
        [Pieces.none, Colors.b, 'b4'],
        [Pieces.none, Colors.w, 'c4'],
        [Pieces.none, Colors.b, 'd4'],
        [Pieces.none, Colors.w, 'e4'],
        [Pieces.none, Colors.b, 'f4'],
        [Pieces.none, Colors.w, 'g4'],
        [Pieces.none, Colors.b, 'h4']
    ],
    [
        [Pieces.none, Colors.b, 'a3'],
        [Pieces.none, Colors.w, 'b3'],
        [Pieces.none, Colors.b, 'c3'],
        [Pieces.none, Colors.w, 'd3'],
        [Pieces.none, Colors.b, 'e3'],
        [Pieces.none, Colors.w, 'f3'],
        [Pieces.none, Colors.b, 'g3'],
        [Pieces.none, Colors.w, 'h3']
    ],
    [
        [Pieces.wP, Colors.w, 'a2'],
        [Pieces.wP, Colors.b, 'b2'],
        [Pieces.wP, Colors.w, 'c2'],
        [Pieces.wP, Colors.b, 'd2'],
        [Pieces.wP, Colors.w, 'e2'],
        [Pieces.wP, Colors.b, 'f2'],
        [Pieces.wP, Colors.w, 'g2'],
        [Pieces.wP, Colors.b, 'h2']
    ],
    [
        [Pieces.wR, Colors.b, 'a1'],
        [Pieces.wN, Colors.w, 'b1'],
        [Pieces.wB, Colors.b, 'c1'],
        [Pieces.wQ, Colors.w, 'd1'],
        [Pieces.wK, Colors.b, 'e1'],
        [Pieces.wB, Colors.w, 'f1'],
        [Pieces.wN, Colors.b, 'g1'],
        [Pieces.wR, Colors.w, 'h1']
    ],
];

const board = new Array(120);

const drawBoard = (id) => {
    let boardContainer = document.querySelector(`[data-id=${id}]`);

    let currentBoard = document.createElement('div');
    currentBoard.setAttribute('class', 'chessboard');
    currentBoard.setAttribute('data-role', 'chessboard');

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
    newSquare.setAttribute('data-role', 'square');
    newSquare.setAttribute('data-name', square[2]);

    if (Number.isInteger(square[0]) && isPiece(square[0])) {
        newSquare.appendChild(drawPiece(NumberToPiece[square[0]]));
    }

    return newSquare;
};

const drawPiece = (pieceShortname) => {
    let piece = document.createElement('img');
    piece.setAttribute('src', '/piece/pixel/' + pieceShortname + '.svg');
    piece.setAttribute('alt', pieceShortname);
    piece.setAttribute('data-role', 'piece');
    piece.setAttribute('data-piece', pieceShortname);

    return piece;
};

