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
You are an AI story generator. Create a 5-phase interactive story in the style of "${scenarioName}".
Each phase should include:
- A numbered phase with a short scene (1-3 sentences max)
- Two choices labeled A and B
- Mark one choice as the correct one using "correctChoice"
- Include a final "endings" block with:
  - "win" string (rewarding the correct final choice)
  - "losses" object with phase-specific incorrect choice consequences

Use this JSON structure:
${JSON.stringify(staticStory, null, 2)}

Now generate a completely new story with a similar format, tone, and structure.
`;

  try {
    const response = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: [{ role: 'user', content: prompt }],
      temperature: 0.9,
    });

    const content = response.choices[0].message.content.trim();

    // Try to safely extract JSON from response
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
