<template>
  <div class="list">
    <div class="container" v-for="item in listData">
        <h3 class="title">{{item.title}}</h3>
        <p class="content">{{item.content}}</p>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      msg: "list",
      listData: [
          {
              title: 'title',
              content: 'content'
          },{
              title: 'title',
              content: 'content'
          },{
              title: 'title',
              content: 'content'
          },
      ]
    };
  },
  methods: {

  }
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
.list {
    width: 100%;
    background: silver;
    margin: .2rem 0;
    .container {
        padding-top: .5rem;
        .title {

        }
    }
    .container:hover {
        .title {
            text-decoration: underline;
        }
    }
}
</style>
