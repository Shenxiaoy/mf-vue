<template>
  <a-layout-sider :width="220" :collapsedWidth="54" collapsible breakpoint="xl">
    <a-menu
      v-if="menuItems && menuItems.length"
      :selectedKeys="selectedKeys"
      mode="inline"
    >
      <template v-for="menuItem of menuItems">
        <a-sub-menu
          :key="menuItem.key"
          v-if="
            menuItem.children && menuItem.children.length && !menuItem.is404
          "
          :disabled="menuItem.is403"
        >
          <template slot="title">
            <i class="iconfont"></i>
            <span>{{ menuItem.title }}</span>
          </template>
          <template v-for="item of menuItem.children">
            <a-menu-item
              :key="item.key"
              v-if="!item.is404"
              :disabled="item.is403"
            >
              <router-link :to="item.path">
                <span>{{ item.title }}</span>
              </router-link>
            </a-menu-item>
          </template>
        </a-sub-menu>
        <a-menu-item
          v-else-if="!menuItem.is404"
          :key="menuItem.key"
          :disabled="menuItem.is403"
        >
          <router-link :to="menuItem.path">
            <i class="iconfont"></i>
            <span>{{ menuItem.title }}</span>
          </router-link>
        </a-menu-item>
      </template>
    </a-menu>
  </a-layout-sider>
</template>
<script>
import { mapState } from "vuex";
import {filterRoutes} from '@/utils'

export default {
  name: "Sider",
  data() {
    return {
      // menuItems: [],
      openKeys: this.$route.meta.openKey ? [this.$route.meta.openKey] : []
    };
  },
  computed: {
    menuItems() {
      let menu = [];
      const curRoutes = this.$router.getRoutes()
      menu = filterRoutes(curRoutes)
      // if (this.$store) {
      //   menu = filterRoutes(this.$store.state.menus);
      // } else {
      //   menu = filterRoutes(this.$router.options.routes);
      // }
      return menu;
    },
    selectedKeys() {
      return this.$route.meta.key ? [this.$route.meta.key] : [];
    }
  }
};
</script>
<style lang="scss" scoped>
.ant-layout-sider {
  background-color: #fff;
  padding-bottom: 0;
  overflow-y: auto;
  overflow-x: hidden;
  box-shadow: 3px 0px 6px 0px #dfdfdf;
  &.ant-layout-sider-collapsed {
    .ant-menu {
      width: auto;
      &.ant-menu-sub {
        display: none;
      }
      .ant-menu-item,
      ::v-deep .ant-menu-submenu-title {
        padding-left: 0 !important;
        padding-right: 0 !important;
        text-align: center;
        i {
          margin-right: 0 !important;
        }
        span {
          display: none;
        }
      }
    }
    ::v-deep .ant-layout-sider-trigger {
      left: 54px;
    }
  }
  .ant-menu-root {
    height: 100%;
    border-right: none;
    > .ant-menu-item {
      &:hover {
        background-color: #fff2f0;
      }
      height: 56px;
      line-height: 56px;
      margin-top: 0;
      margin-bottom: 0;
      padding-left: 20px;
      width: 100%;
      background-image: none;
      &::after {
        right: initial;
        left: 0;
        transform: scaleY(1);
      }
      &.ant-menu-item-selected::after {
        opacity: 1;
      }

      .iconfont {
        font-size: 16px;
        margin-right: 16px;
      }
    }
    > .ant-menu-submenu {
      ::v-deep {
        .ant-menu-submenu-title {
          &:hover {
            background-color: #fff2f0;
          }
          height: 56px;
          line-height: 56px;
          margin-top: 0;
          margin-bottom: 0;
          .iconfont {
            font-size: 16px;
            margin-right: 16px;
          }
        }
      }
      .ant-menu-item {
        height: 50px;
        line-height: 50px;
        margin-top: 0;
        margin-bottom: 0;
        display: flex;
        align-items: center;
        &:hover {
          &::before {
            background-color: #1890ff;
          }
          background-color: #fff2f0;
        }
        &::before {
          content: " ";
          width: 6px;
          height: 6px;
          border-radius: 3px;
          background-color: #cdcdcd;
          display: inline-block;
          margin-right: 12px;
        }
        &::after {
          right: initial;
          left: 0;
          transform: scaleY(1);
        }
        &.ant-menu-item-selected {
          &::before {
            background-color: #1890ff;
          }
          &::after {
            opacity: 1;
          }
        }
      }
    }
  }
  ::v-deep .ant-layout-sider-trigger {
    width: 16px !important;
    height: 48px;
    border-top-right-radius: 6px;
    border-bottom-right-radius: 6px;
    position: fixed;
    top: 50%;
    left: 220px;
    background-color: #449aff;
  }
}
</style>
