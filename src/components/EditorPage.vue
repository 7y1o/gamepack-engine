<template>
<!--  Panel with menu items-->
  <div class="menubar">
    <p class="logo">GamePack</p>
    <p class="project" v-if="loadedProject">{{ loadedProject.name }}</p>
    <it-tooltip autoposition>
      <template #content>
        Сохраните проект
        <it-tag type="primary">Ctrl + S</it-tag>,
        чтобы изменить его название
      </template>
      <p class="project" style="opacity: .5">Неизвестный проект</p>
    </it-tooltip>

    <it-divider vertical/>

    <it-button-group>
      <it-popover>
        <template #content>
          <it-button-group vertical>
            <it-button text>Создать проект</it-button>
            <it-button text>Открыть проект</it-button>
            <it-button text>Сохранить проект</it-button>
            <it-button text>Настройки проекта</it-button>
          </it-button-group>
        </template>
        <it-button size="small">Проект</it-button>
      </it-popover>

      <it-popover>
        <template #content>
          <it-button-group vertical>
            <it-button text>Настройки</it-button>
            <it-button text>Информация</it-button>
            <it-button text>Помощь</it-button>
          </it-button-group>
        </template>
        <it-button size="small">Движок</it-button>
      </it-popover>

      <it-popover>
        <template #content>
          Меню пока что не реализовано
        </template>
        <it-button size="small" disabled>Рабочее пространство</it-button>
      </it-popover>

      <it-popover>
        <template #content>
          <it-button-group vertical>
            <it-button text>Собрать под браузер</it-button>
            <it-button text>Собрать под Windows</it-button>
            <it-button text disabled>Собрать под Linux</it-button>
            <it-button text disabled>Собрать под MacOS</it-button>
            <it-button text disabled>Собрать под Android</it-button>
            <it-button text disabled>Собрать под iOS</it-button>
          </it-button-group>
        </template>
        <it-button size="small">Экспорт</it-button>
      </it-popover>
    </it-button-group>
  </div>

<!--  Common editor panel-->
  <div class="main">
    <EditTab/>
  </div>

<!--  Engine statistics panel-->
  <div class="footer">
    <p>ОЗУ:</p>
    <div class="progress" v-if="statistics.ram.total !== -1">
      <it-progressbar :height="12" :progress="100 / statistics.ram.total * statistics.ram.used" :show-tooltip="false"/>
    </div>
    <p v-if="statistics.ram.total === -1">подсчёт...</p>
    <p v-else>{{ [calcSize(statistics.ram.used), 'из', calcSize(statistics.ram.total)].join(' ') }}</p>

    <it-divider vertical/>

    <p>Ядро GPU:</p>
    <p v-if="statistics.gpu.coreTemp === -1">подсчёт...</p>
    <p v-else-if="!statistics.gpu.coreTemp">—</p>
    <p v-else>{{ statistics.gpu.coreTemp }} °C</p>

    <it-divider vertical/>

    <p>Память GPU:</p>
    <p v-if="statistics.gpu.memUsed === -1">посчёт...</p>
    <div class="progress" v-else>
      <it-progressbar :height="12" :progress="100 / statistics.gpu.memTotal * statistics.gpu.memUsed" :show-tooltip="false"/>
    </div>
    <p v-if="statistics.gpu.memUsed !== -1">{{ [calcGPUSize(statistics.gpu.memUsed), calcGPUSize(statistics.gpu.memTotal)].join(' / ') }}</p>

    <it-divider vertical/>

    <p>FPS:</p>
    <p v-if="statistics.gpu.fps === -1">подсчёт...</p>
    <p v-else>{{ statistics.gpu.fps }} к/с</p>
  </div>
</template>

<script lang="ts" src="./script/editor-page.ts"></script>
<style lang="scss" src="./style/editor-page.scss" scoped></style>