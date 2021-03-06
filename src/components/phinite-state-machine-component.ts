import { PhiniteStateMachine } from '../lib/phinite-state-machine/phinite-state-machine';
import { TransitionType } from '../lib/phinite-state-machine/transition-type';
import { StateRegistrar } from '../registrars/state-registrar';

export class PhiniteStateMachineComponent implements Phecs.Component {
  public phiniteStateMachine: PhiniteStateMachine<Phecs.Entity>;

  constructor(scene: Phaser.Scene, data: Phecs.EntityData, entity: Phecs.Entity) {
    const states = StateRegistrar.getSet(data.stateSet);
    const initialState = StateRegistrar.getState(data.initialStateId);

    this.phiniteStateMachine = new PhiniteStateMachine<Phecs.Entity>(scene, entity, states, initialState);

    if (data.phiniteStateMachineDisabled) {
      this.phiniteStateMachine.disable();
    } else {
      this.phiniteStateMachine.doTransition({
        type: TransitionType.Initial,
        to: initialState.id,
      });
    }
  }

  destroy() {
    this.phiniteStateMachine.destroy();

    delete this.phiniteStateMachine;
  }
}
