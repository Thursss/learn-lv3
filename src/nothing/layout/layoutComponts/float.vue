<template>
  <h3>float布局</h3>
  <section class="layout">
    <div class="element left">sssss</div>
    <div class="element right">s</div>
    <div class="element center">
      float：left 。沿着父容器顶部向左推入容器，如果卡住推不动了，判断当前位置能否全部显示该子容器，如果能则完成，如果不能继续找空档往里推。

缺点：脱离文档流，需要清楚浮动，**高度塌陷（float的破坏性主要是指它会使父容器的高度塌陷，也就是父元素在高度计算的时候会忽略浮动的元素）。
优点：兼容性好，比较简单

作者：刘哈哈icey
链接：https://www.jianshu.com/p/926910ca77cd
来源：简书
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
    </div>
  </section>
</template>

<script>
export default {}
</script>

<style scoped>
.layout {
  width: 100%;
  margin-bottom: 30px;
}
.element {
  height: 300px;
}
.left {
  float: left;
  width: 300px;
  background-color: aqua;
}
.right {
  float: right;
  width: 300px;
  background-color: blue;
}
.center {
  background-color: #000;
}
</style>
