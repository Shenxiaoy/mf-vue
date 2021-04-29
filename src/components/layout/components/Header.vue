<template>
  <iframe
    ref="header"
    style="
      width: 100%;
      height: 66px;
      background-color: #399cff;
      border: none;
      box-shadow: 0px 0px 9px 0px #dfdfdf;
    "
  ></iframe>
</template>
<script>
export default {
  name: 'Header',
  mounted() {
    const { header } = this.$refs;
    // if (process.env.NODE_ENV !== 'development') {
    header.src = `${process.env.VUE_APP_PUBLIC_PATH}#/header`;
    // }
    header.scrolling = 'no';
  },
};
</script>
