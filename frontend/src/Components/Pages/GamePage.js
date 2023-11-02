import placementTilesData from '../Data/placementTilesData';
import waypoints1 from '../Data/waypoint';
import Enemy from '../Classes/Enemy';
import PlacementTile from '../Classes/PlacementTile';
import Building from '../Classes/Building';
import TowerDefenseMap from '../../img/TowerDefenseMap.png';

const GamePage = () => {

const canvas = document.querySelector('canvas');
const c = canvas.getContext('2d');

canvas.width = 1280;
canvas.height = 768;

c.fillStyle = 'black';
c.fillRect (0,0,canvas.width, canvas.height);


const placementTilesData2D = [];

for (let i = 0; i < placementTilesData.length; i+= 20) {
    placementTilesData2D.push(placementTilesData.slice(i, i + 20))
    
}


const placementTiles = []

placementTilesData2D.forEach( (row, y) => {
    row.forEach( (symbol, x) => {
        if (symbol === 342) {
            // Ici on rajoute la tour
            placementTiles.push(new PlacementTile({
                position: {
                    x: x * 64,
                    y: y * 64
                }
            }))
        }
    })
})

console.log(placementTiles)

const image = new Image();
image.onload = () => {
    animate();
    
}
image.src = TowerDefenseMap;


const enemies = [];
for (let i = 1; i < 10; i++) {
    const xOffset = i * 150;
    enemies.push(new Enemy({ position: { x: waypoints1[0].x - xOffset, y: waypoints1[0].y}}));
    
}

const mouse = {
  x: undefined,
  y: undefined
}

const buildings = [];

let activeTile;

function animate() {
    requestAnimationFrame(animate);
    
    c.drawImage(image,0, 0);
    enemies.forEach(enemy => {
        enemy.update();
    })

    placementTiles.forEach((tile) => {
        tile.update(mouse);
    })
    buildings.forEach(building => {
      building.draw();
    })
    
}

canvas.addEventListener('click', () => {
  if (activeTile && !activeTile.isOcupied) {
    buildings.push(new Building({
      position: {
        x: activeTile.position.x,
        y: activeTile.position.y
      }
    }))
    activeTile.isOcupied = true;
  }
  console.log(buildings);
})

window.addEventListener('mousemove', (event) => {
    mouse.x = event.clientX;
    mouse.y = event.clientY;

    activeTile = null;
    for (let i = 0; i < placementTiles.length; i++) {
      const tile = placementTiles[i];
      if(mouse.x > tile.position.x &&
        mouse.x < tile.position.x + tile.size &&
        mouse.y > tile.position.y &&
        mouse.y < tile.position.y + tile.size){
          activeTile = tile;
          break;

        }
      
    }
})
  
};


export default GamePage;


