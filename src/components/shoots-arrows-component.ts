import { SpriteComponent } from './sprite-component';
import { PhiniteStateMachineComponent } from './phinite-state-machine-component';
import { BaseScene } from '../scenes/base-scene';
import { PhysicsBodyComponent } from './physics-body-component';

const ARROW_POOL_COUNT = 3;

export class ShootsArrowsComponent implements Phecs.Component {
  public shotPower: number;
  public shotChargeRate: number;

  private minShotPower: number;
  private maxShotPower: number;
  private arrows: Phecs.Entity[];
  private entity: Phecs.Entity;

  constructor(scene: Phaser.Scene, data: Phecs.EntityData, entity: Phecs.Entity) {
    const baseScene = scene as BaseScene;
    this.entity = entity;

    this.minShotPower = 300;
    this.maxShotPower = 700;
    this.shotChargeRate = 15;
    this.shotPower = this.minShotPower;

    this.arrows = [];
    for (let i = 0; i < ARROW_POOL_COUNT; i++) {
      const arrow = baseScene.phecs.phEntities.createPrefab('arrow', {}, entity.getComponent(SpriteComponent).sprite.depth, 0, 0);
      arrow.getComponent(PhiniteStateMachineComponent).phiniteStateMachine.doTransition({ to: 'arrow-disabled' });
      this.arrows.push(arrow);
    }
  }

  shootArrow() {
    const availableArrow = this.getAvailableArrow();

    availableArrow.getComponent(SpriteComponent).sprite.x = this.entity.getComponent(SpriteComponent).sprite.x;
    availableArrow.getComponent(SpriteComponent).sprite.y = this.entity.getComponent(SpriteComponent).sprite.y;

    availableArrow.getComponent(PhiniteStateMachineComponent).phiniteStateMachine.doTransition({ to: 'arrow-flying' });

    let power = Phaser.Math.Clamp(this.shotPower, this.minShotPower, this.maxShotPower);
    if (this.entity.getComponent(SpriteComponent).sprite.flipX) {
      power *= -1;
    }

    availableArrow.getComponent(PhysicsBodyComponent).body.setVelocity(power, 0);
    availableArrow.getComponent(PhysicsBodyComponent).body.setGravityY(-500); // entity gravity = world gravity + this

    this.shotPower = this.minShotPower;
  }

  private getAvailableArrow() {
    const disabledArrows = this.arrows
      .filter(arrow => arrow.getComponent(PhiniteStateMachineComponent).phiniteStateMachine.currentState.id === 'arrow-disabled');
    const hitArrows = this.arrows
      .filter(arrow => arrow.getComponent(PhiniteStateMachineComponent).phiniteStateMachine.currentState.id === 'arrow-hit')

    if (disabledArrows.length) {
      return disabledArrows[0];
    } else if (hitArrows.length) {
      return hitArrows[0];
    } else {
      throw new Error('ShootsArrows::shootArrow::NO_AVAILABLE_ARROWS')
    }
  }

  destroy() {
    this.arrows = [];
  }
}
