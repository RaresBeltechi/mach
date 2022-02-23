<template>
    <!-- <inline-svg :src="`triangle.svg`" :transformSource="transform"> </inline-svg>   -->
    <svg
        xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
        <g :transform="`translate(${this.position.x},${this.position.y})`"
            xmlns="http://www.w3.org/2000/svg" >
            <g/>
            <g>
                <g  style="visibility: visible;">
                    <path d="M 0.54 22.9 L 25.38 22.9 L 12.96 0.54 Z" fill="#ffffff" stroke="#000000" stroke-width="1.08" stroke-linejoin="round" stroke-linecap="round" stroke-miterlimit="10" pointer-events="all"/>
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
    name: 'triangle-svg',
    methods: {
        // transform(svg) {
            
        //     let g = svg.querySelector("g");
        //     g.setAttribute('transform',`translate(${this.position.x},${this.position.y}) `);

        //     return svg;
        // }
    }
}
</script>