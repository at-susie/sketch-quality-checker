# sketch-quality-checker

This is a tool for Sketch app (design tool) called 'Sketch Assistant'.
Once you install this in your Sketch app, you'll be notified with the quality of your Sketch file.
e.g. If you have layers with default shape layer name like 'Rectangle', this assistant will notify you to name them nicely.

<img src=https://zigzag.is/sketchassistant/icon.png width="120px" height="120px"> <br/>

Apart from the default layer name, this assistant checks more topics below:

## Core assistant items used
- [Default shape name notification](https://github.com/sketch-hq/sketch-assistants/tree/main/assistants/core/src/rules/name-pattern-shapes)
- [Default group name notification](https://github.com/sketch-hq/sketch-assistants/tree/main/assistants/core/src/rules/name-pattern-groups)
- [Disabled border notification](https://github.com/sketch-hq/sketch-assistants/tree/main/assistants/core/src/rules/borders-no-disabled)
- [Disabled fill notification](https://github.com/sketch-hq/sketch-assistants/tree/main/assistants/core/src/rules/fills-no-disabled)
- [Broken layer style notification](https://github.com/sketch-hq/sketch-assistants/tree/main/assistants/core/src/rules/layer-styles-no-dirty)
- [Broken text style notification](https://github.com/sketch-hq/sketch-assistants/tree/main/assistants/core/src/rules/text-styles-no-dirty)
- Thanks to [oodesign](https://github.com/oodesign), this also uses an assistant item for checking [duplicated artboards](https://github.com/oodesign/duplicates-assistant).
- And more.

## Getting started for customization

After
```
$ npm install
```
You can tweak the configurations in each assistant items.
