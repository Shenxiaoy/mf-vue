<template>
  <div class="layout">
    <!-- <Header class="layout-header" /> -->
    <Sider class="layout-sider" />
    <div class="layout-router-view" ref="layoutRouterView">
      <router-view v-if="isRouterAlive" />
    </div>
    <a-back-top :target="() => $refs.layoutRouterView" />
  </div>
</template>
<script>
// import Header from './components/Header.vue';
import Sider from "./components/Sider.vue";
import { postRequest } from "../..//api/module/index.js";

export default {
  name: "Layout",
  // provide() {
  //   return {
  //     reload: this.reload,
  //   };
  // },
  components: {
    // Header,
    Sider
  },
  data() {
    return {
      isRouterAlive: true
    };
  },
  async created() {
    const reslut = await postRequest({}).catch(res => {
      console.log("ress", res);
    });
    // this.$bus.$on('reload', this.reload);
    // console.log("reslut", reslut);
    // if (reslut) {
    //   // var inProgress = {};
    //   var script;
    //   reslut.forEach(src => {
    //     script = document.createElement("script");
    //     script.charset = "utf-8";
    //     script.timeout = 120;
    //     script.src = src.url;
    //     var onScriptComplete = function(prev, event) {
    //       // avoid mem leaks in IE.
    //       script.onerror = script.onload = null;
    //       clearTimeout(timeout);
    //       script.parentNode && script.parentNode.removeChild(script);
    //       if (prev) return prev(event);
    //     };
    //     var timeout = setTimeout(onScriptComplete.bind(null, undefined, { type: "timeout", target: script }), 120000);
    //     script.onerror = onScriptComplete.bind(null, script.onerror);
    //     script.onload = onScriptComplete.bind(null, script.onload);
    //     document.head.appendChild(script);
    //     console.log("document.script", script);
    //     console.log("document.head", document.head);
    //   });
      // if (!script) {
      //   needAttach = true;
      //   script = document.createElement("script");

      //   script.charset = "utf-8";
      //   script.timeout = 120;
      //   if (__webpack_require__.nc) {
      //     script.setAttribute("nonce", __webpack_require__.nc);
      //   }
      //   script.setAttribute("data-webpack", dataWebpackPrefix + key);
      //   script.src = url;
      // }

      // inProgress[url] = [done];
      // var onScriptComplete = function(prev, event) {
      //   // avoid mem leaks in IE.
      //   script.onerror = script.onload = null;
      //   clearTimeout(timeout);
      //   var doneFns = inProgress[url];
      //   delete inProgress[url];
      //   script.parentNode && script.parentNode.removeChild(script);
      //   doneFns &&
      //     doneFns.forEach(function(fn) {
      //       return fn(event);
      //     });
      //   if (prev) return prev(event);
      // };
      // var timeout = setTimeout(onScriptComplete.bind(null, undefined, { type: "timeout", target: script }), 120000);
      // script.onerror = onScriptComplete.bind(null, script.onerror);
      // script.onload = onScriptComplete.bind(null, script.onload);
      // needAttach && document.head.appendChild(script);
    // }
  },
  methods: {
    reload() {
      this.isRouterAlive = false;
      this.$nextTick(() => {
        this.isRouterAlive = true;
      });
    }
  }
};
</script>
<style lang="scss" scoped>
.layout {
  width: 100%;
  min-height: 100vh;
  display: flex;
  > .layout-header {
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    z-index: 2;
  }
  > .layout-sider {
    z-index: 1;
  }
  > .layout-router-view {
    flex: 1;
    overflow-x: hidden;
    overflow-y: auto;
  }
}
</style>
