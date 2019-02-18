<template>
  <div class="list" v-loading="loading">
    <div class="container ql-container ql-snow" v-for="item in listData">
      <h3 class="title left">{{item.title}}</h3>
      <h4 class="time left">发布时间：{{item.createTime}}</h4>
      <p class="content ql-editor" v-html="item.content"></p>
    </div>
    <el-pagination
      v-if="listData.length"
      layout="prev, pager, next"
      :total="total"
      :page-size="10"
      @current-change="changeHandler"
    ></el-pagination>
  </div>
</template>
<script>
import acService from 'services/articleService';
export default {
  created() {
    this.getArticlesPageList();
  },
  data() {
    return {
      loading: false,
      listData: [],
      params: {
        pageNumber: 1,
        size: 10
			},
			total: 0
    };
  },
  methods: {
    getArticlesPageList() {
			let req = this.params;
			this.loading = true;
      acService.getArticlesPageList(req).then(res => {
        if (res.resultCode === 200) {
					this.listData = res.data.list;
					this.total = res.data.total;
        }
      }).catch( (err) => {

			}).finally( () => {
				this.loading = false;
			})
    },
    changeHandler(page) {
			this.params.pageNumber = page;
			this.getArticlesPageList();
    }
  }
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
.list {
  width: 100%;
	margin: 0.2rem 0;
  .container {
		padding-top: 0.5rem;
		width: 45%;
		margin: 0 auto;
		border: none;
    .title {
      font-size: .35rem;
      text-align: left;
    }
  }
  .container:hover {
    .title {
      text-decoration: underline;
    }
  }
}
</style>
