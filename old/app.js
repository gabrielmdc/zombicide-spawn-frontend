// import necromancerData from './necromancer-data.js';
// import doubleSpawnData from './double-spawn-data.js';
// import activationData from './activation-data.js';
// import sziData from './szi-spawn-data.js';

const Zombie = {
    Fatty: 'fatty',
    Runner: 'runner',
    Walker: 'walker',
    Abomination: 'abomination'
}

const CardType = {
    Szi: {
        title: "Standard Zombies Invasion",
        description: ""
    },
    DoubleSpawn: {
        title: "Double Spawn",
        description: "Don't Spawn Zombies here. Spawn two Zombie cards on the next zone"
    },
    Necromancer: {
        title: "Necromancer",
        description: "Spawn a Necromancer (with it's Necromancer Spawn Zone). All Necromancers already on the board gain an Extra Activation"
    },
    Activation: {
        title: "Activation",
        description: ""
    }
}

const Activations = {
    ... Zombie,
    None: 'None'
}

// const sziData = require('./szi-data.js');
// const doubleSpawnData = require('./double-spawn-data.js');
// const activationData = require('./activation-data.js');
// const necromancerData = require('./necromancer-data.js');

const pile = [
    ...sziData,
    ...doubleSpawnData,
    ...activationData,
    ...necromancerData
];

let playPile = [];

function getRandomIndex(pile) {
    return Math.floor(Math.random() * pile.length);
  }

function getRandomCard() {
    if (!playPile.length) {
        playPile = [...pile];
    }
    const randomIndex = getRandomIndex(playPile);
    const card = playPile.splice(randomIndex, 1)[0];
    return card;
}
