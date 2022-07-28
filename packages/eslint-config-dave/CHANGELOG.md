# eslint-config-dave

## 3.0.6

### Patch Changes

- fix: `fetch().then(x => x.json())` no longer gets marked as a lint error
  ([`76b4c77`](https://github.com/paperdave/various/commit/76b4c77ba813fff24d04074a366f628df28fe5e7))

## 3.0.5

### Patch Changes

- 96510dd: fix no-redeclare

## 3.0.4

### Patch Changes

- 153228b: add typescript-eslint rules

## 3.0.3

### Patch Changes

- make all peer dependencies normal, since package managers do not follow peerDependenciesMeta, at
  least for nested stuff. i'm tired of the stupid install warning

## 3.0.2

### Patch Changes

- fbce85e: set dependencies as optional

## 3.0.1

### Patch Changes

- 89a90cb: disable 'curly' rule

## 3.0.0

### Major Changes

- d2413fb: initial set of basic davecode config and utilities
