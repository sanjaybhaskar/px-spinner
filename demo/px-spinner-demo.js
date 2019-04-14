import '@polymer/polymer/polymer-legacy.js';
import '../px-spinner.js'

import { Polymer } from '@polymer/polymer/lib/legacy/polymer-fn.js';
import { html } from '@polymer/polymer/lib/utils/html-tag.js';


import { PxSpinnerDemoBehavior } from './px-spinner-demo-behavior';

Polymer({
    _template: html`
  <template>
  <px-spinner  size="{{props.size.value}}" finished="{{props.finished.value}}" disable-svg-animation="{{props.disableSvgAnimation.value}}">
      </px-spinner>
</template>`,

    is: 'px-spinner-demo',

    behaviors: [PxSpinnerDemoBehavior]
});