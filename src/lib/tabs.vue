<template>
<div class="gulu-tabs">
  <div class="gulu-tabs-nav" ref="container">
    <div class="gulu-tabs-nav-item" 
      v-for="(t,index) in titles" 
      :ref="el => { if (t === selectedTitle) selectedItem = el }"
      @click="select(t)" 
      :class="{selected: t === selectedTitle}" 
      :key="index">
      {{t}}
    </div>
    <div class="gulu-tabs-nav-indicator" ref="indicator"></div>
  </div>
  <div class="gulu-tabs-content">
    <component :is="current" :key="current.props.title" />
  </div>
</div>
</template>

<script lang="ts">
import Tab from './Tab.vue'
import {
  computed,
  ref,
  watchEffect,
  onMounted, SetupContext, Component
} from 'vue'

export default {
  props: {
    selectedTitle: {
      type: String
    }
  },
  setup(props, context) {
    const defaults = context.slots.default()

    defaults.forEach((com) => {
      // if ((com.type as Component).name !== Tab.name) {}
      if(com.type.name !== Tab.name) {
        throw new Error('Tabs 子标签必须是 Tab')
      }
    })
    let titles = defaults.map(com => com.props.title)
    let current = computed(()=>{
      return defaults.find(com => com.props.title === props.selectedTitle)
    })

    let select = (title: string) => {
      context.emit('update:selectedTitle', title)
    }
    return {
      titles,
      current,
      select
    }
  }
}
</script>

<style lang="scss">
$blue: #40a9ff;
$color: #333;
$border-color: #d9d9d9;

.gulu-tabs {
  &-nav {
    display: flex;
    color: $color;
    border-bottom: 1px solid $border-color;
    position: relative;

    &-item {
      padding: 8px 0;
      margin: 0 16px;
      cursor: pointer;

      &:first-child {
        margin-left: 0;
      }

      &.selected {
        color: $blue;
      }
    }

    &-indicator {
      position: absolute;
      height: 3px;
      background: $blue;
      left: 0;
      bottom: -1px;
      width: 100px;
      transition: all 250ms;
    }
  }

  &-content {
    padding: 8px 0;
  }
}
</style>
