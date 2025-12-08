<script setup>
import MasonryGrid from "../components/MasonryGrid.vue";

// 扩充数据，模拟真实的瀑布流内容
// 使用不同的关键词获取 Unsplash 图片，确保图片长宽比和内容多样
const inspirations = [
  {
    id: 1,
    user: "Anna_Style",
    title: "Denim Tote Bag",
    img: "https://images.unsplash.com/photo-1683148754073-cfa906017a10?w=400&q=80"
  },
  {
    id: 2,
    user: "Eco_Mike",
    title: "Restored Chair",
    img: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&q=80"
  },
  {
    id: 3,
    user: "SarahC",
    title: "Embroidery Art",
    img: "https://images.unsplash.com/photo-1734873741744-759ea0a3b3e5?w=400&q=80"
  },
  {
    id: 4,
    user: "GreenLife",
    title: "DIY Planter",
    img: "https://images.unsplash.com/photo-1485968579580-b6d095142e6e?w=400&q=80"
  },
  {
    id: 5,
    user: "VintageLover",
    title: "Patchwork Jeans",
    img: "https://images.unsplash.com/photo-1584030373081-f37b7bb4fa8e?w=400&q=80"
  },
  {
    id: 6,
    user: "Creative_Jo",
    title: "Tie-Dye Shirt",
    img: "https://images.unsplash.com/photo-1598532163257-ae3c6b2524b6?w=400&q=80"
  },
  {
    id: 7,
    user: "UpcyclePro",
    title: "Bottle Vases",
    img: "https://images.unsplash.com/photo-1581539250439-c96689b516dd?w=400&q=80"
  },
  {
    id: 8,
    user: "FashionFix",
    title: "Cropped Sweater",
    img: "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=400&q=80"
  },
  {
    id: 9,
    user: "ZeroWaste",
    title: "Fabric Scraps",
    img: "https://images.unsplash.com/photo-1691430596542-19240cc2c038?w=400&q=80"
  },
  {
    id: 10,
    user: "DesignDaily",
    title: "Painted Jacket",
    img: "https://images.unsplash.com/photo-1610902815167-4ce35b38fc30?w=400&q=80"
  },
  {
    id: 11,
    user: "CraftyMom",
    title: "Kids Toy Box",
    img: "https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?w=400&q=80"
  },
  {
    id: 12,
    user: "RetroFit",
    title: "Leather Repair",
    img: "https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=400&q=80"
  },
  {
    id: 13,
    user: "PlantDad",
    title: "Macrame Hanger",
    img: "https://images.unsplash.com/photo-1744615356419-0f96f6b82449?w=400&q=80"
  },
  {
    id: 14,
    user: "SewingBee",
    title: "Custom Dress",
    img: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=400&q=80"
  }
];
</script>

<template>
  <div class="page-content">
    <h2 class="page-title">Upcycling inspiration</h2>

    <!-- 直接展示瀑布流，去除多余的 User Row -->
    <div class="feed-container">
      <MasonryGrid :items="inspirations" />
    </div>

    <!-- 到底部的提示 -->
    <div class="end-mark">
      <span>You've seen it all!</span>
    </div>
  </div>
</template>

<style scoped>
.page-title {
  text-align: center;
  color: #8fa889;
  margin-bottom: 24px;
  font-size: 22px;
  font-weight: 700;
}

.feed-container {
  min-height: 80vh; /* 确保有足够高度 */
}

.end-mark {
  text-align: center;
  padding: 30px 0 10px;
  color: #cbd5e0;
  font-size: 12px;
}
</style>
