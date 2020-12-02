<template>
  <div id="column-list">
    <ul>
      <!-- <li>
        <div class="img-box">
          <img src="https://pic2.zhimg.com/v2-db4c82e096cbc4623b9b1961ed7b1a29_xs.jpg" alt="专栏图像">
        </div>
        <p>「大牛讲堂」秉承着“为技术干货而生”的理念，旨在通过分享人工智能与 AI 芯片领域的前沿观点、技术干货、开发者经验，打造一个开放的技术社区。正如地平线拥抱开放心态、坚持芯片赋能一样，「大牛讲堂」也希望以同样的开放心态分享知识，与AI路上的同行者一起进步。 </p>
        <a href="#">进入专栏</a>
      </li> -->
      <li v-for="item in list" :key="item.id">
        <img :src="item.img" :alt="item.title">
        <h1>{{item.title}}</h1>
        <p>{{item.introduction}}</p>
        <a :href="item.link">进入专栏</a>
      </li>
    </ul>
  </div>
</template>

<script lang='ts'>
import { defineComponent, PropType } from 'vue'

export interface ColumnProps {
  id: number;
  title: string;
  img: string;
  introduction: string;
  link: string;
}

export default defineComponent({
  name: 'ColumnList',
  props: {
    list: {
      type: Array as PropType<ColumnProps[]>,
      required: true
    }
  }
})
</script>
