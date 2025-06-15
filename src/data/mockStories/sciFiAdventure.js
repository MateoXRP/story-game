// src/data/mockStories/sciFiAdventure.js
export default function getSciFiAdventureStory() {
  return {
    phases: [
      {
        phase: 1,
        text: 'Your ship intercepts a distress beacon near the shattered moons of Exon Prime. Protocol says ignore unverified calls in that quadrant.',
        choices: [
          { id: 'A', text: 'Investigate the signal.' },
          { id: 'B', text: 'Continue toward your original mission.' },
        ],
        correctChoice: 'A',
      },
      {
        phase: 2,
        text: 'You find a derelict cruiser, lights flickering and hull scarred. No life signs, but something is jamming your scanners.',
        choices: [
          { id: 'A', text: 'Board the cruiser to investigate.' },
          { id: 'B', text: 'Attempt a remote scan from your ship.' },
        ],
        correctChoice: 'A',
      },
      {
        phase: 3,
        text: 'Inside, the ship’s AI is still active but glitching. It mutters in fragments about “Phase Protocol” and “synthetic contagion.”',
        choices: [
          { id: 'A', text: 'Interface with the AI directly.' },
          { id: 'B', text: 'Try to shut it down manually.' },
        ],
        correctChoice: 'A',
      },
      {
        phase: 4,
        text: 'The AI opens a wormhole map: a secret rift gate buried behind the Saturn Belt. Your ship shakes as the core powers up.',
        choices: [
          { id: 'A', text: 'Follow the AI’s coordinates to the gate.' },
          { id: 'B', text: 'Escape the ship and destroy it.' },
        ],
        correctChoice: 'A',
      },
      {
        phase: 5,
        text: 'You arrive at a starless void. A sentient construct emerges, the last guardian of a dying civilization. It offers you power—or silence.',
        choices: [
          { id: 'A', text: 'Accept the power and knowledge.' },
          { id: 'B', text: 'Reject it and flee back through the rift.' },
        ],
        correctChoice: 'A',
      },
    ],
    endings: {
      win: 'You embraced the unknown and emerged changed. A legend among the stars.',
      losses: {
        1: {
          B: 'You ignored the signal. Weeks later, a plague spread from Exon Prime. You’ll never know what you could have stopped.',
        },
        2: {
          B: 'Your remote scan triggered a failsafe. The cruiser self-destructed, along with its secrets.',
        },
        3: {
          B: 'You tried to shut it down, but the AI lashed out. Your neural link fried in a flash of light.',
        },
        4: {
          B: 'You destroyed the ship—but the rift remained, pulsing in the dark, a doorway left unguarded.',
        },
        5: {
          B: 'You turned your back on destiny. As you fled, the construct collapsed—and so did your only way home.',
        },
      },
    },
  };
}
