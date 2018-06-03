<template>
  <section class="pad-10 m-top-50">
    <div class="col-md-6">
      <form class="form-horizontal">
        <div class="form-group">
          <label for="inputPassword3" class="col-md-2 control-label">支付类型</label>
          <div class="col-md-6">
            <div class="checkbox">
              <label>
                <input type="checkbox">微信
              </label>
              <label>
                <input type="checkbox">支付宝
              </label>
            </div>
          </div>
        </div>
        <div class="form-group">
          <label for="inputEmail3" class="col-md-2 control-label">交易金额</label>
          <div class="col-md-6">
            <input type="email" class="form-control" id="inputEmail3" placeholder="">
          </div>
        </div>
        <div class="form-group">
          <label for="inputPassword3" class="col-md-2 control-label">交易内容</label>
          <div class="col-md-6">
            <input type="password" class="form-control" id="inputPassword3" placeholder="">
          </div>
        </div>
        <div class="form-group">
          <div class="col-sm-offset-2 col-sm-10">
            <button type="submit" class="btn btn-default">生成收款码</button>
          </div>
        </div>
      </form>
    </div>
    <div class="col-md-6 qr">
      <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1527856309375&di=a8d388143ff63d2e8e48f28f64003a05&imgtype=0&src=http%3A%2F%2Fsrc.house.sina.com.cn%2Fimp%2Fimp%2Fdeal%2F86%2F68%2F4%2Fe51eac8a98c2bd65c6b68bae86c_p1_mk1_wm35.gif" alt="..." class="img-thumbnail">
      <span>扫一扫支付</span>
    </div>

  </section>
</template>

<script>

export default {
  components: {
  },
  head() {
    return {
      title: "消费者主扫",
      meta: [
        { hid: 'description', name: 'description', content: '我是支付页面描述' }
      ]
    }
  },
}
</script>

<style scoped>
.qr {
  text-align: center;
}
.qr img {
  display: block;
  width: 200px;
  margin: 0 auto;
}

.qr span {
  line-height: 40px;
}
</style>
