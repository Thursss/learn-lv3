<template>
  <h3>absolute布局</h3>
  <section class="layout">
    <div class="element left">sssss</div>
    <div class="element right">s</div>
    <div class="element center">
      <div style="width: 50px">
        ccc
      </div>
      relative属性：脱离文档流，但保留占位符，其偏移位置是相对于本身在正常文档流中时的位置

脱离文档流是说设置了relative属性之后，元素不在z-index:0;的正常文档流中，其z-index的值>0，但保留占位符，就是在正常文档流中位置保留着，后继元素不能占位，然后相对于本身正常位置进行偏移。

absolute：完全脱离文档流，不保留占位符，其元素定位是相对于其父级及以上，一直追溯至设置了position:relative或absolute或fixed属性的外层元素（包含块），如果其外层元素均未设置position属性，则定位是相对于HTML文档进行的绝对定位，并不是相对于body的定位。

缺点：脱离文档流，会导致后续元素全部脱离文档流，可用行差。

作者：刘哈哈icey
链接：https://www.jianshu.com/p/926910ca77cd
来源：简书
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。</div>
  </section>
</template>

<script>
export default {}
</script>
<style scoped>
.layout {
  position: relative;
  width: 100%;
  margin-bottom: 30px;
}
.element {
  position: absolute;
  height: 300px;
}
.left {
  left: 0;
  width: 300px;
  background-color: aqua;
}
.right {
  right: 0;
  width: 300px;
  background-color: blue;
}
.center {
  left: 300px;
  right: 300px;
  background-color: #000;
}
</style>
