<template>
  <EditorPage/>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import EditorPage from './components/EditorPage.vue';
import registerGlobalEngineEvents from './utils/engine-globals-register';

registerGlobalEngineEvents();
export default defineComponent({
  name: 'App',

  components: {
    EditorPage
  },
})
</script>
