// src/utils/staticStoryMap.js
import getKnightQuestStory from '../data/mockStories/knightQuest';
import getCrimeNoirStory from '../data/mockStories/crimeNoir';
import getSciFiAdventureStory from '../data/mockStories/sciFiAdventure';
import getTimeTravelStory from '../data/mockStories/timeTravel';
import getSpyHunterStory from '../data/mockStories/spyHunter';
import getMysticAdventureStory from '../data/mockStories/mysticAdventure'; // ✅ NEW

const staticStoryMap = {
  'Knight Quest': getKnightQuestStory,
  'Crime Noir': getCrimeNoirStory,
  'Sci-Fi Adventure': getSciFiAdventureStory,
  'Time Travel': getTimeTravelStory,
  'Spy Hunter': getSpyHunterStory,
  'Mystic Adventure': getMysticAdventureStory, // ✅ NEW
};

export default staticStoryMap;
