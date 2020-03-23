var chessBoard = document.getElementById('chess-board');
var currentPiece = null;

// Initialize environment
setUpBoard();
setUpPawns();

function setUpBoard() {
    var count = 1;
    for(let i=0; i<8; i++) {
        let rowDiv = document.createElement("DIV");
        rowDiv.setAttribute("class", "row-div");
        rowDiv.innerHTML = "";
        for(let j=0; j<8; j++) {
            let colDiv = document.createElement("DIV");
            colDiv.setAttribute("class", "col-div");
            colDiv.setAttribute("id", "box-"+(count++));

            if((i+j)%2 !== 0) 
                colDiv.classList.add("odd");
            else    
                colDiv.classList.add("even");
            
            rowDiv.appendChild(colDiv);
        }
        chessBoard.style.display = "flex";
        chessBoard.style.animation = ".5s popIn ease-in";
        chessBoard.appendChild(rowDiv);
    }
}

function setUpPawns() {
    //  Set up Black Player pawns
    for(let x=0; x<Object.keys(blackPlayer).length; x++) {
        let bPiece = blackPlayer[Object.keys(blackPlayer)[x]];
        let bDiv = document.createElement("IMG");
        bDiv.setAttribute("id", bPiece.id);
        bDiv.setAttribute("class", "black-pieces");
        bDiv.setAttribute("src", bPiece.imgURL);
        bDiv.setAttribute("onclick", "showMoves(this, blackPlayer)");
        bPiece.item = bDiv;

        let bx=bPiece.pos.x, by=bPiece.pos.y;
        let bTarget = document.getElementById('box-'+getBox(bx, by));
        bTarget.appendChild(bPiece.item);

        let wDiv = document.createElement("IMG");
        let wPiece = whitePlayer[Object.keys(whitePlayer)[x]];
        wDiv.setAttribute("class", "white-pieces");
        wDiv.setAttribute("src", wPiece.imgURL);
        wDiv.setAttribute("id", wPiece.id);
        wDiv.setAttribute("onclick", "showMoves(this, whitePlayer)");
        wPiece.item = wDiv;

        let wx=wPiece.pos.x, wy=wPiece.pos.y;
        let wTarget = document.getElementById('box-'+getBox(wx, wy));
        wTarget.appendChild(wPiece.item);
    }
}

function getBox(x, y) {
    return ((x-1)*8)+y;
}

function showMoves(ele, player) {
    currentPiece;
    if(currentPiece) {
        hideMoves();
    }
    let piece = player[ele.id];
    // console.log(piece);
    let arr = piece.moves(piece.pos.x, piece.pos.y);
    // console.log(arr);
    for(let x=0; x<arr.length; x++) {
        document.getElementById("box-"+getBox(arr[x][0],arr[x][1])).classList.add("available-moves");
        // console.log(arr[x]);
    }
    currentPiece = {};
    currentPiece.id = piece
}

function hideMoves() {
    let arr = currentPiece.id.moves(currentPiece.id.pos.x, currentPiece.id.pos.y);
    // console.log(arr);
    for(let x=0; x<arr.length; x++) {
        document.getElementById("box-"+getBox(arr[x][0],arr[x][1])).classList.remove("available-moves");
    }
}