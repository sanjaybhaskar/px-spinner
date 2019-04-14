import '@polymer/polymer/polymer-legacy.js';

/** @polymerBehavior */
export const PxSpinnerBehavior = {

    properties: {
        /**
         Hides the spinner
         */
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
    },

    /**
     * Shows the spinner
     *
     * @method show
     */
    _show: function () {
        this.finished = false;
    },

    /**
     * Hides the spinner
     *
     * @method hide
     */
    _hide: function () {
        this.finished = true;
    },

    _shouldRenderAsSVG(_animatedSVGSupport, disableSvgAnimation) {
        return _animatedSVGSupport && !disableSvgAnimation;
    }
};