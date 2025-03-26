export const flashCardData = [
  // Wayfinders
  {
    term: "Wayfinders",
    definition: "Give users clues about how to interact with the model, particularly when getting started",
    category: "wayfinders",
  },
  {
    term: "Follow up",
    definition: "Get more information from the user when the initial prompt isn't sufficiently clear",
    category: "wayfinders",
  },
  {
    term: "Nudges",
    definition: "Alert users to actions they can take to use AI, especially if they are just getting started",
    category: "wayfinders",
  },
  {
    term: "Suggestions",
    definition: "Solves the blank canvas dilemma with clues for how to prompt",
    category: "wayfinders",
  },
  {
    term: "Templates",
    definition: "Structured templates that can be filled by the user or pre-filled by the AI",
    category: "wayfinders",
  },

  // Inputs
  {
    term: "Inputs",
    definition: "Submit the user's prompt to the AI within its surrounding context",
    category: "inputs",
  },
  {
    term: "Auto Fill",
    definition: "Makes it easy for users to extend a prompt to multiple inputs at once",
    category: "inputs",
  },
  {
    term: "Inline action",
    definition: "Ask or interact with AI contextually based on something already available on the page",
    category: "inputs",
  },
  {
    term: "Madlibs",
    definition: "Repeatedly run generative tasks without compromising on the format or accuracy",
    category: "inputs",
  },
  {
    term: "Open input",
    definition: "Open ended prompt inputs that can be used in AI conversations and other natural language prompting",
    category: "inputs",
  },
  {
    term: "Remix / Blend",
    definition: "Combine prompts with each other or other sources to get new results",
    category: "inputs",
  },
  {
    term: "Summary",
    definition: "Have AI distill a topic or resource down to its essence",
    category: "inputs",
  },
  {
    term: "Synthesis",
    definition: "Distill or reorganize complicated information into simple structure",
    category: "inputs",
  },
  {
    term: "Token layering",
    definition: "Construct a prompt with raw tokens, just like building with legos",
    category: "inputs",
  },

  // Tuners
  {
    term: "Tuners",
    definition: "Let users refine or remix their prompt to get improved results",
    category: "tuners",
  },
  {
    term: "Filters",
    definition: "Constrain the inputs or the outputs of the AI by source, type, modality, etc",
    category: "tuners",
  },
  {
    term: "Inpainting",
    definition: "Target specific areas of the AI's result to regenerate or remix",
    category: "tuners",
  },
  {
    term: "Model management",
    definition: "Let users specify what model to use for their prompts",
    category: "tuners",
  },
  {
    term: "Parameters",
    definition: "Include constraints with your prompt for the AI to reference when generating its result",
    category: "tuners",
  },
  {
    term: "Personal voice",
    definition: "Ensure outputs match your voice, tone, and preferences in a consistent way",
    category: "tuners",
  },
  {
    term: "Primary sources",
    definition: "Give the AI a specific reference to anchor its response",
    category: "tuners",
  },
  {
    term: "References",
    definition: "See and manage what additional sources the AI references to generate its response",
    category: "tuners",
  },
  {
    term: "Workflows",
    definition: "String generative steps together to synthesize, create, or send content on auto-pilot",
    category: "tuners",
  },

  // Governors
  {
    term: "Governors",
    definition: "Maintain user agency as the AI works in order to understand and direct the AI's logic",
    category: "governors",
  },
  {
    term: "Citations",
    definition: "Lets the AI give inline annotations to cite its sources",
    category: "governors",
  },
  {
    term: "Controls",
    definition: "Manage the flow of information or pause a request mid-stream to adjust the prompt",
    category: "governors",
  },
  {
    term: "Footprints",
    definition: "Let users trace the AI's steps from prompt to result",
    category: "governors",
  },
  {
    term: "Prompt transparency",
    definition: "Show users what is actually happening behind the scenes",
    category: "governors",
  },
  {
    term: "Regenerate",
    definition: "Have the AI reproduce its response to the prompt without additional input",
    category: "governors",
  },
  {
    term: "Sample response",
    definition: "Confirm the user's intent for complicated prompts",
    category: "governors",
  },
  {
    term: "Show the work",
    definition:
      "Have the AI show the steps it will take to respond to the user's prompt before it executes its response",
    category: "governors",
  },
  {
    term: "Token transparency",
    definition: "Reveal the tokens the AI used to craft its response",
    category: "governors",
  },
  {
    term: "Variations",
    definition: "Trace through multiple variations of a result to choose the one that works best for them",
    category: "governors",
  },

  // Trust indicators
  {
    term: "Trust indicators",
    definition: "Give users confidence that the AI's results are ethical, accurate, and trustworthy",
    category: "trust",
  },
  {
    term: "Incognito mode",
    definition: "Interact with the AI without leaving any traces",
    category: "trust",
  },
  {
    term: "Memory",
    definition: "Control what details the AI knows about you",
    category: "trust",
  },
  {
    term: "Watermarks",
    definition: "Identifiers on AI Generative content that humans, software, or programs can read",
    category: "trust",
  },

  // Dark matter
  {
    term: "Dark matter",
    definition:
      "Potentially nefarious, but certainly ambiguous patterns that impact user trust with questionable user value",
    category: "dark",
  },
  {
    term: "Data ownership",
    definition: "Control how the model remembers and uses your data",
    category: "dark",
  },
  {
    term: "Rating",
    definition: "Signal expectation gaps or errors in the model – but is that clear to the user?",
    category: "dark",
  },
  {
    term: "Caveat",
    definition: "Inform users about shortcomings or risks in the model or the technology overall",
    category: "dark",
  },

  // Identifiers
  {
    term: "Identifiers",
    definition: "Differentiate the AI from other features and highlight its use case",
    category: "identifiers",
  },
  {
    term: "Color scheme",
    definition: "Visual cues to help users identify AI features or content",
    category: "identifiers",
  },
  {
    term: "Disclosure",
    definition: "Clearly mark content and interactions guided or delivered by AI",
    category: "identifiers",
  },
  {
    term: "Initial CTA",
    definition: "Large, open-ended input inviting the user to start their first interaction with the AI",
    category: "identifiers",
  },
  {
    term: "Name",
    definition: "How do we refer to the AI?",
    category: "identifiers",
  },
  {
    term: "Personality",
    definition: "Characteristics that distinguish the AI's personality and vibe",
    category: "identifiers",
  },
  {
    term: "Symbols",
    definition: "Images that represent the AI within the interface",
    category: "identifiers",
  },
]

// Verify we have exactly 41 cards
console.log("Total number of cards:", flashCardData.length)

