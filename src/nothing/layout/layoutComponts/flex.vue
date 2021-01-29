<template>
  <h3>flex布局</h3>
  <section class="layout">
    <div class="element left">sssss</div>
    <div class="element center">
      <div style="width: 50px">
        ccc
      </div>
    </div>
    <div class="element right">s</div>
  </section>
</template>

<script>
export default {}
</script>
<style scoped>
.layout {
  display: flex;
  width: 100%;
  margin-bottom: 30px;
}
.element {
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
  flex: 1;
  background-color: #000;
}
</style>
