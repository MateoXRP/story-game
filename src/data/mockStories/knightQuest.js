export default function getKnightQuestStory() {
  return [
    {
      phase: 1,
      text: "The knight awakens to smoke and screams. The village is under attack by shadow beasts...",
      choices: [
        { id: 'A', text: 'Ride into the forest to investigate.' },
        { id: 'B', text: 'Stay and fight the beasts directly.' }
      ],
      correctChoice: 'A'
    },
    {
      phase: 2,
      text: "Deeper in the woods, the knight finds a wounded traveler...",
      choices: [
        { id: 'A', text: 'Help the traveler and follow his directions to the cave.' },
        { id: 'B', text: 'Ignore him and follow the whispers.' }
      ],
      correctChoice: 'A'
    },
    {
      phase: 3,
      text: "Within the dark cave lies an ancient altar...",
      choices: [
        { id: 'A', text: 'Take the glowing sword.' },
        { id: 'B', text: 'Open the locked chest.' }
      ],
      correctChoice: 'B'
    },
    {
      phase: 4,
      text: "The knight arrives at a desolate tower surrounded by magical fog...",
      choices: [
        { id: 'A', text: 'Climb the rope ladder.' },
        { id: 'B', text: 'Enter through the arcane door.' }
      ],
      correctChoice: 'A'
    },
    {
      phase: 5,
      text: "Atop the tower, the knight faces the sorcerer...",
      choices: [
        { id: 'A', text: 'Charge the sorcerer with weapon drawn.' },
        { id: 'B', text: 'Grab the spellbook and disrupt the chant.' }
      ],
      correctChoice: 'B'
    }
  ];
}

