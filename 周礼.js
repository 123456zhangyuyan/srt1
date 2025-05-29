document.addEventListener("DOMContentLoaded", function() {
  // 知识图谱数据
  window.kgData = {
nodes: {
      "周礼": { name: "周礼", type: "book",description: "《周礼》是儒家经典，十三经之一，是西周时期的政治家、思想家、文学家、军事家周公旦所著。"},
     
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
      "葦苕": { name: "葦苕", type: "plant", imageUrl: "图片/先秦植物/葦苕.png",description: "芦苇的花穗,芦苇是常见水生植物，茎秆可用于造纸、编织等，具有保持水土、净化水质等生态功能。花穗可作观赏等用。" },

      "乘馬": { name: "乘馬", type: "animal", imageUrl: "图片/先秦动物/乘馬.png",description: "乘马,马是一种草食性家畜，在古代交通、战争、农业生产等方面发挥了重要作用。人类很早就开始驯化马，使其成为重要的伙伴。" },
      "乳彘": { name: "乳彘", type: "animal", imageUrl: "图片/先秦动物/乳彘.png",description: "乳彘,即小猪，猪是人类最早驯化的家畜之一，杂食性，适应能力强，繁殖速度快。" },
      "乳狗": { name: "乳狗", type: "animal", imageUrl: "图片/先秦动物/乳狗.png",description: "乳狗,指小狗，狗是人类最早驯化的动物之一，与人类关系密切，是忠诚的伙伴和助手。" },
      "亢龍": { name: "亢龍", type: "animal", imageUrl: "图片/先秦动物/亢龍.png",description: "亢龙,在古代文献中，亢龙常指处于极高位置的龙。龙是中国等东亚国家古代神话传说中的神异动物，能行云布雨、能大能小、能升能隐。" },
      "介蟲": { name: "介蟲", type: "animal", imageUrl: "图片/先秦动物/介蟲.png",description: "介虫,古代对有甲壳的虫类和水族的统称，范围较广，包括龟、鳖、蟹、虾等多种动物。以龟为例介绍。龟是一种古老的爬行动物，具有坚硬的外壳，用于保护自己。" },
      "伏兔": { name: "伏兔", type: "animal", imageUrl: "图片/先秦动物/伏兔.png",description: "伏兔,一般指蹲伏着的兔子。兔是一种常见的哺乳动物，具有敏捷的动作和善于跳跃的特点。" },
      "倉庚": { name: "倉庚", type: "animal", imageUrl: "图片/先秦动物/倉庚.png",description: "仓庚,即黄鹂，是一种鸟类，羽毛鲜艳，鸣声悦耳。" },
      "倉龍": { name: "倉龍", type: "animal", imageUrl: "图片/先秦动物/倉龍.png",description: "苍龙,在古代，苍龙是一种代表东方的神兽，与青龙类似，被视为吉祥和力量的象征。在天文学中，也指东方七宿（角、亢、氐、房、心、尾、箕）的总称。这里按神兽理解。" },
      "偃鼠": { name: "偃鼠", type: "animal", imageUrl: "图片/先秦动物/偃鼠.png",description: "偃鼠,一般指鼹鼠，是一种穴居的哺乳动物，生活在地下洞穴中。" },
      "元龜": { name: "元龜", type: "animal", imageUrl: "图片/先秦动物/元龜.png",description: "元龟,即大龟，龟的一种，在古代被视为祥瑞之物，常与占卜等活动相关。" },
      "兔": { name: "兔", type: "animal", imageUrl: "图片/先秦动物/兔.png",description: "兔,同伏兔中介绍的兔子，是一种常见的草食性哺乳动物，具有多种用途，与人类生活关系密切。" },
      "兕": { name: "兕", type: "animal", imageUrl: "图片/先秦动物/兕.png",description: "兕,是一种类似犀牛的大型哺乳动物，在古代被认为是一种凶猛的野兽。现已灭绝。" },
      "六畜": { name: "六畜", type: "animal", imageUrl: "图片/先秦动物/六畜.png",description: "六畜,指六种家畜，即马、牛、羊、猪、狗、鸡。它们是人类为了经济或其他目的而驯化的动物，在人类生活中具有重要地位。以下以牛为例介绍。牛是一种大型草食性家畜，力气大，用于耕地、拉车等劳作，肉和奶可供食用。" },
      "凰": { name: "凰", type: "animal", imageUrl: "图片/先秦动物/凰.png",description: "凰,凤凰是中国古代传说中的百鸟之王，雄为凤，雌为凰。凤凰是一种神异动物，象征着吉祥、美好。" },
      "剛鬣": { name: "剛鬣", type: "animal", imageUrl: "图片/先秦动物/剛鬣.png",description: "剛鬣,指猪。猪是一种常见的家畜，具有适应力强、繁殖速度快等特点。" },
      "北龜": { name: "北龜", type: "animal", imageUrl: "图片/先秦动物/北龜.png",description: "北龜,可能泛指北方的龟类。龟是一种古老的爬行动物，具有耐饥长寿等特点。" },
      "匹馬": { name: "匹馬", type: "animal", imageUrl: "图片/先秦动物/匹馬.png",description: "匹馬,指马。马是一种草食性家畜，在人类历史上扮演着重要角色。" },
      "南龜": { name: "南龜", type: "animal", imageUrl: "图片/先秦动物/南龜.png",description: "南龜,可能泛指南方的龟类，与北龟相比，可能在种类和习性上有一些差异。" },
      "卵鳥": { name: "卵鳥", type: "animal", imageUrl: "图片/先秦动物/卵鳥.png",description: "卵鳥,可能是指一些以卵生方式繁殖的鸟类，先秦时期对鸟类的分类可能较为笼统。" },
      "土牛": { name: "土牛", type: "animal", imageUrl: "图片/先秦动物/土牛.png",description: "土牛,指牛。牛是重要的家畜，分为黄牛、水牛等不同品种，适应不同的环境和用途。" },
      "地龜": { name: "地龜", type: "animal", imageUrl: "图片/先秦动物/地龜.png",description: "地龜,可能指生活在陆地上的龟类，与水龟相对，更适应陆地生活。" },
      "夔": { name: "夔", type: "animal", imageUrl: "图片/先秦动物/夔.png",description: "夔,传说中的一种怪物，外形像牛，只有一只脚。" },
      "大牲": { name: "大牲", type: "animal", imageUrl: "图片/先秦动物/大牲.png",description: "大牲,通常指牛，在古代祭祀等活动中，牛被视为重要的祭品，因其体型较大且具有重要的经济价值。" },
      "天龜": { name: "天龜", type: "animal", imageUrl: "图片/先秦动物/天龜.png",description: "天龜,可能是对龟的一种尊称或特殊分类，寓意其具有神秘、神圣的地位，也许被认为与上天或神灵有关。" },
      "夭鳥": { name: "夭鳥", type: "animal", imageUrl: "图片/先秦动物/夭鳥.png",description: "夭鳥,可能是指一些外形奇特或被认为具有特殊寓意的鸟类，具体所指不明确。" },
      "孔雀": { name: "孔雀", type: "animal", imageUrl: "图片/先秦动物/孔雀.png",description: "孔雀,一种美丽而引人注目的鸟类，分为绿孔雀和蓝孔雀等品种，雄性孔雀具有非常长的尾羽，能展开形成美丽的扇形。" },
      "孔鳳": { name: "孔鳳", type: "animal", imageUrl: "图片/先秦动物/孔鳳.png",description: "孔鳳,可能是孔雀的一种古称，也可能是将孔雀与凤凰的形象相结合的一种说法，寓意其具有凤凰般的美丽和吉祥寓意。" },
      "孩蟲": { name: "孩蟲", type: "animal", imageUrl: "图片/先秦动物/孩蟲.png",description: "孩蟲,可能是指一些幼小的昆虫或虫类，是对虫类幼体的一种统称，具体所指不明确。" },
      "守犬": { name: "守犬", type: "animal", imageUrl: "图片/先秦动物/守犬.png",description: "守犬,指狗，主要用于看家护院，是人类最早驯化的动物之一，具有忠诚、警惕性高等特点。" },
      "守狗": { name: "守狗", type: "animal", imageUrl: "图片/先秦动物/守狗.png",description: "守狗,同守犬，指用于守护的狗。" },
      "寒蟬": { name: "寒蟬", type: "animal", imageUrl: "图片/先秦动物/寒蟬.png",description: "寒蝉,寒蝉是一种蝉科昆虫，通常在寒秋季节出现，其鸣叫声在秋风中带有一种凄凉之感。" },
      "寵": { name: "寵", type: "animal", imageUrl: "图片/先秦动物/寵.png",description: "宠,在先秦时期，“宠” 可能并非特指某一种动物，而是对宠物的泛称，通常指被人类饲养、宠爱、陪伴的动物，比如狗、猫等。这里以狗为例进行介绍，因为狗是先秦时期常见的宠物和家畜。" },
      "寶龜": { name: "寶龜", type: "animal", imageUrl: "图片/先秦动物/寶龜.png",description: "宝龟,在古代，宝龟是指被视为珍贵、具有灵性的龟类，通常用于祭祀、占卜等活动。" },
      "封狐": { name: "封狐", type: "animal", imageUrl: "图片/先秦动物/封狐.png",description: "封狐,指大狐狸，狐狸是犬科狐属的哺乳动物，封狐强调其体型较大或具有一定的神秘色彩。" },
      "小鳥": { name: "小鳥", type: "animal", imageUrl: "图片/先秦动物/小鳥.png",description: "小鸟,是对体型较小的鸟类的统称，包含多种不同的鸟类物种。" },
      "尨": { name: "尨", type: "animal", imageUrl: "图片/先秦动物/尨.png",description: "尨,指多毛的狗，也可能是指一种体型较大、毛发较长的犬类品种。" },
      "尸鳩": { name: "尸鳩", type: "animal", imageUrl: "图片/先秦动物/尸鳩.png",description: "尸鸠,一般认为是指布谷鸟，属于鹃形目杜鹃科。" },
      "尺蠖": { name: "尺蠖", type: "animal", imageUrl: "图片/先秦动物/尺蠖.png",description: "尺蠖,尺蠖是尺蛾科昆虫幼虫的统称，因其行动时身体一屈一伸，如同用尺子丈量般，故而得名。尺蠖在自然界中分布广泛，其生存与植物生长紧密相连，是生态系统中重要的组成部分。它们在幼虫阶段主要以植物叶片为食，通过取食叶片影响植物的生长和发育。" },
      "左驂": { name: "左驂", type: "animal", imageUrl: "图片/先秦动物/左驂.png",description: "左驂,在古代，人们驾车出行或征战时，通常用多匹马牵引车辆，位于车辕左侧的马被称为 “左驂” 。左驂在驾车过程中起到关键作用，其速度、力量和协调性直接影响车辆行驶的稳定性和操控性。在礼仪活动和战争场景中，左驂的选择和配置都有严格的规范和要求。" },
      "巫馬": { name: "巫馬", type: "animal", imageUrl: "图片/先秦动物/巫馬.png",description: "巫馬,“巫马” 一词在先秦时期有两种含义，一是指负责治疗马匹疾病的官职，二是指生病的马。作为官职，巫马需要掌握一定的兽医知识和技能，负责对马匹的疾病进行诊断和治疗，保障马群的健康，这在以马车为主要交通工具和战争工具的古代社会至关重要；作为生病的马，巫马反映了马匹在生产生活中面临疾病困扰的实际情况。" },
      "帝牛": { name: "帝牛", type: "animal", imageUrl: "图片/先秦动物/帝牛.png",description: "帝牛,帝牛是先秦时期用于祭祀天帝的牛，在古代祭祀文化中具有极高的地位。祭祀活动是古人与神灵沟通的重要方式，而帝牛作为献给天帝的祭品，被认为是能够传达人们敬意和祈愿的神圣媒介。其挑选和饲养过程都有严格的标准和仪式，以确保帝牛的品质和纯洁性。" },
      "彘": { name: "彘", type: "animal", imageUrl: "图片/先秦动物/彘.png",description: "彘,“彘” 在先秦时期是猪的称呼，猪是人类最早驯化的家畜之一，在农业社会中具有重要地位。猪分为家猪和野猪，家猪经过长期驯化，性格温顺，适应人类饲养环境，主要用于提供肉食、皮革等资源；野猪则保留了较强的野性，具有一定的攻击性，多生活在野外。" },
      "征鳥": { name: "征鳥", type: "animal", imageUrl: "图片/先秦动物/征鳥.png",description: "征鳥,征鸟在先秦时期泛指鹰、隼、雕等具有迁徙习性的猛禽。这些猛禽具有强大的飞行能力和敏锐的捕猎技巧，在生态系统中处于食物链顶端，对维持生态平衡起着重要作用。它们通常在不同季节往返于不同地区，寻找适宜的生存环境和食物资源。" },
      "戎馬": { name: "戎馬", type: "animal", imageUrl: "图片/先秦动物/戎馬.png",description: "戎馬,戎马指用于战争的马匹，在先秦时期的战争中，马匹是重要的战略资源。戎马经过特殊训练，能够适应战争环境，跟随士兵冲锋陷阵，在战场上承担着运输、骑乘等重要任务，其性能和数量直接影响战争的胜负。" },
      "振鷺": { name: "振鷺", type: "animal", imageUrl: "图片/先秦动物/振鷺.png",description: "振鹭,指白鹭，是一种常见的水鸟。" },
      "攫鳥": { name: "攫鳥", type: "animal", imageUrl: "图片/先秦动物/攫鳥.png",description: "攫鸟,通常指鹰、雕等猛禽，具有强大的爪子和尖锐的喙，以捕食其他动物为生。" },
      "文魚": { name: "文魚", type: "animal", imageUrl: "图片/先秦动物/文魚.png",description: "文鱼,一般认为是鲤鱼的一种，因其身上有美丽的斑纹而得名。" },
      "斑駮": { name: "斑駮", type: "animal", imageUrl: "图片/先秦动物/斑駮.png",description: "斑驳,在先秦时期，“斑驳” 可能是指老虎，因老虎身上有斑纹而用 “斑驳” 来形容。" },
      "斯螽": { name: "斯螽", type: "animal", imageUrl: "图片/先秦动物/斯螽.png",description: "斯螽,即螽斯，是一种常见的昆虫，属于直翅目螽斯科。" },
      "昆蟲": { name: "昆蟲", type: "animal", imageUrl: "图片/先秦动物/昆蟲.png",description: "昆虫,在先秦时期，“昆虫” 是一个较为宽泛的概念，泛指各种小型节肢动物。这里以蝗虫为例进行介绍，因为蝗虫是一种常见且具有代表性的昆虫。" },
      "星鳥": { name: "星鳥", type: "animal", imageUrl: "图片/先秦动物/星鳥.png",description: "星鸟,可能指的是一种与季节变化有关的候鸟，常被用来指代南方的朱鸟，即朱雀，也有说法认为是指杜鹃鸟。这里以杜鹃鸟为例进行介绍。" },
      "春鳥": { name: "春鳥", type: "animal", imageUrl: "图片/先秦动物/春鳥.png",description: "春鸟,是对春天常见鸟类的一种泛称，这里以燕子为例进行介绍，因为燕子是春天的代表性鸟类之一。" },
      "朱雀": { name: "朱雀", type: "animal", imageUrl: "图片/先秦动物/朱雀.png",description: "朱雀,是中国古代神话中的天之四灵之一，代表南方，属火。在现实中，可能与红腹锦鸡等鸟类有一定的关联，因其羽毛颜色鲜艳，与朱雀的形象有相似之处。" },
      "朱鱉": { name: "朱鱉", type: "animal", imageUrl: "图片/先秦动物/朱鱉.png",description: "朱鳖,一种传说中的生物，据《山海经》记载，其状如肺而有四足，六目，有珠。可能是一种古代人们想象中的神秘生物，也有可能是对某种稀有水生动物的夸张描述。" },
      "朴牛": { name: "朴牛", type: "animal", imageUrl: "图片/先秦动物/朴牛.png",description: "朴牛,指的是牛，是一种常见的家畜，在先秦时期就被人类广泛饲养和利用。" },
      "東龜": { name: "東龜", type: "animal", imageUrl: "图片/先秦动物/東龜.png",description: "东龟,可能是指东方地区常见的一种龟类，具体品种难以确定，可能包括中华草龟等。这里以中华草龟为例进行介绍。" },
      "桃蟲": { name: "桃蟲", type: "animal", imageUrl: "图片/先秦动物/桃蟲.png",description: "桃虫,指的是鹪鹩，是一种体型较小的鸟类。" },
      "桑扈": { name: "桑扈", type: "animal", imageUrl: "图片/先秦动物/桑扈.png",description: "桑扈,一种常见的鸟类，常在山林间活动。" },
      "梟": { name: "梟", type: "animal", imageUrl: "图片/先秦动物/梟.png",description: "梟,即猫头鹰，是夜行性猛禽。" },
      "梟鴞": { name: "梟鴞", type: "animal", imageUrl: "图片/先秦动物/梟鴞.png",description: "梟鴞,同梟，即猫头鹰。" },
      "梧鼠": { name: "梧鼠", type: "animal", imageUrl: "图片/先秦动物/梧鼠.png",description: "梧鼠,即鼯鼠，也称飞鼠，能在树林间滑翔。" },
      "樸馬": { name: "樸馬", type: "animal", imageUrl: "图片/先秦动物/樸馬.png",description: "樸馬,指未经训练、较为野性的马。" },
      "橐駝": { name: "橐駝", type: "animal", imageUrl: "图片/先秦动物/橐駝.png",description: "橐駝,即骆驼，有单峰驼和双峰驼之分，是沙漠中的重要交通工具。" },
      "檮杌": { name: "檮杌", type: "animal", imageUrl: "图片/先秦动物/檮杌.png",description: "檮杌,一种传说中的猛兽，也用来比喻顽固不化、态度凶恶的人。" },
      "歇驕": { name: "歇驕", type: "animal", imageUrl: "图片/先秦动物/歇驕.png",description: "歇驕,一种猎犬，善于奔跑和追踪猎物。" },
      "殦鵰": { name: "殦鵰", type: "animal", imageUrl: "图片/先秦动物/殦鵰.png",description: "殦鵰,即鹖鴠，一种形似雉鸡的鸟类，在古代被视为一种猛禽。" },
      "母牛": { name: "母牛", type: "animal", imageUrl: "图片/先秦动物/母牛.png",description: "母牛,即雌性牛，是牛类中的雌性个体，在农业生产和生活中具有重要作用。" },
      "母猴": { name: "母猴", type: "animal", imageUrl: "图片/先秦动物/母猴.png",description: "母猴,即雌性猴子，猴子是灵长目动物的代表，具有较高的智力和灵活的身体。" },
      "水兕": { name: "水兕", type: "animal", imageUrl: "图片/先秦动物/水兕.png",description: "水兕,一种古代传说中的类似犀牛的水生动物，也有人认为可能是水牛或其他大型水生哺乳动物。" },
      "水蛟": { name: "水蛟", type: "animal", imageUrl: "图片/先秦动物/水蛟.png",description: "水蛟,传说中的一种水生龙类动物，似蛇而有四足，能兴风作浪。" },
      "水蟲": { name: "水蟲", type: "animal", imageUrl: "图片/先秦动物/水蟲.png",description: "水蟲,是对水生昆虫或其他水生小型动物的统称。" },
      "池魚": { name: "池魚", type: "animal", imageUrl: "图片/先秦动物/池魚.png",description: "池魚,指生活在池塘中的鱼类，种类繁多，常见的有鲤鱼、鲫鱼等。" },
      "浮蝣": { name: "浮蝣", type: "animal", imageUrl: "图片/先秦动物/浮蝣.png",description: "浮蝣,即蜉蝣，是一种寿命很短的昆虫，具有独特的生活史和形态特征。" },
      "海鳥": { name: "海鳥", type: "animal", imageUrl: "图片/先秦动物/海鳥.png",description: "海鳥,泛指生活在海洋环境中的各种鸟类，如海鸥、信天翁等。" },
      "潛龍": { name: "潛龍", type: "animal", imageUrl: "图片/先秦动物/潛龍.png",description: "潛龍,龙是中国古代神话中的神异动物，能兴云作雨、司掌行云布雨，被视为祥瑞。潜龙是龙处于潜伏状态的一种描述。" },
      "烏": { name: "烏", type: "animal", imageUrl: "图片/先秦动物/烏.png",description: "烏,乌鸦是一种常见的鸟类，分布广泛。" },
      "烏鳥": { name: "烏鳥", type: "animal", imageUrl: "图片/先秦动物/烏鳥.png",description: "烏鳥,同 “乌”，指乌鸦。" },
      "烏鳶": { name: "烏鳶", type: "animal", imageUrl: "图片/先秦动物/烏鳶.png",description: "烏鳶,即乌鸦和老鹰，这里主要指乌鸦。" },
      "烏鵲": { name: "烏鵲", type: "animal", imageUrl: "图片/先秦动物/烏鵲.png",description: "烏鵲,指乌鸦和喜鹊，有时也单指乌鸦。" },
      "煇鼠": { name: "煇鼠", type: "animal", imageUrl: "图片/先秦动物/煇鼠.png",description: "煇鼠,即鼯鼠，也称飞鼠。" },
      "熊": { name: "熊", type: "animal", imageUrl: "图片/先秦动物/熊.png",description: "熊,熊是大型哺乳动物，体型庞大，力量强大。" },
      "熊羆": { name: "熊羆", type: "animal", imageUrl: "图片/先秦动物/熊羆.png",description: "熊羆,熊和罴，罴是熊的一种，也叫棕熊，这里泛指熊类。" },
      "熊蹯": { name: "熊蹯", type: "animal", imageUrl: "图片/先秦动物/熊蹯.png",description: "熊蹯,指熊的脚掌，这里也可代指熊。" },
      "燕": { name: "燕", type: "animal", imageUrl: "图片/先秦动物/燕.png",description: "燕,燕子是常见的候鸟，体型小巧，飞行能力强。" },
      "燕雀": { name: "燕雀", type: "animal", imageUrl: "图片/先秦动物/燕雀.png",description: "燕雀,燕雀是一种小型鸟类，常成群活动。" },
      "牂羊": { name: "牂羊", type: "animal", imageUrl: "图片/先秦动物/牂羊.png",description: "牂羊,指母羊。" },
      "牛": { name: "牛", type: "animal", imageUrl: "图片/先秦动物/牛.png",description: "牛,牛是重要的家畜，体型较大，力气大。" },
      "牛牲": { name: "牛牲", type: "animal", imageUrl: "图片/先秦动物/牛牲.png",description: "牛牲,指用于祭祀或劳役的牛，强调其作为牺牲或生产工具的用途。" },
      "牛羊": { name: "牛羊", type: "animal", imageUrl: "图片/先秦动物/牛羊.png",description: "牛,牛是偶蹄目牛科牛亚科下的一族动物，通常体型较大，具有适应食草的特殊消化系统。它们是重要的家畜，在农业生产、运输和提供畜产品等方面发挥着关键作用。" },
      "牛馬": { name: "牛馬", type: "animal", imageUrl: "图片/先秦动物/牛馬.png",description: "马,马是一种草食性家畜，四肢修长，奔跑速度快，具有敏锐的听觉和视觉。马在人类历史上有着重要的地位，广泛应用于交通、战争、农业和竞技等领域。" },
      "牝牛": { name: "牝牛", type: "animal", imageUrl: "图片/先秦动物/牝牛.png",description: "牝牛,即母牛，是牛的雌性个体。在牛群中，牝牛主要负责繁殖后代，同时也可用于产奶和一些较轻的劳役。" },
      "牝虎": { name: "牝虎", type: "animal", imageUrl: "图片/先秦动物/牝虎.png",description: "牝虎,指雌性老虎。老虎是大型猫科动物，牝虎在繁殖和养育幼崽方面起着重要作用。" },
      "牝雞": { name: "牝雞", type: "animal", imageUrl: "图片/先秦动物/牝雞.png",description: "牝鸡,即母鸡，是鸡的雌性个体。母鸡主要用于产蛋和繁殖后代，是人类重要的家禽之一。" },
      "牡": { name: "牡", type: "animal", imageUrl: "图片/先秦动物/牡.png",description: "牡,本意为雄性的鸟或兽，在具体语境中可指代公牛、公羊等雄性家畜。这里以公牛为例，牡牛在牛群中主要用于配种，以繁殖后代，同时也可用于劳役。" },
      "牲": { name: "牲", type: "animal", imageUrl: "图片/先秦动物/牲.png",description: "牲,古代指供祭祀和食用的家畜，包括牛、羊、猪等。这里以牛为例，牲牛在祭祀中具有重要地位，同时也是人们重要的肉食来源。" },
      "牲牷": { name: "牲牷", type: "animal", imageUrl: "图片/先秦动物/牲牷.png",description: "牲牷,指纯色的全牲，即毛色纯正、完整无缺的祭祀用家畜，通常为牛、羊、猪等。这里以牛为例，牲牷牛在古代祭祀中被视为最尊贵的祭品。" },
      "牷": { name: "牷", type: "animal", imageUrl: "图片/先秦动物/牷.png",description: "牷,同 “牲牷”，指纯色的全牲，通常用于祭祀。这里以牛为例，牷牛是古代祭祀中毛色纯正、完整无缺的牛。" },
      "特豕": { name: "特豕", type: "animal", imageUrl: "图片/先秦动物/特豕.png",description: "特豕,指公猪。猪是杂食性家畜，特豕在猪群中主要用于配种繁殖后代。" },
      "特豚": { name: "特豚", type: "animal", imageUrl: "图片/先秦动物/特豚.png",description: "特豚,指小公猪。豚一般指小猪，特豚则明确为雄性小猪。小公猪在成长过程中，部分会被阉割用于育肥，部分留作种猪。" },
      "犀": { name: "犀", type: "animal", imageUrl: "图片/先秦动物/犀.png",description: "犀,犀牛是犀科动物的统称，是一种体型庞大、皮厚角长的草食性动物。犀牛在生态系统中具有重要地位，但其数量因人类活动而急剧减少，是濒危物种。" },
      "犀象": { name: "犀象", type: "animal", imageUrl: "图片/先秦动物/犀象.png",description: "犀象,这里 “犀象” 可能是指犀牛和大象。大象是陆地上最大的哺乳动物，以草、树叶、树枝等为食，是群居性动物，由雌象担任首领。犀牛介绍见上。" },
      "犆豕": { name: "犆豕", type: "animal", imageUrl: "图片/先秦动物/犆豕.png",description: "犆豕,同 “特豕”，指公猪。" },
      "犉": { name: "犉", type: "animal", imageUrl: "图片/先秦动物/犉.png",description: "犉,指黄毛黑唇的黄牛，是牛的一种。在古代，犉牛是重要的家畜，用于劳役、祭祀和食用。" },
      "犢": { name: "犢", type: "animal", imageUrl: "图片/先秦动物/犢.png",description: "犊,指小牛，是牛的幼崽。犊牛在成长过程中需要母牛的哺育和保护，是牛群的未来希望。" },
      "犧": { name: "犧", type: "animal", imageUrl: "图片/先秦动物/犧.png",description: "牺,古代称做祭品用的纯色牲畜，通常为牛、羊、猪等。这里以牛为例，牺牛是毛色纯正、用于祭祀的牛，被视为神圣的祭品。" },
      "犧猳": { name: "犧猳", type: "animal", imageUrl: "图片/先秦动物/犧猳.png",description: "牺猳,指古代祭祀用的纯色雄猪。猳指公猪，牺猳则强调是用于祭祀且毛色纯正的公猪。" },
      "犬": { name: "犬", type: "animal", imageUrl: "图片/先秦动物/犬.png",description: "犬,狗是人类最早驯化的家畜之一，属于食肉目犬科动物。狗具有敏锐的嗅觉、听觉和视觉，能与人类建立亲密的关系，在人类生活中扮演着多种角色。" },
      "犬馬": { name: "犬馬", type: "animal", imageUrl: "图片/先秦动物/犬馬.png",description: "犬马,犬和马是人类最早驯化的动物之一。犬具有敏锐的嗅觉、听觉，能帮助人类狩猎、看家护院等；马是重要的役畜，可用于骑乘、拉车、耕地等，在战争中也发挥着重要作用。" },
      "狐": { name: "狐", type: "animal", imageUrl: "图片/先秦动物/狐.png",description: "狐,狐是一种肉食性哺乳动物，具有灵活的身体和敏锐的感官。" },
      "狐狸": { name: "狐狸", type: "animal", imageUrl: "图片/先秦动物/狐狸.png",description: "狐,狐是一种肉食性哺乳动物，具有灵活的身体和敏锐的感官。" },
      "狐白": { name: "狐白", type: "animal", imageUrl: "图片/先秦动物/狐白.png",description: "犬马,犬和马是人类最早驯化的动物之一。犬具有敏锐的嗅觉、听觉，能帮助人类狩猎、看家护院等；马是重要的役畜，可用于骑乘、拉车、耕地等，在战争中也发挥着重要作用。" },
      "狐貍": { name: "狐貍", type: "animal", imageUrl: "图片/先秦动物/狐貍.png",description: "狐,狐是一种肉食性哺乳动物，具有灵活的身体和敏锐的感官。" },
      "狖": { name: "狖", type: "animal", imageUrl: "图片/先秦动物/狖.png",description: "狐白,指狐狸腋下的白色皮毛，极为珍贵，也常用来指代用狐白裘制成的衣服。这里将其视为狐的一种特殊情况。" },
      "狗": { name: "狗", type: "animal", imageUrl: "图片/先秦动物/狗.png",description: "狖,古书上说的一种猴。" },
      "狗彘": { name: "狗彘", type: "animal", imageUrl: "图片/先秦动物/狗彘.png",description: "狗,狗是人类最忠实的伙伴之一，经过长期驯化，有众多品种，性格和用途各异。" },
      "狡": { name: "狡", type: "animal", imageUrl: "图片/先秦动物/狡.png",description: "狡,一种传说中的兽名，也可能是对某些狡猾动物的统称，这里推测可能与狐或犬科动物有关。" },
      "狡蟲": { name: "狡蟲", type: "animal", imageUrl: "图片/先秦动物/狡蟲.png",description: "狡蟲,泛指凶猛的野兽，这里不特指某一种动物，可能包含狼、虎、豹等多种食肉动物。" },
      "狸": { name: "狸", type: "animal", imageUrl: "图片/先秦动物/狸.png",description: "狸,狸一般指豹猫，是一种小型猫科动物。" },
      "狼": { name: "狼", type: "animal", imageUrl: "图片/先秦动物/狼.png",description: "狼,狼是一种群居性极高的动物，具有很强的社会性和等级制度。" },
      "猏": { name: "猏", type: "animal", imageUrl: "图片/先秦动物/猏.png",description: "猏,一种短嘴的狗。" },
      "猘狗": { name: "猘狗", type: "animal", imageUrl: "图片/先秦动物/猘狗.png",description: "猘狗,疯狗。也用来比喻凶猛的人。" },
      "猛狗": { name: "猛狗", type: "animal", imageUrl: "图片/先秦动物/猛狗.png",description: "猛狗,泛指凶猛的狗。" },
      "猩猩": { name: "猩猩", type: "animal", imageUrl: "图片/先秦动物/猩猩.png",description: "猩猩,猩猩是灵长目猩猩科猩猩属动物的统称，包括红毛猩猩、黑猩猩等多个种类。" },
      "猪": { name: "猪", type: "animal", imageUrl: "图片/先秦动物/猪.png",description: "猪,猪是一种常见的家畜，经过长期驯化，有许多品种，可分为家猪和野猪。家猪是人类重要的肉食来源之一，野猪则是野生的猪科动物。" },
      "猱": { name: "猱", type: "animal", imageUrl: "图片/先秦动物/猱.png",description: "猱,古书上所说的一种猴，也可能是指一些小型灵长类动物。" },
      "猴": { name: "猴", type: "animal", imageUrl: "图片/先秦动物/猴.png",description: "猴,猴是灵长目动物的代表，种类繁多，具有活泼好动、聪明伶俐的特点。" },
      "猿": { name: "猿", type: "animal", imageUrl: "图片/先秦动物/猿.png",description: "猿,猿是灵长目猿科动物的统称，包括长臂猿、猩猩等多种大型灵长类动物，与人类亲缘关系较近。" },
      "獐": { name: "獐", type: "animal", imageUrl: "图片/先秦动物/獐.png",description: "獐,獐是一种小型鹿科动物，又称河麂。" },
      "獒": { name: "獒", type: "animal", imageUrl: "图片/先秦动物/獒.png",description: "獒,獒是一种大型犬，通常具有强壮的体魄和忠诚的性格，是优秀的护卫犬。" },
      "獸": { name: "獸", type: "animal", imageUrl: "图片/先秦动物/獸.png",description: "獸,一般指哺乳动物，是脊椎动物亚门的一纲。多数哺乳动物具有胎生、哺乳的特征，身体被毛，体温恒定，具有发达的神经系统和感觉器官，能够适应多种复杂的环境。" },
      "獸物": { name: "獸物", type: "animal", imageUrl: "图片/先秦动物/獸物.png",description: "獸物,在先秦时期，“兽物” 可能是对各种兽类的统称，涵盖了多种不同的哺乳动物。由于概念较为宽泛，具体所指需根据上下文确定。" },
      "獺": { name: "獺", type: "animal", imageUrl: "图片/先秦动物/獺.png",description: "獺,水獭是鼬科水獭属动物，多穴居，生活在河流和湖泊一带，尤其喜欢生活在两岸林木繁茂的溪河地带。" },
      "獻": { name: "獻", type: "animal", imageUrl: "图片/先秦动物/獻.png",description: "獻,“獻” 字在先秦时期可能并非专指某一种动物，可能与祭祀、进献等活动有关的动物，常作为祭品进献给神灵或祖先。根据文献记载，可能包括牛、羊、猪等家畜，也可能包括一些野生动物。" },
      "獼猴": { name: "獼猴", type: "animal", imageUrl: "图片/先秦动物/獼猴.png",description: "獼猴,猕猴是灵长目猴科猕猴属动物，是一种常见的猴子种类。" },
      "獾獾": { name: "獾獾", type: "animal", imageUrl: "图片/先秦动物/獾獾.png",description: "獾獾,獾是鼬科獾属动物的统称，常见的有狗獾、猪獾等种类。" },
      "玃": { name: "玃", type: "animal", imageUrl: "图片/先秦动物/玃.png",description: "玃,玃是古代传说中的一种大猴。据《尔雅・释兽》记载：“猱，蝚，善援。玃父善顾。” 郭璞注：“玃似猕猴而大，色苍黑，能攫持人，好顾盼。”" },
      "玄武": { name: "玄武", type: "animal", imageUrl: "图片/先秦动物/玄武.png",description: "玄武,玄武是中国古代神话中的天之四灵之一，源于远古星宿崇拜，是代表颛顼与北方七宿的北方之神。从形象上看，玄武是一种由龟和蛇组合成的一种灵物。" },
      "玄螭": { name: "玄螭", type: "animal", imageUrl: "图片/先秦动物/玄螭.png",description: "玄螭,玄螭是中国古代传说中的一种龙类神怪生物。螭是古代神话传说中一种没有角的龙，而玄螭通常被描述为黑色的螭。" },
      "玄鳥": { name: "玄鳥", type: "animal", imageUrl: "图片/先秦动物/玄鳥.png",description: "玄鳥,玄鸟是中国古代神话中的神鸟，最初是古代东夷部落的图腾崇拜对象。据《史记・殷本纪》记载：“殷契，母曰简狄，有娀氏之女，为帝喾次妃。三人行浴，见玄鸟堕其卵，简狄取吞之，因孕生契。” 可见玄鸟在殷人的神话传说中具有重要地位。一般认为玄鸟是燕子。" },
      "玄鶴": { name: "玄鶴", type: "animal", imageUrl: "图片/先秦动物/玄鶴.png",description: "玄鶴,玄鹤是古代传说中的一种神鸟，通常被描述为黑色的鹤。鹤在中国文化中一直具有很高的地位，被视为吉祥、长寿的象征。玄鹤则在此基础上增添了神秘的色彩。" },
      "王鮪": { name: "王鮪", type: "animal", imageUrl: "图片/先秦动物/王鮪.png",description: "王鮪,大型海洋鱼类，通常指鲟鱼或鳇鱼，是一种古老的鱼类，在地球上已生存了数千万年甚至更久。它们体型巨大，是海洋中的大型掠食者。" },
      "班馬": { name: "班馬", type: "animal", imageUrl: "图片/先秦动物/班馬.png",description: "班馬,一种有黑白相间条纹的马，可能是指野生的斑马或经过人工选育具有类似条纹特征的马。斑马是非洲特有的动物。" },
      "生魚": { name: "生魚", type: "animal", imageUrl: "图片/先秦动物/生魚.png",description: "生魚,一般指乌鳢，是一种常见的淡水鱼类，具有很强的适应性和生存能力。" },
      "生鵝": { name: "生鵝", type: "animal", imageUrl: "图片/先秦动物/生鵝.png",description: "生鵝,即鹅，是人类驯化的一种家禽，由野生的鸿雁或灰雁驯化而来。" },
      "田犬": { name: "田犬", type: "animal", imageUrl: "图片/先秦动物/田犬.png",description: "田犬,指用于田猎的狗，一般是经过训练的猎犬，帮助猎人追捕猎物。实际上就是家犬的一种特殊用途类型。" },
      "田獵": { name: "田獵", type: "animal", imageUrl: "图片/先秦动物/田獵.png",description: "田獵,“田猎” 并非动物名称，而是指古代的一种狩猎活动，人们在田野、山林等地方猎取各种野生动物。" },
      "田豕": { name: "田豕", type: "animal", imageUrl: "图片/先秦动物/田豕.png",description: "田豕,通常指野猪，是一种野生的猪科动物，在先秦时期可能经常在农田附近出没，对庄稼造成破坏，所以被称为 “田豕”。" },
      "田馬": { name: "田馬", type: "animal", imageUrl: "图片/先秦动物/田馬.png",description: "田馬,可能是指用于田间劳作或在田野间活动的马，也可能是指适合在野外环境生存和奔跑的马，与用于战争或其他特殊用途的马有所区别。实际上还是马这种动物，只是根据其用途或生活环境来命名。" },
      "田鼠": { name: "田鼠", type: "animal", imageUrl: "图片/先秦动物/田鼠.png",description: "田鼠,是仓鼠科田鼠亚科的一类啮齿动物，种类繁多，在田野、草原等环境中广泛分布。" },
      "畜": { name: "畜", type: "animal", imageUrl: "图片/先秦动物/畜.png",description: "畜,在先秦时期，“畜” 是一个比较宽泛的概念，泛指人类饲养的各种家畜，如牛、马、羊、猪、狗、鸡等，这些动物被人类驯化用于各种用途。" },
      "畜牲": { name: "畜牲", type: "animal", imageUrl: "图片/先秦动物/畜牲.png",description: "畜牲,“畜牲” 也是对家畜的一种统称，与 “畜” 的含义相近，但在一些语境中也带有一定的贬义，用于指代那些被认为行为不端或缺乏道德的人，是一种比喻用法。在实际指代动物时，包括牛、马、羊、猪、狗、鸡等各种家畜。" },
      "當兔": { name: "當兔", type: "animal", imageUrl: "图片/先秦动物/當兔.png",description: "當兔,不太明确具体所指的动物，可能是一种当地特有的兔子品种，或者是在当时特定地域或文化背景下对兔子的一种特殊称呼。由于资料有限，难以准确确定其详细信息。" },
      "白狗": { name: "白狗", type: "animal", imageUrl: "图片/先秦动物/白狗.png",description: "白狗,指白色的狗，是家犬的一种毛色表现形式。狗是人类最早驯化的动物之一，经过长期的选育和繁殖，形成了众多品种，白狗可以是各种品种的狗中具有白色毛发的个体。" },
      "白虎": { name: "白虎", type: "animal", imageUrl: "图片/先秦动物/白虎.png",description: "白虎,是虎的一种变种，其毛色为白色，带有黑色或褐色的条纹。虎是世界上最大的猫科动物之一，在先秦时期被人们所熟知和敬畏。" },
      "白鳥": { name: "白鳥", type: "animal", imageUrl: "图片/先秦动物/白鳥.png",description: "白鳥,通常指白色的鸟类，可能包括多种不同的鸟类品种，如白鹭、天鹅、白鹤等白色羽毛的鸟类。在先秦时期，人们对鸟类的分类还没有现代科学那么细致，所以 “白鸟” 是一个比较笼统的称呼。" },
      "短狐": { name: "短狐", type: "animal", imageUrl: "图片/先秦动物/短狐.png",description: "短狐,即蜮，是中国古代传说中的一种能含沙射人的动物，实际可能是一种水生昆虫或小型水生动物。" },
      "碩鼠": { name: "碩鼠", type: "animal", imageUrl: "图片/先秦动物/碩鼠.png",description: "硕鼠,指大老鼠，也常用来比喻不劳而获、贪婪的人。" },
      "社鼠": { name: "社鼠", type: "animal", imageUrl: "图片/先秦动物/社鼠.png",description: "社鼠,生活在社庙中的老鼠，借指倚仗权势为非作歹的小人。" },
      "祈羊": { name: "祈羊", type: "animal", imageUrl: "图片/先秦动物/祈羊.png",description: "祈羊,用于祭祀祈福的羊，通常是经过挑选的毛色纯正、体型健壮的羊。" },
      "神龍": { name: "神龍", type: "animal", imageUrl: "图片/先秦动物/神龍.png",description: "神龙,中国古代传说中的神异动物，能兴云布雨、腾云驾雾，是吉祥和权力的象征。" },
      "禽": { name: "禽", type: "animal", imageUrl: "图片/先秦动物/禽.png",description: "禽,泛指鸟类，也可指鸟兽的总称。在先秦时期，人们对禽的分类还比较笼统，包括各种不同种类的鸟类。" },
      "禽獸": { name: "禽獸", type: "animal", imageUrl: "图片/先秦动物/禽獸.png",description: "禽兽,泛指鸟类和兽类，是对动物的统称。在先秦时期，人们用禽兽来区分人类和其他动物，强调人类与动物的区别。" },
      "種馬": { name: "種馬", type: "animal", imageUrl: "图片/先秦动物/種馬.png",description: "种马,用于配种的公马，通常具有优良的血统和强壮的体魄，以繁殖出优秀的后代。" },
      "稷牛": { name: "稷牛", type: "animal", imageUrl: "图片/先秦动物/稷牛.png",description: "稷牛,用于祭祀稷神的牛，稷神是主管农业的神灵，稷牛通常是经过精心挑选和饲养的牛，用于祭祀仪式以祈求农业丰收。" },
      "稺牛": { name: "稺牛", type: "animal", imageUrl: "图片/先秦动物/稺牛.png",description: "稺牛,小牛，即年幼的牛。在先秦时期，稺牛是畜牧业中的重要资源，随着成长可用于农耕、运输或作为祭祀用品等。" },
      "竈": { name: "竈", type: "animal", imageUrl: "图片/先秦动物/竈.png",description: "竈,此处可能是笔误，推测应为 “灶马”。灶马是一种昆虫，常生活在灶间等温暖的地方。" },
      "累牛": { name: "累牛", type: "animal", imageUrl: "图片/先秦动物/累牛.png",description: "累牛,指耕牛或拉车的牛，也可泛指普通的牛。在先秦时期，牛是重要的劳动力，用于农耕、运输等生产活动。" },
      "綠耳": { name: "綠耳", type: "animal", imageUrl: "图片/先秦动物/綠耳.png",description: "绿耳,古代名马，传说是周穆王的八骏之一，以其奔跑速度快和耐力强而闻名。" },
      "纍牛": { name: "纍牛", type: "animal", imageUrl: "图片/先秦动物/纍牛.png",description: "纍牛,同 “累牛”，指耕牛或拉车的牛，是古代农业生产和交通运输中重要的劳动力。" },
      "纖離": { name: "纖離", type: "animal", imageUrl: "图片/先秦动物/纖離.png",description: "纤离,古代良马名，传说中是一种非常优秀的骏马，可能是西域地区的优良马种，以其优美的体态和出色的奔跑能力著称。" },
      "羆": { name: "羆", type: "animal", imageUrl: "图片/先秦动物/羆.png",description: "羆,指熊，是一种大型哺乳动物，在先秦时期的山林中较为常见，具有强大的力量和凶猛的性格。" },
      "羊": { name: "羊", type: "animal", imageUrl: "图片/先秦动物/羊.png",description: "羊,羊是一种常见的家畜，在先秦时期已被广泛饲养，有多种用途，如提供肉食、皮毛、奶制品等。" },
      "羔": { name: "羔", type: "animal", imageUrl: "图片/先秦动物/羔.png",description: "羔,小羊，尤指未满一岁或未长恒齿的小绵羊。" },
      "羔羊": { name: "羔羊", type: "animal", imageUrl: "图片/先秦动物/羔羊.png",description: "羔羊,同 “羔”，强调是幼小的羊。" },
      "羖": { name: "羖", type: "animal", imageUrl: "图片/先秦动物/羖.png",description: "羖,黑色的公羊，也泛指公羊。" },
      "羜": { name: "羜", type: "animal", imageUrl: "图片/先秦动物/羜.png",description: "羜,出生五个月的小羊。" },
      "羝": { name: "羝", type: "animal", imageUrl: "图片/先秦动物/羝.png",description: "羝,公羊。" },
      "羝羊": { name: "羝羊", type: "animal", imageUrl: "图片/先秦动物/羝羊.png",description: "羝羊,同 “羝”，即公羊。" },
      "群鳥": { name: "群鳥", type: "animal", imageUrl: "图片/先秦动物/群鳥.png",description: "群鳥,泛指成群的鸟类，不是特指某一种鸟。" },
      "羵羊": { name: "羵羊", type: "animal", imageUrl: "图片/先秦动物/羵羊.png",description: "羵羊,古代传说中的一种怪兽，据说是土中出现的羊状怪物。也有说法认为是大羊。" },
      "翢翢": { name: "翢翢", type: "animal", imageUrl: "图片/先秦动物/翢翢.png",description: "翢翢,一种水鸟，具体所指可能因时代和地域有所不同，有说法认为是鹙，即秃鹙。" },
      "脊令": { name: "脊令", type: "animal", imageUrl: "图片/先秦动物/脊令.png",description: "脊令,即鹡鸰，是一种常见的鸟类。" },
      "腥魚": { name: "腥魚", type: "animal", imageUrl: "图片/先秦动物/腥魚.png",description: "腥魚,指有腥味的鱼，通常是指未经处理或新鲜度较高的鱼，不是特指某一种鱼类。" },
      "腯肥": { name: "腯肥", type: "animal", imageUrl: "图片/先秦动物/腯肥.png",description: "腯肥,指牲畜肥壮，不是指具体的某一种动物，而是形容动物肥胖壮实的状态。" },
      "舒鳧": { name: "舒鳧", type: "animal", imageUrl: "图片/先秦动物/舒鳧.png",description: "舒鳧,指鸭，是一种常见的家禽。" },
      "舒鴈": { name: "舒鴈", type: "animal", imageUrl: "图片/先秦动物/舒鴈.png",description: "舒鴈,指鹅，是一种常见的家禽。" },
      "良馬": { name: "良馬", type: "animal", imageUrl: "图片/先秦动物/良馬.png",description: "良馬,先秦时期对品质优良、适合乘骑或劳作马匹的统称。马是一种草食性家畜，经过人类长期驯化，成为重要的交通工具和生产劳动力。" },
      "芻豢": { name: "芻豢", type: "animal", imageUrl: "图片/先秦动物/芻豢.png",description: "芻豢,指牛羊猪狗等家畜，是古代人们饲养的主要肉类来源动物。这些动物在先秦时期的农业社会中具有重要的经济地位。" },
      "草蟲": { name: "草蟲", type: "animal", imageUrl: "图片/先秦动物/草蟲.png",description: "草蟲,一般指蝗虫、螽斯等昆虫，多以植物为食，在先秦时期的农业生产中是常见的害虫，但也是一些动物的食物来源。" },
      "莎雞": { name: "莎雞", type: "animal", imageUrl: "图片/先秦动物/莎雞.png",description: "莎雞,即纺织娘，是一种常见的昆虫，因其叫声似织布机的声音而得名。" },
      "華蟲": { name: "華蟲", type: "animal", imageUrl: "图片/先秦动物/華蟲.png",description: "華蟲,古代指雉鸡，羽毛色彩艳丽，在先秦时期常被作为礼服上的装饰图案，具有一定的文化象征意义。" },
      "蒙鳩": { name: "蒙鳩", type: "animal", imageUrl: "图片/先秦动物/蒙鳩.png",description: "蒙鳩,即鹪鹩，是一种体型较小的鸟类，常栖息于灌木丛和森林中。" },
      "蒼庚": { name: "蒼庚", type: "animal", imageUrl: "图片/先秦动物/蒼庚.png",description: "蒼庚,即黄鹂，是一种常见的鸟类，以其悦耳的歌声和鲜艳的羽毛而闻名。" },
      "蒼蠅": { name: "蒼蠅", type: "animal", imageUrl: "图片/先秦动物/蒼蠅.png",description: "蒼蠅,即常见的家蝇，是一种分布广泛的昆虫，与人类生活环境密切相关。" },
      "蒼龍": { name: "蒼龍", type: "animal", imageUrl: "图片/先秦动物/蒼龍.png",description: "蒼龍,古代传说中的一种青色的龙，是中国古代神话中的重要角色，常与东方、春天等元素相关联。" },
      "蓼蟲": { name: "蓼蟲", type: "animal", imageUrl: "图片/先秦动物/蓼蟲.png",description: "蓼蟲,指生活在蓼草上的昆虫，一般认为是水蓼虫，以蓼草为食。" },
      "虎": { name: "虎", type: "animal", imageUrl: "图片/先秦动物/虎.png",description: "虎,大型猫科动物，是自然界中的顶级食肉动物，具有强大的力量和凶猛的性格。" },
      "虎狼": { name: "虎狼", type: "animal", imageUrl: "图片/先秦动物/虎狼.png",description: "虎狼,通常指老虎和狼，这两种动物都是凶猛的食肉动物，常被一起提及，用来形容凶猛、残忍的事物或人。" },
      "虎豹": { name: "虎豹", type: "animal", imageUrl: "图片/先秦动物/虎豹.png",description: "虎豹,虎和豹的统称。虎是大型猫科动物，豹也是猫科豹属动物，两者都是凶猛的食肉动物" },
      "虬龍": { name: "虬龍", type: "animal", imageUrl: "图片/先秦动物/虬龍.png",description: "虬龍,古代传说中的一种龙，身体弯曲，无角或有小角" },
      "虱": { name: "虱", type: "animal", imageUrl: "图片/先秦动物/虱.png",description: "虱,寄生在人、畜身上的一种小型昆虫，以吸食血液为生" },
      "虵": { name: "虵", type: "animal", imageUrl: "图片/先秦动物/虵.png",description: "虵,即蛇，是具有多样形态和习性的爬行动物，身体细长，无四肢" },
      "虺": { name: "虺", type: "animal", imageUrl: "图片/先秦动物/虺.png",description: "虺,一种毒蛇，也有说法认为是小蛇或蜥蜴类动物" },
      "虺蛇": { name: "虺蛇", type: "animal", imageUrl: "图片/先秦动物/虺蛇.png",description: "虺蛇,泛指毒蛇或小蛇，与虺的概念相近" },
      "虺蜴": { name: "虺蜴", type: "animal", imageUrl: "图片/先秦动物/虺蜴.png",description: "虺蜴,一般指蜥蜴，也可能包括一些小型毒蛇，是一类具有多样形态和习性的爬行动物" },
      "虻": { name: "虻", type: "animal", imageUrl: "图片/先秦动物/虻.png",description: "虻,双翅目昆虫，体型较大，通常比一般的苍蝇大，以吸食动物血液或取食花粉、花蜜为生" },
      "蚊": { name: "蚊", type: "animal", imageUrl: "图片/先秦动物/蚊.png",description: "蚊,双翅目蚊科昆虫，体型较小，雌性以吸食人、动物的血液为生，雄性主要吸食花蜜和植物汁液" },
      "蚋": { name: "蚋", type: "animal", imageUrl: "图片/先秦动物/蚋.png",description: "蚋,一类小型昆虫，与蚊子相似，通常被称为 “黑蝇”，以吸食人、动物的血液为生" },
      "蚌": { name: "蚌", type: "animal", imageUrl: "图片/先秦动物/蚌.png",description: "蚌,双壳贝类动物，具有两片坚硬的外壳，生活在淡水或咸水环境中" },
      "蚓": { name: "蚓", type: "animal", imageUrl: "图片/先秦动物/蚓.png",description: "蚓,即蚯蚓，是常见的陆生环节动物，生活在土壤中" },
      "蚖": { name: "蚖", type: "animal", imageUrl: "图片/先秦动物/蚖.png",description: "蚖,一种类似蜥蜴的爬行动物，也有说法认为是指蝾螈或蚯蚓等生物，具体所指在古代文献中存在争议" },
      "蚘": { name: "蚘", type: "animal", imageUrl: "图片/先秦动物/蚘.png",description: "蚘,通常指蛔虫，是一种常见的人体肠道寄生虫" },
      "蚤": { name: "蚤", type: "animal", imageUrl: "图片/先秦动物/蚤.png",description: "蚤,蚤目昆虫，体型小，能在动物体表或人类居住环境中生存，以吸食血液为生" },
      "蚯蚓": { name: "蚯蚓", type: "animal", imageUrl: "图片/先秦动物/蚯蚓.png",description: "蚯蚓,即蚯蚓，是常见的陆生环节动物，生活在土壤中" },
      "蚯螾": { name: "蚯螾", type: "animal", imageUrl: "图片/先秦动物/蚯螾.png",description: "蚯螾,即蚯蚓，是常见的陆生环节动物，生活在土壤中" },
      "蚳": { name: "蚳", type: "animal", imageUrl: "图片/先秦动物/蚳.png",description: "蚳,指蚁卵，也有说法认为是指白蚁的幼虫或一种小蝉，在古代文献中的所指存在一定争议" },
      "蚼蠋": { name: "蚼蠋", type: "animal", imageUrl: "图片/先秦动物/蚼蠋.png",description: "蚼蠋,一种昆虫，具体所指在古代文献中不太明确，可能是指蛾类的幼虫或某种甲虫的幼虫" },
      "蛆": { name: "蛆", type: "animal", imageUrl: "图片/先秦动物/蛆.png",description: "蛆,双翅目昆虫的幼虫，常见的是蝇类的幼虫，多生活在腐败的有机物中" },
      "蛇": { name: "蛇", type: "animal", imageUrl: "图片/先秦动物/蛇.png",description: "蛇,是具有多样形态和习性的爬行动物，身体细长，无四肢" },
      "蛇蟺": { name: "蛇蟺", type: "animal", imageUrl: "图片/先秦动物/蛇蟺.png",description: "蛇蟺,泛指蛇类，“蟺” 也有大蛇的意思" },
      "蛟": { name: "蛟", type: "animal", imageUrl: "图片/先秦动物/蛟.png",description: "蛟,古代传说中的一种龙，通常被描述为能发洪水的龙，也有人认为是鳄鱼或巨蟒等动物的神化形象" },
      "蛟龍": { name: "蛟龍", type: "animal", imageUrl: "图片/先秦动物/蛟龍.png",description: "蛟龍,蛟和龙的统称，在古代传说中，蛟是龙的一种，或认为是龙的幼年期形态，也有将蛟与龙视为不同的神物" },
      "蛤": { name: "蛤", type: "animal", imageUrl: "图片/先秦动物/蛤.png",description: "蛤,双壳贝类动物的统称，包括许多不同的种类，生活在海洋或淡水中" },
      "蛹": { name: "蛹", type: "animal", imageUrl: "图片/先秦动物/蛹.png",description: "蛹,完全变态昆虫在由幼虫向成虫转化时的一个阶段，处于不食不动的状态，外部有保护结构。" },
      "蛾": { name: "蛾", type: "animal", imageUrl: "图片/先秦动物/蛾.png",description: "蛾,昆虫，种类繁多，多在夜间活动，具有趋光性，与蝴蝶同属鳞翅目。" },
      "蜂": { name: "蜂", type: "animal", imageUrl: "图片/先秦动物/蜂.png",description: "蜂,昆虫，种类繁多，一般具有群居性，以花粉和花蜜为食，有些种类会蜇人。" },
      "蜃": { name: "蜃", type: "animal", imageUrl: "图片/先秦动物/蜃.png",description: "蜃,中国古代传说中的一种海怪，形似大蛤。也有一种说法认为蜃是大蛤蜊或蚌类。" },
      "蜉蝣": { name: "蜉蝣", type: "animal", imageUrl: "图片/先秦动物/蜉蝣.png",description: "蜉蝣,一种原始的有翅昆虫，寿命极短，成虫不取食，主要以幼虫形态在水中生活。" },
      "蜚鳥": { name: "蜚鳥", type: "animal", imageUrl: "图片/先秦动物/蜚鳥.png",description: "蜚鳥,泛指会飞的鸟类。" },
      "蜥蜴": { name: "蜥蜴", type: "animal", imageUrl: "图片/先秦动物/蜥蜴.png",description: "蜥蜴,爬行类动物，身体细长，有四肢，皮肤有角质鳞片，是肉食性或杂食性动物。" },
      "蜩": { name: "蜩", type: "animal", imageUrl: "图片/先秦动物/蜩.png",description: "蜩,蝉的一种，通常指夏秋间鸣叫声较响亮的蝉。" },
      "蜮": { name: "蜮", type: "animal", imageUrl: "图片/先秦动物/蜮.png",description: "蜮,古代传说中一种能含沙射人的动物，也有人认为是一种生活在水中的甲虫。" },
      "蜱": { name: "蜱", type: "animal", imageUrl: "图片/先秦动物/蜱.png",description: "蜱,节肢动物，体型较小，通常寄生在哺乳动物、鸟类和爬行动物身上，吸食血液。" },
      "蜺": { name: "蜺", type: "animal", imageUrl: "图片/先秦动物/蜺.png",description: "蜺,古书上指寒蝉，也有说法认为是一种似龙的神物，或指虹的一种。这里按寒蝉解释。" },
      "蜾蠃": { name: "蜾蠃", type: "animal", imageUrl: "图片/先秦动物/蜾蠃.png",description: "蜾蠃,一种寄生蜂，常捕捉螟蛉等害虫的幼虫，将其带回巢中作为自己幼虫的食物。" },
      "蝗": { name: "蝗", type: "animal", imageUrl: "图片/先秦动物/蝗.png",description: "蝗,蝗虫，是一种植食性昆虫，种类繁多，常大量聚集形成蝗灾，对农作物造成严重破坏。" },
      "蝗蟲": { name: "蝗蟲", type: "animal", imageUrl: "图片/先秦动物/蝗蟲.png",description: "蝘蜓,壁虎，是一种常见的爬行动物，能在墙壁、天花板等垂直表面爬行。" },
      "蝘蜓": { name: "蝘蜓", type: "animal", imageUrl: "图片/先秦动物/蝘蜓.png",description: "蝚,一种蝉类昆虫，具体所指可能因地域和文献记载有所不同，一般认为是一种较小的蝉。" },
      "蝚": { name: "蝚", type: "animal", imageUrl: "图片/先秦动物/蝚.png",description: "蝚,一种小蝉。《尔雅・释虫》郭璞注：“蝚，音柔，小虫也，似蝉而小。”" },
      "蝝": { name: "蝝", type: "animal", imageUrl: "图片/先秦动物/蝝.png",description: "蝝,蝗的幼虫。《春秋・隐公五年》：“秋，螟。” 孔颖达疏：“蝝是蝗之幼虫。”" },
      "蝦": { name: "蝦", type: "animal", imageUrl: "图片/先秦动物/蝦.png",description: "蝦,即现代所说的虾。虾是一种生活在水中的节肢动物，种类繁多。" },
      "蝨": { name: "蝨", type: "animal", imageUrl: "图片/先秦动物/蝨.png",description: "蝨,即虱子，是一种寄生性昆虫。" },
      "蝮蛇": { name: "蝮蛇", type: "animal", imageUrl: "图片/先秦动物/蝮蛇.png",description: "蝮蛇,一种毒蛇，在中国分布较广。" },
      "蝯": { name: "蝯", type: "animal", imageUrl: "图片/先秦动物/蝯.png",description: "蝯,即猿，是灵长目动物的一种。" },
      "蝸": { name: "蝸", type: "animal", imageUrl: "图片/先秦动物/蝸.png",description: "蝸,指蜗牛，是一种常见的软体动物。" },
      "螇蛆": { name: "螇蛆", type: "animal", imageUrl: "图片/先秦动物/螇蛆.png",description: "螇蛆,即蟋蟀，是一种常见的昆虫。" },
      "螓": { name: "螓", type: "animal", imageUrl: "图片/先秦动物/螓.png",description: "螓,一种像蝉的昆虫，也有说法认为是蝉的一种。" },
      "螗": { name: "螗", type: "animal", imageUrl: "图片/先秦动物/螗.png",description: "螗,一种较小的蝉。《诗经・大雅・荡》：“如蜩如螗，如沸如羹。” 毛传：“螗，蜩也，小者曰螗。”" },
      "螝": { name: "螝", type: "animal", imageUrl: "图片/先秦动物/螝.png",description: "螝,有说法认为是蛾类的幼虫。也有解释为一种像蝉的昆虫。" },
      "螟": { name: "螟", type: "animal", imageUrl: "图片/先秦动物/螟.png",description: "螟,螟虫，是鳞翅目昆虫的一类，种类繁多，常见的有稻螟、玉米螟等。" },
      "螟蛉": { name: "螟蛉", type: "animal", imageUrl: "图片/先秦动物/螟蛉.png",description: "螟蛉,螟蛉是一种绿色小虫，也被认为是稻螟蛉等螟蛾的幼虫。" },
      "螟蜮": { name: "螟蜮", type: "animal", imageUrl: "图片/先秦动物/螟蜮.png",description: "螟蜮,泛指危害农作物的害虫，也有说法认为是螟虫和蜮虫的统称。蜮是一种传说中的害虫，能含沙射人。" },
      "螢": { name: "螢", type: "animal", imageUrl: "图片/先秦动物/螢.png",description: "螢,萤火虫，是一种能发光的昆虫。" },
      "螣": { name: "螣", type: "animal", imageUrl: "图片/先秦动物/螣.png",description: "螣,即螣蛇，是一种传说中的神蛇，在中国古代文献中有记载。也有说法认为是一种能飞的蛇，可能是对一些树栖蛇类的神化描述。" },
      "螣蛇": { name: "螣蛇", type: "animal", imageUrl: "图片/先秦动物/螣蛇.png",description: "螣蛇,即螣蛇，是一种传说中的神蛇，在中国古代文献中有记载。也有说法认为是一种能飞的蛇，可能是对一些树栖蛇类的神化描述。" },
      "螣螟": { name: "螣螟", type: "animal", imageUrl: "图片/先秦动物/螣螟.png",description: "螣螟,一种螟虫，具体所指可能因时代和地域有所不同，通常是危害农作物的害虫。" },
      "螬": { name: "螬", type: "animal", imageUrl: "图片/先秦动物/螬.png",description: "螬,通常指金龟子的幼虫，是一种常见的地下害虫。" },
      "螭": { name: "螭", type: "animal", imageUrl: "图片/先秦动物/螭.png",description: "螭,古代传说中的一种没有角的龙，也被认为是龙的一种变体。" },
      "螭魅": { name: "螭魅", type: "animal", imageUrl: "图片/先秦动物/螭魅.png",description: "螭魅,也作 “魑魅”，是中国古代神话传说中的山林精怪。" },
      "螭龍": { name: "螭龍", type: "animal", imageUrl: "图片/先秦动物/螭龍.png",description: "螭龍,即螭，是龙的一种，在古代文化中地位较高。" },
      "螯": { name: "螯", type: "animal", imageUrl: "图片/先秦动物/螯.png",description: "螯,本指螃蟹等节肢动物变形的第一对脚，形状像钳子，也可代指具有螯的动物。" },
      "螳蜋": { name: "螳蜋", type: "animal", imageUrl: "图片/先秦动物/螳蜋.png",description: "螳蜋,即螳螂，是一种常见的昆虫。" },
      "螻": { name: "螻", type: "animal", imageUrl: "图片/先秦动物/螻.png",description: "螻,通常指蝼蛄，是一种常见的农业害虫。" },
      "螻蛄": { name: "螻蛄", type: "animal", imageUrl: "图片/先秦动物/螻蛄.png",description: "螻蛄,同 “螻”，即蝼蛄。" },
      "螻蟈": { name: "螻蟈", type: "animal", imageUrl: "图片/先秦动物/螻蟈.png",description: "螻蟈,即蝈蝈，是一种常见的鸣虫。" },
      "螻蟻": { name: "螻蟻", type: "animal", imageUrl: "图片/先秦动物/螻蟻.png",description: "螻蟻,即蝼蚁，一般指蝼蛄和蚂蚁，常用来比喻微小的生物或力量。" },
      "螽": { name: "螽", type: "animal", imageUrl: "图片/先秦动物/螽.png",description: "螽,通常指螽斯，是一类常见的昆虫。" },
      "螽斯": { name: "螽斯", type: "animal", imageUrl: "图片/先秦动物/螽斯.png",description: "螽斯,同 “螽”，是直翅目昆虫的一科。" },
      "螾": { name: "螾", type: "animal", imageUrl: "图片/先秦动物/螾.png",description: "螾,即蚯蚓，是常见的一种陆生环节动物。它生活在土壤中，以腐败的有机物为食，能使土壤疏松、改良土壤、提高肥力，促进农业增产。" },
      "蟁": { name: "蟁", type: "animal", imageUrl: "图片/先秦动物/蟁.png",description: "蟁,指蚊子，是一种具有刺吸式口器的纤小飞虫，通常雌性以血液作为食物，而雄性则吸食植物的汁液。" },
      "蟄": { name: "蟄", type: "animal", imageUrl: "图片/先秦动物/蟄.png",description: "蟄,本意为动物冬眠，藏起来不吃不动。在先秦时期也可指代冬眠的虫类。这里以常见的冬眠昆虫为例介绍。" },
      "蟄蟲": { name: "蟄蟲", type: "animal", imageUrl: "图片/先秦动物/蟄蟲.png",description: "蟄蟲,泛指冬眠的虫类。在冬季，它们会寻找适宜的地方藏身，以度过寒冷的时期。" },
      "蟊": { name: "蟊", type: "animal", imageUrl: "图片/先秦动物/蟊.png",description: "蟊,一种吃苗根的害虫，多比喻危害人民或国家的人。通常指农作物害虫。" },
      "蟊蠽": { name: "蟊蠽", type: "animal", imageUrl: "图片/先秦动物/蟊蠽.png",description: "蟊蠽,可能是指某种危害庄稼的害虫，具体所指昆虫已不太明确，但一般认为是类似蝗虫等的农业害虫。" },
      "蟋蟀": { name: "蟋蟀", type: "animal", imageUrl: "图片/先秦动物/蟋蟀.png",description: "蟋蟀,无脊椎动物，是一种常见的昆虫。常栖息于地表、砖石下、土穴中、草丛间。夜出活动。杂食性，吃各种作物、树苗、菜果等。" },
      "蟡": { name: "蟡", type: "animal", imageUrl: "图片/先秦动物/蟡.png",description: "蟡,古书上说的一种似蜥蜴的爬行动物，具体所指物种难以确切考证。" },
      "蟣虱": { name: "蟣虱", type: "animal", imageUrl: "图片/先秦动物/蟣虱.png",description: "蟣虱,即虱子，是一种寄生在人和动物身上的小型昆虫，以吸食宿主的血液为生。" },
      "蟪蛄": { name: "蟪蛄", type: "animal", imageUrl: "图片/先秦动物/蟪蛄.png",description: "蟪蛄,一种小型的蝉，是蝉科昆虫的一种。常栖息于树枝上，以吸食植物汁液为生。" },
      "蟬": { name: "蟬", type: "animal", imageUrl: "图片/先秦动物/蟬.png",description: "蟬,昆虫纲半翅目颈喙亚目蝉科昆虫的通称，俗称知了。幼虫生活在地下，吸食植物根部汁液，成虫生活在树上，吸食植物汁液并能鸣叫。" },
      "蟲": { name: "蟲", type: "animal", imageUrl: "图片/先秦动物/蟲.png",description: "蟲,在先秦时期是对所有动物的统称，这里以常见的昆虫为例介绍。昆虫是地球上种类最多的动物群体，它们的踪迹几乎遍布世界的每一个角落。" },
      "蟲蝗": { name: "蟲蝗", type: "animal", imageUrl: "图片/先秦动物/蟲蝗.png",description: "蟲蝗,主要指蝗虫，是一种常见的农业害虫。蝗虫是群居性的短角蚱蜢，能长距离迁飞，所到之处往往会造成严重的农业灾害。" },
      "蟲象": { name: "蟲象", type: "animal", imageUrl: "图片/先秦动物/蟲象.png",description: "蟲象,可能是指象鼻虫，是鞘翅目昆虫的一科。因头部向前延伸成象鼻状而得名，是一种常见的害虫。" },
      "蟹": { name: "蟹", type: "animal", imageUrl: "图片/先秦动物/蟹.png",description: "蟹,十足目短尾次目的甲壳动物，分布广泛，在海洋、淡水和陆地都有不同种类的蟹生活。身体被硬壳保护着，靠鳃呼吸。" },
      "蟻": { name: "蟻", type: "animal", imageUrl: "图片/先秦动物/蟻.png",description: "蟻,通称蚂蚁，是一种昆虫。属于节肢动物门，昆虫纲，膜翅目，蚁科。蚂蚁种类繁多，世界上已知有 11700 多种。" },
      "蠃": { name: "蠃", type: "animal", imageUrl: "图片/先秦动物/蠃.png",description: "蠃,通 “螺”，一般指螺蛳等软体动物。它们具有螺旋形的外壳，生活在水中或潮湿的环境中。" },
      "蠅": { name: "蠅", type: "animal", imageUrl: "图片/先秦动物/蠅.png",description: "蠅,即苍蝇，是完全变态的昆虫，它的生活史可分为卵、幼虫（3 个龄期）、前蛹、蛹、成虫几个时期。苍蝇的食性非常复杂，属于杂食性蝇类，可以取食各种物质。" },
      "蠆": { name: "蠆", type: "animal", imageUrl: "图片/先秦动物/蠆.png",description: "蠆,即蝎子，是一种有剧毒的节肢动物。多在夜间活动，以昆虫等为食。" },
      "蠋": { name: "蠋", type: "animal", imageUrl: "图片/先秦动物/蠋.png",description: "蠋,一般指蛾蝶类的幼虫，以植物的叶子为食。" },
      "蠨蛸": { name: "蠨蛸", type: "animal", imageUrl: "图片/先秦动物/蠨蛸.png",description: "蠨蛸,即长脚蜘蛛，多在室内墙角、屋顶等地方结网。" },
      "蠯": { name: "蠯", type: "animal", imageUrl: "图片/先秦动物/蠯.png",description: "蠯,通常指蚌类，是一种水生贝类动物。" },
      "蠵": { name: "蠵", type: "animal", imageUrl: "图片/先秦动物/蠵.png",description: "蠵,指蠵龟，是一种大型海龟。" },
      "蠶": { name: "蠶", type: "animal", imageUrl: "图片/先秦动物/蠶.png",description: "蠶,通常指家蚕，是一种以桑叶为食料的泌丝昆虫。" },
      "蠹": { name: "蠹", type: "animal", imageUrl: "图片/先秦动物/蠹.png",description: "蠹,一般指蛀虫，是一类危害木材、书籍、衣物等的昆虫。" },
      "西龜": { name: "西龜", type: "animal", imageUrl: "图片/先秦动物/西龜.png",description: "西龜,可能指西方地区的龟类，具体所指因时代和文献背景而异，一般泛指产于西方的龟种。" },
      "豕": { name: "豕", type: "animal", imageUrl: "图片/先秦动物/豕.png",description: "豕,即猪，是一种常见的家畜。" },
      "豚": { name: "豚", type: "animal", imageUrl: "图片/先秦动物/豚.png",description: "豚,一般指小猪，也可泛指猪。" },
      "豜": { name: "豜", type: "animal", imageUrl: "图片/先秦动物/豜.png",description: "豜,指三岁的公猪，也泛指大猪。" },
      "豝": { name: "豝", type: "animal", imageUrl: "图片/先秦动物/豝.png",description: "豝,指母猪，也有说是一种毛色黑白相间的猪。" },
      "象": { name: "象", type: "animal", imageUrl: "图片/先秦动物/象.png",description: "象,即大象，是陆地上最大的哺乳动物。" },
      "豬": { name: "豬", type: "animal", imageUrl: "图片/先秦动物/豬.png",description: "豬,同 “猪”，是一种常见的家畜，具有多种品种，不同品种在体型、外貌、生产性能等方面有所差异。" },
      "豬彘": { name: "豬彘", type: "animal", imageUrl: "图片/先秦动物/豬彘.png",description: "豬彘,同 “猪”“豕”“彘”，都是指猪这一动物，在古代文献中常 interchangeably used。" },
      "豭": { name: "豭", type: "animal", imageUrl: "图片/先秦动物/豭.png",description: "豭,指公猪，特别是成年公猪，具有较强的生殖能力和一定的攻击性。" },
      "豭豚": { name: "豭豚", type: "animal", imageUrl: "图片/先秦动物/豭豚.png",description: "豭豚,指小公猪，是幼年时期的公猪。" },
      "豵": { name: "豵", type: "animal", imageUrl: "图片/先秦动物/豵.png",description: "豵,指小猪，亦泛指幼猪。在先秦时期，猪是重要的家畜之一，豵作为幼猪，处于生长发育阶段。" },
      "豹": { name: "豹", type: "animal", imageUrl: "图片/先秦动物/豹.png",description: "豹,豹是一种大型猫科动物，具有很强的运动能力和捕猎技巧，是优秀的猎手。" },
      "豺": { name: "豺", type: "animal", imageUrl: "图片/先秦动物/豺.png",description: "豺,豺是一种犬科动物，体型比狼小，比狐狸大，通常以群体为单位活动，是一种非常团结且凶猛的动物。" },
      "豺狼": { name: "豺狼", type: "animal", imageUrl: "图片/先秦动物/豺狼.png",description: "豺狼,通常是豺和狼的合称，在先秦时期，人们常将这两种动物联系在一起，用来形容凶猛、残忍的野兽。" },
      "豺虎": { name: "豺虎", type: "animal", imageUrl: "图片/先秦动物/豺虎.png",description: "豺虎,与 “豺狼” 类似，也是豺和虎的合称，强调这两种动物的凶猛和强大，常用来形容强大的敌人或残暴的势力。" },
      "豻": { name: "豻", type: "animal", imageUrl: "图片/先秦动物/豻.png",description: "豻,一种形似狗的野兽，也有说法认为是一种野狗。在先秦时期，人们对豻的认识和描述相对较少，但它在当时的生态环境中也是一种食肉动物。" },
      "貂": { name: "貂", type: "animal", imageUrl: "图片/先秦动物/貂.png",description: "貂,貂是一种小型食肉动物，具有柔软而珍贵的皮毛，在先秦时期就因其皮毛的优良品质而受到人们的关注。" },
      "貆": { name: "貆", type: "animal", imageUrl: "图片/先秦动物/貆.png",description: "貆,一般认为是狗獾，是一种鼬科动物。貆在先秦时期是人们较为熟悉的动物之一，其肉可食，皮可制革。" },
      "貉": { name: "貉", type: "animal", imageUrl: "图片/先秦动物/貉.png",description: "貉,貉是一种犬科动物，外形似狐，但比狐小，在先秦时期的分布较为广泛，是一种常见的野生动物。" },
      "貊": { name: "貊", type: "animal", imageUrl: "图片/先秦动物/貊.png",description: "貊,貊是古代对北方一些少数民族或其居住地区的称呼，同时也可能指代一种类似熊的动物。关于貊所指的具体动物，在先秦时期的记载并不十分明确，但一般认为与熊科或犬科动物有一定关联。" },
      "貍": { name: "貍", type: "animal", imageUrl: "图片/先秦动物/貍.png",description: "貍,通常指豹猫，是一种小型猫科动物。在先秦时期，貍是人们常见的野生动物之一，因其皮毛美丽且善于捕猎老鼠，受到人们的关注。" },
      "貓": { name: "貓", type: "animal", imageUrl: "图片/先秦动物/貓.png",description: "貓,指家猫或野猫，在先秦时期，猫已经开始被人类驯化，用于捕鼠等活动。家猫是由野猫经过长期驯化而来的。" },
      "貔": { name: "貔", type: "animal", imageUrl: "图片/先秦动物/貔.png",description: "貔,一种传说中的猛兽，形似虎或熊，在先秦时期的文献中多有记载，但关于其具体形态和特征，不同的记载有所差异。一般认为貔是一种非常勇猛、强大的动物。" },
      "貔貅": { name: "貔貅", type: "animal", imageUrl: "图片/先秦动物/貔貅.png",description: "貔貅,中国古代神话传说中的一种瑞兽，形似狮子，毛色灰白，会飞。有嘴无肛，能吞万物而不泄。" },
      "貞蟲": { name: "貞蟲", type: "animal", imageUrl: "图片/先秦动物/貞蟲.png",description: "贞虫,泛指细腰蜂等，也有说法认为是泛指昆虫。" },
      "賵馬": { name: "賵馬", type: "animal", imageUrl: "图片/先秦动物/賵馬.png",description: "賵马,指古代随葬用的马匹。严格来说，它不是一种特定的动物类别，而是与丧葬仪式相关的马匹。" },
      "賻馬": { name: "賻馬", type: "animal", imageUrl: "图片/先秦动物/賻馬.png",description: "賻马,与賵马类似，也是用于丧葬仪式的马匹，通常是送给丧家用于丧葬的马。" },
      "赤烏": { name: "赤烏", type: "animal", imageUrl: "图片/先秦动物/赤烏.png",description: "赤乌,在中国古代神话中，赤乌是一种红色的神鸟，被视为太阳的象征。传说中太阳里有三足乌鸦，故赤乌也代指太阳。" },
      "赤舄": { name: "赤舄", type: "animal", imageUrl: "图片/先秦动物/赤舄.png",description: "赤舄,并非动物，而是古代一种红色的复底鞋，通常为帝王、诸侯等贵族在祭祀或重大礼仪场合所穿。" },
      "趣馬": { name: "趣馬", type: "animal", imageUrl: "图片/先秦动物/趣馬.png",description: "趣马,是古代掌管王马的官名，也指善于驾御马的人，并非特定的动物名称。" },
      "跛鱉": { name: "跛鱉", type: "animal", imageUrl: "图片/先秦动物/跛鱉.png",description: "跛鳖,指瘸腿的鳖。鳖是一种水生爬行动物，跛鳖强调其身体有残疾的状态。" },
      "道馬": { name: "道馬", type: "animal", imageUrl: "图片/先秦动物/道馬.png",description: "道马,古代供君王出行时先导的马，是一种与礼仪和出行相关的马匹称呼，并非特定的马种。" },
      "阜螽": { name: "阜螽", type: "animal", imageUrl: "图片/先秦动物/阜螽.png",description: "阜螽,即蚱蜢，是一种常见的昆虫。" },
      "陽鳥": { name: "陽鳥", type: "animal", imageUrl: "图片/先秦动物/陽鳥.png",description: "阳鸟,泛指雁、燕等候鸟。因这类鸟在春天阳气上升时北飞，秋天阴气上升时南飞，与阳气的变化有关，故被称为阳鸟。" },
      "隨兕": { name: "隨兕", type: "animal", imageUrl: "图片/先秦动物/隨兕.png",description: "随兕,兕是古代对雌性犀牛的称呼，随兕可能指跟随群体活动的兕。犀牛是大型草食性哺乳动物。" },
      "隼": { name: "隼", type: "animal", imageUrl: "图片/先秦动物/隼.png",description: "隼,隼是一种猛禽，具有敏锐的视力和强大的飞行能力。" },
      "雀": { name: "雀", type: "animal", imageUrl: "图片/先秦动物/雀.png",description: "雀,通常指麻雀等小型鸟类，是鸟类中较为常见的一类。" },
      "雀鷇": { name: "雀鷇", type: "animal", imageUrl: "图片/先秦动物/雀鷇.png",description: "雀鷇,指幼雀。刚孵化出的小鸟，身体较为脆弱，需要亲鸟的照顾和保护。" },
      "雁": { name: "雁", type: "animal", imageUrl: "图片/先秦动物/雁.png",description: "雁,雁是大型候鸟，每年秋季南迁，春季北返，飞行时排成 “一” 字形或 “人” 字形。" },
      "雉": { name: "雉", type: "animal", imageUrl: "图片/先秦动物/雉.png",description: "雉,即野鸡，是一种常见的鸟类，适应能力较强，能在多种环境中生存。" },
      "雎鳩": { name: "雎鳩", type: "animal", imageUrl: "图片/先秦动物/雎鳩.png",description: "雎鳩,一种水鸟，在古代文学作品中常被提及。" },
      "雒": { name: "雒", type: "animal", imageUrl: "图片/先秦动物/雒.png",description: "雒,古书上指白鬣的黑马，也有说法认为是一种水鸟，类似鸳鸯。此处按水鸟理解。" },
      "雞": { name: "雞", type: "animal", imageUrl: "图片/先秦动物/雞.png",description: "雞,家禽，由原鸡驯化而来，经过长期的选育和培育，形成了许多品种。" },
      "雞牲": { name: "雞牲", type: "animal", imageUrl: "图片/先秦动物/雞牲.png",description: "雞牲,指用作祭祀的鸡。在古代祭祀活动中，鸡是常见的祭品之一。" },
      "雞犬": { name: "雞犬", type: "animal", imageUrl: "图片/先秦动物/雞犬.png",description: "雞犬,鸡和狗，是古代家庭中常见的家禽和家畜，常一起被提及，用来形容乡村生活的场景。" },
      "雞鶩": { name: "雞鶩", type: "animal", imageUrl: "图片/先秦动物/雞鶩.png",description: "雞鶩,鸡和鸭，在古代是常见的家禽，常被一起饲养，用于食用和提供蛋类。" },
      "青蠅": { name: "青蠅", type: "animal", imageUrl: "图片/先秦动物/青蠅.png",description: "青蠅,即苍蝇，是一种常见的昆虫，繁殖能力强，分布广泛。" },
      "青魚": { name: "青魚", type: "animal", imageUrl: "图片/先秦动物/青魚.png",description: "青魚,一种大型淡水鱼类，是中国传统的 “四大家鱼” 之一。" },
      "青龍": { name: "青龍", type: "animal", imageUrl: "图片/先秦动物/青龍.png",description: "青龍,中国古代神话中的东方之神，是一种虚构的神兽，具有强大的力量和神秘的色彩。" },
      "飛兔": { name: "飛兔", type: "animal", imageUrl: "图片/先秦动物/飛兔.png",description: "飛兔,古代传说中的神马，据说奔跑速度极快，能够日行千里。" },
      "飛蟲": { name: "飛蟲", type: "animal", imageUrl: "图片/先秦动物/飛蟲.png",description: "飛蟲,泛指能够飞行的昆虫，种类繁多，形态各异，是昆虫中一个庞大的类群。" },
      "飛隼": { name: "飛隼", type: "animal", imageUrl: "图片/先秦动物/飛隼.png",description: "飛隼,即隼，是一种猛禽，具有强大的飞行能力和敏锐的视力，是鸟类中的优秀猎手。" },
      "飛鳥": { name: "飛鳥", type: "animal", imageUrl: "图片/先秦动物/飛鳥.png",description: "飛鳥,泛指能够飞行的鸟类，是鸟类中一个广泛的类群，包括各种不同的种类，它们具有适应飞行的身体结构和生理特征。" },
      "飛龍": { name: "飛龍", type: "animal", imageUrl: "图片/先秦动物/飛龍.png",description: "飛龍,在中国古代文化中，飞龙是一种神秘的生物，通常被描绘为能够在天空中飞行的龙，具有强大的力量和吉祥的寓意。" },
      "饕餮": { name: "饕餮", type: "animal", imageUrl: "图片/先秦动物/饕餮.png",description: "饕餮,中国古代神话中的一种神秘怪兽，形状如羊身人面，眼在腋下，虎齿人手。" },
      "馬": { name: "馬", type: "animal", imageUrl: "图片/先秦动物/馬.png",description: "馬,一种被人类驯化的哺乳动物，具有悠久的历史，在人类社会中扮演着重要的角色。" },
      "馬牛": { name: "馬牛", type: "animal", imageUrl: "图片/先秦动物/馬牛.png",description: "馬牛,马和牛，是古代重要的家畜，常一起被提及，代表着农业社会中重要的生产资料和交通工具。" },
      "馳": { name: "馳", type: "animal", imageUrl: "图片/先秦动物/馳.png",description: "馳,“驰” 在先秦并非动物名称，而是表示马快跑、疾行的动词。如 “车马驰驱”。如果从马的角度来说，驰是马快速奔跑的一种状态，常形容马的速度和活力。马是一种草食性家畜，四肢强健，善于奔跑，在古代交通、战争、农业等方面都有重要作用。" },
      "馵": { name: "馵", type: "animal", imageUrl: "图片/先秦动物/馵.png",description: "馵,一种后左脚白色的马。《尔雅・释畜》：“后左足白，馵。” 马是人类最早驯化的动物之一，馵作为马的一种毛色特征描述，也体现了古人对马的细致观察和分类。" },
      "駉": { name: "駉", type: "animal", imageUrl: "图片/先秦动物/駉.png",description: "駉,本意是指马肥壮的样子，也指壮马、良马。《诗经・鲁颂・駉》中 “駉駉牡马，在坰之野”，描绘了一群肥壮的马在野外吃草的场景。" },
      "駑馬": { name: "駑馬", type: "animal", imageUrl: "图片/先秦动物/駑馬.png",description: "駑馬,指资质较差、能力低下的马。也用来比喻才能平庸的人。马在古代社会中，因其速度、力量和耐力而被广泛用于交通、战争、劳作等方面，驽马相对良马而言，在这些方面的表现较为逊色。" },
      "駑駘": { name: "駑駘", type: "animal", imageUrl: "图片/先秦动物/駑駘.png",description: "駑駘,指劣马，亦比喻庸才。駑駘和駑馬意思相近，都是对品质不高的马的称呼。在古代，马的品质对于其用途至关重要，良马可用于征战、赛马等重要活动，而駑駘则多从事一些较为简单、轻松的工作。" },
      "駒": { name: "駒", type: "animal", imageUrl: "图片/先秦动物/駒.png",description: "駒,指小马，也泛指少壮的马。小马在成长过程中，需要经历学习和训练，才能逐渐成为能够胜任各种工作的成年马。驹在古代也是一种重要的财产和资源，人们会精心饲养和培育驹，以期望它们长大后成为优秀的马匹。" },
      "駒犢": { name: "駒犢", type: "animal", imageUrl: "图片/先秦动物/駒犢.png",description: "駒犢,“驹” 指小马，“犊” 指小牛，“驹犊” 泛指幼畜。小马和小牛都是家畜中的幼崽，它们在成长过程中都需要人类的照顾和培育。驹犊时期是动物生长发育的关键阶段，对于其未来的生产性能和使用价值有着重要的影响。" },
      "駓": { name: "駓", type: "animal", imageUrl: "图片/先秦动物/駓.png",description: "駓,黄白杂毛的马。《诗经・鲁颂・駉》中有 “有駓有騢，有驔有鱼” 的描述，可见駓在当时是一种常见的马的毛色类型。马的毛色多样，不同的毛色在古代可能具有不同的象征意义或用途。" },
      "駟": { name: "駟", type: "animal", imageUrl: "图片/先秦动物/駟.png",description: "駟,古代称同驾一辆车的四匹马，或套着四匹马的车。如 “驷马难追”，形容话说出口，就无法再收回。在古代交通和战争中，驷马驾车是一种常见的形式，能够提供较大的动力和速度。" },
      "駟馬": { name: "駟馬", type: "animal", imageUrl: "图片/先秦动物/駟馬.png",description: "駟馬,同 “驷”，指同驾一辆车的四匹马，或套着四匹马的车。驷马在古代是一种重要的交通工具和战争装备，代表了当时的交通和军事水平。" },
      "駠": { name: "駠", type: "animal", imageUrl: "图片/先秦动物/駠.png",description: "駠,古书上说的一种马，具体所指的马的品种或特征已不太明确，但可以推测是一种在当时被人们所熟知的马。从一些古籍记载中可以看出，駠马可能具有某些独特的特点或用途。" },
      "駮": { name: "駮", type: "animal", imageUrl: "图片/先秦动物/駮.png",description: "駮,同 “驳”，指毛色不纯的马，也有混杂、斑驳之意。马的毛色多样，驳马的毛色可能呈现出多种颜色交织或斑点状的外观，使其在马群中显得较为独特。" },
      "駰": { name: "駰", type: "animal", imageUrl: "图片/先秦动物/駰.png",description: "駰,一种毛色为浅黑带白色的马。《诗经・秦风・小戎》中有 “骐駠是中，騧骊是骖” 的描述，其中 “骐” 是有青黑色纹理的马，“駰” 则是浅黑带白色的马，可见古人对马的毛色分类十分细致。" },
      "駱": { name: "駱", type: "animal", imageUrl: "图片/先秦动物/駱.png",description: "駱,指骆驼。骆驼是一种适应干旱沙漠环境的动物，具有独特的生理特征和生活习性。它的驼峰可以储存脂肪，在食物和水源短缺时提供能量和水分，使其能够在沙漠中长时间生存。" },
      "駹": { name: "駹", type: "animal", imageUrl: "图片/先秦动物/駹.png",description: "駹,毛色黑白相间的马。在先秦时期，马是重要的交通工具和战争工具，駹这种毛色独特的马可能较为珍贵。" },
      "駽": { name: "駽", type: "animal", imageUrl: "图片/先秦动物/駽.png",description: "駽,青黑色的马。先秦时期，人们对马的毛色有细致的分类和命名，駽马因其毛色特点在马群中较为突出。" },
      "駿": { name: "駿", type: "animal", imageUrl: "图片/先秦动物/駿.png",description: "駿,好马，良马。骏在先秦时期是对品质优良、速度快、耐力好的马的统称，这类马通常经过精心选育和训练。" },
      "駿馬": { name: "駿馬", type: "animal", imageUrl: "图片/先秦动物/駿馬.png",description: "駿馬,同 “駿”，指好马、良马，强调马的优良品质和出色性能。" },
      "騂": { name: "騂", type: "animal", imageUrl: "图片/先秦动物/騂.png",description: "騂,赤色的马。在先秦时期，騂马因其独特的毛色而受到人们的关注和命名，这种颜色在马群中较为醒目。" },
      "騂牡": { name: "騂牡", type: "animal", imageUrl: "图片/先秦动物/騂牡.png",description: "騂牡,赤色的公马。“騂” 指赤色的马，“牡” 表示公马，所以騂牡是专门用来称呼赤色公马的词汇，在先秦时期的祭祀等活动中可能具有特定的用途。" },
      "騅": { name: "騅", type: "animal", imageUrl: "图片/先秦动物/騅.png",description: "騅,毛色青白相间的马，通常指白色中夹杂着黑色或青色斑点的马，这种独特的毛色使騅马在马群中显得格外醒目。" },
      "騋": { name: "騋", type: "animal", imageUrl: "图片/先秦动物/騋.png",description: "騋,高七尺以上的马。在先秦时期，人们根据马的身高对其进行分类和命名，騋马因其高大的身材而被单独列出，通常被认为是较为优良的品种。" },
      "騏": { name: "騏", type: "animal", imageUrl: "图片/先秦动物/騏.png",description: "騏,毛呈浅黑色的马。先秦时期，人们对马的毛色有细致的分类和命名，騏马因其独特的浅黑色毛色而被区分开来，可能在当时的社会中具有一定的特殊意义。" },
      "騏驥": { name: "騏驥", type: "animal", imageUrl: "图片/先秦动物/騏驥.png",description: "騏驥,原指良马、千里马，是对品质优良、速度快、耐力好的马的美称。在先秦时期，騏驥被视为马中的佼佼者，代表着最高品质的马匹。" },
      "騑": { name: "騑", type: "animal", imageUrl: "图片/先秦动物/騑.png",description: "騑,古代驾车时位于两边的马。在四马驾车中，旁边的两匹马称为騑，也叫骖。" },
      "騢": { name: "騢", type: "animal", imageUrl: "图片/先秦动物/騢.png",description: "騢,毛色赤白相杂的马。" },
      "騧": { name: "騧", type: "animal", imageUrl: "图片/先秦动物/騧.png",description: "騧,黑嘴的黄马。" },
      "騮": { name: "騮", type: "animal", imageUrl: "图片/先秦动物/騮.png",description: "騮,黑鬣黑尾的红马。" },
      "騰蛇": { name: "騰蛇", type: "animal", imageUrl: "图片/先秦动物/騰蛇.png",description: "騰蛇,古代传说中的一种能飞的蛇。" },
      "騰馬": { name: "騰馬", type: "animal", imageUrl: "图片/先秦动物/騰馬.png",description: "騰馬,指奔跃的马，也可理解为良马、骏马。" },
      "騰駒": { name: "騰駒", type: "animal", imageUrl: "图片/先秦动物/騰駒.png",description: "騰駒,指奔跑中的小马驹，也可泛指年轻有活力的马。" },
      "騵": { name: "騵", type: "animal", imageUrl: "图片/先秦动物/騵.png",description: "騵,毛浅红色的马。" },
      "騶虞": { name: "騶虞", type: "animal", imageUrl: "图片/先秦动物/騶虞.png",description: "騶虞,古代传说中的一种仁兽，一说为白虎，一说为义兽，状如虎，尾长于身。" },
      "騹驥": { name: "騹驥", type: "animal", imageUrl: "图片/先秦动物/騹驥.png",description: "騹驥,指良马、千里马。" },
      "驁": { name: "驁", type: "animal", imageUrl: "图片/先秦动物/驁.png",description: "驁,指马倔强、难以驯服的性格，也可指这种性格的马。" },
      "驂": { name: "驂", type: "animal", imageUrl: "图片/先秦动物/驂.png",description: "驂,古代驾车时位于两边的马，与 “騑” 同义。" },
      "驈": { name: "驈", type: "animal", imageUrl: "图片/先秦动物/驈.png",description: "驈,指白股的黑马。" },
      "驊騮": { name: "驊騮", type: "animal", imageUrl: "图片/先秦动物/驊騮.png",description: "驊騮,指骏马，是一种良马的名称。" },
      "驒": { name: "驒", type: "animal", imageUrl: "图片/先秦动物/驒.png",description: "驒,一种毛色呈鳞状斑纹的良马，多为青色。在先秦时期，因其独特的毛色和优良的品性，被视为上等的马匹，常被用于贵族的出行或战争。" },
      "驖": { name: "驖", type: "animal", imageUrl: "图片/先秦动物/驖.png",description: "驖,毛色为黑色的马，在先秦时期常被用作驾车的马匹，因其强壮的体魄和出色的耐力，适合长途拉车。" },
      "驢": { name: "驢", type: "animal", imageUrl: "图片/先秦动物/驢.png",description: "驴,哺乳纲奇蹄目马科马属动物，是一种草食性家畜。驴起源于非洲，后被引入亚洲和欧洲等地。在中国先秦时期，驴已被人们所熟知并开始驯化使用。" },
      "驥": { name: "驥", type: "animal", imageUrl: "图片/先秦动物/驥.png",description: "骥,本义指好马，是一种良马的统称。在先秦时期，骥通常指那些经过精心挑选和训练，具有出色奔跑能力和良好品性的马匹，多为贵族和军队所用。" },
      "驪": { name: "驪", type: "animal", imageUrl: "图片/先秦动物/驪.png",description: "骊,黑色的马。在先秦时期，骊马常被用于祭祀、礼仪等重要场合，因其毛色纯正，被视为庄重、肃穆的象征。" },
      "驪牛": { name: "驪牛", type: "animal", imageUrl: "图片/先秦动物/驪牛.png",description: "骊牛,黑色的牛。先秦时期，骊牛是一种常见的家畜，主要用于农业生产和祭祀活动。因其黑色的皮毛，在一些祭祀仪式中被视为吉祥之物。" },
      "骃": { name: "骃", type: "animal", imageUrl: "图片/先秦动物/骃.png",description: "骃,浅黑带白色的杂毛马。先秦时期，骃马因其独特的毛色和温和的性格，常被用于驾车和贵族的日常出行。" },
      "魚": { name: "魚", type: "animal", imageUrl: "图片/先秦动物/魚.png",description: "鱼,鱼类是最古老的脊椎动物，种类繁多，形态各异。先秦时期，鱼是人们重要的食物来源之一，同时也在宗教、文化等方面具有重要意义。" },
      "魚腊": { name: "魚腊", type: "animal", imageUrl: "图片/先秦动物/魚腊.png",description: "鱼腊,经过腌制、风干等加工处理后的鱼。在先秦时期，鱼腊是一种常见的食物保存方式，便于长期储存和运输，也是祭祀、宴饮等场合的重要食品。" },
      "魚鮪": { name: "魚鮪", type: "animal", imageUrl: "图片/先秦动物/魚鮪.png",description: "鱼鮪,泛指鱼类，其中 “鮪” 指的是鲔鱼，是一种大型的洄游性鱼类。在先秦时期，鱼鮪是人们重要的食物来源，同时也在一些祭祀和礼仪活动中出现。" },
      "魚鱉": { name: "魚鱉", type: "animal", imageUrl: "图片/先秦动物/魚鱉.png",description: "鱼鳖,鱼和鳖的统称。在先秦时期，鱼鳖是人们常见的水生动物，既是食物来源，又在一些文化和宗教活动中具有象征意义。" },
      "魴": { name: "魴", type: "animal", imageUrl: "图片/先秦动物/魴.png",description: "魴,魴鱼，又称鳊鱼，是一种常见的淡水鱼类。在先秦时期，魴鱼是人们喜爱的食用鱼类之一，其肉质鲜美，营养丰富。" },
      "魴魚": { name: "魴魚", type: "animal", imageUrl: "图片/先秦动物/魴魚.png",description: "魴鱼,同 “魴”，是对魴鱼这一物种的具体称呼。" },
      "鮑": { name: "鮑", type: "animal", imageUrl: "图片/先秦动物/鮑.png",description: "鮑,鲍鱼，是一种海洋贝类。在先秦时期，鲍鱼就因其鲜美可口的肉质而受到人们的喜爱，是一种珍贵的食材。" },
      "鮑魚": { name: "鮑魚", type: "animal", imageUrl: "图片/先秦动物/鮑魚.png",description: "鮑魚,同 “鮑”，是对鲍鱼这一物种的具体称呼。" },
      "鮒": { name: "鮒", type: "animal", imageUrl: "图片/先秦动物/鮒.png",description: "鮒,鲫鱼，是一种常见的淡水鱼类。在先秦时期，鲫鱼就广泛分布于各地的江河、湖泊、池塘等水域，是人们重要的食物来源之一。" },
      "鮞": { name: "鮞", type: "animal", imageUrl: "图片/先秦动物/鮞.png",description: "鮞,一种鱼类，具体所指已不太明确，可能是鲈形目鮨科某些鱼类的古称。在古代文献中有所提及，但缺乏详细准确的现代对应物种描述。" },
      "鮨": { name: "鮨", type: "animal", imageUrl: "图片/先秦动物/鮨.png",description: "鮨,通常指鲈形目鮨科的鱼类，是一类生活在海洋中的肉食性鱼类。它们身体侧扁，颜色鲜艳，许多种类具有美丽的斑纹。" },
      "鮪": { name: "鮪", type: "animal", imageUrl: "图片/先秦动物/鮪.png",description: "鮪,一般认为是金枪鱼，是一种生活在海洋中的大型洄游鱼类。金枪鱼游泳速度快，是海洋中的顶级掠食者。" },
      "鮫": { name: "鮫", type: "animal", imageUrl: "图片/先秦动物/鮫.png",description: "鮫,通常指鲨鱼，是一种非常凶猛的海洋鱼类，在海洋生态系统中处于食物链的顶端。" },
      "鮮魚": { name: "鮮魚", type: "animal", imageUrl: "图片/先秦动物/鮮魚.png",description: "鮮魚,“鮮” 字在古代有多种含义，这里的 “鮮魚” 可能泛指新鲜的鱼，并非特指某一种鱼类。也有可能是指一些常见的淡水或海水鱼类，如鲤鱼、鲫鱼等。" },
      "鯉": { name: "鯉", type: "animal", imageUrl: "图片/先秦动物/鯉.png",description: "鯉,鲤鱼是一种常见的淡水鱼类，适应性强，分布广泛。在中国文化中具有重要的地位。" },
      "鯊": { name: "鯊", type: "animal", imageUrl: "图片/先秦动物/鯊.png",description: "鯊,同 “鮫”，即鲨鱼，是一种凶猛的海洋鱼类，具有强大的捕食能力和适应能力。" },
      "鯤": { name: "鯤", type: "animal", imageUrl: "图片/先秦动物/鯤.png",description: "鯤,在古代文献中，“鯤” 是一种巨大的鱼，常被认为是鲸鱼或某种传说中的巨型海洋生物。在《庄子・逍遥游》中有 “北冥有鱼，其名为鲲” 的记载。" },
      "鯨": { name: "鯨", type: "animal", imageUrl: "图片/先秦动物/鯨.png",description: "鯨,鲸鱼是生活在海洋中的哺乳动物，是世界上最大的动物。它们具有独特的生理结构和生活习性，与鱼类有很大的区别。" },
      "鯪魚": { name: "鯪魚", type: "animal", imageUrl: "图片/先秦动物/鯪魚.png",description: "鯪魚,鲮鱼是一种生活在南方淡水中的鱼类，常见于珠江流域等地区。" },
      "鯰": { name: "鯰", type: "animal", imageUrl: "图片/先秦动物/鯰.png",description: "鯰,鲶鱼是一种常见的淡水鱼类，具有独特的外形和生活习性。它们适应能力强，能在各种水域环境中生存。" },
      "鰅鳙": { name: "鰅鳙", type: "animal", imageUrl: "图片/先秦动物/鰅鳙.png",description: "鰅鳙,一般指鳙鱼，是中国四大家鱼之一，是一种大型淡水鱼类，具有生长快、易养殖等特点。" },
      "鰋": { name: "鰋", type: "animal", imageUrl: "图片/先秦动物/鰋.png",description: "鰋,鲇鱼的一种，也有认为是指江团，即长吻鮠。是一种生活在淡水中的鱼类，具有较高的经济价值。" },
      "鰥": { name: "鰥", type: "animal", imageUrl: "图片/先秦动物/鰥.png",description: "鰥,鳏鱼，也有说法认为是指鲩鱼（草鱼）或其他大型淡水鱼类。在古代文献中常被提及，但其确切所指存在一定争议。" },
      "鰩": { name: "鰩", type: "animal", imageUrl: "图片/先秦动物/鰩.png",description: "鰩,鳐鱼是一种生活在海洋中的软骨鱼类，具有独特的外形和生活方式，身体扁平，呈菱形。" },
      "鰷": { name: "鰷", type: "animal", imageUrl: "图片/先秦动物/鰷.png",description: "鰷,通常指鲦鱼，是一种小型淡水鱼类，常见于江河、湖泊、水库等水域。" },
      "鰿": { name: "鰿", type: "animal", imageUrl: "图片/先秦动物/鰿.png",description: "鰿,即鲫鱼，是一种常见的淡水鱼类，分布广泛，适应能力强，是中国重要的食用鱼类之一。" },
      "鱄": { name: "鱄", type: "animal", imageUrl: "图片/先秦动物/鱄.png",description: "鱄,鱄鱼是一种鱼类，在古代文献中有记载。通常生活在淡水中，是一种较为常见的淡水鱼类。" },
      "鱉": { name: "鱉", type: "animal", imageUrl: "图片/先秦动物/鱉.png",description: "鱉,鳖是一种水陆两栖的爬行动物，也被称为甲鱼、团鱼等。具有坚硬的背甲和腹甲，四肢短小，趾间有蹼。" },
      "鱐": { name: "鱐", type: "animal", imageUrl: "图片/先秦动物/鱐.png",description: "鱐,鱐鱼通常指经过加工腌制的干鱼。它是将新鲜的鱼经过处理后，用盐等调料腌制，然后晒干或烘干制成的。" },
      "鱒": { name: "鱒", type: "animal", imageUrl: "图片/先秦动物/鱒.png",description: "鱒,鳟鱼是一类很有价值的垂钓鱼和食用鱼，全世界大约有 10 种左右。常见的有虹鳟、褐鳟等品种。" },
      "鱗獸": { name: "鱗獸", type: "animal", imageUrl: "图片/先秦动物/鱗獸.png",description: "鱗獸,“鳞兽” 是一个较为宽泛的概念，在古代可能泛指有鳞片的动物，包括鱼类、爬行类等多种动物。由于概念较为模糊，难以明确具体所指的单一物种。" },
      "鱘": { name: "鱘", type: "animal", imageUrl: "图片/先秦动物/鱘.png",description: "鱘,鲟鱼是一种大型的溯河洄游性鱼类，是世界上现有鱼类中体形大、寿命长、最古老的一种鱼类，有 “水中大熊猫” 之称。" },
      "鱣": { name: "鱣", type: "animal", imageUrl: "图片/先秦动物/鱣.png",description: "鱣,鱣鱼，通常指鲟鳇鱼，是一种大型的淡水鱼类，也是世界上最大的淡水鱼之一。" },
      "鱧": { name: "鱧", type: "animal", imageUrl: "图片/先秦动物/鱧.png",description: "鱧,鳢鱼，又称乌鱼、黑鱼等，是一种常见的淡水鱼类。具有很强的适应性和生存能力。" },
      "鱮": { name: "鱮", type: "animal", imageUrl: "图片/先秦动物/鱮.png",description: "鱮,鲴鱼是中小型鱼类，常见的有银鲴、细鳞斜颌鲴等品种。它们在淡水水域中较为常见，是一种重要的经济鱼类。" },
      "鲿": { name: "鲿", type: "animal", imageUrl: "图片/先秦动物/鲿.png",description: "鲿,鲿科鱼类是一类淡水鱼类，常见的有黄颡鱼等品种。它们具有独特的形态特征和生活习性。" },
      "鳅": { name: "鳅", type: "animal", imageUrl: "图片/先秦动物/鳅.png",description: "鳅,鳅类是一类小型淡水鱼类，常见的有泥鳅、大鳞副泥鳅等。它们适应能力强，分布广泛。" },
      "鳣": { name: "鳣", type: "animal", imageUrl: "图片/先秦动物/鳣.png",description: "鳣,同 “鱣”，通常指鲟鳇鱼，是一种大型的淡水鱼类，在黑龙江、松花江等水域有分布。" },
      "鳥": { name: "鳥", type: "animal", imageUrl: "图片/先秦动物/鳥.png",description: "鳥,鸟类是一类适应陆生和飞行生活的脊椎动物，具有独特的形态结构和生理特征，种类繁多，分布广泛。" },
      "鳥獸": { name: "鳥獸", type: "animal", imageUrl: "图片/先秦动物/鳥獸.png",description: "鳥獸,“鸟兽” 是一个较为宽泛的概念，泛指鸟类和兽类动物。由于包含众多不同的物种，难以对其进行统一的详细介绍。" },
      "鳥雀": { name: "鳥雀", type: "animal", imageUrl: "图片/先秦动物/鳥雀.png",description: "鳥雀,“鸟雀” 通常指小型的鸟类，如麻雀、喜鹊、画眉等各种常见的小鸟。它们在日常生活中较为常见，种类繁多。" },
      "鳧": { name: "鳧", type: "animal", imageUrl: "图片/先秦动物/鳧.png",description: "鳧,凫通常指野鸭，是水鸟的一种，常见的有绿头鸭、斑嘴鸭等品种。它们具有适应水生生活的特征，善于游泳和潜水。" },
      "鳧鴈": { name: "鳧鴈", type: "animal", imageUrl: "图片/先秦动物/鳧鴈.png",description: "鳧鴈,泛指野鸭和大雁。野鸭是水鸟的典型代表，大雁是大型候鸟。" },
      "鳩": { name: "鳩", type: "animal", imageUrl: "图片/先秦动物/鳩.png",description: "鳩,鸠是鸠鸽科部分鸟类的通称，常见的有斑鸠等。" },
      "鳲鳩": { name: "鳲鳩", type: "animal", imageUrl: "图片/先秦动物/鳲鳩.png",description: "鳲鳩,一般认为是布谷鸟，即大杜鹃。" },
      "鳳": { name: "鳳", type: "animal", imageUrl: "图片/先秦动物/鳳.png",description: "鳳,传说中的神鸟，是中国古代神话中的百鸟之王。" },
      "鳳凰": { name: "鳳凰", type: "animal", imageUrl: "图片/先秦动物/鳳凰.png",description: "鳳凰,同 “凤”，是传说中的神鸟，百鸟之王。" },
      "鳳皇": { name: "鳳皇", type: "animal", imageUrl: "图片/先秦动物/鳳皇.png",description: "鳳皇,同 “凤”“凤凰”，是传说中的神鸟。" },
      "鳳鳥": { name: "鳳鳥", type: "animal", imageUrl: "图片/先秦动物/鳳鳥.png",description: "鳳鳥,即凤凰，传说中的神鸟。" },
      "鳴鳥": { name: "鳴鳥", type: "animal", imageUrl: "图片/先秦动物/鳴鳥.png",description: "鳴鳥,泛指会鸣叫的鸟，在先秦时期可能没有特指某一种鸟。" },
      "鳴鳩": { name: "鳴鳩", type: "animal", imageUrl: "图片/先秦动物/鳴鳩.png",description: "鳴鳩,可能指叫声悦耳的鸠类，如斑鸠等。" },
      "鳶": { name: "鳶", type: "animal", imageUrl: "图片/先秦动物/鳶.png",description: "鳶,即老鹰，是一种猛禽。" },
      "鴆": { name: "鴆", type: "animal", imageUrl: "图片/先秦动物/鴆.png",description: "鴆,传说中的一种毒鸟，用其羽毛浸酒，饮之可致人死命。也可能是指一些有毒的鸟类或被误认为有毒的鸟类。" },
      "鴇": { name: "鴇", type: "animal", imageUrl: "图片/先秦动物/鴇.png",description: "鴇,鸨是鸨科鸟类的通称，是大型陆栖鸟类。" },
      "鴈": { name: "鴈", type: "animal", imageUrl: "图片/先秦动物/鴈.png",description: "鴈,即大雁，是大型候鸟。" },
      "鴛鴦": { name: "鴛鴦", type: "animal", imageUrl: "图片/先秦动物/鴛鴦.png",description: "鴛鴦,鸳鸯是一种美丽的水鸟，常雌雄成对出现。" },
      "鴝": { name: "鴝", type: "animal", imageUrl: "图片/先秦动物/鴝.png",description: "鴝,可能指的是鸲鹆，即八哥。" },
      "鴝鵒": { name: "鴝鵒", type: "animal", imageUrl: "图片/先秦动物/鴝鵒.png",description: "鴝鵒,即鸲鹆，八哥。" },
      "鴞": { name: "鴞", type: "animal", imageUrl: "图片/先秦动物/鴞.png",description: "鴞,即猫头鹰，是夜行性猛禽。" },
      "鴟": { name: "鴟", type: "animal", imageUrl: "图片/先秦动物/鴟.png",description: "鴟,即鸱鸮，一般指猫头鹰一类的鸟。" },
      "鴟梟": { name: "鴟梟", type: "animal", imageUrl: "图片/先秦动物/鴟梟.png",description: "鴟梟,同 “鸱鸮”，指猫头鹰一类的鸟。" },
      "鴟鴞": { name: "鴟鴞", type: "animal", imageUrl: "图片/先秦动物/鴟鴞.png",description: "鴟鴞,鸱鸮是夜行性猛禽，多在白天休息，夜晚活动。它们具有出色的视力和听力，能在黑暗中准确捕捉猎物。" },
      "鴟鸮": { name: "鴟鸮", type: "animal", imageUrl: "图片/先秦动物/鴟鸮.png",description: "鴟鸮,同 “鴟鴞”" },
      "鴰": { name: "鴰", type: "animal", imageUrl: "图片/先秦动物/鴰.png",description: "鴰,一种水鸟，具体所指现已不太明确，可能是某种野鸭或与鸭科类似的水禽" },
      "鴳": { name: "鴳", type: "animal", imageUrl: "图片/先秦动物/鴳.png",description: "鴳,鴳是一种小鸟，体型较小，常活动于草丛、灌木丛等低矮植被区域" },
      "鴳雀": { name: "鴳雀", type: "animal", imageUrl: "图片/先秦动物/鴳雀.png",description: "鴳雀,同 “鴳”，是一种小型鸟类" },
      "鴻": { name: "鴻", type: "animal", imageUrl: "图片/先秦动物/鴻.png",description: "鴻,即鸿雁，是大型水禽，具有长途迁徙的习性" },
      "鴻雁": { name: "鴻雁", type: "animal", imageUrl: "图片/先秦动物/鴻雁.png",description: "鴻雁,同 “鴻”，是大型水禽，具有长途迁徙的习性" },
      "鴻鴈": { name: "鴻鴈", type: "animal", imageUrl: "图片/先秦动物/鴻鴈.png",description: "鴻鴈,同 “鴻”，是大型水禽，具有长途迁徙的习性" },
      "鴻鵠": { name: "鴻鵠", type: "animal", imageUrl: "图片/先秦动物/鴻鵠.png",description: "鴻鵠,一般认为指天鹅，是一种大型水鸟，具有优雅的姿态和出色的飞行能力" },
      "鴽": { name: "鴽", type: "animal", imageUrl: "图片/先秦动物/鴽.png",description: "鴽,一种小鸟，可能是指鹌鹑或类似鹌鹑的鸟类" },
      "鴿": { name: "鴿", type: "animal", imageUrl: "图片/先秦动物/鴿.png",description: "鴿,即鸽子，是一种常见的鸟类，具有很强的归巢能力" },
      "鵒": { name: "鵒", type: "animal", imageUrl: "图片/先秦动物/鵒.png",description: "鵒,可能是指八哥，是一种聪明的鸟类，具有模仿人类语言和其他声音的能力" },
      "鵔鸃": { name: "鵔鸃", type: "animal", imageUrl: "图片/先秦动物/鵔鸃.png",description: "鵔鸃,一种鸟，具体所指存在争议，可能是指锦鸡或雉类等色彩艳丽的鸟类" },
      "鵖鸰": { name: "鵖鸰", type: "animal", imageUrl: "图片/先秦动物/鵖鸰.png",description: "鵖鸰,即鹡鸰，是一种小型鸣禽，常在水边活动" },
      "鵙": { name: "鵙", type: "animal", imageUrl: "图片/先秦动物/鵙.png",description: "鵙,即伯劳，是一种猛禽，以其凶猛的捕食习性而闻名" },
      "鵜": { name: "鵜", type: "animal", imageUrl: "图片/先秦动物/鵜.png",description: "鵜,即鹈鹕，是一种大型水鸟，以其独特的喉囊而闻名" },
      "鵝": { name: "鵝", type: "animal", imageUrl: "图片/先秦动物/鵝.png",description: "鵝,鹅是一种常见的家禽，具有悠久的驯化历史。它由野生鸿雁或灰雁驯化而来，在世界各地广泛饲养。" },
      "鵠": { name: "鵠", type: "animal", imageUrl: "图片/先秦动物/鵠.png",description: "鵠,鹄在古代常指天鹅，是一种大型水鸟，具有优美的姿态和出色的飞行能力。" },
      "鵠鵾": { name: "鵠鵾", type: "animal", imageUrl: "图片/先秦动物/鵠鵾.png",description: "鵠鵾,“鹄鵾” 可能是古代对天鹅和某种大型水鸟或类似鸟类的合称或泛指，具体所指已不太明确，可能与鹄（天鹅）有相似的生态习性和形态特征。" },
      "鵬": { name: "鵬", type: "animal", imageUrl: "图片/先秦动物/鵬.png",description: "鵬,鹏是中国古代神话中的一种巨大的神鸟，由鲲变化而来，其体型巨大，能展翅高飞，在神话传说中具有极高的地位。" },
      "鵲": { name: "鵲", type: "animal", imageUrl: "图片/先秦动物/鵲.png",description: "鵲,喜鹊是一种常见的鸟类，在中国分布广泛，具有独特的外观和行为习性，深受人们喜爱。" },
      "鵻": { name: "鵻", type: "animal", imageUrl: "图片/先秦动物/鵻.png",description: "鵻,“鵻” 在古代通常指的是一种类似于鸠的鸟类，可能是某种斑鸠。在古代文献中多有记载，但具体所指的物种可能因地域和时代略有差异。" },
      "鵾雞": { name: "鵾雞", type: "animal", imageUrl: "图片/先秦动物/鵾雞.png",description: "鵾雞,“鵾雞” 可能是古代对某种大型野鸡或类似鸟类的称呼，具体所指已不太明确，但从名称推测，可能是一种体型较大、具有一定特色的鸡形目鸟类。" },
      "鶂": { name: "鶂", type: "animal", imageUrl: "图片/先秦动物/鶂.png",description: "鶂,“鶂” 在古代指的是一种水鸟，可能是鹢，其形态和习性与鹭鸶等水鸟有相似之处，常出现在古代文学作品和典籍中。" },
      "鶂鶂": { name: "鶂鶂", type: "animal", imageUrl: "图片/先秦动物/鶂鶂.png",description: "鶂鶂,“鶂鶂” 可能是对 “鶂” 这种水鸟的叠称，在古代文献中有时也用来形容其飞行时的姿态或叫声，具体含义可能因语境而异。" },
      "鶉": { name: "鶉", type: "animal", imageUrl: "图片/先秦动物/鶉.png",description: "鶉,鹌鹑是一种小型鸟类，在世界各地广泛分布，具有独特的生活习性和形态特征，是常见的家禽之一。" },
      "鶉鵪": { name: "鶉鵪", type: "animal", imageUrl: "图片/先秦动物/鶉鵪.png",description: "鶉鵪,“鶉鵪” 可能是鹌鹑的另一种称呼或写法，也可能是指鹌鹑和鹌鹑属的其他类似物种，在古代文献中常与鹌鹑一起提及，其生活习性和形态特征与鹌鹑相似。" },
      "鶖": { name: "鶖", type: "animal", imageUrl: "图片/先秦动物/鶖.png",description: "鶖,“鶖” 在古代通常指的是一种类似于秃鹫的猛禽，具有强大的飞行能力和锐利的视力，以腐肉和小型动物为食。" },
      "鶡旦": { name: "鶡旦", type: "animal", imageUrl: "图片/先秦动物/鶡旦.png",description: "鶡旦,“鶡旦” 即 “鶡鴠”，是一种古代传说中的鸟，也被认为可能是寒号鸟，因其在寒冷的季节里发出特殊的叫声而得名，在古代文献中多有记载。" },
      "鶡鴠": { name: "鶡鴠", type: "animal", imageUrl: "图片/先秦动物/鶡鴠.png",description: "鶡鴠,同 “鶡旦”，是一种古代传说中的鸟，可能是寒号鸟，在古代文献中常被提及，与季节变化和动物行为有关。" },
      "鶤": { name: "鶤", type: "animal", imageUrl: "图片/先秦动物/鶤.png",description: "鶤,一种传说中的大鸟。据《庄子》等古籍记载，其体型巨大，能在天地间翱翔。/" },
      "鶩": { name: "鶩", type: "animal", imageUrl: "图片/先秦动物/鶩.png",description: "鶩,通常指家鸭，是经人工驯化和饲养的鸭科鸭属动物。具有喜水、合群、耐寒等特点，生活在水域附近，以水中的浮游生物、植物种子、昆虫等为食。" },
      "鶪": { name: "鶪", type: "animal", imageUrl: "图片/先秦动物/鶪.png",description: "鶪,即戴胜鸟，是一种中等体型的鸟类。以昆虫和蠕虫为食，对农业有益。" },
      "鶬": { name: "鶬", type: "animal", imageUrl: "图片/先秦动物/鶬.png",description: "鶬,即黄鹂，是一种中型鸣禽，羽毛颜色鲜艳，叫声悦耳动听。" },
      "鶬鶊": { name: "鶬鶊", type: "animal", imageUrl: "图片/先秦动物/鶬鶊.png",description: "鶬鶊,即黄鹂，是一种常见的鸟类。羽毛艳丽，鸣声悦耳。" },
      "鶯": { name: "鶯", type: "animal", imageUrl: "图片/先秦动物/鶯.png",description: "鶯,通常指莺科鸟类，是一类小型鸣禽，种类繁多，常见的有黄眉莺、黄腰莺等。它们以昆虫和植物种子为食，是农林益鸟。" },
      "鶴": { name: "鶴", type: "animal", imageUrl: "图片/先秦动物/鶴.png",description: "鶴,鹤是鹤科鸟类的通称，是一些美丽而优雅的大型涉禽。常见的有丹顶鹤、白鹤、灰鹤等。" },
      "鶵": { name: "鶵", type: "animal", imageUrl: "图片/先秦动物/鶵.png",description: "鶵,指雏鸟，即幼小的鸟类，是鸟类生命周期中的一个阶段，并非特定的物种。" },
      "鷁": { name: "鷁", type: "animal", imageUrl: "图片/先秦动物/鷁.png",description: "鷁,古书上指一种水鸟，形似鹭鸶，能高飞。" },
      "鷃": { name: "鷃", type: "animal", imageUrl: "图片/先秦动物/鷃.png",description: "鷃,即鹌鷃，是一种小型鸟类，常指鹌鹑或类似鹌鹑的小鸟。" },
      "鷇": { name: "鷇", type: "animal", imageUrl: "图片/先秦动物/鷇.png",description: "鷇,指待哺的雏鸟，或刚孵化出的幼鸟，是鸟类生长发育过程中的一个阶段，不是特定的鸟种。" },
      "鷙": { name: "鷙", type: "animal", imageUrl: "图片/先秦动物/鷙.png",description: "鷙,指猛禽，是一类肉食性鸟类，包括鹰、雕、鹫等多种鸟类。" },
      "鷙蟲": { name: "鷙蟲", type: "animal", imageUrl: "图片/先秦动物/鷙蟲.png",description: "鷙蟲,泛指凶猛的鸟类或昆虫。在先秦时期，人们将一些具有捕食其他动物能力的鸟类和昆虫统称为鷙蟲。" },
      "鷙鳥": { name: "鷙鳥", type: "animal", imageUrl: "图片/先秦动物/鷙鳥.png",description: "鷙鳥,同 “鷙”，指猛禽。" },
      "鷦明": { name: "鷦明", type: "animal", imageUrl: "图片/先秦动物/鷦明.png",description: "鷦明,一种传说中的小鸟。据记载，其体型小巧，羽毛华丽。/" },
      "鷫鷞": { name: "鷫鷞", type: "animal", imageUrl: "图片/先秦动物/鷫鷞.png",description: "鷫鷞,古书上指一种水鸟，似雁而大，羽毛青白。" },
      "鷮": { name: "鷮", type: "animal", imageUrl: "图片/先秦动物/鷮.png",description: "鷮,一种长尾野鸡，是雉科鸟类的一种。" },
      "鷰": { name: "鷰", type: "animal", imageUrl: "图片/先秦动物/鷰.png",description: "鷰,即燕子，是雀形目燕科鸟类的通称，常见的有家燕、金腰燕等。" },
      "鷹": { name: "鷹", type: "animal", imageUrl: "图片/先秦动物/鷹.png",description: "鷹,鹰是隼形目鹰科部分猛禽的统称。它们是肉食性鸟类，具有强大的飞行能力和敏锐的视力，是自然界中的顶级猎手。" },
      "鷹隼": { name: "鷹隼", type: "animal", imageUrl: "图片/先秦动物/鷹隼.png",description: "鷹隼,“鹰隼” 是鹰和隼的合称，隼是隼形目隼科鸟类的统称，与鹰同属猛禽，具有相似的生态习性和特征，但在一些形态和行为上有所区别。" },
      "鷹鸇": { name: "鷹鸇", type: "animal", imageUrl: "图片/先秦动物/鷹鸇.png",description: "鷹鸇,鸇是鹰科鸇属的鸟类，鹰鸇可能是指鹰和鸇这两类猛禽的统称，也可能是对一些具有相似特征的鹰类的特定称呼。" },
      "鷹鹯": { name: "鷹鹯", type: "animal", imageUrl: "图片/先秦动物/鷹鹯.png",description: "鷹鹯,鹯是一种似鹰的猛禽，鹰鹯通常是指鹰和鹯这类猛禽的合称，用来泛指凶猛的鸟类。" },
      "鷺": { name: "鷺", type: "animal", imageUrl: "图片/先秦动物/鷺.png",description: "鷺,鹭是鹭科鸟类的统称，是一类常见的水鸟，具有优雅的外形和独特的生活习性。" },
      "鷽": { name: "鷽", type: "animal", imageUrl: "图片/先秦动物/鷽.png",description: "鷽,即麻雀，是一种常见的小型鸟类，分布广泛，与人类生活环境密切相关。" },
      "鸇": { name: "鸇", type: "animal", imageUrl: "图片/先秦动物/鸇.png",description: "鸇,鸇是鹰科鸇属的鸟类，如白腹鹞等，是一种中型猛禽。" },
      "鸇鷂": { name: "鸇鷂", type: "animal", imageUrl: "图片/先秦动物/鸇鷂.png",description: "鸇鷂,鸇和鹞均为鹰科鸟类，鸇鷂可能是对这两类猛禽的统称。鹞是一类中型猛禽，常见的有雀鹰、松雀鹰等。" },
      "鸕": { name: "鸕", type: "animal", imageUrl: "图片/先秦动物/鸕.png",description: "鸕,鸬鹚，是一种大型水鸟，具有出色的潜水能力，常被人类驯化用于捕鱼。" },
      "鸚鵡": { name: "鸚鵡", type: "animal", imageUrl: "图片/先秦动物/鸚鵡.png",description: "鸚鵡,鹦鹉是典型的攀禽，对趾型足，两趾向前两趾向后，适合抓握，鸟喙强劲有力，可以食用硬壳果。它们以其美丽的羽毛、善学人语技能的特点，受到人们的欣赏和钟爱。" },
      "鸛": { name: "鸛", type: "animal", imageUrl: "图片/先秦动物/鸛.png",description: "鸛,鹳是大型水鸟，嘴长而粗壮，在高树或岩石上筑大型的巢，以鱼、蛙、鼠类等为食。" },
      "鸜鵒": { name: "鸜鵒", type: "animal", imageUrl: "图片/先秦动物/鸜鵒.png",description: "鸜鵒,即八哥，是一种常见的鸟类。它聪明伶俐，能模仿其他鸟类叫声和简单的人类语言。" },
      "鸞": { name: "鸞", type: "animal", imageUrl: "图片/先秦动物/鸞.png",description: "鸞,鸾是中国古代传说中的神鸟，常与凤凰一起出现，被视为吉祥、高贵的象征。/" },
      "鸞皇": { name: "鸞皇", type: "animal", imageUrl: "图片/先秦动物/鸞皇.png",description: "鸞皇,同 “鸾”，是古代传说中的神鸟，代表着祥瑞和美好。" },
      "鸞鳳": { name: "鸞鳳", type: "animal", imageUrl: "图片/先秦动物/鸞鳳.png",description: "鸞鳳,鸾和凤的合称，在古代传说中都是神鸟，常用来比喻夫妻或贤能之士。" },
      "鸡": { name: "鸡", type: "animal", imageUrl: "图片/先秦动物/鸡.png",description: "鸡,鸡是人类饲养最普遍的家禽。家鸡源出于野生的原鸡，其驯化历史至少约 4000 年，但直到 1800 年前后鸡肉和鸡蛋才成为大量生产的商品。" },
      "鸤鳩": { name: "鸤鳩", type: "animal", imageUrl: "图片/先秦动物/鸤鳩.png",description: "鸤鳩,即布谷鸟，以其独特的叫声而闻名，是一种夏候鸟。" },
      "鸧": { name: "鸧", type: "animal", imageUrl: "图片/先秦动物/鸧.png",description: "鸧,即鸧鹒，也叫黄鹂，是一种美丽的鸣禽。" },
      "鸮": { name: "鸮", type: "animal", imageUrl: "图片/先秦动物/鸮.png",description: "鸮,鸮是鸮形目鸟类的统称，是夜行性猛禽。它们具有独特的外貌和生活习性，在生态系统中扮演着重要的角色。" },
      "鹍": { name: "鹍", type: "animal", imageUrl: "图片/先秦动物/鹍.png",description: "鹍,传说中的一种大鸟，形似鹤，常与 “鹏” 一起出现，被视为一种神鸟。" },
      "鹍雞": { name: "鹍雞", type: "animal", imageUrl: "图片/先秦动物/鹍雞.png",description: "鹍雞,同 “鹍”，也指传说中的一种大鸟。" },
      "鹙": { name: "鹙", type: "animal", imageUrl: "图片/先秦动物/鹙.png",description: "鹙,即秃鹙，是一种大型水鸟，属于鹳形目秃鹙科。" },
      "鹥": { name: "鹥", type: "animal", imageUrl: "图片/先秦动物/鹥.png",description: "鹥,一种水鸟，形状像鸥，也有说法认为是凤凰的一种。" },
      "鹿": { name: "鹿", type: "animal", imageUrl: "图片/先秦动物/鹿.png",description: "鹿,鹿是哺乳纲偶蹄目的一类动物，种类繁多，具有重要的生态和文化价值。" },
      "鸛鵒": { name: "鸛鵒", type: "animal", imageUrl: "图片/先秦动物/鸛鵒.png",description: "鸛鵒,鸜鹆的别称，即八哥。是一种常见的鸟类，能模仿其他鸟的叫声，经训练还能模仿人类语言。" },
      "麀": { name: "麀", type: "animal", imageUrl: "图片/先秦动物/麀.png",description: "麀,母鹿。在鹿群中，母鹿通常承担着繁殖和照顾幼崽的重要职责。" },
      "麀鹿": { name: "麀鹿", type: "animal", imageUrl: "图片/先秦动物/麀鹿.png",description: "麀鹿,即母鹿，与 “麀” 所指相同。" },
      "麇": { name: "麇", type: "animal", imageUrl: "图片/先秦动物/麇.png",description: "麇,獐子，小型鹿科动物。外形似麝而稍大，无角，上犬齿发达，雄兽的上犬齿呈獠牙状。" },
      "麋": { name: "麋", type: "animal", imageUrl: "图片/先秦动物/麋.png",description: "麋,麋鹿，是世界珍稀动物，属于鹿科。因为它头脸像马、角像鹿、蹄子像牛、尾像驴，因此得名四不像。" },
      "麋鹿": { name: "麋鹿", type: "animal", imageUrl: "图片/先秦动物/麋鹿.png",description: "麋鹿,同 “麋”，即四不像，是一种大型鹿科动物。" },
      "麋麃": { name: "麋麃", type: "animal", imageUrl: "图片/先秦动物/麋麃.png",description: "麋麃,可能指的是麋鹿中的幼鹿或体型较小的麋鹿。/ 所指可能与麋鹿相关，具体含义存在一定争议。" },
      "麑": { name: "麑", type: "animal", imageUrl: "图片/先秦动物/麑.png",description: "麑,幼鹿。通常指鹿类动物出生后尚未成年的个体。" },
      "麒麟": { name: "麒麟", type: "animal", imageUrl: "图片/先秦动物/麒麟.png",description: "麒麟,中国古代神话中的一种瑞兽，集龙头、鹿角、狮眼、虎背、熊腰、蛇鳞、马蹄、牛尾于一身，被认为是吉祥、仁慈和权力的象征。" },
      "麔": { name: "麔", type: "animal", imageUrl: "图片/先秦动物/麔.png",description: "麔,雄鹿。一般指成年的雄性鹿，在鹿群中，雄鹿通常具有较大的体型和发达的鹿角，在繁殖季节会通过展示鹿角和争斗来争夺与雌鹿的交配权。" },
      "麚": { name: "麚", type: "animal", imageUrl: "图片/先秦动物/麚.png",description: "麚,公鹿，尤指大的雄鹿。通常具有较大的体型和壮观的鹿角，是鹿群中的雄性成年个体。" },
      "麛": { name: "麛", type: "animal", imageUrl: "图片/先秦动物/麛.png",description: "麛,小鹿，与 “麑” 类似，指年幼的鹿。通常是指鹿出生后不久，尚未完全长大成熟的阶段。" },
      "麟": { name: "麟", type: "animal", imageUrl: "图片/先秦动物/麟.png",description: "麟,同 “麒麟”，是中国古代传说中的祥瑞之兽，具有独特的外形和象征意义。" },
      "黃牛": { name: "黃牛", type: "animal", imageUrl: "图片/先秦动物/黃牛.png",description: "黃牛,牛的一种，角短，皮毛黄褐色或黑色，也有杂色的，毛短。用来耕地或拉车，肉供食用，皮可以制革。" },
      "黃馬": { name: "黃馬", type: "animal", imageUrl: "图片/先秦动物/黃馬.png",description: "黃馬,指毛色为黄色的马。马是一种被人类驯化的家畜，具有悠久的历史，在古代交通、战争、农业生产等方面都发挥了重要作用。" },
      "麗": { name: "麗", type: "animal", imageUrl: "图片/先秦动物/麗.png",description: "麗,在先秦时期，“麗” 可能并非单指某种特定动物，常与其他字组合，如 “麗馬”，表示美丽的马。也可能泛指美丽、好看的动物。" },
      "麗馬": { name: "麗馬", type: "animal", imageUrl: "图片/先秦动物/麗馬.png",description: "麗馬,指美丽的马，马是一种被人类驯化的草食性家畜，具有悠久的历史和重要的文化地位。" },
      "黃": { name: "黃", type: "animal", imageUrl: "图片/先秦动物/黃.png",description: "黃,在先秦时期，“黃” 可能是一个较为宽泛的指代，可能指黄色的动物，如黄牛、黄马等，也可能是对一些具有黄色特征动物的统称。" },
      "黃鳥": { name: "黃鳥", type: "animal", imageUrl: "图片/先秦动物/黃鳥.png",description: "黃鳥,通常指黄莺，是一种常见的鸟类。" },
      "黃鵠": { name: "黃鵠", type: "animal", imageUrl: "图片/先秦动物/黃鵠.png",description: "黃鵠,一般认为是指天鹅，是一种大型水鸟。" },
      "黽": { name: "黽", type: "animal", imageUrl: "图片/先秦动物/黽.png",description: "黽,在先秦时期，“黽” 通常指蛙类动物。" },
      "黾": { name: "黾", type: "animal", imageUrl: "图片/先秦动物/黾.png",description: "黾,同 “黽”，指蛙类动物。" },
      "黿": { name: "黿", type: "animal", imageUrl: "图片/先秦动物/黿.png",description: "黿,即鼋，是一种大型的水生爬行动物。" },
      "黿鼉": { name: "黿鼉", type: "animal", imageUrl: "图片/先秦动物/黿鼉.png",description: "黿鼉,“黿” 指鼋，“鼉” 指扬子鳄，这里是两种动物的合称。" },
      "鼁": { name: "鼁", type: "animal", imageUrl: "图片/先秦动物/鼁.png",description: "鼁,指蟾蜍，是一种两栖动物。" },
      "鼇": { name: "鼇", type: "animal", imageUrl: "图片/先秦动物/鼇.png",description: "鼇,传说中的一种大海龟，通常被描绘为能背负着神山在海上漂浮。" },
      "鼉": { name: "鼉", type: "animal", imageUrl: "图片/先秦动物/鼉.png",description: "鼉,指扬子鳄，是中国特有的一种小型鳄类。" },
      "鼠": { name: "鼠", type: "animal", imageUrl: "图片/先秦动物/鼠.png",description: "鼠,指老鼠，是一种常见的啮齿动物。" },
      "鼫鼠": { name: "鼫鼠", type: "animal", imageUrl: "图片/先秦动物/鼫鼠.png",description: "鼫鼠,一般认为是指鼯鼠，也有说法认为是指土拨鼠等其他啮齿动物。这里以鼯鼠为例介绍。" },
      "鼷鼠": { name: "鼷鼠", type: "animal", imageUrl: "图片/先秦动物/鼷鼠.png",description: "鼷鼠,鼷鼠是一种小型啮齿动物，在人类生活环境中较为常见。它体型较小，通常喜欢在阴暗潮湿、有食物储存的地方活动。" },
      "齊馬": { name: "齊馬", type: "animal", imageUrl: "图片/先秦动物/齊馬.png",description: "齊馬,“齊馬” 在先秦时期可能指的是一种马。马是一种草食性家畜，在古代交通、战争、农业生产等方面都发挥着重要作用。" },
      "龍": { name: "龍", type: "animal", imageUrl: "图片/先秦动物/龍.png",description: "龍,龙是中国等东亚国家古代神话传说中的神异动物，为鳞虫之长。常被用来象征祥瑞，是中华民族等东亚民族最具代表性的传统文化之一。" },
      "龍蛇": { name: "龍蛇", type: "animal", imageUrl: "图片/先秦动物/龍蛇.png",description: "龍蛇,在先秦时期，龙蛇可能是对龙和蛇的一种统称或泛指，也可能是指一些被认为具有神秘色彩或特殊象征意义的蛇类。" },
      "龜": { name: "龜", type: "animal", imageUrl: "图片/先秦动物/龜.png",description: "龜,龟是一种古老的爬行动物，具有坚固的甲壳，能保护自己的身体。龟的种类繁多，分布广泛。" },
      "禽": { name: "禽", type: "animal", imageUrl: "图片/先秦动物/禽.png",description: "禽,禽在先秦时期是对鸟类的统称。鸟类是一类适应空中飞行的脊椎动物，具有独特的生理结构和生活习性。" },
      "魚": { name: "魚", type: "animal", imageUrl: "图片/先秦动物/魚.png",description: "魚,鱼是最古老的脊椎动物，它们生活在水中，通过鳃呼吸，用鳍游泳。鱼类的种类繁多，形态各异，是水生生态系统中重要的组成部分。" },
      "狗": { name: "狗", type: "animal", imageUrl: "图片/先秦动物/狗.png",description: "狗,狗是人类最早驯化的家畜之一，属于食肉目动物。经过长期的驯化和选育，狗的品种繁多，形态和性格各异，与人类生活密切相关。" },
      "豚": { name: "豚", type: "animal", imageUrl: "图片/先秦动物/豚.png",description: "豚,豚在先秦时期主要指猪，猪是一种常见的家畜，具有重要的经济价值，在人类的生活中扮演着重要的角色。" }
    },
    links: [
     { source: "豆", target: "周礼", rela: "来源于", type: "literature" },
     { source: "稷", target: "周礼", rela: "来源于", type: "literature" },
     { source: "蒲", target: "周礼", rela: "来源于", type: "literature" },
     { source: "漆", target: "周礼", rela: "来源于", type: "literature" },
     { source: "郁", target: "周礼", rela: "来源于", type: "literature" },
     { source: "梓", target: "周礼", rela: "来源于", type: "literature" },
     { source: "竹", target: "周礼", rela: "来源于", type: "literature" },
     { source: "荼", target: "周礼", rela: "来源于", type: "literature" },
     { source: "粟", target: "周礼", rela: "来源于", type: "literature" },
     { source: "禾", target: "周礼", rela: "来源于", type: "literature" },
     { source: "莱", target: "周礼", rela: "来源于", type: "literature" },
     { source: "稻", target: "周礼", rela: "来源于", type: "literature" },
     { source: "桃", target: "周礼", rela: "来源于", type: "literature" },
     { source: "葛", target: "周礼", rela: "来源于", type: "literature" },
     { source: "草木", target: "周礼", rela: "来源于", type: "literature" },
     { source: "鬻", target: "周礼", rela: "来源于", type: "literature" },
     { source: "柞", target: "周礼", rela: "来源于", type: "literature" },
     { source: "柏", target: "周礼", rela: "来源于", type: "literature" },
     { source: "枲", target: "周礼", rela: "来源于", type: "literature" },
     { source: "黍", target: "周礼", rela: "来源于", type: "literature" },
     { source: "筍", target: "周礼", rela: "来源于", type: "literature" },
     { source: "蘩", target: "周礼", rela: "来源于", type: "literature" },
     { source: "棘", target: "周礼", rela: "来源于", type: "literature" },
     { source: "荆", target: "周礼", rela: "来源于", type: "literature" },
     { source: "茅", target: "周礼", rela: "来源于", type: "literature" },
     { source: "麻", target: "周礼", rela: "来源于", type: "literature" },
     { source: "莞", target: "周礼", rela: "来源于", type: "literature" },
     { source: "苹", target: "周礼", rela: "来源于", type: "literature" },
     { source: "桑", target: "周礼", rela: "来源于", type: "literature" },
     { source: "秬", target: "周礼", rela: "来源于", type: "literature" },
     { source: "枣", target: "周礼", rela: "来源于", type: "literature" },
     { source: "萑", target: "周礼", rela: "来源于", type: "literature" },
     { source: "藻", target: "周礼", rela: "来源于", type: "literature" },
     { source: "杜", target: "周礼", rela: "来源于", type: "literature" },
     { source: "萍", target: "周礼", rela: "来源于", type: "literature" },
     { source: "葵", target: "周礼", rela: "来源于", type: "literature" },
     { source: "牡", target: "周礼", rela: "来源于", type: "literature" },
     { source: "梁", target: "周礼", rela: "来源于", type: "literature" },
     { source: "符", target: "周礼", rela: "来源于", type: "literature" },
     { source: "栗", target: "周礼", rela: "来源于", type: "literature" },
     { source: "蕡", target: "周礼", rela: "来源于", type: "literature" },
     { source: "橘", target: "周礼", rela: "来源于", type: "literature" },
     { source: "鞠", target: "周礼", rela: "来源于", type: "literature" },
     { source: "槐", target: "周礼", rela: "来源于", type: "literature" },
     { source: "柘", target: "周礼", rela: "来源于", type: "literature" },
     { source: "木瓜", target: "周礼", rela: "来源于", type: "literature" },
     { source: "莽草", target: "周礼", rela: "来源于", type: "literature" },
     { source: "菊", target: "周礼", rela: "来源于", type: "literature" },
     { source: "茸", target: "周礼", rela: "来源于", type: "literature" },
     { source: "薜", target: "周礼", rela: "来源于", type: "literature" },
     { source: "秫", target: "周礼", rela: "来源于", type: "literature" },
     { source: "枳", target: "周礼", rela: "来源于", type: "literature" },
     { source: "蒿", target: "周礼", rela: "来源于", type: "literature" },
     { source: "韭", target: "周礼", rela: "来源于", type: "literature" },
     { source: "蘋", target: "周礼", rela: "来源于", type: "literature" },
     { source: "稌", target: "周礼", rela: "来源于", type: "literature" },
     { source: "茨", target: "周礼", rela: "来源于", type: "literature" },
     { source: "松", target: "周礼", rela: "来源于", type: "literature" },
     { source: "茢", target: "周礼", rela: "来源于", type: "literature" },
     { source: "匏", target: "周礼", rela: "来源于", type: "literature" },
     { source: "菁", target: "周礼", rela: "来源于", type: "literature" },
     { source: "芒", target: "周礼", rela: "来源于", type: "literature" },
     { source: "榛", target: "周礼", rela: "来源于", type: "literature" },
     { source: "昌", target: "周礼", rela: "来源于", type: "literature" },
     { source: "芹", target: "周礼", rela: "来源于", type: "literature" },
     { source: "箈", target: "周礼", rela: "来源于", type: "literature" },
     { source: "柳", target: "周礼", rela: "来源于", type: "literature" },
     { source: "芡", target: "周礼", rela: "来源于", type: "literature" },
     { source: "麷", target: "周礼", rela: "来源于", type: "literature" },
     { source: "茆", target: "周礼", rela: "来源于", type: "literature" },
     { source: "檍", target: "周礼", rela: "来源于", type: "literature" },
     { source: "牲", target: "周礼", rela: "来源于", type: "literature" },
     { source: "象", target: "周礼", rela: "来源于", type: "literature" },
     { source: "牛", target: "周礼", rela: "来源于", type: "literature" },
     { source: "畜", target: "周礼", rela: "来源于", type: "literature" },
     { source: "燕", target: "周礼", rela: "来源于", type: "literature" },
     { source: "禽", target: "周礼", rela: "来源于", type: "literature" },
     { source: "犬", target: "周礼", rela: "来源于", type: "literature" },
     { source: "蜃", target: "周礼", rela: "来源于", type: "literature" },
     { source: "六畜", target: "周礼", rela: "来源于", type: "literature" },
     { source: "羊", target: "周礼", rela: "来源于", type: "literature" },
     { source: "虎", target: "周礼", rela: "来源于", type: "literature" },
     { source: "貉", target: "周礼", rela: "来源于", type: "literature" },
     { source: "鸡", target: "周礼", rela: "来源于", type: "literature" },
     { source: "牛牲", target: "周礼", rela: "来源于", type: "literature" },
     { source: "狸", target: "周礼", rela: "来源于", type: "literature" },
     { source: "熊", target: "周礼", rela: "来源于", type: "literature" },
     { source: "牷", target: "周礼", rela: "来源于", type: "literature" },
     { source: "羔", target: "周礼", rela: "来源于", type: "literature" },
     { source: "麋", target: "周礼", rela: "来源于", type: "literature" },
     { source: "兔", target: "周礼", rela: "来源于", type: "literature" },
     { source: "雉", target: "周礼", rela: "来源于", type: "literature" },
     { source: "鹿", target: "周礼", rela: "来源于", type: "literature" },
     { source: "牲牷", target: "周礼", rela: "来源于", type: "literature" },
     { source: "豻", target: "周礼", rela: "来源于", type: "literature" },
     { source: "豚", target: "周礼", rela: "来源于", type: "literature" },
     { source: "豕", target: "周礼", rela: "来源于", type: "literature" },
     { source: "雁", target: "周礼", rela: "来源于", type: "literature" },
     { source: "鱐", target: "周礼", rela: "来源于", type: "literature" },
     { source: "蛇", target: "周礼", rela: "来源于", type: "literature" },
     { source: "蚤", target: "周礼", rela: "来源于", type: "literature" },
     { source: "狼", target: "周礼", rela: "来源于", type: "literature" },
     { source: "犀", target: "周礼", rela: "来源于", type: "literature" },
     { source: "駹", target: "周礼", rela: "来源于", type: "literature" },
     { source: "貍", target: "周礼", rela: "来源于", type: "literature" },
     { source: "兕", target: "周礼", rela: "来源于", type: "literature" },
     { source: "豹", target: "周礼", rela: "来源于", type: "literature" },
     { source: "蚳", target: "周礼", rela: "来源于", type: "literature" },
     { source: "麛", target: "周礼", rela: "来源于", type: "literature" },
     { source: "蠃", target: "周礼", rela: "来源于", type: "literature" },
     { source: "牡", target: "周礼", rela: "来源于", type: "literature" },
     { source: "麇", target: "周礼", rela: "来源于", type: "literature" },
     { source: "鹥", target: "周礼", rela: "来源于", type: "literature" },
     { source: "騋", target: "周礼", rela: "来源于", type: "literature" },
     { source: "雒", target: "周礼", rela: "来源于", type: "literature" },
     { source: "黾", target: "周礼", rela: "来源于", type: "literature" },
     { source: "伏兔", target: "周礼", rela: "来源于", type: "literature" },
     { source: "雀", target: "周礼", rela: "来源于", type: "literature" },
     { source: "隼", target: "周礼", rela: "来源于", type: "literature" },
     { source: "赤舄", target: "周礼", rela: "来源于", type: "literature" },
     { source: "貆", target: "周礼", rela: "来源于", type: "literature" },
     { source: "蠹", target: "周礼", rela: "来源于", type: "literature" },
     { source: "蠯", target: "周礼", rela: "来源于", type: "literature" },
     { source: "虺", target: "周礼", rela: "来源于", type: "literature" },
     { source: "猪", target: "周礼", rela: "来源于", type: "literature" },
     { source: "狗", target: "周礼", rela: "来源于", type: "literature" },
     { source: "狐", target: "周礼", rela: "来源于", type: "literature" },
     { source: "牛羊", target: "周礼", rela: "来源于", type: "literature" },
     { source: "尨", target: "周礼", rela: "来源于", type: "literature" },
     { source: "鼠", target: "周礼", rela: "来源于", type: "literature" }
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
