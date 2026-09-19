function buttonColor(isWhite, piece) {
    if (isWhite) {
        return (
            <button className="size-16 bg-gray-300 items-center"><span className="size-15 flex items-center justify-center">{piece}</span></button>
        );
    } else {
        return (
            <button className="size-16 bg-gray-800 items-center"><span className="size-15 flex items-center justify-center">{piece}</span></button>
        );
    }
}

function breakln() {
    return (
        <br />
    );
}

const kingBlack = {
    id: 0,
    name: "king",
    color: "black",
    symbol: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 20a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v1a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1z"/><path d="m6.7 18-1-1C4.35 15.682 3 14.09 3 12a5 5 0 0 1 4.95-5c1.584 0 2.7.455 4.05 1.818C13.35 7.455 14.466 7 16.05 7A5 5 0 0 1 21 12c0 2.082-1.359 3.673-2.7 5l-1 1"/><path d="M10 4h4"/><path d="M12 2v6.818"/></svg>
};

const kingWhite = {
    id: 1,
    name: "king",
    color: "white",
    symbol: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 20a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v1a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1z"/><path d="m6.7 18-1-1C4.35 15.682 3 14.09 3 12a5 5 0 0 1 4.95-5c1.584 0 2.7.455 4.05 1.818C13.35 7.455 14.466 7 16.05 7A5 5 0 0 1 21 12c0 2.082-1.359 3.673-2.7 5l-1 1"/><path d="M10 4h4"/><path d="M12 2v6.818"/></svg>
};

const queenBlack = {
    id: 2,
    name: "queen",
    color: "black",
    symbol: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 20a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v1a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1z"/><path d="m12.474 5.943 1.567 5.34a1 1 0 0 0 1.75.328l2.616-3.402"/><path d="m20 9-3 9"/><path d="m5.594 8.209 2.615 3.403a1 1 0 0 0 1.75-.329l1.567-5.34"/><path d="M7 18 4 9"/><circle cx="12" cy="4" r="2"/><circle cx="20" cy="7" r="2"/><circle cx="4" cy="7" r="2"/></svg>
};

const queenWhite = {
    id: 3,
    name: "queen",
    color: "white",
    symbol: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 20a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v1a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1z"/><path d="m12.474 5.943 1.567 5.34a1 1 0 0 0 1.75.328l2.616-3.402"/><path d="m20 9-3 9"/><path d="m5.594 8.209 2.615 3.403a1 1 0 0 0 1.75-.329l1.567-5.34"/><path d="M7 18 4 9"/><circle cx="12" cy="4" r="2"/><circle cx="20" cy="7" r="2"/><circle cx="4" cy="7" r="2"/></svg>
};

const bishopBlack = {
    id: 4,
    name: "bishop",
    color: "black",
    symbol: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 20a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v1a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1z"/><path d="M15 18c1.5-.615 3-2.461 3-4.923C18 8.769 14.5 4.462 12 2 9.5 4.462 6 8.77 6 13.077 6 15.539 7.5 17.385 9 18"/><path d="m16 7-2.5 2.5"/><path d="M9 2h6"/></svg>
};

const bishopWhite = {
    id: 5,
    name: "bishop",
    color: "white",
    symbol: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 20a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v1a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1z"/><path d="M15 18c1.5-.615 3-2.461 3-4.923C18 8.769 14.5 4.462 12 2 9.5 4.462 6 8.77 6 13.077 6 15.539 7.5 17.385 9 18"/><path d="m16 7-2.5 2.5"/><path d="M9 2h6"/></svg>
};

const knightBlack = {
    id: 6,
    name: "knight",
    color: "black",
    symbol: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 20a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v1a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1z"/><path d="M16.5 18c1-2 2.5-5 2.5-9a7 7 0 0 0-7-7H6.635a1 1 0 0 0-.768 1.64L7 5l-2.32 5.802a2 2 0 0 0 .95 2.526l2.87 1.456"/><path d="m15 5 1.425-1.425"/><path d="m17 8 1.53-1.53"/><path d="M9.713 12.185 7 18"/></svg>
};

const knightWhite = {
    id: 7,
    name: "knight",
    color: "white",
    symbol: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 20a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v1a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1z"/><path d="M16.5 18c1-2 2.5-5 2.5-9a7 7 0 0 0-7-7H6.635a1 1 0 0 0-.768 1.64L7 5l-2.32 5.802a2 2 0 0 0 .95 2.526l2.87 1.456"/><path d="m15 5 1.425-1.425"/><path d="m17 8 1.53-1.53"/><path d="M9.713 12.185 7 18"/></svg>
};

const rookBlack = {
    id: 8,
    name: "rook",
    color: "black",
    symbol: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 20a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v1a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1z"/><path d="M10 2v2"/><path d="M14 2v2"/><path d="m17 18-1-9"/><path d="M6 2v5a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2"/><path d="M6 4h12"/><path d="m7 18 1-9"/></svg>
};

const rookWhite = {
    id: 9,
    name: "rook",
    color: "white",
    symbol: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 20a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v1a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1z"/><path d="M10 2v2"/><path d="M14 2v2"/><path d="m17 18-1-9"/><path d="M6 2v5a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2"/><path d="M6 4h12"/><path d="m7 18 1-9"/></svg>
};

const pawnBlack = {
    id: 10,
    name: "pawn",
    color: "black",
    symbol: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 20a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v1a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1z"/><path d="m14.5 10 1.5 8"/><path d="M7 10h10"/><path d="m8 18 1.5-8"/><circle cx="12" cy="6" r="4"/></svg>
};

const pawnWhite = {
    id: 11,
    name: "pawn",
    color: "white",
    symbol: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 20a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v1a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1z"/><path d="m14.5 10 1.5 8"/><path d="M7 10h10"/><path d="m8 18 1.5-8"/><circle cx="12" cy="6" r="4"/></svg>
};

const empty = {
    id: 12,
    name: "empty",
    color: "none",
    symbol: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="transparent" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></svg>
};

function Board() {
    const squares = [
        [buttonColor(true, rookBlack.symbol), buttonColor(false, knightBlack.symbol), buttonColor(true, bishopBlack.symbol), buttonColor(false, queenBlack.symbol), buttonColor(true, kingBlack.symbol), buttonColor(false, bishopBlack.symbol), buttonColor(true, knightBlack.symbol), buttonColor(false, rookBlack.symbol), breakln()],
        [buttonColor(false, pawnBlack.symbol), buttonColor(true, pawnBlack.symbol), buttonColor(false, pawnBlack.symbol), buttonColor(true, pawnBlack.symbol), buttonColor(false, pawnBlack.symbol), buttonColor(true, pawnBlack.symbol), buttonColor(false, pawnBlack.symbol), buttonColor(true, pawnBlack.symbol), breakln()],
        [buttonColor(true, empty.symbol), buttonColor(false, empty.symbol), buttonColor(true, empty.symbol), buttonColor(false, empty.symbol), buttonColor(true, empty.symbol), buttonColor(false, empty.symbol), buttonColor(true, empty.symbol), buttonColor(false, empty.symbol), breakln()],
        [buttonColor(false, empty.symbol), buttonColor(true, empty.symbol), buttonColor(false, empty.symbol), buttonColor(true, empty.symbol), buttonColor(false, empty.symbol), buttonColor(true, empty.symbol), buttonColor(false, empty.symbol), buttonColor(true, empty.symbol), breakln()],
        [buttonColor(true, empty.symbol), buttonColor(false, empty.symbol), buttonColor(true, empty.symbol), buttonColor(false, empty.symbol), buttonColor(true, empty.symbol), buttonColor(false, empty.symbol), buttonColor(true, empty.symbol), buttonColor(false, empty.symbol), breakln()],
        [buttonColor(false, empty.symbol), buttonColor(true, empty.symbol),	buttonColor(false, empty.symbol), buttonColor(true, empty.symbol), buttonColor(false, empty.symbol), buttonColor(true, empty.symbol), buttonColor(false, empty.symbol), buttonColor(true, empty.symbol), breakln()],
        [buttonColor(true, pawnWhite.symbol), buttonColor(false, pawnWhite.symbol), buttonColor(true, pawnWhite.symbol), buttonColor(false, pawnWhite.symbol), buttonColor(true, pawnWhite.symbol), buttonColor(false, pawnWhite.symbol), buttonColor(true,pawnWhite.symbol), buttonColor(false,pawnWhite.symbol), breakln()],
        [buttonColor(false, rookWhite.symbol), buttonColor(true, knightWhite.symbol), buttonColor(false, bishopWhite.symbol), buttonColor(true, queenWhite.symbol), buttonColor(false, kingWhite.symbol), buttonColor(true, bishopWhite.symbol), buttonColor(false, knightWhite.symbol), buttonColor(true, rookWhite.symbol), breakln()]
    ];

    console.log(squares);
    return (
        <>
            <div>{squares}</div>
        </>
    );
}

export default Board;