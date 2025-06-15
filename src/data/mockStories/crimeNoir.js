// src/data/mockStories/crimeNoir.js
export default function getCrimeNoirStory() {
  return {
    phases: [
      {
        phase: 1,
        text: '🕰️ The phone rings just past midnight. A smoky voice tells you a girl is missing and the cops are paid to look the other way. 🥃 Your office reeks of stale whiskey and regret.',
        choices: [
          { id: 'A', text: '🕵️‍♂️ Take the case and head to the crime scene.' },
          { id: 'B', text: '🍷 Hang up and pour another drink.' },
        ],
        correctChoice: 'A',
      },
      {
        phase: 2,
        text: '👠 You arrive at the alley where the girl was last seen. A bloodied high heel lies near a dumpster. 🍺 A drunk slumps nearby muttering about "silver Cadillacs."',
        choices: [
          { id: 'A', text: '🍻 Question the drunk for leads.' },
          { id: 'B', text: '📞 Call the coroner to collect evidence.' },
        ],
        correctChoice: 'A',
      },
      {
        phase: 3,
        text: '🎷 The trail leads to a smoky jazz club where shady deals and silk dresses swirl. The saxophonist pauses when you enter. 🍸 The bartender gives you a nervous look.',
        choices: [
          { id: 'A', text: '🚔 Flash your badge and question the bartender.' },
          { id: 'B', text: '🕶️ Blend in and wait to observe.' },
        ],
        correctChoice: 'B',
      },
      {
        phase: 4,
        text: '🏚️ The bartender’s whispered tip takes you to a warehouse by the docks. The scent of oil and betrayal hangs heavy. 💪 Two thugs block the entrance.',
        choices: [
          { id: 'A', text: '🕳️ Sneak in through a side door.' },
          { id: 'B', text: '👊 Confront the thugs head-on.' },
        ],
        correctChoice: 'A',
      },
      {
        phase: 5,
        text: '🔫 Inside, you find the girl—alive, tied up. The man behind it all steps from the shadows: your old partner, presumed dead. He draws a gun.',
        choices: [
          { id: 'A', text: '🗣️ Try to talk him down.' },
          { id: 'B', text: '🔥 Pull your weapon and shoot.' },
        ],
        correctChoice: 'B',
      },
    ],
    endings: {
      win: '✅ You cracked the case and saved the girl. Justice—your way—prevails. 🕵️‍♀️',
      losses: {
        1: {
          B: '🥴 You chose the bottle over the case. By morning, the trail was gone—and so was the girl.',
        },
        2: {
          B: '🕳️ While you waited for the coroner, the drunk vanished. So did your only lead.',
        },
        3: {
          A: '🚨 The bartender clammed up the moment you flashed your badge. You scared off your best shot at the truth.',
        },
        4: {
          B: '💥 You took the direct approach. The thugs didn’t flinch. A bullet to the gut ended your investigation.',
        },
        5: {
          A: '🔫 You hesitated, hoping for redemption. Your old partner didn’t. The last thing you heard was the click of his gun.',
        },
      },
    },
  };
}
