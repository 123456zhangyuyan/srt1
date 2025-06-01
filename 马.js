document.addEventListener("DOMContentLoaded", function() {
  // 知识图谱数据
  window.kgData = {
nodes: {
    "种类": { name: "种类", type: "class"},
    "马": { name: "马", type: "animal",description: "马是一种草食性家畜，四肢修长，奔跑速度快，具有敏锐的听觉和视觉。马在人类历史上有着重要的地位，广泛应用于交通、战争、农业和竞技等领域。"},
    "骏马": { name: "骏马", type: "animal",description: "在中国文化中，骏马常被赋予积极向上的寓意，如 “马到成功”“一马当先” 等成语，都表达了人们对成功和进取的追求。许多诗词、绘画等艺术作品都以骏马为题材，展现其英姿和精神内涵。"},
    "乘馬": { name: "乘馬", type: "animal", imageUrl: "图片/先秦动物/乘馬.png",description: "乘马,马是一种草食性家畜，在古代交通、战争、农业生产等方面发挥了重要作用。人类很早就开始驯化马，使其成为重要的伙伴。" },
    "匹馬": { name: "匹馬", type: "animal", imageUrl: "图片/先秦动物/匹馬.png",description: "匹馬,指马。马是一种草食性家畜，在人类历史上扮演着重要角色。" },
    "左驂": { name: "左驂", type: "animal", imageUrl: "图片/先秦动物/左驂.png",description: "左驂,在古代，人们驾车出行或征战时，通常用多匹马牵引车辆，位于车辕左侧的马被称为 “左驂” 。左驂在驾车过程中起到关键作用，其速度、力量和协调性直接影响车辆行驶的稳定性和操控性。在礼仪活动和战争场景中，左驂的选择和配置都有严格的规范和要求。" },
    "巫馬": { name: "巫馬", type: "animal", imageUrl: "图片/先秦动物/巫馬.png",description: "巫馬,“巫马” 一词在先秦时期有两种含义，一是指负责治疗马匹疾病的官职，二是指生病的马。作为官职，巫马需要掌握一定的兽医知识和技能，负责对马匹的疾病进行诊断和治疗，保障马群的健康，这在以马车为主要交通工具和战争工具的古代社会至关重要；作为生病的马，巫马反映了马匹在生产生活中面临疾病困扰的实际情况。" },
    "戎馬": { name: "戎馬", type: "animal", imageUrl: "图片/先秦动物/戎馬.png",description: "戎馬,戎马指用于战争的马匹，在先秦时期的战争中，马匹是重要的战略资源。戎马经过特殊训练，能够适应战争环境，跟随士兵冲锋陷阵，在战场上承担着运输、骑乘等重要任务，其性能和数量直接影响战争的胜负。" },
    "樸馬": { name: "樸馬", type: "animal", imageUrl: "图片/先秦动物/樸馬.png",description: "樸馬,指未经训练、较为野性的马。" },
    "牛馬": { name: "牛馬", type: "animal", imageUrl: "图片/先秦动物/牛馬.png",description: "马,马是一种草食性家畜，四肢修长，奔跑速度快，具有敏锐的听觉和视觉。马在人类历史上有着重要的地位，广泛应用于交通、战争、农业和竞技等领域。" },
    "班馬": { name: "班馬", type: "animal", imageUrl: "图片/先秦动物/班馬.png",description: "班馬,一种有黑白相间条纹的马，可能是指野生的斑马或经过人工选育具有类似条纹特征的马。斑马是非洲特有的动物。" },
    "田馬": { name: "田馬", type: "animal", imageUrl: "图片/先秦动物/田馬.png",description: "田馬,可能是指用于田间劳作或在田野间活动的马，也可能是指适合在野外环境生存和奔跑的马，与用于战争或其他特殊用途的马有所区别。实际上还是马这种动物，只是根据其用途或生活环境来命名。" },
    "種馬": { name: "種馬", type: "animal", imageUrl: "图片/先秦动物/種馬.png",description: "种马,用于配种的公马，通常具有优良的血统和强壮的体魄，以繁殖出优秀的后代。" },
    "綠耳": { name: "綠耳", type: "animal", imageUrl: "图片/先秦动物/綠耳.png",description: "绿耳,古代名马，传说是周穆王的八骏之一，以其奔跑速度快和耐力强而闻名。" },
    "纖離": { name: "纖離", type: "animal", imageUrl: "图片/先秦动物/纖離.png",description: "纤离,古代良马名，传说中是一种非常优秀的骏马，可能是西域地区的优良马种，以其优美的体态和出色的奔跑能力著称。" },
    "良馬": { name: "良馬", type: "animal", imageUrl: "图片/先秦动物/良馬.png",description: "良馬,先秦时期对品质优良、适合乘骑或劳作马匹的统称。马是一种草食性家畜，经过人类长期驯化，成为重要的交通工具和生产劳动力。" },
    "賵馬": { name: "賵馬", type: "animal", imageUrl: "图片/先秦动物/賵馬.png",description: "賵马,指古代随葬用的马匹。严格来说，它不是一种特定的动物类别，而是与丧葬仪式相关的马匹。" },
    "賻馬": { name: "賻馬", type: "animal", imageUrl: "图片/先秦动物/賻馬.png",description: "賻马,与賵马类似，也是用于丧葬仪式的马匹，通常是送给丧家用于丧葬的马。" },
    "趣馬": { name: "趣馬", type: "animal", imageUrl: "图片/先秦动物/趣馬.png",description: "趣马,是古代掌管王马的官名，也指善于驾御马的人，并非特定的动物名称。" },
    "道馬": { name: "道馬", type: "animal", imageUrl: "图片/先秦动物/道馬.png",description: "道马,古代供君王出行时先导的马，是一种与礼仪和出行相关的马匹称呼，并非特定的马种。" },
    "雒": { name: "雒", type: "animal", imageUrl: "图片/先秦动物/雒.png",description: "雒,古书上指白鬣的黑马，也有说法认为是一种水鸟，类似鸳鸯。此处按水鸟理解。" },
    "飛兔": { name: "飛兔", type: "animal", imageUrl: "图片/先秦动物/飛兔.png",description: "飛兔,古代传说中的神马，据说奔跑速度极快，能够日行千里。" },
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
    "騰馬": { name: "騰馬", type: "animal", imageUrl: "图片/先秦动物/騰馬.png",description: "騰馬,指奔跃的马，也可理解为良马、骏马。" },
    "騰駒": { name: "騰駒", type: "animal", imageUrl: "图片/先秦动物/騰駒.png",description: "騰駒,指奔跑中的小马驹，也可泛指年轻有活力的马。" },
    "騵": { name: "騵", type: "animal", imageUrl: "图片/先秦动物/騵.png",description: "騵,毛浅红色的马。" },
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
    "骃": { name: "骃", type: "animal", imageUrl: "图片/先秦动物/骃.png",description: "骃,浅黑带白色的杂毛马。先秦时期，骃马因其独特的毛色和温和的性格，常被用于驾车和贵族的日常出行。" },
    "黃馬": { name: "黃馬", type: "animal", imageUrl: "图片/先秦动物/黃馬.png",description: "黃馬,指毛色为黄色的马。马是一种被人类驯化的家畜，具有悠久的历史，在古代交通、战争、农业生产等方面都发挥了重要作用。" },
    "麗馬": { name: "麗馬", type: "animal", imageUrl: "图片/先秦动物/麗馬.png",description: "麗馬,指美丽的马，马是一种被人类驯化的草食性家畜，具有悠久的历史和重要的文化地位。" },
    "齊馬": { name: "齊馬", type: "animal", imageUrl: "图片/先秦动物/齊馬.png",description: "齊馬,“齊馬” 在先秦时期可能指的是一种马。马是一种草食性家畜，在古代交通、战争、农业生产等方面都发挥着重要作用。" },
    "脊索动物门": { name: "脊索动物门", type: "phylum" },
    "哺乳纲": { name: "哺乳纲", type: "class" },
    "奇蹄目": { name: "奇蹄目", type: "order" },
    "草原、荒漠等开阔地带": { name: "草原、荒漠等开阔地带", type: "location" },
    "群居": { name: "群居", type: "living style" },
    "食草": { name: "食草", type: "diet" },
    "奔跑": { name: "奔跑", type: "ability" },
    "胎生": { name: "胎生", type: "pregnancy" },
    "力量、速度、勇敢、忠诚和成功": { name: "力量、速度、勇敢、忠诚和成功", type: "token" }
    },
    links: [
     { source: "马", target: "骏马", rela: "别称", type: "literature" },
     { source: "马", target: "种类", rela: "相关", type: "literature" },
     { source: "种类", target: "乘馬", rela: "分为", type: "literature" },
     { source: "种类", target: "匹馬", rela: "分为", type: "literature" },
     { source: "种类", target: "左驂", rela: "分为", type: "literature" },
     { source: "种类", target: "巫馬", rela: "分为", type: "literature" },
     { source: "种类", target: "戎馬", rela: "分为", type: "literature" },
     { source: "种类", target: "樸馬", rela: "分为", type: "literature" },
     { source: "马", target: "牛馬", rela: "相关", type: "literature" },
     { source: "种类", target: "班馬", rela: "分为", type: "literature" },
     { source: "种类", target: "田馬", rela: "分为", type: "literature" },
     { source: "种类", target: "綠耳", rela: "分为", type: "literature" },
     { source: "种类", target: "纖離", rela: "分为", type: "literature" },
     { source: "种类", target: "良馬", rela: "分为", type: "literature" },
     { source: "种类", target: "賵馬", rela: "分为", type: "literature" },
     { source: "种类", target: "賻馬", rela: "分为", type: "literature" },
     { source: "马", target: "趣馬", rela: "相关", type: "literature" },
     { source: "种类", target: "道馬", rela: "分为", type: "literature" },
     { source: "种类", target: "雒", rela: "分为", type: "literature" },
     { source: "种类", target: "飛兔", rela: "分为", type: "literature" },
     { source: "种类", target: "馵", rela: "分为", type: "literature" },
     { source: "种类", target: "駉", rela: "分为", type: "literature" },
     { source: "种类", target: "駑馬", rela: "分为", type: "literature" },
     { source: "种类", target: "駑駘", rela: "分为", type: "literature" },
     { source: "种类", target: "駒", rela: "分为", type: "literature" },
     { source: "种类", target: "駒犢", rela: "分为", type: "literature" },
     { source: "种类", target: "駓", rela: "分为", type: "literature" },
     { source: "种类", target: "駟", rela: "分为", type: "literature" },
     { source: "种类", target: "駟馬", rela: "分为", type: "literature" },
     { source: "种类", target: "駠", rela: "分为", type: "literature" },
     { source: "种类", target: "駮", rela: "分为", type: "literature" },
     { source: "种类", target: "駰", rela: "分为", type: "literature" },
     { source: "种类", target: "駹", rela: "分为", type: "literature" },
     { source: "种类", target: "駽", rela: "分为", type: "literature" },
     { source: "种类", target: "駿", rela: "分为", type: "literature" },
     { source: "种类", target: "駿馬", rela: "分为", type: "literature" },
     { source: "种类", target: "騂", rela: "分为", type: "literature" },
     { source: "种类", target: "騂牡", rela: "分为", type: "literature" },
     { source: "种类", target: "騅", rela: "分为", type: "literature" },
     { source: "种类", target: "騋", rela: "分为", type: "literature" },
     { source: "种类", target: "騏", rela: "分为", type: "literature" },
     { source: "种类", target: "騏驥", rela: "分为", type: "literature" },
     { source: "种类", target: "騑", rela: "分为", type: "literature" },
     { source: "种类", target: "騢", rela: "分为", type: "literature" },
     { source: "种类", target: "騧", rela: "分为", type: "literature" },
     { source: "种类", target: "騮", rela: "分为", type: "literature" },
     { source: "种类", target: "騰馬", rela: "分为", type: "literature" },
     { source: "种类", target: "騰駒", rela: "分为", type: "literature" },
     { source: "种类", target: "騵", rela: "分为", type: "literature" },
     { source: "种类", target: "騹驥", rela: "分为", type: "literature" },
     { source: "种类", target: "驁", rela: "分为", type: "literature" },
     { source: "种类", target: "驂", rela: "分为", type: "literature" },
     { source: "种类", target: "驈", rela: "分为", type: "literature" },
     { source: "种类", target: "驊騮", rela: "分为", type: "literature" },
     { source: "种类", target: "驒", rela: "分为", type: "literature" },
     { source: "种类", target: "驖", rela: "分为", type: "literature" },
     { source: "种类", target: "驢", rela: "分为", type: "literature" },
     { source: "种类", target: "驥", rela: "分为", type: "literature" },
     { source: "种类", target: "驪", rela: "分为", type: "literature" },
     { source: "种类", target: "骃", rela: "分为", type: "literature" },
     { source: "种类", target: "黃馬", rela: "分为", type: "literature" },
     { source: "种类", target: "麗馬", rela: "分为", type: "literature" },
     { source: "种类", target: "齊馬", rela: "分为", type: "literature" },
     { source: "马", target: "脊索动物门", rela: "属于", type: "literature" },
     { source: "马", target: "哺乳纲", rela: "属于", type: "literature" },
     { source: "马", target: "奇蹄目", rela: "属于", type: "literature" },
     { source: "马", target: "草原、荒漠等开阔地带", rela: "生活于", type: "literature" },
     { source: "马", target: "群居", rela: "居住方式", type: "literature" },
     { source: "马", target: "食草", rela: "饮食习惯", type: "literature" },
     { source: "马", target: "奔跑", rela: "擅长", type: "literature" },
     { source: "马", target: "胎生", rela: "生产方式", type: "literature" },
     { source: "马", target: "力量、速度、勇敢、忠诚和成功", rela: "象征", type: "literature" }

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
    .attr("refX", 35)
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
    .style('text-anchor', 'middle')  // 文字居中
    .attr('startOffset', '35%') 
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
