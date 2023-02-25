class Game {
  setBoard() {
    this.field = document.createElement("div");
    this.field.classList.add("board");
    document.body.appendChild(this.field);
    for (let i = 0; i < 16; i += 1) {
      const cell = document.createElement("div");
      cell.classList.add("cell");
      this.field.appendChild(cell);
    }
  }

  setGoblinPosition() {
    let position = this.getRandom(0, 15);
    while (position === this.lastPosition) {
      position = this.getRandom(0, 15);
    }
    this.lastPosition = position;
    return position;
  }
  setGoblinImg () {
    const goblinImg = document.createElement("img");
    goblinImg.setAttribute('src', '../img/goblin.png');
    setInterval(()=>{
        this.field.children[this.setGoblinPosition()].appendChild(goblinImg)
    }, 1000)
  }

  getRandom(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
  }
}

const game = new Game();
game.setBoard();
