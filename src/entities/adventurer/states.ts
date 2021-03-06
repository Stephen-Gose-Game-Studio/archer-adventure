import { adventurerStand } from './states/stand';
import { adventurerStandDraw } from './states/stand-draw';
import { adventurerStandHold } from './states/stand-hold';
import { adventurerStandShoot } from './states/stand-shoot';
import { adventurerRoll } from './states/roll';
import { adventurerJumpPrep } from './states/jump-prep';
import { adventurerJump} from './states/jump';
import { adventurerJumpLeft } from './states/jump-left';
import { adventurerJumpRight } from './states/jump-right';
import { adventurerFall } from './states/fall';
import { adventurerFallLeft } from './states/fall-left';
import { adventurerFallRight } from './states/fall-right';
import { adventurerAirDraw } from './states/air-draw';
import { adventurerAirHold } from './states/air-hold';
import { adventurerAirShoot } from './states/air-shoot';
import { adventurerCrouch } from './states/crouch';
import { adventurerRun } from './states/run';

export const adventurerStates: PhiniteStateMachine.States.State<Phecs.Entity>[] = [
  adventurerStand,
  adventurerStandDraw,
  adventurerStandHold,
  adventurerStandShoot,

  adventurerCrouch,

  adventurerRun,

  adventurerRoll,

  adventurerJumpPrep,
  adventurerJump,
  adventurerJumpLeft,
  adventurerJumpRight,

  adventurerFall,
  adventurerFallLeft,
  adventurerFallRight,

  adventurerAirDraw,
  adventurerAirHold,
  adventurerAirShoot,
];
