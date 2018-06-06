<template>
  <section class="pad-10 m-top-50">
    <div class="col-md-6" v-show="tabType == 1">
      <form class="form-horizontal">
        <div class="form-group">
          <label for="" class="col-md-2 control-label">支付类型</label>
          <div class="col-md-6">
            <div class="checkbox">
              <label>
                <input type="radio" v-model="params.cardType" value="01">信用卡
              </label>
              <label>
                <input type="radio" v-model="params.cardType" value="02">借记卡
              </label>
            </div>
          </div>
        </div>
        <div class="form-group">
          <label for="" class="col-md-2 control-label">交易金额</label>
          <div class="col-md-6">
            <input type="text" v-model="params.amount" class="form-control"  placeholder="">
          </div>
        </div>
        <div class="form-group">
          <label for="" class="col-md-2 control-label">交易内容</label>
          <div class="col-md-6">
            <input type="text" v-model="params.subject" class="form-control"  placeholder="">
          </div>
        </div>
        <div class="form-group">
          <label for="" class="col-md-2 control-label">姓名</label>
          <div class="col-md-6">
            <input type="text" v-model="params.idName" class="form-control"  placeholder="">
          </div>
        </div>
        <div class="form-group">
          <label for="" class="col-md-2 control-label">身份证号</label>
          <div class="col-md-6">
            <input type="text" v-model="params.idNo" class="form-control"  placeholder="">
          </div>
        </div>
        <div class="form-group">
          <label for="" class="col-md-2 control-label">预留手机号</label>
          <div class="col-md-6">
            <input type="text" v-model="params.phoneNo" class="form-control"  placeholder="">
          </div>
        </div>

        <div class="form-group">
          <label for="" class="col-md-2 control-label">卡号</label>
          <div class="col-md-6">
            <input type="text" v-model="params.cardNo" class="form-control"  placeholder="">
          </div>
        </div>
        <div class="form-group">
          <label for="" class="col-md-2 control-label">有效期</label>
          <div class="col-md-6">
            <input type="text" v-model="params.expDt" class="form-control"  placeholder="">
          </div>
        </div>
        <div class="form-group" v-show="params.cardType == '01'">
          <label for="" class="col-md-2 control-label">CVN2</label>
          <div class="col-md-6">
            <input type="text" v-model="params.cvn2" class="form-control"  placeholder="">
          </div>
        </div>
        <div class="form-group">
          <div class="col-sm-offset-2 col-sm-10">
            <button type="button" @click="initQuickPay" class="btn btn-default">付款</button>
          </div>
        </div>
      </form>
    </div>
    <div class="col-md-6" v-show="tabType == 2">
      <form class="form-horizontal">
        <div class="form-group">
          <label for="" class="col-md-2 control-label">验证码</label>
          <div class="col-md-6">
            <input type="text" v-model="token" class="form-control"  placeholder="">
          </div>
        </div>       
        <div class="form-group">
          <label for="" class="col-md-2 control-label">密码</label>
          <div class="col-md-6">
            <input type="password" v-model="pwd" class="form-control"  placeholder="">
          </div>
        </div>
        <div class="form-group">
          <div class="col-sm-offset-2 col-sm-10">
            <button type="button" @click="quickPay" class="btn btn-default">支付</button>

            <button type="button" @click="tabType=1" class="btn btn-default">取消</button>
          </div>
        </div>
      </form>
    </div> 
  </section>
</template>

<script>

import { randomDateNow, getSignData } from "../utils";
let cacheData = null;

export default {
  // layout: "payLayout",
  components: {
  },
  head() {
    return {
      title: "快捷支付",
    }
  },
  mounted() {

  },
  data() {
    if (cacheData) return cacheData;



    return {
      tabType: 1,
      plaOrderNo: "",//用于支付确认的系统订单
      token: "",
      pwd: "",
      params: {
        payType: "QUICK_PAY",
        amount: "200",
        subject: "内容",
        desc: "快捷支付测试",
        cardNo: "888888",
        idName: "张三",
        idNo: "1313123232423432423423423",
        phoneNo: "13522199952",
        cardType: "01",
        expDt: "2018",
        cvn2: "",
        notifyUrl: "http://www.yeepiao.com"
      }
    }
  },
  serverCacheKey() {
    // Will change every 10 secondes
    return Math.floor(Date.now() / 10000)
  },

  methods: {
    initQuickPay() {
      //公共域
      let params = { ...this.$store.state.publicParams };

      //服务
      params["service"] = "trade.initQuickPay";

      //交易订单号
      params["merOrderNo"] = randomDateNow(5);

      params = { ...params, ...this.params };

      params["signData"] = getSignData(params, this.$store.state.md5Key);
      console.log(params);
      // return;
      this.postJson("http://47.94.3.28:8071/", params).then(data => {
        if (data.code === "00") {
          this.tabType = 2;
          this.plaOrderNo = data.plaOrderNo;
          this.$store.commit("updateOrderNo", params.merOrderNo);
        } else {
          alert(data.msg);
        }
      })
    },

    quickPay() {
      if (!this.plaOrderNo) {
        alert("请先下单！");
        return;
      }
      //公共域
      let params = { ...this.$store.state.publicParams };

      //服务
      params["service"] = "trade.quickPay";

      params["plaOrderNo"] = this.plaOrderNo;
      params["token"] = this.token;
      params["pwd"] = this.pwd;

      params["signData"] = getSignData(params, this.$store.state.md5Key);
      this.postJson("http://47.94.3.28:8071/", params).then(data => {
        alert(data.msg);
      })

    }
  }
}
</script>

<style scoped>
</style>
