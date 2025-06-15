import getKnightQuestStory from '../data/mockStories/knightQuest';
import getCrimeNoirStory from '../data/mockStories/crimeNoir';
import getSciFiAdventureStory from '../data/mockStories/sciFiAdventure';

export function getMockStoryForScenario(scenarioName) {
  switch (scenarioName) {
    case 'Knight Quest':
      return getKnightQuestStory();
    case 'Crime Noir':
      return getCrimeNoirStory();
    case 'Sci-Fi Adventure':
      return getSciFiAdventureStory();
    default:
      return []; // fallback empty array
  }
}

