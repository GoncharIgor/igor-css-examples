window.addEventListener("DOMContentLoaded", () => {
  const character = document.getElementById("char");

  document.addEventListener("keydown", (e) => {
    switch (e.code) {
      case "ArrowRight":
        move(character, "move-right");
        return;
      case "ArrowLeft":
        move(character, "move-left");
        return;
      case "ArrowUp":
        move(character, "move-up");
        return;
      case "ArrowDown":
        move(character, "move-down");
        return;
      default:
        return;
    }
  });
});

function move(character, newDirection) {
  const previousDirection = character.className
  .split(" ")
  .filter((c) => c.startsWith('move-'));

  character.classList.remove(previousDirection[0]);
  character.classList.add(newDirection);
}
