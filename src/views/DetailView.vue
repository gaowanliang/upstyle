<script setup>
import { computed } from "vue";
import { useRoute, useRouter } from "vue-router";
import { ArrowLeft, Heart } from "lucide-vue-next";

import { useSimpleToast } from "../composables/useSimpleToast"; // 修正引入

// 导入本地图片
import img1 from "@/assets/production/Styling tips/Denim & Black Trousers Clean Outfit.webp";
import img2 from "@/assets/production/Styling tips/Relaxed Denim, Beige Pants.webp";
import img3 from "@/assets/production/Styling tips/Denim & Pleated Khaki.webp";
import img4 from "@/assets/production/Styling tips/Jacket & Navy Tones.webp";

// --- 教程: Denim Jacket Cuff... 本地图片 ---
import guideHeader from "@/assets/production/Denim Jacket Cuff with Sweater Patchwork/0.webp";
import guideStep1_1 from "@/assets/production/Denim Jacket Cuff with Sweater Patchwork/1.1.webp";
import guideStep1_2 from "@/assets/production/Denim Jacket Cuff with Sweater Patchwork/1.2.webp";
import guideStep2 from "@/assets/production/Denim Jacket Cuff with Sweater Patchwork/2.webp";
import guideStep3 from "@/assets/production/Denim Jacket Cuff with Sweater Patchwork/3.webp";

const route = useRoute();
const router = useRouter();
const id = parseInt(route.params.id);
const { triggerToast } = useSimpleToast(); // 使用弹窗控制器

const toggleLike = () => {
  isLiked.value = !isLiked.value;
  triggerToast(isLiked.value ? "Added to favorites" : "Removed from favorites");
};
const stylingDB = [
  {
    id: 1,
    title: "Denim & Black Trousers Clean Outfit",
    desc: "A clean, urban look featuring a dark utility denim jacket layered over a striped shirt and white tee. Paired with relaxed black trousers and finished with white sneakers for a refined, balanced silhouette.",
    img: img1,
    attrs: [
      { label: "Mid-layer", value: "Blue & White Stripe Shirt" },
      { label: "Base Layer", value: "Crew Neck T-Shirt" },
      { label: "Trousers", value: "Relaxed Black Straight Fit" },
      { label: "Shoes", value: "Gum Sole Sneakers" }
    ]
  },
  {
    id: 2,
    title: "Relaxed Denim, Beige Pants",
    desc: "Effortless weekend style combining a vintage wash denim jacket with comfortable beige chinos. The look is grounded with dark leather boots for a rugged yet sophisticated touch.",
    img: img2,
    attrs: [
      { label: "Outerwear", value: "Vintage Wash Trucker" },
      { label: "Bottoms", value: "Wide Leg Beige Chinos" },
      { label: "Layering", value: "Grey Knit Sweater" },
      { label: "Footwear", value: "Dark Leather Boots" }
    ]
  },
  {
    id: 3,
    title: "Denim & Pleated Khaki",
    desc: "A smart-casual blend inspired by Japanese workwear. The structure of the denim jacket contrasts perfectly with the soft, voluminous pleats of the khaki trousers.",
    img: img3,
    attrs: [
      { label: "Jacket", value: "Light Wash Utility" },
      { label: "Pants", value: "High Waisted Pleated" },
      { label: "Knitwear", value: "Charcoal Wool Cardigan" },
      { label: "Shoes", value: "Black Derby Shoes" }
    ]
  },
  {
    id: 4,
    title: "Jacket & Navy Tones",
    desc: "Monochromatic navy base layers make the light blue jacket pop. A modern take on the classic workwear vibe with a relaxed fit and functional accessories.",
    img: img4,
    attrs: [
      { label: "Tone", value: "Monochrome Navy" },
      { label: "Fit", value: "Boxy Fit Chore Jacket" },
      { label: "Accessory", value: "Canvas Tote Bag" },
      { label: "Shoes", value: "White Canvas Sneakers" }
    ]
  }
];

// --- 数据源 2: Upcycling Articles (改造文章 - 对应图一) ---
// 5篇图文并茂的文章库
const upcyclingDB = [
  {
    title: "Denim Jacket Cuff with Sweater Patchwork",
    heroImg: guideHeader,
    steps: [
      {
        title: "Step1: Prepare and Cut Knit Fabric",
        text: "Measure the denim cuff and cut a matching rectangular patch from the cable knit sweater. Lightly stabilize the knit fabric's raw edges to prevent fraying.",
        imgs: [guideStep1_1, guideStep1_2] // 显示两张图
      },
      {
        title: "Step2: Pin and Align the Patch",
        text: "Wrap the knit patch around the denim cuff. Pin it firmly in place, ensuring the seam where the two ends meet is neatly joined and aligned.",
        imgs: [guideStep2]
      },
      {
        title: "Step3: Stitch and Secure",
        text: "Machine or hand-sew the knit patch securely to the denim cuff, stitching along both the top and bottom edges. Finally, press the finished cuff flat.",
        imgs: [guideStep3]
      }
    ]
  },
  {
    title: "Denim Jacket Cuff with Sweater Patchwork",
    heroImg:
      "https://images.unsplash.com/photo-1660166445759-c69bb6e7f004?w=600&q=80",
    steps: [
      {
        title: "Step 1: Prepare and Cut Knit Fabric",
        text: "Measure the denim cuff and cut a matching rectangular patch from the cable knit sweater. Lightly stabilize the knit fabric raw edges to prevent fraying.",
        imgs: [
          "https://images.unsplash.com/photo-1576995853123-5a10305d93c0?w=400",
          "https://images.unsplash.com/photo-1627384113743-6bd5a479fffd?w=400"
        ]
      },
      {
        title: "Step 2: Pin and Align the Patch",
        text: "Wrap the knit patch around the denim cuff. Pin it firmly in place, ensuring the seam where the two ends meet is neatly joined and aligned.",
        imgs: [
          "https://images.unsplash.com/photo-1605518216938-7c31b7b14ad0?w=800"
        ]
      },
      {
        title: "Step 3: Stitch and Secure",
        text: "Machine or hand-sew the knit patch securely to the denim cuff, stitching along both the top and bottom edges. Finally, press the finished cuff flat.",
        imgs: [
          "https://images.unsplash.com/photo-1660166445759-c69bb6e7f004?w=600&q=80"
        ]
      }
    ]
  },
  {
    title: "DIY Denim Tote from Old Jeans",
    heroImg:
      "https://images.unsplash.com/photo-1683148754073-cfa906017a10?w=400&q=80",
    steps: [
      {
        title: "Step 1: Cut the Legs",
        text: "Cut the legs off your old jeans just below the crotch area. Save the top part for the body of the bag.",
        imgs: [
          "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=400",
          "https://images.unsplash.com/photo-1714143136372-ddaf8b606da7?w=400"
        ]
      },
      {
        title: "Step 2: Sew the Bottom",
        text: "Turn the jeans inside out and sew a strong straight stitch across the cut leg openings to close the bottom of the bag.",
        imgs: [
          "https://images.unsplash.com/photo-1734453195022-b0cbc53229ee?w=800"
        ]
      },
      {
        title: "Step 3: Add Straps",
        text: "Use the leftover leg fabric to create two long straps. Attach them securely to the waistband of the jeans.",
        imgs: [
          "https://images.unsplash.com/photo-1683148754073-cfa906017a10?w=400&q=80"
        ]
      }
    ]
  },
  {
    title: "Create a Patchwork Cushion",
    heroImg:
      "https://images.unsplash.com/photo-1730719500613-abd184fc0932?w=800&q=80",
    steps: [
      {
        title: "Step 1: Gather Scraps",
        text: "Collect various denim scraps. Cut them into equal-sized squares, about 5x5 inches each.",
        imgs: [
          "https://images.unsplash.com/photo-1550697318-16817b2dab3b?w=400",
          "https://images.unsplash.com/photo-1582719188393-bb71ca45dbb9?w=400"
        ]
      },
      {
        title: "Step 2: Arrange and Sew",
        text: "Lay out your squares in a grid pattern. Sew them together row by row, then sew the rows together.",
        imgs: [
          "https://images.unsplash.com/photo-1627123424574-724758594e93?w=800"
        ]
      }
    ]
  },
  {
    title: "Embroidery on Denim Jacket",
    heroImg:
      "https://images.unsplash.com/photo-1542272454315-4c01d7abdf4a?w=800&q=80",
    steps: [
      {
        title: "Step 1: Choose Design",
        text: "Draw or trace your desired floral pattern onto the back panel of the jacket using chalk.",
        imgs: [
          "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400",
          "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=400"
        ]
      },
      {
        title: "Step 2: Stitch",
        text: "Use a satin stitch for the petals and a stem stitch for the vines. Take your time!",
        imgs: [
          "https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?w=800"
        ]
      }
    ]
  },
  {
    title: "Upcycled Denim Plant Pot",
    heroImg:
      "https://images.unsplash.com/photo-1485968579580-b6d095142e6e?w=800&q=80",
    steps: [
      {
        title: "Step 1: Measure Pot",
        text: "Wrap a piece of denim around your plant pot to determine the length needed, adding 1 inch for seam allowance.",
        imgs: [
          "https://images.unsplash.com/photo-1485968579580-b6d095142e6e?w=600&q=80"
        ]
      },
      {
        title: "Step 2: Sew Cylinder",
        text: "Sew the ends together to form a cylinder. Fold the top edge down for a neat look.",
        imgs: [
          "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=800"
        ]
      }
    ]
  }
];

// --- 逻辑判断 ---
const foundStyle = stylingDB.find((item) => item.id === id);
const isStylingPage = computed(() => !!foundStyle);
const styleData = computed(() => foundStyle);

// 文章数据选择逻辑
const articleData = computed(() => {
  if (isStylingPage.value) return null;

  // 如果是 202，强制显示第一篇(Denim Jacket)
  if (id === 202) {
    return upcyclingDB[0];
  }

  // 其他 ID，随机展示 (保持随机性)
  const index = id % upcyclingDB.length;
  return upcyclingDB[index];
});
</script>

<template>
  <div class="page-container">
    <!-- 场景 A: Styling Tip -->
    <div v-if="isStylingPage" class="style-layout">
      <div class="style-hero">
        <img :src="styleData.img" alt="Outfit" />
        <button class="nav-back-float" @click="router.back()">
          <ArrowLeft :size="24" color="#1A202C" />
        </button>
      </div>

      <div class="style-sheet">
        <div class="sheet-handle"></div>

        <div class="style-header">
          <h1 class="style-title">{{ styleData.title }}</h1>
          <!-- 使用 toggleLike -->
          <button class="style-heart-btn" @click="toggleLike">
            <Heart
              :size="20"
              :fill="isLiked ? '#E53E3E' : 'none'"
              :color="isLiked ? '#E53E3E' : '#5F7A63'"
            />
          </button>
        </div>

        <div class="divider"></div>

        <p class="style-desc">{{ styleData.desc }}</p>

        <div class="style-attrs">
          <div
            class="attr-row"
            v-for="(attr, idx) in styleData.attrs"
            :key="idx"
          >
            <span class="attr-label">{{ attr.label }}</span>
            <span class="attr-val">{{ attr.value }}</span>
          </div>
        </div>
      </div>
    </div>

    <!-- 场景 B: Upcycling Article -->
    <div v-else class="article-layout">
      <div class="article-hero">
        <img :src="articleData.heroImg" alt="Hero" />
        <button class="nav-back-float" @click="router.back()">
          <ArrowLeft :size="24" color="#1A202C" />
        </button>
      </div>

      <div class="article-sheet">
        <div class="sheet-handle"></div>

        <div class="article-header-row">
          <h1 class="article-title">{{ articleData.title }}</h1>
          <!-- 使用 toggleLike -->
          <button class="article-heart-btn" @click="toggleLike">
            <Heart
              :size="20"
              :fill="isLiked ? '#E53E3E' : 'none'"
              :color="isLiked ? '#E53E3E' : '#5F7A63'"
            />
          </button>
        </div>

        <div class="divider"></div>

        <div class="steps-container">
          <div
            class="step-block"
            v-for="(step, idx) in articleData.steps"
            :key="idx"
          >
            <h3 class="step-title">{{ step.title }}</h3>
            <p class="step-text">{{ step.text }}</p>
            <div class="step-imgs" :class="{ 'grid-2': step.imgs.length > 1 }">
              <img v-for="(img, i) in step.imgs" :key="i" :src="img" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* 样式复用 */
.page-container {
  background: white;
  min-height: 100vh;
}
.nav-back-float {
  position: absolute;
  top: 20px;
  left: 20px;
  width: 44px;
  height: 44px;
  background: white;
  border-radius: 50%;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  z-index: 10;
}
.sheet-handle {
  width: 40px;
  height: 4px;
  background: #e2e8f0;
  border-radius: 2px;
  margin: 0 auto 20px;
}
.divider {
  height: 1px;
  background: #f0f0f0;
  margin: 20px 0;
}

.style-layout {
  position: relative;
  height: 100vh;
  overflow: hidden;
  background: #f5f5f5;
}
.style-hero {
  height: 60vh;
  width: 100%;
  position: relative;
}
.style-hero img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: top center;
}
.style-sheet {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 45vh;
  background: white;
  border-radius: 30px 30px 0 0;
  padding: 20px 24px 40px;
  box-shadow: 0 -10px 40px rgba(0, 0, 0, 0.05);
  overflow-y: auto;
  box-sizing: border-box;
}
.style-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
}
.style-title {
  font-size: 20px;
  font-weight: 700;
  color: #1a202c;
  line-height: 1.3;
  max-width: 80%;
  margin: 0;
}
.style-heart-btn {
  width: 40px;
  height: 40px;
  background: #e8efe9;
  border-radius: 50%;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}
.style-desc {
  font-size: 14px;
  color: #718096;
  line-height: 1.6;
  margin-bottom: 24px;
}
.style-attrs {
  display: flex;
  flex-direction: column;
  gap: 12px;
}
.attr-row {
  display: flex;
  align-items: baseline;
  gap: 16px;
}
.attr-label {
  width: 80px;
  font-size: 14px;
  font-weight: 700;
  color: #718096;
}
.attr-val {
  flex: 1;
  font-size: 14px;
  color: #4a5568;
}

.article-layout {
  position: relative;
  background: white;
}
.article-hero {
  height: 400px;
  width: 100%;
  position: relative;
}
.article-hero img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.article-sheet {
  position: relative;
  background: white;
  border-radius: 30px 30px 0 0;
  margin-top: -40px;
  padding: 24px;
  min-height: 500px;
}
.article-header-row {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 20px;
}
.article-title {
  font-size: 22px;
  font-weight: 800;
  color: #1a202c;
  margin: 0;
  line-height: 1.2;
}
.article-heart-btn {
  width: 40px;
  height: 40px;
  background: #f7f7f7;
  border-radius: 50%;
  border: none;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}
.steps-container {
  display: flex;
  flex-direction: column;
  gap: 32px;
  padding-bottom: 40px;
}
.step-block {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.step-title {
  font-size: 16px;
  font-weight: 700;
  color: #5f7a63;
  margin: 0;
}
.step-text {
  font-size: 15px;
  color: #4a5568;
  line-height: 1.6;
  margin: 0;
}
.step-imgs {
  margin-top: 8px;
}
.step-imgs img {
  width: 100%;
  border-radius: 12px;
  object-fit: cover;
}
.step-imgs.grid-2 {
  display: flex;
  gap: 12px;
}
.step-imgs.grid-2 img {
  width: calc(50% - 6px);
  height: 120px;
}
</style>
