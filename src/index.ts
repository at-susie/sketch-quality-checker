import CoreAssistant from '@sketch-hq/sketch-core-assistant'
import { AssistantPackage, RuleDefinition, } from '@sketch-hq/sketch-assistant-types'


//////// Rule Definition for duplicateArtboards
const duplicateArtboards: RuleDefinition = {
  rule: async (context) => {
    interface Duplicate {
      name: string
      artboards: any[]
      number: number
    }

    var duplicates: Array<Duplicate> = [];

    for (const artboard of context.utils.objects.artboard) {
      var existingElement = duplicates.find((element) => element.name == artboard.name);
      if (existingElement != null) {
        existingElement.number++;
        existingElement.artboards.push(artboard);
      }
      else
        var initialArtboards: any[];
      initialArtboards = [];
      initialArtboards.push(artboard);
      duplicates.push({ name: artboard.name, artboards: initialArtboards, number: 1 });
    }

    for (const duplicate of duplicates) {
      if (duplicate.number > 1) {
        for (const artboard of duplicate.artboards) {
          context.utils.report("", artboard);
        }
      }
    }

  },
  name: 'duplicates-assistant/duplicate-artboards',
  title: 'Hey zigzager. Name duplicated artboards nicely.',
  description: '',
}

var no_shape_name = [
  '^Oval$', '^Oval Copy$', '^Oval Copy 2$', '^Oval Copy 3$', '^Oval Copy 4$', '^Oval Copy 5$', '^Oval Copy 6$',
  '^Rectangle$', '^Rectangle Copy$', '^Rectangle Copy 2$', '^Rectangle Copy 3$', '^Rectangle Copy 4$', '^Rectangle Copy 5$', '^Rectangle Copy 6$',
  '^Path$', '^Path Copy$', '^Path Copy 2$', '^Path Copy 3$', '^Path Copy 4$', '^Path Copy 5$', '^Path Copy 6$',
  '^Combined Shape$', '^Combined Shape Copy$', '^Combined Shape Copy 2$', '^Combined Shape Copy 3$', '^Combined Shape Copy 4$', '^Combined Shape Copy 5$', '^Combined Shape Copy 6$'
];


const assistant: AssistantPackage = [
  CoreAssistant,
  async () => {
    return {
      name: 'sketch-quality-checker',
      rules: [duplicateArtboards],
      config: {
        rules: {
          '@sketch-hq/sketch-core-assistant/name-pattern-shapes': {
            active: true,
            allowed: [],
            forbidden: no_shape_name,
            ruleTitle: 'Hey zigzager. You have default shape names, like "Rectangle" or "Path". Name them nicely!',
          },
          '@sketch-hq/sketch-core-assistant/name-pattern-groups': {
            active: true,
            allowed: [],
            forbidden: ['^Group$', '^Group Copy$', '^Group Copy 2$', '^Group Copy 3$', '^Group Copy 4$', '^Group Copy 5$'],
            ruleTitle: 'Hey zigzager. You have default group names, like "Group" or "Group Copy". Name them nicely!',
          },
          '@sketch-hq/sketch-core-assistant/borders-no-disabled': {
            active: true,
            ruleTitle: 'Hey zigzager. Removing disabled borders will make the sketch file nicer.',
          },
          '@sketch-hq/sketch-core-assistant/fills-no-disabled': {
            active: true,
            ruleTitle: 'Hey zigzager. Removing disabled fills will make the sketch file nicer.',
          },
          '@sketch-hq/sketch-core-assistant/shadows-no-disabled': {
            active: true,
            ruleTitle: 'Hey zigzager. Removing disabled shadows will make the sketch file nicer.',
          },
          '@sketch-hq/sketch-core-assistant/layer-styles-no-dirty': {
            active: true,
            ruleTitle: 'Hey zigzager. Oh, you have broken Layer Styles. Re-select the Layer Style or detach it.',
          },
          '@sketch-hq/sketch-core-assistant/text-styles-no-dirty': {
            active: true,
            ruleTitle: 'Hey zigzager. Oh, you have broken Text Styles. Re-select the Text Style or detach it.',
          },
          '@sketch-hq/sketch-core-assistant/groups-no-redundant': {
            active: true,
            ruleTitle: 'Hey zigzager. You have redundant grouping. Double-check the grouping inside',
          },
          'duplicates-assistant/duplicate-artboards': {
            active: true,
          },
        },
      },
    }
  },
]


export default assistant