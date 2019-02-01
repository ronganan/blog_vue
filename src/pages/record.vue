<template>
  <div class="write" v-loading="loading">
    <div class="content">
      <h3 class="edit">add</h3>
      <div class="form-item">
        <label for>标题：</label>
        <el-input placeholder="请输入标题..." v-model="params.title"></el-input>
      </div>
      <div class="form-item">
        <label for>类型：</label>
        <el-select placeholder="请输入类型..." v-model="params.type">
          <el-option
            v-for="item in acTypes"
            :key="item.value"
            :label="item.name"
            :value="item.value"
          ></el-option>
        </el-select>
      </div>
      <div class="form-item form-tag" v-if="params.type === 1">
        <label for>标签：</label>
        <el-checkbox-group v-model="params.checkedTags" @change="onChangeChecked">
          <el-checkbox
            v-for="item in acTags"
            :label="item.name"
            :key="item.value"
            :value="item.value"
            name="type"
          ></el-checkbox>
        </el-checkbox-group>
      </div>
      <div class="form-item">
        <label for>公开：</label>
        <el-switch active-value="true" inactive-value="false" v-model="params.state" active-color="#2c3e509"></el-switch>
      </div>
      <quill-editor
        v-model="params.content"
        ref="myQuillEditor"
        :options="editorOption"
        @blur="onEditorBlur($event)"
        @focus="onEditorFocus($event)"
        @ready="onEditorReady($event)"
        @change="onEditorChange($event)"
      ></quill-editor>
      <div class="form-item">
        <el-button type="primary" @click="submit">提交</el-button>
      </div>
    </div>
  </div>
</template>
<script>
import cmService from 'services/commonService';
import acService from 'services/articleService';
export default {
  created() {
    this.queryAcTypes();
    this.queryAcTags();
  },
  data() {
    return {
      loading: false,
      editorOption: {
        debug: 'info',
        placeholder: '请输入内容...',
        readOnly: true,
        theme: 'snow'
      },
      params: {
        title: "",
        type: [],
        checkedTags: [],
        state: false,
        content: ""
      },
      acTags: [],
      acTypes: []
    };
  },
  methods: {
    // 请求文章类型
    queryAcTypes() {
      cmService.queryAcTypes().then(res => {
        if (res.resultCode === 200) {
          this.acTypes = res.data;
        }
      })
    },
    // 请求文章标签
    queryAcTags() {
      cmService.queryAcTags().then(res => {
        if (res.resultCode === 200) {
          this.acTags = res.data;
        }
      })
    },
    onEditorBlur() {//失去焦点事件
    },
    onEditorFocus() {//获得焦点事件
    },
    onEditorChange() {//内容改变事件
      console.log(this.params.content, this.editorOption)
    },
    onEditorReady() {//内容改变事件
    },
    onChangeChecked() {
      console.log(this.checkedTags, this.type)
    },
    // 提交新的 或 更改的文章
    submit() {
      let req = this.params;
      this.loading = true;
      if (!req.title || !req.type || !req.content) {
        this.$notify.success({
          title: "请填写完整",
        })
        return;
      }
      acService.addArticle(req).then( res => {
        if (res.resultCode === 200 ) {
          this.$notify.success({
            title: "提交成功",
          })
          this.$router.push("/home");
        } else {
          this.$notify.error({
            title: res.data.status
          })
        }
      }).finally( () => {
        this.loading = false;
      })
    }
  },
  components: {
  }
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
.write {
  width: 100%;
  padding-top: 0.5rem;
  .content {
    width: 80%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    .edit {
      font-size: 60px;
    }
    .quill-editor {
      height: 3rem;
      margin-top: 0.3rem;
      width: 70%;
    }
    .form-item {
      width: 25%;
      margin-top: 0.25rem;
      display: flex;
      justify-content: center;
      align-items: center;
      label {
        width: 15%;
        line-height: 100%;
        font-weight: bold;
      }
      .el-input,
      .el-select,
      .el-switch,
      .el-checkbox-group {
        width: 85%;
      }
      .el-button {
        margin-top: 0.7rem;
      }
      .el-checkbox-group {
        text-align: left;
        .el-checkbox {
          padding: 0.25rem 0.2rem 0 0;
          width: 33%;
          margin: 0;
          font-weight: 100;
        }
      }
      &.form-tag {
        margin-top: 0;
      }
    }
  }
}
</style>
