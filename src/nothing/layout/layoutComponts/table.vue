<template>
  <h3>table布局</h3>
  <section class="layout">
    <div class="element left">sssss</div>
    <div class="element center"></div>
    <div class="element right">s</div>
  </section>
</template>

<script>
export default {}
</script>
<style scoped>
.layout {
  display: table;
  width: 100%;
  margin-bottom: 30px;
}
.element {
  display: table-cell;
  height: 300px;
}
.left {
  width: 300px;
  background-color: aqua;
}
.right {
  width: 300px;
  background-color: blue;
}
.center {
  background-color: #000;
}
</style>
