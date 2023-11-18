import Phaser from 'phaser';
import StartScene from '../Game/StartScene';
import GameScene from '../Game/GameScene';
import GameOverScene from '../Game/GameOverScene';

let game;

const GamePage = () => {

  const config = {
    scale: {
      width: 1280,
      height: 768,
      autoCenter: Phaser.Scale.CENTER_BOTH,
      mode: Phaser.Scale.FIT,
    },
    backgroundColor: 0x000000,
    scene: [StartScene, GameScene, GameOverScene],
    pixelArt: true,
    physics: {
      default: "arcade",
      arcade: {
        debug: false
      }
    }
  }

  if (game) game.destroy(true);
  game = new Phaser.Game(config);

};

export default GamePage;


