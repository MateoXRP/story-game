// src/data/mockStories/timeTravel.js
export default function getTimeTravelStory() {
  return {
    phases: [
      {
        phase: 1,
        text: 'You activate the time machine and land amidst the chaos of the Boston Tea Party. Redcoats shout as crates crash into the harbor.',
        choices: [
          { id: 'A', text: 'Blend in with the rebels and toss a crate.' },
          { id: 'B', text: 'Hide and observe from a distance.' },
        ],
        correctChoice: 'A',
      },
      {
        phase: 2,
        text: 'A mysterious figure hands you a scroll containing strange equations and says, "You must deliver this to Franklin."',
        choices: [
          { id: 'A', text: 'Find Franklin immediately.' },
          { id: 'B', text: 'Study the scroll yourself.' },
        ],
        correctChoice: 'A',
      },
      {
        phase: 3,
        text: 'Franklin adjusts his spectacles, looks at the scroll, and asks, "Where... or *when* are you from?"',
        choices: [
          { id: 'A', text: 'Tell him the truth.' },
          { id: 'B', text: 'Lie and say you’re from the colonies.' },
        ],
        correctChoice: 'A',
      },
      {
        phase: 4,
        text: 'Together, you decipher the scroll. It reveals coordinates to a hidden time portal inside Independence Hall.',
        choices: [
          { id: 'A', text: 'Sneak in during the Continental Congress.' },
          { id: 'B', text: 'Wait until nightfall.' },
        ],
        correctChoice: 'B',
      },
      {
        phase: 5,
        text: 'At midnight, the stars align and the portal opens. But British troops are closing in fast.',
        choices: [
          { id: 'A', text: 'Jump through the portal immediately.' },
          { id: 'B', text: 'Fight off the troops first.' },
        ],
        correctChoice: 'A',
      },
    ],
    endings: {
      win: "You've altered fate and returned home through the stream of time.",
      losses: {
        1: {
          B: 'You hesitated and watched. A Redcoat spotted your strange attire and history unraveled.',
        },
        2: {
          B: 'You opened the scroll. The unstable equations activated prematurely, rupturing the timeline.',
        },
        3: {
          B: 'Your lie didn’t hold. Franklin grew suspicious—and alerted the guard.',
        },
        4: {
          A: 'You interrupted a historic debate. Time guards arrested you for reckless interference.',
        },
        5: {
          B: 'You fought bravely, but a musket shot shattered the scroll—and your way home.',
        },
      },
    },
  };
}
