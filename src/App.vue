<template>
  <div id="app">
    <!--<img src="./assets/logo.png">-->
    <router-view></router-view>
  </div>
</template>
<script>
import bootstrap from '../static/vendor/bootstrap/js/bootstrap.min.js'
import metisMenu from '../static/vendor/metisMenu/metisMenu.min.js'
import sbadmin2 from '../static/dist/js/sb-admin-2.js'
export default {
  components: {
   'remote-js': {
    render(createElement) {
      return createElement('script', { attrs: { type: 'text/javascript', src: this.src }});
    },
    props: {
      src: { type: String, required: true },
    },
  },
  },
  name: 'app'
}
</script>

<style type="text/css">
  @import '/static/vendor/bootstrap/css/bootstrap.min.css';
  @import '/static/vendor/metisMenu/metisMenu.min.css';
  @import '/static/dist/css/sb-admin-2.css';
  @import '/static/vendor/font-awesome/css/font-awesome.min.css';
</style>
