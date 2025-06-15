// src/utils/storyGenerator.js
import OpenAI from 'openai';
import staticStoryMap from './staticStoryMap';

const openai = new OpenAI({
  apiKey: import.meta.env.VITE_OPENAI_API_KEY,
  dangerouslyAllowBrowser: true, // Needed for Vite/browser-based projects
});

export async function getStoryForScenario(scenarioName) {
  const staticStoryFn = staticStoryMap[scenarioName];
  if (!staticStoryFn) {
    return { phases: [], endings: { win: '', losses: {} } };
  }

  const staticStory = staticStoryFn();

  const prompt = `
You are an AI story generator.

Create a 5-phase interactive story that fully adheres to the genre, setting, and tone of the following scenario:
"${scenarioName}"

For example:
- "Knight Quest" should be a medieval fantasy with knights, magic, dragons, or castles.
- "Crime Noir" should feel like a gritty 1940s detective mystery.
- "Sci-Fi Adventure" must be set in space or futuristic environments with AI, aliens, or tech.
- "Time Travel" must involve historical Earth events with a character from the future trying to return home.

Each phase must include:
- A numbered phase with a short scene (1–3 sentences max), enhanced with relevant emojis for visual flavor.
- Two choices labeled A and B, optionally using emojis.
- Mark one choice as the correct one using "correctChoice".

At the end, include an "endings" block with:
- A "win" string (rewarding the correct final choice, also using emojis)
- A "losses" object with incorrect choice consequences, organized by phase and choiceId, each with a short descriptive sentence and emojis.

Use this exact JSON structure:
${JSON.stringify(staticStory, null, 2)}

Now generate a completely new story that fits this scenario’s theme, format, and tone.
`;

  try {
    const response = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: [{ role: 'user', content: prompt }],
      temperature: 0.9,
    });

    const content = response.choices[0].message.content.trim();

    const jsonStart = content.indexOf('{');
    const jsonEnd = content.lastIndexOf('}');
    const jsonText = content.slice(jsonStart, jsonEnd + 1);

    const generatedStory = JSON.parse(jsonText);
    return generatedStory;
  } catch (error) {
    console.error('❌ AI generation failed. Falling back to static story.', error);
    return staticStory;
  }
}
