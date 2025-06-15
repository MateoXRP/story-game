// src/data/mockStories/mysticAdventure.js
export default function getMysticAdventureStory() {
  return {
    phases: [
      {
        phase: 1,
        text: '🏜️ You arrive in the Sahara Desert chasing whispers of an ancient temple buried in the dunes. 🐫 The sun beats down mercilessly.',
        choices: [
          { id: 'A', text: '📍 Follow the map etched in stone you found in Cairo.' },
          { id: 'B', text: '🧭 Trust your gut and head east toward the rising sun.' },
        ],
        correctChoice: 'A',
      },
      {
        phase: 2,
        text: '🏺 Inside the temple, a winding corridor leads to a chamber of traps. 🐍 You hear a hiss from deeper within.',
        choices: [
          { id: 'A', text: '🪤 Disable the traps carefully.' },
          { id: 'B', text: '🏃 Rush through before the traps trigger.' },
        ],
        correctChoice: 'A',
      },
      {
        phase: 3,
        text: '🌪️ A sandstorm strands you in a Bedouin village. An elder offers help in exchange for retrieving a sacred relic stolen from them.',
        choices: [
          { id: 'A', text: '🧓 Accept the side quest and recover the relic.' },
          { id: 'B', text: '😤 Refuse and press forward to your main goal.' },
        ],
        correctChoice: 'A',
      },
      {
        phase: 4,
        text: '🛕 With the elder’s blessing, you find an ancient gateway in the Himalayas. The portal pulses with mystical energy.',
        choices: [
          { id: 'A', text: '🔑 Use the relic to unlock the portal.' },
          { id: 'B', text: '💣 Blast the seal open with explosives.' },
        ],
        correctChoice: 'A',
      },
      {
        phase: 5,
        text: '🐉 Beyond the gate lies a glowing chamber. A massive dragon statue guards the treasure — its eyes begin to glow.',
        choices: [
          { id: 'A', text: '🗿 Place the relic on the altar as an offering.' },
          { id: 'B', text: '🏹 Draw your weapon and take the treasure by force.' },
        ],
        correctChoice: 'A',
      },
    ],
    endings: {
      win: '🎉 You honored ancient customs and earned the treasure’s blessing. History will remember your legendary journey. 🧭',
      losses: {
        1: {
          B: '🌵 Your intuition failed you. You wandered in circles until dehydration claimed your strength.',
        },
        2: {
          B: '💀 You ran headlong into a spear trap. Sometimes haste is the deadliest decision.',
        },
        3: {
          B: '🌫️ The villagers refused shelter. Caught in the storm, you lost your path and your chance.',
        },
        4: {
          B: '💥 The explosion angered ancient forces. The portal collapsed, burying you in the ice.',
        },
        5: {
          B: '🔥 You fired — the statue came alive. Flames consumed the chamber and your ambition.',
        },
      },
    },
  };
}

