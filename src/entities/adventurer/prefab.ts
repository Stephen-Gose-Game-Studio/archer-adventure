export const adventurerPrefab = {
  name: 'adventurer',

  tags: "hasPhysicalSprite,hasHurtboxes,hasBounds,hasControls,hasInteractionCircle,sign-interactor,hasPhiniteStateMachine,doorInteractor,shootsArrows",

  boundsKey: "adventurer-bounds",

  texture: "adventurer-core",
  frame: 0,
  maxVelocityX: 350,

  hurtboxesDebug: false,
  hurtboxesKey: "adventurer-hurtboxes",

  interactionRadius: 30,

  stateSet: "adventurer",
  initialStateId: "adventurer-stand",
}
