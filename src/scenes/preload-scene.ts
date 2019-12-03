export class PreloadScene extends Phaser.Scene {
  constructor() {
    super({ key: 'preload' });
  }

  preload() {
    // fonts
    this.load.bitmapFont('compass-72', '/assets/fonts/compass-72.png', '/assets/fonts/compass-72.xml');
    this.load.bitmapFont('compass-24', '/assets/fonts/compass-24.png', '/assets/fonts/compass-24.xml');
    this.load.bitmapFont('compass-18', '/assets/fonts/compass-18.png', '/assets/fonts/compass-18.xml');

    // adventurer
    this.load.spritesheet('adventurer-core', '/assets/sprites/adventurer/adventurer-core.png', { frameWidth: 100, frameHeight: 74 })
    this.load.spritesheet('adventurer-bow', '/assets/sprites/adventurer/adventurer-bow.png', { frameWidth: 100, frameHeight: 74 })

    this.load.animation('adventurer-animations', '/assets/animations/adventurer.json');
    this.load.json('adventurer-hurtboxes', '/assets/hurtboxes/adventurer.json');
    this.load.json('adventurer-bounds', '/assets/bounds/adventurer.json');

    // arrow
    this.load.image('arrow', '/assets/sprites/projectiles/arrow.png');
    this.load.json('arrow-bounds', '/assets/bounds/arrow.json');
    this.load.json('arrow-hitboxes', '/assets/hitboxes/arrow.json');

    // sheep
    this.load.spritesheet('sheep-walk', '/assets/sprites/sheep/sheep-walk.png', { frameWidth: 40, frameHeight: 34 });
    this.load.animation('sheep-animations', '/assets/animations/sheep.json');

    // enemy
    this.load.spritesheet('enemy', '/assets/sprites/enemy/enemy.png', { frameWidth: 32, frameHeight: 32 });
    this.load.animation('enemy-animations', '/assets/animations/enemy.json');
    this.load.json('enemy-hurtboxes', '/assets/hurtboxes/enemy.json');

    // indicators
    this.load.spritesheet('indicator-down', '/assets/sprites/indicators/indicator-down.png', { frameWidth: 32, frameHeight: 32 })
    this.load.animation('indicator-animations', '/assets/animations/indicators.json');

    // doors
    this.load.spritesheet('doors', '/assets/sprites/doors/doors.png', { frameWidth: 64, frameHeight: 82 })

    // tileset image
    this.load.spritesheet('core-tileset-spritesheet', '/assets/tilesets/core-tileset.png', { frameHeight: 32, frameWidth: 32 });

    // tileset
    this.load.image('core-tileset', '/assets/tilesets/core-tileset.png');

    // tilemap
    this.load.tilemapTiledJSON('woollards-farm', '/assets/tilemaps/woollards-farm.json')
    this.load.tilemapTiledJSON('woollards-house', '/assets/tilemaps/woollards-house.json')

    // conversations
    this.load.image('textbox', '/assets/sprites/conversations/textbox.png');
    this.load.json('signs', '/assets/signs.json');
  }

  create() {
    this.scene.start('exploration', { areaKey: 'woollards-farm' });
    // this.scene.start('prefabTest');
  }
}
