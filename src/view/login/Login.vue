<template>
  <div>
    <el-form ref="loginForm" :model="form" :rules="rules" label-width="80px" class="login-box">
      <h3 class="login-title">欢迎登录</h3>
      <el-form-item label="账号" prop="username">
        <el-input
          type="text"
          placeholder="请输入账号"
          v-model="form.username"
          ref="username"
          @keydown.enter.native="onSubmit('loginForm')"
          clearable
        />
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input
          type="password"
          placeholder="请输入密码"
          v-model="form.password"
          @keydown.enter.native="onSubmit('loginForm')"
          clearable
        />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" v-on:click="onSubmit('loginForm')">登录</el-button>
      </el-form-item>
    </el-form>

    <el-dialog title="温馨提示" :visible.sync="dialogVisible" width="30%">
      <span>请输入账号和密码</span>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Ref } from "vue-property-decorator";
import { Form } from "element-ui";
import loginService from "../../services/LoginService";
import * as types from "@store/mutation-types";

@Component
export default class Login extends Vue {
  @Ref("username") readonly username: any;

  public form = {
    username: "admin",
    password: "654321"
  };

  // 表单验证，需要在 el-form-item 元素中增加 prop 属性
  private rules = {
    username: [{ required: true, message: "账号不可为空", trigger: "blur" }],
    password: [{ required: true, message: "密码不可为空", trigger: "blur" }]
  };

  // 对话框显示和隐藏
  private dialogVisible: boolean = false;

  // 生命周期钩子
  mounted() {
    this.username.focus();
  }

  onSubmit(formName: string) {
    // 为表单绑定验证功能
    let loginForm: Form = this.$refs[formName] as Form;
    loginForm.validate((valid: boolean) => {
      if (valid) {
        loginService
          .login(this.form)
          .then(res => {
            if (res.status === 200 && res.data.errorCode === 0) {
              this.$message({
                message: "登陆成功",
                type: "success",
                center: true,
                duration: 1000
              });
              this.$store.commit(types.LOGIN_SUC, res.headers["token"]);
              this.$router.push("/main/map");
            } else {
              this.$message({
                message: "登陆失败",
                type: "error",
                center: true,
                duration: 1000
              });
            }
          })
          .catch(err => {
            this.$message({
              message: "登陆失败",
              type: "error",
              duration: 1000
            });
          });
      } else {
        this.dialogVisible = true;
        return false;
      }
    });
  }
}
</script>

<style scoped>
.login-box {
  border: 1px solid #dcdfe6;
  width: 350px;
  margin: 180px auto;
  padding: 35px 35px 15px 35px;
  border-radius: 5px;
  -webkit-border-radius: 5px;
  -moz-border-radius: 5px;
  box-shadow: 0 0 25px #909399;
}

.login-title {
  text-align: center;
  margin: 0 auto 40px auto;
  color: #303133;
}
</style>