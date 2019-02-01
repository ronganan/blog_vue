<template>
  <div class="header">
    <ul>
      <li>
        <router-link to="/home">home</router-link>
      </li>
      <li>
        <router-link to="/write">other</router-link>
      </li>
      <!-- <li>技术</li>
      <li>随笔</li>
      <li>日记</li>
      <li>照片</li>-->
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      msg: "header",
      isCollapse: true
    };
  },
  methods: {

  }
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
.header {
  padding: .2rem 0 0 .5rem;
  overflow: hidden;
  ul {
    li {
      float: left;
      margin-left: 50px;
    }
  }
}
</style>
