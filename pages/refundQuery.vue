<template>
  <section class="pad-10 m-top-50">
    <div class="col-md-6">
        <form class="form-horizontal">
            <div class="form-group">
                <label for="inputPassword" class="col-sm-3 control-label">退货订单号：</label>
                <div class="col-sm-7">
                    <input type="text" v-model="refundMerOrderNo" class="form-control" id="inputPassword" placeholder="">
                </div>
                <div class="col-sm-2">
                    <button type="button" @click="refundQuery('merOrderNo',refundMerOrderNo)" class="btn btn-default">退货查询</button>
                </div>
            </div>
            <div class="form-group">
                <label for="inputPassword" class="col-sm-3 control-label">系统订单号：</label>
                <div class="col-sm-7">
                    <input type="text" v-model="refundPlaOrderNo" class="form-control" id="inputPassword" placeholder="">
                </div>
                <div class="col-sm-2">
                    <button type="button" @click="refundQuery('plaOrderNo',refundPlaOrderNo)" class="btn btn-default">退货查询</button>
                </div>
            </div>
            <div class="form-group" v-for="(item,key,index) in order_info" :key="index">
                <label class="col-sm-3 control-label">{{key}}</label>
                <div class="col-sm-9">
                    <p class="form-control-static">{{item}}</p>
                </div>
            </div>
        </form>  
    </div>
  </section>
</template>

<script>
import { randomDateNow, getSignData } from "../utils";
import dataJson from "../json/data.json";
export default {
    // layout: "payLayout",
    components: {
    },
    head() {
        return {
            title: "交易退货",
        }
    },
    data() {
        return {
            refundMerOrderNo: "",
            plaOrderNo: "",
            refundPlaOrderNo: "",
            result: "",
            order_info: {}
        }
    },
    methods: {
        refund(type, orderNo) {

            //公共域
            let params = { ...this.$store.state.publicParams };

            //服务
            params["service"] = "trade.refund";

            //退货订单号
            params["refundMerOrderNo"] = randomDateNow(5);

            params[type] = orderNo;

            params["signData"] = getSignData(params, this.$store.state.md5Key);
            this.postJson("http://to.yeepiao.com:9991", params).then(data => {
                this.result = data.msg;

                if (data.code === "00") {
                    this.refundMerOrderNo = data.plaOrderNo;
                } else {
                    // alert(data.msg);
                }
            })
        },
        refundQuery(type, orderNo) {
            //公共域
            let params = { ...this.$store.state.publicParams };

            //服务
            params["service"] = "trade.refund.query";

            params[type] = orderNo;

            params["signData"] = getSignData(params, this.$store.state.md5Key);
            this.postJson("http://to.yeepiao.com:9991", params).then(data => {

                if (data.code === "00") {
                    let d = {};
                    d["系统订单号："] = data.plaOrderNo;
                    d["接入方订单号："] = data.merOrderNo;
                    d["退货时间："] = data.refundTime;
                    d["退货状态："] = dataJson.refundStatus[data.refundStatus];
                    d["退货金额："] = data.amount;
                    this.order_info = d;
                } else {
                    alert(data.msg);
                }
            })
        }
    }
}
</script>

<style scoped>
</style>
