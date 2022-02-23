import InlineSvg from 'vue-inline-svg';

const BaseComponentMixins = {
    components: { InlineSvg },
    props: {
        objectType: {
            type: String,
            required: true
        },
        position: {
            type: Object,
            required: true
        }
    }
}

export default BaseComponentMixins;