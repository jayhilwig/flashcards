export type FlashCard = {
  term: string
  definition: string
}

export type CategoryData = {
  name: string
  description: string
  cards: FlashCard[]
}

export const flashCardData: CategoryData[] = [
  {
    name: "wayfinders",
    description: "Give users clues about how to interact with the model, particularly when getting started",
    cards: [
      {
        term: "Wayfinders",
        definition: "Give users clues about how to interact with the model, particularly when getting started",
      },
      {
        term: "Follow up",
        definition: "Get more information from the user when the initial prompt isn't sufficiently clear",
      },
      {
        term: "Nudges",
        definition: "Alert users to actions they can take to use AI, especially if they are just getting started",
      },
      {
        term: "Suggestions",
        definition: "Solves the blank canvas dilemma with clues for how to prompt",
      },
      {
        term: "Templates",
        definition: "Structured templates that can be filled by the user or pre-filled by the AI",
      },
    ],
  },
  {
    name: "inputs",
    description: "Submit the user's prompt to the AI within its surrounding context",
    cards: [
      {
        term: "Inputs",
        definition: "Submit the user's prompt to the AI within its surrounding context",
      },
      {
        term: "Auto Fill",
        definition: "Makes it easy for users to extend a prompt to multiple inputs at once",
      },
      {
        term: "Inline action",
        definition: "Ask or interact with AI contextually based on something already available on the page",
      },
      {
        term: "Madlibs",
        definition: "Repeatedly run generative tasks without compromising on the format or accuracy",
      },
      {
        term: "Open input",
        definition:
          "Open ended prompt inputs that can be used in AI conversations and other natural language prompting",
      },
      {
        term: "Remix / Blend",
        definition: "Combine prompts with each other or other sources to get new results",
      },
      {
        term: "Summary",
        definition: "Have AI distill a topic or resource down to its essence",
      },
      {
        term: "Synthesis",
        definition: "Distill or reorganize complicated information into simple structure",
      },
      {
        term: "Token layering",
        definition: "Construct a prompt with raw tokens, just like building with legos",
      },
    ],
  },
  {
    name: "tuners",
    description: "Let users refine or remix their prompt to get improved results",
    cards: [
      {
        term: "Tuners",
        definition: "Let users refine or remix their prompt to get improved results",
      },
      {
        term: "Filters",
        definition: "Constrain the inputs or the outputs of the AI by source, type, modality, etc",
      },
      {
        term: "Inpainting",
        definition: "Target specific areas of the AI's result to regenerate or remix",
      },
      {
        term: "Model management",
        definition: "Let users specify what model to use for their prompts",
      },
      {
        term: "Parameters",
        definition: "Include constraints with your prompt for the AI to reference when generating its result",
      },
      {
        term: "Personal voice",
        definition: "Ensure outputs match your voice, tone, and preferences in a consistent way",
      },
      {
        term: "Primary sources",
        definition: "Give the AI a specific reference to anchor its response",
      },
      {
        term: "References",
        definition: "See and manage what additional sources the AI references to generate its response",
      },
      {
        term: "Workflows",
        definition: "String generative steps together to synthesize, create, or send content on auto-pilot",
      },
    ],
  },
  {
    name: "governors",
    description: "Maintain user agency as the AI works in order to understand and direct the AI's logic",
    cards: [
      {
        term: "Governors",
        definition: "Maintain user agency as the AI works in order to understand and direct the AI's logic",
      },
      {
        term: "Citations",
        definition: "Lets the AI give inline annotations to cite its sources",
      },
      {
        term: "Controls",
        definition: "Manage the flow of information or pause a request mid-stream to adjust the prompt",
      },
      {
        term: "Footprints",
        definition: "Let users trace the AI's steps from prompt to result",
      },
      {
        term: "Prompt transparency",
        definition: "Show users what is actually happening behind the scenes",
      },
      {
        term: "Regenerate",
        definition: "Have the AI reproduce its response to the prompt without additional input",
      },
      {
        term: "Sample response",
        definition: "Confirm the user's intent for complicated prompts",
      },
      {
        term: "Show the work",
        definition:
          "Have the AI show the steps it will take to respond to the user's prompt before it executes its response",
      },
      {
        term: "Token transparency",
        definition: "Reveal the tokens the AI used to craft its response",
      },
      {
        term: "Variations",
        definition: "Trace through multiple variations of a result to choose the one that works best for them",
      },
    ],
  },
  {
    name: "trust",
    description: "Give users confidence that the AI's results are ethical, accurate, and trustworthy",
    cards: [
      {
        term: "Trust indicators",
        definition: "Give users confidence that the AI's results are ethical, accurate, and trustworthy",
      },
      {
        term: "Incognito mode",
        definition: "Interact with the AI without leaving any traces",
      },
      {
        term: "Memory",
        definition: "Control what details the AI knows about you",
      },
      {
        term: "Watermarks",
        definition: "Identifiers on AI Generative content that humans, software, or programs can read",
      },
    ],
  },
  {
    name: "dark",
    description:
      "Potentially nefarious, but certainly ambiguous patterns that impact user trust with questionable user value",
    cards: [
      {
        term: "Dark matter",
        definition:
          "Potentially nefarious, but certainly ambiguous patterns that impact user trust with questionable user value",
      },
      {
        term: "Data ownership",
        definition: "Control how the model remembers and uses your data",
      },
      {
        term: "Rating",
        definition: "Signal expectation gaps or errors in the model – but is that clear to the user?",
      },
      {
        term: "Caveat",
        definition: "Inform users about shortcomings or risks in the model or the technology overall",
      },
    ],
  },
  {
    name: "identifiers",
    description: "Differentiate the AI from other features and highlight its use case",
    cards: [
      {
        term: "Identifiers",
        definition: "Differentiate the AI from other features and highlight its use case",
      },
      {
        term: "Color scheme",
        definition: "Visual cues to help users identify AI features or content",
      },
      {
        term: "Disclosure",
        definition: "Clearly mark content and interactions guided or delivered by AI",
      },
      {
        term: "Initial CTA",
        definition: "Large, open-ended input inviting the user to start their first interaction with the AI",
      },
      {
        term: "Name",
        definition: "How do we refer to the AI?",
      },
      {
        term: "Personality",
        definition: "Characteristics that distinguish the AI's personality and vibe",
      },
      {
        term: "Symbols",
        definition: "Images that represent the AI within the interface",
      },
    ],
  },
]

// Helper function to flatten the data for compatibility with existing code
export function getFlattenedFlashCardData(): (FlashCard & { category: string })[] {
  return flashCardData.flatMap((category) =>
    category.cards.map((card) => ({
      ...card,
      category: category.name,
    })),
  )
}

// Verify we have exactly 41 cards
const totalCards = flashCardData.reduce((total, category) => total + category.cards.length, 0)
console.log("Total number of cards:", totalCards)
