<template>
  <div class="write">
    <div class="content">
      <h3 class="edit">edit</h3>
      <div class="form-item">
        <label for>标题：</label>
        <el-input placeholder="请输入标题..."></el-input>
      </div>
      <div class="form-item">
        <label for>类型：</label>
        <el-select placeholder="请输入类型..."></el-select>
      </div>
      <div class="form-item">
        <label for>公开：</label>
        <el-switch active-value="true" inactive-value="false" v-model="isPublic"></el-switch>
      </div>
      <quill-editor
        v-model="content"
        ref="myQuillEditor"
        :options="editorOption"
        @blur="onEditorBlur($event)"
        @focus="onEditorFocus($event)"
        @ready="onEditorReady($event)"
        @change="onEditorChange($event)"
        class="form-item"
      ></quill-editor>
      <div class="form-item">
        <el-button type="primary" @click="submit">提交</el-button>
      </div>
    </div>
  </div>
</template>
<script>
import 'quill/dist/quill.core.css';
import 'quill/dist/quill.snow.css';
import 'quill/dist/quill.bubble.css';
import { quillEditor } from 'vue-quill-editor';
export default {
  data() {
    return {
      msg: "write",
      content: "",
      editorOption: {
        debug: 'info',
        placeholder: '请输入内容...',
        readOnly: true,
        theme: 'snow'
			},
			isPublic: false
    };
  },
  methods: {
    onEditorBlur() {//失去焦点事件
    },
    onEditorFocus() {//获得焦点事件
    },
    onEditorChange() {//内容改变事件
      console.log(this.content, this.editorOption)
    },
    onEditorReady() {//内容改变事件
    },
    submit() {

    }
  },
  components: {
    quillEditor
  }
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
.write {
  width: 100%;
  .content {
    width: 60%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    .edit {
      font-size: 60px;
    }
    .quill-editor {
      height: 3rem;
    }
    .form-item {
      width: 80%;
      margin-top: 0.2rem;
      .el-input,.el-select,.el-switch{
        width: 30%;
			}
      .el-button {
        margin-top: 0.7rem;
      }
    }
  }
}
</style>
