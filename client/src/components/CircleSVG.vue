<template>
    <!-- <inline-svg :src="`circle.svg`" :transformSource="transform" >
    </inline-svg> -->
    <svg
        xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
        <g
            xmlns="http://www.w3.org/2000/svg" >
            <g/>
            <g>
                <g  style="visibility: visible;">
                    <ellipse :cx="this.position.x" :cy="this.position.y" rx="12.420000000000002" ry="12.420000000000002" fill="#ffffff" stroke="#000000" stroke-width="1.08" pointer-events="all"/>
                </g>
            </g>
            <g/>
            <g/>
            <g/></g>
    </svg>
</template>
<script>
import BaseComponentMixins from './BaseComponent.mixins.js';
export default {
    mixins: [BaseComponentMixins],
    name: 'circle-svg',
    methods: {
        // transform(svg) {
        //     let circle = svg.querySelector('ellipse');

        //     circle.setAttributeNS(null, 'cx', this.position.x);
        //     circle.setAttributeNS(null, 'cy', this.position.y);

        //     return svg;
        // }
    }
}
</script>