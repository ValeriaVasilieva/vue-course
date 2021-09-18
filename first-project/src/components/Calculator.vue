<template>
  <div>
    <div class="display">
      <input v-model.number="op1" />
      <input v-model.number="op2" />
    </div>
    <div class="keyboard">
      <button @click="calculate('+')" class="btn">+</button>
      <button @click="calculate('-')" class="btn">-</button>
      <button @click="calculate('/')" class="btn">/</button>
      <button @click="calculate('*')" class="btn">*</button>
      <button @click="calculate('x')" class="btn">x <sup>y</sup></button>
      <button @click="calculate('//')" class="btn">/ нацело</button>
      <p>={{ result }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Calculator",
  data() {
    return {
      op1: 0,
      op2: 0,
      result: 0,
    };
  },
  methods: {
    calculate(action) {
      switch (action) {
        case "+":
          return this.getSum();
        case "-":
          return this.getDiff();
        case "/":
          return this.getDiv();
        case "*":
          return this.getMulti();
        case "x":
          return this.getPow();
        case "//":
          return this.getIntDiv();
      }
    },
    getSum() {
      return (this.result = this.op1 + this.op2);
    },
    getDiff() {
      return (this.result = this.op1 - this.op2);
    },
    getDiv() {
      return (this.result = this.op1 / this.op2);
    },
    getMulti() {
      return (this.result = this.op1 * this.op2);
    },
    getPow() {
      return (this.result = Math.pow(this.op1, this.op2));
    },
    getIntDiv() {
      return (this.result = parseInt(this.op1 / this.op2));
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.btn {
  height: 40px;
  margin: 10px;
  padding: 5px;
}
</style>
