const grid = document.querySelector(".grid");
const blocks = document.querySelector(".blocks");
const blockWidth = grid.clientWidth / 7;
let colors = ["#00eefb", "#f738fc"];

for (let i = 0; i < 6 * 6; i++) {
  let color = Math.floor(Math.random() * colors.length);
  const block = document.createElement("div");
  block.style.width = `${blockWidth}px`;
  block.style.height = `30px`;
  block.style.backgroundColor = colors[color];
  block.style.boxSizing = " border-box";
  block.style.marginBottom = " 20px";
  blocks.appendChild(block);
}
