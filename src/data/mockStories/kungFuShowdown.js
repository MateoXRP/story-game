// src/data/mockStories/kungFuShowdown.js
export default function getKungFuShowdownStory() {
  return {
    phases: [
      {
        phase: 1,
        text: '🥋 You emerge from the dojo gates after years of training. A masked ninja ambushes with a scroll marked “Red Dragon Clan.” 🐉',
        choices: [
          { id: 'A', text: '🥷 Fight the ninja to retrieve the scroll.' },
          { id: 'B', text: '🚪 Retreat back inside to alert your master.' },
        ],
        correctChoice: 'A',
      },
      {
        phase: 2,
        text: '🍣 The scroll leads you to a sushi restaurant owned by the Yakuza. An assassin awaits near the koi pond. 💀',
        choices: [
          { id: 'A', text: '🍵 Pretend to dine and observe the surroundings.' },
          { id: 'B', text: '⚔️ Confront the assassin directly.' },
        ],
        correctChoice: 'A',
      },
      {
        phase: 3,
        text: '🕹️ Your search takes you to an underground arcade. Graffiti glows under neon lights. A gang of thugs blocks the back room.',
        choices: [
          { id: 'A', text: '💥 Fight through the gang to reach the back.' },
          { id: 'B', text: '🕵️ Look for a secret entrance around the side.' },
        ],
        correctChoice: 'B',
      },
      {
        phase: 4,
        text: '🏮 Inside, you discover a weapons cache—and your old rival from the Shaolin tournament. His katana gleams. 🗡️',
        choices: [
          { id: 'A', text: '🧘 Try to reason with him.' },
          { id: 'B', text: '🥋 Accept his silent challenge and fight.' },
        ],
        correctChoice: 'B',
      },
      {
        phase: 5,
        text: '🕌 You arrive at the Red Dragon’s rooftop lair. The clan leader stands beneath the full moon. A final duel begins. 🌕',
        choices: [
          { id: 'A', text: '🌬️ Use your speed and agility to overwhelm him.' },
          { id: 'B', text: '💣 Attack with brute strength and power.' },
        ],
        correctChoice: 'A',
      },
    ],
    endings: {
      win: '🏆 Your discipline and mastery have brought peace to the streets. The Red Dragon Clan is no more. You return to the dojo a hero. 🙇‍♂️',
      losses: {
        1: {
          B: '🛑 You hesitated. The ninja vanished into the night with the scroll. Your master was disappointed.',
        },
        2: {
          B: '🔪 The assassin was prepared. Your direct approach triggered a trap, and you were swiftly defeated.',
        },
        3: {
          A: '👊 You fought bravely, but the gang overwhelmed you. You never reached the back room.',
        },
        4: {
          A: '☯️ Your rival saw your hesitation as weakness. With a single strike, he ended the fight—and your journey.',
        },
        5: {
          B: '💢 Brute strength alone wasn’t enough. The clan leader outmaneuvered you with deadly precision.',
        },
      },
    },
  };
}
