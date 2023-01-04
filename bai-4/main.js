class Rectangle {
    width;
    height;
    x;
    y;
    color;

    constructor(width, height, x, y, color) {
        this.width = width;
        this.height = height;
        this.x = x;
        this.y = y;
        this.color = color;
    }

    render() {
        let c = document.getElementById("myCanvas");
        let ctx = c.getContext("2d");
        ctx.beginPath();
        ctx.rect(this.x, this.y, this.width, this.height);
        ctx.fillStyle =this.color;
        ctx.stroke();
    }
}

let newDraw = new Rectangle(200, 100, 10, 10, "#000000");
newDraw.render();
