<template>
  <div id="app">
    <div class="container">
      <svg class="svgContainer">
        <template v-for="(elem, index) in items">
          <component :is="`${elem.objectType}-svg`" :key="index" :objectType="elem.objectType" :position="elem.position" :contextMenu="[]" @contextmenu.native="openContextMenu($event,elem)"/>
        </template>
      </svg>
    </div>
    <context-menu :display="showContextMenu" ref="menu">
      <ul>
          <li v-for="(option, index) in contextOptions" :key="index" @click="handleAction($event, option.action)">{{ option.label}} </li>
      </ul>
      </context-menu>
  </div>
</template>

<script>
import contextMenu from './components/ContextMenu.vue';
import CircleSVG from './components/CircleSVG.vue'
import DiamondSVG from './components/DiamondSVG.vue'
import TriangleSVG from './components/TriangleSVG.vue'
import axios from './config/axios';

export default {
  components: { 
    'circle-svg': CircleSVG,
    'diamond-svg': DiamondSVG,
    'triangle-svg': TriangleSVG,
    contextMenu
    },
  name: 'App',
  data() {
    return {
      items: [],
      showContextMenu: false,
      currentShape: null,
      contextOptions: [
        { label: 'Rename', action: 'rename'},
        { label: 'Delete', action: 'delete'}
      ]
    }
  },
  methods: {
    rename() {
      console.log(this.currentShape);
    },
    async delete() {
      const res = await axios.delete(`/nodes/${this.currentShape.id}`);
      if(res.status == 200) {
        this.items = this.items.filter(elem => elem.id != this.currentShape.id);
      }
    },
    handleAction(evt, action) {
      evt.stopPropagation();
      this[action]();
      this.showContextMenu = false;
      this.$refs.menu.close();
    },
    openContextMenu(e, currentItem) {
      e.preventDefault();
      this.currentShape = currentItem;
      this.showContextMenu = true;
      this.$refs.menu.open(e);
    },
    async clickHandle(evt) {
      let e = evt.target;
      let dim = e.getBoundingClientRect();
      const response = await axios.post('/nodes', {
        position: {
            x: evt.clientX - dim.left,
            y: evt.offsetY - dim.top
        }
      });
      this.items.push(response.data);
    },
  },
  async mounted() {
    this.$el.addEventListener('click', this.clickHandle);

    try {
      const res = await axios.get('/nodes/initialize'); 
      this.items = res.data || [];
    } catch(e) {
      console.log(e); //eslint-disable-line
    }
  },
  beforeDestroy() {
    this.$el.removeEventListener('click', this.clickHandle);
  }
}
</script>
<style lang="css">
* {
    padding: 0;
    margin: 0;
}
svg { 
  width:100% !important;
  height:100% !important;
}
.container {
  right: 0px;
  touch-action: none;
  overflow: auto;
  background-color: #ffffff;
  outline: none;
  width: 100%;
  height: 100%;
}
.svgContainer {
  left: 0px;
  top: 0px;
  width: 100%;
  height: 100%;
  min-width: 3804px;
  min-height: 1252px;
  display: block;
  position: absolute;
  background-color: rgb(250, 250, 250);
  background-image: none;
  background-repeat: repeat;
}
ul {
  list-style-type: none; 
  
}
ul li {
  padding: 5px;
}

ul li:hover {
    background: #555;
    color: #fff;
  } 
</style>
