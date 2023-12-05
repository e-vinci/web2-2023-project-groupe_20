import Phaser from "phaser";

import menuBG from "../../../assets/menuBG.png"
import towerDefenseMap from "../../../assets/TowerDefenseMap.png"

import goblinSprite from "../../../assets/spriteSheets/S_Goblin_walk.png"
import wolfSprite from "../../../assets/spriteSheets/S_Wolf.png"
import hobGoblinSprite from "../../../assets/spriteSheets/S_HobGoblin.png"

import towerSprite from "../../../assets/spriteSheets/tower.png"
import crossbowSprite from "../../../assets/spriteSheets/crossbow.png"
import arrowPng from "../../../assets/arrow.png"
import crossbowArrowSprite from "../../../assets/spriteSheets/crossbowArrow.png"
import arrowImpactSprite from "../../../assets/spriteSheets/arrowImpact.png"
import AOETower from "../../../assets/spriteSheets/slowingTower/AOETowerWeapon.png"
import AOETowerProjectile from "../../../assets/spriteSheets/slowingTower/AOETowerProjectile.png"
import AOETowerProjectileImpact from "../../../assets/spriteSheets/slowingTower/AOETowerProjectileImpact.png"

import pauseButtonSprite from "../../../assets/spriteSheets/UI/UIPauseButton.png"
import times2ButtonSprite from "../../../assets/spriteSheets/UI/UI2timeButton.png"
import soundButtonSprite from "../../../assets/spriteSheets/UI/UISoundButton.png"

import campFireSprite from "../../../assets/spriteSheets/campFire.png"
import baseFlagSprite from "../../../assets/spriteSheets/baseFlag.png"
import starPng from "../../../assets/star.png"
import campPng from "../../../assets/camp.png"
import goldCoin from "../../../assets/goldCoin.png"
import Heart from '../../../assets/Heart.png';

import mainMenuMusic from "../../../assets/audio/mainMusic.mp3"
import backTrackSound from "../../../assets/audio/backTrackSound.mp3"
import arrowSound from "../../../assets/audio/arrowSound.mp3"

class PreloadScene extends Phaser.Scene {
    constructor(){
        super("Preload")
    }

    preload(){

        const sizeMap = {
            width : 1280,
            height:768
        }

       // Dimensions de la barre de chargement
        const progressBarWidth = 400;
        const progressBarHeight = 50;

        // Position centrale
        const centerX = this.cameras.main.width / 2 - progressBarWidth / 2;
        const centerY = this.cameras.main.height / 2 - progressBarHeight / 2;

        // Créer la barre de chargement
        this.progressBar = this.add.graphics();

        // Mettre à jour la barre de chargement
        this.load.on('progress', (value) => {
            this.progressBar.clear();
            this.progressBar.fillStyle(0xffffff, 1);
            this.progressBar.fillRect(centerX, centerY, progressBarWidth * value, progressBarHeight);
        });


        this.load.image("base", campPng);
        this.load.image("gameMenu",menuBG);
        this.load.image("gameMap", towerDefenseMap);
        this.load.image("arrow", arrowPng);
        this.load.image("star", starPng);
        this.load.image("goldCoin",goldCoin);
        this.load.image("Heart",Heart);

        this.load.spritesheet("goblin", goblinSprite,{
            frameWidth: 48,
            frameHeight: 48
        });
        this.load.spritesheet("wolf", wolfSprite,{
            frameWidth: 48,
            frameHeight: 48
        });
        this.load.spritesheet("hobGoblin", hobGoblinSprite,{
            frameWidth: 48,
            frameHeight: 48
        });
        this.load.spritesheet("tower", towerSprite, {
            frameWidth: 70,
            frameHeight: 130
        });
        this.load.spritesheet("crossbow", crossbowSprite, {
            frameWidth: 96,
            frameHeight: 96
        }); 
        this.load.spritesheet("crossbowArrow", crossbowArrowSprite, {
            frameWidth: 8,
            frameHeight: 34
        }); 
        this.load.spritesheet("arrowImpact", arrowImpactSprite, {
            frameWidth: 64,
            frameHeight: 64
        }); 
        this.load.spritesheet("pauseButton", pauseButtonSprite, {
            frameWidth: 16,
            frameHeight: 16
        })
        this.load.spritesheet("times2Button", times2ButtonSprite, {
            frameWidth: 16,
            frameHeight: 16
        })
        this.load.spritesheet("menuSoundButton",soundButtonSprite,{
            frameWidth:16,
            frameHeight:17
        })
        this.load.spritesheet("baseFlag", baseFlagSprite, {
            frameWidth: 32,
            frameHeight: 64
        })
        this.load.spritesheet("campFire", campFireSprite, {
            frameWidth: 32,
            frameHeight: 32
        })
        
        this.load.spritesheet("AOETower",AOETower,{
            frameWidth:96,
            frameHeight:96
        })
        this.load.spritesheet("AOETowerProjectile", AOETowerProjectile, {
            frameWidth: 16,
            frameHeight: 16
        });
        this.load.spritesheet("AOETowerProjectileImpact", AOETowerProjectileImpact, {
            frameWidth: 64,
            frameHeight: 64
        }); 

        this.load.audio("mainMenuMusic",[mainMenuMusic])
        this.load.audio("backTrackSound",[backTrackSound])
        this.load.audio("arrowSound",[arrowSound])
    }

    create(){



        // Sprite's animations
        this.anims.create({
            key: "goblin_anim",
            frames: this.anims.generateFrameNames("goblin"),
            frameRate: 10,
            repeat: -1
        });

        this.anims.create({
            key: "wolf_anim",
            frames: this.anims.generateFrameNames("wolf"),
            frameRate: 20,
            repeat: -1
        });
        this.anims.create({
            key: "hobGoblin_anim",
            frames: this.anims.generateFrameNames("hobGoblin"),
            frameRate: 3,
            repeat: -1
        });

        this.anims.create({
            key: "tower_anim",
            frames: this.anims.generateFrameNames("tower"),
            frameRate: 10,
            repeat: -1
        });

        this.anims.create({
            key:"AOETower_anim",
            frames: this.anims.generateFrameNames("AOETower"),
            frameRate:25,
            repeat:-1
        })

        this.anims.create({
            key: "crossbow_anim",
            frames: this.anims.generateFrameNames("crossbow"),
            frameRate: 10,
            repeat: -1
        });

        this.anims.create({
            key: "AOETowerWeapon_anim",
            frames : this.anims.generateFrameNames("AOETowerWeapon"),
            framesRate:25,
            repeat:-1
        })

        this.anims.create({
            key: "crossbowArrow_anim",
            frames: this.anims.generateFrameNames("crossbowArrow"),
            frameRate: 10,
            repeat: -1
        });

        this.anims.create({
            key: "arrowImpact_anim",
            frames: this.anims.generateFrameNames("arrowImpact"),
            frameRate: 10,
            repeat: -1
        });
        this.anims.create({
            key: "AOETowerWeaponImpact_anim",
            frames: this.anims.generateFrameNames("AOETowerWeaponImpact"),
            frameRate: 25,
            repeat: -1
        });
        this.anims.create({
            key: "pauseButton_anim",
            frames: this.anims.generateFrameNames("pauseButton"),
            frameRate: 15,
            repeat: 0
        });
        this.anims.create({
            key: "times2Button_anim",
            frames: this.anims.generateFrameNames("times2Button"),
            frameRate: 15,
            repeat: 0
        });
        this.anims.create({
            key:"soundButton_anim",
            frame: this.anims.generateFrameNames("menuSoundButton"),
            frameRate:15,
            repeat:0
        })

        this.anims.create({
            key: "campFire_anim",
            frames: this.anims.generateFrameNames("campFire"),
            frameRate: 15,
            repeat: -1
        });

        this.anims.create({
            key: "baseFlag_anim",
            frames: this.anims.generateFrameNames("baseFlag"),
            frameRate: 15,
            repeat: -1
        });



         // Create continue Button
        const button = this.add.text(this.scale.width/2, this.scale.height/1.5, 'Continue',
            {
                fontFamily: 'Candara, Arial',
                fontSize: '48px',
                color: '#ffffff',
                fontStyle: 'bold'
                
            }
        ).setOrigin(0.5);
        button.setInteractive();
        button.on('pointerover', () => { button.setFontSize(60); });
        button.on('pointerout', () => { button.setFontSize(48); });
        button.on('pointerdown', () => {
            this.scene.start('bootgame');
        });
    }



}

export default PreloadScene;