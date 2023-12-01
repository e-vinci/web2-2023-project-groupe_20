import Phaser from 'phaser';
import StartScene from '../Game/StartScene';
import GameScene from '../Game/GameScene';
import GameOverScene from '../Game/GameOverScene';

let game;

const GamePage = () => {

  const phaserGame = `
  <div id="gameDiv" class="d-flex justify-content-center">
  </div>`;

  const main = document.querySelector('main');
  main.innerHTML = phaserGame;

  const config = {
    scale: {
      width: 1280,
      height: 768,
      autoCenter: Phaser.Scale.CENTER_BOTH,
      mode: Phaser.Scale.FIT,
      Audio:true
    },

    scene: [StartScene, GameScene, GameOverScene],
    pixelArt: true,
    physics: {
      default: "arcade",
      arcade: {
        debug: false
      }
    },
    parent: 'gameDiv',
    dom: {
        createContainer: true
    },
  }

  if (game) game.destroy(true);
  game = new Phaser.Game(config);

};

export default GamePage;