const canvas = document.querySelector("canvas");
const c = canvas.getContext("2d");

canvas.width = innerWidth;
canvas.height = innerHeight;

class Player {
  constructor() {
    this.position = {
      x: 100,
      y: 100,
    };

    this.velocity = {
      x: 0,
      y: 1,
    };

    this.width = 30;
    this.height = 30;
  }

  //prettier-ignore
  draw() {
    c.fillStyle = 'red'
    c.fillRect( this.position.x, 
                this.position.y,
                this.width,
                this.height
            );
  }

  update() {
    this.draw();
    this.position.y += this.velocity.y;
  }
}

const player = new Player();
player.update();

function animate() {
  requestAnimationFrame(animate); // for this this functin is a recursive function
  player.update();
}

animate();
