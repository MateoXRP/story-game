// src/data/mockStories/hauntedHouse.js
export default function getHauntedHouseStory() {
  return {
    phases: [
      {
        phase: 1,
        text: '🏚️ The mansion gates creak open as you step into the overgrown yard. A whisper rides the wind: “Turn back...” 🌫️',
        choices: [
          { id: 'A', text: '🕯️ Light your lantern and enter the front door.' },
          { id: 'B', text: '🪦 Explore the graveyard behind the house first.' },
        ],
        correctChoice: 'A',
      },
      {
        phase: 2,
        text: '🪞 Inside, a dusty mirror reflects a version of you that doesn’t move in sync. Suddenly, the door slams shut. 👻',
        choices: [
          { id: 'A', text: '🔍 Examine the mirror more closely.' },
          { id: 'B', text: '🚪 Try to find another exit.' },
        ],
        correctChoice: 'A',
      },
      {
        phase: 3,
        text: '🧟‍♂️ A zombie lunges from the hallway shadows. You spot an iron candelabra and a dusty book of spells nearby. 📖',
        choices: [
          { id: 'A', text: '🪓 Grab the candelabra and fight.' },
          { id: 'B', text: '📖 Recite a spell from the book.' },
        ],
        correctChoice: 'B',
      },
      {
        phase: 4,
        text: '🦇 In the attic, a vampire guards a glowing crystal orb. He snarls, “Only the brave may claim the soulstone.”',
        choices: [
          { id: 'A', text: '💉 Offer your blood in exchange.' },
          { id: 'B', text: '🧄 Reveal a clove of garlic from your bag.' },
        ],
        correctChoice: 'B',
      },
      {
        phase: 5,
        text: '🧙‍♀️ The witch appears in a swirl of smoke, laughing. “Pass one last trial, or be cursed forever!” A circle of runes burns around you. 🔥',
        choices: [
          { id: 'A', text: '🪄 Cast a protective charm using the soulstone.' },
          { id: 'B', text: '🏃 Break the circle and run for it.' },
        ],
        correctChoice: 'A',
      },
    ],
    endings: {
      win: '🎉 The curse is broken! You emerge from the haunted house into dawn’s light, soulstone in hand. Peace returns... for now. 🌄',
      losses: {
        1: {
          B: '🪦 You wandered into the graveyard. A hand reached from the dirt and pulled you under.',
        },
        2: {
          B: '🚪 The exit led to a staircase that collapsed beneath you—straight into darkness.',
        },
        3: {
          A: '🧟‍♂️ You swung wildly, but the zombie overwhelmed you before help arrived.',
        },
        4: {
          A: '🩸 You offered blood, but it wasn’t enough. The vampire drank deeply and vanished.',
        },
        5: {
          B: '🔥 You broke the circle—just as the curse latched onto your soul. You’re part of the house now.',
        },
      },
    },
  };
}

