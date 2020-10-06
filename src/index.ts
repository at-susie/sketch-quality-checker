import {
  AssistantPackage,
  RuleDefinition,
} from '@sketch-hq/sketch-assistant-types'

const textNoLoremIpsum: RuleDefinition = {
  rule: async (context) => {
    // Rule logic will go here
  },
  name: 'sketch-assistant-template/text-no-lorem-ipsum',
  title: 'Text should not contain lorem ipsum',
  description:
    'Reports a violation when text layers contain lorem ipsum placeholder',
}


const assistant: AssistantPackage = async () => {
  return {
    name: 'sketch-assistant-template',
    rules: [textNoLoremIpsum],
    config: {
      rules: {
        'sketch-assistant-template/text-no-lorem-ipsum': {
          active: true,
        },
      },
    },
  }
}

export default assistant