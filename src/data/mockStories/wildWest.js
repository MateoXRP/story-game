// src/data/mockStories/wildWest.js
export default function getWildWestStory() {
  return {
    phases: [
      {
        phase: 1,
        text: '🌵 The dusty town of Deadwood Creek is tense. The sheriff’s been shot, and the outlaw gang rides in by sundown. 🔫',
        choices: [
          { id: 'A', text: '🤠 Step up and wear the sheriff’s badge.' },
          { id: 'B', text: '🐎 Skip town before the gang arrives.' },
        ],
        correctChoice: 'A',
      },
      {
        phase: 2,
        text: '🏜️ A saloon girl whispers of a secret plan—robbery at the stagecoach depot. You hear hoofbeats in the distance. 🐴',
        choices: [
          { id: 'A', text: '👢 Head to the saloon and gather intel.' },
          { id: 'B', text: '🚂 Go to the train station and prepare an ambush.' },
        ],
        correctChoice: 'A',
      },
      {
        phase: 3,
        text: '💃 In the saloon, a poker game masks secrets. A wanted poster flutters in the breeze. One of the players is the gang’s scout. 🃏',
        choices: [
          { id: 'A', text: '🕵️ Call out the scout publicly.' },
          { id: 'B', text: '🫣 Signal the deputy and watch quietly.' },
        ],
        correctChoice: 'B',
      },
      {
        phase: 4,
        text: '🚨 The scout bolts. You chase him through the dusty streets. The townsfolk scatter as gunfire erupts. 💥',
        choices: [
          { id: 'A', text: '🎯 Take a careful shot from behind cover.' },
          { id: 'B', text: '🏃 Chase him down on foot.' },
        ],
        correctChoice: 'A',
      },
      {
        phase: 5,
        text: '🏇 With the scout captured, the outlaw gang confronts you at high noon in the town square. Tension crackles in the heat. ☀️',
        choices: [
          { id: 'A', text: '⚔️ Duel the gang leader one-on-one.' },
          { id: 'B', text: '🪤 Set a trap using the captured scout as bait.' },
        ],
        correctChoice: 'B',
      },
    ],
    endings: {
      win: '🎉 With the gang captured and peace restored, the town hails you as the new sheriff of Deadwood Creek. 🤠',
      losses: {
        1: {
          B: '🚷 You rode out of town, and so did justice. The gang took over without a fight.',
        },
        2: {
          B: '🕳️ You waited at the wrong place. The stagecoach was hit and the town lost its gold.',
        },
        3: {
          A: '🎲 Calling him out led to a shootout. Innocents were hurt, and the gang scattered.',
        },
        4: {
          B: '🤕 You chased him into an alley and got ambushed. The gang was warned.',
        },
        5: {
          A: '💀 The duel was quick—and fatal. The gang leader didn’t miss.',
        },
      },
    },
  };
}

