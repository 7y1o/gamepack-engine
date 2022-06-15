<template>
  <div class="edit-main" @mousemove="handleMouseMove" @mouseup="handleMouseButtonUp">
    <div class="create-panel" :style="{width: createPanelSize + 'px'}">
      <div class="content">
        <CreationPanel/>
      </div>
        <div
          class="resize-panel"
          @mousedown="creationPanelResizeStart">
        <div class="line"></div>
      </div>
    </div>

    <div
      class="editor" 
      :style="{left: createPanelSize + 'px', right: inspectorSize + 'px'}">
      <canvas id="editor-canvas"></canvas>
    </div>

    <div 
      class="inspector" 
      :style="{width: inspectorSize + 'px'}">
      <div class="content">
        <p class="title">Инспектор</p>
        <it-divider/>
      </div>
      <div 
        class="resize-panel"
        @mousedown="inspectorResizeStart">
        <div class="line"></div>
       </div>
    </div>
  </div>
</template>

<script lang="ts" src="./script/edit-tab.ts"></script>
<style scoped lang="scss" src="./style/edit-tab.scss"></style>
