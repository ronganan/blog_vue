<template>
  <div class="hello">
    <!-- <h1>{{ msg }}</h1> -->
    <div class="middle">
      <label for="">账号：</label><el-input title="账号" v-model="account" class="account"></el-input><br>
      <label for="">密码：</label><el-input title="密码" type="password" v-model="pwd" class="pwd"></el-input>
    </div><br>
    <el-button type="primary" @click="login">登录</el-button>
  </div>
</template>
<script>
import loginService from 'services/loginService';
import md5 from 'js-md5';
export default {
  data() {
    return {
      msg: "welcome to your vue",
      account: "",
      pwd: ""
    };
  },
  methods: {
    login() {
      if (!this.account || !this.pwd) {
        this.$notify.warning({
          title: "账号和密码不能为空！"
        })
        return;
      }
      loginService.login({account: this.account, pwd: md5(this.pwd)}).then( res => {
        if (res.resultCode = 200 && res.data.status == "success") {
          this.$notify({
            title: '登录成功',
            // message: '登录成功！',
            type: 'success',
            offset: 50
          })
          this.$router.push('/home');          
        } else {
          this.$notify({
            title: res.data.status,
            type: 'error'
          })
        }
      }).catch( err => {
        this.$notify({
          title: err.resultMessage,
          type: 'error'
        })
      })
    }
  }
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
h1,
h2 {
  font-weight: normal;
}
.hello {
  width: 100%;
  height: 100%;
  .middle {
    width: 4rem;
    margin: 0 auto;
    .el-input{
      width: 60%;
      margin: 10px 0;
    }
  }
  .el-button {
    width: 100px;
  }
}
</style>
