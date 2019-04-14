import '@polymer/polymer/polymer-legacy.js';
import './css/px-spinner.styles.js';

import {Polymer} from '@polymer/polymer/lib/legacy/polymer-fn.js';
import {html} from '@polymer/polymer/lib/utils/html-tag.js';

import {PxSpinnerBehavior} from './px-spinner-behavior';

Polymer({
  _template: html`
    <style include="px-spinner-styles"></style>
    <template is="dom-if" if="{{!finished}}">
    <template is="dom-if" if="[[_shouldRenderAsSVG(_animatedSVGSupport, disableSvgAnimation)]]">
      <svg width$="{{size}}" height$="{{size}}" viewBox="0 0 100 100">
        <circle class="circle1" cx="50" cy="50" r="45" />
        <circle class="circle2" cx="50" cy="50" r="45" transform="rotate(-45,50,50)" />
      </svg>
    </template>
    <template is="dom-if" if="[[!_shouldRenderAsSVG(_animatedSVGSupport, disableSvgAnimation)]]">
      <div style$="width: {{size}}px; height: {{size}}px;" class="spinner-container"></div>
    </template>
  </template>
  `,

  is: 'px-spinner',

  behaviors: [PxSpinnerBehavior]
});