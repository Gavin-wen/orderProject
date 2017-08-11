<template>
  <div class="container" id="applogin">
        <div class="row">
            <div class="col-md-4 col-md-offset-4">
                <div class="login-panel panel panel-default">
                    <div class="panel-heading">
                        <h3 class="panel-title">登陆</h3>
                    </div>
                    <div class="panel-body">
                        <form role="form">
                            <fieldset>
                                <div class="form-group">
                                    <input class="form-control"  v-model="emailInfo"  autofocus>
                                </div>
                                <div class="form-group">
                                    <input class="form-control" v-model="passwordInfo" type="password" value="">
                                </div>
                                <div class="checkbox">
                                    <label>
                                        <input name="remember" type="checkbox" value="Remember Me">记住我
                                    </label>
                                </div>
                                <!-- Change this to a button or input when using this as a form -->
                                <!--<a href="index.html" class="btn btn-lg btn-success btn-block">Login</a>-->
                               <a class="btn btn-lg btn-success btn-block" v-on:click="login">登陆</a>
                            </fieldset>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
	module.exports = {
  		data: function (){
              return{
              emailInfo: "E-mail",
  			  passwordInfo: "Password"
              }
  		},
	    methods: {
          login: function () {
              if(this.emailInfo==""||this.passwordInfo==""||this.emailInfo=="E-mail"||this.passwordInfo=="Password")
              {
                    alert("邮箱与密码不能为空");
              }
              else
              {
                    localStorage.setItem("user",this.emailInfo);
                    this.$router.push('Index');
              }
          }
	    }
      }
</script>
<style type="text/css">
</style>