import {
  IdsElement,
  customElement,
  attributes,
  scss,
  stringUtils,
  mix
} from '../ids-base/ids-element';

import {
  IdsThemeMixin,
  IdsEventsMixin
} from '../ids-mixins';

import styles from './{{ids-component}}.scss';

/**
 * {{IDS Component}}
 * @type {{{IdsComponent}}}
 * @inherits IdsElement
 */
 @customElement('{{ids-component}}')
 @scss(styles)
 export default class {{IdsComponent}} extends mix(IdsElement).with(
   IdsThemeMixin,
   IdsEventsMixin
 ) {
   constructor() {
     super();
   }

   /**
    * @returns {Array} The properties we handle as getters/setters
    */
   static get attributes() {
     return [
       ...super.attributes
     ];
   }

   /**
    * @returns {string} The component template to render
    */
   template() {
     return (``);
   }
 }
