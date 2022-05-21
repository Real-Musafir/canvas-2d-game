const canvas = document.querySelector("canvas");
const c = canvas.getContext("2d");

canvas.width = innerWidth;
canvas.height = innerHeight;

const gravity = 0.5;

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
    if (this.position.y + this.height + this.velocity.y <= canvas.height) {
      this.velocity.y += gravity;
    } else {
      this.velocity.y = 0;
    }
  }
}

const player = new Player();
player.update();

function animate() {
  requestAnimationFrame(animate); // for this this functin is a recursive function
  c.clearRect(0, 0, canvas.width, canvas.height);
  player.update();
}

animate();
