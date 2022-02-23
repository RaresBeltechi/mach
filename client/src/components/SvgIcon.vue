<template>
    <inline-svg :src="`${objectType}.svg`" :transformSource="transform"> </inline-svg>  
</template>

<script>
import InlineSvg from 'vue-inline-svg';

export default {
    name: 'SvgIcon',
    props: {
        objectType: {
            type: String,
            required: true
        },
        position: {
            type: Object,
            required: true
        }
    },
    components: {
        InlineSvg,
    },
    methods: {
        transform(svg) {
            let circle = svg.querySelector('ellipse');
            if(circle != null) {
                circle.setAttributeNS(null, 'cx', this.position.x);
                circle.setAttributeNS(null, 'cy', this.position.y);
            } else {
                let g = svg.querySelector("g");
                g.setAttribute('transform',`translate(${this.position.x},${this.position.y}) `);
            }
            return svg;
        }
    }
};
</script>

<style scoped>
svg { 
  width:100% !important;
  height:100% !important;
}
</style>