<template>
  <div id="hello">
    <el-time-picker
      v-model="value1"
      :picker-options="{
        selectableRange: '18:30:00 - 20:30:00'
      }"
      placeholder="任意时间点"
    >
    </el-time-picker>
    <el-time-picker
      arrow-control
      v-model="value2"
      :picker-options="{
        selectableRange: '18:30:00 - 20:30:00'
      }"
      placeholder="任意时间点"
    >
    </el-time-picker>
  </div>
</template>

<script>
// const cityOptions = ["上海", "北京", "广州", "深圳"];
export default {
  name: "HelloWorld",
  props: {
    msg: String
  },
  data() {
    // const item = {
    //   date: "2016-05-02",
    //   name: "王小虎",
    //   address: "上海市普陀区金沙江路 1518 弄"
    // };
    // return {
    //   value1: new Date(2016, 9, 10, 18, 40),
    //   value2: new Date(2016, 9, 10, 18, 40)
    // };
  },
  methods: {
    handleCheckAllChange(val) {
      this.checkedCities = val ? cityOptions : [];
      this.isIndeterminate = false;
    },
    handleCheckedCitiesChange(value) {
      let checkedCount = value.length;
      this.checkAll = checkedCount === this.cities.length;
      this.isIndeterminate =
        checkedCount > 0 && checkedCount < this.cities.length;
    }
  },
  mounted() {}
};
</script>

<style lang="scss" scoped>
#hello {
  i {
    font-size: 30px;
  }
}
</style>
