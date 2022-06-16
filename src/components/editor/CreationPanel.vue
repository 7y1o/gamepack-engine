<template>
    <it-tabs>
        <it-tab title="Все">
            <div class="item" v-for="tool of allTools" :key="tool.id">
                <div class="info">
                    <div class="icon">
                        <img :src="'/icons/tools/' + tool.name + '.svg'" :alt="tool.name">
                    </div>
                    <p class="name">{{ tool.name }}</p>
                </div>
                <p class="group">{{ tool.group }}</p>
            </div>
        </it-tab>
        <it-tab title="Примитивы">
            <div class="item" v-for="tool of primitivesTools" :key="tool.id">
                <div class="info">
                    <div class="icon">
                        <img :src="'/icons/tools/' + tool.name + '.svg'" :alt="tool.name">
                    </div>
                    <p class="name">{{ tool.name }}</p>
                </div>
            </div>
        </it-tab>
        <it-tab title="Эффекты">
            <div class="item" v-for="tool of fxTools" :key="tool.id">
                <div class="info">
                    <div class="icon">
                        <img :src="'/icons/tools/' + tool.name + '.svg'" :alt="tool.name">
                    </div>
                    <p class="name">{{ tool.name }}</p>
                </div>
            </div>
        </it-tab>
        <it-tab title="Триггеры">
            <div class="item" v-for="tool of triggersTools" :key="tool.id">
                <div class="info">
                    <div class="icon">
                        <img :src="'/icons/tools/' + tool.name + '.svg'" :alt="tool.name">
                    </div>
                    <p class="name">{{ tool.name }}</p>
                </div>
            </div>
        </it-tab>
    </it-tabs>
</template>

<script lang="ts" src="./script/creation-panel.ts"></script>
<style lang="scss" src="./style/creation-panel.scss"></style>
