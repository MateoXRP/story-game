// src/utils/staticStoryMap.js
import getKnightQuestStory from '../data/mockStories/knightQuest';
import getCrimeNoirStory from '../data/mockStories/crimeNoir';
import getSciFiAdventureStory from '../data/mockStories/sciFiAdventure';
import getTimeTravelStory from '../data/mockStories/timeTravel';
import getSpyHunterStory from '../data/mockStories/spyHunter';
import getMysticAdventureStory from '../data/mockStories/mysticAdventure';
import getWildWestStory from '../data/mockStories/wildWest';
import getKungFuShowdownStory from '../data/mockStories/kungFuShowdown';
import getHauntedHouseStory from '../data/mockStories/hauntedHouse';
import getRomComStory from '../data/mockStories/romCom'; // ✅ New

const staticStoryMap = {
  'Knight Quest': getKnightQuestStory,
  'Crime Noir': getCrimeNoirStory,
  'Sci-Fi Adventure': getSciFiAdventureStory,
  'Time Travel': getTimeTravelStory,
  'Spy Hunter': getSpyHunterStory,
  'Mystic Adventure': getMysticAdventureStory,
  'Wild West': getWildWestStory,
  'Kung Fu Showdown': getKungFuShowdownStory,
  'Haunted House': getHauntedHouseStory,
  'Rom Com': getRomComStory, // ✅ Added
};

export default staticStoryMap;
