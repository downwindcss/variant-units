# variants-unit

Adds new CSS unit variants.
Applying the variant will convert the unit of the width/heights applied.

Whatever the length variant is prefixed with, the declaration value's unit will be replaced with that of the variant.



## Installation

Following commands will install `@downwindcss/variant-units` as a "devDependency".

```bash
$ npm install -D @downwindcss/variant-units
# Or
$ yarn add -D @downwindcss/variant-units
# Or
$ pnpm add -D @downwindcss/variant-units
```

## Configuration

In your `tailwind.config.js`, 

1. Add the `unitsPlugin` plugin with `units`
1. Extend variants (typically, (max/min)width/height).

```js
module.exports = {
  plugins: [unitsPlugin({ units: ['em', 'vw', 'vh', '%'] })],
  variants: {
    extend: {
      width: ['em', 'vh', 'vw', '%'],
      height: ['em', 'vh', 'vw', '%'],
    },
  },
}

```

### Unit Options

*Refer to MDN for the list of CSS length units: https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Values_and_units#lengths*

MDN document doesn't have `%` as a length unit but you can still add it to the `units` plugin option in the configuration section.

- %
- cm
- mm
- Q
- in
- pc
- pt
- px
- em
- ex
- ch
- rem
- lh
- vw
- vh
- vmin
- vmax



## Usage

[w-4](https://tailwindcss.com/docs/width) has a length of `1rem'.

Following class `em:w-4` will apply `1em` instead of `1rem`.

```html
<div class="em:w-4"></div>
```

If you were to use `%:w-4`, it will be `1%`.