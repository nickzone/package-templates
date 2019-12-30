<template>
  <div class="my-color">
    <input placeholder="颜色hash值" :value="value" @input="onInput" />
    <span
      title="点击随机生成颜色"
      class="my-color-grid"
      @click="onRandom"
      :style="{
        backgroundColor: '#' + value
      }"
    ></span>
  </div>
</template>

<script>
export default {
  name: "my-color",
  props: ["value"],
  methods: {
    onInput(e) {
      console.log(e.target.value);
      this.$emit("input", e.target.value);
    },
    onRandom() {
      const hexArr = Array(6).fill(0).reduce(cur => {
        cur.push(this.generateHex());
        return cur;
      }, []);

      this.$emit("input", hexArr.join(""));
    },
    generateHex() {
      return Math.floor(Math.random() * 17).toString(16);
    }
  }
};
</script>

<style lang="scss">
.my-color {
  display: flex;
  input {
    box-sizing: border-box;
    display: inline-block;
    height: 30px;
    border-color: #999;
    outline: none;
  }
  &-grid {
    box-sizing: border-box;
    display: inline-block;
    width: 30px;
    height: 30px;
    border: 1px solid #999;
  }
}
</style>
