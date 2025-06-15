import getKnightQuestStory from '../data/mockStories/knightQuest';
import getCrimeNoirStory from '../data/mockStories/crimeNoir';
import getSciFiAdventureStory from '../data/mockStories/sciFiAdventure';
import getTimeTravelStory from '../data/mockStories/timeTravel';

export function getMockStoryForScenario(scenarioName) {
  switch (scenarioName) {
    case 'Knight Quest':
      return getKnightQuestStory();
    case 'Crime Noir':
      return getCrimeNoirStory();
    case 'Sci-Fi Adventure':
      return getSciFiAdventureStory();
    case 'Time Travel':
      return getTimeTravelStory();
    default:
      return [];
  }
}

