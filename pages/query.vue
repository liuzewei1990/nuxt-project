<template>
  <section class="pad-10 m-top-50">
    <div class="col-md-6">
        <form class="form-horizontal">
            <div class="form-group">
                <label for="inputPassword" class="col-sm-3 control-label">接入方订单号：</label>
                <div class="col-sm-7">
                    <input type="text" v-model="$store.state.lastUpdateOrderNo" class="form-control" id="inputPassword" placeholder="">
                </div>
                <div class="col-sm-2">
                    <button type="button" @click="query('merOrderNo',$store.state.lastUpdateOrderNo)" class="btn btn-default">查询</button>
                </div>
            </div>
            <div class="form-group">
                <label for="inputPassword" class="col-sm-3 control-label">系统订单号：</label>
                <div class="col-sm-7">
                    <input type="text" v-model="plaOrderNo" class="form-control" id="inputPassword" placeholder="">
                </div>
                <div class="col-sm-2">
                    <button type="button" @click="query('plaOrderNo',plaOrderNo)" class="btn btn-default">查询</button>
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
            title: "交易查询",
        }
    },
    data() {
        return {
            service: "trade.query",
            plaOrderNo: "",
            order_info: {
                // "系统订单号：": "",
                // "交易状态：": "",
                // "交易金额：": "",
                // "结算类型：": "",
                // "接入方订单号：": "",
                // "操作员编号：": "",
                // "店铺编号：": "",
                // "终端编号：": "",
                // "购方ID：": "",
            }
        }
    },
    methods: {
        query(type, orderNo) {

            //公共域
            let params = { ...this.$store.state.publicParams };
            //服务
            params["service"] = this.service;

            params[type] = orderNo;

            params["signData"] = getSignData(params, this.$store.state.md5Key);
            this.postJson("http://to.yeepiao.com:9991", params).then(data => {
                if (data.code === "00") {
                    let d = {};
                    d["交易状态"] = dataJson.tradeStatus[data.tradeStatus];
                    d["系统订单号："] = data.plaOrderNo;
                    d["接入方订单号："] = data.merOrderNo;
                    d["交易金额："] = data.amount;
                    d["结算类型："] = data.settleType;
                    d["操作员编号："] = data.operatorId;
                    d["店铺编号："] = data.storeId;
                    d["终端编号："] = data.terminalId;
                    d["购方ID："] = data.buyerId;

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
