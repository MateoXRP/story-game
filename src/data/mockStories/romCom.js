// src/data/mockStories/romCom.js
export default function getRomComStory() {
  return {
    phases: [
      {
        phase: 1,
        text: '💘 It’s the first day of senior year. You spot her by the lockers — denim jacket, Walkman, killer smile. You trip over a backpack. Classic. 🎒',
        choices: [
          { id: 'A', text: '🎮 Invite her to the arcade after school.' },
          { id: 'B', text: '📚 Pretend you didn’t see her and keep walking.' },
        ],
        correctChoice: 'A',
      },
      {
        phase: 2,
        text: '🕹️ At the arcade, she dominates Pac-Man while the jock crowd watches. A rebel in a leather jacket smirks nearby. 💋',
        choices: [
          { id: 'A', text: '🧃 Offer her a soda and cheer her on.' },
          { id: 'B', text: '😎 Challenge her to a high-score duel.' },
        ],
        correctChoice: 'A',
      },
      {
        phase: 3,
        text: '🎉 The weekend party is in full swing. Music’s loud, red solo cups everywhere. The cheerleader glares. The nerd offers you breath spray. 🥴',
        choices: [
          { id: 'A', text: '🪩 Ask her to dance — slow song or not.' },
          { id: 'B', text: '🏈 Try to impress her by throwing a perfect spiral.' },
        ],
        correctChoice: 'A',
      },
      {
        phase: 4,
        text: '📼 Monday morning. Word is, she’s going to prom with the rebel. You overhear her say, “I just want someone real.”',
        choices: [
          { id: 'A', text: '📝 Slip a heartfelt note into her locker.' },
          { id: 'B', text: '🎸 Learn a guitar riff to play in the cafeteria.' },
        ],
        correctChoice: 'A',
      },
      {
        phase: 5,
        text: '🎀 Prom night. Lights are low. The DJ plays a slow song. You see her across the room — alone. Your chest tightens. This is it.',
        choices: [
          { id: 'A', text: '🕺 Walk up and ask her to dance.' },
          { id: 'B', text: '🍕 Wait by the snack table and hope she notices you.' },
        ],
        correctChoice: 'A',
      },
    ],
    endings: {
      win: '💃 You danced under the disco ball like it was the final scene of an 80s movie. Her head on your shoulder. Fade to black. 🎶',
      losses: {
        1: {
          B: '📼 You kept walking. Later, you saw her ride off with the rebel — your chance missed like a dropped mixtape.',
        },
        2: {
          B: '👾 She beat you and walked away laughing — but not in the good way.',
        },
        3: {
          B: '🏈 Your throw hit the punch bowl. The crowd gasped. The nerd cringed. Oof.',
        },
        4: {
          B: '🎸 The cafeteria gig bombed. A food fight started. She never even saw you.',
        },
        5: {
          B: '🍕 You waited too long. She danced with the rebel. You stood there holding ranch dip and regret.',
        },
      },
    },
  };
}

