// 中国传统颜色数据
const colors = [
    // 红色系
    {
        name: "朱砂红",
        hex: "#9B1B30",
        category: "red",
        story: "朱砂红是中国传统色彩中最具代表性的红色之一，源自朱砂矿石。在古代，朱砂红被视为吉祥、喜庆的象征，常用于宫殿建筑和重要场合的装饰。"
    },
    {
        name: "胭脂",
        hex: "#9D2933",
        category: "red",
        story: "胭脂色是一种鲜艳的红色，源自胭脂虫。在古代，胭脂是女性化妆的重要颜料，象征着美丽和魅力。"
    },
    {
        name: "妃红",
        hex: "#ED5736",
        category: "red",
        story: "妃红色是一种鲜艳的橙红色，如晚霞。在古代，妃红色常用于描绘美丽的景色，象征着热情和活力。"
    },
    {
        name: "石榴红",
        hex: "#F20C00",
        category: "red",
        story: "石榴红色如成熟石榴的果实，鲜艳夺目。在中国传统文化中，石榴象征着多子多福，石榴红色则代表着喜庆和吉祥。"
    },
    {
        name: "海棠红",
        hex: "#DB5A6B",
        category: "red",
        story: "海棠红色如盛开的海棠花，娇艳动人。在中国传统文化中，海棠花象征着富贵和美好，海棠红色则代表着优雅和浪漫。"
    },
    {
        name: "茜红",
        hex: "#CB3A56",
        category: "red",
        story: "茜红色源自茜草，是一种深沉的红色。在古代，茜红色常用于染制衣物，象征着高贵和典雅。"
    },

    // 蓝色系
    {
        name: "靛青",
        hex: "#1B315E",
        category: "blue",
        story: "靛青是一种深蓝色，源自靛蓝植物的提取。在中国古代，靛青是重要的染料，被广泛用于染制衣物，象征着高贵和庄重。"
    },
    {
        name: "黛蓝",
        hex: "#1B315E",
        category: "blue",
        story: "黛蓝色是一种深蓝色，如深邃的夜空。在古代绘画中，黛蓝色常用于描绘远山和天空，给人以广阔之感。"
    },
    {
        name: "苍青",
        hex: "#2B4490",
        category: "blue",
        story: "苍青色是一种深蓝色，如苍茫的天空。在中国传统文化中，苍青色象征着广阔和深远，常用于描绘山水画。"
    },
    {
        name: "天青",
        hex: "#2B4490",
        category: "blue",
        story: "天青色如晴朗的天空，清新明亮。在中国传统文化中，天青色象征着纯净和宁静，常用于描绘天空和远山。"
    },
    {
        name: "湖蓝",
        hex: "#1E9EB3",
        category: "blue",
        story: "湖蓝色如清澈的湖水，宁静而深邃。在中国传统文化中，湖蓝色象征着平静和智慧，常用于描绘水景。"
    },
    {
        name: "靛蓝",
        hex: "#165E83",
        category: "blue",
        story: "靛蓝色是一种深沉的蓝色，源自靛蓝植物的提取。在古代，靛蓝色是重要的染料，被广泛用于染制衣物。"
    },

    // 绿色系
    {
        name: "黛绿",
        hex: "#426B69",
        category: "green",
        story: "黛绿是一种深沉的绿色，源自黛石。在古代，黛绿常用于山水画中，代表着大自然的生机和永恒。"
    },
    {
        name: "竹青",
        hex: "#789F6B",
        category: "green",
        story: "竹青色如青竹，清新自然。在中国文化中，竹子象征着坚韧和正直，竹青色则代表着这种品质。"
    },
    {
        name: "松绿",
        hex: "#2B5E2B",
        category: "green",
        story: "松绿色如松树的针叶，深沉而稳重。在中国文化中，松树象征着长寿和坚韧，松绿色则代表着这种品质。"
    },
    {
        name: "柳绿",
        hex: "#AFDD22",
        category: "green",
        story: "柳绿色如嫩柳，清新活泼。在中国传统文化中，柳树象征着生机和希望，柳绿色则代表着春天的气息。"
    },
    {
        name: "碧绿",
        hex: "#2ADD9C",
        category: "green",
        story: "碧绿色如碧玉，清澈透亮。在中国传统文化中，碧绿色象征着生机和活力，常用于描绘春天的景色。"
    },
    {
        name: "青绿",
        hex: "#00E09E",
        category: "green",
        story: "青绿色是一种清新的绿色，如新生的嫩叶。在中国传统文化中，青绿色象征着生机和希望。"
    },

    // 黄色系
    {
        name: "杏黄",
        hex: "#F8B862",
        category: "yellow",
        story: "杏黄色如成熟的杏子，温暖而明亮。在中国传统文化中，杏黄色象征着丰收和富足，常用于描绘秋天的景色。"
    },
    {
        name: "秋香",
        hex: "#D9B611",
        category: "yellow",
        story: "秋香色是一种温暖的金黄色，如秋天的稻谷。它象征着丰收和喜悦，是秋天最具代表性的颜色之一。"
    },
    {
        name: "缃色",
        hex: "#F0C239",
        category: "yellow",
        story: "缃色是一种明亮的黄色，如成熟的麦穗。它象征着丰收和喜悦，是秋天最具代表性的颜色之一。"
    },
    {
        name: "鹅黄",
        hex: "#FFF143",
        category: "yellow",
        story: "鹅黄色如小鹅的绒毛，温暖而柔和。在中国传统文化中，鹅黄色象征着温暖和希望，常用于描绘春天的景色。"
    },
    {
        name: "琥珀",
        hex: "#CA6924",
        category: "yellow",
        story: "琥珀色如珍贵的琥珀，温暖而神秘。在中国传统文化中，琥珀色象征着财富和吉祥，常用于装饰和工艺品。"
    },
    {
        name: "金橙",
        hex: "#FFA631",
        category: "yellow",
        story: "金橙色如成熟的橙子，温暖而明亮。在中国传统文化中，金橙色象征着丰收和喜悦，常用于描绘秋天的景色。"
    },

    // 紫色系
    {
        name: "绛紫",
        hex: "#8C4356",
        category: "purple",
        story: "绛紫色是一种深紫色，在古代被视为高贵的颜色。它象征着权力和尊贵，常用于皇室服饰和重要场合。"
    },
    {
        name: "藕荷",
        hex: "#E4C6D0",
        category: "purple",
        story: "藕荷色是一种淡雅的粉紫色，如莲藕的色泽。它象征着纯洁和优雅，常用于描绘春天的景色。"
    },
    {
        name: "黛紫",
        hex: "#574266",
        category: "purple",
        story: "黛紫色是一种深紫色，如暮色中的远山。在古代绘画中，黛紫色常用于描绘神秘的景色，给人以深邃之感。"
    },
    {
        name: "紫檀",
        hex: "#4C221B",
        category: "purple",
        story: "紫檀色如珍贵的紫檀木，深沉而高贵。在中国传统文化中，紫檀色象征着尊贵和典雅，常用于家具和工艺品。"
    },
    {
        name: "紫罗兰",
        hex: "#8D4BBB",
        category: "purple",
        story: "紫罗兰色如盛开的紫罗兰花，优雅而神秘。在中国传统文化中，紫罗兰色象征着高贵和优雅，常用于描绘花卉。"
    },
    {
        name: "紫藤",
        hex: "#9B8FAB",
        category: "purple",
        story: "紫藤色如盛开的紫藤花，淡雅而优美。在中国传统文化中，紫藤色象征着优雅和浪漫，常用于描绘春天的景色。"
    },

    // 中性色
    {
        name: "月白",
        hex: "#F0F0F0",
        category: "neutral",
        story: "月白色如月光般柔和，象征着纯洁和高雅。在中国传统文化中，月白色常用于描绘月光下的景色，给人以宁静之感。"
    },
    {
        name: "鸦青",
        hex: "#424C50",
        category: "neutral",
        story: "鸦青色是一种深灰色，如乌鸦的羽毛。在古代绘画中，鸦青色常用于描绘远山和云雾，给人以神秘之感。"
    },
    {
        name: "茶色",
        hex: "#B35C44",
        category: "neutral",
        story: "茶色如浓茶，温暖而沉稳。在中国传统文化中，茶色象征着质朴和自然，常用于描绘秋天的景色。"
    },
    {
        name: "墨色",
        hex: "#2B2B2B",
        category: "neutral",
        story: "墨色如浓墨，深沉而庄重。在中国传统文化中，墨色是书法和绘画的基础，象征着文化和智慧。"
    },
    {
        name: "银灰",
        hex: "#C0C0C0",
        category: "neutral",
        story: "银灰色如银器，优雅而高贵。在中国传统文化中，银灰色象征着典雅和庄重，常用于装饰和工艺品。"
    },
    {
        name: "象牙",
        hex: "#FFFBF0",
        category: "neutral",
        story: "象牙色如珍贵的象牙，温润而高雅。在中国传统文化中，象牙色象征着纯洁和尊贵，常用于装饰和工艺品。"
    }
];

// 获取DOM元素
const colorsGrid = document.getElementById('colorsGrid');
const colorDetail = document.getElementById('colorDetail');
const colorName = document.getElementById('colorName');
const colorPreview = document.getElementById('colorPreview');
const colorStory = document.getElementById('colorStory');
const closeDetail = document.getElementById('closeDetail');
const hexValue = document.getElementById('hexValue');
const rgbValue = document.getElementById('rgbValue');
const categoryBtns = document.querySelectorAll('.category-btn');

// HEX转RGB函数
function hexToRgb(hex) {
    hex = hex.replace('#', '');
    const r = parseInt(hex.substring(0, 2), 16);
    const g = parseInt(hex.substring(2, 4), 16);
    const b = parseInt(hex.substring(4, 6), 16);
    return `rgb(${r}, ${g}, ${b})`;
}

// 生成颜色卡片
function createColorCards(filterCategory = 'all') {
    colorsGrid.innerHTML = '';
    const filteredColors = filterCategory === 'all' 
        ? colors 
        : colors.filter(color => color.category === filterCategory);
    
    filteredColors.forEach(color => {
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
    hexValue.textContent = color.hex;
    rgbValue.textContent = hexToRgb(color.hex);
    colorStory.textContent = color.story;
    colorDetail.style.display = 'flex';
}

// 关闭颜色详情
closeDetail.addEventListener('click', () => {
    colorDetail.style.display = 'none';
});

// 分类按钮点击事件
categoryBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // 移除所有按钮的active类
        categoryBtns.forEach(b => b.classList.remove('active'));
        // 添加当前按钮的active类
        btn.classList.add('active');
        // 根据分类筛选颜色
        createColorCards(btn.dataset.category);
    });
});

// 初始化
createColorCards(); 
createColorCards(); 