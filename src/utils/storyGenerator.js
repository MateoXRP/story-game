// src/utils/storyGenerator.js
import OpenAI from 'openai';
import staticStoryMap from './staticStoryMap';

const openai = new OpenAI({
  apiKey: import.meta.env.VITE_OPENAI_API_KEY,
  dangerouslyAllowBrowser: true,
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

Each phase must include:
- A short vivid scene (1–3 sentences), with relevant emojis.
- Two labeled choices (A and B), optionally with emojis.
- Mark the correct choice with "correctChoice".

At the end, include:
- A "win" message celebrating the correct final choice (with emojis).
- A "losses" object with a **custom message for every incorrect choice**, organized by phase number and choiceId.

Use this exact JSON format:
${JSON.stringify(staticStory, null, 2)}

Now generate a completely new story with all required fields.
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

    // 🔧 Add fallback for missing losses
    generatedStory.endings.losses = generatedStory.endings.losses || {};
    for (let i = 0; i < generatedStory.phases.length; i++) {
      const phaseNum = i + 1;
      const phase = generatedStory.phases[i];
      const correct = phase.correctChoice;
      const lossKey = generatedStory.endings.losses[phaseNum] ||= {};

      for (const choice of phase.choices) {
        if (choice.id !== correct && !lossKey[choice.id]) {
          lossKey[choice.id] = `❌ You chose "${choice.text}". The story took a dark turn.`;
        }
      }
    }

    return generatedStory;
  } catch (error) {
    console.error('❌ AI generation failed. Falling back to static story.', error);
    return staticStory;
  }
}
