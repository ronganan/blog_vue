<template>
  <div class="fix">
    <el-button type="primary" icon="el-icon-edit" circle @click="writeHandler"></el-button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      msg: "fix",
    };
  },
  methods: {
    writeHandler() {
      this.$router.push("/write");
    }
  }
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
.fix {
  position: fixed;
  right: 0.2rem;
  bottom: 0.4rem;
}
</style>
