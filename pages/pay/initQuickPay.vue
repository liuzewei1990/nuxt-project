<template>
  <section class="pad-10 m-top-50">
    <div class="col-md-6">
      <form class="form-horizontal">
        <div class="form-group">
          <label for="inputEmail3" class="col-md-2 ">交易金额</label>
          <div class="col-md-6">
            <input type="email" class="form-control" id="inputEmail3" placeholder="">
          </div>
        </div>
        <div class="form-group">
          <label for="inputPassword3" class="col-md-2 ">交易内容</label>
          <div class="col-md-6">
            <input type="password" class="form-control" id="inputPassword3" placeholder="">
          </div>
        </div>
        <div class="form-group">
          <label for="inputPassword4" class="col-md-2 control-label">姓名</label>
          <div class="col-md-6">
            <input type="password" class="form-control" id="inputPassword4" placeholder="">
          </div>
        </div>
        <div class="form-group">
          <label for="inputPassword5" class="col-md-2 control-label">身份证号</label>
          <div class="col-md-6">
            <input type="password" class="form-control" id="inputPassword5" placeholder="">
          </div>
        </div>
        <div class="form-group">
          <label for="inputPassword6" class="col-md-2 control-label">预留手机号</label>
          <div class="col-md-6">
            <input type="password" class="form-control" id="inputPassword6" placeholder="">
          </div>
        </div>
        <div class="form-group">
          <label for="inputPassword3" class="col-md-2 control-label">支付类型</label>
          <div class="col-md-6">
            <div class="checkbox">
              <label>
                <input type="checkbox">信用卡
              </label>
              <label>
                <input type="checkbox">借记卡
              </label>
            </div>
          </div>
        </div>
        <div class="form-group">
          <label for="inputPassword7" class="col-md-2 control-label">卡号</label>
          <div class="col-md-6">
            <input type="password" class="form-control" id="inputPassword7" placeholder="">
          </div>
        </div>
        <div class="form-group">
          <label for="inputPassword8" class="col-md-2 control-label">有效期</label>
          <div class="col-md-6">
            <input type="password" class="form-control" id="inputPassword8" placeholder="">
          </div>
        </div>
        <div class="form-group">
          <label for="inputPassword9" class="col-md-2 control-label">CVN2</label>
          <div class="col-md-6">
            <input type="password" class="form-control" id="inputPassword9" placeholder="">
          </div>
        </div>
        <div class="form-group">
          <div class="col-sm-offset-2 col-sm-10">
            <button type="submit" class="btn btn-default">发起支付</button>
          </div>
        </div>
      </form>
    </div>
  </section>
</template>

<script>

export default {
    components: {
    },
    head() {
        return {
            title: "快捷支付",
        }
    },
}
</script>

<style scoped>
</style>
