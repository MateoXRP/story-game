// src/utils/staticStoryMap.js
import getKnightQuestStory from '../data/mockStories/knightQuest';
import getCrimeNoirStory from '../data/mockStories/crimeNoir';
import getSciFiAdventureStory from '../data/mockStories/sciFiAdventure';
import getTimeTravelStory from '../data/mockStories/timeTravel';

const staticStoryMap = {
  'Knight Quest': getKnightQuestStory,
  'Crime Noir': getCrimeNoirStory,
  'Sci-Fi Adventure': getSciFiAdventureStory,
  'Time Travel': getTimeTravelStory,
};

export default staticStoryMap;

