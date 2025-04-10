const grid = document.querySelector(".grid");
const blocks = document.querySelector(".blocks");
let colors = ["#00eefb", "#f738fc"];

export let blocksArray = [];
let blocksDetails = {
  c: 5,
  r: 4,
  bWidth: grid.clientWidth / 5 - 20,
  bHeight: 20,
  bx: 15,
  by: 45,
};

function MakeBlocks() {
  for (let c = 0; c < blocksDetails.c; c++) {
    for (let r = 0; r < blocksDetails.r; r++) {
      let i = Math.floor(Math.random() * colors.length);
      let block = {
        x: blocksDetails.bx + c * blocksDetails.bWidth + c * 20,
        y: blocksDetails.by + r * blocksDetails.bHeight + r * 10,
        width: blocksDetails.bWidth,
        height: blocksDetails.bHeight,
        background: colors[i],
        isBroken: false,
      };
      blocksArray.push(block);
    }
  }
}
MakeBlocks();
export function DrawBlocks() {
  for (let i = 0; i < blocksArray.length; i++) {
    let block = document.createElement("div");
    if (!blocksArray[i].isBroken) {
      block.style.cssText = /*style*/ `
          width: ${blocksArray[i].width}px;
          height: ${blocksArray[i].height}px;
          background-color: ${blocksArray[i].background};
          box-sizing: border-box;
          box-shadow: ${colors[blocksArray[i].background]} 0px 8px 18px 20px;
          border-radius: 8px;
          position:absolute;
          left:${blocksArray[i].x}px;
          top:${blocksArray[i].y}px;
          z-index:2;
      `;
      block.setAttribute("data-index", i);
      blocks.appendChild(block);
    }
  }
}
