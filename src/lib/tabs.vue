<template>
<div class="axx-tabs">
  <div class="axx-tabs-nav" ref="container">
    <div class="axx-tabs-nav-item" 
      v-for="(title,index) in titles" 
      :ref="el => { if (title === selectedTitle) selectedItem = el }"
      @click="select(title)" 
      :class="{selected: title === selectedTitle}" 
      :key="index">
      {{title}}
    </div>
    <div class="axx-tabs-nav-indicator" ref="indicator"></div>
  </div>
  <div class="axx-tabs-content">
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
  onMounted, Component
} from 'vue'

export default {
  props: {
    selectedTitle: {
      type: String
    }
  },
  setup(props, context) {
    let container = ref < HTMLDivElement > (null)
    let selectedItem = ref < HTMLDivElement > (null)
    let indicator = ref < HTMLDivElement > (null)

    let defaults = context.slots.default()
    // console.log(defaults);
    defaults.forEach((com) => {
      // @ts-ignore
      // if(com.type.name !== Tab.name) {
      //   throw new Error('Tabs 子标签必须是 Tab')
      // }
      if ((com.type as Component).name !== Tab.name) {
        // 错误抛出后，如果为捕获，后面不会加载
        // throw new Error('Tabs 子标签必须是 Tab')
        console.error('Tabs 子标签必须是 Tab')
        defaults = defaults.filter(com => (com.type as Component).name === Tab.name)
      }
      defaults = defaults.filter(com => com.props.title)
    })
    // console.log(defaults);
    
    let titles = defaults.map(com => com.props.title)
    let current = computed(()=>{
      return defaults.find(com => com.props.title === props.selectedTitle)
    })

    let select = (title: string) => {
      context.emit('update:selectedTitle', title)
    }
    let indicatorHandler = () => {
      watchEffect(() => {
        let { width, left: itemLeft } = selectedItem.value.getBoundingClientRect()
        let { left: containerLeft } = container.value.getBoundingClientRect()
        indicator.value.style.width = width + 'px'
        indicator.value.style.left = (itemLeft - containerLeft) + 'px'
      }, {
        flush: 'post'
      })
    }
    onMounted(() => {
      indicatorHandler()
    })

    return {
      // data
      titles,
      container,
      selectedItem,
      indicator,
      // computed
      current,
      // methods
      select,
    }
  }
}
</script>

<style lang="scss">
$blue: #40a9ff;
$color: #333;
$border-color: #d9d9d9;

.axx-tabs {
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
