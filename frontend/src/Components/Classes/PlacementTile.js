class PlacementTile{
    constructor( {position = {x: 0, y: 0}}){
        this.position = position;
        this.size = 64;
        this.color = 'rgba(255,255,255,0.15)';
    }

    draw(){
        const canvas = document.querySelector('canvas');
const c = canvas.getContext('2d');
        c.fillStyle = this.color;
        c.fillRect(this.position.x, this.position.y, this.size, this.size )
    }

    update(mouse){
        this.draw();

        if (mouse.x > this.position.x &&
            mouse.x < this.position.x + this.size &&
            mouse.y > this.position.y &&
            mouse.y < this.position.y + this.size ){
                console.log('colliding');
            }

    }
}

export default PlacementTile;