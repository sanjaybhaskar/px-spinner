import '@polymer/polymer/polymer-legacy.js';

/** @polymerBehavior */
export const PxSpinnerDemoBehavior = {

    properties: {

        props: {
            type: Object,
            value: function () { return this.demoProps; }
        },

        configs: {
            type: Array,
            value: function () {
                return [
                    {
                        configName: "Default",
                        configReset: true
                    },

                    {
                        configName: "Hidden",
                        size: 75,
                        finished: true
                    }
                ]
            }
        }
    },

    demoProps: {
        disableSvgAnimation: {
            type: Boolean,
            defaultValue: false,
            inputType: 'toggle'
        },
        finished: {
            type: Boolean,
            inputName: 'Hide',
            defaultValue: false,
            inputType: 'toggle'
        },
        size: {
            type: String,
            defaultValue: '100',
            inputType: 'text',
            inputPlaceholder: '100'
        }
    },
};