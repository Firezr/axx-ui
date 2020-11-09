<template>
  <div class="layout">
    <Topnav class="nav" toggleMenuButtonVisible />
    <div class="content">
      <aside v-if="menuVisiable">
        <h2>文档</h2>
        <ol>
          <li>
            <router-link to="/doc/intro">介绍</router-link>
          </li>
          <li>
            <router-link to="/doc/install">安装</router-link>
          </li>
          <li>
            <router-link to="/doc/get-started">开始使用</router-link>
          </li>
        </ol>
        <h2>组件列表</h2>
        <ol>
          <li>
            <router-link to="/doc/button">Button 组件</router-link>
          </li>
          <li>
            <router-link to="/doc/switch">Switch 组件</router-link>
          </li>
          <li>
            <router-link to="/doc/tabs">Tabs 组件</router-link>
          </li>
          <li>
            <router-link to="/doc/dialog">Dialog 组件</router-link>
          </li>
        </ol>
      </aside>
      <main>
        <router-view />
      </main>
    </div>
  </div>
</template>

<script lang="ts">
import Topnav from "../components/TopnavDemo.vue";
import { inject, Ref } from "vue";

export default {
  components: {
    Topnav,
  },
  setup() {
    let menuVisiable = inject<Ref<boolean>>("menuVisiable"); // get
    return {
      menuVisiable,
    };
  },
};
</script>

<style lang="scss" scoped>
$aside-index: 10;

.layout {
  // background: linear-gradient(145deg,#fff100 0%, #ffffff 100%);
  background: linear-gradient(145deg,#ffffff 0%, #fff100 100%);
  // clip-path: ellipse(80% 60% at 50% 40%);

  display: flex;
  flex-direction: column;
  height: 100vh;

  > .nav {
    flex-shrink: 0;
  }

  > .content {
    flex-grow: 1;
    padding-top: 60px;
    padding-left: 156px;

    @media (max-width: 500px) {
      padding-left: 0;
    }
  }
}

.content {
  display: flex;

  > aside {
    flex-shrink: 0;
  }

  > main {
    // background: linear-gradient(145deg,#ffffff 0%, #fff100 70%);
    // clip-path: ellipse(80% 60% at 50% 40%);

    flex-grow: 1;
    padding: 16px;
    background: white;
  }
}

aside {
  // background: lightblue;
  background: linear-gradient(to bottom, #ffffff, #fff100);
  width: 150px;
  padding: 16px 0;
  position: fixed;
  top: 0;
  left: 0;
  padding-top: 70px;
  height: 100%;
  z-index: $aside-index;

  > h2 {
    margin-bottom: 4px;
    padding: 0 16px;
  }

  > ol {
    > li {
      > a {
        display: block;
        padding: 4px 16px;
        text-decoration: none;
      }

      .router-link-active {
        background: white;
      }
    }
  }
}

main {
  overflow: auto;
}
</style>
