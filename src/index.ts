import { PluginType } from './types';

// const plugin = require('tailwindcss/plugin');

/**
 * Available CSS Units from MDN + "%", which is not in the documentation.
 * @see https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Values_and_units#lengths
 */
export type Unit =
  '%' |
  'cm' |
  'mm' |
  'Q' |
  'in' |
  'pc' |
  'pt' |
  'px' |
  'em' |
  'ex' |
  'ch' |
  'rem' |
  'lh' |
  'vw' |
  'vh' |
  'vmin' |
  'vmax';

// Play: https://play.tailwindcss.com/cJmUBDX2OL
const unitsPlugin = ({ units }: { units: Unit[] }) => ({ addVariant, e }: PluginType) => {
  units.map((unit) => {
    addVariant(unit, ({ container, modifySelectors }: any) => {
      modifySelectors(({ className }: { className: string }) => `.${e(`${unit}:${className}`)}`)

      container.walkRules((rule: any) => {
        rule.walkDecls((decl: any) => {
          if (decl.value.match(/^\d\.*\d*/g)) {
            decl.value = decl.value.replace(/\D+$/g, unit)
          }
        })
      })
    })
  })
}

// const unitsPlugin = plugin(emVariant({ units: ['em', 'vw', 'vh', '%'] }))


module.exports = unitsPlugin;