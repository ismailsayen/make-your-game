const blocks = document.querySelector(".blocks");
const grid = document.querySelector(".grid");

const blockWidth = grid.clientWidth / 7;

let colors = ["#00eefb", "#f738fc"];

export function DrawBlocks() {
  for (let i = 0; i < 6 * 6; i++) {
    let color = Math.floor(Math.random() * colors.length);
    const block = document.createElement("div");
    block.style.cssText = `
        width: ${blockWidth}px;
        height: 30px;
        background-color: ${colors[color]};
        box-sizing: border-box;
        margin-bottom: 20px;
        box-shadow: ${colors[color]} 0px 2px 8px 0px;
        border-radius: 8px;
        text-shadow: #fc0 1px 0 10px;
      `;
    blocks.appendChild(block);
  }
}
