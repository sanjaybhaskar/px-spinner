import '@polymer/polymer/polymer-legacy.js';
import './css/px-spinner.styles.js';

import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';

class PxSpinner extends PolymerElement {
  static get template() {
    return html`
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
  </template>`;
  }

  static get properties() {
    return {
      finished: {
        type: Boolean,
        value: false
      },
      /**
      * The size, in pixels, of the spinner.
      * Refers to the inner dimension of the circle - no units necessary.
      */
      size: {
        type: Number,
        value: 80,
        notify: true
      },
      /**
       * If set, disables SVG animations on the spinner.
       * Set this if you need the spinner to continue animating while the event loop is blocked.
       */
      disableSvgAnimation: {
        type: Boolean,
        value: false,
      },
      
      _animatedSVGSupport: {
        type: Boolean,
        readonly: true,
        value: function () {
          return true;
        }
      },


    }
  }
  constructor() {
    super();
  }

  /**
     * Shows the spinner
     *
     * @method show
     */
  _show() {
    this.finished = false;
  };

  /**
   * Hides the spinner
   *
   * @method hide
   */
  _hide() {
    this.finished = true;
  };

  _shouldRenderAsSVG(_animatedSVGSupport, disableSvgAnimation) {
    return _animatedSVGSupport && !disableSvgAnimation;
  }
}

customElements.define('px-spinner', PxSpinner);

