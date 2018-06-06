<template>
  <section class="pad-10 m-top-50">
    <div class="col-md-6">
      <form class="form-horizontal">
        <div class="form-group">
          <label for="inputPassword3" class="col-md-2 control-label">支付类型</label>
          <div class="col-md-6">
            <div class="checkbox">
              <label>
                <input type="radio" v-model="params.payType" value="WECHAT">微信
              </label>
              <label>
                <input type="radio" v-model="params.payType" value="ALIPAY">支付宝
              </label>
            </div>
          </div>
        </div>
        <div class="form-group">
          <label for="inputEmail3" class="col-md-2 control-label">交易金额</label>
          <div class="col-md-6">
            <input type="text" v-model="params.amount" class="form-control" id="inputEmail3" placeholder="">
          </div>
        </div>
        <div class="form-group">
          <label for="inputPassword3" class="col-md-2 control-label">交易内容</label>
          <div class="col-md-6">
            <input type="text" v-model="params.subject" class="form-control" id="inputPassword3" placeholder="">
          </div>
        </div>
        <div class="form-group">
          <div class="col-sm-offset-2 col-sm-10">
            <button type="button" @click="getPayQrCode" class="btn btn-default">生成收款码</button>
          </div>
        </div>
      </form>
    </div>
    <div class="col-md-6 qr" v-if="src">
      <img :src="src" alt="..." class="img-thumbnail">
      <span>扫一扫支付</span>
    </div>

  </section>
</template>

<script>
import QRCode from "qrcode";
import { randomDateNow, getSignData } from "../utils";
export default {
  // layout: "payLayout",
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
  data() {
    return {
      service: "trade.scanPay",
      src: "",
      params: {
        payType: "WECHAT",
        amount: "200",
        subject: "内容"
      }
    }
  },
  mounted() {
  },
  methods: {
    createQrcode(url) {
      if (url)
        QRCode.toDataURL(url, { width: 250, }).then(qrcode => {
          this.src = qrcode;
        })
    },
    getPayQrCode(e) {

      //公共域
      let params = { ...this.$store.state.publicParams };

      //服务
      params["service"] = this.service;

      //交易订单号
      params["merOrderNo"] = randomDateNow(5);

      //私有域
      params["payType"] = this.params.payType;
      params["amount"] = this.params.amount;
      params["subject"] = this.params.subject;
      params["notifyUrl"] = "http://www.yeepiao.com";

      //可选
      // params["desc"] = "扫码";
      // params["realIp"] = "127.0.0.1";
      // params["latLong"] = "38.6518,104.07642";
      // params["operatorId"] = "OPER001";
      // params["storeId"] = "STORE001";
      // params["terminalId"] = "TERM001";
      // params["productId"] = "PROD001";


      params["signData"] = getSignData(params, this.$store.state.md5Key);
      console.log(params);
      // params["url"] = this.$store.state.url;
      this.postJson("http://47.94.3.28:8071/", params).then(data => {
        if (data.code === "00") {
          this.createQrcode(data.qrCode);
          this.$store.commit("updateOrderNo", params.merOrderNo);
        } else {
          alert(data.msg);
        }
      })
    }
  }
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
