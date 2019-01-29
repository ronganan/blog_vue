<template>
  <div class="home">
    <rheader></rheader>
    <list></list>
    <rfooter></rfooter>
    <fix></fix>
  </div>
</template>
<script>
// import loginService from 'services/loginService';
import rheader from 'components/header';
import rfooter from 'components/footer';
import list from 'components/list';
import fix from 'components/fix';
export default {
  name: "HelloWorld",
  self: this,
  data() {
    return {
      msg: "welcome to your vue",
    };
  },
  methods: {

  },
  components: {
    rheader,
    rfooter,
    list,
    fix
  }
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
h1,
h2 {
  font-weight: normal;
}
</style>
