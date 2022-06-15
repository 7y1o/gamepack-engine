<template>
  <EditorPage/>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import EditorPage from './components/EditorPage.vue';

export default defineComponent({
  name: 'App',

  components: {
    EditorPage
  },
})
</script>
