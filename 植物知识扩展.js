document.addEventListener("DOMContentLoaded", function() {
  // 知识图谱数据
  window.kgData = {
nodes: {
      "芍药属": { name: "芍药属", type: "category" },
      "葫芦属": { name: "葫芦属", type: "category" },
      "半夏属": { name: "半夏属", type: "category" },
      "苍耳属": { name: "苍耳属", type: "category" },
      "唐棣属": { name: "唐棣属", type: "category" },
      "堇菜属": { name: "堇菜属", type: "category" },
      "大豆属": { name: "大豆属", type: "category" },
      "松萝属": { name: "松萝属", type: "category" },
      "射干属": { name: "射干属", type: "category" },
      "木槿属": { name: "木槿属", type: "category" },
      "菖蒲属": { name: "菖蒲属", type: "category" },
      "木瓜属": { name: "木瓜属", type: "category" },
      "木兰属": { name: "木兰属", type: "category" },
      "李属": { name: "李属", type: "category" },
      "杏属": { name: "杏属", type: "category" },
      "梨属": { name: "梨属", type: "category" },
      "杜若属": { name: "杜若属", type: "category" },
      "细辛属": { name: "细辛属", type: "category" },
      "枸杞属": { name: "枸杞属", type: "category" },
      "松属": { name: "松属", type: "category" },
      "榆属": { name: "榆属", type: "category" },
      "栝楼属": { name: "栝楼属", type: "category" },
      "大麻属": { name: "大麻属", type: "category" },
      "枳属": { name: "枳属", type: "category" },
      "栎属": { name: "栎属", type: "category" },
      "柏木属等多个属": { name: "柏木属等多个属", type: "category" },
      "柘属": { name: "柘属", type: "category" },
      "柑橘属": { name: "柑橘属", type: "category" },
      "楠木属": { name: "楠木属", type: "category" },
      "山楂属": { name: "山楂属", type: "category" },
      "柳属": { name: "柳属", type: "category" },
      "栗属": { name: "栗属", type: "category" },
      "木犀属": { name: "木犀属", type: "category" },
      "桃属": { name: "桃属", type: "category" },
      "泡桐属": { name: "泡桐属", type: "category" },
      "桑属": { name: "桑属", type: "category" },
      "高粱属": { name: "高粱属", type: "category" },
      "梓属": { name: "梓属", type: "category" },
      "梧桐属": { name: "梧桐属", type: "category" },
      "枣属": { name: "枣属", type: "category" },
      "山桐子属": { name: "山桐子属", type: "category" },
      "柏木属": { name: "柏木属", type: "category" },
      "花椒属": { name: "花椒属", type: "category" },
      "杨属": { name: "杨属", type: "category" },
      "槭属": { name: "槭属", type: "category" },
      "牡荆属": { name: "牡荆属", type: "category" },
      "女贞属": { name: "女贞属", type: "category" },
      "榛属": { name: "榛属", type: "category" },
      "豆科": { name: "豆科", type: "category" },
      "臭椿属": { name: "臭椿属", type: "category" },
      "刺榆属": { name: "刺榆属", type: "category" },
      "润楠属": { name: "润楠属", type: "category" },
      "朴属": { name: "朴属", type: "category" },
      "橉木属": { name: "橉木属", type: "category" },
      "檀香属": { name: "檀香属", type: "category" },
      "柽柳属": { name: "柽柳属", type: "category" },
      "圆柏属": { name: "圆柏属", type: "category" },
      "款冬属": { name: "款冬属", type: "category" },
      "江蓠属": { name: "江蓠属", type: "category" },
      "漆树属": { name: "漆树属", type: "category" },
      "泽泻属": { name: "泽泻属", type: "category" },
      "乌头属": { name: "乌头属", type: "category" },
      "乌蔹莓属": { name: "乌蔹莓属", type: "category" },
      "葫芦科": { name: "葫芦科", type: "category" },
      "当归属": { name: "当归属", type: "category" },
      "白茅属": { name: "白茅属", type: "category" },
      "高粱属或狗尾草属": { name: "高粱属或狗尾草属", type: "category" },
      "黍属": { name: "黍属", type: "category" },
      "稻属": { name: "稻属", type: "category" },
      "狗尾草属": { name: "狗尾草属", type: "category" },
      "藁本属": { name: "藁本属", type: "category" },
      "竹亚科下多个属": { name: "竹亚科下多个属", type: "category" },
      "蒺藜属": { name: "蒺藜属", type: "category" },
      "紫草属": { name: "紫草属", type: "category" },
      "榕属": { name: "榕属", type: "category" },
      "萱草属": { name: "萱草属", type: "category" },
      "苎麻属": { name: "苎麻属", type: "category" },
      "蒿属": { name: "蒿属", type: "category" },
      "莎草属": { name: "莎草属", type: "category" },
      "萝藦属": { name: "萝藦属", type: "category" },
      "芋属": { name: "芋属", type: "category" },
      "芒属": { name: "芒属", type: "category" },
      "芡属": { name: "芡属", type: "category" },
      "车前属": { name: "车前属", type: "category" },
      "芸苔属": { name: "芸苔属", type: "category" },
      "芫荽属": { name: "芫荽属", type: "category" },
      "菱属": { name: "菱属", type: "category" },
      "芹属": { name: "芹属", type: "category" },
      "茯苓属": { name: "茯苓属", type: "category" },
      "凌霄属": { name: "凌霄属", type: "category" },
      "苦苣菜属": { name: "苦苣菜属", type: "category" },
      "苹属": { name: "苹属", type: "category" },
      "莼属": { name: "莼属", type: "category" },
      "石蒜属": { name: "石蒜属", type: "category" },
      "慈姑属": { name: "慈姑属", type: "category" },
      "鹿茸草属": { name: "鹿茸草属", type: "category" },
      "茜草属": { name: "茜草属", type: "category" },
      "荇菜属": { name: "荇菜属", type: "category" },
      "锦葵属": { name: "锦葵属", type: "category" },
      "鸢尾属": { name: "鸢尾属", type: "category" },
      "藨草属": { name: "藨草属", type: "category" },
      "商陆属": { name: "商陆属", type: "category" },
      "菅属": { name: "菅属", type: "category" },
      "荩草属": { name: "荩草属", type: "category" },
      "菊属": { name: "菊属", type: "category" },
      "菟丝子属": { name: "菟丝子属", type: "category" },
      "菰属": { name: "菰属", type: "category" },
      "葱属": { name: "葱属", type: "category" },
      "萝卜属": { name: "萝卜属", type: "category" },
      "浮萍属": { name: "浮萍属", type: "category" },
      "打碗花属": { name: "打碗花属", type: "category" },
      "1. 芸苔属2. 菰属": { name: "1. 芸苔属2. 菰属", type: "category" },
      "葛属": { name: "葛属", type: "category" },
      "葛藟属": { name: "葛藟属", type: "category" },
      "薹草属": { name: "薹草属", type: "category" },
      "香蒲属": { name: "香蒲属", type: "category" },
      "蓍属": { name: "蓍属", type: "category" },
      "酸模属": { name: "酸模属", type: "category" },
      "飞蓬属": { name: "飞蓬属", type: "category" },
      "益母草属": { name: "益母草属", type: "category" },
      "蓼属": { name: "蓼属", type: "category" },
      "桑寄生属": { name: "桑寄生属", type: "category" },
      "藜属": { name: "藜属", type: "category" },
      "兰属": { name: "兰属", type: "category" },
      "蕨属": { name: "蕨属", type: "category" },
      "葡萄属": { name: "葡萄属", type: "category" },
      "野豌豆属": { name: "野豌豆属", type: "category" },
      "姜属": { name: "姜属", type: "category" },
      "薰衣草属": { name: "薰衣草属", type: "category" },
      "荠属": { name: "荠属", type: "category" },
      "藿香属": { name: "藿香属", type: "category" },
      "山茱萸属": { name: "山茱萸属", type: "category" },
      "樟属": { name: "樟属", type: "category" },
      "连翘属": { name: "连翘属", type: "category" },
      "樱属": { name: "樱属", type: "category" },
      "马兰属": { name: "马兰属", type: "category" },
      "小麦属": { name: "小麦属", type: "category" },
      "灵芝属": { name: "灵芝属", type: "category" },
      "八角属": { name: "八角属", type: "category" },
      "柿属": { name: "柿属", type: "category" },
      "悬钩子属": { name: "悬钩子属", type: "category" },
      "荔枝属": { name: "荔枝属", type: "category" },
      "刚竹属": { name: "刚竹属", type: "category" },
      "委陵菜属": { name: "委陵菜属", type: "category" },
      "香椿属": { name: "香椿属", type: "category" },
      "簕竹属": { name: "簕竹属", type: "category" },
      "藜芦属": { name: "藜芦属", type: "category" },
      "黄栌属": { name: "黄栌属", type: "category" },
      "构属": { name: "构属", type: "category" },
      "苹果属": { name: "苹果属", type: "category" },
      "桔梗属": { name: "桔梗属", type: "category" },
      "檫木属": { name: "檫木属", type: "category" },
      "苋属": { name: "苋属", type: "category" },
      "大麦属": { name: "大麦属", type: "category" },
      "枳椇属": { name: "枳椇属", type: "category" },
      "石耳属": { name: "石耳属", type: "category" },
      "豇豆属": { name: "豇豆属", type: "category" },
      "芭蕉属": { name: "芭蕉属", type: "category" },
      "芸香属": { name: "芸香属", type: "category" },
      "莲属": { name: "莲属", type: "category" },
      "荻属": { name: "荻属", type: "category" },
      "多个属": { name: "多个属", type: "category" },
      "芦苇属": { name: "芦苇属", type: "category" },
      "蔷薇属": { name: "蔷薇属", type: "category" },
      "芸香属": { name: "芸香属", type: "category" },
     
      "勺藥": { name: "勺藥", type: "plant", imageUrl: "图片/先秦植物/勺藥.png",description: "芍药,多年生草本花卉，花大色艳，观赏价值高，根可入药，有养血调经、敛阴止汗等功效。" },
      "匏": { name: "匏", type: "plant", imageUrl: "图片/先秦植物/匏.png",description: "匏瓜（葫芦的一种）,一年生攀缘草本植物，果实老熟后可作容器，嫩果可食用。" },
      "匏瓜": { name: "匏瓜", type: "plant", imageUrl: "图片/先秦植物/匏瓜.png",description: "匏瓜（葫芦的一种）,同“匏”的介绍。" },
      "半夏": { name: "半夏", type: "plant", imageUrl: "图片/先秦植物/半夏.png",description: "半夏,多年生草本植物，块茎可入药，有毒，有燥湿化痰、降逆止呕等功效。" },
      "卷耳": { name: "卷耳", type: "plant", imageUrl: "图片/先秦植物/卷耳.png",description: "苍耳,一年生草本植物，果实具钩刺，易附着在动物皮毛上传播。全草、根、花和果实均可入药，有散风寒、通鼻窍、祛风湿等功效。" },
      "唐棣": { name: "唐棣", type: "plant", imageUrl: "图片/先秦植物/唐棣.png",description: "唐棣（今名，也叫扶栘、红栒子等）,落叶小乔木，花白色，有观赏价值，果实可食。" },
      "嘉蔬": { name: "嘉蔬", type: "plant", imageUrl: "图片/先秦植物/嘉蔬.png",description: "泛指美味蔬菜（如葵、藿、薤等多种蔬菜）,不是特定植物名称，泛指美味的蔬菜，先秦时可能包括葵、藿、薤等多种蔬菜。" },
      "堇": { name: "堇", type: "plant", imageUrl: "图片/先秦植物/堇.png",description: "堇菜,多年生草本植物，种类繁多，花色丰富，部分可入药，有清热解毒、凉血消肿等功效。" },
      "大菽": { name: "大菽", type: "plant", imageUrl: "图片/先秦植物/大菽.png",description: "大豆,一年生草本植物，重要的粮食和油料作物，富含蛋白质和油脂。" },
      "大麥": { name: "大麥", type: "plant", imageUrl: "图片/先秦植物/大麥.png",description: "大麦,一年生草本植物，重要的粮食作物，可食用、酿造啤酒等。" },
      "女蘿": { name: "女蘿", type: "plant", imageUrl: "图片/先秦植物/女蘿.png",description: "松萝,地衣类植物，可入药，有清热解毒、止咳化痰等功效。常悬垂于深山老林的树干上。" },
      "射干": { name: "射干", type: "plant", imageUrl: "图片/先秦植物/射干.png",description: "射干,多年生草本植物，根状茎可入药，有清热解毒、祛痰利咽等功效。花形奇特，有观赏价值。" },
      "戎叔": { name: "戎叔", type: "plant", imageUrl: "图片/先秦植物/戎叔.png",description: "大豆,同“大菽”，一年生草本植物，重要的粮食和油料作物，富含蛋白质和油脂。" },
      "扶桑": { name: "扶桑", type: "plant", imageUrl: "图片/先秦植物/扶桑.png",description: "朱槿,常绿灌木，花色鲜艳，花大色美，是著名的观赏花卉，在南方多栽植于池畔、亭前、道旁和墙边，北方多盆栽观赏。" },
      "昌": { name: "昌", type: "plant", imageUrl: "图片/先秦植物/昌.png",description: "菖蒲,多年生草本植物，有香气，可入药，有开窍化痰、辟秽杀虫等功效，常用于园林水景布置。" },
      "木瓜": { name: "木瓜", type: "plant", imageUrl: "图片/先秦植物/木瓜.png",description: "木瓜,落叶乔木，果实味涩，水煮或浸渍糖液中供食用，入药有解酒、去痰、顺气、止痢等功效。" },
      "木蘭": { name: "木蘭", type: "plant", imageUrl: "图片/先秦植物/木蘭.png",description: "木兰,落叶乔木，花大而美丽，先叶开放，观赏价值高，花蕾可入药，有散风寒、通鼻窍等功效。" },
      "李": { name: "李", type: "plant", imageUrl: "图片/先秦植物/李.png",description: "李树,落叶乔木，果实（李子）可食用，品种繁多，常见的有红李、青李、黄李等。" },
      "杏": { name: "杏", type: "plant", imageUrl: "图片/先秦植物/杏.png",description: "杏树,落叶乔木，果实（杏子）可食用，果肉多汁，种仁可入药，有止咳平喘等功效。" },
      "杜": { name: "杜", type: "plant", imageUrl: "图片/先秦植物/杜.png",description: "杜梨,落叶乔木，常作梨树的砧木，花洁白如雪，具有观赏价值。" },
      "杜若": { name: "杜若", type: "plant", imageUrl: "图片/先秦植物/杜若.png",description: "杜若,多年生草本植物，花美观，可用于园林观赏，全草可入药，有疏风消肿、理气和胃等功效。" },
      "杜衡": { name: "杜衡", type: "plant", imageUrl: "图片/先秦植物/杜衡.png",description: "杜衡,多年生草本植物，全草可入药，有祛风散寒、消痰行水等功效，但有小毒，使用需谨慎。" },
      "杞": { name: "杞", type: "plant", imageUrl: "图片/先秦植物/杞.png",description: "枸杞,多分枝灌木，果实（枸杞子）是著名的中药材和滋补品，有养肝、滋肾、润肺等功效。" },
      "松": { name: "松", type: "plant", imageUrl: "图片/先秦植物/松.png",description: "松树（松属植物统称）,松属植物统称，常绿乔木，种类繁多，木材用途广泛，松脂可提取松香、松节油等。" },
      "枌": { name: "枌", type: "plant", imageUrl: "图片/先秦植物/枌.png",description: "白榆,落叶乔木，木材可用于建筑、家具等，树皮、叶、果实均可入药，种子可榨油。" },
      "果臝": { name: "果臝", type: "plant", imageUrl: "图片/先秦植物/果臝.png",description: "栝楼,多年生攀缘草本，根状茎肥厚，圆柱状，外皮黄色。果实、果皮、种子和根均可入药，有清热涤痰、宽胸散结等功效。" },
      "枲": { name: "枲", type: "plant", imageUrl: "图片/先秦植物/枲.png",description: "大麻,一年生直立草本，有纤维用、药用和毒品用之分。纤维用大麻可用于制作绳索等，药用大麻有一定药用价值，但毒品用大麻严禁使用。" },
      "枲耳": { name: "枲耳", type: "plant", imageUrl: "图片/先秦植物/枲耳.png",description: "苍耳,同“卷耳”，一年生草本植物，果实具钩刺，易附着在动物皮毛上传播。全草、根、花和果实均可入药，有散风寒、通鼻窍、祛风湿等功效。" },
      "枳": { name: "枳", type: "plant", imageUrl: "图片/先秦植物/枳.png",description: "枳树,落叶灌木或小乔木，果实可入药，有破气消积、化痰散痞等功效，也可作观赏植物及柑橘类果树的砧木。" },
      "枸": { name: "枸", type: "plant", imageUrl: "图片/先秦植物/枸.png",description: "枸杞,同“杞”，多分枝灌木，果实（枸杞子）是著名的中药材和滋补品，有养肝、滋肾、润肺等功效。" },
      "枹": { name: "枹", type: "plant", imageUrl: "图片/先秦植物/枹.png",description: "枹树,落叶乔木，木材可用于建筑、家具等，树皮可提取栲胶。" },
      "柏": { name: "柏", type: "plant", imageUrl: "图片/先秦植物/柏.png",description: "柏树（柏科植物统称）,柏科植物统称，常绿乔木或灌木，种类繁多，木材坚硬，耐腐，可供建筑、造船、家具等用。" },
      "柘": { name: "柘", type: "plant", imageUrl: "图片/先秦植物/柘.png",description: "柘树,落叶灌木或小乔木，木材黄色，质坚而致密，可作家具、弓等，根皮、茎皮、果实均可入药。" },
      "柚": { name: "柚", type: "plant", imageUrl: "图片/先秦植物/柚.png",description: "柚树,常绿乔木，果实（柚子）可食用，果肉多汁，味酸甜，果皮可提取芳香油，花、叶、果皮均可入药。" },
      "柞": { name: "柞", type: "plant", imageUrl: "图片/先秦植物/柞.png",description: "柞树（栎属部分植物）,落叶乔木，木材坚实，纹理细密，可供建筑、家具等用，叶可饲柞蚕。" },
      "柟": { name: "柟", type: "plant", imageUrl: "图片/先秦植物/柟.png",description: "楠木,常绿大乔木，木材坚硬，有香气，是优良的建筑和家具用材，属珍贵树种。" },
      "柤": { name: "柤", type: "plant", imageUrl: "图片/先秦植物/柤.png",description: "山楂,落叶乔木，果实（山楂）可食用，可加工成山楂片、果丹皮等食品，也可入药，有消食化积、活血化瘀等功效。" },
      "柳": { name: "柳", type: "plant", imageUrl: "图片/先秦植物/柳.png",description: "柳树（柳属植物统称）,柳属植物统称，落叶乔木或灌木，种类繁多，枝条细长下垂，常种于水边，有观赏价值，木材可用于制作器具，枝条可用于编织。" },
      "栗": { name: "栗", type: "plant", imageUrl: "图片/先秦植物/栗.png",description: "栗树,落叶乔木，果实（栗子）营养丰富，可食用，木材坚硬，可用于建筑、家具等。" },
      "栝": { name: "栝", type: "plant", imageUrl: "图片/先秦植物/栝.png",description: "栝楼,同“果臝”，多年生攀缘草本，根状茎肥厚，圆柱状，外皮黄色。果实、果皮、种子和根均可入药，有清热涤痰、宽胸散结等功效。" },
      "栩": { name: "栩", type: "plant", imageUrl: "图片/先秦植物/栩.png",description: "柞树（栎属部分植物）,同“柞”，落叶乔木，木材坚实，纹理细密，可供建筑、家具等用，叶可饲柞蚕。" },
      "栵": { name: "栵", type: "plant", imageUrl: "图片/先秦植物/栵.png",description: "可能指栵木（相关资料较少）,一种落叶乔木，木材可用于制作器具等，但相关资料较少。" },
      "格": { name: "格", type: "plant", imageUrl: "图片/先秦植物/格.png",description: "可能指柘树,一般认为是柘树，落叶灌木或小乔木，木材黄色，质坚而致密，可作家具、弓等，根皮、茎皮、果实均可入药。" },
      "桂": { name: "桂", type: "plant", imageUrl: "图片/先秦植物/桂.png",description: "桂花（木犀）,常绿乔木或灌木，花芳香四溢，极具观赏价值，可用于食品加工、香料提取等，木材材质致密，纹理美观。" },
      "桃": { name: "桃", type: "plant", imageUrl: "图片/先秦植物/桃.png",description: "桃树,落叶小乔木，果实鲜美多汁，是常见水果，花可供观赏，桃仁可入药。" },
      "桐": { name: "桐", type: "plant", imageUrl: "图片/先秦植物/桐.png",description: "可能指泡桐,落叶乔木，生长迅速，木材轻软，可用于制作家具、乐器等，花大而美丽，有观赏价值。" },
      "桑": { name: "桑", type: "plant", imageUrl: "图片/先秦植物/桑.png",description: "桑树,落叶乔木或灌木，叶为蚕的主要饲料，果实（桑葚）可食用，木材可制器具，树皮可造纸，根皮、果实及叶均可入药。" },
      "桔": { name: "桔", type: "plant", imageUrl: "图片/先秦植物/桔.png",description: "橘树（柑橘类统称）,常绿小乔木或灌木，果实（橘子）酸甜可口，是常见水果，果皮、果肉、种子等均可入药，具理气化痰等功效。" },
      "梁": { name: "梁", type: "plant", imageUrl: "图片/先秦植物/梁.png",description: "可能指高粱或粟的优良品种,一年生草本植物，重要的粮食作物和饲料作物，可食用、酿酒等。" },
      "梅": { name: "梅", type: "plant", imageUrl: "图片/先秦植物/梅.png",description: "梅树,落叶乔木，花先叶开放，香气浓郁，观赏价值高，果实（梅子）可食用，可加工成梅干、话梅等，也可入药。" },
      "梓": { name: "梓", type: "plant", imageUrl: "图片/先秦植物/梓.png",description: "梓树,落叶乔木，木材轻软，可供家具、乐器等用材。嫩叶可食，根皮或树皮的韧皮部（梓白皮）可入药。" },
      "梧": { name: "梧", type: "plant", imageUrl: "图片/先秦植物/梧.png",description: "梧桐树（青桐）,落叶乔木，树干端直，树皮绿色，平滑。叶大优美，是著名的庭园观赏树。木材可制作乐器等。" },
      "梧桐": { name: "梧桐", type: "plant", imageUrl: "图片/先秦植物/梧桐.png",description: "梧桐树（青桐）,同“梧”的介绍。" },
      "梨": { name: "梨", type: "plant", imageUrl: "图片/先秦植物/梨.png",description: "梨树,落叶乔木，果实（梨子）是常见水果，品种繁多，木材可用于制作家具等。" },
      "棗": { name: "棗", type: "plant", imageUrl: "图片/先秦植物/棗.png",description: "枣树,落叶乔木，果实（枣）营养丰富，可鲜食、加工成多种食品。" },
      "棘": { name: "棘", type: "plant", imageUrl: "图片/先秦植物/棘.png",description: "酸枣,落叶灌木或小乔木，果实（酸枣）可食用，味酸甜，种子可入药，有养心补肝、宁心安神等功效。" },
      "棣": { name: "棣", type: "plant", imageUrl: "图片/先秦植物/棣.png",description: "唐棣,落叶小乔木，花白色，有观赏价值，果实可食。" },
      "椅": { name: "椅", type: "plant", imageUrl: "图片/先秦植物/椅.png",description: "可能指山桐子,落叶乔木，果实含糖，可酿酒，种子含油，可制肥皂、润滑油等，木材松软，可供建筑、家具等用。" },
      "椇": { name: "椇", type: "plant", imageUrl: "图片/先秦植物/椇.png",description: "枳椇,落叶乔木，果实（枳椇子）可食用，种子可入药，有解酒毒、止渴除烦等功效，木材坚硬，纹理美观，可供建筑及制家具和美术工艺品等用。" },
      "椈": { name: "椈", type: "plant", imageUrl: "图片/先秦植物/椈.png",description: "可能指柏木,常绿乔木，木材坚韧耐腐，有香气，可用于建筑、造船、家具等，枝叶可入药，有止血、生肌等功效。" },
      "椒": { name: "椒", type: "plant", imageUrl: "图片/先秦植物/椒.png",description: "花椒,落叶小乔木，果实可作调味料，有浓郁香气，也可入药，有温中止痛、杀虫止痒等功效。" },
      "楂": { name: "楂", type: "plant", imageUrl: "图片/先秦植物/楂.png",description: "山楂,落叶乔木，果实（山楂）可食用，可加工成山楂片、果丹皮等食品，也可入药，有消食化积、活血化瘀等功效。" },
      "楊": { name: "楊", type: "plant", imageUrl: "图片/先秦植物/楊.png",description: "杨树（杨属植物统称）,杨属植物统称，落叶乔木，生长迅速，木材用途广泛，可用于造纸、建筑等，部分种类可作行道树。" },
      "楓": { name: "楓", type: "plant", imageUrl: "图片/先秦植物/楓.png",description: "枫树（槭树科植物统称）,落叶乔木或灌木，叶形优美，秋季叶色变红或变黄，极具观赏价值，部分种类的果实可食用，木材可用于制作家具等。" },
      "楚": { name: "楚", type: "plant", imageUrl: "图片/先秦植物/楚.png",description: "牡荆,落叶灌木或小乔木，果实可入药，有止咳平喘、理气止痛等功效，茎皮可造纸及制人造棉，枝叶可提取芳香油。" },
      "楚棘": { name: "楚棘", type: "plant", imageUrl: "图片/先秦植物/楚棘.png",description: "可能指酸枣,落叶灌木或小乔木，果实（酸枣）可食用，味酸甜，种子可入药，有养心补肝、宁心安神等功效。" },
      "楛": { name: "楛", type: "plant", imageUrl: "图片/先秦植物/楛.png",description: "可能指荆条,落叶灌木，枝条可用于编织，花含蜜汁，是良好的蜜源植物，根、茎、叶、果实均可入药。" },
      "楢": { name: "楢", type: "plant", imageUrl: "图片/先秦植物/楢.png",description: "可能指黄楢（相关资料较少）,落叶乔木，木材可用于建筑、家具等，树皮可提取栲胶。" },
      "楨": { name: "楨", type: "plant", imageUrl: "图片/先秦植物/楨.png",description: "可能指女贞,常绿乔木或灌木，枝叶茂密，树形整齐，可作行道树，果实（女贞子）可入药，有滋补肝肾、明目乌发等功效。" },
      "楸": { name: "楸", type: "plant", imageUrl: "图片/先秦植物/楸.png",description: "楸树,落叶乔木，树干通直，木材坚硬，纹理美观，可供建筑、家具等用，花大而美观，有观赏价值。" },
      "榆": { name: "榆", type: "plant", imageUrl: "图片/先秦植物/榆.png",description: "榆树（白榆）,落叶乔木，木材可用于建筑、家具等，树皮、叶、果实均可入药，种子可榨油。" },
      "榛": { name: "榛", type: "plant", imageUrl: "图片/先秦植物/榛.png",description: "榛树,落叶灌木或小乔木，果实（榛子）可食用，营养丰富，木材可用于制作器具等。" },
      "槐": { name: "槐", type: "plant", imageUrl: "图片/先秦植物/槐.png",description: "槐树,槐属" },
      "樗": { name: "樗", type: "plant", imageUrl: "图片/先秦植物/樗.png",description: "臭椿,落叶乔木，生长迅速，木材可用于造纸、建筑等，树皮、根皮、果实均可入药，叶可饲养樗蚕。" },
      "樞": { name: "樞", type: "plant", imageUrl: "图片/先秦植物/樞.png",description: "可能指刺榆,落叶乔木或灌木，木材坚硬，可作农具等，树皮纤维可制绳索。" },
      "樠": { name: "樠", type: "plant", imageUrl: "图片/先秦植物/樠.png",description: "可能指黄心树,常绿乔木，木材供建筑、家具等用，树皮和叶可提芳香油。" },
      "樸": { name: "樸", type: "plant", imageUrl: "图片/先秦植物/樸.png",description: "朴树,落叶乔木，木材可用于建筑、家具等，果实可食用、榨油，树皮纤维可制绳索，根、皮、嫩叶可入药。" },
      "樹木": { name: "樹木", type: "plant", imageUrl: "图片/先秦植物/樹木.png",description: "木本植物统称,不是具体植物名称，是木本植物的统称，包含众多乔木和灌木种类，如松树、柏树、杨树等。" },
      "橘": { name: "橘", type: "plant", imageUrl: "图片/先秦植物/橘.png",description: "橘树（柑橘类统称）,常绿小乔木或灌木，果实（橘子）酸甜可口，是常见水果，果皮、果肉、种子等均可入药，具理气化痰等功效。" },
      "橝": { name: "橝", type: "plant", imageUrl: "图片/先秦植物/橝.png",description: "可能指橉木,落叶乔木，木材坚硬，可用于制作家具、农具等，树皮纤维可制绳索。" },
      "橡": { name: "橡", type: "plant", imageUrl: "图片/先秦植物/橡.png",description: "橡树（栎属植物统称）,落叶或常绿乔木，木材坚实，可用于建筑、家具等，果实（橡子）可作饲料或酿酒，壳斗和树皮可提制栲胶。" },
      "檀": { name: "檀", type: "plant", imageUrl: "图片/先秦植物/檀.png",description: "檀香树,常绿小乔木，材质坚硬，香气醇厚，是贵重的木材，可用于制作工艺品、香料等，心材可入药。" },
      "檉": { name: "檉", type: "plant", imageUrl: "图片/先秦植物/檉.png",description: "柽柳,落叶小乔木或灌木，枝条细柔，姿态婆娑，花色美丽，可作观赏植物，嫩枝叶可入药，有疏风解表、解毒透疹等功效。" },
      "檖": { name: "檖", type: "plant", imageUrl: "图片/先秦植物/檖.png",description: "可能指山梨,落叶乔木，果实可食用，也可酿酒、制果酱等，木材可供建筑、家具等用。" },
      "檜": { name: "檜", type: "plant", imageUrl: "图片/先秦植物/檜.png",description: "桧树（圆柏）,常绿乔木，树冠呈圆锥形或圆形，树皮灰褐色，裂成长条片。叶有两种，鳞叶交互对生，刺叶3枚轮生。球果近圆球形，成熟时暗褐色，被白粉。" },
      "檟": { name: "檟", type: "plant", imageUrl: "图片/先秦植物/檟.png",description: "可能指楸树,落叶乔木，树干通直，木材坚硬，纹理美观，可供建筑、家具等用，花大而美观，有观赏价值。" },
      "檿": { name: "檿", type: "plant", imageUrl: "图片/先秦植物/檿.png",description: "可能指桑科的檿桑,落叶乔木，树皮坚韧，可用于造纸，木材坚硬，可作家具等，叶可饲蚕。" },
      "櫟": { name: "櫟", type: "plant", imageUrl: "图片/先秦植物/櫟.png",description: "橡树（栎属植物统称）,同“橡”，落叶或常绿乔木，木材坚实，可用于建筑、家具等，果实（橡子）可作饲料或酿酒，壳斗和树皮可提制栲胶。" },
      "款冬": { name: "款冬", type: "plant", imageUrl: "图片/先秦植物/款冬.png",description: "款冬,多年生草本植物，花蕾可入药，有润肺下气、止咳化痰等功效。" },
      "水草": { name: "水草", type: "plant", imageUrl: "图片/先秦植物/水草.png",description: "水生草本植物统称,不是特定植物名称，是水生草本植物的统称，包含众多水生植物种类，如浮萍、水葫芦、荷花等。" },
      "江離": { name: "江離", type: "plant", imageUrl: "图片/先秦植物/江離.png",description: "可能指龙须菜,多年生草本植物，可食用，也是提取琼胶的主要原料，还可作为鲍鱼等贝类的优质饲料。" },
      "沙棠": { name: "沙棠", type: "plant", imageUrl: "图片/先秦植物/沙棠.png",description: "可能为海棠类树木（具体所指不明确）,传说中的植物，据记载可能为海棠类树木，果实可食，木材可造船。但具体所指植物并不明确，相关描述多出自古代文献。" },
      "漆": { name: "漆", type: "plant", imageUrl: "图片/先秦植物/漆.png",description: "漆树,落叶乔木，其树干可割取生漆，是优良的天然涂料，木材可用于建筑、家具等，根、叶、花、果均可入药。" },
      "澤瀉": { name: "澤瀉", type: "plant", imageUrl: "图片/先秦植物/澤瀉.png",description: "泽泻,多年生水生草本植物，块茎可入药，有利水渗湿、泄热等功效。" },
      "烏喙": { name: "烏喙", type: "plant", imageUrl: "图片/先秦植物/烏喙.png",description: "乌头,多年生草本植物，块根可入药，有祛风除湿、温经止痛等功效，但有大毒，需炮制后使用。" },
      "烏足": { name: "烏足", type: "plant", imageUrl: "图片/先秦植物/烏足.png",description: "可能指乌蔹莓,草质藤本植物，全草可入药，有清热利湿、解毒消肿等功效。" },
      "牡": { name: "牡", type: "plant", imageUrl: "图片/先秦植物/牡.png",description: "可能指牡丹,多年生落叶灌木，花色泽艳丽，有“花中之王”的美誉，观赏价值极高，根皮可入药，称“丹皮”，有清热凉血、活血化瘀等功效。" },
      "牡麻": { name: "牡麻", type: "plant", imageUrl: "图片/先秦植物/牡麻.png",description: "可能指大麻,一年生直立草本，有纤维用、药用和毒品用之分。纤维用大麻可用于制作绳索等，药用大麻有一定药用价值，但毒品用大麻严禁使用。" },
      "瓟瓜": { name: "瓟瓜", type: "plant", imageUrl: "图片/先秦植物/瓟瓜.png",description: "可能指葫芦科某种瓜类（类似匏瓜）,/" },
      "瓠": { name: "瓠", type: "plant", imageUrl: "图片/先秦植物/瓠.png",description: "瓠瓜,一年生攀缘草本植物，果实老熟后可作容器，嫩果可食用。" },
      "甘棠": { name: "甘棠", type: "plant", imageUrl: "图片/先秦植物/甘棠.png",description: "棠梨,落叶乔木，常作梨树的砧木，花洁白如雪，具有观赏价值。" },
      "白昌": { name: "白昌", type: "plant", imageUrl: "图片/先秦植物/白昌.png",description: "菖蒲,多年生草本植物，有香气，可入药，能开窍化痰、辟秽杀虫，常应用于园林水景布置。" },
      "白芷": { name: "白芷", type: "plant", imageUrl: "图片/先秦植物/白芷.png",description: "白芷,多年生高大草本，根为常用中药材，有祛风除湿、通窍止痛、消肿排脓等功效。" },
      "白茅": { name: "白茅", type: "plant", imageUrl: "图片/先秦植物/白茅.png",description: "白茅,多年生草本植物，根茎可入药，有凉血止血、清热利尿的功效。嫩穗可食，也可用于编织。" },
      "石耳": { name: "石耳", type: "plant", imageUrl: "图片/先秦植物/石耳.png",description: "石耳,地衣类植物，形似耳状，可食用，也可入药，有清热解毒、止咳祛痰等功效。" },
      "祩葉": { name: "祩葉", type: "plant", imageUrl: "图片/先秦植物/祩葉.png",description: "暂未明确,暂未明确对应现代植物名，相关信息较少。" },
      "禾": { name: "禾", type: "plant", imageUrl: "图片/先秦植物/禾.png",description: "谷类作物统称（如稻、黍、稷、麦、菽等）,是人类重要的粮食来源，不同谷类作物在形态、生长环境等方面存在差异。" },
      "秫": { name: "秫", type: "plant", imageUrl: "图片/先秦植物/秫.png",description: "黏高粱或黏粟,一年生草本植物，与高粱或粟类似，但籽粒有黏性。可用于酿酒、制作黏食等。" },
      "秬": { name: "秬", type: "plant", imageUrl: "图片/先秦植物/秬.png",description: "黑黍,黍的一种，一年生草本植物，籽实黑色，可食用，也可用于酿酒。" },
      "稌": { name: "稌", type: "plant", imageUrl: "图片/先秦植物/稌.png",description: "稻（糯稻）,一年生水生草本，是重要的粮食作物，颖果富含淀粉，口感软糯，可制作糕点、酿酒等。" },
      "稷": { name: "稷", type: "plant", imageUrl: "图片/先秦植物/稷.png",description: "粟（谷子）,一年生草本植物，是古老的粮食作物，脱壳后为小米，营养丰富，可煮粥、酿酒等。" },
      "稻": { name: "稻", type: "plant", imageUrl: "图片/先秦植物/稻.png",description: "水稻,一年生水生草本，是全球重要的粮食作物，为人类提供主要的淀粉来源。" },
      "稿本": { name: "稿本", type: "plant", imageUrl: "图片/先秦植物/稿本.png",description: "藁本,多年生草本植物，根茎可入药，有祛风散寒、除湿止痛的功效。" },
      "穄": { name: "穄", type: "plant", imageUrl: "图片/先秦植物/穄.png",description: "糜子（黍的一种）,一年生草本植物，籽实可食用，可制作炒米等食品，也可用于酿酒。" },
      "竹": { name: "竹", type: "plant", imageUrl: "图片/先秦植物/竹.png",description: "竹类植物统称,多年生禾本科竹亚科植物，种类繁多，具有重要的经济价值，可用于建筑、造纸、家具、工艺品制作等，部分竹笋可食用。" },
      "符": { name: "符", type: "plant", imageUrl: "图片/先秦植物/符.png",description: "可能指符竹（具体所指存疑）,可能是竹类的一种，相关信息较少。" },
      "筍": { name: "筍", type: "plant", imageUrl: "图片/先秦植物/筍.png",description: "竹笋,竹子的幼芽，是部分竹类植物在生长过程中的幼嫩部分，味道鲜美，是常见的蔬菜。" },
      "篠": { name: "篠", type: "plant", imageUrl: "图片/先秦植物/篠.png",description: "小竹（细竹）,通常指一些小型的竹子，竹材可用于制作小型器具、工艺品等。" },
      "簜": { name: "簜", type: "plant", imageUrl: "图片/先秦植物/簜.png",description: "可能指大竹（具体所指存疑）,可能是大型竹子，竹材可用于建筑、大型器具制作等。" },
      "粟": { name: "粟", type: "plant", imageUrl: "图片/先秦植物/粟.png",description: "粟（谷子）,同上述“稷”的介绍，一年生草本植物，脱壳后为小米，营养丰富，可煮粥、酿酒等。" },
      "粱": { name: "粱", type: "plant", imageUrl: "图片/先秦植物/粱.png",description: "可能指高粱或粟的优良品种,一年生草本植物，可作为粮食，食用方法多样，也可用于酿酒。" },
      "糜草": { name: "糜草", type: "plant", imageUrl: "图片/先秦植物/糜草.png",description: "可能指蒺藜,一年生草本植物，果实可入药，有平肝解郁、活血祛风、明目、止痒等功效。" },
      "紫": { name: "紫", type: "plant", imageUrl: "图片/先秦植物/紫.png",description: "可能指紫草,多年生草本植物，根可入药，有凉血，活血，解毒透疹的功效。" },
      "細秬": { name: "細秬", type: "plant", imageUrl: "图片/先秦植物/細秬.png",description: "可能指一种较为细小的黑黍品种,一年生草本植物，类似秬（黑黍），但植株或籽粒相对细小，可食用或酿酒。" },
      "細稷": { name: "細稷", type: "plant", imageUrl: "图片/先秦植物/細稷.png",description: "可能指一种较为细小的粟（谷子）品种,一年生草本植物，类似稷（粟），但植株或籽粒相对细小，可食用。" },
      "細荔": { name: "細荔", type: "plant", imageUrl: "图片/先秦植物/細荔.png",description: "可能指细叶薜荔,攀援或匍匐灌木，常附生于树木、墙壁等，果实可食用或药用。" },
      "細菽": { name: "細菽", type: "plant", imageUrl: "图片/先秦植物/細菽.png",description: "可能指小豆（赤小豆等豆类）,一年生草本植物，种子可食用，富含蛋白质等营养成分，可制作豆沙、煮粥等。" },
      "細萯": { name: "細萯", type: "plant", imageUrl: "图片/先秦植物/細萯.png",description: "可能指一种小型的萱草类植物,多年生草本植物，类似萱草，但植株相对细小，花可观赏，部分种类的花蕾可能可食用（需处理）。" },
      "紵": { name: "紵", type: "plant", imageUrl: "图片/先秦植物/紵.png",description: "苎麻,多年生草本植物，茎皮纤维可用于纺织，是重要的纤维作物。" },
      "綏": { name: "綏", type: "plant", imageUrl: "图片/先秦植物/綏.png",description: "可能指白蒿,二年生草本植物，可入药，有清热利湿、凉血止血等功效，幼苗可食用。" },
      "繁": { name: "繁", type: "plant", imageUrl: "图片/先秦植物/繁.png",description: "白蒿,同上述“綏”的介绍，二年生草本植物，可入药，幼苗可食用。" },
      "臺": { name: "臺", type: "plant", imageUrl: "图片/先秦植物/臺.png",description: "可能指莎草,多年生草本植物，多生长在潮湿处，块茎可入药，有行气解郁、调经止痛的功效。" },
      "舜": { name: "舜", type: "plant", imageUrl: "图片/先秦植物/舜.png",description: "木槿,落叶灌木，花朵色彩丰富，有单瓣、重瓣等多种形态，观赏价值高，也可入药，具有清热利湿、凉血解毒的功效。" },
      "艾": { name: "艾", type: "plant", imageUrl: "图片/先秦植物/艾.png",description: "艾草,多年生草本或略成半灌木状，植株有浓烈香气，全草可入药，有温经止血、散寒止痛等功效，艾叶还可用于艾灸。" },
      "芄蘭": { name: "芄蘭", type: "plant", imageUrl: "图片/先秦植物/芄蘭.png",description: "萝藦,多年生草质藤本，全株可药用，有补益精气、通乳消肿的功效。其果实、茎皮纤维等也有一定用途。" },
      "芋": { name: "芋", type: "plant", imageUrl: "图片/先秦植物/芋.png",description: "芋头,多年生块茎植物，常作一年生作物栽培。块茎富含淀粉，可食用，是常见的蔬菜。" },
      "芒": { name: "芒", type: "plant", imageUrl: "图片/先秦植物/芒.png",description: "芒草,多年生草本植物，秆粗壮，可用于造纸、编织等，也可作为饲料。" },
      "芝栭": { name: "芝栭", type: "plant", imageUrl: "图片/先秦植物/芝栭.png",description: "暂未明确,暂未明确对应现代植物名，相关信息较少，可能指菌类或其他植物，难以确切考证。" },
      "芡": { name: "芡", type: "plant", imageUrl: "图片/先秦植物/芡.png",description: "芡实,一年生大型水生草本。种子含淀粉，供食用、酿酒及制副食品用，亦可入药，有补脾止泻、益肾涩精等功效。" },
      "芣苡": { name: "芣苡", type: "plant", imageUrl: "图片/先秦植物/芣苡.png",description: "车前草,一年生或二年生草本，全草可入药，有利尿通淋、渗湿止泻、明目、祛痰的功效，幼苗可食用。" },
      "芥": { name: "芥", type: "plant", imageUrl: "图片/先秦植物/芥.png",description: "芥菜,一年生草本，叶盐腌供食用；种子及全草供药用，能化痰平喘，消肿止痛；种子磨粉称芥末，为调味料；榨出的油称芥子油。" },
      "芧": { name: "芧", type: "plant", imageUrl: "图片/先秦植物/芧.png",description: "可能指三棱草,多年生草本植物，常生长在湿地、水边，块茎可入药，有行气破血，消积止痛的功效。" },
      "芫": { name: "芫", type: "plant", imageUrl: "图片/先秦植物/芫.png",description: "芫荽,一、二年生草本植物，是常见的调味料，有特殊香气，全株可食用。" },
      "芭": { name: "芭", type: "plant", imageUrl: "图片/先秦植物/芭.png",description: "芭蕉,多年生草本植物，植株高大，果实（芭蕉）可食用，叶、根、花也可入药，有清热、利尿等功效。" },
      "芰": { name: "芰", type: "plant", imageUrl: "图片/先秦植物/芰.png",description: "菱角,一年生水生草本植物，果实菱角可食用，嫩茎可作蔬菜，全草可入药，有清热解毒、利尿通乳等功效。" },
      "芷": { name: "芷", type: "plant", imageUrl: "图片/先秦植物/芷.png",description: "白芷,多年生高大草本，根为常用中药材，有祛风除湿、通窍止痛、消肿排脓等功效。" },
      "芸": { name: "芸", type: "plant", imageUrl: "图片/先秦植物/芸.png",description: "芸香,多年生草本植物，有特殊香气，全草可入药，有祛风镇痉、通经、杀虫等功效。" },
      "芹": { name: "芹", type: "plant", imageUrl: "图片/先秦植物/芹.png",description: "芹菜,一、二年生草本植物，是常见蔬菜，富含维生素和膳食纤维，有平肝清热、祛风利湿等功效。" },
      "苓": { name: "苓", type: "plant", imageUrl: "图片/先秦植物/苓.png",description: "茯苓,多孔菌科真菌，寄生于松树根部，是传统中药材，有利水渗湿、健脾、宁心的功效。" },
      "苕": { name: "苕", type: "plant", imageUrl: "图片/先秦植物/苕.png",description: "可能指凌霄花,攀援藤本植物，花大色艳，观赏价值高，花可入药，有行血去瘀、凉血祛风的功效。" },
      "苦菜": { name: "苦菜", type: "plant", imageUrl: "图片/先秦植物/苦菜.png",description: "苦苣菜,一年生或二年生草本，全草可入药，有清热解毒、凉血止血等功效，嫩茎叶可食用。" },
      "苴": { name: "苴", type: "plant", imageUrl: "图片/先秦植物/苴.png",description: "可能指麻的雌株（苴麻）,一年生草本植物，茎皮纤维可用于纺织，种子可榨油。" },
      "苹": { name: "苹", type: "plant", imageUrl: "图片/先秦植物/苹.png",description: "苹（田字草）,多年生水生蕨类植物，常生长在浅水中，可作饲料，也可入药，有清热解毒、利水消肿等功效。" },
      "茅": { name: "茅", type: "plant", imageUrl: "图片/先秦植物/茅.png",description: "白茅,多年生草本植物，根茎可入药，有凉血止血、清热利尿的功效。嫩穗可食，也可用于编织。" },
      "茆": { name: "茆", type: "plant", imageUrl: "图片/先秦植物/茆.png",description: "莼菜,多年生水生宿根草本，嫩叶可供食用，口感滑嫩，富含胶质，有清热、利水、消肿、解毒的功效。" },
      "茈": { name: "茈", type: "plant", imageUrl: "图片/先秦植物/茈.png",description: "可能指紫草,多年生草本植物，根可入药，有凉血，活血，解毒透疹的功效。" },
      "茢": { name: "茢", type: "plant", imageUrl: "图片/先秦植物/茢.png",description: "可能指石蒜,多年生草本植物，鳞茎可入药，但有小毒，花型奇特，具有观赏价值。" },
      "茨": { name: "茨", type: "plant", imageUrl: "图片/先秦植物/茨.png",description: "茨菰,多年生水生草本植物，球茎可食用，也可入药，有清热解毒、散结消肿的功效。" },
      "茸": { name: "茸", type: "plant", imageUrl: "图片/先秦植物/茸.png",description: "可能指鹿茸草,一年生草本植物，全草可入药，有清热解毒、凉血止血等功效。" },
      "茹": { name: "茹", type: "plant", imageUrl: "图片/先秦植物/茹.png",description: "可能指茜草,多年生草质攀援藤木，根可作红色染料，也是中药材，有凉血止血、活血化瘀等功效。" },
      "荁": { name: "荁", type: "plant", imageUrl: "图片/先秦植物/荁.png",description: "可能指堇菜科植物（如黄花堇菜）,多年生草本植物，部分种类可入药，有清热解毒、消肿等功效。" },
      "荆": { name: "荆", type: "plant", imageUrl: "图片/先秦植物/荆.png",description: "牡荆,落叶灌木或小乔木，果实可入药，有止咳平喘、理气止痛等功效，茎皮可造纸及制人造棉，枝叶可提取芳香油。" },
      "荇菜": { name: "荇菜", type: "plant", imageUrl: "图片/先秦植物/荇菜.png",description: "荇菜,多年生水生草本植物，叶片小巧，漂浮于水面，花黄色，观赏性佳，全草可入药，有清热解毒、利尿消肿的功效，嫩茎和叶可作蔬菜。" },
      "草木": { name: "草木", type: "plant", imageUrl: "图片/先秦植物/草木.png",description: "草类和木类植物统称,不是特定植物名称，是草类和木类植物的统称，涵盖众多植物种类。" },
      "荊": { name: "荊", type: "plant", imageUrl: "图片/先秦植物/荊.png",description: "牡荆,落叶灌木或小乔木，果实可入药，有止咳平喘、理气止痛等功效，茎皮可造纸及制人造棉，枝叶可提取芳香油。" },
      "荍": { name: "荍", type: "plant", imageUrl: "图片/先秦植物/荍.png",description: "锦葵,二年生或多年生直立草本，花大色艳，可供观赏，全草可入药，有清热利湿、理气通便的功效。" },
      "荏菽": { name: "荏菽", type: "plant", imageUrl: "图片/先秦植物/荏菽.png",description: "大豆,一年生草本植物，重要的粮食和油料作物，富含蛋白质和油脂。" },
      "荓": { name: "荓", type: "plant", imageUrl: "图片/先秦植物/荓.png",description: "可能指马蔺,多年生密丛草本，根状茎粗壮，木质，须根粗而长，黄白色，少分枝。叶基生，坚韧，灰绿色，条形或狭剑形，长约50厘米，宽4 - 6毫米，顶端渐尖，基部鞘状，带红紫色，无明显的中脉。" },
      "荔": { name: "荔", type: "plant", imageUrl: "图片/先秦植物/荔.png",description: "可能指荔草（马蔺）,同上述马蔺介绍。多年生密丛草本，根状茎粗壮，木质，须根粗而长，黄白色，少分枝。叶基生，坚韧，灰绿色，条形或狭剑形，长约50厘米，宽4 - 6毫米，顶端渐尖，基部鞘状，带红紫色，无明显的中脉。" },
      "荷": { name: "荷", type: "plant", imageUrl: "图片/先秦植物/荷.png",description: "荷花（莲花）,多年生水生草本花卉，地下茎（藕）可食用，莲子可食用和药用，花大而美丽，极具观赏价值，全身皆可入药。" },
      "荷華": { name: "荷華", type: "plant", imageUrl: "图片/先秦植物/荷華.png",description: "荷花（莲花）,同“荷”的介绍，多年生水生草本花卉，地下茎（藕）可食用，莲子可食用和药用，花大而美丽，极具观赏价值，全身皆可入药。" },
      "荻": { name: "荻", type: "plant", imageUrl: "图片/先秦植物/荻.png",description: "荻,多年生草本植物，多生长在水边，茎秆可用于造纸、编织等，具有保持水土等生态功能。" },
      "荼": { name: "荼", type: "plant", imageUrl: "图片/先秦植物/荼.png",description: "可能指苦菜（苦苣菜）,一年生或二年生草本，全草可入药，有清热解毒、凉血止血等功效，嫩茎叶可食用。" },
      "莘": { name: "莘", type: "plant", imageUrl: "图片/先秦植物/莘.png",description: "可能指细辛,多年生草本植物，全草可入药，但有小毒，有祛风散寒、通窍止痛、温肺化饮的功效。" },
      "莞": { name: "莞", type: "plant", imageUrl: "图片/先秦植物/莞.png",description: "可能指水葱,多年生宿根挺水草本植物，常生长在湖边、水边、浅水塘等地，可用于水景布置，茎秆可用于编织。" },
      "莠": { name: "莠", type: "plant", imageUrl: "图片/先秦植物/莠.png",description: "狗尾草,一年生草本植物，常见杂草，可作饲料。" },
      "莧陸": { name: "莧陸", type: "plant", imageUrl: "图片/先秦植物/莧陸.png",description: "商陆,多年生草本植物，根可入药，但有一定毒性，需谨慎使用，有逐水消肿、通利二便、解毒散结的功效。" },
      "莪": { name: "莪", type: "plant", imageUrl: "图片/先秦植物/莪.png",description: "莪蒿,多年生草本植物，嫩茎叶可食用，也可入药，有清热、凉血、利湿等功效。" },
      "菁": { name: "菁", type: "plant", imageUrl: "图片/先秦植物/菁.png",description: "芜菁,二年生草本植物，块根可食用，类似萝卜，可炒食、腌制等，也可作饲料。" },
      "菁茅": { name: "菁茅", type: "plant", imageUrl: "图片/先秦植物/菁茅.png",description: "可能指白茅,多年生草本植物，根茎可入药，有凉血止血、清热利尿的功效。嫩穗可食，也可用于编织。" },
      "菅": { name: "菅", type: "plant", imageUrl: "图片/先秦植物/菅.png",description: "菅草,多年生草本，茎秆坚韧，可用于造纸、编织等。" },
      "菉": { name: "菉", type: "plant", imageUrl: "图片/先秦植物/菉.png",description: "可能指荩草,一年生草本，可作饲料，全草还可入药，有止咳定喘、解毒杀虫的功效。" },
      "菊": { name: "菊", type: "plant", imageUrl: "图片/先秦植物/菊.png",description: "菊花,多年生草本，是著名观赏花卉，品种繁多，花色丰富。同时，菊花也可入药，有散风清热、平肝明目、清热解毒的功效。" },
      "菌簵": { name: "菌簵", type: "plant", imageUrl: "图片/先秦植物/菌簵.png",description: "可能指一种竹子（具体种类难定）,/" },
      "菟": { name: "菟", type: "plant", imageUrl: "图片/先秦植物/菟.png",description: "可能指菟丝子,一年生寄生草本，是一种常见的寄生植物，常寄生于豆科、菊科等植物上，种子可入药，有补益肝肾、固精缩尿等功效。" },
      "菫": { name: "菫", type: "plant", imageUrl: "图片/先秦植物/菫.png",description: "可能指堇菜,多年生草本，种类繁多，花色丰富，部分可入药，有清热解毒、凉血消肿等功效。" },
      "菰": { name: "菰", type: "plant", imageUrl: "图片/先秦植物/菰.png",description: "茭白,多年生水生草本，具匍匐根状茎。其嫩茎基部经黑粉菌寄生后膨大，形成茭白，是常见的蔬菜。果实（菰米）可食用，全草还可入药，有清热除烦、通利二便等功效。" },
      "菱": { name: "菱", type: "plant", imageUrl: "图片/先秦植物/菱.png",description: "菱角,一年生水生草本，果实菱角可食用，富含淀粉，嫩茎可作蔬菜，全草可入药，有清热解毒、利尿通乳等功效。" },
      "菲": { name: "菲", type: "plant", imageUrl: "图片/先秦植物/菲.png",description: "可能指菲菜（韭菜）,多年生草本，具特殊气味，是常见蔬菜，可作蔬菜食用，也可入药，有温中开胃、行气活血等功效。" },
      "菽": { name: "菽", type: "plant", imageUrl: "图片/先秦植物/菽.png",description: "豆类总称,包括大豆、绿豆、红豆等多种豆类植物，是重要的粮食和经济作物，富含蛋白质、油脂等营养成分。" },
      "萊": { name: "萊", type: "plant", imageUrl: "图片/先秦植物/萊.png",description: "可能指萝卜,二年或一年生草本，根可食用，是常见蔬菜，有多种颜色和形状，营养丰富。" },
      "萍": { name: "萍", type: "plant", imageUrl: "图片/先秦植物/萍.png",description: "浮萍,漂浮水生植物，生长迅速，是鱼类等水生动物的食物，也可作为水质监测植物。" },
      "萑": { name: "萑", type: "plant", imageUrl: "图片/先秦植物/萑.png",description: "可能指芦苇一类植物,多年生水生或湿生高大禾草，多生长在水边，茎秆可用于造纸、编织等，具有保持水土等生态功能。" },
      "萩": { name: "萩", type: "plant", imageUrl: "图片/先秦植物/萩.png",description: "荻,多年生草本，多生长在水边，茎秆可用于造纸、编织等，具有保持水土等生态功能。" },
      "萯": { name: "萯", type: "plant", imageUrl: "图片/先秦植物/萯.png",description: "可能指萱草,多年生草本，花大而美丽，具有观赏价值。花蕾可食用（需处理，新鲜时含秋水仙碱），根可入药，有清热利尿、凉血止血等功效。" },
      "葍": { name: "葍", type: "plant", imageUrl: "图片/先秦植物/葍.png",description: "可能指小旋花,多年生草本，全草可入药，有调经活血、滋阴补虚的功效。" },
      "葑": { name: "葑", type: "plant", imageUrl: "图片/先秦植物/葑.png",description: "可能指芜菁或茭白,1. 若指芜菁：二年生草本，块根可食用，类似萝卜，可炒食、腌制等，也可作饲料。2. 若指茭白：多年生水生草本，嫩茎基部经黑粉菌寄生后膨大形成茭白，可作蔬菜，果实（菰米）可食用，全草可入药。" },
      "葛": { name: "葛", type: "plant", imageUrl: "图片/先秦植物/葛.png",description: "葛藤,多年生藤本，块根可食用，也可入药，有解肌退热、生津止渴等功效。茎皮纤维可制绳索。" },
      "葛藟": { name: "葛藟", type: "plant", imageUrl: "图片/先秦植物/葛藟.png",description: "葡萄科葛藟属植物（类似葡萄藤）,落叶木质藤本，果实可酿酒，根、茎、叶可入药，有解毒、祛风湿等功效。" },
      "葛虆": { name: "葛虆", type: "plant", imageUrl: "图片/先秦植物/葛虆.png",description: "葡萄科葛藟属植物（类似葡萄藤）,落叶木质藤本，果实可酿酒，根、茎、叶可入药，有解毒、祛风湿等功效。" },
      "葦": { name: "葦", type: "plant", imageUrl: "图片/先秦植物/葦.png",description: "芦苇,多年生水生或湿生高大禾草，多生长在水边，茎秆可用于造纸、编织等，具有保持水土等生态功能。" },
      "葭": { name: "葭", type: "plant", imageUrl: "图片/先秦植物/葭.png",description: "芦苇,同“苇”，多年生水生或湿生高大禾草，多生长在水边，茎秆可用于造纸、编织等，具有保持水土等生态功能。" },
      "葵": { name: "葵", type: "plant", imageUrl: "图片/先秦植物/葵.png",description: "可能指冬葵,一年生草本，幼苗或嫩茎叶可食用，全草可入药，有清热利湿、滑肠通便等功效。" },
      "蒯": { name: "蒯", type: "plant", imageUrl: "图片/先秦植物/蒯.png",description: "蒯草,多年生草本，茎可用于编织席子等，多生长在水边或湿地。" },
      "蒲": { name: "蒲", type: "plant", imageUrl: "图片/先秦植物/蒲.png",description: "香蒲,多年生水生或沼生草本，根状茎乳白色。地上茎粗壮，向上渐细，高1.3 - 2米。叶条形，长40 - 70厘米，宽0.4 - 0.9厘米，光滑无毛，上部扁平，下部腹面微凹，背面逐渐隆起呈凸形，横切面呈半圆形，细胞间隙大，海绵状；叶鞘抱茎。" },
      "蒹": { name: "蒹", type: "plant", imageUrl: "图片/先秦植物/蒹.png",description: "可能指未长穗的芦苇,多年生水生或湿生高大禾草，多生长在水边，茎秆可用于造纸、编织等，具有保持水土等生态功能。" },
      "蒺梨": { name: "蒺梨", type: "plant", imageUrl: "图片/先秦植物/蒺梨.png",description: "可能指蒺藜,一年生草本植物，果实可入药，有平肝解郁、活血祛风、明目、止痒等功效。" },
      "蒺蔾": { name: "蒺蔾", type: "plant", imageUrl: "图片/先秦植物/蒺蔾.png",description: "可能指蒺藜,同“蒺梨”的介绍，一年生草本植物，果实可入药，有平肝解郁、活血祛风、明目、止痒等功效。" },
      "蒿": { name: "蒿", type: "plant", imageUrl: "图片/先秦植物/蒿.png",description: "蒿属植物统称（如艾蒿、青蒿等）,种类繁多，多为一年生或多年生草本，部分可入药，如艾蒿有温经止血、散寒止痛等功效，青蒿可提取青蒿素，治疗疟疾。" },
      "蓀": { name: "蓀", type: "plant", imageUrl: "图片/先秦植物/蓀.png",description: "可能指水菖蒲,多年生草本植物，有香气，可入药，有化痰开窍、健脾利湿的功效，常生长在水边。" },
      "蓍": { name: "蓍", type: "plant", imageUrl: "图片/先秦植物/蓍.png",description: "蓍草,多年生草本，全草可入药，有解毒消肿、止血止痛等功效，也常用于占卜。" },
      "蓨": { name: "蓨", type: "plant", imageUrl: "图片/先秦植物/蓨.png",description: "可能指羊蹄,多年生草本，根可入药，有清热通便、凉血止血、杀虫等功效，嫩茎和叶可食用，但需处理。" },
      "蓫": { name: "蓫", type: "plant", imageUrl: "图片/先秦植物/蓫.png",description: "可能指商陆,多年生草本植物，根可入药，但有一定毒性，需谨慎使用，有逐水消肿、通利二便、解毒散结的功效。" },
      "蓬": { name: "蓬", type: "plant", imageUrl: "图片/先秦植物/蓬.png",description: "可能指飞蓬,一年生或多年生草本，种类较多，部分可入药，有清热解毒、利湿止痒等功效。" },
      "蓷": { name: "蓷", type: "plant", imageUrl: "图片/先秦植物/蓷.png",description: "益母草,一年生或二年生草本，全草可入药，有活血调经、利尿消肿等功效，是妇科常用药。" },
      "蓼": { name: "蓼", type: "plant", imageUrl: "图片/先秦植物/蓼.png",description: "蓼属植物统称（如红蓼、水蓼等）,种类繁多，多为一年生或多年生草本，部分可食用，部分可入药，如红蓼可观赏，水蓼有消肿解毒、利尿等功效。" },
      "蔆": { name: "蔆", type: "plant", imageUrl: "图片/先秦植物/蔆.png",description: "菱角,一年生水生草本，果实菱角可食用，富含淀粉，嫩茎可作蔬菜，全草可入药，有清热解毒、利尿通乳等功效。" },
      "蔚": { name: "蔚", type: "plant", imageUrl: "图片/先秦植物/蔚.png",description: "可能指牡蒿,多年生草本，全草可入药，有清热、凉血、解暑等功效。" },
      "蔞": { name: "蔞", type: "plant", imageUrl: "图片/先秦植物/蔞.png",description: "可能指蒌蒿,多年生草本，嫩茎可食用，是一种常见野菜，全草可入药，有清热、利湿、解毒等功效。" },
      "蔦": { name: "蔦", type: "plant", imageUrl: "图片/先秦植物/蔦.png",description: "可能指桑寄生,常绿寄生小灌木，常寄生于桑树等多种树木上，全株可入药，有补肝肾、强筋骨、祛风湿、安胎等功效。" },
      "蔾": { name: "蔾", type: "plant", imageUrl: "图片/先秦植物/蔾.png",description: "藜,藜是一种常见的杂草，也可作为野菜食用。它适应性强，能在多种土壤中生长。全草可入药，有清热利湿、杀虫止痒等功效。" },
      "蕉": { name: "蕉", type: "plant", imageUrl: "图片/先秦植物/蕉.png",description: "香蕉（或芭蕉属植物）,一般指香蕉，是重要的热带水果。植株高大，生长迅速，果实富含多种维生素和矿物质，经济价值高。" },
      "蕕": { name: "蕕", type: "plant", imageUrl: "图片/先秦植物/蕕.png",description: "可能指芜荑,即芜荑，是榆科植物大果榆果实的加工品。有驱虫、消积等药用价值。" },
      "蕙": { name: "蕙", type: "plant", imageUrl: "图片/先秦植物/蕙.png",description: "蕙兰,蕙兰是中国国家重点二级保护野生植物，是一种观赏价值很高的兰花。花香浓郁，叶姿优美。" },
      "蕡": { name: "蕡", type: "plant", imageUrl: "图片/先秦植物/蕡.png",description: "大麻的果实,指大麻的果实。大麻是一种古老的作物，有纤维用、药用和毒品用之分。" },
      "蕢": { name: "蕢", type: "plant", imageUrl: "图片/先秦植物/蕢.png",description: "可能指慈姑,一般认为是泽泻科植物慈姑。它是常见的水生蔬菜，球茎可食用。" },
      "蕨": { name: "蕨", type: "plant", imageUrl: "图片/先秦植物/蕨.png",description: "蕨菜（蕨类植物）,蕨菜是一种常见的野生蔬菜，富含多种维生素和矿物质。其植株具有一定的观赏价值。" },
      "蕭": { name: "蕭", type: "plant", imageUrl: "图片/先秦植物/蕭.png",description: "艾蒿,指艾蒿，是一种常见的中药材。具有驱蚊、散寒、温经等功效。" },
      "薁": { name: "薁", type: "plant", imageUrl: "图片/先秦植物/薁.png",description: "可能指野葡萄,一般指野葡萄，果实可酿酒，植株可用于绿化。" },
      "薇": { name: "薇", type: "plant", imageUrl: "图片/先秦植物/薇.png",description: "野豌豆,指野豌豆，是优良的牧草和绿肥植物。" },
      "薋": { name: "薋", type: "plant", imageUrl: "图片/先秦植物/薋.png",description: "可能指蒺藜,一般认为是蒺藜，有药用价值，可平肝解郁、活血祛风等。" },
      "薑": { name: "薑", type: "plant", imageUrl: "图片/先秦植物/薑.png",description: "生姜,即生姜，是常用的调味品和中药材。具有解表散寒、温中止呕等功效。" },
      "薔": { name: "薔", type: "plant", imageUrl: "图片/先秦植物/薔.png",description: "蔷薇,一般指蔷薇，是常见的观赏花卉。花美丽，有香气。" },
      "薜": { name: "薜", type: "plant", imageUrl: "图片/先秦植物/薜.png",description: "薜荔,薜荔是一种攀援或匍匐灌木，常攀附于树木、墙壁等。果实可制作凉粉。" },
      "薜荔": { name: "薜荔", type: "plant", imageUrl: "图片/先秦植物/薜荔.png",description: "薜荔,同“薜”的介绍" },
      "薤": { name: "薤", type: "plant", imageUrl: "图片/先秦植物/薤.png",description: "薤白,薤白是一种常见的野菜，也可入药。有通阳散结、行气导滞等功效。" },
      "薰": { name: "薰", type: "plant", imageUrl: "图片/先秦植物/薰.png",description: "可能指薰衣草,一般指薰衣草，是一种著名的香料植物。花香浓郁，可提取精油。" },
      "薺": { name: "薺", type: "plant", imageUrl: "图片/先秦植物/薺.png",description: "荠菜,荠菜是常见的野菜，味道鲜美，营养丰富。" },
      "藋": { name: "藋", type: "plant", imageUrl: "图片/先秦植物/藋.png",description: "可能指藜藿（以藿香为例）,一般指藜藿，可能是藜和藿香的统称。这里以藿香为例，藿香是常用的中药材，有化湿醒脾、辟秽和中、解暑等功效。" },
      "藍": { name: "藍", type: "plant", imageUrl: "图片/先秦植物/藍.png",description: "蓼蓝,一般指蓼蓝，是一种传统的染料植物，可提取蓝色染料。" },
      "藙": { name: "藙", type: "plant", imageUrl: "图片/先秦植物/藙.png",description: "可能指山茱萸,一般认为是山茱萸，其果实是传统中药材，有补益肝肾、收敛固脱等功效。" },
      "藚": { name: "藚", type: "plant", imageUrl: "图片/先秦植物/藚.png",description: "可能指泽泻,一般认为是泽泻，是常见的水生草本植物，其块茎可入药，有利水渗湿等功效。" },
      "藜": { name: "藜", type: "plant", imageUrl: "图片/先秦植物/藜.png",description: "藜,藜是常见杂草，也可作野菜。适应性强，全草可入药，有清热利湿等功效。" },
      "藟": { name: "藟", type: "plant", imageUrl: "图片/先秦植物/藟.png",description: "可能指野葡萄,一般指野葡萄，果实可酿酒，植株可用于绿化。" },
      "藻": { name: "藻", type: "plant", imageUrl: "图片/先秦植物/藻.png",description: "藻类植物,藻类植物种类繁多，大多生长在水中。能进行光合作用，是水生生态系统的重要生产者，部分藻类可食用或药用。" },
      "藿": { name: "藿", type: "plant", imageUrl: "图片/先秦植物/藿.png",description: "藿香,一般指藿香，是常用中药材，有化湿醒脾、辟秽和中、解暑等功效。" },
      "蘄": { name: "蘄", type: "plant", imageUrl: "图片/先秦植物/蘄.png",description: "蕲艾,一般指蕲艾，是艾草的一种，比普通艾草挥发油含量高，药用价值好，常用于艾灸。" },
      "蘆": { name: "蘆", type: "plant", imageUrl: "图片/先秦植物/蘆.png",description: "芦苇,指芦苇，是常见的水生植物，多生长在水边。茎秆可用于造纸等，具有保持水土等生态功能。" },
      "蘋": { name: "蘋", type: "plant", imageUrl: "图片/先秦植物/蘋.png",description: "苹（田字草）,一般指田字草，是水生蕨类植物，常生长在浅水中。" },
      "蘋藻": { name: "蘋藻", type: "plant", imageUrl: "图片/先秦植物/蘋藻.png",description: "蘋（田字草）和藻类植物,蘋指田字草，藻指藻类，这里可能泛指水生植物。介绍同“蘋”和“藻”相关内容。" },
      "蘘荷": { name: "蘘荷", type: "plant", imageUrl: "图片/先秦植物/蘘荷.png",description: "蘘荷,蘘荷是多年生草本植物，根茎可入药，有活血调经、镇咳祛痰等功效，也可作蔬菜食用。" },
      "蘙": { name: "蘙", type: "plant", imageUrl: "图片/先秦植物/蘙.png",description: "暂未明确,具体所指植物不太明确，可能是一种生长在阴湿处的植物。" },
      "蘞": { name: "蘞", type: "plant", imageUrl: "图片/先秦植物/蘞.png",description: "可能指葡萄科某种藤本植物（类似野葡萄）,可能指葡萄科的某种藤本植物，类似野葡萄。" },
      "蘢": { name: "蘢", type: "plant", imageUrl: "图片/先秦植物/蘢.png",description: "暂未明确,具体所指植物不明确。" },
      "蘩": { name: "蘩", type: "plant", imageUrl: "图片/先秦植物/蘩.png",description: "白蒿,一般指白蒿，是菊科植物，可入药，有清热利湿等功效。" },
      "蘭": { name: "蘭", type: "plant", imageUrl: "图片/先秦植物/蘭.png",description: "兰花（兰属植物）,通常指兰花，是著名的观赏花卉，具有高雅的花姿和浓郁的香气，部分种类是国家保护植物。" },
      "蘭槐": { name: "蘭槐", type: "plant", imageUrl: "图片/先秦植物/蘭槐.png",description: "白芷,一般认为是白芷，是常用中药材，有祛风除湿、通窍止痛等功效。" },
      "豆": { name: "豆", type: "plant", imageUrl: "图片/先秦植物/豆.png",description: "豆类植物,豆类植物种类繁多，如大豆、绿豆等，是重要的粮食和经济作物，富含蛋白质等营养成分。" },
      "豐本": { name: "豐本", type: "plant", imageUrl: "图片/先秦植物/豐本.png",description: "韭菜,一般指韭菜，是常见蔬菜，具有特殊的辛香味，可多次收割。" },
      "豫章": { name: "豫章", type: "plant", imageUrl: "图片/先秦植物/豫章.png",description: "樟树,一般指樟树，是常见的乔木，木材有香气，可用于制作家具等，也是优良的绿化树种。" },
      "赤木": { name: "赤木", type: "plant", imageUrl: "图片/先秦植物/赤木.png",description: "暂未明确（可能指某种木材呈红色的树木）,具体所指植物不明确，可能是指某种木材呈红色的树木。" },
      "辛夷": { name: "辛夷", type: "plant", imageUrl: "图片/先秦植物/辛夷.png",description: "木兰科植物望春花、玉兰等的花蕾,指木兰科植物望春花、玉兰等的花蕾，是传统中药材，有散风寒、通鼻窍等功效。" },
      "連": { name: "連", type: "plant", imageUrl: "图片/先秦植物/連.png",description: "连翘,一般指连翘，是常见的观赏和药用植物，早春先叶开花，满枝金黄。果实可入药，有清热解毒等功效。" },
      "郁": { name: "郁", type: "plant", imageUrl: "图片/先秦植物/郁.png",description: "郁李,一般指郁李，是蔷薇科植物，花美丽，可观赏，果实可食用，种子可入药。" },
      "雚": { name: "雚", type: "plant", imageUrl: "图片/先秦植物/雚.png",description: "荻,一般指荻，是禾本科植物，多生长在水边，茎秆可用于造纸等。" },
      "靡草": { name: "靡草", type: "plant", imageUrl: "图片/先秦植物/靡草.png",description: "暂未明确（可能指柔弱易倒伏的草类）,具体所指植物不明确，可能是指一些柔弱、易倒伏的草类。" },
      "鞠": { name: "鞠", type: "plant", imageUrl: "图片/先秦植物/鞠.png",description: "菊花,指菊花，是著名的观赏花卉，也是中药材，有散风清热、平肝明目等功效。" },
      "韭": { name: "韭", type: "plant", imageUrl: "图片/先秦植物/韭.png",description: "韭菜,同“豐本”，即韭菜。" },
      "馬夫": { name: "馬夫", type: "plant", imageUrl: "图片/先秦植物/馬夫.png",description: "暂未明确,具体所指植物不明确。" },
      "馬蘭": { name: "馬蘭", type: "plant", imageUrl: "图片/先秦植物/馬蘭.png",description: "马兰,指马兰，是常见的野菜，也可入药，有凉血散瘀、解毒消肿等功效。" },
      "駁": { name: "駁", type: "plant", imageUrl: "图片/先秦植物/駁.png",description: "暂未明确,具体所指植物不明确。" },
      "鬱": { name: "鬱", type: "plant", imageUrl: "图片/先秦植物/鬱.png",description: "郁李,同前面“郁”，指郁李等。" },
      "鬻": { name: "鬻", type: "plant", imageUrl: "图片/先秦植物/鬻.png",description: "暂未明确,具体所指植物不明确。" },
      "麥": { name: "麥", type: "plant", imageUrl: "图片/先秦植物/麥.png",description: "小麦,指小麦，是重要的粮食作物，磨成面粉后可制作多种食品。" },
      "麷": { name: "麷", type: "plant", imageUrl: "图片/先秦植物/麷.png",description: "可能指大麦,可能指大麦，是粮食作物，可食用，也可用于酿造啤酒等。" },
      "麻": { name: "麻", type: "plant", imageUrl: "图片/先秦植物/麻.png",description: "大麻,一般指大麻，有纤维用、药用和毒品用之分。纤维用大麻可用于制作绳索等，药用大麻有一定药用价值，但毒品用大麻严禁使用。" },
      "黍": { name: "黍", type: "plant", imageUrl: "图片/先秦植物/黍.png",description: "黍子,指黍子，是粮食作物，籽实煮熟后有黏性。" },
      "木堇": { name: "木堇", type: "plant", imageUrl: "图片/先秦植物/木堇.png",description: "木槿,指木槿，是常见的观赏灌木，花朵美丽，有单瓣、重瓣等多种类型，也可入药。" },
      "瓟": { name: "瓟", type: "plant", imageUrl: "图片/先秦植物/瓟.png",description: "可能指葫芦,一般指葫芦，是常见的蔬菜和观赏植物，果实形状多样，嫩果可食用，老果可作容器。" },
      "菖": { name: "菖", type: "plant", imageUrl: "图片/先秦植物/菖.png",description: "菖蒲,一般指菖蒲，是多年生草本植物，有香气，可入药，有开窍化痰、辟秽杀虫等功效，也常用于园林水景布置。" },
      "苔": { name: "苔", type: "plant", imageUrl: "图片/先秦植物/苔.png",description: "苔藓植物,苔藓植物种类繁多，多生长在阴湿环境，能保持水土，对环境变化敏感，可作为环境指示植物。" },
      "白稻": { name: "白稻", type: "plant", imageUrl: "图片/先秦植物/白稻.png",description: "水稻,指水稻，是重要的粮食作物，是全球一半以上人口的主食。" },
      "杝": { name: "杝", type: "plant", imageUrl: "图片/先秦植物/杝.png",description: "暂未明确,具体所指植物不明确。" },
      "莱": { name: "莱", type: "plant", imageUrl: "图片/先秦植物/莱.png",description: "可能指萝卜,一般指萝卜，是常见蔬菜，营养丰富，有多种颜色和形状。" },
      "留夷": { name: "留夷", type: "plant", imageUrl: "图片/先秦植物/留夷.png",description: "暂未明确（可能是一种香草）,具体所指植物不明确，可能是一种香草。" },
      "浮萍": { name: "浮萍", type: "plant", imageUrl: "图片/先秦植物/浮萍.png",description: "浮萍,浮萍是漂浮水生植物，生长迅速，是鱼类等水生动物的食物，也可作为水质监测植物。" },
      "伏苓": { name: "伏苓", type: "plant", imageUrl: "图片/先秦植物/伏苓.png",description: "茯苓,即茯苓，是多孔菌科真菌，寄生于松树根部，是传统中药材，有利水渗湿、健脾等功效。" },
      "芝": { name: "芝", type: "plant", imageUrl: "图片/先秦植物/芝.png",description: "灵芝,一般指灵芝，是多孔菌科真菌，有药用价值，被视为祥瑞之物。" },
      "樧": { name: "樧", type: "plant", imageUrl: "图片/先秦植物/樧.png",description: "暂未明确,具体所指植物不明确。" },
      "宿莽": { name: "宿莽", type: "plant", imageUrl: "图片/先秦植物/宿莽.png",description: "可能指莽草,一般认为是莽草，是一种有毒植物，也可入药，有祛风止痛、消肿散结等功效。" },
      "蒿蔞": { name: "蒿蔞", type: "plant", imageUrl: "图片/先秦植物/蒿蔞.png",description: "可能指蒌蒿,可能指蒌蒿，是常见野菜，有清香气味，营养丰富。" },
      "蓝": { name: "蓝", type: "plant", imageUrl: "图片/先秦植物/蓝.png",description: "蓼蓝,一般指蓼蓝，是传统的染料植物，可提取蓝色染料。" },
      "白薠": { name: "白薠", type: "plant", imageUrl: "图片/先秦植物/白薠.png",description: "暂未明确（可能是某种莎草科植物）,具体所指植物不明确，可能是某种莎草科植物。" },
      "鴈膳": { name: "鴈膳", type: "plant", imageUrl: "图片/先秦植物/鴈膳.png",description: "暂未明确,具体所指植物不明确。" },
      "冬蔥": { name: "冬蔥", type: "plant", imageUrl: "图片/先秦植物/冬蔥.png",description: "冬葱,指冬葱，是葱的一种，可作蔬菜食用，有特殊的辛辣味。" },
      "櫟社": { name: "櫟社", type: "plant", imageUrl: "图片/先秦植物/櫟社.png",description: "可能指栎树,可能指栎树，是重要的用材树种，木材坚硬，可用于制作家具等，其果实可作饲料。" },
      "王瓜": { name: "王瓜", type: "plant", imageUrl: "图片/先秦植物/王瓜.png",description: "王瓜,指王瓜，是葫芦科植物，果实、根可入药，有清热、生津等功效。" },
      "萹": { name: "萹", type: "plant", imageUrl: "图片/先秦植物/萹.png",description: "萹蓄,一般指萹蓄，是蓼科植物，可入药，有清热利尿等功效。" },
      "柿": { name: "柿", type: "plant", imageUrl: "图片/先秦植物/柿.png",description: "柿子树,指柿子树，是常见的果树，果实甜美多汁，营养丰富。" },
      "稰": { name: "稰", type: "plant", imageUrl: "图片/先秦植物/稰.png",description: "暂未明确,具体所指植物不明确。" },
      "大水腸": { name: "大水腸", type: "plant", imageUrl: "图片/先秦植物/大水腸.png",description: "暂未明确,具体所指植物不明确。" },
      "藑茅": { name: "藑茅", type: "plant", imageUrl: "图片/先秦植物/藑茅.png",description: "可能指旋花科植物打碗花,常见杂草，全草可入药，有健脾益气、利尿、调经等功效。常生长于田间、荒地、路旁。" },
      "青莎": { name: "青莎", type: "plant", imageUrl: "图片/先秦植物/青莎.png",description: "可能指香附子,多年生草本植物，其根茎为常用中药材，能理气解郁、调经止痛。常生长在山坡荒地草丛中或水边潮湿处。" },
      "苦桃": { name: "苦桃", type: "plant", imageUrl: "图片/先秦植物/苦桃.png",description: "可能指山桃,落叶小乔木，早春开花，花先于叶开放，具有观赏价值。果实可酿酒，种仁可入药。" },
      "葭葦": { name: "葭葦", type: "plant", imageUrl: "图片/先秦植物/葭葦.png",description: "芦苇,常见水生植物，茎秆可用于造纸、编织等，具有保持水土、净化水质等生态功能。" },
      "蘧": { name: "蘧", type: "plant", imageUrl: "图片/先秦植物/蘧.png",description: "可能指蓬蘽,落叶灌木，果实酸甜可食，也可酿酒。全株及根可入药，有消炎解毒等功效。" },
      "青梁": { name: "青梁", type: "plant", imageUrl: "图片/先秦植物/青梁.png",description: "青粱米（粟的一种）,粟的一种，是中国古代重要的粮食作物之一，营养价值较高，可煮粥等食用。" },
      "大荔": { name: "大荔", type: "plant", imageUrl: "图片/先秦植物/大荔.png",description: "可能指荔枝,著名的热带水果，果肉晶莹剔透，香甜多汁，经济价值高。" },
      "箈": { name: "箈", type: "plant", imageUrl: "图片/先秦植物/箈.png",description: "可能指刚竹,竹类植物，竿可作小型建筑用材和各种竹器。" },
      "莞蒲": { name: "莞蒲", type: "plant", imageUrl: "图片/先秦植物/莞蒲.png",description: "菖蒲,多年生草本植物，有香气，可入药，有开窍化痰、辟秽杀虫等功效，常用于园林水景布置。" },
      "茹藘": { name: "茹藘", type: "plant", imageUrl: "图片/先秦植物/茹藘.png",description: "茜草,多年生草质攀援藤木，根可作红色染料，也是中药材，有凉血止血、活血化瘀等功效。" },
      "莽草": { name: "莽草", type: "plant", imageUrl: "图片/先秦植物/莽草.png",description: "莽草,常绿灌木或小乔木，有祛风止痛、消肿散结等功效，但有剧毒，使用时需谨慎。" },
      "菉竹": { name: "菉竹", type: "plant", imageUrl: "图片/先秦植物/菉竹.png",description: "可能指淡竹,竹类植物，竿可作各种竹器，也可用于造纸。" },
      "大秬": { name: "大秬", type: "plant", imageUrl: "图片/先秦植物/大秬.png",description: "黑黍,黍的一种，是粮食作物，籽实可食用，也可酿酒。" },
      "黃粱": { name: "黃粱", type: "plant", imageUrl: "图片/先秦植物/黃粱.png",description: "黄粱米（粟的一种）,粟的一种，是粮食作物，可煮粥等食用，营养丰富。" },
      "茝": { name: "茝", type: "plant", imageUrl: "图片/先秦植物/茝.png",description: "白芷,常用中药材，有祛风除湿、通窍止痛等功效。" },
      "三葉": { name: "三葉", type: "plant", imageUrl: "图片/先秦植物/三葉.png",description: "可能指三叶委陵菜,多年生草本植物，全草可入药，有清热解毒、散瘀止血等功效。" },
      "蔥": { name: "蔥", type: "plant", imageUrl: "图片/先秦植物/蔥.png",description: "葱,常见蔬菜和调味品，有特殊的辛辣味，能增进食欲，也可入药，有发汗解表等功效。" },
      "櫄": { name: "櫄", type: "plant", imageUrl: "图片/先秦植物/櫄.png",description: "可能指香椿,落叶乔木，嫩叶可食用，有独特的香味，木材可用于制作家具。" },
      "大稷": { name: "大稷", type: "plant", imageUrl: "图片/先秦植物/大稷.png",description: "可能指高粱,重要的粮食作物和饲料作物，可食用、酿酒等。" },
      "櫑葛": { name: "櫑葛", type: "plant", imageUrl: "图片/先秦植物/櫑葛.png",description: "可能指葛藤,多年生藤本植物，块根可食用，也可入药，有解肌退热等功效。茎皮纤维可制绳索。" },
      "栭": { name: "栭", type: "plant", imageUrl: "图片/先秦植物/栭.png",description: "可能指栗属植物（如板栗）,如板栗，是著名的坚果，营养丰富，可食用。" },
      "白棠": { name: "白棠", type: "plant", imageUrl: "图片/先秦植物/白棠.png",description: "可能指杜梨,落叶乔木，常作梨树的砧木，花洁白如雪，具有观赏价值。" },
      "簬": { name: "簬", type: "plant", imageUrl: "图片/先秦植物/簬.png",description: "可能指簕竹,竹类植物，竿可作棚架用材和造纸原料。" },
      "山蔾": { name: "山蔾", type: "plant", imageUrl: "图片/先秦植物/山蔾.png",description: "可能指藜芦,多年生草本植物，根及根茎可入药，但有剧毒，需严格控制使用。" },
      "櫨": { name: "櫨", type: "plant", imageUrl: "图片/先秦植物/櫨.png",description: "可能指黄栌,落叶灌木或小乔木，秋季叶片变红，色彩鲜艳，是著名的观赏树种。" },
      "蘪蕪": { name: "蘪蕪", type: "plant", imageUrl: "图片/先秦植物/蘪蕪.png",description: "芎藭,多年生草本植物，根茎可入药，有活血行气、祛风止痛等功效。" },
      "楮": { name: "楮", type: "plant", imageUrl: "图片/先秦植物/楮.png",description: "构树,落叶乔木，树皮平滑，浅灰色或灰褐色，不易裂，全株含乳汁。其韧皮纤维是造纸的高级原料，根和种子均可入药，树液可治皮肤病。" },
      "赤棠": { name: "赤棠", type: "plant", imageUrl: "图片/先秦植物/赤棠.png",description: "山荆子,落叶乔木，果实可酿酒或制果酱，也是优良的观赏树种和苹果的砧木。" },
      "桔梗": { name: "桔梗", type: "plant", imageUrl: "图片/先秦植物/桔梗.png",description: "桔梗,多年生草本植物，根可入药，有宣肺、利咽、祛痰、排脓等功效。花大而美丽，也可用于观赏。" },
      "石蘭": { name: "石蘭", type: "plant", imageUrl: "图片/先秦植物/石蘭.png",description: "石蒜,多年生草本植物，鳞茎可入药，但有小毒。花型奇特，色彩鲜艳，具有观赏价值。" },
      "细樛杞": { name: "细樛杞", type: "plant", imageUrl: "图片/先秦植物/细樛杞.png",description: "可能指枸杞属某种植物（如宁夏枸杞）,如宁夏枸杞，果实（枸杞子）是著名的中药材和滋补品，有养肝、滋肾、润肺等功效。" },
      "蓮": { name: "蓮", type: "plant", imageUrl: "图片/先秦植物/蓮.png",description: "莲,多年生水生草本植物，全身都是宝。莲子可食用和药用，莲藕可做菜，荷叶可入药、包裹食物等。" },
      "枣": { name: "枣", type: "plant", imageUrl: "图片/先秦植物/枣.png",description: "枣树,落叶乔木，果实（枣）营养丰富，可鲜食、加工成多种食品。" },
      "游龍": { name: "游龍", type: "plant", imageUrl: "图片/先秦植物/游龍.png",description: "红蓼,一年生草本植物，常生长在水边湿地，花穗大，色泽鲜艳，具有观赏价值。果实可入药，有活血、止痛等功效。" },
      "白梓": { name: "白梓", type: "plant", imageUrl: "图片/先秦植物/白梓.png",description: "可能指梓树,落叶乔木，木材轻软，可供家具、乐器等用材。嫩叶可食，根皮或树皮的韧皮部（梓白皮）可入药。" },
      "檍": { name: "檍", type: "plant", imageUrl: "图片/先秦植物/檍.png",description: "可能指檫木,落叶乔木，木材坚硬致密，有香气，是优良的用材树种。" },
      "莧": { name: "莧", type: "plant", imageUrl: "图片/先秦植物/莧.png",description: "苋菜,一年生草本植物，是常见的蔬菜，营养丰富，有绿苋、红苋等多个品种。" },
      "苽": { name: "苽", type: "plant", imageUrl: "图片/先秦植物/苽.png",description: "菰（茭白）,多年生水生草本植物，嫩茎基部经黑粉菌寄生后膨大，形成茭白，是常见的蔬菜。果实可食用，称菰米。" },
      "大樛杞": { name: "大樛杞", type: "plant", imageUrl: "图片/先秦植物/大樛杞.png",description: "可能指枸杞属较大植株的种类,如北方常见的枸杞，果实可入药，有滋补肝肾等功效。" },
      "杶": { name: "杶", type: "plant", imageUrl: "图片/先秦植物/杶.png",description: "可能指香椿,落叶乔木，嫩叶可食用，有独特的香味，木材可用于制作家具。" },
      "藁本": { name: "藁本", type: "plant", imageUrl: "图片/先秦植物/藁本.png",description: "藁本,多年生草本植物，根茎可入药，有祛风、散寒、除湿、止痛等功效。" },
      "白黍": { name: "白黍", type: "plant", imageUrl: "图片/先秦植物/白黍.png",description: "黍的一种（籽实白色）,籽实白色，是粮食作物，可食用，也可酿酒。" },
      "女羅": { name: "女羅", type: "plant", imageUrl: "图片/先秦植物/女羅.png",description: "松萝,地衣类植物，可入药，有清热解毒、止咳化痰等功效。常悬垂于深山老林的树干上。" },
      "大萯": { name: "大萯", type: "plant", imageUrl: "图片/先秦植物/大萯.png",description: "可能指萱草,多年生草本植物，花大而美丽，具有观赏价值。花蕾可食用，称黄花菜，但新鲜时含有秋水仙碱，需处理后食用。" },
      "三秀": { name: "三秀", type: "plant", imageUrl: "图片/先秦植物/三秀.png",description: "灵芝,多孔菌科真菌，有药用价值，被视为祥瑞之物。" },
      "穱": { name: "穱", type: "plant", imageUrl: "图片/先秦植物/穱.png",description: "可能指一种早熟的谷物,具体所指不太明确，推测与禾本科谷物相关。" },
      "穛": { name: "穛", type: "plant", imageUrl: "图片/先秦植物/穛.png",description: "可能指一种谷物收获方式或特定谷物,具体植物难以确定，可能与禾本科作物有关。" },
      "揭車": { name: "揭車", type: "plant", imageUrl: "图片/先秦植物/揭車.png",description: "可能指芸香,多年生草本植物，有特殊的香气，全草可入药，有祛风镇痉、通经、杀虫等功效。" },
      "諼草": { name: "諼草", type: "plant", imageUrl: "图片/先秦植物/諼草.png",description: "可能指萱草,多年生草本植物，花大而美丽，具有观赏价值。花蕾可食用，称黄花菜，但新鲜时含有秋水仙碱，需处理后食用。" },
      "葦苕": { name: "葦苕", type: "plant", imageUrl: "图片/先秦植物/葦苕.png",description: "芦苇的花穗,芦苇是常见水生植物，茎秆可用于造纸、编织等，具有保持水土、净化水质等生态功能。花穗可作观赏等用。" }
    },

    links: [
     { source: "勺藥", target: "芍药属", rela: "属于", type: "literature" },
     { source: "匏", target: "葫芦属", rela: "属于", type: "literature" },
     { source: "匏瓜", target: "葫芦属", rela: "属于", type: "literature" },
     { source: "半夏", target: "半夏属", rela: "属于", type: "literature" },
     { source: "卷耳", target: "苍耳属", rela: "属于", type: "literature" },
     { source: "唐棣", target: "唐棣属", rela: "属于", type: "literature" },
     { source: "堇", target: "堇菜属", rela: "属于", type: "literature" },
     { source: "大菽", target: "大豆属", rela: "属于", type: "literature" },
     { source: "大麥", target: "大麦属", rela: "属于", type: "literature" },
     { source: "女蘿", target: "松萝属", rela: "属于", type: "literature" },
     { source: "射干", target: "射干属", rela: "属于", type: "literature" },
     { source: "戎叔", target: "大豆属", rela: "属于", type: "literature" },
     { source: "扶桑", target: "木槿属", rela: "属于", type: "literature" },
     { source: "昌", target: "菖蒲属", rela: "属于", type: "literature" },
     { source: "木瓜", target: "木瓜属", rela: "属于", type: "literature" },
     { source: "木蘭", target: "木兰属", rela: "属于", type: "literature" },
     { source: "李", target: "李属", rela: "属于", type: "literature" },
     { source: "杏", target: "杏属", rela: "属于", type: "literature" },
     { source: "杜", target: "梨属", rela: "属于", type: "literature" },
     { source: "杜若", target: "杜若属", rela: "属于", type: "literature" },
     { source: "杜衡", target: "细辛属", rela: "属于", type: "literature" },
     { source: "杞", target: "枸杞属", rela: "属于", type: "literature" },
     { source: "松", target: "松属", rela: "属于", type: "literature" },
     { source: "枌", target: "榆属", rela: "属于", type: "literature" },
     { source: "果臝", target: "栝楼属", rela: "属于", type: "literature" },
     { source: "枲", target: "大麻属", rela: "属于", type: "literature" },
     { source: "枲耳", target: "苍耳属", rela: "属于", type: "literature" },
     { source: "枳", target: "枳属", rela: "属于", type: "literature" },
     { source: "枸", target: "枸杞属", rela: "属于", type: "literature" },
     { source: "枹", target: "栎属", rela: "属于", type: "literature" },
     { source: "柏", target: "柏木属等多个属", rela: "属于", type: "literature" },
     { source: "柘", target: "柘属", rela: "属于", type: "literature" },
     { source: "柚", target: "柑橘属", rela: "属于", type: "literature" },
     { source: "柞", target: "栎属", rela: "属于", type: "literature" },
     { source: "柟", target: "楠木属", rela: "属于", type: "literature" },
     { source: "柤", target: "山楂属", rela: "属于", type: "literature" },
     { source: "柳", target: "柳属", rela: "属于", type: "literature" },
     { source: "栗", target: "栗属", rela: "属于", type: "literature" },
     { source: "栝", target: "栝楼属", rela: "属于", type: "literature" },
     { source: "栩", target: "栎属", rela: "属于", type: "literature" },
     { source: "格", target: "柘属", rela: "属于", type: "literature" },
     { source: "桂", target: "木犀属", rela: "属于", type: "literature" },
     { source: "桃", target: "桃属", rela: "属于", type: "literature" },
     { source: "桐", target: "泡桐属", rela: "属于", type: "literature" },
     { source: "桑", target: "桑属", rela: "属于", type: "literature" },
     { source: "桔", target: "柑橘属", rela: "属于", type: "literature" },
     { source: "梁", target: "高粱属", rela: "属于", type: "literature" },
     { source: "梅", target: "杏属", rela: "属于", type: "literature" },
     { source: "梓", target: "梓属", rela: "属于", type: "literature" },
     { source: "梧", target: "梧桐属", rela: "属于", type: "literature" },
     { source: "梧桐", target: "梧桐属", rela: "属于", type: "literature" },
     { source: "梨", target: "梨属", rela: "属于", type: "literature" },
     { source: "棗", target: "枣属", rela: "属于", type: "literature" },
     { source: "棘", target: "枣属", rela: "属于", type: "literature" },
     { source: "棣", target: "唐棣属", rela: "属于", type: "literature" },
     { source: "椅", target: "山桐子属", rela: "属于", type: "literature" },
     { source: "椇", target: "枳椇属", rela: "属于", type: "literature" },
     { source: "椈", target: "柏木属", rela: "属于", type: "literature" },
     { source: "椒", target: "花椒属", rela: "属于", type: "literature" },
     { source: "楂", target: "山楂属", rela: "属于", type: "literature" },
     { source: "楊", target: "杨属", rela: "属于", type: "literature" },
     { source: "楓", target: "槭属", rela: "属于", type: "literature" },
     { source: "楚", target: "牡荆属", rela: "属于", type: "literature" },
     { source: "楚棘", target: "枣属", rela: "属于", type: "literature" },
     { source: "楛", target: "牡荆属", rela: "属于", type: "literature" },
     { source: "楨", target: "女贞属", rela: "属于", type: "literature" },
     { source: "楸", target: "梓属", rela: "属于", type: "literature" },
     { source: "榆", target: "榆属", rela: "属于", type: "literature" },
     { source: "榛", target: "榛属", rela: "属于", type: "literature" },
     { source: "槐", target: "豆科", rela: "属于", type: "literature" },
     { source: "樗", target: "臭椿属", rela: "属于", type: "literature" },
     { source: "樞", target: "刺榆属", rela: "属于", type: "literature" },
     { source: "樠", target: "润楠属", rela: "属于", type: "literature" },
     { source: "樸", target: "朴属", rela: "属于", type: "literature" },
     { source: "橘", target: "柑橘属", rela: "属于", type: "literature" },
     { source: "橝", target: "橉木属", rela: "属于", type: "literature" },
     { source: "橡", target: "栎属", rela: "属于", type: "literature" },
     { source: "檀", target: "檀香属", rela: "属于", type: "literature" },
     { source: "檉", target: "柽柳属", rela: "属于", type: "literature" },
     { source: "檖", target: "梨属", rela: "属于", type: "literature" },
     { source: "檜", target: "圆柏属", rela: "属于", type: "literature" },
     { source: "檟", target: "梓属", rela: "属于", type: "literature" },
     { source: "檿", target: "桑属", rela: "属于", type: "literature" },
     { source: "櫟", target: "栎属", rela: "属于", type: "literature" },
     { source: "款冬", target: "款冬属", rela: "属于", type: "literature" },
     { source: "江離", target: "江蓠属", rela: "属于", type: "literature" },
     { source: "漆", target: "漆树属", rela: "属于", type: "literature" },
     { source: "澤瀉", target: "泽泻属", rela: "属于", type: "literature" },
     { source: "烏喙", target: "乌头属", rela: "属于", type: "literature" },
     { source: "烏足", target: "乌蔹莓属", rela: "属于", type: "literature" },
     { source: "牡", target: "芍药属", rela: "属于", type: "literature" },
     { source: "牡麻", target: "大麻属", rela: "属于", type: "literature" },
     { source: "瓟瓜", target: "葫芦科", rela: "属于", type: "literature" },
     { source: "瓠", target: "葫芦属", rela: "属于", type: "literature" },
     { source: "甘棠", target: "梨属", rela: "属于", type: "literature" },
     { source: "白昌", target: "菖蒲属", rela: "属于", type: "literature" },
     { source: "白芷", target: "当归属", rela: "属于", type: "literature" },
     { source: "白茅", target: "白茅属", rela: "属于", type: "literature" },
     { source: "石耳", target: "石耳属", rela: "属于", type: "literature" },
     { source: "秫", target: "高粱属或狗尾草属", rela: "属于", type: "literature" },
     { source: "秬", target: "黍属", rela: "属于", type: "literature" },
     { source: "稌", target: "稻属", rela: "属于", type: "literature" },
     { source: "稷", target: "狗尾草属", rela: "属于", type: "literature" },
     { source: "稻", target: "稻属", rela: "属于", type: "literature" },
     { source: "稿本", target: "藁本属", rela: "属于", type: "literature" },
     { source: "穄", target: "黍属", rela: "属于", type: "literature" },
     { source: "竹", target: "竹亚科下多个属", rela: "属于", type: "literature" },
     { source: "筍", target: "竹亚科下多个属", rela: "属于", type: "literature" },
     { source: "篠", target: "竹亚科下多个属", rela: "属于", type: "literature" },
     { source: "粟", target: "狗尾草属", rela: "属于", type: "literature" },
     { source: "粱", target: "高粱属或狗尾草属", rela: "属于", type: "literature" },
     { source: "糜草", target: "蒺藜属", rela: "属于", type: "literature" },
     { source: "紫", target: "紫草属", rela: "属于", type: "literature" },
     { source: "細秬", target: "黍属", rela: "属于", type: "literature" },
     { source: "細稷", target: "狗尾草属", rela: "属于", type: "literature" },
     { source: "細荔", target: "榕属", rela: "属于", type: "literature" },
     { source: "細菽", target: "豇豆属", rela: "属于", type: "literature" },
     { source: "細萯", target: "萱草属", rela: "属于", type: "literature" },
     { source: "紵", target: "苎麻属", rela: "属于", type: "literature" },
     { source: "綏", target: "蒿属", rela: "属于", type: "literature" },
     { source: "繁", target: "蒿属", rela: "属于", type: "literature" },
     { source: "臺", target: "莎草属", rela: "属于", type: "literature" },
     { source: "舜", target: "木槿属", rela: "属于", type: "literature" },
     { source: "艾", target: "蒿属", rela: "属于", type: "literature" },
     { source: "芄蘭", target: "萝藦属", rela: "属于", type: "literature" },
     { source: "芋", target: "芋属", rela: "属于", type: "literature" },
     { source: "芒", target: "芒属", rela: "属于", type: "literature" },
     { source: "芡", target: "芡属", rela: "属于", type: "literature" },
     { source: "芣苡", target: "车前属", rela: "属于", type: "literature" },
     { source: "芥", target: "芸苔属", rela: "属于", type: "literature" },
     { source: "芧", target: "莎草属", rela: "属于", type: "literature" },
     { source: "芫", target: "芫荽属", rela: "属于", type: "literature" },
     { source: "芭", target: "芭蕉属", rela: "属于", type: "literature" },
     { source: "芰", target: "菱属", rela: "属于", type: "literature" },
     { source: "芷", target: "当归属", rela: "属于", type: "literature" },
     { source: "芸", target: "芸香属", rela: "属于", type: "literature" },
     { source: "芹", target: "芹属", rela: "属于", type: "literature" },
     { source: "苓", target: "茯苓属", rela: "属于", type: "literature" },
     { source: "苕", target: "凌霄属", rela: "属于", type: "literature" },
     { source: "苦菜", target: "苦苣菜属", rela: "属于", type: "literature" },
     { source: "苴", target: "大麻属", rela: "属于", type: "literature" },
     { source: "苹", target: "苹属", rela: "属于", type: "literature" },
     { source: "茅", target: "白茅属", rela: "属于", type: "literature" },
     { source: "茆", target: "莼属", rela: "属于", type: "literature" },
     { source: "茈", target: "紫草属", rela: "属于", type: "literature" },
     { source: "茢", target: "石蒜属", rela: "属于", type: "literature" },
     { source: "茨", target: "慈姑属", rela: "属于", type: "literature" },
     { source: "茸", target: "鹿茸草属", rela: "属于", type: "literature" },
     { source: "茹", target: "茜草属", rela: "属于", type: "literature" },
     { source: "荁", target: "堇菜属", rela: "属于", type: "literature" },
     { source: "荆", target: "牡荆属", rela: "属于", type: "literature" },
     { source: "荇菜", target: "荇菜属", rela: "属于", type: "literature" },
     { source: "荊", target: "牡荆属", rela: "属于", type: "literature" },
     { source: "荍", target: "锦葵属", rela: "属于", type: "literature" },
     { source: "荏菽", target: "大豆属", rela: "属于", type: "literature" },
     { source: "荓", target: "鸢尾属", rela: "属于", type: "literature" },
     { source: "荔", target: "鸢尾属", rela: "属于", type: "literature" },
     { source: "荷", target: "莲属", rela: "属于", type: "literature" },
     { source: "荷華", target: "莲属", rela: "属于", type: "literature" },
     { source: "荻", target: "荻属", rela: "属于", type: "literature" },
     { source: "荼", target: "苦苣菜属", rela: "属于", type: "literature" },
     { source: "莘", target: "细辛属", rela: "属于", type: "literature" },
     { source: "莞", target: "藨草属", rela: "属于", type: "literature" },
     { source: "莠", target: "狗尾草属", rela: "属于", type: "literature" },
     { source: "莧陸", target: "商陆属", rela: "属于", type: "literature" },
     { source: "莪", target: "蒿属", rela: "属于", type: "literature" },
     { source: "菁", target: "芸苔属", rela: "属于", type: "literature" },
     { source: "菁茅", target: "白茅属", rela: "属于", type: "literature" },
     { source: "菅", target: "菅属", rela: "属于", type: "literature" },
     { source: "菉", target: "荩草属", rela: "属于", type: "literature" },
     { source: "菊", target: "菊属", rela: "属于", type: "literature" },
     { source: "菟", target: "菟丝子属", rela: "属于", type: "literature" },
     { source: "菫", target: "堇菜属", rela: "属于", type: "literature" },
     { source: "菰", target: "菰属", rela: "属于", type: "literature" },
     { source: "菱", target: "菱属", rela: "属于", type: "literature" },
     { source: "菲", target: "葱属", rela: "属于", type: "literature" },
     { source: "菽", target: "多个属", rela: "属于", type: "literature" },
     { source: "萊", target: "萝卜属", rela: "属于", type: "literature" },
     { source: "萍", target: "浮萍属", rela: "属于", type: "literature" },
     { source: "萑", target: "芦苇属", rela: "属于", type: "literature" },
     { source: "萩", target: "荻属", rela: "属于", type: "literature" },
     { source: "萯", target: "萱草属", rela: "属于", type: "literature" },
     { source: "葍", target: "打碗花属", rela: "属于", type: "literature" },
     { source: "葑", target: "1. 芸苔属2. 菰属", rela: "属于", type: "literature" },
     { source: "葛", target: "葛属", rela: "属于", type: "literature" },
     { source: "葛藟", target: "葛藟属", rela: "属于", type: "literature" },
     { source: "葛虆", target: "葛藟属", rela: "属于", type: "literature" },
     { source: "葦", target: "芦苇属", rela: "属于", type: "literature" },
     { source: "葭", target: "芦苇属", rela: "属于", type: "literature" },
     { source: "葵", target: "锦葵属", rela: "属于", type: "literature" },
     { source: "蒯", target: "薹草属", rela: "属于", type: "literature" },
     { source: "蒲", target: "香蒲属", rela: "属于", type: "literature" },
     { source: "蒹", target: "芦苇属", rela: "属于", type: "literature" },
     { source: "蒺梨", target: "蒺藜属", rela: "属于", type: "literature" },
     { source: "蒺蔾", target: "蒺藜属", rela: "属于", type: "literature" },
     { source: "蒿", target: "蒿属", rela: "属于", type: "literature" },
     { source: "蓀", target: "菖蒲属", rela: "属于", type: "literature" },
     { source: "蓍", target: "蓍属", rela: "属于", type: "literature" },
     { source: "蓨", target: "酸模属", rela: "属于", type: "literature" },
     { source: "蓫", target: "商陆属", rela: "属于", type: "literature" },
     { source: "蓬", target: "飞蓬属", rela: "属于", type: "literature" },
     { source: "蓷", target: "益母草属", rela: "属于", type: "literature" },
     { source: "蓼", target: "蓼属", rela: "属于", type: "literature" },
     { source: "蔆", target: "菱属", rela: "属于", type: "literature" },
     { source: "蔚", target: "蒿属", rela: "属于", type: "literature" },
     { source: "蔞", target: "蒿属", rela: "属于", type: "literature" },
     { source: "蔦", target: "桑寄生属", rela: "属于", type: "literature" },
     { source: "蔾", target: "藜属", rela: "属于", type: "literature" },
     { source: "蕉", target: "芭蕉属", rela: "属于", type: "literature" },
     { source: "蕕", target: "榆属", rela: "属于", type: "literature" },
     { source: "蕙", target: "兰属", rela: "属于", type: "literature" },
     { source: "蕡", target: "大麻属", rela: "属于", type: "literature" },
     { source: "蕢", target: "慈姑属", rela: "属于", type: "literature" },
     { source: "蕨", target: "蕨属", rela: "属于", type: "literature" },
     { source: "蕭", target: "蒿属", rela: "属于", type: "literature" },
     { source: "薁", target: "葡萄属", rela: "属于", type: "literature" },
     { source: "薇", target: "野豌豆属", rela: "属于", type: "literature" },
     { source: "薋", target: "蒺藜属", rela: "属于", type: "literature" },
     { source: "薑", target: "姜属", rela: "属于", type: "literature" },
     { source: "薔", target: "蔷薇属", rela: "属于", type: "literature" },
     { source: "薜", target: "榕属", rela: "属于", type: "literature" },
     { source: "薜荔", target: "榕属", rela: "属于", type: "literature" },
     { source: "薤", target: "葱属", rela: "属于", type: "literature" },
     { source: "薰", target: "薰衣草属", rela: "属于", type: "literature" },
     { source: "薺", target: "荠属", rela: "属于", type: "literature" },
     { source: "藋", target: "藿香属", rela: "属于", type: "literature" },
     { source: "藍", target: "蓼属", rela: "属于", type: "literature" },
     { source: "藙", target: "山茱萸属", rela: "属于", type: "literature" },
     { source: "藚", target: "泽泻属", rela: "属于", type: "literature" },
     { source: "藜", target: "藜属", rela: "属于", type: "literature" },
     { source: "藟", target: "葡萄属", rela: "属于", type: "literature" },
     { source: "藿", target: "藿香属", rela: "属于", type: "literature" },
     { source: "蘄", target: "蒿属", rela: "属于", type: "literature" },
     { source: "蘆", target: "芦苇属", rela: "属于", type: "literature" },
     { source: "蘋", target: "苹属", rela: "属于", type: "literature" },
     { source: "蘘荷", target: "姜属", rela: "属于", type: "literature" },
     { source: "蘩", target: "蒿属", rela: "属于", type: "literature" },
     { source: "蘭", target: "兰属", rela: "属于", type: "literature" },
     { source: "蘭槐", target: "当归属", rela: "属于", type: "literature" },
     { source: "豐本", target: "葱属", rela: "属于", type: "literature" },
     { source: "豫章", target: "樟属", rela: "属于", type: "literature" },
     { source: "辛夷", target: "木兰属", rela: "属于", type: "literature" },
     { source: "連", target: "连翘属", rela: "属于", type: "literature" },
     { source: "郁", target: "樱属", rela: "属于", type: "literature" },
     { source: "雚", target: "荻属", rela: "属于", type: "literature" },
     { source: "鞠", target: "菊属", rela: "属于", type: "literature" },
     { source: "韭", target: "葱属", rela: "属于", type: "literature" },
     { source: "馬蘭", target: "马兰属", rela: "属于", type: "literature" },
     { source: "鬱", target: "樱属", rela: "属于", type: "literature" },
     { source: "麥", target: "小麦属", rela: "属于", type: "literature" },
     { source: "麷", target: "大麦属", rela: "属于", type: "literature" },
     { source: "麻", target: "大麻属", rela: "属于", type: "literature" },
     { source: "黍", target: "黍属", rela: "属于", type: "literature" },
     { source: "木堇", target: "木槿属", rela: "属于", type: "literature" },
     { source: "瓟", target: "葫芦属", rela: "属于", type: "literature" },
     { source: "菖", target: "菖蒲属", rela: "属于", type: "literature" },
     { source: "白稻", target: "稻属", rela: "属于", type: "literature" },
     { source: "莱", target: "萝卜属", rela: "属于", type: "literature" },
     { source: "浮萍", target: "浮萍属", rela: "属于", type: "literature" },
     { source: "伏苓", target: "茯苓属", rela: "属于", type: "literature" },
     { source: "芝", target: "灵芝属", rela: "属于", type: "literature" },
     { source: "宿莽", target: "八角属", rela: "属于", type: "literature" },
     { source: "蒿蔞", target: "蒿属", rela: "属于", type: "literature" },
     { source: "蓝", target: "蓼属", rela: "属于", type: "literature" },
     { source: "冬蔥", target: "葱属", rela: "属于", type: "literature" },
     { source: "櫟社", target: "栎属", rela: "属于", type: "literature" },
     { source: "王瓜", target: "栝楼属", rela: "属于", type: "literature" },
     { source: "萹", target: "蓼属", rela: "属于", type: "literature" },
     { source: "柿", target: "柿属", rela: "属于", type: "literature" },
     { source: "藑茅", target: "打碗花属", rela: "属于", type: "literature" },
     { source: "青莎", target: "莎草属", rela: "属于", type: "literature" },
     { source: "苦桃", target: "桃属", rela: "属于", type: "literature" },
     { source: "葭葦", target: "芦苇属", rela: "属于", type: "literature" },
     { source: "蘧", target: "悬钩子属", rela: "属于", type: "literature" },
     { source: "青梁", target: "狗尾草属", rela: "属于", type: "literature" },
     { source: "大荔", target: "荔枝属", rela: "属于", type: "literature" },
     { source: "箈", target: "刚竹属", rela: "属于", type: "literature" },
     { source: "莞蒲", target: "菖蒲属", rela: "属于", type: "literature" },
     { source: "茹藘", target: "茜草属", rela: "属于", type: "literature" },
     { source: "莽草", target: "八角属", rela: "属于", type: "literature" },
     { source: "菉竹", target: "刚竹属", rela: "属于", type: "literature" },
     { source: "大秬", target: "黍属", rela: "属于", type: "literature" },
     { source: "黃粱", target: "狗尾草属", rela: "属于", type: "literature" },
     { source: "茝", target: "当归属", rela: "属于", type: "literature" },
     { source: "三葉", target: "委陵菜属", rela: "属于", type: "literature" },
     { source: "蔥", target: "葱属", rela: "属于", type: "literature" },
     { source: "櫄", target: "香椿属", rela: "属于", type: "literature" },
     { source: "大稷", target: "高粱属", rela: "属于", type: "literature" },
     { source: "櫑葛", target: "葛属", rela: "属于", type: "literature" },
     { source: "栭", target: "栗属", rela: "属于", type: "literature" },
     { source: "白棠", target: "梨属", rela: "属于", type: "literature" },
     { source: "簬", target: "簕竹属", rela: "属于", type: "literature" },
     { source: "山蔾", target: "藜芦属", rela: "属于", type: "literature" },
     { source: "櫨", target: "黄栌属", rela: "属于", type: "literature" },
     { source: "蘪蕪", target: "当归属", rela: "属于", type: "literature" },
     { source: "楮", target: "构属", rela: "属于", type: "literature" },
     { source: "赤棠", target: "苹果属", rela: "属于", type: "literature" },
     { source: "桔梗", target: "桔梗属", rela: "属于", type: "literature" },
     { source: "石蘭", target: "石蒜属", rela: "属于", type: "literature" },
     { source: "细樛杞", target: "枸杞属", rela: "属于", type: "literature" },
     { source: "蓮", target: "莲属", rela: "属于", type: "literature" },
     { source: "枣", target: "枣属", rela: "属于", type: "literature" },
     { source: "游龍", target: "蓼属", rela: "属于", type: "literature" },
     { source: "白梓", target: "梓属", rela: "属于", type: "literature" },
     { source: "檍", target: "檫木属", rela: "属于", type: "literature" },
     { source: "莧", target: "苋属", rela: "属于", type: "literature" },
     { source: "苽", target: "菰属", rela: "属于", type: "literature" },
     { source: "大樛杞", target: "枸杞属", rela: "属于", type: "literature" },
     { source: "杶", target: "香椿属", rela: "属于", type: "literature" },
     { source: "藁本", target: "藁本属", rela: "属于", type: "literature" },
     { source: "白黍", target: "黍属", rela: "属于", type: "literature" },
     { source: "女羅", target: "松萝属", rela: "属于", type: "literature" },
     { source: "大萯", target: "萱草属", rela: "属于", type: "literature" },
     { source: "三秀", target: "灵芝属", rela: "属于", type: "literature" },
     { source: "揭車", target: "芸香属", rela: "属于", type: "literature" },
     { source: "諼草", target: "萱草属", rela: "属于", type: "literature" },
     { source: "葦苕", target: "芦苇属", rela: "属于", type: "literature" }
    ]
  };

// 配置项
  const config = {
    width: 1000,
    height: 600,
    nodeColor: [
      { fill: "rgb(249, 235, 249)", stroke: "rgb(162, 84, 162)", text: "rgb(162, 84, 162)" },
      { fill: "rgb(178, 229, 183)", stroke: "rgb(98, 182, 105)", text: "rgb(60, 60, 60)" },
      { fill: "rgb(112, 202, 225)", stroke: "#23b3d7", text: "rgb(93, 76, 93)" },
      { fill: "#D9C8AE", stroke: "#c0a378", text: "rgb(60, 60, 60)" }
    ],
    linkColor: [
      { color: "rgb(162, 84, 162)" },
      { color: "rgb(98, 182, 105)" },
      { color: "#23b3d7" }
    ],
    contentHook: d => `
      <strong>${d.name}</strong><br>
      类型：${d.type}<br>
      ${d.description ? d.description : ''}
    `
  };

  // 初始化知识图谱
  initKG(kgData, config, "#kg-container");

  // 初始化搜索功能
  initSearch();
});

function initKG(data, config, container) {
  const nodeDict = data.nodes;
  const links = data.links;
  const nodes = {};

  // 构建节点映射关系
  links.forEach(link => {
    if (!nodeDict[link.source] || !nodeDict[link.target]) {
      console.error("节点未定义:", link.source, link.target);
      return;
    }

    link.source = nodeDict[link.source];
    nodes[link.source.name] = link.source;
    link.target = nodeDict[link.target];
    nodes[link.target.name] = link.target;
  });

  if (Object.keys(nodes).length === 0) {
    console.error("未找到有效节点");
    return;
  }

  // 默认配色方案
  const defaultNodeColor = config.nodeColor || [
    { fill: "rgb(249, 235, 249)", stroke: "rgb(162, 84, 162)", text: "rgb(162, 84, 162)" },
    { fill: "#ccc", stroke: "rgb(145, 138, 138)", text: "#333" },
    { fill: "rgb(112, 202, 225)", stroke: "#23b3d7", text: "rgb(93, 76, 93)" }
  ];

  const defaultLinkColor = config.linkColor || [
    { color: "rgb(162, 84, 162)" },
    { color: "rgb(145, 138, 138)" },
    { color: "#23b3d7" }
  ];

  // 分配节点颜色
  const colorDict = {};
  let point = 0;
  Object.keys(data.nodes).forEach(key => {
    const type = data.nodes[key].type || "default";
    if (!colorDict[type]) {
      colorDict[type] = defaultNodeColor[point];
      point = (point + 1) % defaultNodeColor.length;
    }
  });

  // 分配连线颜色
  const colorLinkDict = {};
  point = 0;
  links.forEach(link => {
    const type = link.type || "default";
    if (!colorLinkDict[type]) {
      colorLinkDict[type] = defaultLinkColor[point];
      point = (point + 1) % defaultLinkColor.length;
    }
  });

  // 动态获取父容器尺寸
  const parentContainer = d3.select(container).node();
  const width = parentContainer.clientWidth || config.width || 1000;
  const height = parentContainer.clientHeight || config.height || 650;

  // 力导向布局配置
  const force = d3.layout.force()
    .nodes(d3.values(nodes))
    .links(links)
    .size([width, height])
    .linkDistance(120)
    .charge(-1200)
    .on("tick", tick)
    .start();

  // 缩放行为
  const zoom = d3.behavior.zoom()
    .scaleExtent([0, 2])
    .on("zoom", zoomed);

  // 创建SVG容器
  const svg = d3.select(container).append("svg")
    .attr("width", width)
    .attr("height", height)
    .call(zoom);

  // 箭头定义
  svg.append("marker")
    .attr("id", "resolved")
    .attr("markerUnits", "userSpaceOnUse")
    .attr("viewBox", "0 -5 10 10")
    .attr("refX", 40)
    .attr("refY", 0)
    .attr("markerWidth", 12)
    .attr("markerHeight", 12)
    .attr("orient", "auto")
    .append("path")
    .attr("d", "M0,-5L10,0L0,5")
    .attr('fill', '#000');

  // 绘制连线
  const edges_line = svg.append("g").selectAll(".edgepath")
    .data(force.links())
    .enter().append("path")
    .attr({
      'class': 'edgepath',
      'id': (d, i) => 'edgepath' + i
    })
    .style("stroke", d => {
      const type = d.type || "default";
      return colorLinkDict[type] ? colorLinkDict[type].color : "#ccc";
    })
    .style("stroke-width", 1)
    .attr("marker-end", "url(#resolved)");

  // 连线文字
  const edges_text = svg.append("g").selectAll(".edgelabel")
    .data(force.links())
    .enter().append("text")
    .attr({
      'class': 'edgelabel',
      'id': (d, i) => 'edgepath' + i,
      'dx': 30,
      'dy': 0
    });

  edges_text.append('textPath')
    .attr('xlink:href', (d, i) => '#edgepath' + i)
    .text(d => d.rela);

  // 拖拽交互
  const drag = force.drag()
    .on("dragstart", function(d) {
      d3.event.sourceEvent.stopPropagation();
    });

  // 创建图片提示框
  const imageTooltip = d3.select("body").append("div")
    .attr("class", "kg-image-tooltip")
    .style("opacity", 0)
    .style("position", "absolute")
    .style("background", "white")
    .style("border", "1px solid #ddd")
    .style("padding", "10px")
    .style("border-radius", "5px")
    .style("max-width", "300px")
    .style("z-index", "1000")
    .style("box-shadow", "0 0 10px rgba(0,0,0,0.2)");

  // 创建普通提示框
  const textTooltip = d3.select("body").append("div")
    .attr("class", "kg-text-tooltip")
    .style("opacity", 0)
    .style("position", "absolute")
    .style("background", "white")
    .style("border", "1px solid #ddd")
    .style("padding", "10px")
    .style("border-radius", "5px")
    .style("max-width", "200px")
    .style("z-index", "1000");

  // 绘制节点
  const circle = svg.append("g").selectAll("circle")
    .data(force.nodes())
    .enter().append("circle")
    .attr("r", 30)
    .style("fill", d => colorDict[d.type].fill)
    .style("stroke", d => colorDict[d.type].stroke)
    .on("click", handleNodeClick)
    .on("dblclick", d => d.fixed = false)
    .on("mouseover", showTextTooltip)
    .on("mousemove", moveTooltip)
    .on("mouseout", hideTextTooltip)
    .call(drag);

  // 节点文字
  const text = svg.append("g").selectAll("text")
    .data(force.nodes())
    .enter().append("text")
    .attr("dy", ".35em")
    .attr("text-anchor", "middle")
    .style("fill", d => colorDict[d.type].text)
    .text(d => formatText(d.name));

  // 动态布局更新
  function tick() {
    if (!circle) return;
    circle.attr("transform", d => `translate(${d.x},${d.y})`);
    text.attr("transform", d => `translate(${d.x},${d.y})`);
    edges_line.attr('d', d => `M ${d.source.x} ${d.source.y} L ${d.target.x} ${d.target.y}`);
  }

  // 缩放函数
  function zoomed() {
    svg.selectAll("g").attr("transform", `translate(${d3.event.translate})scale(${d3.event.scale})`);
  }

  // 节点点击处理函数
  function handleNodeClick(node) {
    d3.event.stopPropagation();
    
    // 高亮相关节点和边
    edges_line.style("stroke-width", line => 
      (line.source === node || line.target === node) && line.focus ? 2.5 : 1
    );
    node.focus = !node.focus;
    circle.style("stroke-width", d => d.focus ? 2.5 : 1);
    
    // 显示图片提示框
    if (node.imageUrl) {
      const tooltipContent = `
        <div class="tooltip-header">
          <h4>${node.name}</h4>
          <small>类型: ${node.type}</small>
        </div>
        <div class="tooltip-image-container">
          <img src="${node.imageUrl}" alt="${node.name}" 
               onerror="this.src='https://via.placeholder.com/300x200?text=图片加载失败'">
        </div>
        ${node.description ? `<div class="tooltip-description">${node.description}</div>` : ''}
      `;
      
      imageTooltip.html(tooltipContent)
        .style("left", `${d3.event.pageX + 15}px`)
        .style("top", `${d3.event.pageY + 15}px`)
        .transition()
        .duration(200)
        .style("opacity", 1);
    }
  }

  // 文本提示框函数
  function showTextTooltip(d) {
    if (!d.imageUrl) {
      textTooltip.html(config.contentHook ? config.contentHook(d) : `<strong>${d.name}</strong><br>类型：${d.type}`)
        .style("left", `${d3.event.pageX}px`)
        .style("top", `${d3.event.pageY + 20}px`)
        .style("opacity", 0.9);
    }
  }

  function moveTooltip() {
    const tooltip = d3.select(".kg-image-tooltip").style("opacity") > 0 ? imageTooltip : textTooltip;
    tooltip.style("left", `${d3.event.pageX}px`)
      .style("top", `${d3.event.pageY + 20}px`);
  }

  function hideTextTooltip() {
    textTooltip.transition()
      .duration(500)
      .style("opacity", 0);
  }

  // 文本格式化函数
  function formatText(name) {
    if (name.length <= 8) return name;
    const top = name.substring(0, 8);
    const bot = name.substring(8, 14) + (name.length > 16 ? "..." : "");
    return `${top}\n${bot}`;
  }

  // 点击页面其他位置关闭图片提示框
  d3.select("body").on("click", function() {
    if (d3.event.target.tagName !== "circle") {
      imageTooltip.transition()
        .duration(500)
        .style("opacity", 0);
    }
  });
}

// 搜索功能初始化
function initSearch() {
  document.getElementById('search-btn').addEventListener('click', search);
  document.getElementById('search-input').addEventListener('input', search);
  document.getElementById('type-filter').addEventListener('change', filterNodes);
}

// 搜索函数
function search() {
  const query = document.getElementById('search-input').value.toLowerCase();
  const results = Object.values(kgData.nodes).filter(node => 
    node.name.toLowerCase().includes(query)
  );
  displayResults(results);
}

// 节点过滤函数
function filterNodes() {
  const type = document.getElementById('type-filter').value;
  const filtered = type ? 
    Object.values(kgData.nodes).filter(node => node.type === type) : 
    Object.values(kgData.nodes);
  displayResults(filtered);
}

// 结果显示函数
function displayResults(results) {
  const container = document.getElementById('results');
  container.innerHTML = results.map(node => `
    <div class="result-item" data-id="${node.name}" 
         onmouseover="highlightNode('${node.name}')" 
         onmouseout="unhighlightNode('${node.name}')"
         onclick="focusNode('${node.name}')">
      <strong>${node.name}</strong><br>
      <small>类型：${node.type}</small><br>
      <small>简介：${node.description}</small>
    </div>
  `).join('');
}

// 节点高亮函数
function highlightNode(nodeName) {
  d3.selectAll("circle").style("stroke-width", d => 
    d.name === nodeName ? "2.5px" : "1px"
  );
}

function unhighlightNode(nodeName) {
  d3.selectAll("circle").style("stroke-width", "1px");
}

function focusNode(nodeName) {
  const node = kgData.nodes[nodeName];
  if (node) {
    // 模拟点击事件来触发图片显示
    const circle = d3.select(`circle[data-name="${nodeName}"]`);
    if (!circle.empty()) {
      circle.dispatch("click");
    }
  }
}
