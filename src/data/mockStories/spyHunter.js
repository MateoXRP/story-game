// src/data/mockStories/spyHunter.js
export default function getSpyHunterStory() {
  return {
    phases: [
      {
        phase: 1,
        text: '🎯 You receive a mission briefing in a hidden MI6 bunker. Your target: a rogue agent with a stolen nuclear code hidden in Marrakesh. 🧳',
        choices: [
          { id: 'A', text: '✈️ Fly to Marrakesh immediately.' },
          { id: 'B', text: '🕶️ Delay departure to gather intel first.' },
        ],
        correctChoice: 'A',
      },
      {
        phase: 2,
        text: '🏙️ In Marrakesh, you tail the rogue agent through a bustling market. 🐪 A contact brushes past, slipping you a flash drive.',
        choices: [
          { id: 'A', text: '💻 Find a secure spot and decrypt the drive.' },
          { id: 'B', text: '🔫 Confront the rogue agent directly.' },
        ],
        correctChoice: 'A',
      },
      {
        phase: 3,
        text: '💾 The drive reveals a secret auction for the nuclear code at a luxury casino that night. 🎰 Only VIPs allowed.',
        choices: [
          { id: 'A', text: '🃏 Bluff your way in as a high roller.' },
          { id: 'B', text: '🧗 Infiltrate through the rooftop vents.' },
        ],
        correctChoice: 'B',
      },
      {
        phase: 4,
        text: '🎲 Inside, you spot the rogue agent passing the code to an arms dealer. Guards are everywhere.',
        choices: [
          { id: 'A', text: '📸 Snap a photo and call for backup.' },
          { id: 'B', text: '🎭 Pose as a buyer and intercept the deal.' },
        ],
        correctChoice: 'B',
      },
      {
        phase: 5,
        text: '💣 You recover the code, but the dealer triggers a self-destruct countdown. 🔥 Sirens blare.',
        choices: [
          { id: 'A', text: '🏃 Escape through the underground tunnel.' },
          { id: 'B', text: '🧯 Try to disable the bomb on-site.' },
        ],
        correctChoice: 'A',
      },
    ],
    endings: {
      win: '🎉 You escaped just in time and saved millions. The world doesn’t know your name—but it owes you everything. 🕵️‍♂️',
      losses: {
        1: {
          B: '🛑 While you waited, the agent vanished with the code. Mission failed.',
        },
        2: {
          B: '🩸 The agent anticipated your move. You were ambushed in the alley.',
        },
        3: {
          A: '🚫 Your bluff failed. Security escorted you out before the auction began.',
        },
        4: {
          A: '📡 Your call was traced. The dealer slipped away in the chaos.',
        },
        5: {
          B: '💥 You couldn’t disarm it in time. The casino—and the code—were lost.',
        },
      },
    },
  };
}

