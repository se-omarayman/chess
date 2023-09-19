import Pawn from './pieces/Pawn';
import { COLS, ROWS } from './utils/constants';

export const renderBoard = (element) => {
  const renderPiece = (id) => {
    const whitePawn = new Pawn(id[0], id[1], 'white');
    const blackPawn = new Pawn(id[0], id[1], 'black');
    if (id[1] === '7') {
      return blackPawn.render();
    }
    if (id[1] === '2') {
      return whitePawn.render();
    }
    // switch (id) {
    //   case 'A8':
    //   case 'H8':
    //     return "<img class='pieces' src='../src/assets/blackPieces/black-rook.png' />";
    //   case 'B8':
    //   case 'G8':
    //     return "<img class='pieces' src='../src/assets/blackPieces/black-knight.png' />";
    //   case 'C8':
    //   case 'F8':
    //     return "<img class='pieces' src='../src/assets/blackPieces/black-bishop.png' />";
    //   case 'D8':
    //     return "<img class='pieces' src='../src/assets/blackPieces/black-king.png' />";
    //   case 'E8':
    //     return "<img class='pieces' src='../src/assets/blackPieces/black-queen.png' />";
    //
    //   //
    //   //  white pieces
    //   //
    //
    //   case 'A1':
    //   case 'H1':
    //     return "<img class='pieces' src='../src/assets/whitePieces/white-rook.png' />";
    //   case 'B1':
    //   case 'G1':
    //     return "<img class='pieces' src='../src/assets/whitePieces/white-knight.png' />";
    //   case 'C1':
    //   case 'F1':
    //     return "<img class='pieces' src='../src/assets/whitePieces/white-bishop.png' />";
    //   case 'D1':
    //     return "<img class='pieces' src='../src/assets/whitePieces/white-king.png' />";
    //   case 'E1':
    //     return "<img class='pieces' src='../src/assets/whitePieces/white-queen.png' />";
    //
    //   default:
    //     return '';
    // }
  };

  let rowHtml = '';
  let iswhite = false;
  for (const row of ROWS.reverse()) {
    rowHtml += '<div class="row">';
    iswhite = !iswhite;
    for (const col of COLS) {
      rowHtml += `<span id="${col}${row}" class=${
        iswhite ? 'white' : 'black'
      }> </span>`;
      iswhite = !iswhite;
    }

    rowHtml += '</div>';
  }

  element.innerHTML = rowHtml;

  for (const row of ROWS.reverse()) {
    for (const col of COLS) {
      renderPiece(col + row);
    }
  }
};
