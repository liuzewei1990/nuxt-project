<template>
  <div class="container">
    <div class="m-top-50"></div>
      <form class="form-horizontal col-md-6">
        <div class="form-group">
          <label for="" class="col-md-2 control-label">接口地址:</label>
          <div class="col-md-10">
            <input type="email" class="form-control" id="" placeholder="">
          </div>
        </div>
        <div class="form-group">
          <label for="" class="col-md-2 control-label">商户号:</label>
          <div class="col-md-10">
            <input type="password" class="form-control" id="" placeholder="">
          </div>
        </div>
      </form>
      <form class="form-horizontal col-md-6">
        <div class="form-group">
          <label for="" class="col-md-2 control-label">机构号:</label>
          <div class="col-md-10">
            <input type="email" class="form-control" id="" placeholder="">
          </div>
        </div>
        <div class="form-group">
          <label for="" class="col-md-2 control-label">机构密钥:</label>
          <div class="col-md-10">
            <input type="password" class="form-control" id="" placeholder="">
          </div>
        </div>
      </form>
    <!-- <div>Header</div> -->
    <ul class="nav nav-tabs">
      <li role="presentation"><nuxt-link to="/scanPay">消费者主扫</nuxt-link></li>
      <li role="presentation"><nuxt-link to="/initQuickPay">快捷支付</nuxt-link></li>
      <li role="presentation"><nuxt-link to="/h5Pay">H5支付</nuxt-link></li>
      <li role="presentation"><nuxt-link to="/query">交易查询</nuxt-link></li>
      <li role="presentation"><nuxt-link to="/refund">交易退货</nuxt-link></li>
    </ul>
    <nuxt/>
    <!-- <div>Footer</div> -->
  </div>
</template>

<style scoped>
.nuxt-link-exact-active {
  color: #555;
  cursor: default;
  background-color: #fff;
  border: 1px solid #ddd;
  border-bottom-color: transparent;
}
</style>
