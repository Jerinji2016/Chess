var whitePlayer = {
    pawn1 : {
        id : "pawn1",
        pos : {
            x: 2, y: 1
        },
        imgURL : "images/pawn-icon.svg",
        moves : (x, y) => {
            if(x<8)
                return [[x+1,y]];
        }
    }, 
    pawn2 : {
        id : "pawn2",
        pos : {
            x: 2, y: 2
        },
        imgURL : "images/pawn-icon.svg",
        moves : (x, y) => {
            if(x<8)
                return [[x+1,y]];
        }
    }, 
    pawn3 : {
        id : "pawn3",
        pos : {
            x: 2, y: 3
        },
        imgURL : "images/pawn-icon.svg",
        moves : (x, y) => {
            if(x<8)
                return [[x+1,y]];
        }
    }, 
    pawn4 : {
        id : "pawn4",
        pos : {
            x: 2, y: 4
        },
        imgURL : "images/pawn-icon.svg",
        moves : (x, y) => {
            if(x<8)
                return [[x+1,y]];
        }
    },
    pawn5 : {
        id : "pawn5",
        pos : {
            x: 2, y: 5
        },
        imgURL : "images/pawn-icon.svg",
        moves : (x, y) => {
            if(x<8)
                return [[x+1,y]];
        }
    }, 
    pawn6 : {
        id : "pawn6",
        pos : {
            x: 2, y: 6
        },
        imgURL : "images/pawn-icon.svg",
        moves : (x, y) => {
            if(x<8)
                return [[x+1,y]];
        }
    }, 
    pawn7 : {
        id : "pawn7",
        pos : {
            x: 2, y: 7
        },
        imgURL : "images/pawn-icon.svg",
        moves : (x, y) => {
            if(x<8)
                return [[x+1,y]];
        }
    }, 
    pawn8 : {
        id : "pawn8",
        pos : {
            x: 2, y: 8
        },
        imgURL : "images/pawn-icon.svg",
        moves : (x, y) => {
            if(x<8)
                return [[x+1,y]];
        }
    },
    rook1 : {
        id : "rook1",
        pos : {
            x: 1, y: 1
        },
        imgURL : "images/rook-icon.svg",
        coods : {
            x: 1, y: 1
        },
        moves : (x, y) => {
            let arr = [];
            for(let m=1; m<=8; m++) {
                if(m != x)
                    arr.push([m, y]);
                if(m != y)
                    arr.push([x, m]);  
            }
            return arr;
        }
    }, 
    rook2 : {
        id : "rook2",
        pos : {
            x: 1, y: 8
        },
        imgURL : "images/rook-icon.svg",
        moves : (x, y) => {
            let arr = [];
            for(let m=1; m<=8; m++) {
                if(m != x)
                    arr.push([m, y]);
                if(m != y)
                    arr.push([x, m]);  
            }
            return arr;
        }
    },
    knight1 : {
        id : "knight1",
        pos : {
            x: 1, y: 2
        },
        imgURL : "images/knight-icon.svg",
        moves : (x, y) => {
            let arr = [];
            if(x>1 && y<7)
                arr.push([x-1, y+2]);
            if(x<8 && y<7)
                arr.push([x+1, y+2]);
            if(x>2 && y<8)
                arr.push([x-2, y+1]);
            if(x<7 && y<8)
                arr.push([x+2, y+1]); 
            if(x>2 && y>1)
                arr.push([x-2, y-1]);
            if(x<7 && y>1)
                arr.push([x+2, y-1]);
            if(x>1 && y>2)
                arr.push([x-1, y-2]);
            if(x<8 && y>2)
                arr.push([x+1, y-2]);
            return arr;
        }
    }, 
    knight2 : {
        id : "knight2",
        pos : {
            x: 1, y: 7
        },
        imgURL : "images/knight-icon.svg",
        moves : (x, y) => {
            let arr = [];
            if(x>1 && y<7)
                arr.push([x-1, y+2]);
            if(x<8 && y<7)
                arr.push([x+1, y+2]);
            if(x>2 && y<8)
                arr.push([x-2, y+1]);
            if(x<7 && y<8)
                arr.push([x+2, y+1]); 
            if(x>2 && y>1)
                arr.push([x-2, y-1]);
            if(x<7 && y>1)
                arr.push([x+2, y-1]);
            if(x>1 && y>2)
                arr.push([x-1, y-2]);
            if(x<8 && y>2)
                arr.push([x+1, y-2]);
            return arr;
        }
    },
    bishop1 : {
        id : "bishop1",
        pos : {
            x: 1, y: 3
        },
        imgURL : "images/bishop-icon.svg",
        moves : (x, y) => {
            let arr = [];
            //  Bottoom Left
            for(let t1 = x-1, t2 = y-1; t1>=1 && t2>=1; t1--, t2--) 
                arr.push([t1, t2]);
            
            //  Bottom Right
            for(let t1 = x-1, t2 = y+1; t1>=1 && t2<=8; t1--, t2++) 
                arr.push([t1, t2]);

            //  Top Left
            for(let t1 = x+1, t2 = y-1; t1<=8 && t2>=1; t1++, t2--)
                arr.push([t1, t2]);

            //  Top Right
            for(let t1 = x+1, t2 = y+1; t1<=8 && t2<=8; t1++, t2++)
                arr.push([t1, t2]);

            return arr;
        }
    }, 
    bishop2 : {
        id : "bishop2",
        pos : {
            x: 1, y: 6
        },
        imgURL : "images/bishop-icon.svg",
        moves : (x, y) => {
            let arr = [];
            //  Bottoom Left
            for(let t1 = x-1, t2 = y-1; t1>=1 && t2>=1; t1--, t2--) 
                arr.push([t1, t2]);
            
            //  Bottom Right
            for(let t1 = x-1, t2 = y+1; t1>=1 && t2<=8; t1--, t2++) 
                arr.push([t1, t2]);

            //  Top Left
            for(let t1 = x+1, t2 = y-1; t1<=8 && t2>=1; t1++, t2--)
                arr.push([t1, t2]);

            //  Top Right
            for(let t1 = x+1, t2 = y+1; t1<=8 && t2<=8; t1++, t2++)
                arr.push([t1, t2]);

            return arr;
        }
    },
    king : {
        id : "king",
        pos : {
            x: 1, y: 4
        },
        imgURL : "images/king-icon.svg",
        moves : (x, y) => {
            let arr = [];
            if(x>1) {
                arr.push([x-1, y]);
                if(y>1) {
                    arr.push([x-1, y-1]);
                }
            }
            if(y>1) {
                arr.push([x, y-1]);
                if(x<8)
                    arr.push([x+1, y-1]);
            }
            if(x<8) {
                arr.push([x+1, y]);
                if(y<8)
                    arr.push([x+1, y+1]);
            }
            if(y<8) {
                arr.push([x, y+1]);
                if(x>1)
                    arr.push([x-1, y+1]);
            }
            return arr;
        }
    }, 
    queen : {
        id : "queen",
        pos : {
            x: 1, y: 5
        },
        imgURL : "images/queen-icon.svg",
        moves : (x, y) => {
            let arr = [];
            for(let m=1; m<9; m++) { 
                if(x != m) 
                    arr.push([m, y]);
                if(y != m)
                    arr.push([x, m]);
            }
            //  Bottoom Left
            for(let t1 = x-1, t2 = y-1; t1>=1 && t2>=1; t1--, t2--) 
                arr.push([t1, t2]);
            
            //  Bottom Right
            for(let t1 = x-1, t2 = y+1; t1>=1 && t2<=8; t1--, t2++) 
                arr.push([t1, t2]);

            //  Top Left
            for(let t1 = x+1, t2 = y-1; t1<=8 && t2>=1; t1++, t2--)
                arr.push([t1, t2]);

            //  Top Right
            for(let t1 = x+1, t2 = y+1; t1<=8 && t2<=8; t1++, t2++)
                arr.push([t1, t2]);
            return arr;
        }
    }
};
var blackPlayer = {
    pawn1 : {
        id : "pawn1",
        pos : {
            x: 7, y: 1
        },
        imgURL : "images/pawn-icon.svg",
        moves : (x, y) => {
            if(x>1)
                return ([[x-1, y]]);
        }
    }, 
    pawn2 : {
        id : "pawn2",
        pos : {
            x: 7, y: 2
        },
        imgURL : "images/pawn-icon.svg",
        moves : (x, y) => {
            if(x>1)
                return ([[x-1, y]]);
        }
    }, 
    pawn3 : {
        id : "pawn3",
        pos : {
            x: 7, y: 3
        },
        imgURL : "images/pawn-icon.svg",
        moves : (x, y) => {
            if(x>1)
                return ([[x-1, y]]);
        }
    },
    pawn4 : {
        id : "pawn4",
        pos : {
            x: 7, y: 4
        },
        imgURL : "images/pawn-icon.svg",
        moves : (x, y) => {
            if(x>1)
                return ([[x-1, y]]);
        }
    },
    pawn5 : {
        id : "pawn5",
        pos : {
            x: 7, y: 5
        },
        imgURL : "images/pawn-icon.svg",
        moves : (x, y) => {
            if(x>1)
                return ([[x-1, y]]);
        }
    }, 
    pawn6 : {
        id : "pawn6",
        pos : {
            x: 7, y: 6
        },
        imgURL : "images/pawn-icon.svg",
        moves : (x, y) => {
            if(x>1)
                return ([[x-1, y]]);
        }
    }, 
    pawn7 : {
        id : "pawn7",
        pos : {
            x: 7, y: 7
        },
        imgURL : "images/pawn-icon.svg",
        moves : (x, y) => {
            if(x>1)
                return ([[x-1, y]]);
        }
    }, 
    pawn8 : {
        id : "pawn8",
        pos : {
            x: 7, y: 8
        },
        imgURL : "images/pawn-icon.svg",
        moves : (x, y) => {
            if(x>1)
                return ([[x-1, y]]);
        }
    },
    rook1 : {
        id : "rook1",
        pos : {
            x: 8, y: 1
        },
        imgURL : "images/rook-icon.svg",
        moves : whitePlayer.rook1.moves
    }, 
    rook2 : {
        id : "rook2",
        pos : {
            x: 8, y: 8
        },
        imgURL : "images/rook-icon.svg",
        moves : whitePlayer.rook2.moves
    },
    knight1 : {
        id : "knight1",
        pos : {
            x: 8, y: 2
        },
        imgURL : "images/knight-icon.svg",
        moves : whitePlayer.knight1.moves
    }, 
    knight2 : {
        id : "knight2",
        pos : {
            x: 8, y: 7
        },
        imgURL : "images/knight-icon.svg",
        moves : whitePlayer.knight2.moves
    },
    bishop1 : {
        id : "bishop1",
        pos : {
            x: 8, y: 3
        },
        imgURL : "images/bishop-icon.svg",
        moves : whitePlayer.bishop1.moves
    }, 
    bishop2 : {
        id : "bishop2",
        pos : {
            x: 8, y: 6
        },
        imgURL : "images/bishop-icon.svg",
        moves : whitePlayer.bishop2.moves
    },
    king : {
        id : "king",
        pos : {
            x: 8, y: 4
        },
        imgURL : "images/king-icon.svg",
        moves : whitePlayer.king.moves
    }, 
    queen : {
        id : "queen",
        pos : {
            x: 8, y: 5
        },
        imgURL : "images/queen-icon.svg",
        moves : whitePlayer.queen.moves
    }
};

function createItem(str) {
    let div = document.createElement("DIV");
    // div.setAttribute("class", whitePlayer.class);
    // div.style.background = "url('"+whitePlayer.imgURL+"')";
    return div;
}