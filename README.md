# Infor Design System WC Tools

A simple command-line tool to scaffold the boilerplate in Web Components.

## Installation

1. Git checkout this repo to a directory
2. Visit the local repo's root and in cmd/terminal:
```shell
npm i && npm link
```
3. Visit your `enterprise-wc` repo installation root in cmd/terminal and enter:
```shell
npm link ids-wc-tools
```
Now, `ids-wc-scaffold` should be available as a command to run in the project


## Usage

### `ids-wc-scaffold`

In your working directory root:

```shell
ids-wc-scaffold --namespace="ids-my-component-name"
```
Output should be similar to the following:
![](./doc/sample-output.png)

## How It Works

### `ids-wc-scaffold`
Generates the Simply runs through `mappings` files of a given type (mixins/components) and:
  1. adds directories from `srcDirs.js` if they don't exist,
  2. adds files from `srcFiles.js` if they don't exist
  3. replaces all instances of patterns found in files using Regexp, and replaces the groups found in `replacement.js`

  *(note: recursive patterns for capture group will not be supported here for the principle of KISS)*


  ## TODO
  - add `mixins` cmd param to work with entries which can use regexp group to capture/transform;  can be done with approach similar to existing `[namespace]/replacements.js`

## Notes
- mixins are already just about supported but waiting on a directory structure to input in the structure.


- This project aims to eventually support validation but is *not meant as a code analysis tool or tokenizer* due to simple limitations of regex capture (not a substitute for proper tokenization) and time constraints;

  For certain tasks of that nature to be done effectively, we would need to either import a solution-for or build a lexer/parser for ES7 which is not pragmatic in the low priority scope of this utility set.

  Change requests are welcome but before introducing complexity to manage, please keep the above in mind.