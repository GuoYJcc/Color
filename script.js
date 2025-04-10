// 中国传统颜色数据
const colors = [
    {
        name: "朱砂红",
        hex: "#9B1B30",
        story: "朱砂红是中国传统色彩中最具代表性的红色之一，源自朱砂矿石。在古代，朱砂红被视为吉祥、喜庆的象征，常用于宫殿建筑和重要场合的装饰。"
    },
    {
        name: "靛青",
        hex: "#1B315E",
        story: "靛青是一种深蓝色，源自靛蓝植物的提取。在中国古代，靛青是重要的染料，被广泛用于染制衣物，象征着高贵和庄重。"
    },
    {
        name: "杏黄",
        hex: "#F8B862",
        story: "杏黄色如成熟的杏子，温暖而明亮。在中国传统文化中，杏黄色象征着丰收和富足，常用于描绘秋天的景色。"
    },
    {
        name: "黛绿",
        hex: "#426B69",
        story: "黛绿是一种深沉的绿色，源自黛石。在古代，黛绿常用于山水画中，代表着大自然的生机和永恒。"
    },
    {
        name: "绛紫",
        hex: "#8C4356",
        story: "绛紫色是一种深紫色，在古代被视为高贵的颜色。它象征着权力和尊贵，常用于皇室服饰和重要场合。"
    },
    {
        name: "月白",
        hex: "#F0F0F0",
        story: "月白色如月光般柔和，象征着纯洁和高雅。在中国传统文化中，月白色常用于描绘月光下的景色，给人以宁静之感。"
    },
    {
        name: "鸦青",
        hex: "#424C50",
        story: "鸦青色是一种深灰色，如乌鸦的羽毛。在古代绘画中，鸦青色常用于描绘远山和云雾，给人以神秘之感。"
    },
    {
        name: "胭脂",
        hex: "#9D2933",
        story: "胭脂色是一种鲜艳的红色，源自胭脂虫。在古代，胭脂是女性化妆的重要颜料，象征着美丽和魅力。"
    },
    {
        name: "竹青",
        hex: "#789F6B",
        story: "竹青色如青竹，清新自然。在中国文化中，竹子象征着坚韧和正直，竹青色则代表着这种品质。"
    },
    {
        name: "秋香",
        hex: "#D9B611",
        story: "秋香色是一种温暖的金黄色，如秋天的稻谷。它象征着丰收和喜悦，是秋天最具代表性的颜色之一。"
    },
    {
        name: "藕荷",
        hex: "#E4C6D0",
        story: "藕荷色是一种淡雅的粉紫色，如莲藕的色泽。它象征着纯洁和优雅，常用于描绘春天的景色。"
    },
    {
        name: "松绿",
        hex: "#2B5E2B",
        story: "松绿色如松树的针叶，深沉而稳重。在中国文化中，松树象征着长寿和坚韧，松绿色则代表着这种品质。"
    },
    {
        name: "黛蓝",
        hex: "#1B315E",
        story: "黛蓝色是一种深蓝色，如深邃的夜空。在古代绘画中，黛蓝色常用于描绘远山和天空，给人以广阔之感。"
    },
    {
        name: "妃红",
        hex: "#ED5736",
        story: "妃红色是一种鲜艳的橙红色，如晚霞。在古代，妃红色常用于描绘美丽的景色，象征着热情和活力。"
    },
    {
        name: "苍青",
        hex: "#2B4490",
        story: "苍青色是一种深蓝色，如苍茫的天空。在中国传统文化中，苍青色象征着广阔和深远，常用于描绘山水画。"
    },
    {
        name: "缃色",
        hex: "#F0C239",
        story: "缃色是一种明亮的黄色，如成熟的麦穗。它象征着丰收和喜悦，是秋天最具代表性的颜色之一。"
    },
    {
        name: "黛紫",
        hex: "#574266",
        story: "黛紫色是一种深紫色，如暮色中的远山。在古代绘画中，黛紫色常用于描绘神秘的景色，给人以深邃之感。"
    },
    {
        name: "茶色",
        hex: "#B35C44",
        story: "茶色如浓茶，温暖而沉稳。在中国传统文化中，茶色象征着质朴和自然，常用于描绘秋天的景色。"
    }
];

// 获取DOM元素
const colorsGrid = document.getElementById('colorsGrid');
const colorDetail = document.getElementById('colorDetail');
const colorName = document.getElementById('colorName');
const colorPreview = document.getElementById('colorPreview');
const colorStory = document.getElementById('colorStory');
const closeDetail = document.getElementById('closeDetail');

// 生成颜色卡片
function createColorCards() {
    colors.forEach(color => {
        const card = document.createElement('div');
        card.className = 'color-card';
        card.style.backgroundColor = color.hex;
        
        const name = document.createElement('div');
        name.className = 'color-name';
        name.textContent = color.name;
        
        card.appendChild(name);
        card.addEventListener('click', () => showColorDetail(color));
        colorsGrid.appendChild(card);
    });
}

// 显示颜色详情
function showColorDetail(color) {
    colorName.textContent = color.name;
    colorPreview.style.backgroundColor = color.hex;
    colorStory.textContent = color.story;
    colorDetail.style.display = 'flex';
}

// 关闭颜色详情
closeDetail.addEventListener('click', () => {
    colorDetail.style.display = 'none';
});

// 初始化
createColorCards(); 