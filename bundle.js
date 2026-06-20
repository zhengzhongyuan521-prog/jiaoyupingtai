const LANGUAGES = {
  en: { code:'en', name:'英语', native:'English',  flag:'🇬🇧', color:'#2563eb', ttsLang:'en-US' },
  ja: { code:'ja', name:'日语', native:'日本語',    flag:'🇯🇵', color:'#dc2626', ttsLang:'ja-JP' },
  ko: { code:'ko', name:'韩语', native:'한국어',    flag:'🇰🇷', color:'#7c3aed', ttsLang:'ko-KR' },
  es: { code:'es', name:'西班牙语', native:'Español', flag:'🇪🇸', color:'#ea580c', ttsLang:'es-ES' },
  fr: { code:'fr', name:'法语', native:'Français',  flag:'🇫🇷', color:'#0891b2', ttsLang:'fr-FR' }
};

const LEVELS = {
  A1: { key:'A1', name:'入门', desc:'能理解最基础的表达，会自我介绍。' },
  A2: { key:'A2', name:'初级', desc:'能在日常情境中进行简单交流。' },
  B1: { key:'B1', name:'中级', desc:'能应对大多数日常情景下的语言需求。' },
  B2: { key:'B2', name:'中高级', desc:'能自如地与母语者进行交流。' },
  C1: { key:'C1', name:'高级', desc:'能灵活有效地将语言用于社交、学术及专业目的。' },
  C2: { key:'C2', name:'精通', desc:'能轻松理解听到或读到的任何内容。' }
};

/* ===== 30 门课程 ===== */
const COURSES = [
  { id:'en-A1', lang:'en', level:'A1', title:'English Foundations', subtitle:'英语入门：从零开始', xp:120, icon:'🌱',
    lessons:['字母与发音规则','问候与自我介绍','数字 1–100','日常物品','家庭成员与称呼','颜色与描述','简单现在时','常用疑问句'] },
  { id:'en-A2', lang:'en', level:'A2', title:'Daily English', subtitle:'日常英语：生活场景对话', xp:180, icon:'☕',
    lessons:['餐厅点餐','购物与价格','问路与指路','天气与季节','职业与工作','每日时间表','现在进行时','一般过去时','简单将来时','频率副词'] },
  { id:'en-B1', lang:'en', level:'B1', title:'Conversational English', subtitle:'中级英语：表达观点与故事', xp:260, icon:'💬',
    lessons:['表达观点与偏好','描述旅行经历','健康与饮食','科技与日常','环保话题','现在完成时','条件句 (If)','间接引语','连接词与过渡','表达建议'] },
  { id:'en-B2', lang:'en', level:'B2', title:'Academic & Business', subtitle:'中高级：学术写作与职场表达', xp:360, icon:'🎯',
    lessons:['议论文写作','商务邮件','会议与谈判','演讲与陈述','新闻与媒体','文学短篇','复杂时态','虚拟语气','高级连接词','长难句分析'] },
  { id:'en-C1', lang:'en', level:'C1', title:'Advanced Discourse', subtitle:'高级：流利与抽象表达', xp:520, icon:'🚀',
    lessons:['社会热点讨论','文化与哲学议题','学术报告','影视与文学赏析','习语与俚语','演讲风格','高级写作','逻辑与论证'] },
  { id:'en-C2', lang:'en', level:'C2', title:'Mastery & Proficiency', subtitle:'精通：母语级精确度与流畅度', xp:720, icon:'👑',
    lessons:['同义词深度辨析','高级修辞手法','学术论文写作','文学作品细读','口译入门','高级议论文','语域转换','逻辑与说服'] },

  { id:'ja-A1', lang:'ja', level:'A1', title:'はじめての日本語', subtitle:'日语入门：五十音起步', xp:140, icon:'🌸',
    lessons:['平假名 50 音 (あ行–な行)','平假名 50 音 (は行–わ行)','片假名基础','基本问候与应答','数字与时间','自我介绍','场所与位置','助词「は・が・を」'] },
  { id:'ja-A2', lang:'ja', level:'A2', title:'生活日本語', subtitle:'初级：日常生活日语', xp:200, icon:'🏯',
    lessons:['购物与价格','餐厅对话','问路与指路','过去时 (ました形)','て形的多种用法','形容词活用','家庭成员','日常计划'] },
  { id:'ja-B1', lang:'ja', level:'B1', title:'自然会話', subtitle:'中级：自然流畅的对话', xp:300, icon:'🎎',
    lessons:['观点与意见表达','旅行与文化体验','敬语基础','条件表达 (ば·たら·なら)','使役形与被动','长文阅读','邮件写作','日本文化'] },
  { id:'ja-B2', lang:'ja', level:'B2', title:'上級への道', subtitle:'中高级：复杂语境应对', xp:420, icon:'⚔️',
    lessons:['高级敬语综合','商务日语场景','新闻日语听力','社会话题讨论','授受动词','推测表达','古典日语入门','日本文学短篇'] },
  { id:'ja-C1', lang:'ja', level:'C1', title:'Advanced Japanese', subtitle:'高级：学术与专业领域', xp:560, icon:'📚',
    lessons:['学术论文阅读','日本文学赏析','新闻评论','跨文化沟通','商务谈判','演讲与发表','法律与政治用语','艺术评论写作'] },
  { id:'ja-C2', lang:'ja', level:'C2', title:'日本語運用自如', subtitle:'精通：文化与思维深度', xp:760, icon:'🌟',
    lessons:['方言与地域文化','古典文学选读','翻译理论与实践','语言学基础知识','日本思想史','高级作文','面试与自我展示','文化差异深层解读'] },

  { id:'ko-A1', lang:'ko', level:'A1', title:'처음 만나는 한국어', subtitle:'韩语入门：从韩文字母开始', xp:140, icon:'🌺',
    lessons:['한글 자음 (ㄱ–ㅎ)','한글 모음 (ㅏ–ㅣ)','基本问候与应答','数字与货币','自我介绍','助词 은/는·이/가·을/를','基础动词','日常短句'] },
  { id:'ko-A2', lang:'ko', level:'A2', title:'일상 한국어', subtitle:'初级：日常生活韩语', xp:210, icon:'🍲',
    lessons:['餐厅与点餐','问路与指路','过去时 (았/었어요)','将来时 (ㄹ 거예요·겠어요)','形容词活用','日期与时间','家庭与职业','兴趣爱好'] },
  { id:'ko-B1', lang:'ko', level:'B1', title:'자연스러운 한국어', subtitle:'中级：自然表达', xp:310, icon:'🎬',
    lessons:['观点与讨论','使动与被动','连接词尾','间接引语','长文阅读','K-pop 与影视文化','邮件与正式写作','韩国社会话题'] },
  { id:'ko-B2', lang:'ko', level:'B2', title:'실전 한국어', subtitle:'中高级：复杂语境与专业表达', xp:420, icon:'🧩',
    lessons:['高级敬语体系','商务韩语','新闻听力','韩语俗语与惯用语','作文与论述','韩国历史与文化','社交与职场','TOPIK 写作冲刺'] },
  { id:'ko-C1', lang:'ko', level:'C1', title:'한국어의 깊이', subtitle:'高级：学术与文化深度', xp:560, icon:'🏔️',
    lessons:['学术论文写作','韩国文学作品','新闻评论分析','翻译理论','韩国政治与经济','哲学与价值观','演讲与辩论','创意写作'] },
  { id:'ko-C2', lang:'ko', level:'C2', title:'한국어 마스터리', subtitle:'精通：母语级深度', xp:760, icon:'💎',
    lessons:['韩语方言差异','古典文学入门','高级翻译','语言学理论','韩国近现代文学','深度文化分析','辩论与批判思维','专业领域深化'] },

  { id:'es-A1', lang:'es', level:'A1', title:'Primeros Pasos', subtitle:'西班牙语入门：字母与问候', xp:130, icon:'🥘',
    lessons:['字母与发音','问候与告别','数字 1–100','Ser 与 Estar','定冠词与不定冠词','日常物品','家庭成员','现在时规则动词'] },
  { id:'es-A2', lang:'es', level:'A2', title:'Vida Cotidiana', subtitle:'初级：日常西语', xp:190, icon:'💃',
    lessons:['餐厅用语','购物与价格','问路与指路','过去时 (Pretérito Indefinido)','时间与日期','天气与季节','爱好与兴趣','不规则动词'] },
  { id:'es-B1', lang:'es', level:'B1', title:'Conversación Natural', subtitle:'中级：自然对话', xp:270, icon:'🌞',
    lessons:['观点与辩论','旅行经历','过去未完成时','条件句','命令式基础','关系从句','拉美与西语文化','写作练习'] },
  { id:'es-B2', lang:'es', level:'B2', title:'Español Avanzado', subtitle:'中高级：学术与职场表达', xp:380, icon:'🎭',
    lessons:['虚拟式 (Subjuntivo)','高级写作','新闻与媒体','商务西语','文学短篇','复杂从句','高级连接词','长篇精读'] },
  { id:'es-C1', lang:'es', level:'C1', title:'Dominio del Español', subtitle:'高级：西语精通', xp:540, icon:'📖',
    lessons:['学术论文写作','新闻评论','拉美文学','法律与政治用语','翻译实践','演讲与辩论','语言变体研究','创意写作'] },
  { id:'es-C2', lang:'es', level:'C2', title:'Maestría Hispánica', subtitle:'精通：文学与修辞', xp:740, icon:'🌍',
    lessons:['西语方言全景','古典文学选读','高级同义词','翻译理论','西班牙文学','批判性阅读','语言与社会','文学创作'] },

  { id:'fr-A1', lang:'fr', level:'A1', title:'Premiers Pas', subtitle:'法语入门：字母与基础', xp:130, icon:'🥐',
    lessons:['字母与语音','问候与告别','数字 0–100','Être 与 Avoir','定冠词与不定冠词','性数配合','现在时 -er 动词','日常场景'] },
  { id:'fr-A2', lang:'fr', level:'A2', title:'Français Quotidien', subtitle:'初级：生活法语', xp:200, icon:'🗼',
    lessons:['餐厅对话','购物与价格','过去时 (Passé Composé)','时间与日期','天气与季节','职业与工作','代词宾语','简单将来时'] },
  { id:'fr-B1', lang:'fr', level:'B1', title:'Expression Libre', subtitle:'中级：自由表达', xp:290, icon:'🎨',
    lessons:['观点与讨论','旅行与文化','未完成过去时 (Imparfait)','条件式现在时','命令式','关系代词','间接引语','法国文化'] },
  { id:'fr-B2', lang:'fr', level:'B2', title:'Français Avancé', subtitle:'中高级：学术与专业', xp:400, icon:'🖋️',
    lessons:['虚拟式完整用法','高级写作','新闻媒体','商务法语','文学文本','长篇阅读','高级连接词','议论文写作'] },
  { id:'fr-C1', lang:'fr', level:'C1', title:'Excellence du Français', subtitle:'高级：学术与专业领域', xp:560, icon:'🏛️',
    lessons:['学术论文','法国文学深度','新闻评论','翻译理论与实践','政治法律用语','演讲与辩论','议论文高级','艺术评论'] },
  { id:'fr-C2', lang:'fr', level:'C2', title:'Maîtrise du Français', subtitle:'精通：母语级深度', xp:760, icon:'✨',
    lessons:['法语方言','古典文学','高级翻译','语言学理论','法国思想史','批判性阅读','创意文学写作','专业领域深化'] }
];

/* ===== 单词库 VOCAB (每语言每级别 10+ 词) ===== */
const VOCAB = {
  en: [
    { id:'en-v1', lang:'en', level:'A1', word:'hello', phonetic:'/həˈloʊ/', meaning:'你好', example:'Hello, my name is Tom.', translation:'你好，我叫汤姆。' },
    { id:'en-v2', lang:'en', level:'A1', word:'goodbye', phonetic:'/ɡʊdˈbaɪ/', meaning:'再见', example:'Goodbye, see you tomorrow!', translation:'再见，明天见。' },
    { id:'en-v3', lang:'en', level:'A1', word:'water', phonetic:'/ˈwɔːtər/', meaning:'水', example:'I would like a glass of water.', translation:'我想要一杯水。' },
    { id:'en-v4', lang:'en', level:'A1', word:'book', phonetic:'/bʊk/', meaning:'书', example:'This book is very interesting.', translation:'这本书非常有趣。' },
    { id:'en-v5', lang:'en', level:'A1', word:'friend', phonetic:'/frɛnd/', meaning:'朋友', example:'She is my best friend.', translation:'她是我最好的朋友。' },
    { id:'en-v6', lang:'en', level:'A1', word:'house', phonetic:'/haʊs/', meaning:'房子', example:'My house has three rooms.', translation:'我的房子有三个房间。' },
    { id:'en-v7', lang:'en', level:'A1', word:'family', phonetic:'/ˈfæməli/', meaning:'家庭', example:'My family is very big.', translation:'我的家庭很大。' },
    { id:'en-v8', lang:'en', level:'A1', word:'morning', phonetic:'/ˈmɔːrnɪŋ/', meaning:'早上', example:'Good morning, everyone!', translation:'大家早上好。' },
    { id:'en-v9', lang:'en', level:'A1', word:'man', phonetic:'/mæn/', meaning:'男人', example:'The man is tall.', translation:'那个男人很高。' },
    { id:'en-v10', lang:'en', level:'A1', word:'school', phonetic:'/skuːl/', meaning:'学校', example:'The school is near my house.', translation:'学校在我家附近。' },
    { id:'en-v11', lang:'en', level:'A2', word:'breakfast', phonetic:'/ˈbrɛkfəst/', meaning:'早餐', example:'I have breakfast at seven.', translation:'我七点吃早餐。' },
    { id:'en-v12', lang:'en', level:'A2', word:'weather', phonetic:'/ˈwɛðər/', meaning:'天气', example:'The weather is nice today.', translation:'今天天气很好。' },
    { id:'en-v13', lang:'en', level:'A2', word:'restaurant', phonetic:'/ˈrɛstərɒnt/', meaning:'餐厅', example:'The restaurant is closed.', translation:'餐厅关门了。' },
    { id:'en-v14', lang:'en', level:'A2', word:'airport', phonetic:'/ˈɛrpɔːrt/', meaning:'机场', example:'I will meet you at the airport.', translation:'我会在机场接你。' },
    { id:'en-v15', lang:'en', level:'A2', word:'schedule', phonetic:'/ˈʃɛdjuːl/', meaning:'日程', example:'My schedule is very busy.', translation:'我的日程很满。' },
    { id:'en-v16', lang:'en', level:'A2', word:'experience', phonetic:'/ɪkˈspɪəriəns/', meaning:'经验', example:'She has a lot of experience.', translation:'她有很多经验。' },
    { id:'en-v17', lang:'en', level:'A2', word:'important', phonetic:'/ɪmˈpɔːrtənt/', meaning:'重要的', example:'Health is important.', translation:'健康很重要。' },
    { id:'en-v18', lang:'en', level:'A2', word:'possible', phonetic:'/ˈpɒsɪbəl/', meaning:'可能的', example:'Everything is possible.', translation:'一切皆有可能。' },
    { id:'en-v19', lang:'en', level:'A2', word:'different', phonetic:'/ˈdɪfərənt/', meaning:'不同的', example:'We have different opinions.', translation:'我们有不同的看法。' },
    { id:'en-v20', lang:'en', level:'A2', word:'ticket', phonetic:'/ˈtɪkɪt/', meaning:'票', example:'I need two tickets.', translation:'我需要两张票。' },
    { id:'en-v21', lang:'en', level:'B1', word:'opportunity', phonetic:'/ˌɒpərˈtuːnəti/', meaning:'机会', example:'This is a great opportunity.', translation:'这是一个很好的机会。' },
    { id:'en-v22', lang:'en', level:'B1', word:'environment', phonetic:'/ɪnˈvaɪrənmənt/', meaning:'环境', example:'We must protect the environment.', translation:'我们必须保护环境。' },
    { id:'en-v23', lang:'en', level:'B1', word:'relationship', phonetic:'/rɪˈleɪʃənʃɪp/', meaning:'关系', example:'I have a good relationship with my boss.', translation:'我和老板关系很好。' },
    { id:'en-v24', lang:'en', level:'B1', word:'achieve', phonetic:'/əˈtʃiːv/', meaning:'达成', example:'You can achieve anything.', translation:'你可以达成任何目标。' },
    { id:'en-v25', lang:'en', level:'B1', word:'necessary', phonetic:'/ˈnɛsəsəri/', meaning:'必要的', example:'It is necessary to study hard.', translation:'努力学习是必要的。' },
    { id:'en-v26', lang:'en', level:'B1', word:'support', phonetic:'/səˈpɔːrt/', meaning:'支持', example:'Thank you for your support.', translation:'感谢您的支持。' },
    { id:'en-v27', lang:'en', level:'B1', word:'decision', phonetic:'/dɪˈsɪʒən/', meaning:'决定', example:'It was a difficult decision.', translation:'那是一个艰难的决定。' },
    { id:'en-v28', lang:'en', level:'B1', word:'influence', phonetic:'/ˈɪnfluəns/', meaning:'影响', example:'Weather influences our mood.', translation:'天气影响我们的心情。' },
    { id:'en-v29', lang:'en', level:'B1', word:'consider', phonetic:'/kənˈsɪdər/', meaning:'考虑', example:'We need to consider all factors.', translation:'我们需要考虑所有因素。' },
    { id:'en-v30', lang:'en', level:'B1', word:'improve', phonetic:'/ɪmˈpruːv/', meaning:'改善', example:'I want to improve my English.', translation:'我想提高我的英语。' },
    { id:'en-v31', lang:'en', level:'B2', word:'controversial', phonetic:'/ˌkɒntrəˈvɜːrʃəl/', meaning:'有争议的', example:'This issue is highly controversial.', translation:'这个问题极具争议。' },
    { id:'en-v32', lang:'en', level:'B2', word:'comprehensive', phonetic:'/ˌkɒmprɪˈhɛnsɪv/', meaning:'全面的', example:'The report is comprehensive.', translation:'这份报告很全面。' },
    { id:'en-v33', lang:'en', level:'B2', word:'sufficient', phonetic:'/səˈfɪʃənt/', meaning:'足够的', example:'The evidence is not sufficient.', translation:'证据不足。' },
    { id:'en-v34', lang:'en', level:'B2', word:'emphasize', phonetic:'/ˈɛmfəsaɪz/', meaning:'强调', example:'I want to emphasize the importance.', translation:'我想强调重要性。' },
    { id:'en-v35', lang:'en', level:'B2', word:'alternative', phonetic:'/ɔːlˈtɜːrnətɪv/', meaning:'替代方案', example:'Is there an alternative solution?', translation:'有没有替代方案？' },
    { id:'en-v36', lang:'en', level:'B2', word:'consequence', phonetic:'/ˈkɒnsɪkwəns/', meaning:'后果', example:'Consider the consequences.', translation:'想想后果。' },
    { id:'en-v37', lang:'en', level:'B2', word:'participate', phonetic:'/pɑːrˈtɪsɪpeɪt/', meaning:'参与', example:'Everyone should participate.', translation:'每个人都应参与。' },
    { id:'en-v38', lang:'en', level:'B2', word:'investigate', phonetic:'/ɪnˈvɛstɪɡeɪt/', meaning:'调查', example:'The police are investigating.', translation:'警方正在调查。' },
    { id:'en-v39', lang:'en', level:'B2', word:'demonstrate', phonetic:'/ˈdɛmənstreɪt/', meaning:'展示', example:'This demonstrates the theory.', translation:'这证明了这一理论。' },
    { id:'en-v40', lang:'en', level:'B2', word:'distinguish', phonetic:'/dɪˈstɪŋɡwɪʃ/', meaning:'区分', example:'Hard to distinguish the two.', translation:'很难区分两者。' },
    { id:'en-v41', lang:'en', level:'C1', word:'ubiquitous', phonetic:'/juːˈbɪkwɪtəs/', meaning:'无处不在的', example:'Smartphones are ubiquitous.', translation:'智能手机无处不在。' },
    { id:'en-v42', lang:'en', level:'C1', word:'nuance', phonetic:'/ˈnuːɑːns/', meaning:'细微差别', example:'She understands the nuances.', translation:'她理解其中的细微差别。' },
    { id:'en-v43', lang:'en', level:'C1', word:'eloquent', phonetic:'/ˈɛləkwənt/', meaning:'雄辩的', example:'An eloquent speech.', translation:'一场雄辩的演讲。' },
    { id:'en-v44', lang:'en', level:'C1', word:'paradigm', phonetic:'/ˈpærədaɪm/', meaning:'范式', example:'A paradigm shift in science.', translation:'科学上的范式转变。' },
    { id:'en-v45', lang:'en', level:'C1', word:'mitigate', phonetic:'/ˈmɪtɪɡeɪt/', meaning:'减轻', example:'Mitigate climate change effects.', translation:'减轻气候变化的影响。' },
    { id:'en-v46', lang:'en', level:'C1', word:'ambivalent', phonetic:'/æmˈbɪvələnt/', meaning:'矛盾心理', example:'She feels ambivalent.', translation:'她感到矛盾。' },
    { id:'en-v47', lang:'en', level:'C1', word:'pervasive', phonetic:'/pərˈveɪsɪv/', meaning:'普遍的', example:'A pervasive cultural phenomenon.', translation:'一个普遍的文化现象。' },
    { id:'en-v48', lang:'en', level:'C1', word:'pragmatic', phonetic:'/præɡˈmætɪk/', meaning:'务实的', example:'A pragmatic approach.', translation:'务实的方法。' },
    { id:'en-v49', lang:'en', level:'C1', word:'tenacious', phonetic:'/təˈneɪʃəs/', meaning:'坚韧的', example:'A tenacious negotiator.', translation:'一位坚韧的谈判者。' },
    { id:'en-v50', lang:'en', level:'C1', word:'synergy', phonetic:'/ˈsɪnərdʒi/', meaning:'协同', example:'The synergy between teams.', translation:'团队之间的协同。' },
    { id:'en-v51', lang:'en', level:'C2', word:'quintessential', phonetic:'/ˌkwɪntɪˈsɛnʃəl/', meaning:'典型精华', example:'The quintessential gentleman.', translation:'典型的绅士。' },
    { id:'en-v52', lang:'en', level:'C2', word:'ephemeral', phonetic:'/ɪˈfɛmərəl/', meaning:'短暂的', example:'Fame can be ephemeral.', translation:'名声可以是短暂的。' },
    { id:'en-v53', lang:'en', level:'C2', word:'perspicacious', phonetic:'/ˌpɜːrspɪˈkeɪʃəs/', meaning:'敏锐的', example:'A perspicacious analysis.', translation:'敏锐的分析。' },
    { id:'en-v54', lang:'en', level:'C2', word:'magnanimous', phonetic:'/mæɡˈnænɪməs/', meaning:'宽宏大量的', example:'Magnanimous in victory.', translation:'在胜利中宽宏大量。' },
    { id:'en-v55', lang:'en', level:'C2', word:'ineffable', phonetic:'/ɪnˈɛfəbəl/', meaning:'难以形容的', example:'An ineffable beauty.', translation:'难以形容的美。' },
    { id:'en-v56', lang:'en', level:'A1', word:'mother', phonetic:'/ˈmʌðər/', meaning:'母亲', example:'My mother is kind.', translation:'我母亲很善良。' },
    { id:'en-v57', lang:'en', level:'A1', word:'father', phonetic:'/ˈfɑːðər/', meaning:'父亲', example:'My father works hard.', translation:'我父亲工作很努力。' },
    { id:'en-v58', lang:'en', level:'A1', word:'sister', phonetic:'/ˈsɪstər/', meaning:'姐妹', example:'I have a sister.', translation:'我有一个姐姐/妹妹。' },
    { id:'en-v59', lang:'en', level:'A1', word:'brother', phonetic:'/ˈbrʌðər/', meaning:'兄弟', example:'My brother is tall.', translation:'我兄弟很高。' },
    { id:'en-v60', lang:'en', level:'A1', word:'red', phonetic:'/rɛd/', meaning:'红色', example:'The apple is red.', translation:'苹果是红色的。' },
    { id:'en-v61', lang:'en', level:'A1', word:'blue', phonetic:'/bluː/', meaning:'蓝色', example:'The sky is blue.', translation:'天空是蓝色的。' },
    { id:'en-v62', lang:'en', level:'A1', word:'green', phonetic:'/ɡriːn/', meaning:'绿色', example:'The grass is green.', translation:'草是绿色的。' },
    { id:'en-v63', lang:'en', level:'A1', word:'yellow', phonetic:'/ˈjɛloʊ/', meaning:'黄色', example:'The sun is yellow.', translation:'太阳是黄色的。' },
    { id:'en-v64', lang:'en', level:'A1', word:'one', phonetic:'/wʌn/', meaning:'一', example:'I have one book.', translation:'我有一本书。' },
    { id:'en-v65', lang:'en', level:'A1', word:'two', phonetic:'/tuː/', meaning:'二', example:'Two cats are sleeping.', translation:'两只猫在睡觉。' },
    { id:'en-v66', lang:'en', level:'A1', word:'three', phonetic:'/θriː/', meaning:'三', example:'Three people came.', translation:'三个人来了。' },
    { id:'en-v67', lang:'en', level:'A1', word:'ten', phonetic:'/tɛn/', meaning:'十', example:'Ten apples, please.', translation:'请给我十个苹果。' },
    { id:'en-v68', lang:'en', level:'A1', word:'Monday', phonetic:'/ˈmʌndeɪ/', meaning:'星期一', example:'Monday is busy.', translation:'星期一很忙。' },
    { id:'en-v69', lang:'en', level:'A1', word:'Tuesday', phonetic:'/ˈtuːzdeɪ/', meaning:'星期二', example:'Tuesday is okay.', translation:'星期二还好。' },
    { id:'en-v70', lang:'en', level:'A1', word:'yesterday', phonetic:'/ˈjɛstərdeɪ/', meaning:'昨天', example:'Yesterday was fun.', translation:'昨天很有趣。' },
    { id:'en-v71', lang:'en', level:'A1', word:'today', phonetic:'/təˈdeɪ/', meaning:'今天', example:'Today is Monday.', translation:'今天是星期一。' },
    { id:'en-v72', lang:'en', level:'A1', word:'tomorrow', phonetic:'/təˈmɔːroʊ/', meaning:'明天', example:'Tomorrow is Tuesday.', translation:'明天是星期二。' },
    { id:'en-v73', lang:'en', level:'A1', word:'cat', phonetic:'/kæt/', meaning:'猫', example:'The cat is cute.', translation:'猫很可爱。' },
    { id:'en-v74', lang:'en', level:'A1', word:'dog', phonetic:'/dɔːɡ/', meaning:'狗', example:'The dog runs fast.', translation:'狗跑得很快。' },
    { id:'en-v75', lang:'en', level:'A1', word:'apple', phonetic:'/ˈæpəl/', meaning:'苹果', example:'An apple a day.', translation:'一天一个苹果。' },
    { id:'en-v76', lang:'en', level:'A1', word:'banana', phonetic:'/bəˈnænə/', meaning:'香蕉', example:'I like bananas.', translation:'我喜欢香蕉。' },
    { id:'en-v77', lang:'en', level:'A1', word:'car', phonetic:'/kɑːr/', meaning:'汽车', example:'The car is new.', translation:'汽车是新的。' },
    { id:'en-v78', lang:'en', level:'A1', word:'bus', phonetic:'/bʌs/', meaning:'公共汽车', example:'Take the bus.', translation:'坐公共汽车。' },
    { id:'en-v79', lang:'en', level:'A1', word:'train', phonetic:'/treɪn/', meaning:'火车', example:'The train is fast.', translation:'火车很快。' },
    { id:'en-v80', lang:'en', level:'A1', word:'please', phonetic:'/pliːz/', meaning:'请', example:'Please sit down.', translation:'请坐下。' },
    { id:'en-v81', lang:'en', level:'A1', word:'sorry', phonetic:'/ˈsɔːri/', meaning:'对不起', example:'Sorry, I am late.', translation:'对不起，我迟到了。' },
    { id:'en-v82', lang:'en', level:'A1', word:'thank', phonetic:'/θæŋk/', meaning:'感谢', example:'Thank you very much.', translation:'非常感谢你。' },
    { id:'en-v83', lang:'en', level:'A1', word:'open', phonetic:'/ˈoʊpən/', meaning:'打开', example:'Open the door.', translation:'打开门。' },
    { id:'en-v84', lang:'en', level:'A1', word:'close', phonetic:'/kloʊz/', meaning:'关闭', example:'Close the window.', translation:'关窗。' },
    { id:'en-v85', lang:'en', level:'A1', word:'eat', phonetic:'/iːt/', meaning:'吃', example:'Eat your food.', translation:'吃你的食物。' },
    { id:'en-v86', lang:'en', level:'A1', word:'drink', phonetic:'/drɪŋk/', meaning:'喝', example:'Drink water.', translation:'喝水。' },
    { id:'en-v87', lang:'en', level:'A1', word:'walk', phonetic:'/wɔːk/', meaning:'走', example:'Walk to school.', translation:'走去学校。' },
    { id:'en-v88', lang:'en', level:'A1', word:'run', phonetic:'/rʌn/', meaning:'跑', example:'Run fast!', translation:'快跑！' },
    { id:'en-v89', lang:'en', level:'A1', word:'sleep', phonetic:'/sliːp/', meaning:'睡觉', example:'Sleep well.', translation:'睡个好觉。' },
    { id:'en-v90', lang:'en', level:'A1', word:'good', phonetic:'/ɡʊd/', meaning:'好的', example:'Good morning!', translation:'早上好！' },
    { id:'en-v91', lang:'en', level:'A1', word:'bad', phonetic:'/bæd/', meaning:'坏的', example:'Bad news.', translation:'坏消息。' },
    { id:'en-v92', lang:'en', level:'A1', word:'big', phonetic:'/bɪɡ/', meaning:'大的', example:'Big house.', translation:'大房子。' },
    { id:'en-v93', lang:'en', level:'A1', word:'small', phonetic:'/smɔːl/', meaning:'小的', example:'Small cat.', translation:'小猫。' },
    { id:'en-v94', lang:'en', level:'A1', word:'hot', phonetic:'/hɒt/', meaning:'热的', example:'Hot coffee.', translation:'热咖啡。' },
    { id:'en-v95', lang:'en', level:'A1', word:'cold', phonetic:'/koʊld/', meaning:'冷的', example:'Cold water.', translation:'冷水。' },
    { id:'en-v96', lang:'en', level:'A2', word:'hotel', phonetic:'/hoʊˈtɛl/', meaning:'酒店', example:'The hotel is expensive.', translation:'酒店很贵。' },
    { id:'en-v97', lang:'en', level:'A2', word:'hospital', phonetic:'/ˈhɒspɪtəl/', meaning:'医院', example:'Go to the hospital.', translation:'去医院。' },
    { id:'en-v98', lang:'en', level:'A2', word:'pharmacy', phonetic:'/ˈfɑːrməsi/', meaning:'药房', example:'Buy medicine at pharmacy.', translation:'去药房买药。' },
    { id:'en-v99', lang:'en', level:'A2', word:'supermarket', phonetic:'/ˈsuːpərˌmɑːrkɪt/', meaning:'超市', example:'Go to supermarket.', translation:'去超市。' },
    { id:'en-v100', lang:'en', level:'A2', word:'cinema', phonetic:'/ˈsɪnəmə/', meaning:'电影院', example:'Watch film at cinema.', translation:'在电影院看电影。' },
    { id:'en-v101', lang:'en', level:'A2', word:'museum', phonetic:'/mjuːˈziːəm/', meaning:'博物馆', example:'Visit the museum.', translation:'参观博物馆。' },
    { id:'en-v102', lang:'en', level:'A2', word:'park', phonetic:'/pɑːrk/', meaning:'公园', example:'Play in the park.', translation:'在公园玩。' },
    { id:'en-v103', lang:'en', level:'A2', word:'beach', phonetic:'/biːtʃ/', meaning:'海滩', example:'Swim at the beach.', translation:'在海滩游泳。' },
    { id:'en-v104', lang:'en', level:'A2', word:'mountain', phonetic:'/ˈmaʊntən/', meaning:'山', example:'Climb the mountain.', translation:'爬山。' },
    { id:'en-v105', lang:'en', level:'A2', word:'river', phonetic:'/ˈrɪvər/', meaning:'河流', example:'Fish in the river.', translation:'在河里钓鱼。' },
    { id:'en-v106', lang:'en', level:'A2', word:'ocean', phonetic:'/ˈoʊʃən/', meaning:'海洋', example:'Swim in the ocean.', translation:'在海洋里游泳。' },
    { id:'en-v107', lang:'en', level:'A2', word:'island', phonetic:'/ˈaɪlənd/', meaning:'岛屿', example:'Visit the island.', translation:'参观岛屿。' },
    { id:'en-v108', lang:'en', level:'A2', word:'cloudy', phonetic:'/ˈklaʊdi/', meaning:'多云的', example:'It is cloudy today.', translation:'今天多云。' },
    { id:'en-v109', lang:'en', level:'A2', word:'sunny', phonetic:'/ˈsʌni/', meaning:'阳光明媚的', example:'It is sunny.', translation:'阳光明媚。' },
    { id:'en-v110', lang:'en', level:'A2', word:'rainy', phonetic:'/ˈreɪni/', meaning:'下雨的', example:'It is rainy.', translation:'下雨了。' },
    { id:'en-v111', lang:'en', level:'A2', word:'snowy', phonetic:'/ˈsnoʊi/', meaning:'下雪的', example:'It is snowy.', translation:'下雪了。' },
    { id:'en-v112', lang:'en', level:'A2', word:'windy', phonetic:'/ˈwɪndi/', meaning:'有风的', example:'It is windy.', translation:'有风。' },
    { id:'en-v113', lang:'en', level:'A2', word:'summer', phonetic:'/ˈsʌmər/', meaning:'夏天', example:'Summer is hot.', translation:'夏天很热。' },
    { id:'en-v114', lang:'en', level:'A2', word:'winter', phonetic:'/ˈwɪntər/', meaning:'冬天', example:'Winter is cold.', translation:'冬天很冷。' },
    { id:'en-v115', lang:'en', level:'A2', word:'spring', phonetic:'/sprɪŋ/', meaning:'春天', example:'Spring is warm.', translation:'春天很温暖。' },
    { id:'en-v116', lang:'en', level:'A2', word:'autumn', phonetic:'/ˈɔːtəm/', meaning:'秋天', example:'Autumn is cool.', translation:'秋天很凉爽。' },
    { id:'en-v117', lang:'en', level:'A2', word:'holiday', phonetic:'/ˈhɒlədeɪ/', meaning:'假期', example:'Go on holiday.', translation:'去度假。' },
    { id:'en-v118', lang:'en', level:'A2', word:'vacation', phonetic:'/veɪˈkeɪʃən/', meaning:'假期', example:'Summer vacation.', translation:'暑假。' },
    { id:'en-v119', lang:'en', level:'A2', word:'weekend', phonetic:'/ˈwiːkɛnd/', meaning:'周末', example:'Enjoy weekend.', translation:'享受周末。' },
    { id:'en-v120', lang:'en', level:'A2', word:'passport', phonetic:'/ˈpæspɔːrt/', meaning:'护照', example:'Show your passport.', translation:'出示你的护照。' },
    { id:'en-v121', lang:'en', level:'A2', word:'luggage', phonetic:'/ˈlʌɡɪdʒ/', meaning:'行李', example:'Carry the luggage.', translation:'搬行李。' },
    { id:'en-v122', lang:'en', level:'A2', word:'map', phonetic:'/mæp/', meaning:'地图', example:'Read the map.', translation:'看地图。' },
    { id:'en-v123', lang:'en', level:'A2', word:'guide', phonetic:'/ɡaɪd/', meaning:'导游', example:'The guide is helpful.', translation:'导游很有帮助。' },
    { id:'en-v124', lang:'en', level:'A2', word:'tourist', phonetic:'/ˈtʊrɪst/', meaning:'游客', example:'The tourist visits.', translation:'游客参观。' },
    { id:'en-v125', lang:'en', level:'A2', word:'language', phonetic:'/ˈlæŋɡwɪdʒ/', meaning:'语言', example:'Learn language.', translation:'学习语言。' },
    { id:'en-v126', lang:'en', level:'A2', word:'culture', phonetic:'/ˈkʌltʃər/', meaning:'文化', example:'Experience culture.', translation:'体验文化。' },
    { id:'en-v127', lang:'en', level:'A2', word:'festival', phonetic:'/ˈfɛstɪvəl/', meaning:'节日', example:'Celebrate festival.', translation:'庆祝节日。' },
    { id:'en-v128', lang:'en', level:'A2', word:'music', phonetic:'/ˈmjuːzɪk/', meaning:'音乐', example:'Listen to music.', translation:'听音乐。' },
    { id:'en-v129', lang:'en', level:'A2', word:'song', phonetic:'/sɔːŋ/', meaning:'歌曲', example:'Sing a song.', translation:'唱首歌。' },
    { id:'en-v130', lang:'en', level:'A2', word:'guitar', phonetic:'/ɡɪˈtɑːr/', meaning:'吉他', example:'Play the guitar.', translation:'弹吉他。' },
    { id:'en-v131', lang:'en', level:'A2', word:'camera', phonetic:'/ˈkæmərə/', meaning:'相机', example:'Take a photo with camera.', translation:'用相机拍照。' },
    { id:'en-v132', lang:'en', level:'B1', word:'technology', phonetic:'/tɛkˈnɒlədʒi/', meaning:'科技', example:'Technology changes life.', translation:'科技改变生活。' },
    { id:'en-v133', lang:'en', level:'B1', word:'computer', phonetic:'/kəmˈpjuːtər/', meaning:'电脑', example:'Work on computer.', translation:'用电脑工作。' },
    { id:'en-v134', lang:'en', level:'B1', word:'internet', phonetic:'/ˈɪntərnɛt/', meaning:'互联网', example:'Search on internet.', translation:'在网上搜索。' },
    { id:'en-v135', lang:'en', level:'B1', word:'website', phonetic:'/ˈwɛbsaɪt/', meaning:'网站', example:'Visit our website.', translation:'访问我们的网站。' },
    { id:'en-v136', lang:'en', level:'B1', word:'email', phonetic:'/ˈiːmeɪl/', meaning:'电子邮件', example:'Send an email.', translation:'发送电子邮件。' },
    { id:'en-v137', lang:'en', level:'B1', word:'software', phonetic:'/ˈsɒftwɛr/', meaning:'软件', example:'Install software.', translation:'安装软件。' },
    { id:'en-v138', lang:'en', level:'B1', word:'download', phonetic:'/ˈdaʊnloʊd/', meaning:'下载', example:'Download the file.', translation:'下载文件。' },
    { id:'en-v139', lang:'en', level:'B1', word:'data', phonetic:'/ˈdeɪtə/', meaning:'数据', example:'Collect data.', translation:'收集数据。' },
    { id:'en-v140', lang:'en', level:'B1', word:'education', phonetic:'/ˌɛdʒʊˈkeɪʃən/', meaning:'教育', example:'Value education.', translation:'重视教育。' },
    { id:'en-v141', lang:'en', level:'B1', word:'university', phonetic:'/ˌjuːnɪˈvɜːrsɪti/', meaning:'大学', example:'Study at university.', translation:'在大学学习。' },
    { id:'en-v142', lang:'en', level:'B1', word:'degree', phonetic:'/dɪˈɡriː/', meaning:'学位', example:'Earn a degree.', translation:'获得学位。' },
    { id:'en-v143', lang:'en', level:'B1', word:'course', phonetic:'/kɔːrs/', meaning:'课程', example:'Take a course.', translation:'参加课程。' },
    { id:'en-v144', lang:'en', level:'B1', word:'teacher', phonetic:'/ˈtiːtʃər/', meaning:'老师', example:'The teacher explains.', translation:'老师讲解。' },
    { id:'en-v145', lang:'en', level:'B1', word:'student', phonetic:'/ˈstuːdənt/', meaning:'学生', example:'The student learns.', translation:'学生学习。' },
    { id:'en-v146', lang:'en', level:'B1', word:'colleague', phonetic:'/ˈkɒliːɡ/', meaning:'同事', example:'Work with colleague.', translation:'与同事合作。' },
    { id:'en-v147', lang:'en', level:'B1', word:'boss', phonetic:'/bɒs/', meaning:'老板', example:'The boss decides.', translation:'老板做决定。' },
    { id:'en-v148', lang:'en', level:'B1', word:'interview', phonetic:'/ˈɪntərvjuː/', meaning:'面试', example:'Prepare for interview.', translation:'准备面试。' },
    { id:'en-v149', lang:'en', level:'B1', word:'career', phonetic:'/kəˈrɪr/', meaning:'职业', example:'Build a career.', translation:'建立事业。' },
    { id:'en-v150', lang:'en', level:'B1', word:'salary', phonetic:'/ˈsæləri/', meaning:'工资', example:'Discuss salary.', translation:'讨论工资。' },
    { id:'en-v151', lang:'en', level:'B1', word:'society', phonetic:'/səˈsaɪəti/', meaning:'社会', example:'Serve society.', translation:'服务社会。' },
    { id:'en-v152', lang:'en', level:'B1', word:'community', phonetic:'/kəˈmjuːnɪti/', meaning:'社区', example:'Help community.', translation:'帮助社区。' },
    { id:'en-v153', lang:'en', level:'B1', word:'tradition', phonetic:'/trəˈdɪʃən/', meaning:'传统', example:'Keep tradition.', translation:'保持传统。' },
    { id:'en-v154', lang:'en', level:'B1', word:'politics', phonetic:'/ˈpɒlɪtɪks/', meaning:'政治', example:'Study politics.', translation:'学习政治。' },
    { id:'en-v155', lang:'en', level:'B1', word:'government', phonetic:'/ˈɡʌvərnmənt/', meaning:'政府', example:'The government decides.', translation:'政府做决定。' },
    { id:'en-v156', lang:'en', level:'B1', word:'freedom', phonetic:'/ˈfriːdəm/', meaning:'自由', example:'Value freedom.', translation:'珍惜自由。' },
    { id:'en-v157', lang:'en', level:'B1', word:'justice', phonetic:'/ˈdʒʌstɪs/', meaning:'正义', example:'Seek justice.', translation:'寻求正义。' },
    { id:'en-v158', lang:'en', level:'B1', word:'pollution', phonetic:'/pəˈluːʃən/', meaning:'污染', example:'Reduce pollution.', translation:'减少污染。' },
    { id:'en-v159', lang:'en', level:'B1', word:'recycle', phonetic:'/riːˈsaɪkəl/', meaning:'回收', example:'Recycle paper.', translation:'回收纸张。' },
    { id:'en-v160', lang:'en', level:'B1', word:'energy', phonetic:'/ˈɛnərdʒi/', meaning:'能源', example:'Save energy.', translation:'节约能源。' },
    { id:'en-v161', lang:'en', level:'B2', word:'abstract', phonetic:'/ˈæbstrækt/', meaning:'抽象的', example:'Abstract concept.', translation:'抽象概念。' },
    { id:'en-v162', lang:'en', level:'B2', word:'conclusion', phonetic:'/kənˈkluːʒən/', meaning:'结论', example:'Draw a conclusion.', translation:'得出结论。' },
    { id:'en-v163', lang:'en', level:'B2', word:'reference', phonetic:'/ˈrɛfərəns/', meaning:'参考', example:'Check reference.', translation:'查阅参考资料。' },
    { id:'en-v164', lang:'en', level:'B2', word:'citation', phonetic:'/saɪˈteɪʃən/', meaning:'引用', example:'Cite properly.', translation:'正确引用。' },
    { id:'en-v165', lang:'en', level:'B2', word:'bibliography', phonetic:'/ˌbɪbliˈɒɡrəfi/', meaning:'参考文献', example:'Write bibliography.', translation:'写参考文献。' },
    { id:'en-v166', lang:'en', level:'B2', word:'methodology', phonetic:'/ˌmɛθəˈdɒlədʒi/', meaning:'方法论', example:'Follow methodology.', translation:'遵循方法论。' },
    { id:'en-v167', lang:'en', level:'B2', word:'analysis', phonetic:'/əˈnæləsɪs/', meaning:'分析', example:'Conduct analysis.', translation:'进行分析。' },
    { id:'en-v168', lang:'en', level:'B2', word:'theory', phonetic:'/ˈθɪəri/', meaning:'理论', example:'Apply theory.', translation:'应用理论。' },
    { id:'en-v169', lang:'en', level:'B2', word:'hypothesis', phonetic:'/haɪˈpɒθəsɪs/', meaning:'假设', example:'Test hypothesis.', translation:'检验假设。' },
    { id:'en-v170', lang:'en', level:'B2', word:'research', phonetic:'/rɪˈsɜːrtʃ/', meaning:'研究', example:'Do research.', translation:'做研究。' },
    { id:'en-v171', lang:'en', level:'B2', word:'survey', phonetic:'/ˈsɜːrveɪ/', meaning:'调查', example:'Conduct survey.', translation:'进行调查。' },
    { id:'en-v172', lang:'en', level:'B2', word:'proposal', phonetic:'/prəˈpoʊzəl/', meaning:'提案', example:'Submit proposal.', translation:'提交提案。' },
    { id:'en-v173', lang:'en', level:'B2', word:'contract', phonetic:'/ˈkɒntrækt/', meaning:'合同', example:'Sign contract.', translation:'签合同。' },
    { id:'en-v174', lang:'en', level:'B2', word:'negotiation', phonetic:'/nɪˌɡoʊʃiˈeɪʃən/', meaning:'谈判', example:'Join negotiation.', translation:'参加谈判。' },
    { id:'en-v175', lang:'en', level:'B2', word:'strategy', phonetic:'/ˈstrætədʒi/', meaning:'策略', example:'Plan strategy.', translation:'制定策略。' },
    { id:'en-v176', lang:'en', level:'B2', word:'marketing', phonetic:'/ˈmɑːrkɪtɪŋ/', meaning:'市场营销', example:'Study marketing.', translation:'学习市场营销。' },
    { id:'en-v177', lang:'en', level:'B2', word:'audience', phonetic:'/ˈɔːdiəns/', meaning:'观众', example:'Address audience.', translation:'对观众讲话。' },
    { id:'en-v178', lang:'en', level:'B2', word:'customer', phonetic:'/ˈkʌstəmər/', meaning:'顾客', example:'Serve customer.', translation:'服务顾客。' },
    { id:'en-v179', lang:'en', level:'B2', word:'budget', phonetic:'/ˈbʌdʒɪt/', meaning:'预算', example:'Manage budget.', translation:'管理预算。' },
    { id:'en-v180', lang:'en', level:'B2', word:'economy', phonetic:'/ɪˈkɒnəmi/', meaning:'经济', example:'Boost economy.', translation:'促进经济。' },
    { id:'en-v181', lang:'en', level:'B2', word:'inflation', phonetic:'/ɪnˈfleɪʃən/', meaning:'通货膨胀', example:'Control inflation.', translation:'控制通货膨胀。' },
    { id:'en-v182', lang:'en', level:'B2', word:'currency', phonetic:'/ˈkʌrənsi/', meaning:'货币', example:'Exchange currency.', translation:'兑换货币。' },
    { id:'en-v183', lang:'en', level:'B2', word:'global', phonetic:'/ˈɡloʊbəl/', meaning:'全球的', example:'Global issue.', translation:'全球性问题。' },
    { id:'en-v184', lang:'en', level:'B2', word:'diversity', phonetic:'/daɪˈvɜːrsɪti/', meaning:'多样性', example:'Embrace diversity.', translation:'接受多样性。' },
    { id:'en-v185', lang:'en', level:'B2', word:'sustainability', phonetic:'/səˌsteɪnəˈbɪlɪti/', meaning:'可持续性', example:'Promote sustainability.', translation:'促进可持续性。' },
    { id:'en-v186', lang:'en', level:'B2', word:'renewable', phonetic:'/rɪˈnjuːəbəl/', meaning:'可再生的', example:'Use renewable energy.', translation:'使用可再生能源。' },
    { id:'en-v187', lang:'en', level:'B2', word:'emission', phonetic:'/ɪˈmɪʃən/', meaning:'排放', example:'Reduce emission.', translation:'减少排放。' },
    { id:'en-v188', lang:'en', level:'B2', word:'conservation', phonetic:'/ˌkɒnsərˈveɪʃən/', meaning:'保护', example:'Wildlife conservation.', translation:'野生动物保护。' },
    { id:'en-v189', lang:'en', level:'C1', word:'discourse', phonetic:'/ˈdɪskɔːrs/', meaning:'论述', example:'Discourse analysis.', translation:'话语分析。' },
    { id:'en-v190', lang:'en', level:'C1', word:'rhetoric', phonetic:'/ˈrɛtərɪk/', meaning:'修辞', example:'Master rhetoric.', translation:'掌握修辞。' },
    { id:'en-v191', lang:'en', level:'C1', word:'dialect', phonetic:'/ˈdaɪəlɛkt/', meaning:'方言', example:'Study dialect.', translation:'研究方言。' },
    { id:'en-v192', lang:'en', level:'C1', word:'semantics', phonetic:'/sɪˈmæntɪks/', meaning:'语义学', example:'Explore semantics.', translation:'探索语义学。' },
    { id:'en-v193', lang:'en', level:'C1', word:'pragmatics', phonetic:'/præɡˈmætɪks/', meaning:'语用学', example:'Pragmatics in context.', translation:'语境中的语用学。' },
    { id:'en-v194', lang:'en', level:'C1', word:'syntax', phonetic:'/ˈsɪntæks/', meaning:'句法', example:'Analyze syntax.', translation:'分析句法。' },
    { id:'en-v195', lang:'en', level:'C1', word:'epistemology', phonetic:'/ɪˌpɪstəˈmɒlədʒi/', meaning:'认识论', example:'Epistemology questions.', translation:'认识论问题。' },
    { id:'en-v196', lang:'en', level:'C1', word:'ontology', phonetic:'/ɒnˈtɒlədʒi/', meaning:'本体论', example:'Ontology debates.', translation:'本体论争论。' },
    { id:'en-v197', lang:'en', level:'C1', word:'metaphysics', phonetic:'/ˌmɛtəˈfɪzɪks/', meaning:'形而上学', example:'Metaphysics explores reality.', translation:'形而上学探索实在。' },
    { id:'en-v198', lang:'en', level:'C1', word:'existentialism', phonetic:'/ˌɛɡzɪˈstɛnʃəlɪzəm/', meaning:'存在主义', example:'Embrace existentialism.', translation:'信奉存在主义。' },
    { id:'en-v199', lang:'en', level:'C1', word:'surrealism', phonetic:'/səˈriːəlɪzəm/', meaning:'超现实主义', example:'Art of surrealism.', translation:'超现实主义艺术。' },
    { id:'en-v200', lang:'en', level:'C1', word:'modernism', phonetic:'/ˈmɒdərnɪzəm/', meaning:'现代主义', example:'Modernism movement.', translation:'现代主义运动。' },
    { id:'en-v201', lang:'en', level:'C1', word:'postmodernism', phonetic:'/ˌpoʊstˈmɒdərnɪzəm/', meaning:'后现代主义', example:'Postmodernism critique.', translation:'后现代主义批判。' },
    { id:'en-v202', lang:'en', level:'C1', word:'allegory', phonetic:'/ˈælɪɡɔːri/', meaning:'寓言', example:'The allegory means.', translation:'这个寓言的意义是。' },
    { id:'en-v203', lang:'en', level:'C1', word:'irony', phonetic:'/ˈaɪrəni/', meaning:'讽刺', example:'The irony is clear.', translation:'讽刺很明显。' },
    { id:'en-v204', lang:'en', level:'C1', word:'satire', phonetic:'/ˈsætaɪər/', meaning:'讽刺作品', example:'Satire exposes flaws.', translation:'讽刺揭露缺点。' },
    { id:'en-v205', lang:'en', level:'C1', word:'paradox', phonetic:'/ˈpærədɒks/', meaning:'悖论', example:'Face paradox.', translation:'面对悖论。' },
    { id:'en-v206', lang:'en', level:'C1', word:'connotation', phonetic:'/ˌkɒnəˈteɪʃən/', meaning:'内涵', example:'Connotation matters.', translation:'内涵很重要。' },
    { id:'en-v207', lang:'en', level:'C1', word:'denotation', phonetic:'/ˌdiːnɒˈteɪʃən/', meaning:'外延', example:'Denotation is literal.', translation:'外延是字面意思。' },
    { id:'en-v208', lang:'en', level:'C1', word:'synthesize', phonetic:'/ˈsɪnθəsaɪz/', meaning:'综合', example:'Synthesize information.', translation:'综合信息。' },
    { id:'en-v209', lang:'en', level:'C1', word:'integrate', phonetic:'/ˈɪntɪɡreɪt/', meaning:'整合', example:'Integrate ideas.', translation:'整合想法。' },
    { id:'en-v210', lang:'en', level:'C1', word:'correlate', phonetic:'/ˈkɔːrəleɪt/', meaning:'关联', example:'Correlate variables.', translation:'关联变量。' },
    { id:'en-v211', lang:'en', level:'C1', word:'substantiate', phonetic:'/səbˈstænʃieɪt/', meaning:'证实', example:'Substantiate claim.', translation:'证实主张。' },
    { id:'en-v212', lang:'en', level:'C1', word:'corroborate', phonetic:'/kəˈrɒbəreɪt/', meaning:'确证', example:'Corroborate evidence.', translation:'确证证据。' },
    { id:'en-v213', lang:'en', level:'C1', word:'authenticate', phonetic:'/ɔːˈθɛntɪkeɪt/', meaning:'验证', example:'Authenticate document.', translation:'验证文件。' },
    { id:'en-v214', lang:'en', level:'C1', word:'validate', phonetic:'/ˈvælɪdeɪt/', meaning:'验证', example:'Validate method.', translation:'验证方法。' },
    { id:'en-v215', lang:'en', level:'C2', word:'juxtaposition', phonetic:'/ˌdʒʌkstəpəˈzɪʃən/', meaning:'并列', example:'Juxtaposition creates contrast.', translation:'并列创造对比。' },
    { id:'en-v216', lang:'en', level:'C2', word:'onomatopoeia', phonetic:'/ˌɒnəˌmætəˈpiːə/', meaning:'拟声词', example:'Onomatopoeia sounds like.', translation:'拟声词听起来像。' },
    { id:'en-v217', lang:'en', level:'C2', word:'alliteration', phonetic:'/əˌlɪtəˈreɪʃən/', meaning:'头韵', example:'Alliteration repeats sounds.', translation:'头韵重复音。' },
    { id:'en-v218', lang:'en', level:'C2', word:'assonance', phonetic:'/ˈæsənəns/', meaning:'谐音', example:'Assonance echoes vowels.', translation:'谐音重复元音。' },
    { id:'en-v219', lang:'en', level:'C2', word:'consonance', phonetic:'/ˈkɒnsənəns/', meaning:'辅音谐音', example:'Consonance repeats consonants.', translation:'辅音谐音重复辅音。' },
    { id:'en-v220', lang:'en', level:'C2', word:'parallelism', phonetic:'/ˈpærəlɛlɪzəm/', meaning:'排比', example:'Parallelism structures.', translation:'排比结构。' },
    { id:'en-v221', lang:'en', level:'C2', word:'antithesis', phonetic:'/ænˈtɪθəsɪs/', meaning:'对照', example:'Antithesis contrasts.', translation:'对照形成对比。' },
    { id:'en-v222', lang:'en', level:'C2', word:'chiasmus', phonetic:'/kaɪˈæzməs/', meaning:'交错法', example:'Chiasmus crosses structure.', translation:'交错法交叉结构。' },
    { id:'en-v223', lang:'en', level:'C2', word:'hyperbole', phonetic:'/haɪˈpɜːrbəli/', meaning:'夸张', example:'Hyperbole exaggerates.', translation:'夸张是夸大。' },
    { id:'en-v224', lang:'en', level:'C2', word:'oxymoron', phonetic:'/ˌɒksɪˈmɔːrɒn/', meaning:'矛盾修辞法', example:'Oxymoron combines opposites.', translation:'矛盾修辞法结合对立。' },
    { id:'en-v225', lang:'en', level:'C2', word:'metonymy', phonetic:'/məˈtɒnɪmi/', meaning:'转喻', example:'Metonymy substitutes.', translation:'转喻是替代。' },
    { id:'en-v226', lang:'en', level:'C2', word:'personification', phonetic:'/pərˌsɒnɪfɪˈkeɪʃən/', meaning:'拟人', example:'Personification humanizes.', translation:'拟人赋予人性。' },
    { id:'en-v227', lang:'en', level:'C2', word:'enjambment', phonetic:'/ɪnˈdʒæmmənt/', meaning:'跨行连续', example:'Enjambment flows over.', translation:'跨行连续。' },
    { id:'en-v228', lang:'en', level:'C2', word:'scansion', phonetic:'/ˈskænʃən/', meaning:'韵律分析', example:'Scansion marks beats.', translation:'韵律分析标记节拍。' },
    { id:'en-v229', lang:'en', level:'C2', word:'stanza', phonetic:'/ˈstænzə/', meaning:'诗节', example:'Each stanza has four lines.', translation:'每个诗节有四行。' },
    { id:'en-v230', lang:'en', level:'C2', word:'sonnet', phonetic:'/ˈsɒnɪt/', meaning:'十四行诗', example:'Shakespearean sonnet.', translation:'莎士比亚十四行诗。' },
    { id:'en-v231', lang:'en', level:'C2', word:'protagonist', phonetic:'/proʊˈtæɡənɪst/', meaning:'主角', example:'The protagonist evolves.', translation:'主角在成长。' },
    { id:'en-v232', lang:'en', level:'C2', word:'antagonist', phonetic:'/ænˈtæɡənɪst/', meaning:'反派', example:'The antagonist opposes.', translation:'反派进行对抗。' },
    { id:'en-v233', lang:'en', level:'C2', word:'narrator', phonetic:'/nəˈreɪtər/', meaning:'叙述者', example:'The narrator tells.', translation:'叙述者讲述。' },
    { id:'en-v234', lang:'en', level:'C2', word:'stream of consciousness', phonetic:'/striːm əv ˈkɒnʃəsnəs/', meaning:'意识流', example:'Stream of consciousness technique.', translation:'意识流技巧。' },
    { id:'en-v235', lang:'en', level:'C2', word:'interior monologue', phonetic:'/ɪnˈtɪəriər ˈmɒnəlɒɡ/', meaning:'内心独白', example:'Interior monologue reveals.', translation:'内心独白揭示。' }
  ],
  ja: [
    { id:'ja-v1', lang:'ja', level:'A1', word:'こんにちは', phonetic:'kon-nichi-wa', meaning:'你好', example:'こんにちは、田中さん。', translation:'你好，田中先生。' },
    { id:'ja-v2', lang:'ja', level:'A1', word:'ありがとう', phonetic:'a-ri-ga-tou', meaning:'谢谢', example:'ありがとうございます。', translation:'非常感谢。' },
    { id:'ja-v3', lang:'ja', level:'A1', word:'水', phonetic:'mi-zu', meaning:'水', example:'水をください。', translation:'请给我水。' },
    { id:'ja-v4', lang:'ja', level:'A1', word:'本', phonetic:'hon', meaning:'书', example:'この本は面白いです。', translation:'这本书很有趣。' },
    { id:'ja-v5', lang:'ja', level:'A1', word:'友達', phonetic:'to-mo-da-chi', meaning:'朋友', example:'友達と学校に行きます。', translation:'和朋友一起去学校。' },
    { id:'ja-v6', lang:'ja', level:'A1', word:'学校', phonetic:'gakkou', meaning:'学校', example:'学校は8時に始まります。', translation:'学校8点开始。' },
    { id:'ja-v7', lang:'ja', level:'A1', word:'先生', phonetic:'sen-sei', meaning:'老师', example:'田中先生はやさしいです。', translation:'田中老师很温和。' },
    { id:'ja-v8', lang:'ja', level:'A1', word:'朝', phonetic:'a-sa', meaning:'早上', example:'朝早く起きます。', translation:'早上早起。' },
    { id:'ja-v9', lang:'ja', level:'A1', word:'今日', phonetic:'kyou', meaning:'今天', example:'今日はいい天気ですね。', translation:'今天天气真好。' },
    { id:'ja-v10', lang:'ja', level:'A1', word:'明日', phonetic:'a-shi-ta', meaning:'明天', example:'明日また来ます。', translation:'明天再来。' },
    { id:'ja-v11', lang:'ja', level:'A2', word:'朝ごはん', phonetic:'a-sa-go-han', meaning:'早餐', example:'朝ごはんを食べます。', translation:'我吃早餐。' },
    { id:'ja-v12', lang:'ja', level:'A2', word:'天気', phonetic:'ten-ki', meaning:'天气', example:'今日はいい天気ですね。', translation:'今天天气真好。' },
    { id:'ja-v13', lang:'ja', level:'A2', word:'駅', phonetic:'e-ki', meaning:'车站', example:'駅はどこですか。', translation:'车站在哪里？' },
    { id:'ja-v14', lang:'ja', level:'A2', word:'電車', phonetic:'den-sha', meaning:'电车', example:'電車で行きます。', translation:'坐电车去。' },
    { id:'ja-v15', lang:'ja', level:'A2', word:'仕事', phonetic:'shi-go-to', meaning:'工作', example:'今日は仕事がありません。', translation:'今天没有工作。' },
    { id:'ja-v16', lang:'ja', level:'A2', word:'料理', phonetic:'ryou-ri', meaning:'料理', example:'料理が上手です。', translation:'做饭很拿手。' },
    { id:'ja-v17', lang:'ja', level:'A2', word:'旅行', phonetic:'ryo-kou', meaning:'旅行', example:'旅行が好きです。', translation:'我喜欢旅行。' },
    { id:'ja-v18', lang:'ja', level:'A2', word:'経験', phonetic:'kei-ken', meaning:'经验', example:'いい経験をしました。', translation:'有了很好的经验。' },
    { id:'ja-v19', lang:'ja', level:'A2', word:'約束', phonetic:'ya-ku-so-ku', meaning:'约定', example:'約束を忘れました。', translation:'忘记约定了。' },
    { id:'ja-v20', lang:'ja', level:'A2', word:'準備', phonetic:'jun-bi', meaning:'准备', example:'準備はできています。', translation:'准备好了。' },
    { id:'ja-v21', lang:'ja', level:'B1', word:'機会', phonetic:'ki-kai', meaning:'机会', example:'これは良い機会です。', translation:'这是个好机会。' },
    { id:'ja-v22', lang:'ja', level:'B1', word:'環境', phonetic:'kan-kyou', meaning:'环境', example:'環境を守りましょう。', translation:'让我们保护环境。' },
    { id:'ja-v23', lang:'ja', level:'B1', word:'意見', phonetic:'i-ken', meaning:'意见', example:'あなたの意見は何ですか。', translation:'你的意见是什么？' },
    { id:'ja-v24', lang:'ja', level:'B1', word:'影響', phonetic:'ei-kyou', meaning:'影响', example:'大きな影響があります。', translation:'有很大的影响。' },
    { id:'ja-v25', lang:'ja', level:'B1', word:'提案', phonetic:'tei-an', meaning:'提案', example:'新しい提案があります。', translation:'有一个新提案。' },
    { id:'ja-v26', lang:'ja', level:'B1', word:'結果', phonetic:'kek-ka', meaning:'结果', example:'結果は良好です。', translation:'结果良好。' },
    { id:'ja-v27', lang:'ja', level:'B1', word:'理由', phonetic:'ri-yuu', meaning:'理由', example:'理由を説明してください。', translation:'请说明理由。' },
    { id:'ja-v28', lang:'ja', level:'B1', word:'比較', phonetic:'hi-ka-ku', meaning:'比较', example:'二つを比較します。', translation:'比较两个。' },
    { id:'ja-v29', lang:'ja', level:'B1', word:'必要', phonetic:'hit-su-you', meaning:'必要', example:'努力が必要です。', translation:'需要努力。' },
    { id:'ja-v30', lang:'ja', level:'B1', word:'価値', phonetic:'ka-chi', meaning:'价值', example:'価値のある本です。', translation:'是一本有价值的书。' },
    { id:'ja-v31', lang:'ja', level:'B2', word:'傾向', phonetic:'kei-kou', meaning:'倾向', example:'増加傾向にあります。', translation:'有增加的倾向。' },
    { id:'ja-v32', lang:'ja', level:'B2', word:'根拠', phonetic:'kon-kyo', meaning:'根据', example:'科学的な根拠があります。', translation:'有科学根据。' },
    { id:'ja-v33', lang:'ja', level:'B2', word:'前提', phonetic:'zen-tei', meaning:'前提', example:'これを前提に話します。', translation:'以此为前提来说。' },
    { id:'ja-v34', lang:'ja', level:'B2', word:'本質', phonetic:'hon-shi-tsu', meaning:'本质', example:'問題の本質を見てください。', translation:'请看问题的本质。' },
    { id:'ja-v35', lang:'ja', level:'B2', word:'把握', phonetic:'ha-a-ku', meaning:'把握', example:'状況を把握します。', translation:'把握情况。' },
    { id:'ja-v36', lang:'ja', level:'B2', word:'関与', phonetic:'kan-yo', meaning:'参与', example:'プロジェクトに関与しています。', translation:'参与项目。' },
    { id:'ja-v37', lang:'ja', level:'B2', word:'調整', phonetic:'chou-sei', meaning:'调整', example:'スケジュールを調整します。', translation:'调整日程。' },
    { id:'ja-v38', lang:'ja', level:'B2', word:'順調', phonetic:'jun-chou', meaning:'顺利', example:'事業は順調です。', translation:'事业很顺利。' },
    { id:'ja-v39', lang:'ja', level:'B2', word:'対応', phonetic:'tai-ou', meaning:'应对', example:'迅速に対応します。', translation:'迅速应对。' },
    { id:'ja-v40', lang:'ja', level:'B2', word:'複雑', phonetic:'fu-ku-za-tsu', meaning:'复杂', example:'この問題は複雑です。', translation:'这个问题很复杂。' },
    { id:'ja-v41', lang:'ja', level:'C1', word:'見識', phonetic:'ken-shiki', meaning:'见识', example:'独自の見識があります。', translation:'有独到的见识。' },
    { id:'ja-v42', lang:'ja', level:'C1', word:'重複', phonetic:'juu-fuku', meaning:'重复', example:'作業が重複しています。', translation:'工作有重复。' },
    { id:'ja-v43', lang:'ja', level:'C1', word:'包括', phonetic:'hou-ka-tsu', meaning:'包括', example:'包括的に検討します。', translation:'包括性地讨论。' },
    { id:'ja-v44', lang:'ja', level:'C1', word:'波及', phonetic:'ha-kyuu', meaning:'波及', example:'影響が他の分野に波及します。', translation:'影响波及其他领域。' },
    { id:'ja-v45', lang:'ja', level:'C1', word:'転換', phonetic:'ten-kan', meaning:'转换', example:'政策の転換が必要です。', translation:'需要政策转换。' },
    { id:'ja-v46', lang:'ja', level:'C1', word:'妥当', phonetic:'da-tou', meaning:'妥当', example:'妥当な結論です。', translation:'是一个妥当的结论。' },
    { id:'ja-v47', lang:'ja', level:'C1', word:'浸透', phonetic:'shin-tou', meaning:'渗透', example:'文化が社会に浸透しています。', translation:'文化渗透到社会。' },
    { id:'ja-v48', lang:'ja', level:'C1', word:'相違', phonetic:'sou-i', meaning:'差异', example:'文化の相違を理解します。', translation:'理解文化差异。' },
    { id:'ja-v49', lang:'ja', level:'C2', word:'斟酌', phonetic:'shin-shaku', meaning:'斟酌', example:'状況を斟酌して判断します。', translation:'斟酌情况后判断。' },
    { id:'ja-v50', lang:'ja', level:'C2', word:'渙発', phonetic:'kan-patsu', meaning:'焕发', example:'新しい風が渙発しています。', translation:'新风正在焕发。' },
    { id:'ja-v51', lang:'ja', level:'A1', word:'雨', phonetic:'あめ', meaning:'雨', example:'雨が降っています。', translation:'正在下雨。' },
    { id:'ja-v52', lang:'ja', level:'A1', word:'犬', phonetic:'いぬ', meaning:'狗', example:'犬が可爱いです。', translation:'狗很可爱。' },
    { id:'ja-v53', lang:'ja', level:'A1', word:'海', phonetic:'うみ', meaning:'大海', example:'海で泳ぎます。', translation:'在海里游泳。' },
    { id:'ja-v54', lang:'ja', level:'A1', word:'駅', phonetic:'えき', meaning:'车站', example:'駅はどこですか。', translation:'车站在哪里？' },
    { id:'ja-v55', lang:'ja', level:'A1', word:'お金', phonetic:'おかね', meaning:'钱', example:'お 돈을 찾았습니다。', translation:'取到了钱。' },
    { id:'ja-v56', lang:'ja', level:'A1', word:'傘', phonetic:'かさ', meaning:'伞', example:'傘を忘れました。', translation:'忘记带伞了。' },
    { id:'ja-v57', lang:'ja', level:'A1', word:'北', phonetic:'きた', meaning:'北', example:'北を向いています。', translation:'面向北方。' },
    { id:'ja-v58', lang:'ja', level:'A1', word:'薬', phonetic:'くすり', meaning:'药', example:'薬を飲みます。', translation:'吃药。' },
    { id:'ja-v59', lang:'ja', level:'A1', word:'車', phonetic:'くるま', meaning:'车', example:'車で出行します。', translation:'开车出门。' },
    { id:'ja-v60', lang:'ja', level:'A1', word:'桜', phonetic:'さくら', meaning:'樱花', example:'桜が咲いています。', translation:'樱花开了。' },
    { id:'ja-v61', lang:'ja', level:'A1', word:'魚', phonetic:'さかな', meaning:'鱼', example:'魚を食べます。', translation:'吃鱼。' },
    { id:'ja-v62', lang:'ja', level:'A1', word:'寿司', phonetic:'すし', meaning:'寿司', example:'寿司が好きです。', translation:'喜欢寿司。' },
    { id:'ja-v63', lang:'ja', level:'A1', word:'空', phonetic:'そら', meaning:'天空', example:'空が青いです。', translation:'天空很蓝。' },
    { id:'ja-v64', lang:'ja', level:'A1', word:'小さい', phonetic:'ちいさい', meaning:'小的', example:'このかばん小さいです。', translation:'这个包很小。' },
    { id:'ja-v65', lang:'ja', level:'A1', word:'卵', phonetic:'たまご', meaning:'鸡蛋', example:'卵をを買いました。', translation:'买了鸡蛋。' },
    { id:'ja-v66', lang:'ja', level:'A1', word:'地図', phonetic:'ちず', meaning:'地图', example:'地図を見せてください。', translation:'请让我看看地图。' },
    { id:'ja-v67', lang:'ja', level:'A1', word:'机', phonetic:'つくえ', meaning:'桌子', example:'机の上に本があります。', translation:'桌子上面有书。' },
    { id:'ja-v68', lang:'ja', level:'A1', word:'手紙', phonetic:'てがみ', meaning:'信', example:'手を書いています。', translation:'正在写信。' },
    { id:'ja-v69', lang:'ja', level:'A1', word:'時計', phonetic:'とけい', meaning:'时钟/表', example:'時計を見てください。', translation:'请看表。' },
    { id:'ja-v70', lang:'ja', level:'A1', word:'夏', phonetic:'なつ', meaning:'夏天', example:'夏、海に行きます。', translation:'夏天去海边。' },
    { id:'ja-v71', lang:'ja', level:'A1', word:'日本語', phonetic:'にほんご', meaning:'日语', example:'日本語を勉強しています。', translation:'正在学习日语。' },
    { id:'ja-v72', lang:'ja', level:'A1', word:'猫', phonetic:'ねこ', meaning:'猫', example:'猫が眠っています。', translation:'猫在睡觉。' },
    { id:'ja-v73', lang:'ja', level:'A1', word:'飲み物', phonetic:'のみもの', meaning:'饮料', example:'飲み物をください。', translation:'请给我饮料。' },
    { id:'ja-v74', lang:'ja', level:'A1', word:'花', phonetic:'はな', meaning:'花', example:'花が咲いています。', translation:'花开了。' },
    { id:'ja-v75', lang:'ja', level:'A1', word:'人', phonetic:'ひと', meaning:'人', example:'人は一人です。', translation:'是一个人。' },
    { id:'ja-v76', lang:'ja', level:'A1', word:'冬', phonetic:'ふゆ', meaning:'冬天', example:'冬、雪が降ります。', translation:'冬天会下雪。' },
    { id:'ja-v77', lang:'ja', level:'A1', word:'部屋', phonetic:'へや', meaning:'房间', example:'部屋が広いです。', translation:'房间很宽敞。' },
    { id:'ja-v78', lang:'ja', level:'A1', word:'本', phonetic:'ほん', meaning:'书', example:'本を読みます。', translation:'读书。' },
    { id:'ja-v79', lang:'ja', level:'A1', word:'町', phonetic:'まち', meaning:'城镇', example:'町を散歩します。', translation:'在镇上散步。' },
    { id:'ja-v80', lang:'ja', level:'A1', word:'耳', phonetic:'みみ', meaning:'耳朵', example:'耳が聞こえます。', translation:'耳朵能听见。' },
    { id:'ja-v81', lang:'ja', level:'A1', word:'村', phonetic:'むら', meaning:'村庄', example:'村に住んでいます。', translation:'住在村子里。' },
    { id:'ja-v82', lang:'ja', level:'A1', word:'目', phonetic:'め', meaning:'眼睛', example:'目を開けます。', translation:'睁开眼睛。' },
    { id:'ja-v83', lang:'ja', level:'A1', word:'森', phonetic:'もり', meaning:'森林', example:'森で迷いました。', translation:'在森林里迷路了。' },
    { id:'ja-v84', lang:'ja', level:'A1', word:'来年', phonetic:'らいねん', meaning:'明年', example:'来年中国に行きます。', translation:'明年去中国。' },
    { id:'ja-v85', lang:'ja', level:'A1', word:'旅館', phonetic:'りょかん', meaning:'旅馆', example:'旅館を予約しました。', translation:'预约了旅馆。' },
    { id:'ja-v86', lang:'ja', level:'A1', word:'留守', phonetic:'るす', meaning:'不在家', example:'留守にしています。', translation:'设置了不在家。' },
    { id:'ja-v87', lang:'ja', level:'A1', word:'冷蔵庫', phonetic:'れいぞうこ', meaning:'冰箱', example:'冷蔵庫に牛乳があります。', translation:'冰箱里有牛奶。' },
    { id:'ja-v88', lang:'ja', level:'A1', word:'六', phonetic:'ろく', meaning:'六', example:'六歳です。', translation:'六岁。' },
    { id:'ja-v89', lang:'ja', level:'A1', word:'私', phonetic:'わたし', meaning:'我', example:'私は学生です。', translation:'我是学生。' },
    { id:'ja-v90', lang:'ja', level:'A1', word:'忘れ物', phonetic:'わすれもの', meaning:'忘带的东西', example:'忘れ物をしました。', translation:'忘带东西了。' },
    { id:'ja-v91', lang:'ja', level:'A1', word:'割引', phonetic:'わりびき', meaning:'折扣', example:'割引があります。', translation:'有折扣。' },
    { id:'ja-v92', lang:'ja', level:'A1', word:'一', phonetic:'いち', meaning:'一', example:'一つです。', translation:'一个。' },
    { id:'ja-v93', lang:'ja', level:'A1', word:'二', phonetic:'に', meaning:'二', example:'二つください。', translation:'请给我两个。' },
    { id:'ja-v94', lang:'ja', level:'A1', word:'三', phonetic:'さん', meaning:'三', example:'三人で行きます。', translation:'三个人一起去。' },
    { id:'ja-v95', lang:'ja', level:'A1', word:'四', phonetic:'よん/し', meaning:'四', example:'四月です。', translation:'四月。' },
    { id:'ja-v96', lang:'ja', level:'A1', word:'五', phonetic:'ご', meaning:'五', example:'五時です。', translation:'五点。' },
    { id:'ja-v97', lang:'ja', level:'A1', word:'七', phonetic:'なな/しち', meaning:'七', example:'七日間です。', translation:'七天。' },
    { id:'ja-v98', lang:'ja', level:'A1', word:'八', phonetic:'はち', meaning:'八', example:'八ヶ月です。', translation:'八个月。' },
    { id:'ja-v99', lang:'ja', level:'A1', word:'九', phonetic:'きゅう/く', meaning:'九', example:'九歳です。', translation:'九岁。' },
    { id:'ja-v100', lang:'ja', level:'A1', word:'十', phonetic:'じゅう', meaning:'十', example:'十歳です。', translation:'十岁。' },
    { id:'ja-v101', lang:'ja', level:'A1', word:'昨日', phonetic:'きのう', meaning:'昨天', example:'昨日、会いました。', translation:'昨天见面了。' },
    { id:'ja-v102', lang:'ja', level:'A1', word:'昼', phonetic:'ひる', meaning:'白天/中午', example:'昼ご飯を食べます。', translation:'吃午饭。' },
    { id:'ja-v103', lang:'ja', level:'A1', word:'夜', phonetic:'よる', meaning:'晚上', example:'夜、静かです。', translation:'晚上很安静。' },
    { id:'ja-v104', lang:'ja', level:'A1', word:'あなた', phonetic:'あなた', meaning:'你', example:'あなたは誰ですか。', translation:'你是谁？' },
    { id:'ja-v105', lang:'ja', level:'A1', word:'彼', phonetic:'かれ', meaning:'他', example:'彼は日本人にす。', translation:'他是日本人。' },
    { id:'ja-v106', lang:'ja', level:'A1', word:'彼女', phonetic:'かのじょ', meaning:'她', example:'彼女は先生です。', translation:'她是老师。' },
    { id:'ja-v107', lang:'ja', level:'A1', word:'食べる', phonetic:'たべる', meaning:'吃', example:'ご飯を食べます。', translation:'吃饭。' },
    { id:'ja-v108', lang:'ja', level:'A1', word:'飲む', phonetic:'のむ', meaning:'喝', example:'水を飲みます。', translation:'喝水。' },
    { id:'ja-v109', lang:'ja', level:'A1', word:'行く', phonetic:'いく', meaning:'去', example:'学校に行きます。', translation:'去学校。' },
    { id:'ja-v110', lang:'ja', level:'A1', word:'来る', phonetic:'くる', meaning:'来', example:'友達がきます。', translation:'朋友要来。' },
    { id:'ja-v111', lang:'ja', level:'A1', word:'見る', phonetic:'みる', meaning:'看', example:'映画を見ます。', translation:'看电影。' },
    { id:'ja-v112', lang:'ja', level:'A1', word:'聞く', phonetic:'きく', meaning:'听/问', example:'音楽を聞きます。', translation:'听音乐。' },
    { id:'ja-v113', lang:'ja', level:'A1', word:'読む', phonetic:'よむ', meaning:'读', example:'本を読みます。', translation:'读书。' },
    { id:'ja-v114', lang:'ja', level:'A1', word:'書く', phonetic:'かく', meaning:'写', example:'手紙を書きます。', translation:'写信。' },
    { id:'ja-v115', lang:'ja', level:'A1', word:'言う', phonetic:'いう', meaning:'说', example:'日本語で言います。', translation:'用日语说。' },
    { id:'ja-v116', lang:'ja', level:'A1', word:'寝る', phonetic:'ねる', meaning:'睡觉', example:'早く寝ます。', translation:'早点睡。' },
    { id:'ja-v117', lang:'ja', level:'A1', word:'起きる', phonetic:'おきる', meaning:'起床', example:'六時に起きます。', translation:'六点起床。' },
    { id:'ja-v118', lang:'ja', level:'A1', word:'ある', phonetic:'ある', meaning:'有/存在', example:'机があります。', translation:'有桌子。' },
    { id:'ja-v119', lang:'ja', level:'A1', word:'分かる', phonetic:'わかる', meaning:'懂/明白', example:'日本語がわかります。', translation:'懂日语。' },
    { id:'ja-v120', lang:'ja', level:'A1', word:'買う', phonetic:'かう', meaning:'买', example:'パンを買いました。', translation:'买了面包。' },
    { id:'ja-v121', lang:'ja', level:'A2', word:'シャツ', phonetic:'シャツ', meaning:'衬衫', example:'新しいシャツを買いました。', translation:'买了新衬衫。' },
    { id:'ja-v122', lang:'ja', level:'A2', word:'ズボン', phonetic:'ズボン', meaning:'裤子', example:'ズボンが汚れました。', translation:'裤子弄脏了。' },
    { id:'ja-v123', lang:'ja', level:'A2', word:'靴', phonetic:'くつ', meaning:'鞋子', example:'靴を脱いでください。', translation:'请脱鞋。' },
    { id:'ja-v124', lang:'ja', level:'A2', word:'市場', phonetic:'いちば', meaning:'市场', example:'市場で野菜を買います。', translation:'在市场买菜。' },
    { id:'ja-v125', lang:'ja', level:'A2', word:'銀行', phonetic:'ぎんこう', meaning:'银行', example:'銀行でお金を下ろします。', translation:'在银行取钱。' },
    { id:'ja-v126', lang:'ja', level:'A2', word:'病院', phonetic:'びょういん', meaning:'医院', example:'病院に行きます。', translation:'去医院。' },
    { id:'ja-v127', lang:'ja', level:'A2', word:'切符', phonetic:'きっぷ', meaning:'票/车票', example:'切符を買います。', translation:'买票。' },
    { id:'ja-v128', lang:'ja', level:'A2', word:'天気予報', phonetic:'てんきよほう', meaning:'天气预报', example:'天気予報を見ました。', translation:'看了天气预报。' },
    { id:'ja-v129', lang:'ja', level:'A2', word:'気温', phonetic:'きおん', meaning:'气温', example:'今日は気温が高いです。', translation:'今天气温高。' },
    { id:'ja-v130', lang:'ja', level:'A2', word:'湿度', phonetic:'しつど', meaning:'湿度', example:'湿度が高くで不快です。', translation:'湿度高很不舒服。' },
    { id:'ja-v131', lang:'ja', level:'A2', word:'休む', phonetic:'やすむ', meaning:'休息/请假', example:'今日休みます。', translation:'今天请假。' },
    { id:'ja-v132', lang:'ja', level:'A2', word:'会議', phonetic:'かいぎ', meaning:'会议', example:'会議があります。', translation:'有会议。' },
    { id:'ja-v133', lang:'ja', level:'A2', word:'番号', phonetic:'ばんごう', meaning:'号码', example:'電話番号を聞いてもいいですか。', translation:'可以问一下电话号码吗？' },
    { id:'ja-v134', lang:'ja', level:'A2', word:'約束', phonetic:'やくそく', meaning:'约定', example:'約束を忘れないで。', translation:'别忘了约定。' },
    { id:'ja-v135', lang:'ja', level:'A2', word:'送る', phonetic:'おくる', meaning:'发送/寄', example:'メールを送ります。', translation:'发送邮件。' },
    { id:'ja-v136', lang:'ja', level:'A2', word:'待つ', phonetic:'まつ', meaning:'等待', example:'ここで待ちます。', translation:'在这里等。' },
    { id:'ja-v137', lang:'ja', level:'A2', word:'作る', phonetic:'つくる', meaning:'制作', example:'料理を作ります。', translation:'做菜。' },
    { id:'ja-v138', lang:'ja', level:'A2', word:'出す', phonetic:'だす', meaning:'拿出/提交', example:'手紙を出します。', translation:'寄信。' },
    { id:'ja-v139', lang:'ja', level:'A2', word:'入る', phonetic:'はいる', meaning:'进入', example:'部屋に入ります。', translation:'进入房间。' },
    { id:'ja-v140', lang:'ja', level:'A2', word:'出る', phonetic:'でる', meaning:'离开/退出', example:'部屋を出ます。', translation:'离开房间。' },
    { id:'ja-v141', lang:'ja', level:'A2', word:'場所', phonetic:'ばしょ', meaning:'场所', example:'この場所はどこですか。', translation:'这个场所在哪里？' },
    { id:'ja-v142', lang:'ja', level:'A2', word:'景色', phonetic:'けしき', meaning:'景色', example:'景色が美しいです。', translation:'景色很美。' },
    { id:'ja-v143', lang:'ja', level:'A2', word:'写真', phonetic:'しゃしん', meaning:'照片', example:'写真を掲載します。', translation:'刊登照片。' },
    { id:'ja-v144', lang:'ja', level:'A2', word:'泳ぐ', phonetic:'およぐ', meaning:'游泳', example:'海で泳ぎます。', translation:'在海里游泳。' },
    { id:'ja-v145', lang:'ja', level:'A2', word:'使う', phonetic:'つかう', meaning:'使用', example:'パソコンを使います。', translation:'使用电脑。' },
    { id:'ja-v146', lang:'ja', level:'A2', word:'止める', phonetic:'とめる', meaning:'停止/按住', example:'車を止めます。', translation:'停车。' },
    { id:'ja-v147', lang:'ja', level:'A2', word:'守る', phonetic:'まもる', meaning:'守护/遵守', example:'約束を守ります。', translation:'遵守约定。' },
    { id:'ja-v148', lang:'ja', level:'A2', word:'答える', phonetic:'こたえる', meaning:'回答', example:'質問に答道します。', translation:'回答问题。' },
    { id:'ja-v149', lang:'ja', level:'A2', word:'着物', phonetic:'きもの', meaning:'和服', example:'着物を着ています。', translation:'穿着和服。' },
    { id:'ja-v150', lang:'ja', level:'A2', word:'誕生日', phonetic:'たんじょうび', meaning:'生日', example:'誕生日おめでとうございます。', translation:'生日快乐。' },
    { id:'ja-v151', lang:'ja', level:'B1', word:'社会', phonetic:'しゃかい', meaning:'社会', example:'社会の問題を話します。', translation:'讨论社会问题。' },
    { id:'ja-v152', lang:'ja', level:'B1', word:'環境問題', phonetic:'かんきょうもんだい', meaning:'环境问题', example:'環境問題は深刻です。', translation:'环境问题很严峻。' },
    { id:'ja-v153', lang:'ja', level:'B1', word:'文化', phonetic:'ぶんか', meaning:'文化', example:'日本の文化が好きです。', translation:'喜欢日本文化。' },
    { id:'ja-v154', lang:'ja', level:'B1', word:'教育', phonetic:'きょういく', meaning:'教育', example:'教育水準が高いです。', translation:'教育水平很高。' },
    { id:'ja-v155', lang:'ja', level:'B1', word:'科技', phonetic:'かがく', meaning:'科技', example:'科技の発展は目覚ましいです。', translation:'科技发展令人瞩目。' },
    { id:'ja-v156', lang:'ja', level:'B1', word:'政治', phonetic:'せいじ', meaning:'政治', example:'政治に参加します。', translation:'参与政治。' },
    { id:'ja-v157', lang:'ja', level:'B1', word:'経済', phonetic:'けいざい', meaning:'经济', example:'経済成長率は高いです。', translation:'经济增长率很高。' },
    { id:'ja-v158', lang:'ja', level:'B1', word:'歴史', phonetic:'れきし', meaning:'历史', example:'歴史を勉強します。', translation:'学习历史。' },
    { id:'ja-v159', lang:'ja', level:'B1', word:'伝統', phonetic:'でんとう', meaning:'传统', example:'日本の伝統を守ります。', translation:'守护日本传统。' },
    { id:'ja-v160', lang:'ja', level:'B1', word:'変わる', phonetic:'かわる', meaning:'变化', example:'時代が変わります。', translation:'时代在变化。' },
    { id:'ja-v161', lang:'ja', level:'B1', word:'考える', phonetic:'かんがえる', meaning:'思考/考虑', example:'よく考えてください。', translation:'请仔细考虑。' },
    { id:'ja-v162', lang:'ja', level:'B1', word:'説明する', phonetic:'せつめいする', meaning:'说明/解释', example:' ситуацию説明します。', translation:'说明情况。' },
    { id:'ja-v163', lang:'ja', level:'B1', word:'確かめる', phonetic:'たしかめる', meaning:'确认', example:'事実を確かめます。', translation:'确认事实。' },
    { id:'ja-v164', lang:'ja', level:'B1', word:'異なる', phonetic:'ことなる', meaning:'不同', example:'意見が異なります。', translation:'意见不同。' },
    { id:'ja-v165', lang:'ja', level:'B1', word:'進める', phonetic:'すすめる', meaning:'推进/进步', example:'議論を進めます。', translation:'推进讨论。' },
    { id:'ja-v166', lang:'ja', level:'B1', word:'接触', phonetic:'せっしょく', meaning:'接触', example:'異文化接触の経験があります。', translation:'有跨文化接触的经验。' },
    { id:'ja-v167', lang:'ja', level:'B1', word:'満ちる', phonetic:'みちる', meaning:'充满', example:'自信に満ちています。', translation:'充满自信。' },
    { id:'ja-v168', lang:'ja', level:'B1', word:'築く', phonetic:'きずく', meaning:'筑/建立', example:'信頼を築きます。', translation:'建立信任。' },
    { id:'ja-v169', lang:'ja', level:'B1', word:'広まる', phonetic:'ひろまる', meaning:'传播/扩大', example:'情報が広まりました。', translation:'信息扩散开了。' },
    { id:'ja-v170', lang:'ja', level:'B1', word:'化する', phonetic:'かする', meaning:'化/变成', example:'国際化が進行中です。', translation:'国际化正在进行中。' },
    { id:'ja-v171', lang:'ja', level:'B1', word:'老年', phonetic:'ろうねん', meaning:'老年', example:'老年期の生活設計重要です。', translation:'老年生活设计很重要。' },
    { id:'ja-v172', lang:'ja', level:'B1', word:'雇用', phonetic:'こよう', meaning:'雇佣', example:'雇用問題を考えます。', translation:'思考雇佣问题。' },
    { id:'ja-v173', lang:'ja', level:'B1', word:'成長', phonetic:'せいちょう', meaning:'成长/增长', example:'経済成長が止まりました。', translation:'经济增长停止了。' },
    { id:'ja-v174', lang:'ja', level:'B1', word:'温暖', phonetic:'おんだん', meaning:'温暖', example:'地球温暖化が深刻です。', translation:'地球变暖很严峻。' },
    { id:'ja-v175', lang:'ja', level:'B1', word:'資源', phonetic:'しげん', meaning:'资源', example:'天然資源を守ります。', translation:'保护天然资源。' },
    { id:'ja-v176', lang:'ja', level:'B1', word:'確保', phonetic:'かくほ', meaning:'确保', example:'食料を確保する必要があります。', translation:'需要确保粮食。' },
    { id:'ja-v177', lang:'ja', level:'B1', word:'深刻', phonetic:'しんこく', meaning:'深刻/严峻', example:'問題が深刻化しています。', translation:'问题在深化。' },
    { id:'ja-v178', lang:'ja', level:'B1', word:'背景', phonetic:'はいけい', meaning:'背景', example:'歴史的背景を話します。', translation:'讲述历史背景。' },
    { id:'ja-v179', lang:'ja', level:'B1', word:'対比', phonetic:'たいひ', meaning:'对比', example:'両国を対比します。', translation:'对比两国。' },
    { id:'ja-v180', lang:'ja', level:'B1', word:'傾向', phonetic:'けいこう', meaning:'倾向/趋势', example:'増加傾向があります。', translation:'有增加趋势。' },
    { id:'ja-v181', lang:'ja', level:'B2', word:'ビジネス', phonetic:'ビジネス', meaning:'商务', example:'ビジネス用語を勉強しています。', translation:'正在学习商务用语。' },
    { id:'ja-v182', lang:'ja', level:'B2', word:'企業', phonetic:'きぎょう', meaning:'企业', example:'企業に勤めています。', translation:'在企业工作。' },
    { id:'ja-v183', lang:'ja', level:'B2', word:'戦略', phonetic:'せんりゃく', meaning:'战略', example:'経営戦略を立てます。', translation:'制定经营战略。' },
    { id:'ja-v184', lang:'ja', level:'B2', word:'市場動向', phonetic:'しじょうどうこう', meaning:'市场动向', example:'市場動向を分析します。', translation:'分析市场动向。' },
    { id:'ja-v185', lang:'ja', level:'B2', word:'提供', phonetic:'ていきょう', meaning:'提供', example:'サービスを提供します。', translation:'提供服务。' },
    { id:'ja-v186', lang:'ja', level:'B2', word:'開発', phonetic:'かいはつ', meaning:'开发', example:'新商品を開発します。', translation:'开发新产品。' },
    { id:'ja-v187', lang:'ja', level:'B2', word:'需要', phonetic:'じゅよう', meaning:'需求', example:'需要が高まっています。', translation:'需求在增加。' },
    { id:'ja-v188', lang:'ja', level:'B2', word:'供給', phonetic:'きょうきゅう', meaning:'供给', example:'供給が追いつかない状態です。', translation:'处于供给跟不上的状态。' },
    { id:'ja-v189', lang:'ja', level:'B2', word:'競争', phonetic:'きょうそう', meaning:'竞争', example:'競争が激しくなります。', translation:'竞争变得激烈。' },
    { id:'ja-v190', lang:'ja', level:'B2', word:'消費者', phonetic:'しょうひしゃ', meaning:'消费者', example:'消費者の声を聞きます。', translation:'听取消费者的声音。' },
    { id:'ja-v191', lang:'ja', level:'B2', word:'投資', phonetic:'とうし', meaning:'投资', example:'海外に投資します。', translation:'向海外投资。' },
    { id:'ja-v192', lang:'ja', level:'B2', word:'拡大', phonetic:'かくだい', meaning:'扩大', example:'事業が拡大しています。', translation:'事业正在扩大。' },
    { id:'ja-v193', lang:'ja', level:'B2', word:'合併', phonetic:'がっぺい', meaning:'合并', example:'两社が合併しました。', translation:'两家公司合并了。' },
    { id:'ja-v194', lang:'ja', level:'B2', word:'、組織', phonetic:'そしき', meaning:'组织', example:'非営利組織を創設しました。', translation:'创建了非营利组织。' },
    { id:'ja-v195', lang:'ja', level:'B2', word:'権限', phonetic:'けんげん', meaning:'权限', example:'権限を委譲します。', translation:'委托权限。' },
    { id:'ja-v196', lang:'ja', level:'B2', word:'協力', phonetic:'きょうりょく', meaning:'合作', example:'国際協力が重要です。', translation:'国际合作很重要。' },
    { id:'ja-v197', lang:'ja', level:'B2', word:'約束', phonetic:'やくそく', meaning:'约定/规定', example:'社会の約束を守ります。', translation:'遵守社会的约定。' },
    { id:'ja-v198', lang:'ja', level:'B2', word:'意識', phonetic:'いしき', meaning:'意识', example:'環境意識が高まっています。', translation:'环境意识在提高。' },
    { id:'ja-v199', lang:'ja', level:'B2', word:'改革', phonetic:'かいかく', meaning:'改革', example:'教育改革が必要です。', translation:'需要教育改革。' },
    { id:'ja-v200', lang:'ja', level:'B2', word:'直面', phonetic:'ちょくめん', meaning:'面对', example:'困難に直面しています。', translation:'正面临困难。' },
    { id:'ja-v201', lang:'ja', level:'B2', word:'負担', phonetic:'ふたん', meaning:'负担', example:'医療費の負担が重いです。', translation:'医疗费负担很重。' },
    { id:'ja-v202', lang:'ja', level:'B2', word:'格差', phonetic:'かくさ', meaning:'差距', example:'経済格差は拡大しています。', translation:'经济差距在扩大。' },
    { id:'ja-v203', lang:'ja', level:'B2', word:'高齢', phonetic:'こうれい', meaning:'高龄', example:'高齢社会化が進んでいます。', translation:'高龄化社会在发展。' },
    { id:'ja-v204', lang:'ja', level:'B2', word:'顕著', phonetic:'けんちょ', meaning:'显著', example:'変化が顕著です。', translation:'变化很显著。' },
    { id:'ja-v205', lang:'ja', level:'B2', word:'加速', phonetic:'かそく', meaning:'加速', example:'少子化が加速しています。', translation:'少子化在加速。' },
    { id:'ja-v206', lang:'ja', level:'B2', word:'歯止め', phonetic:'はどめ', meaning:'遏制', example:'自然破壊に歯止めがかかりません。', translation:'自然破坏无法遏制。' },
    { id:'ja-v207', lang:'ja', level:'C1', word:'学術', phonetic:'がくじゅつ', meaning:'学术', example:'学術論文を書きます。', translation:'写学术论文。' },
    { id:'ja-v208', lang:'ja', level:'C1', word:'論文', phonetic:'ろぶん', meaning:'论文', example:'卒業論文を提出します。', translation:'提交毕业论文。' },
    { id:'ja-v209', lang:'ja', level:'C1', word:'文学', phonetic:'ぶんがく', meaning:'文学', example:'日本文学を読みます。', translation:'读日本文学。' },
    { id:'ja-v210', lang:'ja', level:'C1', word:'芸術', phonetic:'げいじゅつ', meaning:'艺术', example:'芸術的活动に参加します。', translation:'参加艺术活动。' },
    { id:'ja-v211', lang:'ja', level:'C1', word:'法律', phonetic:'ほうりつ', meaning:'法律', example:'法律を勉強しています。', translation:'正在学习法律。' },
    { id:'ja-v212', lang:'ja', level:'C1', word:'政治学', phonetic:'せいじがく', meaning:'政治学', example:'政治学を専攻しています。', translation:'专攻政治学。' },
    { id:'ja-v213', lang:'ja', level:'C1', word:'哲学', phonetic:'てつがく', meaning:'哲学', example:'哲学的な思考が必要です。', translation:'需要哲学性的思考。' },
    { id:'ja-v214', lang:'ja', level:'C1', word:'考察', phonetic:'こうさつ', meaning:'考察/研讨', example:'深度考察を行います。', translation:'进行深度考察。' },
    { id:'ja-v215', lang:'ja', level:'C1', word:'検証', phonetic:'けんしょう', meaning:'验证', example:'データを検証します。', translation:'验证数据。' },
    { id:'ja-v216', lang:'ja', level:'C1', word:'本質的', phonetic:'ほんしつてき', meaning:'本质的', example:'本質的な問題点を探ります。', translation:'探究本质性问题。' },
    { id:'ja-v217', lang:'ja', level:'C1', word:'構造', phonetic:'こうぞう', meaning:'构造/结构', example:'社会の構造を分析します。', translation:'分析社会结构。' },
    { id:'ja-v218', lang:'ja', level:'C1', word:'枠組み', phonetic:'わくぐみ', meaning:'框架', example:'理論の枠組みを構築します。', translation:'构建理论框架。' },
    { id:'ja-v219', lang:'ja', level:'C1', word:'規範', phonetic:'きはん', meaning:'规范', example:'社会の規範に従います。', translation:'遵守社会规范。' },
    { id:'ja-v220', lang:'ja', level:'C1', word:'原則', phonetic:'げんそく', meaning:'原则', example:'原則に基づいて判断します。', translation:'基于原则判断。' },
    { id:'ja-v221', lang:'ja', level:'C1', word:'論理', phonetic:'ろんり', meaning:'逻辑', example:'論理的に思考します。', translation:'逻辑性思考。' },
    { id:'ja-v222', lang:'ja', level:'C1', word:'命題', phonetic:'めいだい', meaning:'命题', example:'命題、真偽を証明します。', translation:'证明命题的真伪。' },
    { id:'ja-v223', lang:'ja', level:'C1', word:'視点', phonetic:'してん', meaning:'视角', example:'別の視点から分析します。', translation:'从另一视角分析。' },
    { id:'ja-v224', lang:'ja', level:'C1', word:'志向', phonetic:'しこう', meaning:'志向/意向', example:'学術的な志向がります。', translation:'有学术性的志向。' },
    { id:'ja-v225', lang:'ja', level:'C1', word:'志向', phonetic:'しこう', meaning:'志向/意向', example:'学術的な傾向があります。', translation:'有学术性的倾向。' },
    { id:'ja-v226', lang:'ja', level:'C1', word:'深化', phonetic:'しんか', meaning:'深化', example:'研究が深化しています。', translation:'研究在深化。' },
    { id:'ja-v227', lang:'ja', level:'C1', word:'統合', phonetic:'とうごう', meaning:'统合/综合', example:'データを統合します。', translation:'统合数据。' },
    { id:'ja-v228', lang:'ja', level:'C1', word:'派生', phonetic:'はせい', meaning:'派生', example:'新しい問題が派生しました。', translation:'派生出新问题。' },
    { id:'ja-v229', lang:'ja', level:'C1', word:'融合', phonetic:'ゆうゅうう', meaning:'融合', example:'異文化融合が進んでいます。', translation:'异文化融合在推进。' },
    { id:'ja-v230', lang:'ja', level:'C1', word:'収束', phonetic:'しゅうそく', meaning:'收敛/平息', example:'問題が収束しました。', translation:'问题平息了。' },
    { id:'ja-v231', lang:'ja', level:'C1', word:'拡散', phonetic:'かくさん', meaning:'扩散', example:'情報を拡散します。', translation:'扩散信息。' },
    { id:'ja-v232', lang:'ja', level:'C1', word:'帰結', phonetic:'きけつ', meaning:'归结/结果', example:'どのような帰結になりますか。', translation:'会产生什么样的结果？' },
    { id:'ja-v233', lang:'ja', level:'C1', word:'多角的', phonetic:'たかくてき', meaning:'多角的/多方面的', example:'多角的に分析します。', translation:'多方面分析。' },
    { id:'ja-v234', lang:'ja', level:'C2', word:'古典', phonetic:'こてん', meaning:'古典', example:'古典文献を読み解きます。', translation:'解读古典文献。' },
    { id:'ja-v235', lang:'ja', level:'C2', word:'文学評論', phonetic:'ぶんがくひょうりん', meaning:'文学评论', example:'文学評論を書きます。', translation:'写文学评论。' },
    { id:'ja-v236', lang:'ja', level:'C2', word:'言語学', phonetic:'げんごがく', meaning:'语言学', example:'言語学的に分析します。', translation:'从语言学角度分析。' },
    { id:'ja-v237', lang:'ja', level:'C2', word:'哲学史', phonetic:'てつがくし', meaning:'哲学史', example:'哲学史を研究します。', translation:'研究哲学史。' },
    { id:'ja-v238', lang:'ja', level:'C2', word:'思想', phonetic:'しそう', meaning:'思想', example:'日本の思想史を勉強しました。', translation:'学习了日本思想史。' },
    { id:'ja-v239', lang:'ja', level:'C2', word:'博打', phonetic:'はくぶ', meaning:'博学/博士', example:'彼は博学者です。', translation:'他是博学者。' },
    { id:'ja-v240', lang:'ja', level:'C2', word:'文物', phonetic:'ぶんぶつ', meaning:'文物', example:'重要文物が出土しました。', translation:'重要文物出土了。' },
    { id:'ja-v241', lang:'ja', level:'C2', word:'解釈', phonetic:'かいしゃく', meaning:'解释/理解', example:'文学作品有不同的解釈があります。', translation:'文学作品有不同的解释。' },
    { id:'ja-v242', lang:'ja', level:'C2', word:'縦横', phonetic:'じゅうおう', meaning:'纵横/广泛', example:'縦横無尽に論じています。', translation:'纵横论述。' },
    { id:'ja-v243', lang:'ja', level:'C2', word:'精緻', phonetic:'せいち', meaning:'精细/精密', example:'精緻な分析が行われています。', translation:'正在进行精密分析。' },
    { id:'ja-v244', lang:'ja', level:'C2', word:'複雜', phonetic:'ふくざつ', meaning:'复杂', example:'複雜な事情が絡み合っています。', translation:'复杂的事情交织在一起。' },
    { id:'ja-v245', lang:'ja', level:'C2', word:'構造的', phonetic:'こうぞうてき', meaning:'结构性的', example:'構造的な問題です。', translation:'是结构性问题。' },
    { id:'ja-v246', lang:'ja', level:'C2', word:'象徵', phonetic:'しょうちょう', meaning:'象征', example:'桜は日本の象徴です。', translation:'樱花是日本的象征。' },
    { id:'ja-v247', lang:'ja', level:'C2', word:'概念', phonetic:'がいねん', meaning:'概念', example:'新しい概念を導入します。', translation:'导入新概念。' },
    { id:'ja-v248', lang:'ja', level:'C2', word:'原理', phonetic:'げんり', meaning:'原理', example:'原理原則を理解します。', translation:'理解原理原则。' },
    { id:'ja-v249', lang:'ja', level:'C2', word:'法則', phonetic:'ほうそく', meaning:'法则', example:'自然法則に従います。', translation:'遵循自然法则。' },
    { id:'ja-v250', lang:'ja', level:'C2', word:'定理', phonetic:'ていり', meaning:'定理', example:'数学の定理を証明します。', translation:'证明数学定理。' },
    { id:'ja-v251', lang:'ja', level:'C2', word:'最適化', phonetic:'さいてきか', meaning:'最优化', example:'システム最適化を行います。', translation:'进行系统优化。' },
    { id:'ja-v252', lang:'ja', level:'C2', word:'根源', phonetic:'こんげん', meaning:'根源', example:'問題の根源を探ります。', translation:'探究问题的根源。' },
    { id:'ja-v253', lang:'ja', level:'C2', word:'本質', phonetic:'ほんしつ', meaning:'本质', example:'物事の本質を見极めます。', translation:'看透事物的本质。' },
    { id:'ja-v254', lang:'ja', level:'C2', word:'核心', phonetic:'かくしん', meaning:'核心', example:'核心的な問題です。', translation:'是核心问题。' },
    { id:'ja-v255', lang:'ja', level:'C2', word:'推移', phonetic:'すいい', meaning:'推移/演变', example:'時代の推移に従います。', translation:'随时代的推移。' },
    { id:'ja-v256', lang:'ja', level:'C2', word:'帰納', phonetic:'きのう', meaning:'归纳', example:'帰納的に説明します。', translation:'用归纳法说明。' },
    { id:'ja-v257', lang:'ja', level:'C2', word:'演繹', phonetic:'えんえき', meaning:'演绎', example:'演繹的に思考します。', translation:'用演绎法思考。' },
    { id:'ja-v258', lang:'ja', level:'C2', word:'弁証法', phonetic:'べんしょうほう', meaning:'辩证法', example:'弁証法的に考えます。', translation:'用辩证法思考。' },
    { id:'ja-v259', lang:'ja', level:'C2', word:'蓄積', phonetic:'ちくせき', meaning:'积蓄/积累', example:'経験を蓄積します。', translation:'积累经验。' },
    { id:'ja-v260', lang:'ja', level:'C2', word:'集大成', phonetic:'しゅうたいせい', meaning:'集大成', example:'研究の集大成之作です。', translation:'是研究的集大成之作。' }
  ],
  ko: [
    { id:'ko-v1', lang:'ko', level:'A1', word:'안녕하세요', phonetic:'an-nyeong-ha-se-yo', meaning:'你好', example:'안녕하세요, 저는 리사예요.', translation:'你好，我是丽萨。' },
    { id:'ko-v2', lang:'ko', level:'A1', word:'감사합니다', phonetic:'gam-sa-ham-ni-da', meaning:'谢谢', example:'정말 감사합니다!', translation:'真的非常感谢！' },
    { id:'ko-v3', lang:'ko', level:'A1', word:'물', phonetic:'mul', meaning:'水', example:'물 한 잔 주세요.', translation:'请来一杯水。' },
    { id:'ko-v4', lang:'ko', level:'A1', word:'책', phonetic:'chaek', meaning:'书', example:'이 책 재미있어요.', translation:'这本书很有趣。' },
    { id:'ko-v5', lang:'ko', level:'A1', word:'친구', phonetic:'chin-gu', meaning:'朋友', example:'친구를 만나요.', translation:'见朋友。' },
    { id:'ko-v6', lang:'ko', level:'A1', word:'학교', phonetic:'hak-kyo', meaning:'学校', example:'학교에 가요.', translation:'去学校。' },
    { id:'ko-v7', lang:'ko', level:'A1', word:'선생님', phonetic:'seon-saeng-nim', meaning:'老师', example:'선생님은 친절해요.', translation:'老师很亲切。' },
    { id:'ko-v8', lang:'ko', level:'A1', word:'아침', phonetic:'a-chim', meaning:'早上', example:'아침을 먹어요.', translation:'吃早餐。' },
    { id:'ko-v9', lang:'ko', level:'A1', word:'오늘', phonetic:'o-neul', meaning:'今天', example:'오늘 기분이 좋아요.', translation:'今天心情好。' },
    { id:'ko-v10', lang:'ko', level:'A1', word:'내일', phonetic:'nae-il', meaning:'明天', example:'내일 만나요.', translation:'明天见。' },
    { id:'ko-v11', lang:'ko', level:'A2', word:'식당', phonetic:'sik-dang', meaning:'餐厅', example:'식당에서 밥을 먹어요.', translation:'在餐厅吃饭。' },
    { id:'ko-v12', lang:'ko', level:'A2', word:'지하철', phonetic:'ji-ha-cheol', meaning:'地铁', example:'지하철을 타요.', translation:'坐地铁。' },
    { id:'ko-v13', lang:'ko', level:'A2', word:'병원', phonetic:'byeong-won', meaning:'医院', example:'병원에 가요.', translation:'去医院。' },
    { id:'ko-v14', lang:'ko', level:'A2', word:'회사', phonetic:'hoe-sa', meaning:'公司', example:'회사에 다녀요.', translation:'在公司上班。' },
    { id:'ko-v15', lang:'ko', level:'A2', word:'운동', phonetic:'un-dong', meaning:'运动', example:'매일 운동해요.', translation:'每天运动。' },
    { id:'ko-v16', lang:'ko', level:'A2', word:'취미', phonetic:'chwi-mi', meaning:'爱好', example:'취미가 뭐예요?', translation:'你的爱好是什么？' },
    { id:'ko-v17', lang:'ko', level:'A2', word:'계획', phonetic:'gye-hoek', meaning:'计划', example:'여행 계획을 세워요.', translation:'制定旅行计划。' },
    { id:'ko-v18', lang:'ko', level:'A2', word:'경험', phonetic:'gyeong-heom', meaning:'经验', example:'좋은 경험이에요.', translation:'是好的经验。' },
    { id:'ko-v19', lang:'ko', level:'A2', word:'준비', phonetic:'jun-bi', meaning:'准备', example:'준비됐어요?', translation:'准备好了吗？' },
    { id:'ko-v20', lang:'ko', level:'A2', word:'날씨', phonetic:'nal-ssi', meaning:'天气', example:'오늘 날씨 좋아요.', translation:'今天天气好。' },
    { id:'ko-v21', lang:'ko', level:'B1', word:'기회', phonetic:'gi-hoe', meaning:'机会', example:'좋은 기회예요.', translation:'这是个好机会。' },
    { id:'ko-v22', lang:'ko', level:'B1', word:'환경', phonetic:'hwan-gyeong', meaning:'环境', example:'환경을 보호해야 해요.', translation:'必须保护环境。' },
    { id:'ko-v23', lang:'ko', level:'B1', word:'의견', phonetic:'ui-gyeon', meaning:'意见', example:'의견을 말해 주세요.', translation:'请说说你的意见。' },
    { id:'ko-v24', lang:'ko', level:'B1', word:'영향', phonetic:'yeong-hyang', meaning:'影响', example:'긍정적인 영향을 줬어요.', translation:'带来积极影响。' },
    { id:'ko-v25', lang:'ko', level:'B1', word:'결과', phonetic:'gyeol-gwa', meaning:'结果', example:'결과를 확인해 봐요.', translation:'确认一下结果。' },
    { id:'ko-v26', lang:'ko', level:'B1', word:'이유', phonetic:'i-yu', meaning:'理由', example:'이유를 설명해 주세요.', translation:'请说明理由。' },
    { id:'ko-v27', lang:'ko', level:'B1', word:'관점', phonetic:'gwan-jeom', meaning:'观点', example:'다른 관점에서 생각해 봐요.', translation:'从其他角度思考。' },
    { id:'ko-v28', lang:'ko', level:'B1', word:'목표', phonetic:'mok-pyo', meaning:'目标', example:'목표를 세워요.', translation:'设定目标。' },
    { id:'ko-v29', lang:'ko', level:'B1', word:'노력', phonetic:'no-ryeok', meaning:'努力', example:'노력하면 성공해요.', translation:'努力就会成功。' },
    { id:'ko-v30', lang:'ko', level:'B2', word:'추세', phonetic:'chu-se', meaning:'趋势', example:'증가 추세에 있어요.', translation:'有增加趋势。' },
    { id:'ko-v31', lang:'ko', level:'B2', word:'근거', phonetic:'geun-geo', meaning:'根据', example:'과학적 근거가 있어요.', translation:'有科学根据。' },
    { id:'ko-v32', lang:'ko', level:'B2', word:'본질', phonetic:'bon-jil', meaning:'本质', example:'문제의 본질은 무엇인가요?', translation:'问题的本质是什么？' },
    { id:'ko-v33', lang:'ko', level:'B2', word:'복잡', phonetic:'bok-jap', meaning:'复杂', example:'문제가 복잡해요.', translation:'问题很复杂。' },
    { id:'ko-v34', lang:'ko', level:'B2', word:'대안', phonetic:'dae-an', meaning:'替代方案', example:'다른 대안이 있나요?', translation:'有其他替代方案吗？' },
    { id:'ko-v35', lang:'ko', level:'B2', word:'결정', phonetic:'gyeol-jeong', meaning:'决定', example:'중요한 결정을 내려요.', translation:'做出重要决定。' },
    { id:'ko-v36', lang:'ko', level:'C1', word:'시사', phonetic:'si-sa', meaning:'时事', example:'중요한 시사점을 줘요.', translation:'给出了重要的启示。' },
    { id:'ko-v37', lang:'ko', level:'C1', word:'총망', phonetic:'chong-mang', meaning:'综观', example:'상황을 총망해서 판단해요.', translation:'综观情况后判断。' },
    { id:'ko-v38', lang:'ko', level:'C1', word:'융합', phonetic:'yung-hap', meaning:'融合', example:'문화 융합을 촉진해요.', translation:'促进文化融合。' },
    { id:'ko-v39', lang:'ko', level:'C1', word:'통찰', phonetic:'tong-chal', meaning:'洞察力', example:'높은 통찰력을 보여요.', translation:'表现出很高的洞察力。' },
    { id:'ko-v40', lang:'ko', level:'C2', word:'궁극', phonetic:'gung-geuk', meaning:'终极', example:'궁극적인 목표를 세워요.', translation:'设定终极目标。' },
    // ===== VOCAB.ko 扩展 A1 (30+ 更多入门词汇) =====
    { id:'ko-v41', lang:'ko', level:'A1', word:'하나', phonetic:'ha-na', meaning:'一', example:'하나, 둘, 셋...', translation:'一、二、三...' },
    { id:'ko-v42', lang:'ko', level:'A1', word:'둘', phonetic:'dul', meaning:'二', example:'둘이 같이 가요.', translation:'两个人一起去。' },
    { id:'ko-v43', lang:'ko', level:'A1', word:'셋', phonetic:'set', meaning:'三', example:'셋이서 영화를 봐요.', translation:'三个人看电影。' },
    { id:'ko-v44', lang:'ko', level:'A1', word:'넷', phonetic:'net', meaning:'四', example:'넷이 게임을 해요.', translation:'四个人玩游戏。' },
    { id:'ko-v45', lang:'ko', level:'A1', word:'다섯', phonetic:'da-seot', meaning:'五', example:'다섯 살이에요.', translation:'五岁了。' },
    { id:'ko-v46', lang:'ko', level:'A1', word:'여섯', phonetic:'yeo-seot', meaning:'六', example:'여섯 명이서 놀아요.', translation:'六个人一起玩。' },
    { id:'ko-v47', lang:'ko', level:'A1', word:'일곱', phonetic:'il-gop', meaning:'七', example:'일곱 시에 일어나요.', translation:'七点起床。' },
    { id:'ko-v48', lang:'ko', level:'A1', word:'여덟', phonetic:'yeo-deol', meaning:'八', example:'여덟 살이에요.', translation:'八岁了。' },
    { id:'ko-v49', lang:'ko', level:'A1', word:'아홉', phonetic:'a-hop', meaning:'九', example:'아홉 시에 자요.', translation:'九点睡觉。' },
    { id:'ko-v50', lang:'ko', level:'A1', word:'열', phonetic:'yeol', meaning:'十', example:'열 명쯤 올 거예요.', translation:'大概来十个人。' },
    { id:'ko-v51', lang:'ko', level:'A1', word:'가다', phonetic:'ga-da', meaning:'去', example:'학교에 가요.', translation:'去学校。' },
    { id:'ko-v52', lang:'ko', level:'A1', word:'오다', phonetic:'o-da', meaning:'来', example:'집에 와요.', translation:'回家。' },
    { id:'ko-v53', lang:'ko', level:'A1', word:'하다', phonetic:'ha-da', meaning:'做', example:'운동을 해요.', translation:'做运动。' },
    { id:'ko-v54', lang:'ko', level:'A1', word:'먹다', phonetic:'meok-da', meaning:'吃', example:'밥을 먹어요.', translation:'吃饭。' },
    { id:'ko-v55', lang:'ko', level:'A1', word:'마시다', phonetic:'ma-si-da', meaning:'喝', example:'물을 마셔요.', translation:'喝水。' },
    { id:'ko-v56', lang:'ko', level:'A1', word:'보다', phonetic:'bo-da', meaning:'看', example:'영화를 봐요.', translation:'看电影。' },
    { id:'ko-v57', lang:'ko', level:'A1', word:'자다', phonetic:'ja-da', meaning:'睡觉', example:'일찍 자요.', translation:'早点睡觉。' },
    { id:'ko-v58', lang:'ko', level:'A1', word:'일어나다', phonetic:'il-eo-na-da', meaning:'起床/起来', example:'6시에 일어나요.', translation:'六点起床。' },
    { id:'ko-v59', lang:'ko', level:'A1', word:'말하다', phonetic:'mal-ha-da', meaning:'说', example:'한국어를 말해요.', translation:'说韩语。' },
    { id:'ko-v60', lang:'ko', level:'A1', word:'알다', phonetic:'al-da', meaning:'知道', example:'이 사람을 알아요.', translation:'认识这个人。' },
    { id:'ko-v61', lang:'ko', level:'A1', word:'모르다', phonetic:'mo-reu-da', meaning:'不知道', example:'한국어 뜻이 몰라요.', translation:'不知道韩语意思。' },
    { id:'ko-v62', lang:'ko', level:'A1', word:'있다', phonetic:'it-da', meaning:'有/在', example:'시간이 있어요.', translation:'有时间。' },
    { id:'ko-v63', lang:'ko', level:'A1', word:'없다', phonetic:'eop-da', meaning:'没有', example:'돈이 없어요.', translation:'没钱。' },
    { id:'ko-v64', lang:'ko', level:'A1', word:'학생', phonetic:'hak-ssaeng', meaning:'学生', example:'저는 학생이에요.', translation:'我是学生。' },
    { id:'ko-v65', lang:'ko', level:'A1', word:'선생님', phonetic:'seon-saeng-nim', meaning:'老师', example:'선생님은 친절해요.', translation:'老师很亲切。' },
    { id:'ko-v66', lang:'ko', level:'A1', word:'책', phonetic:'chaek', meaning:'书', example:'책을 읽어요.', translation:'读书。' },
    { id:'ko-v67', lang:'ko', level:'A1', word:'연필', phonetic:'yeon-pil', meaning:'铅笔', example:'연필로 써요.', translation:'用铅笔写。' },
    { id:'ko-v68', lang:'ko', level:'A1', word:'공책', phonetic:'gong-chaek', meaning:'笔记本', example:'공책에 메모해요.', translation:'在笔记本上记笔记。' },
    { id:'ko-v69', lang:'ko', level:'A1', word:'아버지', phonetic:'a-beo-ji', meaning:'爸爸', example:'아버지는 의사예요.', translation:'爸爸是医生。' },
    { id:'ko-v70', lang:'ko', level:'A1', word:'어머니', phonetic:'eo-meo-ni', meaning:'妈妈', example:'어머니는 요리사예요.', translation:'妈妈是厨师。' },
    { id:'ko-v71', lang:'ko', level:'A1', word:'형', phonetic:'hyeong', meaning:'哥哥（男称）', example:'형이 저를 도와요.', translation:'哥哥帮助我。' },
    { id:'ko-v72', lang:'ko', level:'A1', word:'누나', phonetic:'nu-na', meaning:'姐姐（男称）', example:'누나가 노래해요.', translation:'姐姐唱歌。' },
    { id:'ko-v73', lang:'ko', level:'A1', word:'언니', phonetic:'eon-ni', meaning:'姐姐（女称）', example:'언니와 함께 가요.', translation:'和姐姐一起去。' },
    { id:'ko-v74', lang:'ko', level:'A1', word:'동생', phonetic:'dong-saeng', meaning:'弟弟/妹妹', example:'동생이 학교에 가요.', translation:'弟弟/妹妹去学校。' },
    { id:'ko-v75', lang:'ko', level:'A1', word:'하루', phonetic:'ha-ru', meaning:'一天', example:'하루에 한 번 운동해요.', translation:'一天运动一次。' },
    { id:'ko-v76', lang:'ko', level:'A1', word:'일주일', phonetic:'il-ju-il', meaning:'一周', example:'일주일 동안 여행해요.', translation:'旅行一周。' },
    { id:'ko-v77', lang:'ko', level:'A1', word:'한 달', phonetic:'han dal', meaning:'一个月', example:'한 달 동안 한국에 있었어요.', translation:'在韩国待了一个月。' },
    { id:'ko-v78', lang:'ko', level:'A1', word:'저녁', phonetic:'jeo-nyeok', meaning:'晚上', example:'저녁에 친구를 만나요.', translation:'晚上见朋友。' },
    { id:'ko-v79', lang:'ko', level:'A1', word:'밤', phonetic:'bam', meaning:'夜晚', example:'밤에 별을 봐요.', translation:'晚上看星星。' },
    { id:'ko-v80', lang:'ko', level:'A1', word:'아이', phonetic:'a-i', meaning:'孩子', example:'아이들이 공원에서 놀아요.', translation:'孩子们在公园玩。' },
    // ===== VOCAB.ko 扩展 A2 (30+ 更多初级词汇) =====
    { id:'ko-v81', lang:'ko', level:'A2', word:'버스', phonetic:'beo-seu', meaning:'公交车', example:'버스를 타요.', translation:'坐公交车。' },
    { id:'ko-v82', lang:'ko', level:'A2', word:'택시', phonetic:'taek-ssi', meaning:'出租车', example:'택시를 잡아요.', translation:'叫出租车。' },
    { id:'ko-v83', lang:'ko', level:'A2', word:'비행기', phonetic:'bi-haeng-gi', meaning:'飞机', example:'비행기로 가요.', translation:'坐飞机去。' },
    { id:'ko-v84', lang:'ko', level:'A2', word:'배', phonetic:'bae', meaning:'船', example:'배를 타고岛에 가요.', translation:'坐船去岛。' },
    { id:'ko-v85', lang:'ko', level:'A2', word:'약국', phonetic:'yak-guk', meaning:'药店', example:'약국에서 약을 사요.', translation:'在药店买药。' },
    { id:'ko-v86', lang:'ko', level:'A2', word:'은행', phonetic:'eun-haeng', meaning:'银行', example:'은행에 가요.', translation:'去银行。' },
    { id:'ko-v87', lang:'ko', level:'A2', word:'우체국', phonetic:'u-che-guk', meaning:'邮局', example:'우체국에서 편지를 부쳐요.', translation:'在邮局寄信。' },
    { id:'ko-v88', lang:'ko', level:'A2', word:'시장', phonetic:'si-jang', meaning:'市场', example:'시장에서 과일을 사요.', translation:'在市场买水果。' },
    { id:'ko-v89', lang:'ko', level:'A2', word:'백화점', phonetic:'baek-hwa-jeom', meaning:'百货商店', example:'백화점에서 쇼핑해요.', translation:'在百货商店购物。' },
    { id:'ko-v90', lang:'ko', level:'A2', word:'카페', phonetic:'ka-pe', meaning:'咖啡厅', example:'카페에서 커피를 마셔요.', translation:'在咖啡厅喝咖啡。' },
    { id:'ko-v91', lang:'ko', level:'A2', word:'공원', phonetic:'gong-won', meaning:'公园', example:'공원에서 산책해요.', translation:'在公园散步。' },
    { id:'ko-v92', lang:'ko', level:'A2', word:'영화관', phonetic:'yeong-hwa-gwan', meaning:'电影院', example:'영화관에서 영화를 봐요.', translation:'在电影院看电影。' },
    { id:'ko-v93', lang:'ko', level:'A2', word:'博物馆', phonetic:'mul-mul-gwan', meaning:'博物馆', example:'博物馆에서 전시를 감상해요.', translation:'在博物馆欣赏展览。' },
    { id:'ko-v94', lang:'ko', level:'A2', word:'도서관', phonetic:'do-seo-gwan', meaning:'图书馆', example:'도서관에서 책을 빌려요.', translation:'在图书馆借书。' },
    { id:'ko-v95', lang:'ko', level:'A2', word:'교실', phonetic:'gyo-sil', meaning:'教室', example:'교실에서 공부해요.', translation:'在教室学习。' },
    { id:'ko-v96', lang:'ko', level:'A2', word:'사무실', phonetic:'sa-mu-sil', meaning:'办公室', example:'사무실에서 일해요.', translation:'在办公室工作。' },
    { id:'ko-v97', lang:'ko', level:'A2', word:'세탁소', phonetic:'se-tak-sso', meaning:'干洗店', example:'세탁소에서 옷을 세탁해요.', translation:'在干洗店洗衣服。' },
    { id:'ko-v98', lang:'ko', level:'A2', word:'미용실', phonetic:'mi-yong-sil', meaning:'美容院', example:'미용실에서 머리를 잘라요.', translation:'在美容院剪头发。' },
    { id:'ko-v99', lang:'ko', level:'A2', word:'계절', phonetic:'gye-jeol', meaning:'季节', example:'좋은 계절이에요.', translation:'是好季节。' },
    { id:'ko-v100', lang:'ko', level:'A2', word:'봄', phonetic:'bom', meaning:'春天', example:'봄에 꽃이 피어요.', translation:'春天花开了。' },
    { id:'ko-v101', lang:'ko', level:'A2', word:'여름', phonetic:'yeo-reum', meaning:'夏天', example:'여름에 바다에 가요.', translation:'夏天去海边。' },
    { id:'ko-v102', lang:'ko', level:'A2', word:'가을', phonetic:'ga-eul', meaning:'秋天', example:'가을에 단풍이 예뻐요.', translation:'秋天枫叶很美。' },
    { id:'ko-v103', lang:'ko', level:'A2', word:'겨울', phonetic:'gyeo-ul', meaning:'冬天', example:'겨울에 눈이 와요.', translation:'冬天下雪。' },
    { id:'ko-v104', lang:'ko', level:'A2', word:'비', phonetic:'bi', meaning:'雨', example:'비가 와요.', translation:'下雨。' },
    { id:'ko-v105', lang:'ko', level:'A2', word:'눈', phonetic:'nun', meaning:'雪', example:'눈이 내려요.', translation:'下雪。' },
    { id:'ko-v106', lang:'ko', level:'A2', word:'바람', phonetic:'ba-ram', meaning:'风', example:'바람이 불어요.', translation:'刮风。' },
    { id:'ko-v107', lang:'ko', level:'A2', word:'더위', phonetic:'deo-wi', meaning:'炎热', example:'여름 더위가 심해요.', translation:'夏天很热。' },
    { id:'ko-v108', lang:'ko', level:'A2', word:'추위', phonetic:'chu-wi', meaning:'寒冷', example:'겨울 추위가 심해요.', translation:'冬天很冷。' },
    { id:'ko-v109', lang:'ko', level:'A2', word:'휴가', phonetic:'hyu-ga', meaning:'休假', example:'휴가를 가요.', translation:'去度假。' },
    { id:'ko-v110', lang:'ko', level:'A2', word:'여권', phonetic:'yeo-gwon', meaning:'护照', example:'여권을 만들어요.', translation:'办理护照。' },
    { id:'ko-v111', lang:'ko', level:'A2', word:'수하물', phonetic:'su-ha-mul', meaning:'行李', example:'수하물을 찾았어요.', translation:'领取行李。' },
    { id:'ko-v112', lang:'ko', level:'A2', word:'숙소', phonetic:'suk-so', meaning:'住宿', example:'숙소를预订했어요.', translation:'预订了住宿。' },
    { id:'ko-v113', lang:'ko', level:'A2', word:'음식', phonetic:'eum-sik', meaning:'食物', example:'한국 음식을 좋아해요.', translation:'喜欢韩国食物。' },
    { id:'ko-v114', lang:'ko', level:'A2', word:'고기', phonetic:'go-gi', meaning:'肉', example:'고기를 구워요.', translation:'烤肉。' },
    { id:'ko-v115', lang:'ko', level:'A2', word:'생선', phonetic:'saeng-seon', meaning:'鲜鱼', example:'생선을 먹어요.', translation:'吃鲜鱼。' },
    { id:'ko-v116', lang:'ko', level:'A2', word:'과일', phonetic:'gwa-il', meaning:'水果', example:'과일이 달아요.', translation:'水果很甜。' },
    { id:'ko-v117', lang:'ko', level:'A2', word:'채소', phonetic:'chae-so', meaning:'蔬菜', example:'채소를 많이 먹어요.', translation:'多吃蔬菜。' },
    { id:'ko-v118', lang:'ko', level:'A2', word:'커피', phonetic:'keo-pi', meaning:'咖啡', example:'커피를 마시고 싶어요.', translation:'想喝咖啡。' },
    { id:'ko-v119', lang:'ko', level:'A2', word:'차', phonetic:'cha', meaning:'茶', example:'녹차를 마셔요.', translation:'喝绿茶。' },
    { id:'ko-v120', lang:'ko', level:'A2', word:'주스', phonetic:'ju-seu', meaning:'果汁', example:'주스를 만들어요.', translation:'制作果汁。' },
    // ===== VOCAB.ko 扩展 B1 (30+ 更多中级词汇) =====
    { id:'ko-v121', lang:'ko', level:'B1', word:'발전', phonetic:'bal-jeon', meaning:'发展', example:'경제가 빠르게 발전해요.', translation:'经济快速发展。' },
    { id:'ko-v122', lang:'ko', level:'B1', word:'현상', phonetic:'hyeon-sang', meaning:'现象', example:'사회적 현상을 분석해요.', translation:'分析社会现象。' },
    { id:'ko-v123', lang:'ko', level:'B1', word:'변화', phonetic:'byeon-hwa', meaning:'变化', example:'큰 변화가 생겼어요.', translation:'发生了很大变化。' },
    { id:'ko-v124', lang:'ko', level:'B1', word:'영향력', phonetic:'yeong-hyang-ryeok', meaning:'影响力', example:'SNS의 영향력이 커요.', translation:'SNS的影响力很大。' },
    { id:'ko-v125', lang:'ko', level:'B1', word:'가치관', phonetic:'ga-chi-gwan', meaning:'价值观', example:'다른 가치관을 존중해야 해요.', translation:'应该尊重不同的价值观。' },
    { id:'ko-v126', lang:'ko', level:'B1', word:'문화', phonetic:'mun-hwa', meaning:'文化', example:'한국 문화를 배워요.', translation:'学习韩国文化。' },
    { id:'ko-v127', lang:'ko', level:'B1', word:'전통', phonetic:'jeon-tong', meaning:'传统', example:'한국 전통을 지키고 있어요.', translation:'正在守护韩国传统。' },
    { id:'ko-v128', lang:'ko', level:'B1', word:'현대', phonetic:'hyeon-dae', meaning:'现代', example:'현대 사회에서 살아가요.', translation:'在现代社会生活。' },
    { id:'ko-v129', lang:'ko', level:'B1', word:'역사', phonetic:'yeok-sa', meaning:'历史', example:'역사를 공부해요.', translation:'学习历史。' },
    { id:'ko-v130', lang:'ko', level:'B1', word:'교육', phonetic:'gyo-yuk', meaning:'教育', example:'교육 시스템이 중요해요.', translation:'教育系统很重要。' },
    { id:'ko-v131', lang:'ko', level:'B1', word:'학교', phonetic:'hak-gyo', meaning:'学校', example:'대학교에 다녀요.', translation:'上大学。' },
    { id:'ko-v132', lang:'ko', level:'B1', word:'지식', phonetic:'ji-sik', meaning:'知识', example:'지식을 쌓아요.', translation:'积累知识。' },
    { id:'ko-v133', lang:'ko', level:'B1', word:'기술', phonetic:'gi-sul', meaning:'技术', example:'기술 발전이 빠르요.', translation:'技术发展很快。' },
    { id:'ko-v134', lang:'ko', level:'B1', word:'정보', phonetic:'jeong-bo', meaning:'信息', example:'정보를 공유해요.', translation:'共享信息。' },
    { id:'ko-v135', lang:'ko', level:'B1', word:'소통', phonetic:'so-tong', meaning:'沟通', example:'원활한 소통이 필요해요.', translation:'需要顺畅的沟通。' },
    { id:'ko-v136', lang:'ko', level:'B1', word:'감정', phonetic:'gam-jeong', meaning:'感情', example:'감정을 표현해요.', translation:'表达感情。' },
    { id:'ko-v137', lang:'ko', level:'B1', word:'심리', phonetic:'sim-ni', meaning:'心理', example:'심리를 알아가고 싶어요.', translation:'想了解心理。' },
    { id:'ko-v138', lang:'ko', level:'B1', word:'자격증', phonetic:'ja-gyeok-jeung', meaning:'资格证', example:'자격증을 따요.', translation:'取得资格证。' },
    { id:'ko-v139', lang:'ko', level:'B1', word:'인턴', phonetic:'in-teon', meaning:'实习', example:'회사에서 인턴으로 일해요.', translation:'在公司当实习生。' },
    { id:'ko-v140', lang:'ko', level:'B1', word:'승진', phonetic:'seung-jin', meaning:'晋升', example:'팀장으로 승진했어요.', translation:'晋升为组长。' },
    { id:'ko-v141', lang:'ko', level:'B1', word:'퇴사', phonetic:'toe-sa', meaning:'离职', example:'새로운 도전을 위해 퇴사해요.', translation:'为了新挑战离职。' },
    { id:'ko-v142', lang:'ko', level:'B1', word:'실망', phonetic:'sil-mang', meaning:'失望', example:'결과에 실망했어요.', translation:'对结果失望。' },
    { id:'ko-v143', lang:'ko', level:'B1', word:'희망', phonetic:'hui-mang', meaning:'希望', example:'미래에 희망을 가져요.', translation:'对未来抱有希望。' },
    { id:'ko-v144', lang:'ko', level:'B1', word:'걱정', phonetic:'geok-jeong', meaning:'担心', example:'건강이 걱정돼요.', translation:'担心健康。' },
    { id:'ko-v145', lang:'ko', level:'B1', word:'분노', phonetic:'bun-no', meaning:'愤怒', example:'불공정한 대우에 분노해요.', translation:'对不公平的对待感到愤怒。' },
    { id:'ko-v146', lang:'ko', level:'B1', word:'연애', phonetic:'yeo-nae', meaning:'恋爱', example:'연애를 시작했어요.', translation:'开始恋爱了。' },
    { id:'ko-v147', lang:'ko', level:'B1', word:'가족', phonetic:'ga-jok', meaning:'家人', example:'가족과 시간을 보냈어요.', translation:'和家人共度时光。' },
    { id:'ko-v148', lang:'ko', level:'B1', word:'이별', phonetic:'i-byeol', meaning:'离别', example:'이별은 슬프지만 필요해요.', translation:'离别虽然悲伤但是必要的。' },
    { id:'ko-v149', lang:'ko', level:'B1', word:'재회', phonetic:'jae-hoe', meaning:'重逢', example:'오래된 친구와 재회했어요.', translation:'和久别的朋友重逢。' },
    { id:'ko-v150', lang:'ko', level:'B1', word:'타협', phonetic:'ta-hyeop', meaning:'妥协', example:'서로 타협점을 찾았어요.', translation:'找到了彼此的妥协点。' },
    { id:'ko-v151', lang:'ko', level:'B1', word:'논의', phonetic:'non-ui', meaning:'讨论', example:'중요한 문제를 협의해요.', translation:'讨论重要问题。' },
    { id:'ko-v152', lang:'ko', level:'B1', word:'합의', phonetic:'hap-ui', meaning:'协议', example:'합의에 도달했어요.', translation:'达成了协议。' },
    { id:'ko-v153', lang:'ko', level:'B1', word:'투표', phonetic:'tu-pyo', meaning:'投票', example:'국민 투표를 진행해요.', translation:'进行国民投票。' },
    { id:'ko-v154', lang:'ko', level:'B1', word:'권리', phonetic:'gwon-ni', meaning:'权利', example:'국민의 권리를 보호해요.', translation:'保护国民的权利。' },
    { id:'ko-v155', lang:'ko', level:'B1', word:'의무', phonetic:'ui-mu', meaning:'义务', example:'납세는 국민의 의무예요.', translation:'纳税是国民的义务。' },
    // ===== VOCAB.ko 扩展 B2 (30+ 更多中高级词汇) =====
    { id:'ko-v156', lang:'ko', level:'B2', word:'현실', phonetic:'hyeon-sil', meaning:'现实', example:'현실과 이상은 다르다.', translation:'现实和理想不同。' },
    { id:'ko-v157', lang:'ko', level:'B2', word:'이념', phonetic:'i-nyeom', meaning:'理念', example:'이념적 갈등이 심해요.', translation:'理念上的矛盾加深。' },
    { id:'ko-v158', lang:'ko', level:'B2', word:'이데올로기', phonetic:'i-de-ol-lo-gi', meaning:'意识形态', example:'정치적 이데올로기에缚られず.', translation:'不被政治意识形态束缚。' },
    { id:'ko-v159', lang:'ko', level:'B2', word:'체제', phonetic:'che-je', meaning:'体制', example:'사회 체제를改革해야 해요.', translation:'需要改革社会体制。' },
    { id:'ko-v160', lang:'ko', level:'B2', word:'구조', phonetic:'gu-cho', meaning:'结构', example:'경제 구조를 조정해요.', translation:'调整经济结构。' },
    { id:'ko-v161', lang:'ko', level:'B2', word:'양극화', phonetic:'yang-geuk-hwa', meaning:'两极分化', example:'사회 양극화가 심해졌어요.', translation:'社会两极分化加剧了。' },
    { id:'ko-v162', lang:'ko', level:'B2', word:'불평등', phonetic:'bul-pyeong-deung', meaning:'不平等', example:'소득 불평등 문제가 심각해요.', translation:'收入不平等问题严重。' },
    { id:'ko-v163', lang:'ko', level:'B2', word:'빈부격차', phonetic:'bin-bu-gyeok-cha', meaning:'贫富差距', example:'빈부격차를 해소해야 해요.', translation:'需要消除贫富差距。' },
    { id:'ko-v164', lang:'ko', level:'B2', word:'환경오염', phonetic:'hwan-gyeong-o-yeom', meaning:'环境污染', example:'환경오염이 심각해요.', translation:'环境污染严重。' },
    { id:'ko-v165', lang:'ko', level:'B2', word:'기후변화', phonetic:'gi-hu-byeon-hwa', meaning:'气候变化', example:'기후변화가加快되고 있어요.', translation:'气候变化正在加速。' },
    { id:'ko-v166', lang:'ko', level:'B2', word:'지속가능', phonetic:'ji-sok-ga-neung', meaning:'可持续', example:'지속가능한 발전이 중요해요.', translation:'可持续发展很重要。' },
    { id:'ko-v167', lang:'ko', level:'B2', word:'재활용', phonetic:'jae-hwa-yong', meaning:'再利用', example:'재활용을 장려해야 해요.', translation:'应该鼓励再利用。' },
    { id:'ko-v168', lang:'ko', level:'B2', word:'탄소배출', phonetic:'tan-so-bae-chul', meaning:'碳排放', example:'탄소배출을 줄여야 해요.', translation:'需要减少碳排放。' },
    { id:'ko-v169', lang:'ko', level:'B2', word:'인공지능', phonetic:'in-gong-ji-neung', meaning:'人工智能', example:'인공지능 기술이 발전하고 있어요.', translation:'人工智能技术正在发展。' },
    { id:'ko-v170', lang:'ko', level:'B2', word:'빅데이터', phonetic:'big-dei-ta', meaning:'大数据', example:'빅데이터를 분석해요.', translation:'分析大数据。' },
    { id:'ko-v171', lang:'ko', level:'B2', word:'자동화', phonetic:'ji-dong-hwa', meaning:'自动化', example:'자동화 시스템 도입이 확대되고 있어요.', translation:'自动化系统引进正在扩大。' },
    { id:'ko-v172', lang:'ko', level:'B2', word:'로봇', phonetic:'ro-bot', meaning:'机器人', example:'로봇이 인력을 대체하고 있어요.', translation:'机器人正在替代人力。' },
    { id:'ko-v173', lang:'ko', level:'B2', word:'디지털', phonetic:'di-ji-teol', meaning:'数字化', example:'디지털 전환이加速되고 있어요.', translation:'数字化转型正在加速。' },
    { id:'ko-v174', lang:'ko', level:'B2', word:'부동산', phonetic:'bu-dong-san', meaning:'房地产', example:'부동산 시장이 활발해요.', translation:'房地产市场活跃。' },
    { id:'ko-v175', lang:'ko', level:'B2', word:'주식', phonetic:'ju-sik', meaning:'股票', example:'주식 투자를 해요.', translation:'做股票投资。' },
    { id:'ko-v176', lang:'ko', level:'B2', word:'경매', phonetic:'gyeong-mae', meaning:'竞拍', example:'경매로 부동산을 구매해요.', translation:'通过竞拍购买房地产。' },
    { id:'ko-v177', lang:'ko', level:'B2', word:'퇴직금', phonetic:'toe-jik-geum', meaning:'退休金', example:'퇴직금을 받아요.', translation:'领取退休金。' },
    { id:'ko-v178', lang:'ko', level:'B2', word:'세금', phonetic:'se-geum', meaning:'税金', example:'세금을 제대로 납부해야 해요.', translation:'应该正确缴纳税金。' },
    { id:'ko-v179', lang:'ko', level:'B2', word:'연금', phonetic:'yeol-geum', meaning:'养老金', example:'국민 연금을 받아요.', translation:'领取国民养老金。' },
    { id:'ko-v180', lang:'ko', level:'B2', word:'의료', phonetic:'ui-ryo', meaning:'医疗', example:'의료 시스템이 발전하고 있어요.', translation:'医疗系统正在发展。' },
    { id:'ko-v181', lang:'ko', level:'B2', word:'보험', phonetic:'bo-heom', meaning:'保险', example:'건강보험에 가입했어요.', translation:'加入了健康保险。' },
    { id:'ko-v182', lang:'ko', level:'B2', word:'수술', phonetic:'su-sul', meaning:'手术', example:'수술이 성공했어요.', translation:'手术成功了。' },
    { id:'ko-v183', lang:'ko', level:'B2', word:'진단', phonetic:'jin-dan', meaning:'诊断', example:'정확한 진단이 필요해요.', translation:'需要准确的诊断。' },
    { id:'ko-v184', lang:'ko', level:'B2', word:'처방', phonetic:'cheo-bang', meaning:'处方', example:'의사가 약을 처방해요.', translation:'医生开药方。' },
    { id:'ko-v185', lang:'ko', level:'B2', word:'후원', phonetic:'hu-won', meaning:'赞助', example:'기업후원을 받아요.', translation:'获得企业赞助。' },
    { id:'ko-v186', lang:'ko', level:'B2', word:'투자', phonetic:'tu-ja', meaning:'投资', example:'부동산에 투자해요.', translation:'投资房地产。' },
    { id:'ko-v187', lang:'ko', level:'B2', word:'예산', phonetic:'ye-san', meaning:'预算', example:'예산을 초과했어요.', translation:'超出预算了。' },
    { id:'ko-v188', lang:'ko', level:'B2', word:'수익', phonetic:'su-yik', meaning:'收益', example:'수익이 감소했어요.', translation:'收益减少了。' },
    { id:'ko-v189', lang:'ko', level:'B2', word:'손실', phonetic:'son-sil', meaning:'损失', example:'큰 손실을 입었어요.', translation:'遭受了重大损失。' },
    { id:'ko-v190', lang:'ko', level:'B2', word:'파산', phonetic:'pa-san', meaning:'破产', example:'회사가 파산했어요.', translation:'公司破产了。' }
  ],
  es: [
    { id:'es-v1', lang:'es', level:'A1', word:'hola', phonetic:'/ˈo-la/', meaning:'你好', example:'¡Hola! Me llamo Ana.', translation:'你好！我叫安娜。' },
    { id:'es-v2', lang:'es', level:'A1', word:'gracias', phonetic:'/ˈɡɾa-sjas/', meaning:'谢谢', example:'Muchas gracias.', translation:'非常感谢。' },
    { id:'es-v3', lang:'es', level:'A1', word:'agua', phonetic:'/ˈa-ɣwa/', meaning:'水', example:'Quiero agua, por favor.', translation:'请给我水。' },
    { id:'es-v4', lang:'es', level:'A1', word:'libro', phonetic:'/ˈli-βɾo/', meaning:'书', example:'Este libro es interesante.', translation:'这本书很有趣。' },
    { id:'es-v5', lang:'es', level:'A1', word:'casa', phonetic:'/ˈka-sa/', meaning:'房子', example:'Mi casa es grande.', translation:'我的房子很大。' },
    { id:'es-v6', lang:'es', level:'A1', word:'amigo', phonetic:'/a-mi-ɣo/', meaning:'朋友', example:'Él es mi mejor amigo.', translation:'他是我最好的朋友。' },
    { id:'es-v7', lang:'es', level:'A1', word:'comida', phonetic:'/ko-mi-ða/', meaning:'食物', example:'La comida está buena.', translation:'食物很好。' },
    { id:'es-v8', lang:'es', level:'A1', word:'trabajo', phonetic:'/tɾa-ˈβa-xo/', meaning:'工作', example:'Voy al trabajo.', translation:'我去上班。' },
    { id:'es-v9', lang:'es', level:'A2', word:'desayuno', phonetic:'/de-sa-ˈju-no/', meaning:'早餐', example:'Tomo el desayuno a las siete.', translation:'我七点吃早餐。' },
    { id:'es-v10', lang:'es', level:'A2', word:'restaurante', phonetic:'/res-tau-ˈɾan-te/', meaning:'餐厅', example:'El restaurante está cerrado.', translation:'餐厅关门了。' },
    { id:'es-v11', lang:'es', level:'A2', word:'aeropuerto', phonetic:'/a-e-ɾo-ˈpweɾ-to/', meaning:'机场', example:'El aeropuerto está lejos.', translation:'机场很远。' },
    { id:'es-v12', lang:'es', level:'A2', word:'tren', phonetic:'/tɾen/', meaning:'火车', example:'El tren llega a las nueve.', translation:'火车9点到。' },
    { id:'es-v13', lang:'es', level:'A2', word:'interesante', phonetic:'/in-te-ɾe-ˈsan-te/', meaning:'有趣的', example:'Es una idea interesante.', translation:'是一个有趣的想法。' },
    { id:'es-v14', lang:'es', level:'A2', word:'importante', phonetic:'/im-poɾ-ˈtan-te/', meaning:'重要的', example:'Es muy importante.', translation:'非常重要。' },
    { id:'es-v15', lang:'es', level:'A2', word:'diferente', phonetic:'/di-fe-ˈɾen-te/', meaning:'不同的', example:'Es muy diferente.', translation:'非常不同。' },
    { id:'es-v16', lang:'es', level:'B1', word:'oportunidad', phonetic:'/o-poɾ-tu-ni-ˈðað/', meaning:'机会', example:'Es una gran oportunidad.', translation:'这是个好机会。' },
    { id:'es-v17', lang:'es', level:'B1', word:'ambiente', phonetic:'/am-ˈbjen-te/', meaning:'环境/氛围', example:'El ambiente es agradable.', translation:'氛围很舒适。' },
    { id:'es-v18', lang:'es', level:'B1', word:'relación', phonetic:'/re-la-ˈθjon/', meaning:'关系', example:'Tengo una buena relación con él.', translation:'我和他关系很好。' },
    { id:'es-v19', lang:'es', level:'B1', word:'conocimiento', phonetic:'/ko-no-θi-ˈmjen-to/', meaning:'知识', example:'Tengo conocimientos de español.', translation:'我有西班牙语知识。' },
    { id:'es-v20', lang:'es', level:'B1', word:'recomendar', phonetic:'/re-ko-men-ˈdaɾ/', meaning:'推荐', example:'Te recomiendo este libro.', translation:'我推荐你这本书。' },
    { id:'es-v21', lang:'es', level:'B2', word:'controversial', phonetic:'/kon-tɾo-βeɾ-ˈsjal/', meaning:'有争议的', example:'Es un tema muy controversial.', translation:'这是一个很有争议的话题。' },
    { id:'es-v22', lang:'es', level:'B2', word:'alternativa', phonetic:'/al-teɾ-na-ˈti-βa/', meaning:'替代方案', example:'¿Hay alguna alternativa?', translation:'有替代方案吗？' },
    { id:'es-v23', lang:'es', level:'B2', word:'consecuencia', phonetic:'/kon-se-ˈkwen-θja/', meaning:'后果', example:'Hay que pensar en las consecuencias.', translation:'必须考虑后果。' },
    { id:'es-v24', lang:'es', level:'B2', word:'participar', phonetic:'/paɾ-ti-θi-ˈpaɾ/', meaning:'参与', example:'Todos deben participar.', translation:'每个人都必须参与。' },
    { id:'es-v25', lang:'es', level:'B2', word:'investigar', phonetic:'/in-βes-ti-ˈɣaɾ/', meaning:'调查', example:'Vamos a investigar el caso.', translation:'我们来调查这个案件。' },
    { id:'es-v26', lang:'es', level:'C1', word:'prevalecer', phonetic:'/pɾe-βa-le-ˈθeɾ/', meaning:'占优势', example:'La tendencia prevalece.', translation:'这种趋势占优势。' },
    { id:'es-v27', lang:'es', level:'C1', word:'aunar', phonetic:'/au-ˈnaɾ/', meaning:'联合', example:'Hay que aunar esfuerzos.', translation:'必须同心协力。' },
    { id:'es-v28', lang:'es', level:'C1', word:'perspectiva', phonetic:'/peɾ-spek-ˈti-βa/', meaning:'视角', example:'Una perspectiva diferente.', translation:'不同的视角。' },
    { id:'es-v29', lang:'es', level:'C2', word:'concupiscencia', phonetic:'/kon-ku-pis-ˈsen-θja/', meaning:'贪欲', example:'La concupiscencia mueve al mundo.', translation:'贪欲驱动世界。' },
    { id:'es-v30', lang:'es', level:'C2', word:'resquemor', phonetic:'/res-ki-ˈmoɾ/', meaning:'怨恨', example:'Siento un profundo resquemor.', translation:'我感到深深的怨恨。' },
    { id:'es-v31', lang:'es', level:'A1', word:'adiós', phonetic:'/a-ˈðjos/', meaning:'再见', example:'¡Adiós! Nos vemos mañana.', translation:'再见！明天见。' },
    { id:'es-v32', lang:'es', level:'A1', word:'por favor', phonetic:'/poɾ fa-ˈβoɾ/', meaning:'请', example:'Agua, por favor.', translation:'请给我水。' },
    { id:'es-v33', lang:'es', level:'A1', word:'buenos días', phonetic:'/ˈbwe-nos ˈdi-as/', meaning:'早上好', example:'¡Buenos días! ¿Cómo estás?', translation:'早上好！你好吗？' },
    { id:'es-v34', lang:'es', level:'A1', word:'lo siento', phonetic:'/lo ˈsjen-to/', meaning:'对不起', example:'Lo siento, estoy equivocado.', translation:'对不起，我错了。' },
    { id:'es-v35', lang:'es', level:'A1', word:'de nada', phonetic:'/de ˈna-ða/', meaning:'不客气', example:'—Gracias. —De nada.', translation:'—谢谢。—不客气。' },
    { id:'es-v36', lang:'es', level:'A1', word:'uno', phonetic:'/ˈu-no/', meaning:'一', example:'Tengo uno hermano.', translation:'我有一个兄弟。' },
    { id:'es-v37', lang:'es', level:'A1', word:'dos', phonetic:'/dos/', meaning:'二', example:'Dos café, por favor.', translation:'请来两杯咖啡。' },
    { id:'es-v38', lang:'es', level:'A1', word:'tres', phonetic:'/tɾes/', meaning:'三', example:'Tengo tres libros.', translation:'我有三本书。' },
    { id:'es-v39', lang:'es', level:'A1', word:'madre', phonetic:'/ˈma-ðɾe/', meaning:'母亲', example:'Mi madre es doctora.', translation:'我母亲是医生。' },
    { id:'es-v40', lang:'es', level:'A1', word:'padre', phonetic:'/ˈpa-ðɾe/', meaning:'父亲', example:'Mi padre trabaja mucho.', translation:'我父亲工作很努力。' },
    { id:'es-v41', lang:'es', level:'A1', word:'hermano', phonetic:'/eɾ-ˈma-no/', meaning:'兄弟', example:'Tengo un hermano mayor.', translation:'我有一个哥哥。' },
    { id:'es-v42', lang:'es', level:'A1', word:'hermana', phonetic:'/eɾ-ˈma-na/', meaning:'姐妹', example:'Mi hermana estudia medicina.', translation:'我姐姐学医。' },
    { id:'es-v43', lang:'es', level:'A1', word:'rojo', phonetic:'/ˈro-xo/', meaning:'红色', example:'El coche rojo es mío.', translation:'那辆红色汽车是我的。' },
    { id:'es-v44', lang:'es', level:'A1', word:'azul', phonetic:'/a-ˈθul/', meaning:'蓝色', example:'El cielo es azul.', translation:'天空是蓝色的。' },
    { id:'es-v45', lang:'es', level:'A1', word:'verde', phonetic:'/ˈbeɾ-ðe/', meaning:'绿色', example:'Me gusta el color verde.', translation:'我喜欢绿色。' },
    { id:'es-v46', lang:'es', level:'A1', word:'blanco', phonetic:'/ˈblan-ko/', meaning:'白色', example:'La pared es blanca.', translation:'墙是白色的。' },
    { id:'es-v47', lang:'es', level:'A1', word:'negro', phonetic:'/ˈne-ɣɾo/', meaning:'黑色', example:'Lleva una camisa negro.', translation:'他穿一件黑色衬衫。' },
    { id:'es-v48', lang:'es', level:'A1', word:'hoy', phonetic:'/oj/', meaning:'今天', example:'Hoy es lunes.', translation:'今天是星期一。' },
    { id:'es-v49', lang:'es', level:'A1', word:'mañana', phonetic:'/ma-ˈɲa-na/', meaning:'明天/早上', example:'Mañana voy al médico.', translation:'明天我去看医生。' },
    { id:'es-v50', lang:'es', level:'A1', word:'ahora', phonetic:'/a-ˈo-ɾa/', meaning:'现在', example:'Ahora mismo vengo.', translation:'我现在就来。' },
    { id:'es-v51', lang:'es', level:'A1', word:'siempre', phonetic:'/ˈsjem-pɾe/', meaning:'总是', example:'Siempre llego tarde.', translation:'我总是迟到。' },
    { id:'es-v52', lang:'es', level:'A1', word:'nunca', phonetic:'/ˈnun-ka/', meaning:'从不', example:'Nunca como carne.', translation:'我从不吃肉。' },
    { id:'es-v53', lang:'es', level:'A1', word:'ser', phonetic:'/seɾ/', meaning:'是(本质)', example:'Soy estudiante.', translation:'我是学生。' },
    { id:'es-v54', lang:'es', level:'A1', word:'estar', phonetic:'/es-ˈtaɾ/', meaning:'是(状态)', example:'Estoy cansado.', translation:'我很累。' },
    { id:'es-v55', lang:'es', level:'A1', word:'tener', phonetic:'/te-ˈneɾ/', meaning:'有', example:'Tengo dos hermanos.', translation:'我有两个兄弟。' },
    { id:'es-v56', lang:'es', level:'A1', word:'hacer', phonetic:'/a-ˈθeɾ/', meaning:'做/做', example:'Hago la tarea.', translation:'我做作业。' },
    { id:'es-v57', lang:'es', level:'A1', word:'ir', phonetic:'/iɾ/', meaning:'去', example:'Voy al cine.', translation:'我去看电影。' },
    { id:'es-v58', lang:'es', level:'A1', word:'venir', phonetic:'/be-ˈniɾ/', meaning:'来', example:'Vengo de la escuela.', translation:'我从学校来。' },
    { id:'es-v59', lang:'es', level:'A1', word:'querer', phonetic:'/ke-ˈɾeɾ/', meaning:'想要', example:'Quiero agua.', translation:'我想要水。' },
    { id:'es-v60', lang:'es', level:'A1', word:'poder', phonetic:'/po-ˈðeɾ/', meaning:'能', example:'¿Puedo pasar?', translation:'我能过去吗？' },
    { id:'es-v61', lang:'es', level:'A2', word:'ciudad', phonetic:'/sju-ˈðað/', meaning:'城市', example:'Madrid es una ciudad grande.', translation:'马德里是一个大城市。' },
    { id:'es-v62', lang:'es', level:'A2', word:'calle', phonetic:'/ˈka-ʎe/', meaning:'街道', example:'Vivo en esta calle.', translation:'我住在这条街上。' },
    { id:'es-v63', lang:'es', level:'A2', word:'coche', phonetic:'/ˈko-tʃe/', meaning:'汽车', example:'Mi coche es rojo.', translation:'我的汽车是红色的。' },
    { id:'es-v64', lang:'es', level:'A2', word:'autobús', phonetic:'/au-to-ˈβus/', meaning:'公交车', example:'Tomo el autobús al trabajo.', translation:'我坐公交去上班。' },
    { id:'es-v65', lang:'es', level:'A2', word:'médico', phonetic:'/ˈme-ði-ko/', meaning:'医生', example:'El médico me ayudó mucho.', translation:'医生帮了我很多。' },
    { id:'es-v66', lang:'es', level:'A2', word:'profesor', phonetic:'/pɾo-fe-ˈsoɾ/', meaning:'老师', example:'El profesor explica bien.', translation:'老师讲得很好。' },
    { id:'es-v67', lang:'es', level:'A2', word:'tiempo', phonetic:'/ˈtjempo/', meaning:'时间/天气', example:'No tengo tiempo.', translation:'我没有时间。' },
    { id:'es-v68', lang:'es', level:'A2', word:'lluvia', phonetic:'/ˈʎu-βja/', meaning:'雨', example:'La lluvia es fuerte hoy.', translation:'今天雨下得很大。' },
    { id:'es-v69', lang:'es', level:'A2', word:'nieve', phonetic:'/ˈnje-βe/', meaning:'雪', example:'En invierno hay mucha nieve.', translation:'冬天有很多雪。' },
    { id:'es-v70', lang:'es', level:'A2', word:'pasaporte', phonetic:'/pa-sa-ˈpoɾ-te/', meaning:'护照', example:'Necesito mi pasaporte.', translation:'我需要我的护照。' },
    { id:'es-v71', lang:'es', level:'A2', word:'equipaje', phonetic:'/e-ki-ˈpa-xe/', meaning:'行李', example:'Mi equipaje está pesado.', translation:'我的行李很重。' },
    { id:'es-v72', lang:'es', level:'A2', word:'cabeza', phonetic:'/ka-ˈβe-θa/', meaning:'头', example:'Me duele la cabeza.', translation:'我头疼。' },
    { id:'es-v73', lang:'es', level:'A2', word:'mano', phonetic:'/ˈma-no/', meaning:'手', example:'Dame la mano.', translation:'把手给我。' },
    { id:'es-v74', lang:'es', level:'A2', word:'camisa', phonetic:'/ka-ˈmi-sa/', meaning:'衬衫', example:'Esta camisa es nueva.', translation:'这件衬衫是新的。' },
    { id:'es-v75', lang:'es', level:'A2', word:'zapato', phonetic:'/θa-ˈpa-to/', meaning:'鞋子', example:'Me gustan estos zapatos.', translation:'我喜欢这些鞋子。' },
    { id:'es-v76', lang:'es', level:'A2', word:'España', phonetic:'/es-ˈpa-ɲa/', meaning:'西班牙', example:'España es un país hermoso.', translation:'西班牙是个美丽的国家。' },
    { id:'es-v77', lang:'es', level:'A2', word:'México', phonetic:'/ˈme-xi-ko/', meaning:'墨西哥', example:'México tiene mucha historia.', translation:'墨西哥有很多历史。' },
    { id:'es-v78', lang:'es', level:'A2', word:'Argentina', phonetic:'/aɾ-xen-ˈti-na/', meaning:'阿根廷', example:'Argentina es muy grande.', translation:'阿根廷很大。' },
    { id:'es-v79', lang:'es', level:'B1', word:'tecnología', phonetic:'/tek-no-lo-ˈxi-a/', meaning:'科技', example:'La tecnología avanza rápido.', translation:'科技发展很快。' },
    { id:'es-v80', lang:'es', level:'B1', word:'computadora', phonetic:'/kom-pu-ta-ˈðo-ra/', meaning:'电脑', example:'Mi computadora es nueva.', translation:'我的电脑是新的。' },
    { id:'es-v81', lang:'es', level:'B1', word:'internet', phonetic:'/in-ter-ˈnet/', meaning:'互联网', example:'Internet es muy útil.', translation:'互联网很有用。' },
    { id:'es-v82', lang:'es', level:'B1', word:'universidad', phonetic:'/u-ni-βeɾ-si-ˈðað/', meaning:'大学', example:' Estudio en la universidad.', translation:'我在大学学习。' },
    { id:'es-v83', lang:'es', level:'B1', word:'gobierno', phonetic:'/ɡo-βjeɾ-ˈno/', meaning:'政府', example:'El gobierno tomó una decisión.', translation:'政府做了一个决定。' },
    { id:'es-v84', lang:'es', level:'B1', word:'economía', phonetic:'/e-ko-no-ˈmi-a/', meaning:'经济', example:'La economía está creciendo.', translation:'经济正在增长。' },
    { id:'es-v85', lang:'es', level:'B1', word:'medio ambiente', phonetic:'/ˈme-ðjo am-ˈbjen-te/', meaning:'环境', example:'Protect el medio ambiente.', translation:'保护环境。' },
    { id:'es-v86', lang:'es', level:'B1', word:'contaminación', phonetic:'/kon-ta-mi-na-ˈsjon/', meaning:'污染', example:'La contaminación es un problema.', translation:'污染是一个问题。' },
    { id:'es-v87', lang:'es', level:'B1', word:'entrevista', phonetic:'/en-tɾe-ˈβis-ta/', meaning:'面试', example:'Tengo una entrevista mañana.', translation:'我明天有一个面试。' },
    { id:'es-v88', lang:'es', level:'B1', word:'currículum', phonetic:'/ku-ˈrri-ku-lum/', meaning:'简历', example:'Envía tu currículum.', translation:'发送你的简历。' },
    { id:'es-v89', lang:'es', level:'B1', word:'feliz', phonetic:'/fe-ˈliθ/', meaning:'快乐', example:'Estoy muy feliz hoy.', translation:'我今天很开心。' },
    { id:'es-v90', lang:'es', level:'B1', word:'triste', phonetic:'/ˈtɾis-te/', meaning:'悲伤', example:'Me siento triste.', translation:'我感到悲伤。' },
    { id:'es-v91', lang:'es', level:'B1', word:'emocionado', phonetic:'/e-mo-θjo-ˈna-ðo/', meaning:'激动', example:'Estoy emocionado por el viaje.', translation:'我对旅行感到激动。' },
    { id:'es-v92', lang:'es', level:'B2', word:'hipótesis', phonetic:'/i-ˈpo-te-sis/', meaning:'假设', example:'Mi hipótesis es diferente.', translation:'我的假设不同。' },
    { id:'es-v93', lang:'es', level:'B2', word:'metodología', phonetic:'/me-to-ðo-lo-ˈxi-a/', meaning:'方法论', example:'La metodología es importante.', translation:'方法论很重要。' },
    { id:'es-v94', lang:'es', level:'B2', word:'análisis', phonetic:'/a-ˈna-li-sis/', meaning:'分析', example:'El análisis es profundo.', translation:'分析很深入。' },
    { id:'es-v95', lang:'es', level:'B2', word:'inversión', phonetic:'/in-βeɾ-ˈsjon/', meaning:'投资', example:'La inversión fue exitosa.', translation:'投资很成功。' },
    { id:'es-v96', lang:'es', level:'B2', word:'presupuesto', phonetic:'/pɾe-su-ˈpwes-to/', meaning:'预算', example:'El presupuesto es limitado.', translation:'预算有限。' },
    { id:'es-v97', lang:'es', level:'B2', word:'marketing', phonetic:'/ˈmaɾ-ke-tin/', meaning:'市场营销', example:'El marketing es clave.', translation:'市场营销是关键。' },
    { id:'es-v98', lang:'es', level:'B2', word:'competencia', phonetic:'/kom-pe-ˈten-θja/', meaning:'竞争', example:'La competencia es fuerte.', translation:'竞争很激烈。' },
    { id:'es-v99', lang:'es', level:'B2', word:'negociación', phonetic:'/ne-ɣo-θja-ˈsjon/', meaning:'谈判', example:'La negociación fue difícil.', translation:'谈判很困难。' },
    { id:'es-v100', lang:'es', level:'B2', word:'libertad', phonetic:'/li-βeɾ-ˈtað/', meaning:'自由', example:'La libertad es importante.', translation:'自由很重要。' },
    { id:'es-v101', lang:'es', level:'B2', word:'igualdad', phonetic:'/i-ɣwal-ˈðað/', meaning:'平等', example:'Buscamos la igualdad.', translation:'我们追求平等。' },
    { id:'es-v102', lang:'es', level:'B2', word:'justicia', phonetic:'/xus-ˈti-θja/', meaning:'正义', example:'La justicia es fundamental.', translation:'正义是根本。' },
    { id:'es-v103', lang:'es', level:'C1', word:'paradigma', phonetic:'/pa-ɾa-ˈðiɣ-ma/', meaning:'范式', example:'Un nuevo paradigma emerge.', translation:'一个新范式正在出现。' },
    { id:'es-v104', lang:'es', level:'C1', word:'discurso', phonetic:'/dis-ˈkuɾ-so/', meaning:'演讲/话语', example:'El discurso fue brillante.', translation:'演讲很精彩。' },
    { id:'es-v105', lang:'es', level:'C1', word:'retórica', phonetic:'/re-ˈto-ɾi-ka/', meaning:'修辞', example:'La retórica es un arte.', translation:'修辞是一门艺术。' },
    { id:'es-v106', lang:'es', level:'C1', word:'bibliografía', phonetic:'/bi-βlio-ɣɾa-ˈfi-a/', meaning:'参考文献', example:'La bibliography está completa.', translation:'参考文献是完整的。' },
    { id:'es-v107', lang:'es', level:'C1', word:'referencia', phonetic:'/re-fe-ˈren-θja/', meaning:'参考', example:'Sin referencia no hay estudio.', translation:'没有参考就没有研究。' },
    { id:'es-v108', lang:'es', level:'C1', word:'solidaridad', phonetic:'/so-li-ða-ɾi-ˈðað/', meaning:'团结', example:'La solidaridad es esencial.', translation:'团结是必要的。' },
    { id:'es-v109', lang:'es', level:'C1', word:'tolerancia', phonetic:'/to-le-ˈɾan-θja/', meaning:'宽容', example:'La tolerancia es un valor.', translation:'宽容是一种美德。' },
    { id:'es-v110', lang:'es', level:'C1', word:'diversidad', phonetic:'/di-βeɾ-si-ˈðað/', meaning:'多样性', example:'La diversidad nos enriquece.', translation:'多样性使我们丰富。' },
    { id:'es-v111', lang:'es', level:'C1', word:'identidad', phonetic:'/i-ðen-ti-ˈðað/', meaning:'身份', example:'Mi identidad es importante.', translation:'我的身份很重要。' },
    { id:'es-v112', lang:'es', level:'C1', word:'memoria', phonetic:'/me-ˈmo-ɾja/', meaning:'记忆', example:'La memoria es frágil.', translation:'记忆是脆弱的。' },
    { id:'es-v113', lang:'es', level:'C1', word:'tradición', phonetic:'/tɾa-ði-ˈsjon/', meaning:'传统', example:'Respetamos la tradición.', translation:'我们尊重传统。' },
    { id:'es-v114', lang:'es', level:'C1', word:'modernidad', phonetic:'/mo-ðeɾ-ni-ˈðað/', meaning:'现代性', example:'La modernidad trae cambios.', translation:'现代性带来变化。' },
    { id:'es-v115', lang:'es', level:'C2', word:'concupiscencia', phonetic:'/kon-ku-pis-ˈsen-θja/', meaning:'贪欲', example:'La concupiscencia mueve al mundo.', translation:'贪欲驱动世界。' },
    { id:'es-v116', lang:'es', level:'C2', word:'resquemor', phonetic:'/res-ki-ˈmoɾ/', meaning:'怨恨', example:'Siento un profundo resquemor.', translation:'我感到深深的怨恨。' },
    { id:'es-v117', lang:'es', level:'C2', word:'efímero', phonetic:'/e-ˈfi-me-ɾo/', meaning:'短暂的', example:'La gloria es efímera.', translation:'荣耀是短暂的。' },
    { id:'es-v118', lang:'es', level:'C2', word:'perenne', phonetic:'/pe-ˈɾen-ne/', meaning:'永恒的', example:'El amor es perenne.', translation:'爱是永恒的。' },
    { id:'es-v119', lang:'es', level:'C2', word:'sublime', phonetic:'/su-ˈβli-me/', meaning:'崇高的', example:'Una belleza sublime.', translation:'一种崇高的美。' },
    { id:'es-v120', lang:'es', level:'C2', word:'inefable', phonetic:'/i-ne-ˈfa-βle/', meaning:'难以形容的', example:'Una alegría inefable.', translation:'一种难以形容的喜悦。' },
    { id:'es-v121', lang:'es', level:'C2', word:'noción', phonetic:'/no-ˈsjon/', meaning:'概念', example:'La nocíon de libertad.', translation:'自由的概念。' },
    { id:'es-v122', lang:'es', level:'C2', word:'arbitrio', phonetic:'/aɾ-ˈβi-tɾjo/', meaning:'自主', example:'El libre arbitrio es debatido.', translation:'自由意志被争论。' },
    { id:'es-v123', lang:'es', level:'C2', word:'acervo', phonetic:'/a-ˈθeɾ-βo/', meaning:'文化遗产', example:'El acervo cultural es rico.', translation:'文化遗产丰富。' },
    { id:'es-v124', lang:'es', level:'C2', word:'diatriba', phonetic:'/dja-ˈtɾi-βa/', meaning:'抨击', example:'Es una diatriba contra el sistema.', translation:'这是对体制的抨击。' }
  ],
  fr: [
    { id:'fr-v1', lang:'fr', level:'A1', word:'bonjour', phonetic:'/bɔ̃-ʒuʁ/', meaning:'你好', example:'Bonjour, je m\'appelle Paul.', translation:'你好，我叫保罗。' },
    { id:'fr-v2', lang:'fr', level:'A1', word:'merci', phonetic:'/mɛʁ-si/', meaning:'谢谢', example:'Merci beaucoup.', translation:'非常感谢。' },
    { id:'fr-v3', lang:'fr', level:'A1', word:'eau', phonetic:'/o/', meaning:'水', example:'Un verre d\'eau, s\'il vous plaît.', translation:'请给我一杯水。' },
    { id:'fr-v4', lang:'fr', level:'A1', word:'livre', phonetic:'/livʁ/', meaning:'书', example:'Ce livre est intéressant.', translation:'这本书很有趣。' },
    { id:'fr-v5', lang:'fr', level:'A1', word:'maison', phonetic:'/mɛ-zɔ̃/', meaning:'房子', example:'Ma maison est grande.', translation:'我的房子很大。' },
    { id:'fr-v6', lang:'fr', level:'A1', word:'ami', phonetic:'/a-mi/', meaning:'朋友', example:'Il est mon meilleur ami.', translation:'他是我最好的朋友。' },
    { id:'fr-v7', lang:'fr', level:'A1', word:'travail', phonetic:'/tʁa-vaj/', meaning:'工作', example:'Je vais au travail.', translation:'我去上班。' },
    { id:'fr-v8', lang:'fr', level:'A2', word:'petit-déjeuner', phonetic:'/pə-ti-de-ʒœ-ne/', meaning:'早餐', example:'Je prends le petit-déjeuner à sept.', translation:'我七点吃早餐。' },
    { id:'fr-v9', lang:'fr', level:'A2', word:'restaurant', phonetic:'/ʁes-to-ʁɑ̃/', meaning:'餐厅', example:'Le restaurant est fermé.', translation:'餐厅关门了。' },
    { id:'fr-v10', lang:'fr', level:'A2', word:'gare', phonetic:'/gaʁ/', meaning:'火车站', example:'La gare est loin.', translation:'火车站很远。' },
    { id:'fr-v11', lang:'fr', level:'A2', word:'intéressant', phonetic:'/ɛ̃-te-ʁɛ-sɑ̃/', meaning:'有趣的', example:'C\'est une idée intéressante.', translation:'是一个有趣的想法。' },
    { id:'fr-v12', lang:'fr', level:'A2', word:'important', phonetic:'/ɛ̃-pɔʁ-tɑ̃/', meaning:'重要的', example:'C\'est très important.', translation:'非常重要。' },
    { id:'fr-v13', lang:'fr', level:'A2', word:'différent', phonetic:'/di-fe-ʁɑ̃/', meaning:'不同的', example:'C\'est très différent.', translation:'非常不同。' },
    { id:'fr-v14', lang:'fr', level:'B1', word:'opportunité', phonetic:'/o-pɔʁ-ty-ni-te/', meaning:'机会', example:'C\'est une belle opportunité.', translation:'这是个好机会。' },
    { id:'fr-v15', lang:'fr', level:'B1', word:'environnement', phonetic:'/ɑ̃-vi-ʁɔn-mɑ̃/', meaning:'环境', example:'L\'environnement est important.', translation:'环境很重要。' },
    { id:'fr-v16', lang:'fr', level:'B1', word:'relation', phonetic:'/ʁə-la-sjɔ̃/', meaning:'关系', example:'J\'ai une bonne relation avec lui.', translation:'我和他关系很好。' },
    { id:'fr-v17', lang:'fr', level:'B1', word:'connaissance', phonetic:'/ko-nɛ-sɑ̃s/', meaning:'知识/熟人', example:'J\'ai des connaissances en français.', translation:'我有法语知识。' },
    { id:'fr-v18', lang:'fr', level:'B1', word:'recommander', phonetic:'/ʁə-kɔ-mɑ̃-de/', meaning:'推荐', example:'Je te recommande ce livre.', translation:'我推荐你这本书。' },
    { id:'fr-v19', lang:'fr', level:'B2', word:'controversé', phonetic:'/kɔ̃-tʁɔ-ve-se/', meaning:'有争议的', example:'C\'est un sujet très controversé.', translation:'这是一个很有争议的话题。' },
    { id:'fr-v20', lang:'fr', level:'B2', word:'alternative', phonetic:'/al-tɛʁ-na-tiv/', meaning:'替代方案', example:'Y a-t-il une alternative?', translation:'有替代方案吗？' },
    { id:'fr-v21', lang:'fr', level:'B2', word:'conséquence', phonetic:'/kɔ̃-se-kɑ̃s/', meaning:'后果', example:'Il faut penser aux conséquences.', translation:'必须考虑后果。' },
    { id:'fr-v22', lang:'fr', level:'B2', word:'participer', phonetic:'/paʁ-ti-si-pe/', meaning:'参与', example:'Tout le monde doit participer.', translation:'每个人都必须参与。' },
    { id:'fr-v23', lang:'fr', level:'B2', word:'enquêter', phonetic:'/ɑ̃-ke-te/', meaning:'调查', example:'Nous enquêtons sur l\'affaire.', translation:'我们正在调查此事。' },
    { id:'fr-v24', lang:'fr', level:'C1', word:'perspicace', phonetic:'/pɛʁ-spi-kas/', meaning:'敏锐的', example:'Une analyse perspicace.', translation:'敏锐的分析。' },
    { id:'fr-v25', lang:'fr', level:'C1', word:'pragmatique', phonetic:'/pʁag-ma-tik/', meaning:'务实的', example:'Une approche pragmatique.', translation:'务实的方法。' },
    { id:'fr-v26', lang:'fr', level:'C1', word:'éloquent', phonetic:'/e-lɔ-kɑ̃/', meaning:'雄辩的', example:'Un discours éloquent.', translation:'一场雄辩的演讲。' },
    { id:'fr-v27', lang:'fr', level:'C2', word:'magnanime', phonetic:'/ma-ɲa-nim/', meaning:'宽宏大量的', example:'Il a été magnanime.', translation:'他一直很宽宏大量。' },
    { id:'fr-v28', lang:'fr', level:'C2', word:'inéffable', phonetic:'/i-ne-fa-bl/', meaning:'难以形容的', example:'Une beauté inéffable.', translation:'难以形容的美。' },
    { id:'fr-v29', lang:'fr', level:'C2', word:'éphémère', phonetic:'/e-fe-mɛʁ/', meaning:'短暂的', example:'La gloire est éphémère.', translation:'荣耀是短暂的。' },
    { id:'fr-v30', lang:'fr', level:'C2', word:'équanimité', phonetic:'/e-kwa-ni-mi-te/', meaning:'镇定', example:'Il a gardé son équanimation.', translation:'他保持了镇定。' },
    { id:'fr-v31', lang:'fr', level:'A1', word:'au revoir', phonetic:'/o ʁə-vwaʁ/', meaning:'再见', example:'Au revoir! À demain.', translation:'再见！明天见。' },
    { id:'fr-v32', lang:'fr', level:'A1', word:'s\'il vous plaît', phonetic:'/sil vu plɛ/', meaning:'请', example:'Un café, s\'il vous plaît.', translation:'请来一杯咖啡。' },
    { id:'fr-v33', lang:'fr', level:'A1', word:'pardon', phonetic:'/paʁ.dɔ̃/', meaning:'对不起/抱歉', example:'Pardon, où est la gare?', translation:'抱歉，车站在哪里？' },
    { id:'fr-v34', lang:'fr', level:'A1', word:'bonsoir', phonetic:'/bɔ̃-swaʁ/', meaning:'晚上好', example:'Bonsoir, Madame.', translation:'晚上好，女士。' },
    { id:'fr-v35', lang:'fr', level:'A1', word:'bonne nuit', phonetic:'/bɔn nɥi/', meaning:'晚安', example:'Bonne nuit! Dors bien.', translation:'晚安！睡个好觉。' },
    { id:'fr-v36', lang:'fr', level:'A1', word:'un', phonetic:'/œ̃/', meaning:'一', example:'J\'ai un frère.', translation:'我有一个兄弟。' },
    { id:'fr-v37', lang:'fr', level:'A1', word:'deux', phonetic:'/dø/', meaning:'二', example:'Deux cafés, s\'il vous plaît.', translation:'请来两杯咖啡。' },
    { id:'fr-v38', lang:'fr', level:'A1', word:'trois', phonetic:'/tʁwa/', meaning:'三', example:'J\'ai trois livres.', translation:'我有三本书。' },
    { id:'fr-v39', lang:'fr', level:'A1', word:'quatre', phonetic:'/katʁ/', meaning:'四', example:'Quatre personnes.', translation:'四个人。' },
    { id:'fr-v40', lang:'fr', level:'A1', word:'cinq', phonetic:'/sɛ̃k/', meaning:'五', example:'J\'ai cinq amis.', translation:'我有五个朋友。' },
    { id:'fr-v41', lang:'fr', level:'A1', word:'mère', phonetic:'/mɛʁ/', meaning:'母亲', example:'Ma mère est professeur.', translation:'我母亲是老师。' },
    { id:'fr-v42', lang:'fr', level:'A1', word:'père', phonetic:'/pɛʁ/', meaning:'父亲', example:'Mon père travaille beaucoup.', translation:'我父亲工作很努力。' },
    { id:'fr-v43', lang:'fr', level:'A1', word:'sœur', phonetic:'/sœʁ/', meaning:'姐妹', example:'Ma sœur studie la médecine.', translation:'我姐姐学医。' },
    { id:'fr-v44', lang:'fr', level:'A1', word:'frère', phonetic:'/fʁɛʁ/', meaning:'兄弟', example:'Mon frère a cinq ans.', translation:'我弟弟五岁。' },
    { id:'fr-v45', lang:'fr', level:'A1', word:'rouge', phonetic:'/ʁuʒ/', meaning:'红色', example:'Une voiture rouge.', translation:'一辆红色汽车。' },
    { id:'fr-v46', lang:'fr', level:'A1', word:'bleu', phonetic:'/blø/', meaning:'蓝色', example:'Le ciel est bleu.', translation:'天空是蓝色的。' },
    { id:'fr-v47', lang:'fr', level:'A1', word:'vert', phonetic:'/vɛʁ/', meaning:'绿色', example:'J\'aime le couleur vert.', translation:'我喜欢绿色。' },
    { id:'fr-v48', lang:'fr', level:'A1', word:'blanc', phonetic:'/blɑ̃/', meaning:'白色', example:'La robe est blanche.', translation:'裙子是白色的。' },
    { id:'fr-v49', lang:'fr', level:'A1', word:'noir', phonetic:'/nwaʁ/', meaning:'黑色', example:'Un chat noir.', translation:'一只黑猫。' },
    { id:'fr-v50', lang:'fr', level:'A1', word:'aujourd\'hui', phonetic:'/o.ʒuʁ.dɥi/', meaning:'今天', example:'Aujourd\'hui, je suis content.', translation:'今天我很高兴。' },
    { id:'fr-v51', lang:'fr', level:'A1', word:'demain', phonetic:'/də.mɛ̃/', meaning:'明天', example:'À demain!', translation:'明天见！' },
    { id:'fr-v52', lang:'fr', level:'A1', word:'hier', phonetic:'/jɛʁ/', meaning:'昨天', example:'Hier, j\'ai vu un film.', translation:'昨天我看了一部电影。' },
    { id:'fr-v53', lang:'fr', level:'A1', word:'maintenant', phonetic:'/mɛ̃t.nɑ̃/', meaning:'现在', example:'Je travaille maintenant.', translation:'我现在在工作。' },
    { id:'fr-v54', lang:'fr', level:'A1', word:'toujours', phonetic:'/tu.ʒuʁ/', meaning:'总是', example:'Je suis toujours en retard.', translation:'我总是迟到。' },
    { id:'fr-v55', lang:'fr', level:'A1', word:'jamais', phonetic:'/ʒa.mɛ/', meaning:'从不', example:'Je ne mange jamais de viande.', translation:'我从不吃肉。' },
    { id:'fr-v56', lang:'fr', level:'A1', word:'être', phonetic:'/ɛtʁ/', meaning:'是', example:'Je suis étudiant.', translation:'我是学生。' },
    { id:'fr-v57', lang:'fr', level:'A1', word:'avoir', phonetic:'/a.vwaʁ/', meaning:'有', example:'J\'ai deux frères.', translation:'我有两个兄弟。' },
    { id:'fr-v58', lang:'fr', level:'A1', word:'faire', phonetic:'/fɛʁ/', meaning:'做', example:'Je fais mes devoirs.', translation:'我做作业。' },
    { id:'fr-v59', lang:'fr', level:'A1', word:'aller', phonetic:'/a.le/', meaning:'去', example:'Je vais au cinéma.', translation:'我去看电影。' },
    { id:'fr-v60', lang:'fr', level:'A1', word:'venir', phonetic:'/və.niʁ/', meaning:'来', example:'Je viens de l\'école.', translation:'我从学校来。' },
    { id:'fr-v61', lang:'fr', level:'A2', word:'ville', phonetic:'/vil/', meaning:'城市', example:'Paris est une belle ville.', translation:'巴黎是一个美丽的城市。' },
    { id:'fr-v62', lang:'fr', level:'A2', word:'rue', phonetic:'/ʁy/', meaning:'街道', example:'J\'habite dans cette rue.', translation:'我住在这条街上。' },
    { id:'fr-v63', lang:'fr', level:'A2', word:'voiture', phonetic:'/vwa.tyʁ/', meaning:'汽车', example:'Ma voiture est rouge.', translation:'我的汽车是红色的。' },
    { id:'fr-v64', lang:'fr', level:'A2', word:'autobus', phonetic:'/o.to.bys/', meaning:'公交车', example:'Je prends l\'autobus.', translation:'我坐公交车。' },
    { id:'fr-v65', lang:'fr', level:'A2', word:'médecin', phonetic:'/meds.ɛ̃/', meaning:'医生', example:'Le médecin m\'a aidé.', translation:'医生帮了我。' },
    { id:'fr-v66', lang:'fr', level:'A2', word:'professeur', phonetic:'/pʁɔ.fɛ.sœʁ/', meaning:'老师', example:'Le professeur explique bien.', translation:'老师讲得很好。' },
    { id:'fr-v67', lang:'fr', level:'A2', word:'temps', phonetic:'/tɑ̃/', meaning:'时间/天气', example:'Je n\'ai pas le temps.', translation:'我没有时间。' },
    { id:'fr-v68', lang:'fr', level:'A2', word:'pluie', phonetic:'/plɥi/', meaning:'雨', example:'La pluie tombe.', translation:'在下雨。' },
    { id:'fr-v69', lang:'fr', level:'A2', word:'neige', phonetic:'/nɛʒ/', meaning:'雪', example:'Il y a de la neige.', translation:'有雪。' },
    { id:'fr-v70', lang:'fr', level:'A2', word:'passeport', phonetic:'/pas.pɔʁ/', meaning:'护照', example:'J\'ai besoin de mon passeport.', translation:'我需要护照。' },
    { id:'fr-v71', lang:'fr', level:'A2', word:'valise', phonetic:'/va.liz/', meaning:'行李箱', example:'Ma valise est lourde.', translation:'我的行李箱很重。' },
    { id:'fr-v72', lang:'fr', level:'A2', word:'tête', phonetic:'/tɛt/', meaning:'头', example:'J\'ai mal à la tête.', translation:'我头疼。' },
    { id:'fr-v73', lang:'fr', level:'A2', word:'main', phonetic:'/mɛ̃/', meaning:'手', example:'Donne-moi la main.', translation:'把手给我。' },
    { id:'fr-v74', lang:'fr', level:'A2', word:'chemise', phonetic:'/ʃə.miz/', meaning:'衬衫', example:'Cette chemise est belle.', translation:'这件衬衫很漂亮。' },
    { id:'fr-v75', lang:'fr', level:'A2', word:'chaussure', phonetic:'/ʃo.syʁ/', meaning:'鞋子', example:'J\'aime ces chaussures.', translation:'我喜欢这些鞋子。' },
    { id:'fr-v76', lang:'fr', level:'A2', word:'France', phonetic:'/fʁɑ̃s/', meaning:'法国', example:'La France est belle.', translation:'法国很美。' },
    { id:'fr-v77', lang:'fr', level:'A2', word:'Mexique', phonetic:'/mɛk.sik/', meaning:'墨西哥', example:'Le Mexique a beaucoup d\'histoire.', translation:'墨西哥有很多历史。' },
    { id:'fr-v78', lang:'fr', level:'A2', word:'Argentine', phonetic:'/aʁ.ʒɑ̃.tin/', meaning:'阿根廷', example:'L\'Argentine est grande.', translation:'阿根廷很大。' },
    { id:'fr-v79', lang:'fr', level:'B1', word:'ordinateur', phonetic:'/ɔʁ.di.na.tœʁ/', meaning:'电脑', example:'Mon ordinateur est neuf.', translation:'我的电脑是新的。' },
    { id:'fr-v80', lang:'fr', level:'B1', word:'internet', phonetic:'/i.nɛʁ.nɛt/', meaning:'互联网', example:'Internet est utile.', translation:'互联网很有用。' },
    { id:'fr-v81', lang:'fr', level:'B1', word:'courriel', phonetic:'/ku.ʁjɛl/', meaning:'电子邮件', example:'Envoie-moi un courriel.', translation:'给我发一封电子邮件。' },
    { id:'fr-v82', lang:'fr', level:'B1', word:'application', phonetic:'/a.pli.ka.sjɔ̃/', meaning:'应用程序', example:'J\'utilise cette application.', translation:'我用这个应用程序。' },
    { id:'fr-v83', lang:'fr', level:'B1', word:'universités', phonetic:'/y.ni.vɛʁ.si.te/', meaning:'大学', example:'J\'étudie à l\'université.', translation:'我在大学学习。' },
    { id:'fr-v84', lang:'fr', level:'B1', word:'gouvernement', phonetic:'/ɡu.vɛʁ.nə.mɑ̃/', meaning:'政府', example:'Le gouvernement a décidé.', translation:'政府决定了。' },
    { id:'fr-v85', lang:'fr', level:'B1', word:'économie', phonetic:'/e.kɔ.nɔ.mi/', meaning:'经济', example:'L\'économie grandit.', translation:'经济在增长。' },
    { id:'fr-v86', lang:'fr', level:'B1', word:'environnement', phonetic:'/ɑ̃.vi.ʁɔn.mɑ̃/', meaning:'环境', example:'Protect l\'environnement.', translation:'保护环境。' },
    { id:'fr-v87', lang:'fr', level:'B1', word:'pollution', phonetic:'/pɔ.ly.sjɔ̃/', meaning:'污染', example:'La pollution est un problème.', translation:'污染是一个问题。' },
    { id:'fr-v88', lang:'fr', level:'B1', word:'entretien', phonetic:'/ɑ̃.tʁə.tjɛ̃/', meaning:'面试', example:'J\'ai un entretien demain.', translation:'我明天有面试。' },
    { id:'fr-v89', lang:'fr', level:'B1', word:'CV', phonetic:'/se.ve/', meaning:'简历', example:'Envoie ton CV.', translation:'发送你的简历。' },
    { id:'fr-v90', lang:'fr', level:'B1', word:'heureux', phonetic:'/œ.ʁø/', meaning:'快乐', example:'Je suis très heureux.', translation:'我很快乐。' },
    { id:'fr-v91', lang:'fr', level:'B1', word:'triste', phonetic:'/tʁist/', meaning:'悲伤', example:'Je me sens triste.', translation:'我感到悲伤。' },
    { id:'fr-v92', lang:'fr', level:'B1', word:'excité', phonetic:'/ɛk.si.te/', meaning:'激动', example:'Je suis excité pour le voyage.', translation:'我对旅行感到激动。' },
    { id:'fr-v93', lang:'fr', level:'B2', word:'hypothèse', phonetic:'/i.pɔ.tɛz/', meaning:'假设', example:'Mon hypothèse est différente.', translation:'我的假设不同。' },
    { id:'fr-v94', lang:'fr', level:'B2', word:'méthodologie', phonetic:'/me.tɔ.dɔ.lɔ.ʒi/', meaning:'方法论', example:'La méthodologie est importante.', translation:'方法论很重要。' },
    { id:'fr-v95', lang:'fr', level:'B2', word:'analyse', phonetic:'/a.na.liz/', meaning:'分析', example:'L\'analyse est profonde.', translation:'分析很深入。' },
    { id:'fr-v96', lang:'fr', level:'B2', word:'investissement', phonetic:'/ɛ̃.vɛs.tis.mɑ̃/', meaning:'投资', example:'L\'investissement a réussi.', translation:'投资成功了。' },
    { id:'fr-v97', lang:'fr', level:'B2', word:'budget', phonetic:'/byd.ʒɛ/', meaning:'预算', example:'Le budget est limité.', translation:'预算有限。' },
    { id:'fr-v98', lang:'fr', level:'B2', word:'marketing', phonetic:'/maʁ.ke.tiŋ/', meaning:'市场营销', example:'Le marketing est essentiel.', translation:'市场营销是必要的。' },
    { id:'fr-v99', lang:'fr', level:'B2', word:'compétition', phonetic:'/kɔ̃.pe.ti.sjɔ̃/', meaning:'竞争', example:'La compétition est forte.', translation:'竞争很激烈。' },
    { id:'fr-v100', lang:'fr', level:'B2', word:'négociation', phonetic:'/ne.ɡɔ.sja.sjɔ̃/', meaning:'谈判', example:'La négociation était difficile.', translation:'谈判很困难。' },
    { id:'fr-v101', lang:'fr', level:'B2', word:'liberté', phonetic:'/li.bɛʁ.te/', meaning:'自由', example:'La liberté est importante.', translation:'自由很重要。' },
    { id:'fr-v102', lang:'fr', level:'B2', word:'égalité', phonetic:'/e.ɡa.li.te/', meaning:'平等', example:'Nous cherchons l\'égalité.', translation:'我们追求平等。' },
    { id:'fr-v103', lang:'fr', level:'B2', word:'justice', phonetic:'/ʒys.tis/', meaning:'正义', example:'La justice est fondamentale.', translation:'正义是根本。' },
    { id:'fr-v104', lang:'fr', level:'C1', word:'paradigme', phonetic:'/pa.ʁa.diɡm/', meaning:'范式', example:'Un nouveau paradigme émerge.', translation:'一个新范式正在出现。' },
    { id:'fr-v105', lang:'fr', level:'C1', word:'discours', phonetic:'/dis.kuʁ/', meaning:'演讲/话语', example:'Le discours était brillant.', translation:'演讲很精彩。' },
    { id:'fr-v106', lang:'fr', level:'C1', word:'rhétorique', phonetic:'/ʁe.tɔ.ʁik/', meaning:'修辞', example:'La rhétorique est un art.', translation:'修辞是一门艺术。' },
    { id:'fr-v107', lang:'fr', level:'C1', word:'bibliographie', phonetic:'/bi.bli.ɔ.ɡʁa.fi/', meaning:'参考文献', example:'La bibliographie est complète.', translation:'参考文献是完整的。' },
    { id:'fr-v108', lang:'fr', level:'C1', word:'référence', phonetic:'/ʁe.fe.ʁɑ̃s/', meaning:'参考', example:'Sans référence, pas d\'étude.', translation:'没有参考就没有研究。' },
    { id:'fr-v109', lang:'fr', level:'C1', word:'solidarité', phonetic:'/sɔ.li.da.ʁi.te/', meaning:'团结', example:'La solidarité est essentielle.', translation:'团结是必要的。' },
    { id:'fr-v110', lang:'fr', level:'C1', word:'tolérance', phonetic:'/tɔ.le.ʁɑ̃s/', meaning:'宽容', example:'La tolérance est une vertu.', translation:'宽容是一种美德。' },
    { id:'fr-v111', lang:'fr', level:'C1', word:'diversité', phonetic:'/di.vɛʁ.si.te/', meaning:'多样性', example:'La diversité nous enrichit.', translation:'多样性使我们丰富。' },
    { id:'fr-v112', lang:'fr', level:'C1', word:'identités', phonetic:'/i.dɑ̃.ti.te/', meaning:'身份', example:'Mon identité est importante.', translation:'我的身份很重要。' },
    { id:'fr-v113', lang:'fr', level:'C1', word:'mémoire', phonetic:'/me.mwaʁ/', meaning:'记忆', example:'La mémoire est fragile.', translation:'记忆是脆弱的。' },
    { id:'fr-v114', lang:'fr', level:'C1', word:'tradition', phonetic:'/tʁa.di.sjɔ̃/', meaning:'传统', example:'Nous respectons la tradition.', translation:'我们尊重传统。' },
    { id:'fr-v115', lang:'fr', level:'C1', word:'modernité', phonetic:'/mɔ.dɛʁ.ni.te/', meaning:'现代性', example:'La modernité apporte des changements.', translation:'现代性带来变化。' },
    { id:'fr-v116', lang:'fr', level:'C2', word:'magnanime', phonetic:'/ma.ɲa.nim/', meaning:'宽宏大量的', example:'Il a été magnanime.', translation:'他一直很宽宏大量。' },
    { id:'fr-v117', lang:'fr', level:'C2', word:'inéffable', phonetic:'/i.ne.fa.bl/', meaning:'难以形容的', example:'Une beauté inéffable.', translation:'难以形容的美。' },
    { id:'fr-v118', lang:'fr', level:'C2', word:'éphémère', phonetic:'/e.fe.mɛʁ/', meaning:'短暂的', example:'La gloire est éphémère.', translation:'荣耀是短暂的。' },
    { id:'fr-v119', lang:'fr', level:'C2', word:'équanimité', phonetic:'/e.kwa.ni.mi.te/', meaning:'镇定', example:'Il a gardé son équabilité.', translation:'他保持了镇定。' },
    { id:'fr-v120', lang:'fr', level:'C2', word:'sublime', phonetic:'/sy.blim/', meaning:'崇高的', example:'Une beauté sublime.', translation:'一种崇高的美。' },
    { id:'fr-v121', lang:'fr', level:'C2', word:'notion', phonetic:'/no.sjɔ̃/', meaning:'概念', example:'La notion de liberté.', translation:'自由的概念。' },
    { id:'fr-v122', lang:'fr', level:'C2', word:'arbitre', phonetic:'/aʁ.bitʁ/', meaning:'裁判/仲裁者', example:'L\'arbitre a decides.', translation:'裁判做出了决定。' },
    { id:'fr-v123', lang:'fr', level:'C2', word:'patrimoine', phonetic:'/pa.tʁi.mwan/', meaning:'遗产', example:'Le patrimoine culturel est riche.', translation:'文化遗产丰富。' },
    { id:'fr-v124', lang:'fr', level:'C2', word:'diatribe', phonetic:'/dja.tʁib/', meaning:'抨击', example:'C\'est une diatribe contre le système.', translation:'这是对体制的抨击。' }
  ]
};

/* ===== 语法题库 GRAMMAR (每语言每级别 5-8 题) ===== */
const GRAMMAR = {
  en: [
    { id:'en-g1', lang:'en', level:'A1', rule:'一般现在时：主语为第三人称单数，动词加 -s/-es。',
      question:'She ___ to school every day.', options:['go','goes','going','gone'], answer:1, explain:'第三人称单数主语搭配动词 goes。' },
    { id:'en-g2', lang:'en', level:'A1', rule:'be 动词：I am / you are / he is / she is / it is / we are / they are。',
      question:'I ___ a student.', options:['is','are','am','be'], answer:2, explain:'I 搭配 am。' },
    { id:'en-g3', lang:'en', level:'A1', rule:'可数名词单数前加 a/an：元音开头用 an。',
      question:'I want ___ apple.', options:['a','an','some','one'], answer:1, explain:'apple 以元音开头，用 an。' },
    { id:'en-g4', lang:'en', level:'A1', rule:'基本疑问句结构：疑问词 + be + 主语。',
      question:'___ is she? She is my sister.', options:['What','Who','How','Where'], answer:1, explain:'询问身份用 Who。' },
    { id:'en-g5', lang:'en', level:'A2', rule:'现在进行时：am/is/are + V-ing。',
      question:'Look! The kids ___ in the park.', options:['play','plays','are playing','played'], answer:2, explain:'Look 提示正在进行，用 are playing。' },
    { id:'en-g6', lang:'en', level:'A2', rule:'一般过去时：规则动词加 -ed，不规则动词需记忆。',
      question:'Yesterday, he ___ a letter to his friend.', options:['write','writes','wrote','written'], answer:2, explain:'Yesterday 表过去，write 的过去式是 wrote。' },
    { id:'en-g7', lang:'en', level:'A2', rule:'频率副词：always/usually/often/sometimes/never 放在 be 动词之后，行为动词之前。',
      question:'She ___ goes to bed early.', options:['always','usual','most','much'], answer:0, explain:'always 是频率副词，放在行为动词 goes 之前。' },
    { id:'en-g8', lang:'en', level:'B1', rule:'现在完成时：have/has + 过去分词，表过去发生对现在的影响或经历。',
      question:'I ___ to Tokyo three times.', options:['have been','has been','went','go'], answer:0, explain:'three times 表经历，用 have been。' },
    { id:'en-g9', lang:'en', level:'B1', rule:'条件句零式：If + 现在时，主句也用现在时（客观真理/规律）。',
      question:'If you ___ water, it boils.', options:['heat','heated','will heat','would heat'], answer:0, explain:'客观真理，从句用一般现在时 heat。' },
    { id:'en-g10', lang:'en', level:'B1', rule:'原因连接词：because/as/since 引导原因从句。',
      question:'I stayed home ___ I was sick.', options:['because','although','so','while'], answer:0, explain:'because 引导原因状语从句。' },
    { id:'en-g11', lang:'en', level:'B2', rule:'虚拟语气：与现在事实相反，if 从句用过去时，主句用 would + 动词原形。',
      question:'If I were you, I ___ accept the offer.', options:['will','would','can','shall'], answer:1, explain:'与现在事实相反，主句用 would。' },
    { id:'en-g12', lang:'en', level:'B2', rule:'however/therefore/moreover/nevertheless 等高级连接词。',
      question:'It was raining; ___, we went for a walk.', options:['therefore','moreover','nevertheless','furthermore'], answer:2, explain:'nevertheless 尽管如此，表转折。' },
    { id:'en-g13', lang:'en', level:'B2', rule:'分词作定语：单个分词位于名词前，分词短语位于名词后。',
      question:'The ___ book belongs to me.', options:['interesting','interested','interest','interests'], answer:0, explain:'-ing 形容词描述事物的性质。' },
    { id:'en-g14', lang:'en', level:'C1', rule:'倒装结构：only + 状语位于句首，主句部分倒装。',
      question:'Only then ___ realize the truth.', options:['did I','I did','I do','do I'], answer:0, explain:'Only then 位于句首，主句倒装，用 did I。' },
    { id:'en-g15', lang:'en', level:'C1', rule:'wish + 过去完成时表与过去事实相反的愿望。',
      question:'I wish I ___ harder when I was young.', options:['study','studied','had studied','would study'], answer:2, explain:'与过去事实相反，用过去完成时 had studied。' },
    { id:'en-g16', lang:'en', level:'C2', rule:'高级修辞：not so much A as B 与其说 A 不如说 B。',
      question:'The problem is not so much the cost ___ the time.', options:['as','like','than','but'], answer:0, explain:'not so much ... as 固定搭配。' },
    { id:'en-g17', lang:'en', level:'C2', rule:'强调句：It is/was + 被强调部分 + that/who + 其他。',
      question:'___ the president who signed the document.', options:['It was','He was','That was','There was'], answer:0, explain:'It was ... who 是强调句型。' },
    { id:'en-g18', lang:'en', level:'A1', rule:'指示代词 this/that/these/those：this/that 指单数，these/those 指复数。',
      question:'___ is my book. ___ are your books.', options:['This...These','That...Those','This...Those','These...That'], answer:2, explain:'this/that 指单数，these/those 指复数。' },
    { id:'en-g19', lang:'en', level:'A1', rule:'there is/are：表示某地存在某人或某物。',
      question:'___ a cat on the table.', options:['There is','There are','There','It'], answer:0, explain:'单数 cat 用 there is。' },
    { id:'en-g20', lang:'en', level:'A1', rule:'have/has got：表示拥有，have got = have。',
      question:'She ___ a beautiful house.', options:['have got','has got','got','getting'], answer:1, explain:'she 作主语用 has got。' },
    { id:'en-g21', lang:'en', level:'A1', rule:'情态动词 can：表示能力，can + 动词原形。',
      question:'I ___ swim well.', options:['can','could','may','must'], answer:0, explain:'can 表示能力。' },
    { id:'en-g22', lang:'en', level:'A1', rule:'所有格 my/your/his/her：表示所属关系。',
      question:'This is ___ bag.', options:['I','me','my','mine'], answer:2, explain:'所有格后接名词。' },
    { id:'en-g23', lang:'en', level:'A1', rule:'方位介词 in/on/at：in 在里面，on 在上面，at 在某地。',
      question:'The book is ___ the table.', options:['in','on','at','to'], answer:1, explain:'在桌子上面用 on。' },
    { id:'en-g24', lang:'en', level:'A1', rule:'时间介词 in/on/at：in 月份/年份，on 具体日期，at 具体时刻。',
      question:'She was born ___ 1995.', options:['in','on','at','by'], answer:0, explain:'年份用 in。' },
    { id:'en-g25', lang:'en', level:'A1', rule:'like to/like doing：like to do 表示特定时刻，like doing 表示习惯。',
      question:'I ___ reading books. It is my hobby.', options:['like to','like','likes to','liked'], answer:1, explain:'习惯爱好用 like doing。' },
    { id:'en-g26', lang:'en', level:'A1', rule:'一般疑问句：be 动词/助动词提前。',
      question:'___ you a student?', options:['Is','Are','Do','Does'], answer:1, explain:'you 搭配 are。' },
    { id:'en-g27', lang:'en', level:'A1', rule:'选择疑问句：or 连接两个选项。',
      question:'Do you want tea ___ coffee?', options:['and','or','but','so'], answer:1, explain:'or 表示选择。' },
    { id:'en-g28', lang:'en', level:'A1', rule:'祈使句：用动词原形表示命令或请求。',
      question:'___ the door when you leave.', options:['Close','Closes','Closing','Closed'], answer:0, explain:'祈使句用动词原形。' },
    { id:'en-g29', lang:'en', level:'A1', rule:'形容词位置：形容词修饰名词时放在名词前。',
      question:'I saw a ___ movie.', options:['interesting','interested','interest','interests'], answer:0, explain:'形容词修饰名词放在前面。' },
    { id:'en-g30', lang:'en', level:'A1', rule:'副词位置：副词修饰动词时放在动词前后。',
      question:'She speaks English ___.', options:['fluent','fluently','fluence','fluentness'], answer:1, explain:'修饰动词用副词。' },
    { id:'en-g31', lang:'en', level:'A2', rule:'现在完成时 have/has + 过去分词：表过去对现在的影响。',
      question:'I ___ finished my homework.', options:['has','have','having','had'], answer:1, explain:'I 搭配 have。' },
    { id:'en-g32', lang:'en', level:'A2', rule:'一般过去时规则动词：动词加 -ed。',
      question:'Yesterday, I ___ to school.', options:['walk','walks','walked','walking'], answer:2, explain:'Yesterday 用过去时。' },
    { id:'en-g33', lang:'en', level:'A2', rule:'过去进行时 was/were + V-ing：表过去正在进行的动作。',
      question:'At 8 PM, I ___ dinner.', options:['have','having','had','was having'], answer:3, explain:'过去特定时刻用过去进行时。' },
    { id:'en-g34', lang:'en', level:'A2', rule:'一般将来时 will：表示将来要发生的动作。',
      question:'I ___ go to school tomorrow.', options:['will','would','can','must'], answer:0, explain:'tomorrow 用 will。' },
    { id:'en-g35', lang:'en', level:'A2', rule:'一般将来时 be going to：表示计划或打算。',
      question:'I ___ visit my grandmother next week.', options:['will','am going to','should','must'], answer:1, explain:'计划打算用 be going to。' },
    { id:'en-g36', lang:'en', level:'A2', rule:'形容词比较级：单音节词加 -er，多音节词加 more。',
      question:'This book is ___ than that one.', options:['interesting','more interesting','most interesting','interestinger'], answer:1, explain:'多音节词比较级用 more。' },
    { id:'en-g37', lang:'en', level:'A2', rule:'形容词最高级：加 -est 或 most。',
      question:'This is the ___ book I have ever read.', options:['good','better','best','most good'], answer:2, explain:'最高级用 best。' },
    { id:'en-g38', lang:'en', level:'A2', rule:'频度副词：always/usually/often/sometimes/never。',
      question:'She ___ eats breakfast at 7 AM.', options:['always','never','rarely','seldom'], answer:0, explain:'always 表示总是。' },
    { id:'en-g39', lang:'en', level:'A2', rule:'连词 and/but/or：and 表并列，but 表转折，or 表选择。',
      question:'I like tea ___ coffee.', options:['and','but','or','so'], answer:0, explain:'并列用 and。' },
    { id:'en-g40', lang:'en', level:'A2', rule:'连词 because/so：because 表原因，so 表结果。',
      question:'I stayed home ___ I was sick.', options:['because','but','or','and'], answer:0, explain:'because 表原因。' },
    { id:'en-g41', lang:'en', level:'A2', rule:'介词 in/on/at：in 在...里，on 在...上，at 在。',
      question:'He was born ___ July.', options:['in','on','at','by'], answer:1, explain:'月份用 in。' },
    { id:'en-g42', lang:'en', level:'A2', rule:'反身代词：myself/yourself/himself/herself 等。',
      question:'I bought a present for ___.', options:['me','my','myself','mine'], answer:2, explain:'反身代词表示反射到自身。' },
    { id:'en-g43', lang:'en', level:'A2', rule:'some/any：some 用于肯定句，any 用于否定疑问。',
      question:'I have ___ friends here.', options:['some','any','no','much'], answer:0, explain:'肯定句用 some。' },
    { id:'en-g44', lang:'en', level:'A2', rule:'There is/There are 的用法：单数用 is，复数用 are。',
      question:'___ many people in the park.', options:['There is','There are','There was','There were'], answer:1, explain:'复数 people 用 There are。' },
    { id:'en-g45', lang:'en', level:'A2', rule:'must/have to：must 表主观必须，have to 表客观需要。',
      question:'You ___ finish your homework.', options:['can','must','may','might'], answer:1, explain:'必须做用 must。' },
    { id:'en-g46', lang:'en', level:'A2', rule:'used to：表示过去的习惯。',
      question:'I ___ live in Paris. Now I live in London.', options:['used to','am used to','get used to','using'], answer:0, explain:'过去习惯用 used to。' },
    { id:'en-g47', lang:'en', level:'B1', rule:'条件句 If + 现在时，主句 will + 动词原形（1型）。',
      question:'If it ___ tomorrow, we will cancel the trip.', options:['rains','rained','will rain','rain'], answer:0, explain:'条件句从句用现在时。' },
    { id:'en-g48', lang:'en', level:'B1', rule:'条件句 If + 过去时，主句 would + 动词原形（2型）。',
      question:'If I ___ more money, I would travel more.', options:['have','had','would have','having'], answer:1, explain:'与现在事实相反，从句用过去时。' },
    { id:'en-g49', lang:'en', level:'B1', rule:'被动语态：be + 过去分词。',
      question:'The letter ___ by John yesterday.', options:['wrote','is written','was written','writes'], answer:2, explain:'过去被动 was written。' },
    { id:'en-g50', lang:'en', level:'B1', rule:'间接引语：said that / asked if。',
      question:'He said that he ___ the book.', options:['reads','read','has read','had read'], answer:1, explain:'间接引语根据主句调整时态。' },
    { id:'en-g51', lang:'en', level:'B1', rule:'现在完成进行时 have/has been + V-ing：持续到现在。',
      question:'I ___ studying English for 5 years.', options:['have','has','have been','has been'], answer:2, explain:'现在完成进行时 have been。' },
    { id:'en-g52', lang:'en', level:'B1', rule:'过去完成时 had + 过去分词：过去的过去。',
      question:'By the time he arrived, I ___ dinner.', options:['finish','finished','had finished','have finished'], answer:2, explain:'过去的过去用过去完成时。' },
    { id:'en-g53', lang:'en', level:'B1', rule:'关系代词 who/which/that：who 指人，which 指物，that 两者均可。',
      question:'The man ___ lives next door is a doctor.', options:['who','which','that','whom'], answer:0, explain:'指人用 who。' },
    { id:'en-g54', lang:'en', level:'B1', rule:'动名词 V-ing：可作主语、表语、宾语。',
      question:'___ is my favorite hobby.', options:['Swim','Swimming','Swims','To swim'], answer:1, explain:'动名词作主语。' },
    { id:'en-g55', lang:'en', level:'B1', rule:'不定式 to + 动词原形：表目的、打算、意图。',
      question:'I went to the store ___ some milk.', options:['buy','to buy','buying','bought'], answer:1, explain:'不定式表目的。' },
    { id:'en-g56', lang:'en', level:'B1', rule:'too...to：太...以至于不能。',
      question:'He is ___ tired ___ walk.', options:['too...to','enough...to','so...that','very...to'], answer:0, explain:'too...to 表否定结果。' },
    { id:'en-g57', lang:'en', level:'B1', rule:'enough...to：足够...可以。',
      question:'She is ___ old ___ vote.', options:['too...to','enough...to','so...that','very...to'], answer:1, explain:'enough...to 表肯定结果。' },
    { id:'en-g58', lang:'en', level:'B1', rule:'so...that：如此...以至于。',
      question:'He was ___ excited ___ could not speak.', options:['enough...to','too...to','so...that','such...that'], answer:2, explain:'so...that 表结果。' },
    { id:'en-g59', lang:'en', level:'B1', rule:'I think/believe/feel that：表达观点。',
      question:'___ that this is a good idea.', options:['I think','He thinks','She thought','We thinking'], answer:0, explain:'I think that... 是观点表达。' },
    { id:'en-g60', lang:'en', level:'B1', rule:'现在完成时与一般过去时的区分：有明确过去时间用过去时。',
      question:'I ___ to Paris in 2019.', options:['have been','was','went','has gone'], answer:2, explain:'有明确过去时间 in 2019 用过去时。' },
    { id:'en-g61', lang:'en', level:'B1', rule:'ago 与 before：ago 从现在算起，before 从过去算起。',
      question:'I met her two days ___.', options:['before','ago','since','yet'], answer:1, explain:'从现在算起用 ago。' },
    { id:'en-g62', lang:'en', level:'B1', rule:'already/just/never/ever：现在完成时的标志词。',
      question:'I have ___ finished my homework.', options:['yet','already','still','ago'], answer:1, explain:'already 是现在完成时标志。' },
    { id:'en-g63', lang:'en', level:'B2', rule:'虚拟语气 If I were：与现在事实相反。',
      question:'If I ___ you, I would take the job.', options:['am','was','were','be'], answer:2, explain:'虚拟语气用 were。' },
    { id:'en-g64', lang:'en', level:'B2', rule:'I wish + 过去时：与现在事实相反的愿望。',
      question:'I wish I ___ more time.', options:['have','had','have had','having'], answer:1, explain:'wish + 过去时表示与现在相反。' },
    { id:'en-g65', lang:'en', level:'B2', rule:'倒装句 Never/Seldom/Rarely + 助动词 + 主语。',
      question:'___ have I seen such a beautiful sunset.', options:['Never','Often','Always','Usually'], answer:0, explain:'否定副词位于句首要倒装。' },
    { id:'en-g66', lang:'en', level:'B2', rule:'Not only...but also：部分倒装。',
      question:'___ not only smart ___ also kind.', options:['She is...she','Is she...she','Is she...but','She is...but'], answer:0, explain:'Not only...but also 连接并列成分。' },
    { id:'en-g67', lang:'en', level:'B2', rule:'强调句 It is/was...that/who：强调特定成分。',
      question:'___ is John who helped me.', options:['He','It','This','That'], answer:1, explain:'强调句用 It is...that。' },
    { id:'en-g68', lang:'en', level:'B2', rule:'复杂条件句 If I had + 过去分词，would/could have + 过去分词（3型）。',
      question:'If I had studied harder, I ___ the exam.', options:['would pass','would have passed','will pass','would passed'], answer:1, explain:'与过去事实相反用 would have passed。' },
    { id:'en-g69', lang:'en', level:'B2', rule:'情态动词表推测：must/might/could/can\'t + have done。',
      question:'He ___ have left early. His car is still here.', options:['must','might','can','will'], answer:2, explain:'can 的否定式表推测。' },
    { id:'en-g70', lang:'en', level:'B2', rule:'情态动词表过去推测：must have done（一定）might have done（可能）。',
      question:'She looks tired. She ___ have been working all night.', options:['must','can','might not','could'], answer:0, explain:'must have done 表肯定推测。' },
    { id:'en-g71', lang:'en', level:'B2', rule:'修饰性副词：fortunately/unfortunately/interestingly/surprisingly。',
      question:'___, the weather was perfect for our trip.', options:['Unfortunately','Unfortunately not','Fortune','Fortunately'], answer:3, explain:'Fortunately 表示幸运地。' },
    { id:'en-g72', lang:'en', level:'B2', rule:'省略与替代：so/neither/nor + 助动词。',
      question:'I like coffee. ___ do I like tea.', options:['So','Neither','Either','Nor'], answer:1, explain:'否定句用 Neither。' },
    { id:'en-g73', lang:'en', level:'B2', rule:'关系从句 where/when/why：修饰表示地点/时间/原因的词。',
      question:'The town ___ I was born is small.', options:['who','which','where','that'], answer:2, explain:'修饰地点用 where。' },
    { id:'en-g74', lang:'en', level:'B2', rule:'非限制性定语从句：, who/which/where。',
      question:'My brother, ___ lives in Paris, is a teacher.', options:['who','which','that','whom'], answer:0, explain:'非限制性定语从句用 who。' },
    { id:'en-g75', lang:'en', level:'B2', rule:'现在分词作状语：表主动/进行。',
      question:'___ the door, I found my keys.', options:['Open','Opened','Opening','Having opened'], answer:3, explain:'Having opened 表主动且先于谓语。' },
    { id:'en-g76', lang:'en', level:'B2', rule:'过去分词作状语：表被动/完成。',
      question:'___ by the police, the thief was arrested.', options:['Catch','Catching','Caught','Being caught'], answer:2, explain:'过去分词表被动完成。' },
    { id:'en-g77', lang:'en', level:'B2', rule:'复合介词：because of/due to/owing to/on account of。',
      question:'___ the rain, we stayed home.', options:['Because','Because of','Since','As'], answer:1, explain:'后接名词用 because of。' },
    { id:'en-g78', lang:'en', level:'C1', rule:'学术写作：It is widely believed that / It is generally accepted that。',
      question:'___ that exercise improves mental health.', options:['It is believed','Believed','Being believed','Believe'], answer:0, explain:'被动表达用于学术写作。' },
    { id:'en-g79', lang:'en', level:'C1', rule:'学术写作：The findings suggest that / The evidence indicates that。',
      question:'Research ___ that sleep deprivation affects cognitive function.', options:['suggest','suggests','suggested','suggesting'], answer:1, explain:'动名词作主语时谓语用单数。' },
    { id:'en-g80', lang:'en', level:'C1', rule:'复杂从句嵌套：Because although / While when。',
      question:'___ he was tired, ___ he continued working.', options:['Although...because','Because...although','While...when','When...while'], answer:0, explain:'although 引导让步状语。' },
    { id:'en-g81', lang:'en', level:'C1', rule:'话语标记语：Furthermore, Moreover, Nevertheless, Consequently。',
      question:'The plan is expensive. ___, it will save time.', options:['However','Furthermore','Although','Since'], answer:1, explain:'Furthermore 表递进。' },
    { id:'en-g82', lang:'en', level:'C1', rule:'委婉表达：It might be argued that / It could be suggested that。',
      question:'___ that social media has negative effects on mental health.', options:['It might argue','It might be argued','Might be argued','argued'], answer:1, explain:'被动形式更委婉。' },
    { id:'en-g83', lang:'en', level:'C1', rule:'立场表达：There is evidence to suggest / There is reason to believe。',
      question:'___ to suggest that climate change is accelerating.', options:['There evidence','There is evidence','It is evidence','Evidence is'], answer:1, explain:'There is evidence to suggest 是立场表达。' },
    { id:'en-g84', lang:'en', level:'C1', rule:'被动替代：The research was conducted / The study was carried out。',
      question:'The experiment ___ by the lead researcher.', options:['conducted','was conducted','is conducted','has conducted'], answer:1, explain:'被动语态 was conducted。' },
    { id:'en-g85', lang:'en', level:'C1', rule:'高级名词化结构：The implementation of / The development of。',
      question:'___ new policies is underway.', options:['Implement','Implementing','The implementation','Implemented'], answer:2, explain:'名词化结构作主语。' },
    { id:'en-g86', lang:'en', level:'C1', rule:'条件句高级：Should it rain, we would cancel.（省略 if）。',
      question:'___ the project fail, we would lose everything.', options:['Would','Should','Could','Might'], answer:1, explain:'Should 开头表条件。' },
    { id:'en-g87', lang:'en', level:'C1', rule:'让步状语从句：Despite / In spite of / Although / Even though。',
      question:'___ the difficulties, they succeeded.', options:['Because','Although','Since','As'], answer:1, explain:'although 引导让步状语从句。' },
    { id:'en-g88', lang:'en', level:'C1', rule:'目的从句：so that / in order that + 情态动词。',
      question:'She studied hard ___ she could get a scholarship.', options:['so that','because','although','when'], answer:0, explain:'so that + 情态动词表目的。' },
    { id:'en-g89', lang:'en', level:'C1', rule:'结果状语从句：such...that / so...that。',
      question:'The movie was ___ interesting ___ everyone watched it.', options:['so...that','too...to','enough...to','very'], answer:0, explain:'so...that 表结果。' },
    { id:'en-g90', lang:'en', level:'C1', rule:'同位语从句：The fact that / The idea that / The news that。',
      question:'___ he resigned surprised everyone.', options:['Fact','The fact','That','What'], answer:1, explain:'The fact that 同位语从句。' },
    { id:'en-g91', lang:'en', level:'C1', rule:'形式主语 It is + adj + to / that：It is important that... / It is necessary to...。',
      question:'___ necessary to submit the report on time.', options:['This','It','That','What'], answer:1, explain:'形式主语用 It。' },
    { id:'en-g92', lang:'en', level:'C1', rule:'分隔不定式：to boldly go。',
      question:'He wanted ___ the challenge.', options:['to accept','to boldly accept','boldly to accept','accepting'], answer:1, explain:'副词可插入 to 和动词之间。' },
    { id:'en-g93', lang:'en', level:'C1', rule:'虚拟语气 recommend/suggest/advisable that + should + 原形。',
      question:'The doctor suggested that he ___ smoking.', options:['quit','quits','should quit','quitting'], answer:0, explain:'suggest + should + 原形。' },
    { id:'en-g94', lang:'en', level:'C1', rule:'倒装：Had I known, I would have helped。',
      question:'___ the truth, I would have told you.', options:['If I knew','Had I known','I had known','Knew I'], answer:1, explain:'Had + 主语 + 过去分词表倒装。' },
    { id:'en-g95', lang:'en', level:'C1', rule:'双否定：not without / cannot but / help but。',
      question:'I could ___ but agree with his decision.', options:['help','not','without','hard'], answer:0, explain:'cannot help but 是固定搭配。' },
    { id:'en-g96', lang:'en', level:'C2', rule:'高级修辞：Not so much A as B 与其说 A 不如说 B。',
      question:'Success is ___ luck ___ hard work.', options:['more...than','not so much...as','either...or','both...and'], answer:1, explain:'not so much...as 表比较。' },
    { id:'en-g97', lang:'en', level:'C2', rule:'高级倒装：Had it not been for + 名词，...。',
      question:'___ for your help, I would have failed.', options:['Not being','Had it not been','If it were not','Without being'], answer:1, explain:'Had it not been for 是倒装结构。' },
    { id:'en-g98', lang:'en', level:'C2', rule:'高级被动：Being + 过去分词 having been done。',
      question:'___ the project, the team celebrated.', options:['Complete','Completing','Having completed','Being completed'], answer:2, explain:'Having completed 表主动且先于谓语。' },
    { id:'en-g99', lang:'en', level:'C2', rule:'高级从句嵌套：The more...the more / Were it not for。',
      question:'___ you study, ___ you understand.', options:['More...more','The more...the more','Much...much','Very...well'], answer:1, explain:'The more...the more 固定结构。' },
    { id:'en-g100', lang:'en', level:'C2', rule:'高级虚拟：Were I to + 动词原形，I would + 动词原形。',
      question:'___ to choose, I would pick the second option.', options:['Having','Being','Were I','If I am'], answer:2, explain:'Were I to 是高级虚拟。' },
    { id:'en-g101', lang:'en', level:'C2', rule:'高级强调：It is not until...that。',
      question:'___ did I realize the truth.', options:['Only','Not until','Until','Ever'], answer:0, explain:'Only + 状语 + 倒装。' },
    { id:'en-g102', lang:'en', level:'C2', rule:'高级修辞：For all + 名词，... 表让步。',
      question:'___ his wealth, he remains unhappy.', options:['Despite','Although','For all','Because'], answer:2, explain:'For all 表让步。' },
    { id:'en-g103', lang:'en', level:'C2', rule:'高级连接：That said / All being well / Given that。',
      question:'___ everything, we should proceed as planned.', options:['Given that','Because','Since','While'], answer:0, explain:'Given that 表条件。' },
    { id:'en-g104', lang:'en', level:'C2', rule:'高级名词化：The long and short of it / The be-all and end-all。',
      question:'___ of it is that we need more time.', options:['The long and short','The first and last','The start and end','The A and Z'], answer:0, explain:'The long and short 是固定表达。' },
    { id:'en-g105', lang:'en', level:'C2', rule:'法律文体：Hereby / Thereafter / Whereas / Pursuant to。',
      question:'___ the parties agree, this contract is binding.', options:['Whereas','When','Since','Unless'], answer:0, explain:'Whereas 用于法律文体。' },
    { id:'en-g106', lang:'en', level:'C2', rule:'文学评论语言：The protagonist embodies / The imagery suggests。',
      question:'The author ___ the main character with heroic qualities.', options:['describes','portrays','imagines','thinks'], answer:1, explain:'portrays 用于文学评论。' },
    { id:'en-g107', lang:'en', level:'C2', rule:'精确时态选择：过去完成进行时 had been + V-ing。',
      question:'He ___ for three hours before he stopped.', options:['worked','had been working','was working','has worked'], answer:1, explain:'过去完成进行时表持续到过去某时。' },
    { id:'en-g108', lang:'en', level:'C2', rule:'高级省略：Than required / Than necessary / Than expected。',
      question:'The job took longer ___.', options:['than expected','that expected','as expected','then expected'], answer:0, explain:'Than expected 是省略结构。' },
    { id:'en-g109', lang:'en', level:'C2', rule:'高级虚拟：But for + 名词，...would have。',
      question:'___ your advice, I would have failed.', options:['But for','If not','Unless','Without'], answer:0, explain:'But for 表含蓄条件。' }
  ],
  ja: [
    { id:'ja-g1', lang:'ja', level:'A1', rule:'です/ます体：礼貌体，名词 + です，动词 + ます。',
      question:'私は学生___。', options:['です','ます','だ','でした'], answer:0, explain:'名词后接 です 表判断。' },
    { id:'ja-g2', lang:'ja', level:'A1', rule:'助词は：提示主题，读作 wa。',
      question:'これ___本です。', options:['は','が','を','に'], answer:0, explain:'これ 是主题，用 は。' },
    { id:'ja-g3', lang:'ja', level:'A1', rule:'助词が：提示主语/强调。',
      question:'___が学生です。', options:['彼','彼は','彼が','彼を'], answer:2, explain:'主语后接 が。' },
    { id:'ja-g4', lang:'ja', level:'A1', rule:'动词基本形（现在肯定）：五段/一段/カ变/サ变。',
      question:'学校に___。', options:['行く','行き','行って','行った'], answer:0, explain:'现在肯定形用基本形行く。' },
    { id:'ja-g5', lang:'ja', level:'A2', rule:'过去时ました形：动词连用形 + ました。',
      question:'昨日、本を___。', options:['読みます','読みました','読んでいます','読む'], answer:1, explain:'昨日 表过去，用 ました。' },
    { id:'ja-g6', lang:'ja', level:'A2', rule:'て形的多种用法：连接动作、许可、进行时等。',
      question:'このペンを___もいいですか。', options:['使い','使って','使え','使おう'], answer:1, explain:'てもいい 表许可。' },
    { id:'ja-g7', lang:'ja', level:'A2', rule:'い形容词活用：直接接名词或结尾变く接动词/なる。',
      question:'この料理は___です。', options:['美味しい','美味しく','美味しかっ','美味し'], answer:0, explain:'形容词原形做谓语。' },
    { id:'ja-g8', lang:'ja', level:'B1', rule:'使役形：V-せる/させる，表示让某人做。',
      question:'先生は学生に本を___。', options:['読ませます','読まれます','読みます','読めます'], answer:0, explain:'使役形：読む → 読ませる。' },
    { id:'ja-g9', lang:'ja', level:'B1', rule:'被动形：V-れる/られる。',
      question:'私は先生に___。', options:['叱られました','叱りました','叱らせました','叱り'], answer:0, explain:'被动形：叱る → 叱られる。' },
    { id:'ja-g10', lang:'ja', level:'B1', rule:'条件表达：ば/たら/なら/と。',
      question:'雨が___、傘を持って行きます。', options:['降ったら','降ると','降れば','降るなら'], answer:0, explain:'たら 表假设过去，意为如果下了雨。' },
    { id:'ja-g11', lang:'ja', level:'B2', rule:'敬语：尊敬语/谦让语/丁宁语。',
      question:'先生は明日いらっしゃいますか？(= ___)', options:['行きます','来ます・行きます・居ます','言います','食べます'], answer:1, explain:'いらっしゃる 是行く/来る/居る 的尊敬语。' },
    { id:'ja-g12', lang:'ja', level:'B2', rule:'推测：ようだ/らしい/みたいだ/そうだ。',
      question:'天気予報によると、明日雨が降る___。', options:['らしいです','します','ので','そうです'], answer:0, explain:'らしい 表有依据的推测。' },
    { id:'ja-g13', lang:'ja', level:'C1', rule:'授受动词：あげる/もらう/くれる/やる。',
      question:'友達に本を___。', options:['くれました','もらいました','あげました','やりました'], answer:2, explain:'给别人东西用 あげる。' },
    { id:'ja-g14', lang:'ja', level:'C1', rule:'と/ば/たら/なら 的区别（中高级）。',
      question:'お金が___、すぐ旅行に行く。', options:['あれば','あると','あったら','あるなら'], answer:0, explain:'ば 用于表假设条件。' },
    { id:'ja-g15', lang:'ja', level:'C2', rule:'古典日语助动词残留：べし/まじ/らむ 等。',
      question:'人は皆死す___。', options:['べき','べし','まじ','らむ'], answer:1, explain:'古典日语べし表当然，相当于现代的べきだ。' },
    { id:'ja-g16', lang:'ja', level:'A1', rule:'助词を：表示宾语（他动词的对象）。',
      question:'私はパンを___。', options:['食べます','食べる','食べて','食べた'], answer:0, explain:'パン 是宾语，用 を。' },
    { id:'ja-g17', lang:'ja', level:'A1', rule:'助词に：表示存在的地点或时间。',
      question:'駅___银行があります。', options:['に','で','は','が'], answer:0, explain:'表示存在的地点用 に。' },
    { id:'ja-g18', lang:'ja', level:'A1', rule:'助词で：表示动作发生的场所。',
      question:'私___学校で勉强します。', options:['は','が','に','で'], answer:0, explain:'で 表示动作场所。' },
    { id:'ja-g19', lang:'ja', level:'A1', rule:'助词と：表示共同做事的对象。',
      question:'友達___映画を見ます。', options:['と','に','で','を'], answer:0, explain:'と 表示共同行动的对象。' },
    { id:'ja-g20', lang:'ja', level:'A1', rule:'助词から：表示起点（时间或地点）。',
      question:'九時___勉强します。', options:['まで','から','まで','が'], answer:1, explain:'から 表示起点。' },
    { id:'ja-g21', lang:'ja', level:'A1', rule:'助词まで：表示终点。',
      question:'明日___休みです。', options:['から','まで','に','で'], answer:1, explain:'まで 表示终点。' },
    { id:'ja-g22', lang:'ja', level:'A1', rule:'これ/それ/あれ/どれ：指示代词。',
      question:'___は誰の本ですか。', options:['これ','それ','あれ','どれ'], answer:3, explain:'どれ 表示疑问，哪个。' },
    { id:'ja-g23', lang:'ja', level:'A1', rule:'この/その/あの/どの：连体指示词。',
      question:'___人は田中さんです。', options:['この','それ','あれ','どれ'], answer:0, explain:'この 修饰名词。' },
    { id:'ja-g24', lang:'ja', level:'A1', rule:'数量词 + 助数词：一つ、二つ等人。',
      question:'苹果を___ください。', options:['一つ','ニつ','三位','四つ'], answer:0, explain:'苹果 用 个数助数词。' },
    { id:'ja-g25', lang:'ja', level:'A1', rule:'动词分类：五段动词（一类）、一段动词（二类）、カ变/サ变（三类）。',
      question:'「食べる」是什么动词？', options:['五段动词','一段动词','カ变动词','サ变动词'], answer:1, explain:'一段动词以 ～る 结尾，前一个音节在 い/え 段。' },
    { id:'ja-g26', lang:'ja', level:'A1', rule:'ます形变位：去掉动词基本形词尾 + ます。',
      question:'行く的ます形是？', options:['行きます','行きません','行って','行った'], answer:0, explain:'行く → 行き + ます。' },
    { id:'ja-g27', lang:'ja', level:'A1', rule:'ません形：ます形的否定。',
      question:'食べません的肯定形是？', options:['食べます','食べる','食べて','食べた'], answer:0, explain:'ません 是否定，去掉ます变ません。' },
    { id:'ja-g28', lang:'ja', level:'A1', rule:'时间表达：今日/明日/昨日 + に/は 等。',
      question:'___は晴れです。', options:['今日','今朝','明日','昨日'], answer:0, explain:'今日 是今天。' },
    { id:'ja-g29', lang:'ja', level:'A1', rule:'名词谓语句：名词 + です。',
      question:'私___先生です。', options:['は','が','に','の'], answer:0, explain:'私 是主题，用 は。' },
    { id:'ja-g30', lang:'ja', level:'A1', rule:'形容词谓语句：い形容词直接结句。',
      question:'空___青い。', options:['が','は','に','を'], answer:0, explain:'形容词描述状态，主语用 が。' },
    { id:'ja-g31', lang:'ja', level:'A2', rule:'て形变形规则：五段动词いて/いで，一段动词去る+て。',
      question:'書く的て形是？', options:['書いて','書いで','書きて','書くて'], answer:0, explain:'く → いて（が行音便）。' },
    { id:'ja-g32', lang:'ja', level:'A2', rule:'て形表并列：两个以上动作并列。',
      question:'朝起きて___ます。', options:['新聞を読んで','新聞を読んで','新聞を読み','新聞を読め'], answer:1, explain:'て形连接多个动作。' },
    { id:'ja-g33', lang:'ja', level:'A2', rule:'ている：表示正在进行。',
      question:'今、雨が___。', options:['降る','降った','降っています','降るです'], answer:2, explain:'ている 表示动作进行。' },
    { id:'ja-g34', lang:'ja', level:'A2', rule:'た形：过去肯定形。',
      question:'昨日、映画を___。', options:['見る','見て','見た','見ている'], answer:2, explain:'た形表示过去。' },
    { id:'ja-g35', lang:'ja', level:'A2', rule:'形容词て形：い形去い+くて，な形+で。',
      question:'元気___、買い物に行きました。', options:['な','なです','で','い'], answer:2, explain:'な形容词て形加で。' },
    { id:'ja-g36', lang:'ja', level:'A2', rule:'ほしい：想要（东西）。',
      question:'私は新しい車___。', options:['ほしいです','ほしい','ほしく','ほしくて'], answer:0, explain:'ほしい 表示想要某物。' },
    { id:'ja-g37', lang:'ja', level:'A2', rule:'たい：想要（做某事）。',
      question:'日本語___です。', options:['話し','話す','話したい','話して'], answer:2, explain:'たい +です 表示想要做某事。' },
    { id:'ja-g38', lang:'ja', level:'A2', rule:'てください：请求对方做某事。',
      question:'ここに名前___ください。', options:['書く','書いて','書きて','書け'], answer:1, explain:'て+ください 表请求。' },
    { id:'ja-g39', lang:'ja', level:'A2', rule:'てもいい：表示许可。',
      question:'ここで写真を撮って___か。', options:['いい','いいえ','よかった','だめ'], answer:0, explain:'てもいい 表示允许。' },
    { id:'ja-g40', lang:'ja', level:'A2', rule:'てはいけない：禁止。',
      question:'ここは有料だから___。', options:['入ってもいい','入ってはだめ','入る','入って'], answer:1, explain:'てはいけない 表示禁止。' },
    { id:'ja-g41', lang:'ja', level:'A2', rule:'数量词（序数词）：一つ、二つ等。',
      question:'苹果を___ください。', options:['一つ','二重','三位','四つ'], answer:0, explain:'苹果 是食物，用つ。' },
    { id:'ja-g42', lang:'ja', level:'A2', rule:'动词意志形：～おう/よう。',
      question:'帰ろう的动词原形是？', options:['帰る','帰りる','帰って','帰った'], answer:0, explain:'う→おう 五段动词意志形。' },
    { id:'ja-g43', lang:'ja', level:'B1', rule:'使役形的用法：让别人做某事。',
      question:'子供に部屋を掃除___。', options:['する','します','させた','される'], answer:2, explain:'使役形 + せる/させる。' },
    { id:'ja-g44', lang:'ja', level:'B1', rule:'使役被动的被害表达：～させられる。',
      question:'毎日加班を___困りました。', options:['して','させる','させられる','される'], answer:2, explain:'使役被动表示被迫。' },
    { id:'ja-g45', lang:'ja', level:'B1', rule:'被动形：～れる/られる。',
      question:'この小説は彼___書かれました。', options:['で','に','から','へ'], answer:1, explain:'被动句中动作者用 に。' },
    { id:'ja-g46', lang:'ja', level:'B1', rule:'直接被动与间接被动。',
      question:'私は犬___咬まれた。', options:['に','で','から','へ'], answer:0, explain:'に 可表示被动句中的动作执行者。' },
    { id:'ja-g47', lang:'ja', level:'B1', rule:'～ば：一般条件，如果...的话。',
      question:'睛れ___、ピクニックに行きます。', options:['なら','ば','と','たら'], answer:1, explain:'ば 表示一般条件。' },
    { id:'ja-g48', lang:'ja', level:'B1', rule:'～たら：确定/假设条件。',
      question:' 도착したら、連絡してください。', options:['なら','ば','と','も'], answer:0, explain:'たら 表示确定条件。' },
    { id:'ja-g49', lang:'ja', level:'B1', rule:'～なら：话题条件，关于...的话。',
      question:'旅行___、沖縄がいいです。', options:['なら','ば','と','たら'], answer:0, explain:'なら 用于提出话题。' },
    { id:'ja-g50', lang:'ja', level:'B1', rule:'～と：确定条件/反复条件。',
      question:'春___、花が咲きます。', options:['来た','来ると','来たら','来れば'], answer:1, explain:'と 表示确定条件。' },
    { id:'ja-g51', lang:'ja', level:'B1', rule:'授受动词 くれる/くださる：别人给我。',
      question:'先生が本を___。', options:['あげた','くれた','もらった','くれた'], answer:1, explain:'くれる 表示别人给我/我方。' },
    { id:'ja-g52', lang:'ja', level:'B1', rule:'授受动词 やる/あげる/さしあげる：我给别人。',
      question:'友達に本を___。', options:['くれた','もらった','あげた','くれた'], answer:2, explain:'あげる 表示我给别人。' },
    { id:'ja-g53', lang:'ja', level:'B1', rule:'授受动词 もらう/いただく：我从别人那里得到。',
      question:'友達___本を借りました。', options:['が','に','から','へ'], answer:2, explain:'から 可以表示来源。' },
    { id:'ja-g54', lang:'ja', level:'B1', rule:'～そうだ（样态）：好像...。',
      question:'雨が降り___。', options:['そう','そうだ','そうで','そうに'], answer:0, explain:'样态型 そう 形容好像要...。' },
    { id:'ja-g55', lang:'ja', level:'B1', rule:'～そうだ（传闻）：听说...。',
      question:'天気予報___、明日署くなる。', options:['で','と','に','の'], answer:1, explain:'～そうだ 表传闻。' },
    { id:'ja-g56', lang:'ja', level:'B1', rule:'～らしい：有根据的推测。',
      question:'この맛、孔甲らしい___。', options:['だ','です','だった','でしょう'], answer:0, explain:'らしい 表有根据的推测。' },
    { id:'ja-g57', lang:'ja', level:'B1', rule:'～ようだ/ようです：比喻/样态/推测。',
      question:'彼{:modifier}死んだ___。', options:['よう','そう','らしい','みたい'], answer:0, explain:'ようだ 多用于郑重场合。' },
    { id:'ja-g58', lang:'ja', level:'B1', rule:'～ため（原因）：因为...。',
      question:'雨___、試合が中止になった。', options:['に','で','のため','だから'], answer:2, explain:'ため 表原因。' },
    { id:'ja-g59', lang:'ja', level:'B1', rule:'～ので：原因/理由。',
      question:'忙しい___、今日はパスします。', options:['に','で','ので','から'], answer:2, explain:'ので 表客观原因。' },
    { id:'ja-g60', lang:'ja', level:'B1', rule:'尊敬语：お＋动词ます形＋になる/您。',
      question:'先生___高原に惫信されましたか。', options:['の','山上','先生','が'], answer:2, explain:'尊敬语中が可省略。' },
    { id:'ja-g61', lang:'ja', level:'B2', rule:'お＋动词ます形＋する/いたす：自谦语。',
      question:'こ住所をお___します。', options:['知れ','知り','知って','知った'], answer:1, explain:'お＋知り＋する 是谦逊语。' },
    { id:'ja-g62', lang:'ja', level:'B2', rule:'特殊谦逊语：申す/顶く/差上げる等。',
      question:' 先生、ようやく껏先生が書いたの本を___。', options:['読んだ','読んでいただいた','読まれた','読んだ'], answer:1, explain:'いただいた 是もらう的谦逊语。' },
    { id:'ja-g63', lang:'ja', level:'B2', rule:'お/+ご+名词+申し上げる：更郑重的自谦。',
      question:'こ恩師にお大会への成功を___。', options:['祈る','祈り','祈った','祈り上げる'], answer:3, explain:'お+动词+申し上げる是更郑重的谦逊形式。' },
    { id:'ja-g64', lang:'ja', level:'B2', rule:'～ものなら：要是能...的话（假设）。',
      question:'可以做える___、帮忙してください。', options:['なら','ものなら','ために','ように'], answer:1, explain:'ものなら 带有轻微假设。' },
    { id:'ja-g65', lang:'ja', level:'B2', rule:'～くせに：明明...却...（责备）。',
      question:'知情___、何も知らないふりしてる。', options:['ので','のに','くせに','ために'], answer:2, explain:'くせに 带有责备语气。' },
    { id:'ja-g66', lang:'ja', level:'B2', rule:'～ものを：明明...却...（不满）。',
      question:'知らせればよかった___、黙々と仕事をしてた。', options:['ので','のに','ものを','ために'], answer:2, explain:'ものを 表达不满、遗憾。' },
    { id:'ja-g67', lang:'ja', level:'B2', rule:'话题化～のは～ことだ：...的是...。',
      question:'日本に入れた___、文化交流です。', options:['の','な','で','が'], answer:0, explain:'のは～ことだ 表示强调话题。' },
    { id:'ja-g68', lang:'ja', level:'B2', rule:'～たものだ：回忆（当年）。',
      question:'子供の頃、毎日海で___ものだ。', options:['泳ぐ','泳いだ','泳いで','泳げる'], answer:1, explain:'たものだ 表示回忆。' },
    { id:'ja-g69', lang:'ja', level:'B2', rule:'～ということだ：听说.../就是说...。',
      question:'彼の説明___、事故は避けられなかった。', options:['で','と','の','を'], answer:1, explain:'ということだ 表传闻。' },
    { id:'ja-g70', lang:'ja', level:'B2', rule:'～来着：表示回忆。',
      question:'昨日、駅で友達に___来着。', options:['合う','会った','会って','会おう'], answer:1, explain:'来着 表示回忆。' },
    { id:'ja-g71', lang:'ja', level:'B2', rule:'～っけ：回忆确认。',
      question:'今日の会議は几点からだった___。', options:['だ','です','だった','です'], answer:2, explain:'っけ 用于确认。' },
    { id:'ja-g72', lang:'ja', level:'B2', rule:'～たらしい：完全...的样子。',
      question:'あの人はいつも偉そうに___。', options:['する','した','して','しさ'], answer:1, explain:'した 做形容词使用。' },
    { id:'ja-g73', lang:'ja', level:'B2', rule:'～つつ：一边...一边...。',
      question:'歩き___、考えた。', options:['て','で','あり','し'], answer:0, explain:'つつ 表示同时进行。' },
    { id:'ja-g74', lang:'ja', level:'B2', rule:'～つつある：正在逐渐...。',
      question:'状況は改善され___。', options:['た','ている','つつある','そう'], answer:2, explain:'つつある 表示正在进行。' },
    { id:'ja-g75', lang:'ja', level:'C1', rule:'～なしには/なしでは：没有...的话（条件）。',
      question:'当事人同意___、話は進まない。', options:['には','とは','から','まで'], answer:0, explain:'なしには 表必要条件。' },
    { id:'ja-g76', lang:'ja', level:'C1', rule:'～をもって：以...方式/手段。',
      question:'不服申立書は正本___、提出してください。', options:['で','に','を','の'], answer:0, explain:'をもって 表示手段。' },
    { id:'ja-g77', lang:'ja', level:'C1', rule:'～いかんでは/いかんによっては：取决于...。',
      question:'努力___、成果も変わってくる。', options:['による','の','で','いかん'], answer:3, explain:'いかんでは 取决于...。' },
    { id:'ja-g78', lang:'ja', level:'C1', rule:'～いわんや/なおさら/しかり：何况...。',
      question:'ildren に조차難しい、___大人において可言说吧。', options:['なおさら','いわんや','しかり','でも'], answer:1, explain:'いわんや何况。' },
    { id:'ja-g79', lang:'ja', level:'C1', rule:'～まじき：不应该...的。',
      question:'それは学生___行為だ。', options:['ます','まじき','らしい','ような'], answer:1, explain:'まじき 不应该...的。' },
    { id:'ja-g80', lang:'ja', level:'C1', rule:'～ごとき/ごとく/ごときし：像...那样。',
      question:'大雪___天気は初めてだ。', options:['の','ごとき','への','との'], answer:1, explain:'ごとき 像...那样。' },
    { id:'ja-g81', lang:'ja', level:'C1', rule:'～たところで：即使...也（逆接）。',
      question:'跑了___、間に合わない。', options:['ので','のに','たところで','いただけ'], answer:2, explain:'たところで 即使...也。' },
    { id:'ja-g82', lang:'ja', level:'C1', rule:'～涉ち上げろ/涉ち上げろ架空的请求：更加礼貌的请求。',
      question:'这本书拜读___。', options:['する','した','頂戴','いただき'], answer:2, explain:'頂戴是より口语化的请求。' },
    { id:'ja-g83', lang:'ja', level:'C1', rule:'媒体/新闻日语：～見込み/～动向/～舘/～态。',
      question:'来週の会議は3時から___れている。', options:['開き','行われ','讨论さ','用意さ'], answer:1, explain:'行われ是举行的大众语。' },
    { id:'ja-g84', lang:'ja', level:'C1', rule:'论文/正式文体：～FIC/～亭/～得不口。',
      question:'本研究は、言語教育における効果的な方法を___とした。', options:['検証','検証する','検証した','検証uest'], answer:0, explain:'検証 名词形。' },
    { id:'ja-g85', lang:'ja', level:'C1', rule:'～极まりない/～极まる：非常...。',
      question:'その态度は残念___。', options:['だ','です','极まりない','极まる'], answer:2, explain:'极まりない 非常...。' },
    { id:'ja-g86', lang:'ja', level:'C1', rule:'商务日语：お阴で/异存없이/何よりです。',
      question:'こ助力___、助かりました。', options:['で','の','に','を'], answer:0, explain:'お阴で 多亏...。' },
    { id:'ja-g87', lang:'ja', level:'C2', rule:'古典语法 ～たり/～だり：罗列动作/状态。',
      question:'彼は книгу ___、ゲーム___、テレビ___、makurosu。', options:['読んだり','游戏したり','见たり','する'], answer:0, explain:'～たり～たり 表动作交替。' },
    { id:'ja-g88', lang:'ja', level:'C2', rule:'方言/地域语言：関西弁「おへん」/九州弁「なん】等。',
      question:'「行かへんで」の意味は？', options:['行くよ','行かないよ','行くね','行くかな'], answer:1, explain:'関西弁 「へんで」= ない。' },
    { id:'ja-g89', lang:'ja', level:'C2', rule:'语言学分析视角：シ、ソ、ア等指示词分类。',
      question:'文脉によって指す内容が変わる「これ/それ/あれ」は何という？', options:['指示詞','代名詞','副詞','接続詞'], answer:0, explain:'指示词 用来指代的事物。' },
    { id:'ja-g90', lang:'ja', level:'C2', rule:'高级文学评论：～と思う/～と見える/～とぞ感じる。',
      question:'彼の苦笑は、奈落の底の___と見える。', options:['落ち','落ちて','落ちた','落ち込む'], answer:0, explain:'と見える 看来...。' },
    { id:'ja-g91', lang:'ja', level:'C2', rule:'文语残留：～ばこそ/～ものを/～よしむ。',
      question:'勉強した___、試験に落ちた。', options:['ので','のに','ばこそ','ため'], answer:2, explain:'～ばこそ 正因为...。' },
    { id:'ja-g92', lang:'ja', level:'C2', rule:'～た掌实が：竟然...（意外）。',
      question:'病人が完走___。', options:['した','して','すえる','できた'], answer:0, explain:'竟然 完成。' },
    { id:'ja-g93', lang:'ja', level:'C2', rule:'～まじき：不应该...的。',
      question:'それ学生___犯行だ。', options:['です','まじき','もの','らしい'], answer:1, explain:'まじき 不应该...的。' },
    { id:'ja-g94', lang:'ja', level:'C2', rule:'～きらいがある：有...之嫌。',
      question:'この方案は抽象的___。', options:['だ','です','きらいがある','傾向がある'], answer:2, explain:'きらいがある 有...之嫌。' },
    { id:'ja-g95', lang:'ja', level:'C2', rule:'～んばかり：几乎要...。',
      question:'爆炸___大声で叫んだ。', options:['の','ん','で','した'], answer:1, explain:'んばかり 几乎要...。' },
    { id:'ja-g96', lang:'ja', level:'C2', rule:'～至るまで：直到...。',
      question:'细节___硷り合った。', options:['に','まで','へ','の'], answer:1, explain:'至るまで 直到...。' },
    { id:'ja-g97', lang:'ja', level:'C2', rule:'高级逆接：～とは言うものの/～はいえ取引。',
      question:'勉强した___、不合格だった。', options:['のに','とは言うものの','ものを','くせに'], answer:1, explain:'とは言うものの 虽然...但是...。' },
    { id:'ja-g98', lang:'ja', level:'C2', rule:'～にかたくない：不难...。',
      question:'彼女の愤怒は想像___。', options:['する','した','かに','できた'], answer:2, explain:'にかたくない 不难...。' },
    { id:'ja-g99', lang:'ja', level:'C2', rule:'高级无生物主语：現象が～れる/～给我する。',
      question:'类いの声が远く_____した。', options:['聞こえ','聞き','聞いて','聞け'], answer:0, explain:'聞こえる 传到我这里。' },
    { id:'ja-g100', lang:'ja', level:'C2', rule:'高级话题处理：～ときたら/～ともなると。',
      question:'田中さん___、料理も趣味性も両立시키는。', options:['は','と','にかかり','ときたら'], answer:3, explain:'ときたら 提到...时（评价）。' },
    { id:'ja-g101', lang:'ja', level:'C2', rule:'～まじき/～まじく：不应该...的。',
      question:'親に向かってSuch___。', options:['だ','の','まじき','です'], answer:2, explain:'まじき 不应该...的。' },
    { id:'ja-g102', lang:'ja', level:'C2', rule:'～极まる/～极まりない：非常...。',
      question:'あの教授の講義は退屈___。', options:['だ','です','极まりない','极まる'], answer:2, explain:'极まりない 非常...。' },
    { id:'ja-g103', lang:'ja', level:'C2', rule:'～限りだ：非常...（感情）。',
      question:'一緒に住めたら、鼻じゃない___。', options:['だ','です','限り','限る'], answer:2, explain:'限りだ 表限定。' },
    { id:'ja-g104', lang:'ja', level:'C2', rule:'～もさることながら：固然...但也...。',
      question:'才能___、努力の有無がものを言う。', options:['も','の','だ','か'], answer:0, explain:'もさることながら 固然...但也...。' },
    { id:'ja-g105', lang:'ja', level:'C2', rule:'～を余仪なくされる：被迫...。',
      question:'不景気の為、突然退職を___。', options:['余儀なくされた','余儀なくする','された','させた'], answer:0, explain:'余仪なくされる 被迫...。' },
    { id:'ja-g106', lang:'ja', level:'C2', rule:'～を敢えて辞さない：故意不做...。',
      question:'危険を冒し___。', options:['ます','た','せぬ','しない'], answer:2, explain:'敢えて～ぬ 故意不...。' },
    { id:'ja-g107', lang:'ja', level:'C2', rule:'～经 위에/～经的同时：随着...。',
      question:'年を取る___、記憶力が低下する。', options:['のに','に従い','ても','ので'], answer:1, explain:'に従い 随着...。' },
    { id:'ja-g108', lang:'ja', level:'C2', rule:'～riya 管财/～办稿斐/～ sophw：书面重述。',
      question:'環境問題は今後ますます深刻化___思料する。', options:['して','な','の','だと'], answer:0, explain:'して 表手段。' }
  ],
  ko: [
    { id:'ko-g1', lang:'ko', level:'A1', rule:'입니다/예요/이에요：名词的礼貌体谓语，无收音用예요，有收音用이에요。',
      question:'저는 학생___。', options:['입니다','해요','먹어요','있어요'], answer:0, explain:'학생 是名词，用 입니다。' },
    { id:'ko-g2', lang:'ko', level:'A1', rule:'助词 은/는：提示主题。',
      question:'이것___ 책이에요.', options:['이','은','가','을'], answer:1, explain:'이것 是主题，用 은。' },
    { id:'ko-g3', lang:'ko', level:'A1', rule:'助词 이/가：提示主语/强调。',
      question:'나는 학생___。', options:['은','이','가','를'], answer:2, explain:'主语 학생 后接 가 (因为无收音)。' },
    { id:'ko-g4', lang:'ko', level:'A1', rule:'动词原形与现在时 아/어요：词干元音是 ㅏ/ㅗ 用 아요，其它用 어요。',
      question:'밥을___。', options:['먹어요','먹다','먹으요','먹'], answer:0, explain:'먹다 词干元音 ㅓ，用 어요。' },
    { id:'ko-g5', lang:'ko', level:'A2', rule:'过去时 았/었어요：词干元音 ㅏ/ㅗ 用 았어요，其他用 었어요。',
      question:'어제 영화를___。', options:['봐요','봤어요','볼 거예요','보세요'], answer:1, explain:'보다 词干元音 ㅗ，过去时 았어요 → 봤어요。' },
    { id:'ko-g6', lang:'ko', level:'A2', rule:'将来时 (으)ㄹ 거예요/겠어요。',
      question:'내일 친구를___。', options:['만나요','만났어요','만날 거예요','만나세요'], answer:2, explain:'내일 表将来，用 (으)ㄹ 거예요。' },
    { id:'ko-g7', lang:'ko', level:'A2', rule:'形容词活用：和动词一样 아/어요。',
      question:'오늘 날씨가___。', options:['좋아요','좋아요','좋았어요','좋아'], answer:0, explain:'좋다 + 아요 = 좋아요。' },
    { id:'ko-g8', lang:'ko', level:'B1', rule:'使动：시키다/게 하다/도록 하다。',
      question:'저는 아이에게 책을 읽게___。', options:['합니다','돼요','해요','했어요'], answer:2, explain:'게 하다 表让某人做某事。' },
    { id:'ko-g9', lang:'ko', level:'B1', rule:'被动：되다/당하다/받다/지다。',
      question:'그는 친구에게___。', options:['도와줬어요','도움을 받았어요','도움이 돼요','도움'], answer:1, explain:'받다 被动接受帮助。' },
    { id:'ko-g10', lang:'ko', level:'B1', rule:'连接词尾：아서/어서(原因)、니까(原因/发现)、지만(转折)、고(并列)。',
      question:'비가___、傘を持って行きます。', options:['오니까','오고','오지만','와서'], answer:0, explain:'니까 表原因或发现。' },
    { id:'ko-g11', lang:'ko', level:'B2', rule:'间接引语：(이)라고 하다/다고 하다/냐고 하다/라고 하다。',
      question:'그는 학생이라고___。', options:['해요','해','하고','하니까'], answer:0, explain:'名词间接引语用 (이)라고 하다。' },
    { id:'ko-g12', lang:'ko', level:'B2', rule:'条件与假设：(으)면、(으)려면、거든、만약。',
      question:'돈이___、여행을 갈 거예요。', options:['있으면','있거든','있지','있고'], answer:0, explain:'면 表条件，如果。' },
    { id:'ko-g13', lang:'ko', level:'C1', rule:'使役与被动的复合结构。',
      question:'그는 회사에서 중요한 일을___。', options:['하게 했어요','당했어요','시키고 있어요','받았어요'], answer:2, explain:'시키다 表使役，他被指派做重要工作。' },
    { id:'ko-g14', lang:'ko', level:'C1', rule:'推测/可能：(으)ㄹ 수도 있다/것 같다/나 보다。',
      question:'그는 내일 안 올___。', options:['수도 있어요','고 싶어요','면서','지만'], answer:0, explain:'(으)ㄹ 수도 있다 表也许，推测。' },
    { id:'ko-g15', lang:'ko', level:'C2', rule:'正式书面体：~ㄴ/는다、~다、~지 않는다。',
      question:'이것은 사실이 아니다. 이것은 단지 소설일 뿐___。', options:['입니다','이에요','예요','이다'], answer:0, explain:'书面体结尾用 입니다。' },
    // ===== GRAMMAR.ko 扩展 A1 (15+ 更多入门语法) =====
    { id:'ko-g16', lang:'ko', level:'A1', rule:'助词 을/를：宾格助词，表示动作的对象。',
      question:'나는 밥을 ___。', options:['먹다','먹어요','먹','먹는'], answer:1, explain:'宾语后接 을/를，动词用아요/어요。' },
    { id:'ko-g17', lang:'ko', level:'A1', rule:'助词 에：与格助词，表示方向、目的地。',
      question:'학교___ 가요.', options:['에','에서','의','을'], answer:0, explain:'가다 接 에 表示去某地。' },
    { id:'ko-g18', lang:'ko', level:'A1', rule:'助词 에서：位格助词，表示动作发生的场所。',
      question:'도서관___ 책을 읽어요.', options:['에','에서','에게','한테'], answer:1, explain:'에서 表示在某处进行动作。' },
    { id:'ko-g19', lang:'ko', level:'A1', rule:'助词 의：属格助词，表示所有关系。',
      question:'이것은 나___ 책이에요.', options:['의','에','에서','을'], answer:0, explain:'의 表示所有格。' },
    { id:'ko-g20', lang:'ko', level:'A1', rule:'代词 이/그/저：指示代词。',
      question:'___ 것은 책이에요.', options:['이','그','저','어느'], answer:0, explain:'이 指代近处的事物。' },
    { id:'ko-g21', lang:'ko', level:'A1', rule:'数+助数词：개(东西)、명(人)、마리(动物)。',
      question:'사과 세 ___ 주세요.', options:['개','명','마리','장'], answer:0, explain:'개 用于数东西。' },
    { id:'ko-g22', lang:'ko', level:'A1', rule:'否定 안/않다：副词否定。',
      question:'나는 커피를 ___ 마셔요.', options:['안','않','못','不'], answer:0, explain:'안 放在动词前表示否定。' },
    { id:'ko-g23', lang:'ko', level:'A1', rule:'否定 지 않다：动词/形容词否定。',
      question:'이 영화는 재미있지 ___。', options:['않다','없다','있다','나다'], answer:0, explain:'지 않다 表否定。' },
    { id:'ko-g24', lang:'ko', level:'A1', rule:'终结词尾 ~다：平叙句结束。',
      question:'저는 학생___。', options:['이다','이다','이에요','입니다'], answer:0, explain:'~다 是基本平叙形。' },
    { id:'ko-g25', lang:'ko', level:'A1', rule:'终结词尾 ~어요/아요：现在时非敬语。',
      question:'나는 학교에 ___。', options:['가다','가요','갔어요','갈 거예요'], answer:1, explain:'가다 → 가요。' },
    { id:'ko-g26', lang:'ko', level:'A1', rule:'终结词尾 ~습니다：礼貌体平叙。',
      question:'저는 선생님___。', options:['이다','이에요','입니다','예요'], answer:2, explain:'입니다 是礼貌体。' },
    { id:'ko-g27', lang:'ko', level:'A1', rule:'连接助词 와/과：和，与。',
      question:'나___ 친구가 같이 가요.', options:['와','에서','에','을'], answer:0, explain:'와/과 表"和/与"。' },
    { id:'ko-g28', lang:'ko', level:'A1', rule:'方向 가다/오다：趋向动词。',
      question:'집에 ___。', options:['가다','오다','가요','와요'], answer:2, explain:'回家用 오다。' },
    { id:'ko-g29', lang:'ko', level:'A1', rule:'名词谓语句이다/~입니다/~이었다。',
      question:'저는 한국 사람___。', options:['이다','있다','없다','하다'], answer:0, explain:'名词谓语用 이다。' },
    { id:'ko-g30', lang:'ko', level:'A1', rule:'疑问词 뭐/ 누구/ 어디：疑问代词/副词。',
      question:'이것은 ___예요?', options:['뭐','누구','어디','몇'], answer:0, explain:'뭐 询问事物。' },
    { id:'ko-g31', lang:'ko', level:'A1', rule:'时间词语：오늘/어제/내일。',
      question:'___ 영화를 봤어요.', options:['어제','오늘','내일','모레'], answer:0, explain:'어제 表昨天。' },
    // ===== GRAMMAR.ko 扩展 A2 (15+ 更多初级语法) =====
    { id:'ko-g32', lang:'ko', level:'A2', rule:'过去时 았/었어요：过去的动作或状态。',
      question:'어제 친구___ 만났어요.', options:['이','을','와','과'], answer:1, explain:'만나다 + 을/를 → 만났어요。' },
    { id:'ko-g33', lang:'ko', level:'A2', rule:'将来时 ~(으)ㄹ 거예요：推测或计划。',
      question:'내일 날씨가 ___ 좋아요.', options:['좋다','좋아요','좋았어요','좋을 거예요'], answer:3, explain:'~(으)ㄹ 거예요 表将来推测。' },
    { id:'ko-g34', lang:'ko', level:'A2', rule:'将来时 ~(으)겠어요：意志或将来。',
      question:'저는 한국어___ 배울 거예요.', options:['을','를','이','가'], answer:0, explain:'动词将来时。' },
    { id:'ko-g35', lang:'ko', level:'A2', rule:'连接词尾 고：并列动作。',
      question:'밥을 먹___ 친구를 만났어요.', options:['고','아서','지만','니까'], answer:0, explain:'고 连接并列动作。' },
    { id:'ko-g36', lang:'ko', level:'A2', rule:'连接词尾 그리고：进一步补充。',
      question:'머리가 아파요. ___ 열이 있어요.', options:['그리고','하지만','그래서','왜냐하면'], answer:0, explain:'그리고 表递进。' },
    { id:'ko-g37', lang:'ko', level:'A2', rule:'形容词 ~(으)ㄴ：定语形。',
      question:'___ 날씨가 좋아요.', options:['따뜻한','따뜻해요','따뜻하고','따뜻했다'], answer:0, explain:'~(으)ㄴ 接在形容词后作定语。' },
    { id:'ko-g38', lang:'ko', level:'A2', rule:'动词 ~(으)면：条件形。',
      question:'시간이 있___ 친구를 만나요.', options:['으면','는데','고','지만'], answer:0, explain:'~(으)면 表条件。' },
    { id:'ko-g39', lang:'ko', level:'A2', rule:'补助动词 ~고 있다：进行时。',
      question:'지금 무엇을 ___?', options:['해요','하고 있어요','했어요','할 거예요'], answer:1, explain:'~고 있다 表进行。' },
    { id:'ko-g40', lang:'ko', level:'A2', rule:'愿望 ~고 싶다：想要。',
      question:'나는 커피___ 마시고 싶어요.', options:['을','를','이','가'], answer:0, explain:'~고 싶다 表想要。' },
    { id:'ko-g41', lang:'ko', level:'A2', rule:'能力 ~(으)ㄹ 수 있다/없다：能/不能。',
      question:'그는 한국어를 ___ 수 있어요.', options:['말해요','말할','말한','말하고'], answer:1, explain:'~(으)ㄹ 수 있다 表能力。' },
    { id:'ko-g42', lang:'ko', level:'A2', rule:'必要 ~(으)면 안 되다：不可以。',
      question:'여기서 담배를 피우면 ___。', options:['안 돼요','되면 안 돼요','될 수 있어요','될 거예요'], answer:1, explain:'~(으)면 안 되다 表禁止。' },
    { id:'ko-g43', lang:'ko', level:'A2', rule:'程度 매우/아주/너무：副词强调。',
      question:'오늘 날씨가 ___ 더워요.', options:['매우','와','에서','의'], answer:0, explain:'매우/아주/너무 强调程度。' },
    { id:'ko-g44', lang:'ko', level:'A2', rule:'原因 ~(으)니까：因为。',
      question:'바쁘___ 시간 없어요.', options:['니까','지만','고','아서'], answer:0, explain:'~(으)니까 表原因。' },
    { id:'ko-g45', lang:'ko', level:'A2', rule:'原因 ~아서/어서：原因/理由。',
      question:'배가 아파___ 병원에 가요.', options:['아서','고','지만','니까'], answer:0, explain:'~아서/어서 表原因。' },
    { id:'ko-g46', lang:'ko', level:'A2', rule:'时序 ~고 나서：之后。',
      question:'공부하고 ___ 시험을 봐요.', options:['나서','고','지만','때'], answer:0, explain:'~고 나서 表动作顺序。' },
    // ===== GRAMMAR.ko 扩展 B1 (15+ 更多中级语法) =====
    { id:'ko-g47', lang:'ko', level:'B1', rule:'间接引语 ~(이)라고 하다：引用名词。',
      question:'그는 학생___ 말했어요.', options:['이라고','라고','고','냐고'], answer:1, explain:'无收音的名词用 라고 하다。' },
    { id:'ko-g48', lang:'ko', level:'B1', rule:'间接引语 ~다고 하다：引用动词/形容词。',
      question:'그녀가 밥을 먹었다___ 했어요.', options:['고','라고','냐고','는지'], answer:0, explain:'~다고 하다 引用句子。' },
    { id:'ko-g49', lang:'ko', level:'B1', rule:'间接引语 ~냐고 묻다：疑问句引用。',
      question:'그는 어디에 가___ 물었어요.', options:['냐고','라고','고','자고'], answer:0, explain:'~냐고 묻다 引用疑问句。' },
    { id:'ko-g50', lang:'ko', level:'B1', rule:'条件 ~(으)면：假设条件。',
      question:'시간이 ___ 일찍 올 수 있어요.', options:['있으면','없으면','있고','없고'], answer:0, explain:'~(으)면 表假设。' },
    { id:'ko-g51', lang:'ko', level:'B1', rule:'推测 ~것 같다：好像。',
      question:'비)가 올 ___。', options:['것 같아요','RAR','rar','rar'], answer:0, explain:'~것 같다 表推测。' },
    { id:'ko-g52', lang:'ko', level:'B1', rule:'推测 ~(으)ㄹ 것 같다：将要。',
      question:'내일 날씨가 좋을 ___。', options:['것 같아요','RAR','RAR','것 같았어요'], answer:0, explain:'~(으)ㄹ 것 같다 表将来推测。' },
    { id:'ko-g53', lang:'ko', level:'B1', rule:'使役 ~게 하다：让某人做。',
      question:'선생님이 학생___ 공부를 ___어요.', options:['에게/게','를/하게','를/시킵니다','에게/하게'], answer:3, explain:'~게 하다 表使役。' },
    { id:'ko-g54', lang:'ko', level:'B1', rule:'被动 ~당하다/~되다：被动态。',
      question:'그의 의견이 팀원들에게 ___었어요.', options:['받','시','당하','되'], answer:2, explain:'~당하다 表被动。' },
    { id:'ko-g55', lang:'ko', level:'B1', rule:'尊敬 ~(으)시-：尊敬词尾。',
      question:'선생님이教室에 ___어요.', options:['오시','와','가시','오'], answer:0, explain:'~(으)시- 表尊敬。' },
    { id:'ko-g56', lang:'ko', level:'B1', rule:'冠形词形 ~(으)ㄴ/는/~ㄹ：定语形式。',
      question:'___ 사람은 이름이 뭐예요?', options:['온','올','오','오고'], answer:0, explain:'~(으)ㄴ 表定语。' },
    { id:'ko-g57', lang:'ko', level:'B1', rule:'对比 ~는 반면：另一方面。',
      question:'도시의 생활이 편리한 ___乡村은 한都比较难。', options:['반면','또','그리고','그래서'], answer:0, explain:'~는 반면 表对比。' },
    { id:'ko-g58', lang:'ko', level:'B1', rule:'添加 게다가/더구나：而且。',
      question:'비가 와요. ___ 바람도 불어요.', options:['게다가','하지만','그런데','왜'], answer:0, explain:'게다가 表添加。' },
    { id:'ko-g59', lang:'ko', level:'B1', rule:'整理 ~는/(으)ㄴ 반면：相反。',
      question:'兄는 Engineer인 ___弟는 선생님이에요.', options:['반면','또','그리고','그래서'], answer:0, explain:'~는/(으)ㄴ 반면 表对比。' },
    { id:'ko-g60', lang:'ko', level:'B1', rule:'原因 ~때문이다：理由。',
      question:'눈이 온 ___ 길이 미끄러워요.', options:['때문에','때문','때문이','때문이다'], answer:0, explain:'~때문에 表原因。' },
    { id:'ko-g61', lang:'ko', level:'B1', rule:'理由 ~니까/으니까：理由发现。',
      question:'道路이 막히___ 지각했어요.', options:['니까','때문에','때문','때문이'], answer:0, explain:'~니까 表理由。' },
    { id:'ko-g62', lang:'ko', level:'B1', rule:'感叹 ~다니까/군요：感叹。',
      question:'와, 정말 예쁘___！', options:['군요','어요','아요','다'], answer:0, explain:'~군요 表感叹。' },
    // ===== GRAMMAR.ko 扩展 B2 (15+ 更多中高级语法) =====
    { id:'ko-g63', lang:'ko', level:'B2', rule:'假设 ~았/었더라면：与过去事实相反。',
      question:'빨리 갔더라면 ___ 수 있었을 텐데.', options:['도착하','도착하고','도착해서','도착'], answer:0, explain:'~았/었더라면 表与过去相反的假设。' },
    { id:'ko-g64', lang:'ko', level:'B2', rule:'~ㄹ 뿐만 아니라：不仅...而且。',
      question:'그는聪明할 ___努力도 해요.', options:['뿐만 아니라','이고','이고 말고','만'], answer:0, explain:'~(으)ㄹ 뿐만 아니라 表递进。' },
    { id:'ko-g65', lang:'ko', level:'B2', rule:'~는/(으)ㄴ 데다가：而且。',
      question:'가격이 저렴한 ___质量도 좋아요.', options:['데다가','지만','고','니'], answer:0, explain:'~는/(으)ㄴ 데다가 表添加。' },
    { id:'ko-g66', lang:'ko', level:'B2', rule:'거든요：说明理由。',
      question:'道路이 복잡___요.', options:['거든요','군요','네요','을게요'], answer:0, explain:'거든요 用于说明理由。' },
    { id:'ko-g67', lang:'ko', level:'B2', rule:'~(으)ㄹ까 봐：担心。',
      question:'비 Ralph ___ 우산을 가져갔어요.', options:['올까 봐','오니까','오고','온'], answer:0, explain:'~(으)ㄹ까 봐 表担心。' },
    { id:'ko-g68', lang:'ko', level:'B2', rule:'~(으)ㄴ/(는)/(으)ㄹ는지：是否。',
      question:'그가 오는지 ___ 확인해 보세요.', options:['알','보고','들어','보'], answer:0, explain:'~(으)ㄴ/(는)/(으)ㄹ는지 表疑问。' },
    { id:'ko-g69', lang:'ko', level:'B2', rule:'-아/어 두다：预先准备。',
      question:'문자를 ___ 둘게요.', options:['보내','보내서','보내고','보낸'], answer:0, explain:'~아/어 두다 表预先准备。' },
    { id:'ko-g70', lang:'ko', level:'B2', rule:'-아/어 내다：完成。',
      question:'과제를 ___完成했어요.', options:['해내','하고','해서','할'], answer:0, explain:'~아/어 내다 表完成。' },
    { id:'ko-g71', lang:'ko', level:'B2', rule:'-아/어 놓다：保持状态。',
      question:'문을 ___ 두세요.', options:['열어','열고','열','열면'], answer:0, explain:'~아/어 놓다 表保持某状态。' },
    { id:'ko-g72', lang:'ko', level:'B2', rule:'-아/어 버리다：遗憾/完成。',
      question:'잃어 ___ 텡어요.', options:['버렸','버릴','버리고','버리'], answer:0, explain:'~아/어 버리다 表遗憾或完全完成。' },
    { id:'ko-g73', lang:'ko', level:'B2', rule:'~(으)ㄹ 텐데：推测+转折。',
      question:'도착했을 텐데 ___ 아직 안 왔어요.', options:['그런데','그리고','그래서','왜'], answer:0, explain:'~(으)ㄹ 텐데 表推测+转折。' },
    { id:'ko-g74', lang:'ko', level:'B2', rule:'-는 척하다：假装。',
      question:'모르는 ___ 말해요.', options:['척','으면','고','서'], answer:0, explain:'-는 척하다 表假装。' },
    { id:'ko-g75', lang:'ko', level:'B2', rule:'~(으)면서：一边...一边。',
      question:'음악을 들으면서 ___ 해요.', options:['공부','공부해요','공부하고','공부한'], answer:1, explain:'~(으)면서 表同时进行。' },
    { id:'ko-g76', lang:'ko', level:'B2', rule:'~(으)ㄹ수록：越...越。',
      question:'공부할수록 ___져요.', options:['でき','でき','でき','でき'], answer:0, explain:'~(으)ㄹ수록 表递进。' },
    { id:'ko-g77', lang:'ko', level:'B2', rule:'~(으므로：因此。',
      question:'날씨가 추우___ 등산을 취소했어요.', options:['므로','니까','아서','고'], answer:0, explain:'~(으)므로 表原因结果。' },
    { id:'ko-g78', lang:'ko', level:'B2', rule:'~(으)ㄹ 뿐 아니라：不仅。',
      question:'兄는 노력할 뿐 ___成功했어요.', options:['아니라','이고','도','마저'], answer:0, explain:'~(으)ㄹ 뿐 아니라 表不仅。' },
    { id:'ko-g79', lang:'ko', level:'B2', rule:'-(으)ㄹ는지：疑问。',
      question:'언제 올지 ___ 모르겠어요.', options:['몰라','알','보고','들어'], answer:0, explain:'~(으)ㄹ는지 表疑问。' },
    { id:'ko-g80', lang:'ko', level:'B2', rule:'-(으)ㄹ지도 모르다：也许。',
      question:'비 Ralph ___伞을 가져가세요.', options:['올지도 모르니까','오고','왔으니까','올'], answer:0, explain:'~(으)ㄹ지도 모르다 表不确定推测。' }
  ],
  es: [
    { id:'es-g1', lang:'es', level:'A1', rule:'ser 与 estar：ser 表本质、特性、职业；estar 表状态、位置、情绪。',
      question:'Yo ___ estudiante.', options:['soy','estoy','es','está'], answer:0, explain:'职业用 ser，I 搭配 soy。' },
    { id:'es-g2', lang:'es', level:'A1', rule:'定冠词 el/la/los/las：阳/阴、单/复。',
      question:'___ libro es interesante.', options:['El','La','Los','Las'], answer:0, explain:'libro 阳性单数，用 El。' },
    { id:'es-g3', lang:'es', level:'A1', rule:'现在时规则动词：-ar / -er / -ir 变位。',
      question:'Nosotros ___ español.', options:['hablamos','habla','hablan','hablo'], answer:0, explain:'nosotros 用 -amos 结尾。' },
    { id:'es-g4', lang:'es', level:'A1', rule:'gustar + 间接宾语：me/te/le/nos/os/les gusta(n) ...',
      question:'Me ___ el café.', options:['gusta','gustan','gusto','gustas'], answer:0, explain:'café 单数，用 gusta。' },
    { id:'es-g5', lang:'es', level:'A2', rule:'pretérito indefinido：表过去发生的一次性动作。',
      question:'Ayer yo ___ una película.', options:['veo','vi','veía','había visto'], answer:1, explain:'ayer 用 indefinido，ver 的第一人称过去式是 vi。' },
    { id:'es-g6', lang:'es', level:'A2', rule:'pretérito imperfecto：表过去持续、习惯性动作。',
      question:'Cuando era niño, ___ todos los días.', options:['juego','jugaba','jugué','jugaré'], answer:1, explain:'过去的习惯用 imperfecto。' },
    { id:'es-g7', lang:'es', level:'A2', rule:'futuro simple：-é/-ás/-á/-emos/-éis/-án。',
      question:'Mañana yo ___ el partido.', options:['veré','veré','verá','veo'], answer:1, explain:'futuro simple 的第一人称结尾 -é。' },
    { id:'es-g8', lang:'es', level:'B1', rule:'condicional：-ía/-ías/-ía/-íamos/-íais/-ían，表委婉、礼貌请求。',
      question:'Por favor, ¿me ___ un café?', options:['das','daba','daría','dado'], answer:2, explain:'condicional 表礼貌请求 would give。' },
    { id:'es-g9', lang:'es', level:'B1', rule:'命令式：tú 命令式 tú、usted、nosotros 形式。',
      question:'___ aquí, por favor.', options:['Ven','Vienes','Vienes','Vengas'], answer:0, explain:'venir 的 tú 命令式是 ven。' },
    { id:'es-g10', lang:'es', level:'B1', rule:'现在完成时：he/has/ha/hemos/habéis/han + 过去分词。',
      question:'He ___ una carta.', options:['escribo','escribía','escrito','escribiré'], answer:2, explain:'he + 过去分词 escrito。' },
    { id:'es-g11', lang:'es', level:'B2', rule:'虚拟式现在时：que + 主语 + 虚拟式，用于愿望、怀疑、可能性。',
      question:'Espero que tú ___.', options:['vienes','vengas','vendrás','venías'], answer:1, explain:'esperar que + 虚拟式 vengas。' },
    { id:'es-g12', lang:'es', level:'B2', rule:'被动语态：ser + 过去分词 + por。',
      question:'El libro ___ por el autor famoso.', options:['escribió','fue escrito','escribe','escribía'], answer:1, explain:'被动语态：ser + 过去分词 + por。' },
    { id:'es-g13', lang:'es', level:'C1', rule:'条件句复合式：would have + 过去分词的西语对应。',
      question:'Si hubiera estudiado más, ___ aprobado.', options:['había','habría','he','tendré'], answer:1, explain:'condicional perfecto 表与过去事实相反的结果。' },
    { id:'es-g14', lang:'es', level:'C1', rule:'lo que / lo cual / lo 的名词化结构。',
      question:'___ tú dices es importante.', options:['Lo que','El que','Lo cual','Que'], answer:0, explain:'Lo que = ...的内容。' },
    { id:'es-g15', lang:'es', level:'C2', rule:'por + 过去分词/para + 不定式 的高级区别。',
      question:'El libro está ___ leer.', options:['por','para','al','de'], answer:1, explain:'estar para + 不定式表即将。' },
    { id:'es-g16', lang:'es', level:'A1', rule:'不定冠词 un/una：用于泛指，表示"一个"。',
      question:'Tengo ___ libro.', options:['el','un','una','los'], answer:1, explain:'un 表泛指，一个书。' },
    { id:'es-g17', lang:'es', level:'A1', rule:'名词的性：-o 结尾多为阳性，-a 结尾多为阴性。',
      question:'La mesa es ___ (femenino).', options:['rojo','grande','alta','verde'], answer:2, explain:'mesa 是阴性形容词 alta 配合。' },
    { id:'es-g18', lang:'es', level:'A1', rule:'疑问词：qué 什么、dónde 哪里、cuándo 什么时候、quién 谁。',
      question:'___ es esto?', options:['Qué','Dónde','Cuándo','Quién'], answer:0, explain:'qué 用于询问是什么。' },
    { id:'es-g19', lang:'es', level:'A1', rule:'指示词 este/esta/estos/estas：这/这些。',
      question:'___ libro es mío.', options:['Este','Esta','Estos','Estas'], answer:0, explain:'libro 阳性，用 este。' },
    { id:'es-g20', lang:'es', level:'A1', rule:'介词 en：在...里面/在...地方。',
      question:'Yo estoy ___ casa.', options:['en','con','para','por'], answer:0, explain:'en 表位置，在家里。' },
    { id:'es-g21', lang:'es', level:'A1', rule:'介词 con：和...一起/用...',
      question:'Yo voy ___ mi amigo.', options:['con','en','para','sin'], answer:0, explain:'con 表伴随，和朋友一起。' },
    { id:'es-g22', lang:'es', level:'A2', rule:'preterito indefinido vs imperfecto：前者表一次性动作，后者表习惯/背景。',
      question:'Cuando ___ niño, jugaba mucho.', options:['fui','era','fui','he sido'], answer:1, explain:'描述过去的习惯用 imperfecto。' },
    { id:'es-g23', lang:'es', level:'A2', rule:'肯定命令式：tú 肯定命令式的特殊形式。',
      question:'___ la verdad.', options:['Diga','Di','Dice','Diré'], answer:1, explain:'decir 的 tú 肯定命令式是 di。' },
    { id:'es-g24', lang:'es', level:'A2', rule:'比较级：más + adj/adv + que。',
      question:'Juan es ___ que Pedro.', options:['más alto','menos alto','tan alto','tan más alto'], answer:0, explain:'más...que 表比较。' },
    { id:'es-g25', lang:'es', level:'A2', rule:'无人称句：se + 动词第三人称表客观描述。',
      question:'En España ___ español.', options:['habla','se habla','hablan','hablar'], answer:1, explain:'se habla español 表西班牙说西班牙语。' },
    { id:'es-g26', lang:'es', level:'A2', rule:'副动词 (gerundio)：estar + gerundio 表进行时。',
      question:'Yo ___ comiendo.', options:['estoy','soy','estoy','soy'], answer:0, explain:'estar + gerundio 表正在进行的动作。' },
    { id:'es-g27', lang:'es', level:'B1', rule:'虚拟式现在时：情感表达 (me gusta que, me molesta que)。',
      question:'Me gusta que tú ___ aquí.', options:['ests','estés','estar','estando'], answer:1, explain:'me gusta que + 虚拟式 estés。' },
    { id:'es-g28', lang:'es', level:'B1', rule:'虚拟式现在时：怀疑与不确定 (dudar que, no creer que)。',
      question:'Dudo que él ___ la verdad.', options:['dice','diga','decía','dirá'], answer:1, explain:'dudar que + 虚拟式 diga。' },
    { id:'es-g29', lang:'es', level:'B1', rule:'条件式：creo que... / me gustaría... 表委婉看法。',
      question:'___ un café, por favor.', options:['Quisiera','Quiero','Quise','Quería'], answer:0, explain:'quisiere 是条件式，更礼貌。' },
    { id:'es-g30', lang:'es', level:'B1', rule:'过去完成时：había/habías/etc + 过去分词。',
      question:'Ya ___ terminado cuando llegaste.', options:['había','hube','tuve','tiene'], answer:0, explain:'过去完成时，表过去的过去。' },
    { id:'es-g31', lang:'es', level:'B1', rule:'关系从句：que 指物，quien 指人，donde 指地点。',
      question:'La casa ___ está en la playa.', options:['que','quien','cuyo','donde'], answer:0, explain:'que 引导限制性定语从句。' },
    { id:'es-g32', lang:'es', level:'B1', rule:'让步从句：aunque 表虽然/即使。',
      question:'___ estaba cansado, seguí trabajando.', options:['Aunque','Porque','Cuando','Si'], answer:0, explain:'aunque 表让步，虽然。' },
    { id:'es-g33', lang:'es', level:'B2', rule:'虚拟式过去时：表与过去事实相反的愿望。',
      question:'Ojalá que él ___ aquí.', options:['ests','estuviera','estar','estado'], answer:1, explain:'ojalá + 虚拟式过去时，表与现在事实相反。' },
    { id:'es-g34', lang:'es', level:'B2', rule:'条件复合句：si + 过去未完成时 + condicional。',
      question:'Si ___ dinero, compraría un coche.', options:['tengo','tenía','tuve','tenga'], answer:1, explain:'与现在事实相反的条件句。' },
    { id:'es-g35', lang:'es', level:'B2', rule:'被动语态与自复被动：se + 动词第三人称。',
      question:'Se ___ muchos libros en esta librería.', options:['venden','vendo','vender','vendido'], answer:0, explain:'se vende 表被动含义。' },
    { id:'es-g36', lang:'es', level:'B2', rule:'高级连接词：sin embargo(然而)、no obstante(尽管)、por tanto(因此)。',
      question:'Es difícil; ___, no imposible.', options:['sin embargo','porque','pero','y'], answer:0, explain:'sin embargo 表转折，然而。' },
    { id:'es-g37', lang:'es', level:'C1', rule:'虚拟式过去完成时：habría/hubiera + 过去分词。',
      question:'Si hubieras estudiado, ___ aprobado.', options:['habrías','hubieras','habías','tienes'], answer:0, explain:'与过去事实相反的条件句结果。' },
    { id:'es-g38', lang:'es', level:'C1', rule:'条件式完成时：habría + 过去分词，表与过去事实相反。',
      question:'Yo ___ ayudarte si hubiera sabido.', options:['habría','hubiera','tuve','tendría'], answer:0, explain:'habría 表与过去事实相反。' },
    { id:'es-g39', lang:'es', level:'C1', rule:'高级时态选择：叙事中先发生的动作用过去完成时。',
      question:'Cuando llegué, él ya ___ .', options:['salió','había salido','sale','saldrá'], answer:1, explain:'过去的过去，用过去完成时。' },
    { id:'es-g40', lang:'es', level:'C1', rule:'学术写作句式：en primer lugar, en segundo lugar, por último。',
      question:'___ , hay que considerar varios factores.', options:['En primer lugar','Entonces','Porque','Además'], answer:0, explain:'en primer lugar 表首要。' },
    { id:'es-g41', lang:'es', level:'C1', rule:'话语标记：ahora bien(然而)、en cuanto a(关于)、a saber(即)。',
      question:'___ los resultados, son positivos.', options:['En cuanto a','Entonces','Porque','Además'], answer:0, explain:'en cuanto a 关于。' },
    { id:'es-g42', lang:'es', level:'C2', rule:'高级修辞：no solo...sino que también。',
      question:'___ interesante, ___ importante.', options:['No solo es','No es','Es que','Es'], answer:0, explain:'no solo...sino que también。' },
    { id:'es-g43', lang:'es', level:'C2', rule:'高级句式：A fin de que, con objeto de que, en caso de que。',
      question:'Lo hice ___ pudiera aprobar.', options:['para que','a fin de que','porque','ya que'], answer:1, explain:'a fin de que + 虚拟式，表目的。' },
    { id:'es-g44', lang:'es', level:'C2', rule:'文学/正式语体：hállase, tuviese, hubiere 等古语残留。',
      question:'El libro ___ en la mesa.', options:['estaba','hállase','está','fue'], answer:1, explain:'hállase 是古语遗留，正式书面语。' },
    { id:'es-g45', lang:'es', level:'C2', rule:'高级连接： so pretexto de(以...为借口), a trueque de(以...为代价)。',
      question:'Lo hizo ___ de ayuda.', options:['a trueque','a pesar','en cuanto','por'], answer:0, explain:'a trueque de 以...为代价。' }
  ],
  fr: [
    { id:'fr-g1', lang:'fr', level:'A1', rule:'Être / Avoir：两个核心不规则动词，avoir 也作助动词。',
      question:'Je ___ étudiant.', options:['suis','es','ai','as'], answer:0, explain:'je 搭配 suis。' },
    { id:'fr-g2', lang:'fr', level:'A1', rule:'定冠词 le/la/les：阳/阴/复；不定冠词 un/une/des。',
      question:'___ livre est intéressant.', options:['Le','La','Les','Un'], answer:0, explain:'livre 阳性单数，用 Le。' },
    { id:'fr-g3', lang:'fr', level:'A1', rule:'现在时 -er 动词：je -e, tu -es, il/elle -e, nous -ons, vous -ez, ils -ent。',
      question:'Nous ___ le français.', options:['parlons','parle','parles','parlent'], answer:0, explain:'nous 用 -ons 结尾：parlons。' },
    { id:'fr-g4', lang:'fr', level:'A1', rule:'否定结构：ne + 动词 + pas。',
      question:'Je ___ comprends pas.', options:['ne','n\'','pas',''], answer:1, explain:'元音开头的动词前用 n\'。' },
    { id:'fr-g5', lang:'fr', level:'A2', rule:'Passé composé：avoir/être + 过去分词，表已完成动作。',
      question:'Hier, je ___ une lettre.', options:['écris','ai écrit','écrivais','écris'], answer:1, explain:'用 avoir + 过去分词。' },
    { id:'fr-g6', lang:'fr', level:'A2', rule:'Futur simple：-ai/-as/-a/-ons/-ez/-ont。',
      question:'Demain, je ___ au cinéma.', options:['vais','irai','allais','i'], answer:1, explain:'aller 的将来时第一人称是 irai。' },
    { id:'fr-g7', lang:'fr', level:'A2', rule:'Imparfait：表过去持续的状态或习惯动作。',
      question:'Quand j\'étais petit, je ___ beaucoup de livres.', options:['lis','lisais','lirai','ai lu'], answer:1, explain:'过去的习惯用 imparfait。' },
    { id:'fr-g8', lang:'fr', level:'B1', rule:'Conditionnel présent：表礼貌请求或假设 -ais/-ais/-ait/-ions/-iez/-aient。',
      question:'Je ___ un café, s\'il vous plaît.', options:['aime','aimerais','aimais','aimerai'], answer:1, explain:'aimerais (I would like) 表礼貌请求。' },
    { id:'fr-g9', lang:'fr', level:'B1', rule:'命令式：tu/il/elle/nous/vous 三种。',
      question:'___ ici, s\'il vous plaît.', options:['Viens','Venez','Venir','Venant'], answer:1, explain:'vous 命令式 venez。' },
    { id:'fr-g10', lang:'fr', level:'B1', rule:'代词宾语 le/la/les/me/te/lui/nous/vous/leur。',
      question:'Elle ___ donne un cadeau.', options:['me','je','lui','leur'], answer:0, explain:'间接宾语 me (给我)。' },
    { id:'fr-g11', lang:'fr', level:'B2', rule:'Subjonctif présent：用于表达愿望、怀疑、情感、可能性的从句中。',
      question:'Je veux que tu ___ le travail.', options:['fais','fasses','feras','faisais'], answer:1, explain:'vouloir que + 虚拟式 fasses。' },
    { id:'fr-g12', lang:'fr', level:'B2', rule:'关系代词 qui/que/où/dont/ce qui/ce que。',
      question:'C\'est le livre ___ j\'ai lu.', options:['qui','que','où','dont'], answer:1, explain:'que 作直接宾语，代替 le livre。' },
    { id:'fr-g13', lang:'fr', level:'C1', rule:'条件句过去时：aurais + 过去分词。',
      question:'Si j\'avais étudié plus, j\'___ réussi l\'examen.', options:['ai','aurais','avais','aurai'], answer:1, explain:'aurais + 过去分词。' },
    { id:'fr-g14', lang:'fr', level:'C1', rule:'ce qui / ce que / ce dont 的名词化结构。',
      question:'___ tu dis est intéressant.', options:['Ce qui','Ce que','Ce dont','Que'], answer:1, explain:'Ce que + 主语 + 动词，表所说的内容。' },
    { id:'fr-g15', lang:'fr', level:'C2', rule:'现在分词 / 副动词：en + 现在分词 表同时进行。',
      question:'___ en ville, j\'ai vu un accident.', options:['En marchant','Marchant','En marcher','Marche'], answer:0, explain:'en + 现在分词表同时进行。' },
    { id:'fr-g16', lang:'fr', level:'A1', rule:'不定冠词 un/une/des：表示泛指。',
      question:'J\'ai ___ livre.', options:['un','le','la','les'], answer:0, explain:'un 表泛指，一本书。' },
    { id:'fr-g17', lang:'fr', level:'A1', rule:'名词性数配合：-s/-x 结尾多为复数。',
      question:'Les ___ (fille) sont gentilles.', options:['filles','fille','fils','fille'], answer:0, explain:'filles 是复数形式。' },
    { id:'fr-g18', lang:'fr', level:'A1', rule:'疑问词：qui 谁、où 哪里、quand 什么时候、comment 如何。',
      question:'___ est-ce?', options:['Qui','Où','Quand','Comment'], answer:0, explain:'qui 用于询问是谁。' },
    { id:'fr-g19', lang:'fr', level:'A1', rule:'指示词 ce/cette/ces：这个/这些。',
      question:'___ maison est grande.', options:['Cette','Ce','Cet','Ces'], answer:0, explain:'maison 阴性，用 cette。' },
    { id:'fr-g20', lang:'fr', level:'A1', rule:'最近将来时：aller + 不定式。',
      question:'Je ___ manger.', options:['vais','allais','irai','ai allé'], answer:0, explain:'aller + inf 表即将。' },
    { id:'fr-g21', lang:'fr', level:'A1', rule:'最近过去时：venir de + 不定式。',
      question:'Je ___ de manger.', options:['viens','venais','viendrai','vins'], answer:0, explain:'venir de + inf 表刚刚。' },
    { id:'fr-g22', lang:'fr', level:'A2', rule:'复合过去时：avoir/être + 过去分词。',
      question:'Hier, elle ___ partie.', options:['est','a','avait','sera'], answer:0, explain:'partir 用 être 作助动词。' },
    { id:'fr-g23', lang:'fr', level:'A2', rule:'未完成过去时：用于描述过去持续的状态或习惯。',
      question:'Quand j\'étais petit, j\'___ du football.', options:['jouais','joué','joue','jouerai'], answer:0, explain:'过去的习惯用 imparfait。' },
    { id:'fr-g24', lang:'fr', level:'A2', rule:'否定：ne...jamais 从不、ne...plus 不再。',
      question:'Je ne ___ rien.', options:['vois','voir','vu','verrai'], answer:0, explain:'ne...rien 表什么都不。' },
    { id:'fr-g25', lang:'fr', level:'A2', rule:'形容词性数配合：与名词的性和数一致。',
      question:'Une robe ___ (beau/beaux/belle/belles).', options:['belle','beau','beaux','bel'], answer:0, explain:'robe 阴性单数，用 belle。' },
    { id:'fr-g26', lang:'fr', level:'A2', rule:'最高级：le/la/les + plus + adj。',
      question:'C\'est le livre ___ intéressant.', options:['le plus','plus','très','bien'], answer:0, explain:'最高级用 plus。' },
    { id:'fr-g27', lang:'fr', level:'A2', rule:'命令式否定：ne...pas + 动词。',
      question:'___ pas de bruit!', options:['Faites','Ne faites','Ne fait','Il fait'], answer:1, explain:'命令式否定结构。' },
    { id:'fr-g28', lang:'fr', level:'A2', rule:'间接宾语代词：lui 他们、leur 给它们。',
      question:'Je ___ ai donné un livre.', options:['lui','le','la','les'], answer:0, explain:'lui 指代第三人称间接宾语。' },
    { id:'fr-g29', lang:'fr', level:'B1', rule:'代词式动词：se lever、se souvenir。',
      question:'Je ___ à 7h chaque jour.', options:['me lève','lève','ai levé','lèverai'], answer:0, explain:'se lever 自反动词。' },
    { id:'fr-g30', lang:'fr', level:'B1', rule:'条件式现在时：表礼貌请求或假设。',
      question:'Je ___ un café, s\'il vous plaît.', options:['aimerais','aime','aimais','aimai'], answer:0, explain:'条件式表更礼貌的请求。' },
    { id:'fr-g31', lang:'fr', level:'B1', rule:'虚拟式现在时：情感、不确定、命令。',
      question:'Il faut que tu ___ maintenant.', options:['parties','partes','partis','partir'], answer:0, explain:'Il faut que + 虚拟式。' },
    { id:'fr-g32', lang:'fr', level:'B1', rule:'简单将来时 vs 最近将来时：后者更口语化。',
      question:'Je ___ demain. (= Je vais partir.)', options:['partirai','pars','partais','partis'], answer:0, explain:'简单将来时正规的将来时。' },
    { id:'fr-g33', lang:'fr', level:'B1', rule:'间接引语：主句过去时，从句时态后退。',
      question:'Il a dit qu\'il ___ demain.', options:['viendrait','vient','viendra','est venu'], answer:0, explain:'间接引语中将来时后退为条件式。' },
    { id:'fr-g34', lang:'fr', level:'B1', rule:'原因表达：parce que、donc、ainsi。',
      question:'Je suis resté chez moi ___ il pleuvait.', options:['parce que','donc','mais','ou'], answer:0, explain:'parce que 引导原因从句。' },
    { id:'fr-g35', lang:'fr', level:'B1', rule:'目的/让步：pour que、bien que。',
      question:'Je travaille dur ___ réussisse.', options:['pour que','parce que','mais','donc'], answer:0, explain:'pour que + 虚拟式，表目的。' },
    { id:'fr-g36', lang:'fr', level:'B2', rule:'虚拟式过去时：表与过去事实相反的愿望。',
      question:'Il était possible qu\'il ___ parti.', options:['soit','est','était','été'], answer:0, explain:'虚拟式过去时，表可能的过去动作。' },
    { id:'fr-g37', lang:'fr', level:'B2', rule:'条件式过去时：aurais + 过去分词。',
      question:'Si j\'avais su, je ___ venu.', options:['aurais','avais','ai','a'], answer:0, explain:'条件式过去时，表与过去事实相反。' },
    { id:'fr-g38', lang:'fr', level:'B2', rule:'高级时态综合：plus-que-parfait。',
      question:'Quand tu es arrivé, il ___ déjà parti.', options:['était','est','sera','été'], answer:0, explain:'plus-que-parfait 表过去的过去。' },
    { id:'fr-g39', lang:'fr', level:'B2', rule:'被动态：être + 过去分词。',
      question:'La lettre ___ par lui.', options:['écrite','écrit','écrire','écrivait'], answer:0, explain:'être écrit 表被动。' },
    { id:'fr-g40', lang:'fr', level:'B2', rule:'高级连接词：par conséquent、cependant、de plus。',
      question:'Il est petit; ___, il est fort.', options:['cependant','parce que','donc','mais'], answer:0, explain:'cependant 表转折，然而。' },
    { id:'fr-g41', lang:'fr', level:'C1', rule:'条件式与虚拟式综合运用。',
      question:'J\'aurais aimé qu\'il ___ plus tôt.', options:['vienne','vint','viendrait','viendra'], answer:0, explain:'条件式过去时 + 虚拟式过去时。' },
    { id:'fr-g42', lang:'fr', level:'C1', rule:'新闻语体：一般现在时报道过去事件。',
      question:'Le président ___ une déclaration.', options:['fait','faisait','fera','fit'], answer:0, explain:'新闻语体中一般现在时表过去。' },
    { id:'fr-g43', lang:'fr', level:'C1', rule:'学术写作：en effet、par ailleurs、d\'une part...d\'autre part。',
      question:'___ , les résultats sont positifs.', options:['En effet','Alors','Mais','Puis'], answer:0, explain:'en effet 事实上。' },
    { id:'fr-g44', lang:'fr', level:'C1', rule:'委婉表达：il semblerait que、il conviendrait de。',
      question:'___ que le projet soit accepté.', options:['Il semblerait','Il est','Il paraît','Il semble'], answer:0, explain:'委婉推测用虚拟式。' },
    { id:'fr-g45', lang:'fr', level:'C2', rule:'高级修辞：loin s\'en faut、à tout prendre、qui plus est。',
      question:'___ , il reste beaucoup à faire.', options:['Qui plus est','Parce que','Donc','Mais'], answer:0, explain:'qui plus est 更重要的是。' },
    { id:'fr-g46', lang:'fr', level:'C2', rule:'文学语体：subjonctif imparfait、plus-que-parfait du subjonctif。',
      question:'Il aurait fallu qu\'il ___ plus tôt.', options:['partît','parte','partait','parti'], answer:0, explain:'虚拟式未完成时，表过去。' },
    { id:'fr-g47', lang:'fr', level:'C2', rule:'高级句式：en venido de + 不定式、à mesure que。',
      question:'___ que les choses changent, tout reste pareil.', options:['À mesure','Pendant','Avant','Après'], answer:0, explain:'à mesure que 随着。' }
  ]
};

/* ===== 口语跟读 SPEAKING (每语言每级别 4-6 句) ===== */
const SPEAKING = {
  en: [
    { id:'en-s1', lang:'en', level:'A1', sentence:'Hello, my name is Tom.', translation:'你好，我叫汤姆。', tip:'慢速清晰地念出每个单词' },
    { id:'en-s2', lang:'en', level:'A1', sentence:'Good morning, everyone.', translation:'大家早上好。', tip:'注意 morning 的 /mɔːrnɪŋ/ 发音' },
    { id:'en-s3', lang:'en', level:'A1', sentence:'I am a student.', translation:'我是一名学生。', tip:'注意 student 的重音位置' },
    { id:'en-s4', lang:'en', level:'A1', sentence:'How are you today?', translation:'你今天好吗？', tip:'How are 可以连读' },
    { id:'en-s5', lang:'en', level:'A2', sentence:'I have breakfast at seven.', translation:'我七点吃早餐。', tip:'have 弱读为 /həv/' },
    { id:'en-s6', lang:'en', level:'A2', sentence:'The weather is nice today.', translation:'今天天气很好。', tip:'weather 与 whether 同音' },
    { id:'en-s7', lang:'en', level:'A2', sentence:'I will meet you at the airport.', translation:'我会在机场接你。', tip:'airport 重音在第一个音节' },
    { id:'en-s8', lang:'en', level:'A2', sentence:'My schedule is very busy.', translation:'我的日程很满。', tip:'schedule 的 /sk/ 音开头' },
    { id:'en-s9', lang:'en', level:'B1', sentence:'This is a great opportunity.', translation:'这是一个很好的机会。', tip:'opportunity 四个音节' },
    { id:'en-s10', lang:'en', level:'B1', sentence:'We must protect the environment.', translation:'我们必须保护环境。', tip:'environment 重音在第二个音节' },
    { id:'en-s11', lang:'en', level:'B1', sentence:'I have a good relationship with my boss.', translation:'我和老板关系很好。', tip:'relationship 重音在 tion' },
    { id:'en-s12', lang:'en', level:'B1', sentence:'You can achieve anything if you try.', translation:'只要尝试，你可以达成任何目标。', tip:'achieve 的 /tʃ/ 音' },
    { id:'en-s13', lang:'en', level:'B2', sentence:'This issue is highly controversial.', translation:'这个问题极具争议。', tip:'controversial 重音在 ver' },
    { id:'en-s14', lang:'en', level:'B2', sentence:'The report is comprehensive.', translation:'这份报告很全面。', tip:'comprehensive 四个音节' },
    { id:'en-s15', lang:'en', level:'B2', sentence:'I want to emphasize the importance.', translation:'我想强调重要性。', tip:'emphasize 的 /s/ 音' },
    { id:'en-s16', lang:'en', level:'B2', sentence:'Nevertheless, we went for a walk.', translation:'尽管如此，我们还是去散步了。', tip:'nevertheless 三个音节' },
    { id:'en-s17', lang:'en', level:'C1', sentence:'Smartphones are ubiquitous nowadays.', translation:'智能手机无处不在。', tip:'ubiquitous 重音在 bi' },
    { id:'en-s18', lang:'en', level:'C1', sentence:'She understands the nuances.', translation:'她理解其中的细微差别。', tip:'nuances 源自法语' },
    { id:'en-s19', lang:'en', level:'C1', sentence:'An eloquent speech moved the audience.', translation:'一场雄辩的演讲感动了观众。', tip:'eloquent 的 /kw/ 音' },
    { id:'en-s20', lang:'en', level:'C2', sentence:'The quintessential gentleman.', translation:'典型的绅士。', tip:'quintessential 的 kw 开头' },
    { id:'en-s21', lang:'en', level:'C2', sentence:'Fame can be ephemeral.', translation:'名声可以是短暂的。', tip:'ephemeral 重音在 phe' },
    { id:'en-s22', lang:'en', level:'A1', sentence:'My name is Alice.', translation:'我的名字是爱丽丝。', tip:'name 的 /neɪm/ 音' },
    { id:'en-s23', lang:'en', level:'A1', sentence:'I am from China.', translation:'我来自中国。', tip:'from 的 /frʌm/ 音' },
    { id:'en-s24', lang:'en', level:'A1', sentence:'This is my friend.', translation:'这是我的朋友。', tip:'friend 的 /frɛnd/ 音' },
    { id:'en-s25', lang:'en', level:'A1', sentence:'How old are you?', translation:'你多大了？', tip:'How old 连读' },
    { id:'en-s26', lang:'en', level:'A1', sentence:'I am twenty years old.', translation:'我二十岁。', tip:'twenty 的两个音节' },
    { id:'en-s27', lang:'en', level:'A1', sentence:'Nice to meet you.', translation:'很高兴见到你。', tip:'Nice to 可连读' },
    { id:'en-s28', lang:'en', level:'A1', sentence:'Good afternoon.', translation:'下午好。', tip:'afternoon 的重音' },
    { id:'en-s29', lang:'en', level:'A1', sentence:'Good evening.', translation:'晚上好。', tip:'evening 的 /v/ 音' },
    { id:'en-s30', lang:'en', level:'A1', sentence:'Good night.', translation:'晚安。', tip:'Good night 分开发音' },
    { id:'en-s31', lang:'en', level:'A1', sentence:'See you tomorrow.', translation:'明天见。', tip:'See you 连读' },
    { id:'en-s32', lang:'en', level:'A1', sentence:'Thank you very much.', translation:'非常感谢你。', tip:'very 的 /v/ 音' },
    { id:'en-s33', lang:'en', level:'A1', sentence:'You are welcome.', translation:'不客气。', tip:'welcome 的 /w/ 音' },
    { id:'en-s34', lang:'en', level:'A1', sentence:'Excuse me.', translation:'打扰一下。', tip:'Excuse 的 /ks/ 开头' },
    { id:'en-s35', lang:'en', level:'A1', sentence:'Sorry, I don\'t understand.', translation:'对不起，我不懂。', tip:'don\'t 的 /t/ 音' },
    { id:'en-s36', lang:'en', level:'A1', sentence:'Can you speak slower?', translation:'你能说慢点吗？', tip:'slower 的比较级' },
    { id:'en-s37', lang:'en', level:'A1', sentence:'Please say it again.', translation:'请再说一遍。', tip:'say it 连读' },
    { id:'en-s38', lang:'en', level:'A1', sentence:'I don\'t know.', translation:'我不知道。', tip:'don\'t know 的 t 失爆' },
    { id:'en-s39', lang:'en', level:'A1', sentence:'Yes, of course.', translation:'是的，当然。', tip:'of course 的连读' },
    { id:'en-s40', lang:'en', level:'A1', sentence:'No, thank you.', translation:'不用，谢谢。', tip:'No thank 的 n 到 th 过渡' },
    { id:'en-s41', lang:'en', level:'A2', sentence:'I like reading books.', translation:'我喜欢读书。', tip:'like reading 的 /k/ 过渡' },
    { id:'en-s42', lang:'en', level:'A2', sentence:'What time is it?', translation:'现在几点了？', tip:'time is it 的快速连读' },
    { id:'en-s43', lang:'en', level:'A2', sentence:'It is seven thirty.', translation:'七点三十分。', tip:'seven thirty 的重音' },
    { id:'en-s44', lang:'en', level:'A2', sentence:'What day is today?', translation:'今天星期几？', tip:'day 的 /deɪ/ 音' },
    { id:'en-s45', lang:'en', level:'A2', sentence:'Today is Monday.', translation:'今天是星期一。', tip:'Monday 的重音' },
    { id:'en-s46', lang:'en', level:'A2', sentence:'When were you born?', translation:'你何时出生的？', tip:'were 的 /wɜːr/ 音' },
    { id:'en-s47', lang:'en', level:'A2', sentence:'I was born in 2000.', translation:'我出生于 2000 年。', tip:'was 的弱读' },
    { id:'en-s48', lang:'en', level:'A2', sentence:'Where do you live?', translation:'你住在哪里？', tip:'do you 可连读成 /dʒə/' },
    { id:'en-s49', lang:'en', level:'A2', sentence:'I live in Beijing.', translation:'我住在北京。', tip:'in Beijing 的 in 弱读' },
    { id:'en-s50', lang:'en', level:'A2', sentence:'What is your job?', translation:'你的工作是什么？', tip:'What is 可连读' },
    { id:'en-s51', lang:'en', level:'A2', sentence:'I am a teacher.', translation:'我是一名老师。', tip:'teacher 的 /tʃ/ 音' },
    { id:'en-s52', lang:'en', level:'A2', sentence:'Where do you work?', translation:'你在哪里工作？', tip:'work 的 /wɜːrk/ 音' },
    { id:'en-s53', lang:'en', level:'A2', sentence:'I work at a school.', translation:'我在学校工作。', tip:'at a 连读' },
    { id:'en-s54', lang:'en', level:'A2', sentence:'What is your hobby?', translation:'你的爱好是什么？', tip:'hobby 的 /h/ 开头' },
    { id:'en-s55', lang:'en', level:'A2', sentence:'I enjoy playing the piano.', translation:'我喜欢弹钢琴。', tip:'enjoy 的 /ɪnˈdʒɔɪ/ 音' },
    { id:'en-s56', lang:'en', level:'A2', sentence:'Do you have any siblings?', translation:'你有兄弟姐妹吗？', tip:'siblings 的 /zb/ 辅音' },
    { id:'en-s57', lang:'en', level:'A2', sentence:'I have two brothers.', translation:'我有两个兄弟。', tip:'two brothers 的重音位置' },
    { id:'en-s58', lang:'en', level:'A2', sentence:'Can you help me?', translation:'你能帮我吗？', tip:'Can you 可连读' },
    { id:'en-s59', lang:'en', level:'B1', sentence:'In my opinion, education is important.', translation:'在我看来，教育是重要的。', tip:'education 的重音' },
    { id:'en-s60', lang:'en', level:'B1', sentence:'I strongly believe that teamwork matters.', translation:'我坚信团队合作很重要。', tip:'strongly 的 /str/ 音' },
    { id:'en-s61', lang:'en', level:'B1', sentence:'What do you think about this idea?', translation:'你对这个想法怎么看？', tip:'think about 的连读' },
    { id:'en-s62', lang:'en', level:'B1', sentence:'It depends on the situation.', translation:'视情况而定。', tip:'depends on 的连读' },
    { id:'en-s63', lang:'en', level:'B1', sentence:'Let me think about it.', translation:'让我想想。', tip:'Let me 可缩读成 lemme' },
    { id:'en-s64', lang:'en', level:'B1', sentence:'I completely agree with you.', translation:'我完全同意你的看法。', tip:'completely 的 /pli/ 音' },
    { id:'en-s65', lang:'en', level:'B1', sentence:'I respectfully disagree.', translation:'我尊重地表示不同意。', tip:'respectfully 的重音' },
    { id:'en-s66', lang:'en', level:'B1', sentence:'That sounds like a good plan.', translation:'听起来像个好计划。', tip:'sounds like 的连读' },
    { id:'en-s67', lang:'en', level:'B1', sentence:'Let us discuss it further.', translation:'让我们进一步讨论。', tip:'discuss it 的连读' },
    { id:'en-s68', lang:'en', level:'B1', sentence:'We need to consider all options.', translation:'我们需要考虑所有选项。', tip:'consider 的重音' },
    { id:'en-s69', lang:'en', level:'B1', sentence:'Have you made a decision?', translation:'你做决定了吗？', tip:'made a 的连读' },
    { id:'en-s70', lang:'en', level:'B1', sentence:'I appreciate your help.', translation:'我感谢你的帮助。', tip:'appreciate 的 /ʃieɪt/ 音' },
    { id:'en-s71', lang:'en', level:'B2', sentence:'Your argument is compelling but flawed.', translation:'你的论点有说服力但有缺陷。', tip:'compelling 的重音' },
    { id:'en-s72', lang:'en', level:'B2', sentence:'I would like to elaborate on this point.', translation:'我想详细说明这一点。', tip:'elaborate 的重音位置' },
    { id:'en-s73', lang:'en', level:'B2', sentence:'The evidence corroborates our claim.', translation:'证据支持了我们的主张。', tip:'corroborates 的重音' },
    { id:'en-s74', lang:'en', level:'B2', sentence:'Conversely, there is another interpretation.', translation:'相反，还有另一种解释。', tip:'Conversely 的 /v/ 音' },
    { id:'en-s75', lang:'en', level:'B2', sentence:'Subsequently, we changed our approach.', translation:'之后，我们改变了方法。', tip:'Subsequently 的重音' },
    { id:'en-s76', lang:'en', level:'B2', sentence:'It is a matter of perspective.', translation:'这是一个视角的问题。', tip:'perspective 的 /spek/ 音' },
    { id:'en-s77', lang:'en', level:'B2', sentence:'We should prioritize efficiency.', translation:'我们应该优先考虑效率。', tip:'prioritize 的重音' },
    { id:'en-s78', lang:'en', level:'B2', sentence:'What are the underlying causes?', translation:'根本原因是什么？', tip:'underlying 的重音' },
    { id:'en-s79', lang:'en', level:'B2', sentence:'Let us analyze this systematically.', translation:'让我们系统地分析。', tip:'systematically 的重音' },
    { id:'en-s80', lang:'en', level:'B2', sentence:'The situation deteriorated rapidly.', translation:'情况迅速恶化。', tip:'deteriorated 的重音' },
    { id:'en-s81', lang:'en', level:'C1', sentence:'A paradigm shift is taking place.', translation:'正在发生范式转变。', tip:'paradigm 的重音' },
    { id:'en-s82', lang:'en', level:'C1', sentence:'His eloquence captivated the audience.', translation:'他的口才迷住了听众。', tip:'eloquence 的 /kw/ 音' },
    { id:'en-s83', lang:'en', level:'C1', sentence:'The ramifications are far-reaching.', translation:'影响是深远的。', tip:'ramifications 的重音' },
    { id:'en-s84', lang:'en', level:'C1', sentence:'We must take a pragmatic approach.', translation:'我们必须采取务实的方法。', tip:'pragmatic 的 /præɡ/ 音' },
    { id:'en-s85', lang:'en', level:'C1', sentence:'It is a quintessential example.', translation:'这是一个典型的例子。', tip:'quintessential 的 /kw/ 开头' },
    { id:'en-s86', lang:'en', level:'C1', sentence:'The nuances escape casual readers.', translation:'细微之处逃过了普通读者。', tip:'nuances 的 /njuː/ 音' },
    { id:'en-s87', lang:'en', level:'C1', sentence:'She articulated her thoughts clearly.', translation:'她清晰地表达了自己的想法。', tip:'articulated 的重音' },
    { id:'en-s88', lang:'en', level:'C2', sentence:'His magnanimity impressed everyone.', translation:'他的宽宏大量感动了所有人。', tip:'magnanimity 的重音' },
    { id:'en-s89', lang:'en', level:'C2', sentence:'The ineffable beauty of the sunset.', translation:'日落不可言喻的美。', tip:'ineffable 的 /ɪnˈɛfəbl/ 音' },
    { id:'en-s90', lang:'en', level:'C2', sentence:'He is a perspicacious observer.', translation:'他是个敏锐的观察者。', tip:'perspicacious 的重音' }
  ],
  ja: [
    { id:'ja-s1', lang:'ja', level:'A1', sentence:'こんにちは、田中さん。', translation:'你好，田中先生。', tip:'こんにちは 的 ha 读作 wa' },
    { id:'ja-s2', lang:'ja', level:'A1', sentence:'ありがとうございます。', translation:'非常感谢。', tip:'ございます 的连音' },
    { id:'ja-s3', lang:'ja', level:'A1', sentence:'私は学生です。', translation:'我是学生。', tip:'は 读作 wa' },
    { id:'ja-s4', lang:'ja', level:'A1', sentence:'これは本です。', translation:'这是一本书。', tip:'これ 的 ko-re' },
    { id:'ja-s5', lang:'ja', level:'A2', sentence:'朝ごはんを食べます。', translation:'我吃早餐。', tip:'朝ごはん 的长音' },
    { id:'ja-s6', lang:'ja', level:'A2', sentence:'今日はいい天気ですね。', translation:'今天天气真好。', tip:'ね 结尾带升调' },
    { id:'ja-s7', lang:'ja', level:'A2', sentence:'駅はどこですか。', translation:'车站在哪里？', tip:'か 结尾为升调' },
    { id:'ja-s8', lang:'ja', level:'A2', sentence:'電車で行きます。', translation:'坐电车去。', tip:'電車 的 den-sha' },
    { id:'ja-s9', lang:'ja', level:'B1', sentence:'これは良い機会です。', translation:'这是个好机会。', tip:'機会 读作 ki-kai' },
    { id:'ja-s10', lang:'ja', level:'B1', sentence:'環境を守りましょう。', translation:'让我们保护环境。', tip:'ましょう 表建议' },
    { id:'ja-s11', lang:'ja', level:'B1', sentence:'あなたの意見は何ですか。', translation:'你的意见是什么？', tip:'意見 的 i-ken' },
    { id:'ja-s12', lang:'ja', level:'B1', sentence:'大きな影響があります。', translation:'有很大的影响。', tip:'影響 的 ei-kyou' },
    { id:'ja-s13', lang:'ja', level:'B2', sentence:'増加傾向にあります。', translation:'有增加趋势。', tip:'傾向 的 kei-kou' },
    { id:'ja-s14', lang:'ja', level:'B2', sentence:'科学的な根拠があります。', translation:'有科学根据。', tip:'根拠 的 kon-kyo' },
    { id:'ja-s15', lang:'ja', level:'B2', sentence:'問題の本質を見てください。', translation:'请看问题的本质。', tip:'本質 的 hon-shi-tsu' },
    { id:'ja-s16', lang:'ja', level:'C1', sentence:'独自の見識があります。', translation:'有独到的见识。', tip:'見識 的 ken-shiki' },
    { id:'ja-s17', lang:'ja', level:'C1', sentence:'包括的に検討します。', translation:'包括性地讨论。', tip:'包括 的 hou-ka-tsu' },
    { id:'ja-s18', lang:'ja', level:'C2', sentence:'状況を斟酌して判断します。', translation:'斟酌情况后判断。', tip:'斟酌 的 shin-shaku' },
    { id:'ja-s19', lang:'ja', level:'A1', sentence:'おはようございます。', translation:'早上好。', tip:'おはよう 礼貌问候' },
    { id:'ja-s20', lang:'ja', level:'A1', sentence:'こんばんは。', translation:'晚上好。', tip:'こんばんは 晚间问候' },
    { id:'ja-s21', lang:'ja', level:'A1', sentence:'さようなら。', translation:'再见。', tip:'さようなら 告别' },
    { id:'ja-s22', lang:'ja', level:'A1', sentence:'はじめまして。', translation:'初次见面。', tip:'はじめまして 初次' },
    { id:'ja-s23', lang:'ja', level:'A1', sentence:'よろしくお願いします。', translation:'请多关照。', tip:'よろしく 典型问候' },
    { id:'ja-s24', lang:'ja', level:'A1', sentence:'お元気ですか。', translation:'你好吗。', tip:'おげんき 问候身体' },
    { id:'ja-s25', lang:'ja', level:'A1', sentence:'少々お待ちください。', translation:'请稍等。', tip:'少々 稍微' },
    { id:'ja-s26', lang:'ja', level:'A1', sentence:'お待たせしました。', translation:'让您久等了。', tip:'お待たせ 客气语' },
    { id:'ja-s27', lang:'ja', level:'A1', sentence:'いただきます。', translation:'开动了。', tip:'饭前语' },
    { id:'ja-s28', lang:'ja', level:'A1', sentence:'ごちそうさま。', translation:'谢谢款待。', tip:'饭后语' },
    { id:'ja-s29', lang:'ja', level:'A1', sentence:'頑張ります。', translation:'我会加油的。', tip:'頑張る 努力' },
    { id:'ja-s30', lang:'ja', level:'A1', sentence:'元気を出して。', translation:'打起精神来。', tip:'元気 精神' },
    { id:'ja-s31', lang:'ja', level:'A1', sentence:'お大事に。', translation:'保重。', tip:'お大事に 保重' },
    { id:'ja-s32', lang:'ja', level:'A1', sentence:'お誕生日おめでとう。', translation:'生日快乐。', tip:'おたんじょうび' },
    { id:'ja-s33', lang:'ja', level:'A1', sentence:'あけましておめでとう。', translation:'新年快乐。', tip:'新年 祝贺' },
    { id:'ja-s34', lang:'ja', level:'A1', sentence:'遅れてすみません。', translation:'抱歉迟到了。', tip:'遅れる 迟到' },
    { id:'ja-s35', lang:'ja', level:'A1', sentence:'先に失礼します。', translation:'我先告辞了。', tip:'失礼 告辞' },
    { id:'ja-s36', lang:'ja', level:'A1', sentence:'お疲れ様です。', translation:'辛苦了。', tip:'お疲れ 辛苦' },
    { id:'ja-s37', lang:'ja', level:'A1', sentence:'はい、そうです。', translation:'是的。', tip:'はい 肯定' },
    { id:'ja-s38', lang:'ja', level:'A1', sentence:'いいえ、違います。', translation:'不，不对。', tip:'違う 不同' },
    { id:'ja-s39', lang:'ja', level:'A2', sentence:'私は毎朝七時に起きます。', translation:'每天早上七点起床。', tip:'起きる 起床' },
    { id:'ja-s40', lang:'ja', level:'A2', sentence:'朝ごはんを八時に食べます。', translation:'八点吃早饭。', tip:'朝ごはん 早餐' },
    { id:'ja-s41', lang:'ja', level:'A2', sentence:'電車で学校に行きます。', translation:'坐电车去学校。', tip:'でんしゃ 电车' },
    { id:'ja-s42', lang:'ja', level:'A2', sentence:'私は大学の学生です。', translation:'我是大学生。', tip:'だいがく 大学' },
    { id:'ja-s43', lang:'ja', level:'A2', sentence:'専攻はコンピューターです。', translation:'专业是计算机。', tip:'せんこう 专业' },
    { id:'ja-s44', lang:'ja', level:'A2', sentence:'趣味は映画を見ることです。', translation:'爱好是看电影。', tip:'しゅみ 爱好' },
    { id:'ja-s45', lang:'ja', level:'A2', sentence:'週末に友達と映画を見ます。', translation:'周末和朋友看电影。', tip:'しゅうまつ 周末' },
    { id:'ja-s46', lang:'ja', level:'A2', sentence:'先月、京都に行きました。', translation:'上个月去了京都。', tip:'せんげつ 上月' },
    { id:'ja-s47', lang:'ja', level:'A2', sentence:'桜がとてもきれいでした。', translation:'樱花很美。', tip:'さくら 樱花' },
    { id:'ja-s48', lang:'ja', level:'A2', sentence:'写真をたくさん撮りました。', translation:'拍了很多照片。', tip:'しゃしん 照片' },
    { id:'ja-s49', lang:'ja', level:'A2', sentence:'この料理はどうやって作りますか。', translation:'这道菜怎么做。', tip:'りょうり 料理' },
    { id:'ja-s50', lang:'ja', level:'A2', sentence:'私は料理が得意です。', translation:'我擅长做菜。', tip:'とくい 擅长' },
    { id:'ja-s51', lang:'ja', level:'A2', sentence:'レストランでよく寿司を食べます。', translation:'经常在餐厅吃寿司。', tip:'すし 寿司' },
    { id:'ja-s52', lang:'ja', level:'A2', sentence:'メニューを見せてください。', translation:'请拿菜单给我看。', tip:'メニュー 菜单' },
    { id:'ja-s53', lang:'ja', level:'A2', sentence:'おすすめは何ですか。', translation:'推荐菜是什么。', tip:'おすすめ 推荐' },
    { id:'ja-s54', lang:'ja', level:'A2', sentence:'飲み物は何にしますか。', translation:'要什么饮料。', tip:'のみもの 饮料' },
    { id:'ja-s55', lang:'ja', level:'A2', sentence:'今日は寒いですね。', translation:'今天好冷。', tip:'さむい 冷' },
    { id:'ja-s56', lang:'ja', level:'A2', sentence:'雨が降っています。', translation:'在下雨。', tip:'あめ 雨' },
    { id:'ja-s57', lang:'ja', level:'A2', sentence:'傘を持っていますか。', translation:'有带伞吗。', tip:'かさ 伞' },
    { id:'ja-s58', lang:'ja', level:'A2', sentence:'近くに銀行がありますか。', translation:'附近有银行吗。', tip:'ぎんこう 银行' },
    { id:'ja-s59', lang:'ja', level:'B1', sentence:'もし時間があれば、図書館に行って本を借りたいです。', translation:'如果有时间，想去图书馆借书。', tip:'もし～ば 条件' },
    { id:'ja-s60', lang:'ja', level:'B1', sentence:'日本に来てから、もう半年が経ちました。', translation:'来日本已经半年了。', tip:'～てから 自从' },
    { id:'ja-s61', lang:'ja', level:'B1', sentence:'今までに、日本の小説を三冊読みました。', translation:'至今已读了三本日本小说。', tip:'いままでに 至今' },
    { id:'ja-s62', lang:'ja', level:'B1', sentence:'最近、仕事が忙しくて運動する時間がありません。', translation:'最近工作忙没有运动时间。', tip:'うんどう 运动' },
    { id:'ja-s63', lang:'ja', level:'B1', sentence:'できるだけ毎日日記を書くようにしています。', translation:'尽量每天写日记。', tip:'にっき 日记' },
    { id:'ja-s64', lang:'ja', level:'B1', sentence:'日本語をもっと上手に話せるようになりたいです。', translation:'想更会说日语。', tip:'じょうず 擅长' },
    { id:'ja-s65', lang:'ja', level:'B1', sentence:'先生によると、文法は毎日少しずつ勉強するのがいいそうです。', translation:'听说老师说每天学一点语法好。', tip:'～によると 据说' },
    { id:'ja-s66', lang:'ja', level:'B1', sentence:'この辞書はとても便利なので、よく使います。', translation:'这本字典很方便所以常用。', tip:'べんり 方便' },
    { id:'ja-s67', lang:'ja', level:'B1', sentence:'漢字は難しいですが、面白いと思います。', translation:'汉字虽难但有趣。', tip:'かんじ 汉字' },
    { id:'ja-s68', lang:'ja', level:'B1', sentence:'温泉に入ると、体がとてもリラックスします。', translation:'泡温泉时身体很放松。', tip:'おんせん 温泉' },
    { id:'ja-s69', lang:'ja', level:'B1', sentence:'そのニュースを聞いて、みんな驚きました。', translation:'听到那消息大家都惊讶。', tip:'ニュース 消息' },
    { id:'ja-s70', lang:'ja', level:'B1', sentence:'彼はまだ来ていませんが、たぶん遅れてくるでしょう。', translation:'他还没来，大概会迟到。', tip:'たぶん 大概' },
    { id:'ja-s71', lang:'ja', level:'B1', sentence:'明日の朝、早く起きなければなりません。', translation:'明天早上必须早起。', tip:'～なければならない 必须' },
    { id:'ja-s72', lang:'ja', level:'B1', sentence:'試験のために、今夜は徹夜で勉強するつもりです。', translation:'为了考试今晚打算熬夜学习。', tip:'てつや 熬夜' },
    { id:'ja-s73', lang:'ja', level:'B1', sentence:'このレストランは先輩に教えてもらいました。', translation:'这家餐厅是前辈告诉我的。', tip:'せんぱい 前辈' },
    { id:'ja-s74', lang:'ja', level:'B1', sentence:'日本人の友達ができて、とても嬉しいです。', translation:'交到日本朋友很开心。', tip:'うれしい 开心' },
    { id:'ja-s75', lang:'ja', level:'B1', sentence:'約束の時間に遅れないように気をつけてください。', translation:'请注意不要迟到约定时间。', tip:'やくそく 约定' },
    { id:'ja-s76', lang:'ja', level:'B2', sentence:'一般的に言えば、日本語の文法は英語と比べて非常に異なっています。', translation:'一般来说日语语法和英语非常不同。', tip:'いっぱんてきに 一般来说' },
    { id:'ja-s77', lang:'ja', level:'B2', sentence:'日本文化における和の精神は、社会のあらゆる層に深く根ざしています。', translation:'日本文化中和的精神深深植根于社会各层。', tip:'わ 和' },
    { id:'ja-s78', lang:'ja', level:'B2', sentence:'近年、日本企業の間では、働き方改革への関心がますます高まっています。', translation:'近年来日本企业对工作方式改革的关注日益增强。', tip:'はたらきかたかいかく 工作方式改革' },
    { id:'ja-s79', lang:'ja', level:'B2', sentence:'長時間労働は、労働者の心身に深刻な影響を与えます。', translation:'长时间工作对劳动者的身心造成深刻影响。', tip:'しんしん 身心' },
    { id:'ja-s80', lang:'ja', level:'B2', sentence:'環境問題は一国だけの努力で解決できるものではなく、国際協力が不可欠です。', translation:'环境问题不是一国努力能解决的，国际合作不可缺少。', tip:'こくさいきょうりょく 国际合作' },
    { id:'ja-s81', lang:'ja', level:'B2', sentence:'持続可能な開発を実現するためには、私たち一人ひとりの行動が重要です。', translation:'要实现可持续发展，每个人的行动都很重要。', tip:'じぞくかのう 可持续' },
    { id:'ja-s82', lang:'ja', level:'B2', sentence:'教育の機会均等は、民主主義社会の基盤をなす重要な原則です。', translation:'教育机会均等是民主社会基础的重要原则。', tip:'きばん 基础' },
    { id:'ja-s83', lang:'ja', level:'B2', sentence:'科学技術の進歩は私たちの生活を豊かにする一方で、新たな倫理的課題も生み出します。', translation:'科技进步丰富生活同时也产生新的伦理课题。', tip:'りんりてき 伦理的' },
    { id:'ja-s84', lang:'ja', level:'B2', sentence:'人工知能の発展により、多くの仕事が今後変化すると予測されています。', translation:'随着人工智能发展，预计未来许多工作将变化。', tip:'じんこうちのう 人工智能' },
    { id:'ja-s85', lang:'ja', level:'B2', sentence:'そのような変化に柔軟に対応できる能力が、これからますます重要になるでしょう。', translation:'能灵活应对这种变化的能力今后将越来越重要。', tip:'じゅうなん 灵活' },
    { id:'ja-s86', lang:'ja', level:'B2', sentence:'リモートワークが普及するにつれて、働く場所や時間の自由度が高まっています。', translation:'随着远程办公普及，工作地点和时间的自由度正在提高。', tip:'リモートワーク 远程工作' },
    { id:'ja-s87', lang:'ja', level:'B2', sentence:'文化的多様性を尊重し相互理解を深めることは、平和な社会を築く上で極めて重要です。', translation:'尊重文化多样性深化相互理解对构建和平社会至关重要。', tip:'たようせい 多样性' },
    { id:'ja-s88', lang:'ja', level:'C1', sentence:'戦後日本の経済的復興は、政府主導の産業政策と勤勉な労働力の相乗効果によって達成されました。', translation:'战后日本经济复兴由政府主导产业政策与勤勉劳动力协同作用达成。', tip:'ふっこう 复兴' },
    { id:'ja-s89', lang:'ja', level:'C1', sentence:'日本における終身雇用制度は、高度経済成長期に経営の安定性を維持する上で重要な役割を果たしてきました。', translation:'日本终身雇佣制度在经济高速增长期对维持经营稳定发挥了重要作用。', tip:'しゅうしんこよう 终身雇佣' },
    { id:'ja-s90', lang:'ja', level:'C1', sentence:'少子高齢化と人口減少は日本社会に深刻な影響を与えており、社会保障制度の持続可能性に課題を引き起こしています。', translation:'少子高龄化和人口减少对日本社会产生深刻影响，引发社会保障制度可持续性课题。', tip:'しょうしこうれいか 少子高龄化' },
    { id:'ja-s91', lang:'ja', level:'C1', sentence:'日本の法制度は、明治期にヨーロッパ大陸法の影響を強く受けて形成されました。', translation:'日本法律制度在明治时期受欧洲大陆法强烈影响形成。', tip:'ほうせいど 法律制度' },
    { id:'ja-s92', lang:'ja', level:'C1', sentence:'憲法第九条をめぐる論争は、戦後日本の安全保障政策の根幹をなす問題です。', translation:'围绕宪法第九条的争论是战后日本安保政策的根本问题。', tip:'だいきゅうじょう 第九条' },
    { id:'ja-s93', lang:'ja', level:'C1', sentence:'日本文学におけるもののあはれの概念は、平安時代の王朝文化の中で育まれました。', translation:'日本文学中物哀概念孕育于平安时代王朝文化中。', tip:'もののあはれ 物哀' },
    { id:'ja-s94', lang:'ja', level:'C1', sentence:'能狂言歌舞伎文楽といった伝統芸能は、それぞれ独自の様式と表現体系を発展させてきました。', translation:'能狂言歌舞伎文乐等传统表演艺术各自发展了独特的形式和表现体系。', tip:'のう 能 + かぶき 歌舞伎' },
    { id:'ja-s95', lang:'ja', level:'C1', sentence:'日本の近代建築は、西洋建築の技術と様式を導入しつつも独自の発展を遂げてきました。', translation:'日本近代建筑在引入西方建筑技术和样式的同时实现了独特发展。', tip:'けんちく 建筑' },
    { id:'ja-s96', lang:'ja', level:'C2', sentence:'日本における家制度は、明治民法の下で制度化され、家父長的権力構造を通じて家族成員の身分関係を規定しました。', translation:'日本的家制度在明治民法下制度化，通过父权结构规定家族成员身份关系。', tip:'こせき 家制度' },
    { id:'ja-s97', lang:'ja', level:'C2', sentence:'ヘーゲル弁証法の枠組みを援用して日本の近代化を捉えると、封建制から絶対主義を経て立憲体制へ至る質的躍進として把握されます。', translation:'运用黑格尔辩证法框架把握日本近代化，可将明治维新视为从封建制经绝对主义到立宪体制的质的飞跃。', tip:'へーげる 黑格尔 + べんしょうほう 辩证法' },
    { id:'ja-s98', lang:'ja', level:'C2', sentence:'戦後日本の哲学的言説は、丸山眞男に代表される近代主義的分析と京都学派の超越論的思惟の間で展開されてきました。', translation:'战后日本的哲学言说在以丸山真男为代表的近代主义分析与京都学派的超越论思维之间展开。', tip:'まるやままさお 丸山真男 + きょうとがくは 京都学派' },
    { id:'ja-s99', lang:'ja', level:'C2', sentence:'グローバル資本主義の下での場所の消失とも言うべき現象に対抗するように、日本の多くの地域コミュニティでは、ふるさとへの回帰を通じた新たな持続可能な地域社会の構築が試みられています。', translation:'为对抗全球资本主义下可谓场所消失的现象，日本许多地方社区正尝试通过回归故乡构建新的可持续地方社会。', tip:'グローバルしほんしゅぎ 全球资本主义 + ふるさと 故乡' }
  ],
  ko: [
    { id:'ko-s1', lang:'ko', level:'A1', sentence:'안녕하세요, 저는 리사예요.', translation:'你好，我是丽萨。', tip:'안녕하세요 的发音' },
    { id:'ko-s2', lang:'ko', level:'A1', sentence:'정말 감사합니다!', translation:'真的非常感谢！', tip:'감사합니다 的 hap 连读' },
    { id:'ko-s3', lang:'ko', level:'A1', sentence:'물 한 잔 주세요.', translation:'请来一杯水。', tip:'한 잔 的 han jan' },
    { id:'ko-s4', lang:'ko', level:'A1', sentence:'학교에 가요.', translation:'去学校。', tip:'에 表方向' },
    { id:'ko-s5', lang:'ko', level:'A2', sentence:'식당에서 밥을 먹어요.', translation:'在餐厅吃饭。', tip:'에서 表场所' },
    { id:'ko-s6', lang:'ko', level:'A2', sentence:'어제 영화를 봤어요.', translation:'昨天看了电影。', tip:'봤어요 的过去时' },
    { id:'ko-s7', lang:'ko', level:'A2', sentence:'날씨가 좋아요.', translation:'天气很好。', tip:'좋아요 的 jo-a-yo' },
    { id:'ko-s8', lang:'ko', level:'B1', sentence:'좋은 기회예요.', translation:'这是个好机会。', tip:'기회 的 gi-hoe' },
    { id:'ko-s9', lang:'ko', level:'B1', sentence:'환경을 보호해야 해요.', translation:'必须保护环境。', tip:'보호 的 bo-ho' },
    { id:'ko-s10', lang:'ko', level:'B1', sentence:'긍정적인 영향을 줬어요.', translation:'带来积极影响。', tip:'영향 的 yeong-hyang' },
    { id:'ko-s11', lang:'ko', level:'B2', sentence:'증가 추세에 있어요.', translation:'有增加趋势。', tip:'추세 的 chu-se' },
    { id:'ko-s12', lang:'ko', level:'B2', sentence:'문제가 복잡해요.', translation:'问题很复杂。', tip:'복잡 的 bok-jap' },
    { id:'ko-s13', lang:'ko', level:'C1', sentence:'높은 통찰력을 보여요.', translation:'表现出很高的洞察力。', tip:'통찰력 的 tong-chal-ryeok' },
    { id:'ko-s14', lang:'ko', level:'C2', sentence:'궁극적인 목표를 세워요.', translation:'设定终极目标。', tip:'궁극 的 gung-geuk' },
    { id:'ko-s15', lang:'ko', level:'A1', sentence:'안녕하세요.', translation:'你好。', tip:'正式问候' },
    { id:'ko-s16', lang:'ko', level:'A1', sentence:'안녕히 가세요.', translation:'再见。', tip:'送别语' },
    { id:'ko-s17', lang:'ko', level:'A1', sentence:'만나서 반갑습니다.', translation:'很高兴见到你。', tip:'만나다 遇见' },
    { id:'ko-s18', lang:'ko', level:'A1', sentence:'감사합니다.', translation:'谢谢。', tip:'감사하다 感谢' },
    { id:'ko-s19', lang:'ko', level:'A1', sentence:'죄송합니다.', translation:'对不起。', tip:'죄송하다 抱歉' },
    { id:'ko-s20', lang:'ko', level:'A1', sentence:'네, 그렇습니다.', translation:'是，是的。', tip:'네 是' },
    { id:'ko-s21', lang:'ko', level:'A1', sentence:'아니요, 아닙니다.', translation:'不，不是。', tip:'아니요 不' },
    { id:'ko-s22', lang:'ko', level:'A1', sentence:'이름이 뭐예요?', translation:'你叫什么名字。', tip:'이름 名字' },
    { id:'ko-s23', lang:'ko', level:'A1', sentence:'저는 학생입니다.', translation:'我是学生。', tip:'학생 学生' },
    { id:'ko-s24', lang:'ko', level:'A1', sentence:'어디에서 왔어요?', translation:'从哪里来。', tip:'어디 哪里' },
    { id:'ko-s25', lang:'ko', level:'A1', sentence:'한국어를 조금 할 수 있어요.', translation:'会一点韩语。', tip:'조금 一点' },
    { id:'ko-s26', lang:'ko', level:'A1', sentence:'잘 못 알아들었어요.', translation:'没听清楚。', tip:'알아듣다 理解' },
    { id:'ko-s27', lang:'ko', level:'A1', sentence:'다시 한번 말씀해 주세요.', translation:'请再说一次。', tip:'다시 再' },
    { id:'ko-s28', lang:'ko', level:'A1', sentence:'천천히 말해 주세요.', translation:'请说慢一点。', tip:'천천히 慢慢地' },
    { id:'ko-s29', lang:'ko', level:'A1', sentence:'이게 뭐예요?', translation:'这是什么。', tip:'뭐 什么' },
    { id:'ko-s30', lang:'ko', level:'A1', sentence:'얼마예요?', translation:'多少钱。', tip:'얼마 多少' },
    { id:'ko-s31', lang:'ko', level:'A1', sentence:'화장실이 어디예요?', translation:'厕所在哪。', tip:'화장실 厕所' },
    { id:'ko-s32', lang:'ko', level:'A1', sentence:'여기요.', translation:'在这里。', tip:'点餐用语' },
    { id:'ko-s33', lang:'ko', level:'A1', sentence:'계산해 주세요.', translation:'请结账。', tip:'계산하다 计算' },
    { id:'ko-s34', lang:'ko', level:'A1', sentence:'물 주세요.', translation:'请给我水。', tip:'물 水' },
    { id:'ko-s35', lang:'ko', level:'A2', sentence:'맛있어요.', translation:'好吃。', tip:'맛있다 美味' },
    { id:'ko-s36', lang:'ko', level:'A2', sentence:'아주 좋아요.', translation:'非常好。', tip:'아주 非常' },
    { id:'ko-s37', lang:'ko', level:'A2', sentence:'사랑해요.', translation:'爱你。', tip:'사랑하다 爱' },
    { id:'ko-s38', lang:'ko', level:'A2', sentence:'행복해요.', translation:'幸福。', tip:'행복하다 幸福' },
    { id:'ko-s39', lang:'ko', level:'A2', sentence:'바빠요.', translation:'很忙。', tip:'바쁘다 忙' },
    { id:'ko-s40', lang:'ko', level:'A2', sentence:'피곤해요.', translation:'累。', tip:'피곤하다 疲劳' },
    { id:'ko-s41', lang:'ko', level:'A2', sentence:'배고파요.', translation:'饿了。', tip:'배고프다 肚子饿' },
    { id:'ko-s42', lang:'ko', level:'A2', sentence:'목말라요.', translation:'口渴。', tip:'목마르다 口渴' },
    { id:'ko-s43', lang:'ko', level:'A2', sentence:'좋은 아침이에요.', translation:'早上好。', tip:'아침 早晨' },
    { id:'ko-s44', lang:'ko', level:'A2', sentence:'안녕히 주무세요.', translation:'晚安。', tip:'주무시다 睡觉敬语' },
    { id:'ko-s45', lang:'ko', level:'A2', sentence:'오늘 날씨가 좋네요.', translation:'今天天气真好。', tip:'날씨 天气' },
    { id:'ko-s46', lang:'ko', level:'A2', sentence:'비가 와요.', translation:'下雨了。', tip:'비 雨' },
    { id:'ko-s47', lang:'ko', level:'A2', sentence:'추워요.', translation:'冷。', tip:'춥다 冷' },
    { id:'ko-s48', lang:'ko', level:'A2', sentence:'더워요.', translation:'热。', tip:'덥다 热' },
    { id:'ko-s49', lang:'ko', level:'A2', sentence:'생일 축하해요.', translation:'生日快乐。', tip:'생일 生日' },
    { id:'ko-s50', lang:'ko', level:'A2', sentence:'새해 복 많이 받으세요.', translation:'新年快乐。', tip:'새해 新年' },
    { id:'ko-s51', lang:'ko', level:'A2', sentence:'어서 오세요.', translation:'欢迎光临。', tip:'오다 来' },
    { id:'ko-s52', lang:'ko', level:'A2', sentence:'잠시만 기다려 주세요.', translation:'请稍等。', tip:'잠시만 一会儿' },
    { id:'ko-s53', lang:'ko', level:'A2', sentence:'괜찮아요.', translation:'没关系。', tip:'괜찮다 没关系' },
    { id:'ko-s54', lang:'ko', level:'B1', sentence:'만약 시간이 있다면 도서관에 가서 책을 빌리고 싶어요.', translation:'如果有时间想去图书馆借书。', tip:'만약 如果' },
    { id:'ko-s55', lang:'ko', level:'B1', sentence:'한국에 온 지도 벌써 여섯 달이 됐어요.', translation:'来韩国已经六个月了。', tip:'벌써 已经' },
    { id:'ko-s56', lang:'ko', level:'B1', sentence:'지금까지 한국 소설을 세 권 읽었어요.', translation:'至今已读三本韩国小说。', tip:'권 册' },
    { id:'ko-s57', lang:'ko', level:'B1', sentence:'요즘 일이 바빠서 운동할 시간이 거의 없어요.', translation:'最近工作忙几乎没时间运动。', tip:'요즘 最近' },
    { id:'ko-s58', lang:'ko', level:'B1', sentence:'가능하면 매일 일기를 쓰려고 노력해요.', translation:'尽量每天努力写日记。', tip:'일기 日记' },
    { id:'ko-s59', lang:'ko', level:'B1', sentence:'한국어를 더 잘하고 싶어요.', translation:'想把韩语说得更好。', tip:'잘하다 擅长' },
    { id:'ko-s60', lang:'ko', level:'B1', sentence:'선생님 말씀하시길 문법은 매일 조금씩 공부하는 게 좋대요.', translation:'听说老师说每天学一点语法好。', tip:'문법 语法' },
    { id:'ko-s61', lang:'ko', level:'B1', sentence:'지하철 안에서는 보통 음악을 들어요.', translation:'地铁里通常听音乐。', tip:'지하철 地铁' },
    { id:'ko-s62', lang:'ko', level:'B1', sentence:'이 사전은 아주 편리해서 자주 써요.', translation:'这本字典很方便所以常用。', tip:'사전 字典' },
    { id:'ko-s63', lang:'ko', level:'B1', sentence:'한글은 배우기 쉽지만 어휘는 어렵다고 생각해요.', translation:'觉得韩文易学但词汇难。', tip:'한글 韩文' },
    { id:'ko-s64', lang:'ko', level:'B1', sentence:'어제 친구들과 한옥 마을에 갔어요.', translation:'昨天和朋友去了韩屋村。', tip:'한옥 韩屋' },
    { id:'ko-s65', lang:'ko', level:'B1', sentence:'한옥에 있으면 마음이 편안해져요.', translation:'在韩屋里心就变得安宁。', tip:'편안하다 舒适' },
    { id:'ko-s66', lang:'ko', level:'B1', sentence:'그 소식 듣고 모두 놀랐어요.', translation:'听到那消息大家都惊讶。', tip:'소식 消息' },
    { id:'ko-s67', lang:'ko', level:'B1', sentence:'그는 아직 안 왔지만 아마 늦을 거예요.', translation:'他还没来但大概会迟到。', tip:'아마 也许' },
    { id:'ko-s68', lang:'ko', level:'B1', sentence:'내일 아침 일찍 일어나야 해요.', translation:'明天早上必须早起。', tip:'일어나야 必须起床' },
    { id:'ko-s69', lang:'ko', level:'B1', sentence:'시험 때문에 오늘 밤 새서 공부할 거예요.', translation:'因为考试今晚要熬夜学习。', tip:'시험 考试' },
    { id:'ko-s70', lang:'ko', level:'B1', sentence:'이 식당은 선배한테 추천받았어요.', translation:'这家餐厅是前辈推荐给我的。', tip:'선배 前辈' },
    { id:'ko-s71', lang:'ko', level:'B1', sentence:'한국 문화에 대해 더 알고 싶어요.', translation:'想更多了解韩国文化。', tip:'문화 文化' },
    { id:'ko-s72', lang:'ko', level:'B2', sentence:'일반적으로 한국어의 문법 구조는 영어와 본질적으로 상이하기 때문에 많은 영어권 학습자에게 초기 혼란이 불가피합니다.', translation:'一般来说韩语语法结构与英语本质不同，因此对许多英语圈学习者来说初期混乱不可避免。', tip:'일반적으로 一般来说' },
    { id:'ko-s73', lang:'ko', level:'B2', sentence:'한국어의 주어 목적어 동사 어순은 영어의 주어 동사 목적어 어순과 근본적으로 다르며 문장 구조를 내재화하는 데 가장 큰 장벽 중 하나입니다.', translation:'韩语主宾动语序与英语主谓宾根本不同，是内化句子结构时最大障碍之一。', tip:'주어 主语 + 목적어 宾语' },
    { id:'ko-s74', lang:'ko', level:'B2', sentence:'조사는 한국어에서 문장 성분 간의 문법적 관계를 표시하는 핵심적인 기능을 수행하며 명사의 뒤에 붙어 그 명사가 어떤 역할을 하는지를 나타냅니다.', translation:'助词在韩语中执行标示句子成分间语法关系的核心功能，附在名词后表示其语法角色。', tip:'조사 助词' },
    { id:'ko-s75', lang:'ko', level:'B2', sentence:'존댓말과 반말의 구분은 한국어의 화용론적 특징 중 가장 두드러진 것으로 화자와 청자 간의 사회적 거리 연령 지위 친밀도 등 복합적인 요인에 따라 결정됩니다.', translation:'敬语和平语的区分是韩语语用论特征中最突出的，根据说话人与听话人间社会距离年龄地位亲密度等复杂因素决定。', tip:'존댓말 敬语' },
    { id:'ko-s76', lang:'ko', level:'B2', sentence:'한자어는 한국어 어휘의 상당 부분을 차지하고 있으며 특히 학술적 공식적 문어적 맥락에서 매우 높은 빈도로 사용됩니다.', translation:'汉字词占韩语词汇相当大的部分，特别在学术正式书面语境中以极高频率使用。', tip:'한자어 汉字词' },
    { id:'ko-s77', lang:'ko', level:'B2', sentence:'문어체와 구어체의 차이는 한국어에서 특히 현저하며 공식적인 글쓰기 뉴스 보도 학술 저술에서는 격식체가 주로 사용되는 반면 일상 대화에서는 비격식체가 더 자연스럽습니다.', translation:'书面体和口语体的差异在韩语中特别显著，在正式写作新闻报道学术著述中主要使用格式体，而在日常对话中非格式体更自然。', tip:'문어체 书面体 + 격식체 格式体' },
    { id:'ko-s78', lang:'ko', level:'B2', sentence:'연결 어미는 두 개 이상의 절이나 문장을 연결하여 더 복잡하고 정교한 문장 구조를 형성하는 데 필수적인 문법 장치입니다.', translation:'连接词尾是连接两个以上从句或句子以形成更复杂精巧句子结构时必不可少的语法装置。', tip:'연결 어미 连接词尾' },
    { id:'ko-s79', lang:'ko', level:'B2', sentence:'종결 어미는 문장을 끝맺으면서 화자의 말투 격식 수준 그리고 청자에 대한 태도를 동시에 표현하는 다층적인 기능을 수행합니다.', translation:'终结词尾在结束句子的同时表达说话人的语气格式水平和对听话人的态度，执行多层功能。', tip:'종결 어미 终结词尾' },
    { id:'ko-s80', lang:'ko', level:'C1', sentence:'한국 근현대사의 격동적 전개는 식민지 경험 해방 분단 전쟁 그리고 급속한 산업화와 민주화 과정을 거치면서 한국인의 집단적 정체성과 언어 의식에 깊은 흔적을 남겼습니다.', translation:'韩国近现代史的激荡发展经历殖民经验解放分裂战争以及快速产业化和民主化过程，在韩国人的集体认同和语言意识上留下深刻痕迹。', tip:'격동적 激荡的 + 식민지 殖民地' },
    { id:'ko-s81', lang:'ko', level:'C1', sentence:'광복 이후 한국어의 정체를 확립하려는 노력의 일환으로 진행된 한글 전용 정책은 한자와 한글의 병용이라는 오랜 관행을 근본적으로 변화시켰습니다.', translation:'光复后作为确立韩语正统努力一环推行的韩文专用政策，从根本改变了汉字与韩文混用这一长久习惯。', tip:'광복 光复 + 한글전용 韩文专用' },
    { id:'ko-s82', lang:'ko', level:'C1', sentence:'남북 분단 이후 70여 년간 축적된 언어적 이질화는 어휘 발음 문법의 모든 층위에서 현저한 차이를 초래했으며 이는 장래 통일 한국의 공용어 정책 수립에 있어 중요한 고려 사항입니다.', translation:'南北分裂后70多年积累的语言异化在词汇发音语法所有层面造成显著差异，这在将来制定统一韩国公用语政策时将成为重要考虑事项。', tip:'이질화 异化 + 공용어 公用语' },
    { id:'ko-s83', lang:'ko', level:'C1', sentence:'한류 현상의 세계적 확산은 한국어에 대한 국제적 수요를 급증시켰으며 이는 한국어 교육의 양적 팽창뿐 아니라 교수법의 질적 고도화라는 두 가지 과제를 동시에 제기하고 있습니다.', translation:'韩流现象的世界性扩散使对韩语的国际需求激增，这同时提出了韩语教育的量的膨胀和教学法的质的高度化两个课题。', tip:'한류 韩流 + 급증시키다 激增' },
    { id:'ko-s84', lang:'ko', level:'C2', sentence:'한국어의 문법적 특징인 교착어로서의 성격은 하나의 어근에 복수의 접사가 결합하여 복잡한 의미 관계를 형성한다는 점에서 영어와 같은 굴절어나 중국어와 같은 고립어와 근본적으로 다릅니다.', translation:'韩语作为黏着语的语法特征，即一个词干结合复数词缀形成复杂意义关系，与英语屈折语或中文孤立语根本不同。', tip:'교착어 黏着语 + 어근 词干 + 접사 词缀' },
    { id:'ko-s85', lang:'ko', level:'C2', sentence:'비교문법학의 관점에서 볼 때 한국어와 일본어 사이에는 문법적 유사성과 어휘적 유사성이 존재하나 두 언어가 계통적으로 관련되어 있는지 여부는 아직 학계의 확정된 결론에 이르지 못하고 있습니다.', translation:'从比较语法学的观点看，韩语和日语之间虽存在语法相似性和词汇相似性，但两语言是否系统相关尚未达成学界确定结论。', tip:'비교문법학 比较语法学 + 계통적으로 系统发生学地' },
    { id:'ko-s86', lang:'ko', level:'C2', sentence:'한국어의 높임말 체계는 사회적 위계와 화용론적 상황에 대한 민감성을 반영하는 것으로 단순한 문법적 규칙을 넘어 문화적 규범과 사회적 가치를 내재하고 있습니다.', translation:'韩语敬语体系反映对社会等级和语用论情境的敏感性，超越单纯语法规则内在包含文化规范和社会价值。', tip:'위계 等级 + 규범 规范' },
    { id:'ko-s87', lang:'ko', level:'C2', sentence:'현대 한국어 구어에서는 높임말의 단계적 완화와 경직된 규범으로부터의 이완이 관찰되는데 이는 사회 구조의 변화 세대 간의 가치관 차이 그리고 디지털 매체를 통한 소통 방식의 변화와 깊이 관련되어 있습니다.', translation:'现代韩语口语中可观察到敬语的阶段性缓和和从僵硬规范中的松弛，与社会结构变化世代间价值观差异及通过数字媒介沟通方式变化深度相关。', tip:'경직되다 僵硬 + 이완 松弛 + 세대 世代' }
  ],
  es: [
    { id:'es-s1', lang:'es', level:'A1', sentence:'¡Hola! Me llamo Ana.', translation:'你好！我叫安娜。', tip:'ll 读作 /ʎ/ 或 /ʒ/' },
    { id:'es-s2', lang:'es', level:'A1', sentence:'Muchas gracias.', translation:'非常感谢。', tip:'gracias 的重音' },
    { id:'es-s3', lang:'es', level:'A1', sentence:'Yo soy estudiante.', translation:'我是学生。', tip:'yo 的 yo 音' },
    { id:'es-s4', lang:'es', level:'A1', sentence:'Quiero agua, por favor.', translation:'请给我水。', tip:'quiero 的 kie 开头' },
    { id:'es-s5', lang:'es', level:'A2', sentence:'Tomo el desayuno a las siete.', translation:'我七点吃早餐。', tip:'desayuno 的重音' },
    { id:'es-s6', lang:'es', level:'A2', sentence:'El restaurante está cerrado.', translation:'餐厅关门了。', tip:'está 表状态' },
    { id:'es-s7', lang:'es', level:'A2', sentence:'Mañana yo veré el partido.', translation:'明天我会看比赛。', tip:'veré 的将来时' },
    { id:'es-s8', lang:'es', level:'B1', sentence:'Es una gran oportunidad.', translation:'这是个好机会。', tip:'oportunidad 的重音在 dad' },
    { id:'es-s9', lang:'es', level:'B1', sentence:'El ambiente es agradable.', translation:'氛围很舒适。', tip:'ambiente 的 am-bjen-te' },
    { id:'es-s10', lang:'es', level:'B1', sentence:'Recomiendo este libro.', translation:'我推荐这本书。', tip:'recomiendo 的 cie 音' },
    { id:'es-s11', lang:'es', level:'B2', sentence:'Espero que tú vengas.', translation:'我希望你来。', tip:'vengas 是虚拟式' },
    { id:'es-s12', lang:'es', level:'B2', sentence:'El libro fue escrito por el autor.', translation:'这本书是作者写的。', tip:'被动语态' },
    { id:'es-s13', lang:'es', level:'C1', sentence:'Hay que aunar esfuerzos.', translation:'必须同心协力。', tip:'aunar 的 au-nar' },
    { id:'es-s14', lang:'es', level:'C2', sentence:'La gloria es efímera.', translation:'荣耀是短暂的。', tip:'efímera 的重音在 í' },
    { id:'es-s15', lang:'es', level:'A1', sentence:'Buenos días.', translation:'早上好。', tip:'buenos dias 早晨问候' },
    { id:'es-s16', lang:'es', level:'A1', sentence:'Buenas tardes.', translation:'下午好。', tip:'tardes 下午' },
    { id:'es-s17', lang:'es', level:'A1', sentence:'Buenas noches.', translation:'晚安。', tip:'noches 夜晚' },
    { id:'es-s18', lang:'es', level:'A1', sentence:'Hola.', translation:'你好。', tip:'h 不发音' },
    { id:'es-s19', lang:'es', level:'A1', sentence:'Adiós.', translation:'再见。', tip:'adios 告别' },
    { id:'es-s20', lang:'es', level:'A1', sentence:'Hasta luego.', translation:'待会儿见。', tip:'hasta 直到' },
    { id:'es-s21', lang:'es', level:'A1', sentence:'Hasta mañana.', translation:'明天见。', tip:'mañana 明天' },
    { id:'es-s22', lang:'es', level:'A1', sentence:'¿Cómo estás?', translation:'你好吗。', tip:'cómo 如何 + estar 是' },
    { id:'es-s23', lang:'es', level:'A1', sentence:'Muy bien, gracias.', translation:'很好谢谢。', tip:'muy bien 很好' },
    { id:'es-s24', lang:'es', level:'A1', sentence:'Mucho gusto.', translation:'很高兴认识你。', tip:'gusto 高兴' },
    { id:'es-s25', lang:'es', level:'A1', sentence:'¿Cómo te llamas?', translation:'你叫什么名字。', tip:'llamar 叫' },
    { id:'es-s26', lang:'es', level:'A1', sentence:'¿De dónde eres?', translation:'你来自哪里。', tip:'de dónde 从哪里' },
    { id:'es-s27', lang:'es', level:'A1', sentence:'Soy de México.', translation:'我来自墨西哥。', tip:'ser de 来自' },
    { id:'es-s28', lang:'es', level:'A1', sentence:'¿Hablas español?', translation:'你会说西班牙语吗。', tip:'hablar 说话' },
    { id:'es-s29', lang:'es', level:'A1', sentence:'Sí, un poco.', translation:'会一点点。', tip:'poco 少' },
    { id:'es-s30', lang:'es', level:'A1', sentence:'No entiendo.', translation:'不明白。', tip:'entender 理解' },
    { id:'es-s31', lang:'es', level:'A1', sentence:'¿Puede repetir?', translation:'能重复吗。', tip:'poder 能够' },
    { id:'es-s32', lang:'es', level:'A1', sentence:'Por favor.', translation:'请。', tip:'por favor 请' },
    { id:'es-s33', lang:'es', level:'A1', sentence:'¿Qué es esto?', translation:'这是什么。', tip:'qué 什么' },
    { id:'es-s34', lang:'es', level:'A1', sentence:'¿Cuánto cuesta?', translation:'多少钱。', tip:'cuánto 多少 + costar 花费' },
    { id:'es-s35', lang:'es', level:'A2', sentence:'Tengo hambre.', translation:'饿了。', tip:'tener hambre 饿' },
    { id:'es-s36', lang:'es', level:'A2', sentence:'Tengo sed.', translation:'渴了。', tip:'tener sed 渴' },
    { id:'es-s37', lang:'es', level:'A2', sentence:'Tengo frío.', translation:'冷。', tip:'frío 冷' },
    { id:'es-s38', lang:'es', level:'A2', sentence:'Tengo calor.', translation:'热。', tip:'calor 热' },
    { id:'es-s39', lang:'es', level:'A2', sentence:'Estoy cansado.', translation:'累了。', tip:'cansado 疲劳' },
    { id:'es-s40', lang:'es', level:'A2', sentence:'Estoy feliz.', translation:'很开心。', tip:'feliz 幸福' },
    { id:'es-s41', lang:'es', level:'A2', sentence:'Estoy triste.', translation:'难过。', tip:'triste 悲伤' },
    { id:'es-s42', lang:'es', level:'A2', sentence:'Estoy ocupado.', translation:'很忙。', tip:'ocupado 忙碌' },
    { id:'es-s43', lang:'es', level:'A2', sentence:'Tomo el autobús.', translation:'乘公交车。', tip:'autobús 公交车' },
    { id:'es-s44', lang:'es', level:'A2', sentence:'Voy al colegio.', translation:'我去学校。', tip:'ir a 去' },
    { id:'es-s45', lang:'es', level:'A2', sentence:'Me gusta la música.', translation:'我喜欢音乐。', tip:'gustar 喜欢' },
    { id:'es-s46', lang:'es', level:'A2', sentence:'¿Qué hora es?', translation:'几点了。', tip:'hora 时间' },
    { id:'es-s47', lang:'es', level:'A2', sentence:'Son las nueve.', translation:'九点了。', tip:'ser las 点' },
    { id:'es-s48', lang:'es', level:'A2', sentence:'Hoy hace buen tiempo.', translation:'今天天气好。', tip:'tiempo 天气' },
    { id:'es-s49', lang:'es', level:'A2', sentence:'Está lloviendo.', translation:'在下雨。', tip:'llover 下雨' },
    { id:'es-s50', lang:'es', level:'B1', sentence:'He vivido en España durante tres años.', translation:'我在西班牙住了三年。', tip:'presente perfecto 现在完成时' },
    { id:'es-s51', lang:'es', level:'B1', sentence:'Si tuviera más tiempo, estudiaría francés.', translation:'如果有更多时间我会学法语。', tip:'condicional 条件句' },
    { id:'es-s52', lang:'es', level:'B1', sentence:'El libro fue escrito por un autor famoso.', translation:'这本书是著名作家写的。', tip:'pasiva 被动语态' },
    { id:'es-s53', lang:'es', level:'B1', sentence:'Es importante que practiques con regularidad.', translation:'定期练习是重要的。', tip:'subjuntivo 虚拟式' },
    { id:'es-s54', lang:'es', level:'B1', sentence:'No recuerdo haber dicho eso.', translation:'我不记得说过这话。', tip:'infinitivo perfecto 完成不定式' },
    { id:'es-s55', lang:'es', level:'B1', sentence:'Deberías aprovechar esta oportunidad.', translation:'你应该利用这个机会。', tip:'debería 应该 + aprovechar 利用' },
    { id:'es-s56', lang:'es', level:'B1', sentence:'Me gustaría que vinieras a la fiesta.', translation:'我希望你能来派对。', tip:'me gustaría que + subjuntivo' },
    { id:'es-s57', lang:'es', level:'B1', sentence:'¿Sabes dónde está la estación de tren?', translation:'你知道火车站在哪吗。', tip:'estación de tren 火车站' },
    { id:'es-s58', lang:'es', level:'B1', sentence:'El medio ambiente es fundamental para nuestro futuro.', translation:'环境对我们的未来至关重要。', tip:'medio ambiente 环境' },
    { id:'es-s59', lang:'es', level:'B1', sentence:'Tenemos que tomar medidas para reducir la contaminación.', translation:'我们必须采取措施减少污染。', tip:'tomar medidas 采取措施 + contaminación 污染' },
    { id:'es-s60', lang:'es', level:'B2', sentence:'El uso de las energías renovables se ha incrementado notablemente en la última década.', translation:'过去十年可再生能源的使用显著增加。', tip:'energías renovables 可再生能源 + década 十年' },
    { id:'es-s61', lang:'es', level:'B2', sentence:'La globalización ha transformado las dinámicas económicas, sociales y culturales de las sociedades contemporáneas.', translation:'全球化改变了当代社会的经济社会和文化动态。', tip:'globalización 全球化 + contemporáneas 当代的' },
    { id:'es-s62', lang:'es', level:'B2', sentence:'Es fundamental que adoptemos un enfoque equilibrado entre el desarrollo económico y la preservación del medio natural.', translation:'必须在经济发展和自然环境保护之间采取平衡方法。', tip:'adoptar un enfoque 采取方法 + preservación 保存' },
    { id:'es-s63', lang:'es', level:'B2', sentence:'La crisis económica ha afectado de manera desigual a los distintos sectores de la población, generando mayor inequidad social.', translation:'经济危机不平等地影响了不同人口阶层，造成更大社会不公。', tip:'desigual 不平等 + sectores 阶层 + inequidad 不公' },
    { id:'es-s64', lang:'es', level:'B2', sentence:'Es imprescindible fomentar la innovación y el espíritu emprendedor entre las nuevas generaciones.', translation:'必须在新一代中鼓励创新和创业精神。', tip:'imprescindible 必不可少 + fomentar 鼓励 + emprendedor 创业' },
    { id:'es-s65', lang:'es', level:'B2', sentence:'La educación de calidad es el pilar fundamental sobre el cual se construye el desarrollo sostenible de cualquier nación.', translation:'优质教育是任何国家可持续发展建设的基础支柱。', tip:'pilar 支柱 + sostenible 可持续的 + nación 国家' },
    { id:'es-s66', lang:'es', level:'C1', sentence:'La democracia deliberativa requiere que los ciudadanos participen activamente en los procesos de toma de decisiones, más allá del simple ejercicio electoral periódico.', translation:'协商民主要求公民积极参与决策过程，超越简单的定期选举活动。', tip:'deliberativa 协商 + ciudadanos 公民 + electoral 选举的' },
    { id:'es-s67', lang:'es', level:'C1', sentence:'El pluralismo ideológico y la tolerancia hacia las minorías son elementos esenciales de cualquier sociedad democrática que se precie de tal.', translation:'意识形态多元主义和对少数群体的包容是任何名副其实的民主社会的基本要素。', tip:'pluralismo 多元主义 + ideológico 意识形态 + minorías 少数 + precie de tal 名副其实的' },
    { id:'es-s68', lang:'es', level:'C1', sentence:'Los movimientos migratorios contemporáneos son consecuencia de una compleja interacción entre factores económicos, políticos, sociales y medioambientales.', translation:'当代移民运动是经济政治社会和环境因素之间复杂互动的结果。', tip:'migratorios 移民 + interacción 互动 + factores 因素' },
    { id:'es-s69', lang:'es', level:'C2', sentence:'El principio de autodeterminación de los pueblos, consagrado en la Carta de las Naciones Unidas, ha sido fundamental para la configuración del orden internacional contemporáneo.', translation:'联合国宪章所载人民自决原则对当代国际秩序的形成至关重要。', tip:'autodeterminación 自决 + consagrado 庄严载入 + carta 宪章 + configuración 形成' },
    { id:'es-s70', lang:'es', level:'C2', sentence:'La intertextualidad como estrategia narrativa permite al autor establecer diálogos productivos con la tradición literaria anterior y resignificarla desde su propia óptica creativa.', translation:'互文性作为叙事策略使作者能够与以往文学传统建立富有成效的对话，并从其自身创作视角重新赋予意义。', tip:'intertextualidad 互文性 + narrativa 叙事 + resignificarla 重新赋予意义 + óptica 视角' }
  ],
  fr: [
    { id:'fr-s1', lang:'fr', level:'A1', sentence:'Bonjour, je m\'appelle Paul.', translation:'你好，我叫保罗。', tip:'je 弱读为 /ʒə/' },
    { id:'fr-s2', lang:'fr', level:'A1', sentence:'Merci beaucoup.', translation:'非常感谢。', tip:'beaucoup 的 bo-ku' },
    { id:'fr-s3', lang:'fr', level:'A1', sentence:'Je suis étudiant.', translation:'我是学生。', tip:'suis 的 sui 音' },
    { id:'fr-s4', lang:'fr', level:'A1', sentence:'Un verre d\'eau, s\'il vous plaît.', translation:'请给我一杯水。', tip:'s\'il vous plaît 连读' },
    { id:'fr-s5', lang:'fr', level:'A2', sentence:'Je prends le petit-déjeuner à sept.', translation:'我七点吃早餐。', tip:'petit-déjeuner 的重音' },
    { id:'fr-s6', lang:'fr', level:'A2', sentence:'Le restaurant est fermé.', translation:'餐厅关门了。', tip:'fermé 的 é 音' },
    { id:'fr-s7', lang:'fr', level:'A2', sentence:'Demain, je irai au cinéma.', translation:'明天我会去电影院。', tip:'irai 的将来时' },
    { id:'fr-s8', lang:'fr', level:'B1', sentence:'C\'est une belle opportunité.', translation:'这是个好机会。', tip:'opportunité 的重音在 té' },
    { id:'fr-s9', lang:'fr', level:'B1', sentence:'L\'environnement est important.', translation:'环境很重要。', tip:'environnement 的连音' },
    { id:'fr-s10', lang:'fr', level:'B1', sentence:'Je te recommande ce livre.', translation:'我推荐你这本书。', tip:'recommande 的 k 音' },
    { id:'fr-s11', lang:'fr', level:'B2', sentence:'Je veux que tu fasses le travail.', translation:'我希望你做这项工作。', tip:'fasses 是虚拟式' },
    { id:'fr-s12', lang:'fr', level:'B2', sentence:'C\'est le livre que j\'ai lu.', translation:'这是我读过的书。', tip:'lu 的过去分词' },
    { id:'fr-s13', lang:'fr', level:'C1', sentence:'Une analyse perspicace.', translation:'敏锐的分析。', tip:'perspicace 的 pi-ka-s' },
    { id:'fr-s14', lang:'fr', level:'C2', sentence:'Une beauté inéffable.', translation:'难以形容的美。', tip:'inéffable 的 éf-fa-bl' },
    { id:'fr-s15', lang:'fr', level:'A1', sentence:'Bonjour.', translation:'你好。', tip:'bonjour 日间问候' },
    { id:'fr-s16', lang:'fr', level:'A1', sentence:'Bonsoir.', translation:'晚上好。', tip:'bonsoir 夜间问候' },
    { id:'fr-s17', lang:'fr', level:'A1', sentence:'Bonne nuit.', translation:'晚安。', tip:'bonne nuit 睡前' },
    { id:'fr-s18', lang:'fr', level:'A1', sentence:'Salut.', translation:'你好。', tip:'salut 亲密问候' },
    { id:'fr-s19', lang:'fr', level:'A1', sentence:'Au revoir.', translation:'再见。', tip:'au revoir 告别' },
    { id:'fr-s20', lang:'fr', level:'A1', sentence:'À plus tard.', translation:'待会儿见。', tip:'tard 晚' },
    { id:'fr-s21', lang:'fr', level:'A1', sentence:'À demain.', translation:'明天见。', tip:'demain 明天' },
    { id:'fr-s22', lang:'fr', level:'A1', sentence:'Comment ça va?', translation:'你好吗。', tip:'comment 如何' },
    { id:'fr-s23', lang:'fr', level:'A1', sentence:'Très bien, merci.', translation:'很好谢谢。', tip:'très 非常' },
    { id:'fr-s24', lang:'fr', level:'A1', sentence:'Et toi?', translation:'你呢。', tip:'toi 你' },
    { id:'fr-s25', lang:'fr', level:'A1', sentence:'Ça va.', translation:'还好。', tip:'ça 这个' },
    { id:'fr-s26', lang:'fr', level:'A1', sentence:'Ravi de vous rencontrer.', translation:'很高兴认识你。', tip:'ravi 高兴 + rencontrer 遇见' },
    { id:'fr-s27', lang:'fr', level:'A1', sentence:'Comment vous appelez-vous?', translation:'您叫什么名字。', tip:'s appeler 名叫' },
    { id:'fr-s28', lang:'fr', level:'A1', sentence:'D\'où venez-vous?', translation:'您来自哪里。', tip:'d où 从哪里' },
    { id:'fr-s29', lang:'fr', level:'A1', sentence:'Je viens de Paris.', translation:'我来自巴黎。', tip:'venir de 来自' },
    { id:'fr-s30', lang:'fr', level:'A1', sentence:'Parlez-vous français?', translation:'您会说法语吗。', tip:'parler 说' },
    { id:'fr-s31', lang:'fr', level:'A1', sentence:'Oui, un petit peu.', translation:'会一点点。', tip:'petit peu 少许' },
    { id:'fr-s32', lang:'fr', level:'A1', sentence:'Je ne comprends pas.', translation:'我不明白。', tip:'comprendre 理解' },
    { id:'fr-s33', lang:'fr', level:'A1', sentence:'Pouvez-vous répéter?', translation:'能重复吗。', tip:'répéter 重复' },
    { id:'fr-s34', lang:'fr', level:'A1', sentence:'Qu\'est-ce que c\'est?', translation:'这是什么。', tip:'qu est-ce que 什么是' },
    { id:'fr-s35', lang:'fr', level:'A2', sentence:'Combien ça coûte?', translation:'多少钱。', tip:'combien 多少 + coûter 花费' },
    { id:'fr-s36', lang:'fr', level:'A2', sentence:'J\'ai faim.', translation:'饿了。', tip:'avoir faim 饿' },
    { id:'fr-s37', lang:'fr', level:'A2', sentence:'J\'ai soif.', translation:'渴了。', tip:'avoir soif 渴' },
    { id:'fr-s38', lang:'fr', level:'A2', sentence:'J\'ai froid.', translation:'冷。', tip:'avoir froid 冷' },
    { id:'fr-s39', lang:'fr', level:'A2', sentence:'J\'ai chaud.', translation:'热。', tip:'chaud 热' },
    { id:'fr-s40', lang:'fr', level:'A2', sentence:'Je suis fatigué.', translation:'累了。', tip:'fatigué 疲劳' },
    { id:'fr-s41', lang:'fr', level:'A2', sentence:'Je suis heureux.', translation:'开心。', tip:'heureux 幸福' },
    { id:'fr-s42', lang:'fr', level:'A2', sentence:'Je suis triste.', translation:'难过。', tip:'triste 悲伤' },
    { id:'fr-s43', lang:'fr', level:'A2', sentence:'Je suis occupé.', translation:'忙。', tip:'occupé 忙碌' },
    { id:'fr-s44', lang:'fr', level:'A2', sentence:'Je prends le métro.', translation:'我乘地铁。', tip:'métro 地铁' },
    { id:'fr-s45', lang:'fr', level:'A2', sentence:'Je vais à l\'école.', translation:'我去学校。', tip:'aller à 去' },
    { id:'fr-s46', lang:'fr', level:'A2', sentence:'J\'aime la musique.', translation:'我喜欢音乐。', tip:'aimer 喜欢' },
    { id:'fr-s47', lang:'fr', level:'A2', sentence:'Quelle heure est-il?', translation:'几点了。', tip:'heure 时间' },
    { id:'fr-s48', lang:'fr', level:'A2', sentence:'Il est neuf heures.', translation:'九点了。', tip:'neuf 九' },
    { id:'fr-s49', lang:'fr', level:'A2', sentence:'Il fait beau aujourd\'hui.', translation:'今天天气好。', tip:'il fait beau 天气好' },
    { id:'fr-s50', lang:'fr', level:'B1', sentence:'J\'ai étudié le français pendant trois ans.', translation:'我学法语已有三年。', tip:'pendant 持续' },
    { id:'fr-s51', lang:'fr', level:'B1', sentence:'Si j\'avais plus de temps, j\'apprendrais l\'allemand.', translation:'如果我有更多时间我会学德语。', tip:'conditionnel 条件式现在时' },
    { id:'fr-s52', lang:'fr', level:'B1', sentence:'Ce document a été rédigé par notre équipe.', translation:'这份文件由我们团队编写。', tip:'passif 被动语态' },
    { id:'fr-s53', lang:'fr', level:'B1', sentence:'Il est important que vous participiez activement.', translation:'你们积极参与很重要。', tip:'subjonctif 虚拟式' },
    { id:'fr-s54', lang:'fr', level:'B1', sentence:'Vous devriez profiter de cette occasion unique.', translation:'你应该利用这个独特的机会。', tip:'devrait 应该 + profiter de 利用' },
    { id:'fr-s55', lang:'fr', level:'B2', sentence:'L\'utilisation des énergies renouvelables a considérablement augmenté durant la dernière décennie.', translation:'过去十年可再生能源的使用大幅增加。', tip:'renouvelables 可再生的 + décennie 十年' },
    { id:'fr-s56', lang:'fr', level:'B2', sentence:'La mondialisation a transformé les dynamiques économiques sociales et culturelles des sociétés contemporaines.', translation:'全球化改变了当代社会的经济社会和文化动态。', tip:'mondialisation 全球化 + contemporaines 当代的' },
    { id:'fr-s57', lang:'fr', level:'B2', sentence:'Il est fondamental que nous adoptions une approche équilibrée entre le développement économique et la préservation de l\'environnement.', translation:'必须在经济发展和环境保护之间采取平衡方法。', tip:'adopter 采取 + préservation 保存' },
    { id:'fr-s58', lang:'fr', level:'C1', sentence:'La démocratie délibérative exige que les citoyens participent activement aux processus de décision au-delà du simple exercice électoral périodique.', translation:'协商民主要求公民积极参与决策过程超越简单的定期选举活动。', tip:'citoyens 公民 + électoral 选举的' },
    { id:'fr-s59', lang:'fr', level:'C1', sentence:'Le pluralisme idéologique et la tolérance envers les minorités sont des éléments essentiels de toute société démocratique qui se respecte.', translation:'意识形态多元主义和对少数群体的包容是任何名副其实的民主社会的基本要素。', tip:'pluralisme 多元主义 + tolérance 包容' },
    { id:'fr-s60', lang:'fr', level:'C2', sentence:'Le principe d\'autodétermination des peuples consacré par la Charte des Nations Unies a été fondamental pour la configuration de l\'ordre international contemporain.', translation:'联合国宪章所载人民自决原则对当代国际秩序的形成至关重要。', tip:'autodétermination 自决 + Nations Unies 联合国' },
    { id:'fr-s61', lang:'fr', level:'C2', sentence:'L\'intertextualité comme stratégie narrative permet à l\'auteur d\'établir des dialogues féconds avec la tradition littéraire antérieure et de la resignifier depuis sa propre optique créative.', translation:'互文性作为叙事策略使作者能够与以往文学传统建立富有成效的对话，并从其自身创作视角重新赋予意义。', tip:'intertextualité 互文性 + narrative 叙事的 + féconds 富有成效的 + antérieure 之前的 + resignifier 重新赋予意义' }
  ]
};

/* ===== 听力训练 LISTENING (每语言每级别 2-3 段对话) ===== */
/* ===== 听力训练 LISTENING ===== */
/* ===== 听力训练 LISTENING ===== */
const LISTENING = {
  en: [
    { id:'en-l1', lang:'en', level:'A1', dialog:'A: Hello! My name is Tom. What is your name?\nB: Hello Tom! My name is Lisa. Nice to meet you.', question:'What is the girl\'s name?', options:['Tom','Lisa','Mary','Anna'], answer:1, explain:'女孩自报名字是 Lisa。' },
    { id:'en-l2', lang:'en', level:'A1', dialog:'A: Good morning! How are you?\nB: I am fine thank you. And you?\nA: I am fine too.', question:'How are they feeling?', options:['Sad','Tired','Fine','Hungry'], answer:2, explain:'两人都很好。' },
    { id:'en-l3', lang:'en', level:'A1', dialog:'A: I am a student.\nB: Me too! I study at Beijing University.', question:'What do they do?', options:['Teachers','Students','Doctors','Workers'], answer:1, explain:'都是学生。' },
    { id:'en-l4', lang:'en', level:'A1', dialog:'A: Good morning! How are you today?\nB: I am fine thank you.\nA: Great!', question:'How is B?', options:['Sad','Fine','Tired','Angry'], answer:1, explain:'B 很好。' },
    { id:'en-l5', lang:'en', level:'A1', dialog:'A: What is your name?\nB: My name is Emma.\nA: Nice to meet you!', question:'What is B\'s name?', options:['Anna','Emma','Lisa','Mia'], answer:1, explain:'B 是 Emma。' },
    { id:'en-l6', lang:'en', level:'A1', dialog:'A: How old are you?\nB: I am twenty-five.\nA: Thank you.', question:'How old is B?', options:['20','25','30','35'], answer:1, explain:'B 25 岁。' },
    { id:'en-l7', lang:'en', level:'A1', dialog:'A: Where are you from?\nB: I am from Canada.\nA: Nice!', question:'Where is B from?', options:['USA','Canada','UK','Australia'], answer:1, explain:'B 来自加拿大。' },
    { id:'en-l8', lang:'en', level:'A1', dialog:'A: Do you like apples?\nB: Yes I love apples.\nA: Me too!', question:'Does B like apples?', options:['No','Yes','Not sure','Hates them'], answer:1, explain:'B 喜欢苹果。' },
    { id:'en-l9', lang:'en', level:'A1', dialog:'A: What color is the sky?\nB: The sky is blue.\nA: Correct!', question:'What color is the sky?', options:['Red','Green','Blue','Yellow'], answer:2, explain:'天空是蓝色。' },
    { id:'en-l10', lang:'en', level:'A2', dialog:'A: I have breakfast at seven every day.\nB: Really? I usually skip breakfast. I just drink coffee.', question:'What does B usually do for breakfast?', options:['Eats big breakfast','Skips breakfast and drinks coffee','Has lunch instead','Eats cereal'], answer:1, explain:'B 跳过早餐只喝咖啡。' },
    { id:'en-l11', lang:'en', level:'A2', dialog:'A: The weather is nice today is not it?\nB: Yes! Let us go to the park.\nA: Good idea! I will meet you at the airport.', question:'What will they do?', options:['Stay home','Go to the park','Fly somewhere','Go shopping'], answer:1, explain:'去公园。' },
    { id:'en-l12', lang:'en', level:'A2', dialog:'A: My schedule is very busy this week.\nB: Why? What is happening?\nA: I have three meetings and two exams.', question:'How is A\'s schedule?', options:['Empty','Busy','Normal','On vacation'], answer:1, explain:'日程繁忙。' },
    { id:'en-l13', lang:'en', level:'A2', dialog:'A: What do you usually do on weekends?\nB: I usually go to the park with my family. Sometimes we go shopping.', question:'What does B usually do on weekends?', options:['Stays home','Goes to park with family','Works','Travels abroad'], answer:1, explain:'和家人去公园。' },
    { id:'en-l14', lang:'en', level:'A2', dialog:'A: Did you watch the movie last night?\nB: Yes I did. It was interesting but a little long.\nA: I agree with you.', question:'How was the movie?', options:['Boring short','Interesting but long','Terrible','Funny'], answer:1, explain:'有趣但长。' },
    { id:'en-l15', lang:'en', level:'A2', dialog:'A: Excuse me how do I get to the train station?\nB: Go straight for two blocks then turn left. You will see it.\nA: Thank you very much!', question:'What should A do after going straight?', options:['Turn right','Turn left','Go back','Stop there'], answer:1, explain:'左转。' },
    { id:'en-l16', lang:'en', level:'B1', dialog:'A: This is a great opportunity for our company.\nB: I agree but we must protect the environment too.\nA: Yes. We can achieve both goals.', question:'What are they discussing?', options:['Weather','Business opportunity and environment','Family matters','Travel plans'], answer:1, explain:'商业机会与环保。' },
    { id:'en-l17', lang:'en', level:'B1', dialog:'A: I have a good relationship with my boss.\nB: That is important. It makes work much easier.\nA: Definitely. He supports my decisions.', question:'How is A\'s relationship with her boss?', options:['Bad','Good','Unknown','Hostile'], answer:1, explain:'关系很好。' },
    { id:'en-l18', lang:'en', level:'B1', dialog:'A: I have been thinking about changing jobs recently.\nB: Why? What is wrong?\nA: I feel I have stopped growing and the salary is not enough.', question:'Why does A want to change jobs?', options:['Hates colleagues','Not growing and salary low','Too far','Boring boss'], answer:1, explain:'无法成长薪水不够。' },
    { id:'en-l19', lang:'en', level:'B1', dialog:'A: Describe a typical day in your life.\nB: I wake up at seven exercise for thirty minutes then eat breakfast. After work I usually read or meet friends.', question:'What time does B wake up?', options:['6 AM','7 AM','8 AM','9 AM'], answer:1, explain:'七点起床。' },
    { id:'en-l20', lang:'en', level:'B1', dialog:'A: If you won a million dollars what would you do first?\nB: I think I would travel around the world for a year then invest the rest.\nA: That sounds amazing!', question:'What would B do first with a million?', options:['Buy house','Travel around the world for a year','Quit working','Donate all'], answer:1, explain:'环游世界一年。' },
    { id:'en-l21', lang:'en', level:'B2', dialog:'A: This issue is highly controversial.\nB: The report is comprehensive however.\nA: Yes but I want to emphasize the importance of data privacy.\nB: Nevertheless we need to consider public opinion.', question:'What does A want to emphasize?', options:['Cost','Time','Data privacy','Public opinion'], answer:2, explain:'强调数据隐私。' },
    { id:'en-l22', lang:'en', level:'B2', dialog:'A: He has been studying English for ten years.\nB: No wonder he speaks so fluently then.\nA: Exactly. He also lived in London for three years.\nB: That explains his perfect British accent.', question:'Why does he speak English so well?', options:['Natural talent','Studied 10 years and lived in London 3 years','Watches TV','Magic'], answer:1, explain:'学习十年加在伦敦住三年。' },
    { id:'en-l23', lang:'en', level:'B2', dialog:'A: I have been reflecting on my career choices lately.\nB: That is a serious concern. What specifically has been troubling you?\nA: I am successful but I do not feel fulfilled. I am considering a complete career change to education.', question:'What is A considering?', options:['Promotion','Career change to education','Retirement','Starting business'], answer:1, explain:'转向教育行业。' },
    { id:'en-l24', lang:'en', level:'B2', dialog:'A: The company announced significant restructuring yesterday.\nB: The CEO said they need to cut costs dramatically to remain competitive.\nA: But cutting staff without improving processes seems shortsighted.', question:'What does A think about the company\'s approach?', options:['Fully supports it','Shortsighted prefers innovation','Does not care','Wants to quit'], answer:1, explain:'短视的做法。' },
    { id:'en-l25', lang:'en', level:'C1', dialog:'A: The proliferation of social media has fundamentally transformed human communication patterns.\nB: Undoubtedly. We now maintain superficial connections with hundreds while deep relationships wither.\nA: The quantity of interactions has increased exponentially but quality has deteriorated precipitously.', question:'What is the main concern?', options:['Social media improves connections','Social media erodes genuine social connection','Social media too expensive','Social media dying'], answer:1, explain:'侵蚀真实社交。' },
    { id:'en-l26', lang:'en', level:'C1', dialog:'A: I have been grappling with a profound ethical dilemma at work.\nB: What is the nature of the dilemma?\nA: I discovered that our department has been systematically underreporting environmental emissions for years.', question:'What did A discover at work?', options:['Accounting fraud','Systematic underreporting of emissions','Sexual harassment','Theft of materials'], answer:1, explain:'系统性低报排放。' },
    { id:'en-l27', lang:'en', level:'C1', dialog:'A: The concept of work-life balance has evolved considerably in recent decades.\nB: Our parents generation valued hard work above all else at the expense of personal life.\nA: Whereas younger generations increasingly prioritize meaningful work and mental well-being.', question:'What cultural shift are they discussing?', options:['Young people work harder','Shift from hard work to meaningful work and well-being','Nobody wants to work','Companies getting bigger'], answer:1, explain:'向有意义工作和心理健康转变。' },
    { id:'en-l28', lang:'en', level:'C2', dialog:'A: The epistemological foundations of scientific inquiry have been fundamentally challenged by postmodernist philosophy.\nB: While absolute epistemological certainty may be unattainable the scientific method self-correcting mechanisms provide our most reliable framework.', question:'Which philosophical position does B essentially represent?', options:['Postmodernism','Philosophical pragmatism','Radical skepticism','Idealism'], answer:1, explain:'哲学实用主义。' },
    { id:'en-l29', lang:'en', level:'C2', dialog:'A: The unprecedented scale of human migration in the 21st century represents one of the defining challenges of our time.\nB: Our institutional frameworks for managing migration remain essentially those designed for a vastly different era.\nA: Precisely. We desperately need comprehensive international cooperation not fragmented unilateral responses.', question:'What is needed according to A for managing migration?', options:['More walls','Comprehensive international cooperation','Stop all migration','Each country alone'], answer:1, explain:'全面国际合作。' },
    { id:'en-l30', lang:'en', level:'C2', dialog:'A: The relationship between economic inequality and social mobility has been extensively researched by economists worldwide.\nB: Societies with greater inequality tend to have significantly lower intergenerational mobility.\nA: Unequal access to quality education healthcare disparities and concentrated political influence are key mechanisms.', question:'What undermines the meritocratic ideal according to the conversation?', options:['Too much education','Structural barriers like unequal access to education','People are lazy','Government too small'], answer:1, explain:'结构性障碍如教育不平等。' }
  ],
  ja: [
    { id:'ja-l1', lang:'ja', level:'A1', dialog:'A: おはようございます。今日の天気はどうですか。\nB: とてもいい天気ですよ。\nA: そうですか。', question:'今日の天気は?', options:['悪い','いい天気','雨','雪'], answer:1, explain:'Bはとてもいい天気と答えた。' },
    { id:'ja-l2', lang:'ja', level:'A1', dialog:'A: すみません、駅はどこですか。\nB: あの建物の右です。歩いて五分です。\nA: わかりました。', question:'駅はどこ?', options:['左','建物の右','遠く','二階'], answer:1, explain:'建物の右。' },
    { id:'ja-l3', lang:'ja', level:'A1', dialog:'A: あなたは何歳ですか。\nB: 私は二十二歳です。\nA: 若いですね。', question:'Bは何歳?', options:['20','22','24','26'], answer:1, explain:'二十二歳。' },
    { id:'ja-l4', lang:'ja', level:'A1', dialog:'A: りんごは好きですか。\nB: はい、大好きです。毎日食べます。\nA: 私も好きです。', question:'Bはりんごが好きですか?', options:['いいえ','はい大好き','嫌い','食べない'], answer:1, explain:'はい大好き。' },
    { id:'ja-l5', lang:'ja', level:'A1', dialog:'A: これは何ですか。\nB: これは日本語の本です。\nA: おもしろそうですね。', question:'これは?', options:['英語の本','日本語の本','中国語の本','料理本'], answer:1, explain:'日本語の本。' },
    { id:'ja-l6', lang:'ja', level:'A2', dialog:'A: 最近仕事が忙しくて運動する時間がありません。\nB: それは大変ですね。でも少しでも体を動かしたほうがいいですよ。\nA: そうですね。来週からジムに通うことにしました。', question:'Aは来週から何をする?', options:['仕事を辞める','ジムに通う','旅行する','運動をやめる'], answer:1, explain:'ジムに通う。' },
    { id:'ja-l7', lang:'ja', level:'A2', dialog:'A: 昨日映画を見に行きました。\nB: どうでしたか。\nA: 恋愛映画でしたが少し長くて退屈でした。', question:'映画はどうだった?', options:['とても面白かった','少し長くて退屈','泣けた','怖かった'], answer:1, explain:'少し長くて退屈。' },
    { id:'ja-l8', lang:'ja', level:'A2', dialog:'A: 図書館は何時から何時までですか。\nB: 午前九時から午後八時までです。日曜日は休みです。\nA: わかりました。', question:'図書館の営業時間は?', options:['9時から20時まで日曜休み','9時から18時まで','10時から20時まで','終日営業'], answer:0, explain:'9時から20時まで日曜休み。' },
    { id:'ja-l9', lang:'ja', level:'A2', dialog:'A: 将来何になりたいですか。\nB: 子供が好きなので先生になりたいです。\nA: それはいい夢ですね。', question:'Bは将来何になりたい?', options:['医者','先生','弁護士','エンジニア'], answer:1, explain:'先生。' },
    { id:'ja-l10', lang:'ja', level:'B1', dialog:'A: 先週末に富士山に登ってきました。\nB: すごいですね。頂上まで行きましたか。\nA: ええ夜中の二時に出発してちょうど日の出時刻に頂上に着きました。', question:'Aは富士山の頂上にいつ着きましたか?', options:['昼ごろ','日の出時刻','夜中の二時','夕方'], answer:1, explain:'日の出時刻。' },
    { id:'ja-l11', lang:'ja', level:'B1', dialog:'A: 日本の企業に就職するためにはどうすればいいですか。\nB: 大学の就職課に相談に行くのが一番いいと思います。親切に教えてくれますよ。', question:'Bはどこに相談に行くべきだと言っていますか?', options:['大学の就職課','友達','家族','先生'], answer:0, explain:'大学の就職課。' },
    { id:'ja-l12', lang:'ja', level:'B1', dialog:'A: 最近環境問題について考えることが多くなりました。\nB: プラスチックゴミの問題は毎日海に流れ出ています。\nA: 私たち一人ひとりが生活を見直す必要がありますね。', question:'二人は何について話していますか?', options:['料理','旅行','プラスチックゴミの環境問題','音楽'], answer:2, explain:'プラスチックゴミの環境問題。' },
    { id:'ja-l13', lang:'ja', level:'B2', dialog:'A: 日本の少子高齢化問題は年々深刻化しており労働力不足や社会保障制度への負担が懸念されています。\nB: 出生率の低下と平均寿命の延長により我が国の人口構造は急激に変化しています。\nA: 政府は女性の社会進出支援や外国人労働者の受け入れ拡大など様々な政策を打ち出しています。', question:'会話の主題は何?', options:['経済成長','少子高齢化問題とその対策','教育改革','環境問題'], answer:1, explain:'少子高齢化問題とその対策。' },
    { id:'ja-l14', lang:'ja', level:'B2', dialog:'A: 現代の若者たちはインターネットやスマートフォンの普及によって人間関係のあり方が大きく変わってきているように思います。\nB: 確かにSNSを通じたコミュニケーションが主流になる一方で直接会って話す機会が減っています。\nA: オンラインでの交流は便利ですが時に人と人との距離を遠ざけてしまうこともありますね。', question:'二人は主に何について話していますか?', options:['スマホの便利さ','デジタルコミュニケーションと人間関係の変化','仕事の効率化','教育の変化'], answer:1, explain:'デジタルコミュニケーションと人間関係の変化。' },
    { id:'ja-l15', lang:'ja', level:'C1', dialog:'A: 日本の終身雇用制度は戦後の高度経済成長期に企業と労働者の間に築かれた暗黙の契約でしたが近年その前提が崩壊しつつあります。\nB: グローバル化の進展や技術革新の加速に伴い企業はより柔軟な雇用形態を求めるようになりました。\nA: 正規雇用から非正規雇用へのシフトは労働者の経済的不安定性を高めるとともに社会的な結束を弱める可能性があります。', question:'会話の主なテーマは何?', options:['終身雇用崩壊と雇用形態の変化','技術革新のみ','海外進出','経済成長'], answer:0, explain:'終身雇用崩壊と雇用形態の変化。' },
    { id:'ja-l16', lang:'ja', level:'C1', dialog:'A: 日本の教育制度は国際的に見ても高い水準にありますが近年その画一性や競争主義が問題視されるようになりました。\nB: 一律のカリキュラムの中で個々の生徒の能力や個性が十分に伸ばせていないという指摘があります。\nA: また受験戦争とも呼ばれる過度な競争は子どもたちの精神的な負担を増大させています。', question:'日本の教育の問題点は何?', options:['学力が低い','画一性と過度な競争主義','学校が少ない','先生が少ない'], answer:1, explain:'画一性と過度な競争主義。' },
    { id:'ja-l17', lang:'ja', level:'C2', dialog:'A: 日本の戦後民主主義の発展過程を考察する際アメリカの占領政策が我が国の法体系と政治文化に与えた影響は極めて深远なものがあります。\nB: 特に日本国憲法の制定過程においてはGHQの草案が基本骨格を形成したことは歴史的事実として否定できません。\nA: しかしそれを単なる押しつけと評するのは過度に単純化した見方です。日本側の交渉やその後の運用過程で我が国の伝統的な政治文化との融合が進んだ側面も看過できません。', question:'Aは日本の民主主義を理解するために何が必要だと考えていますか?', options:['経済成長のみ','歴史的経緯を踏まえること','アメリカの真似','政治を無視する'], answer:1, explain:'歴史的経緯を踏まえること。' },
    { id:'ja-l18', lang:'ja', level:'C2', dialog:'A: グローバル化の進行に伴い文化的多様性の尊重と社会的統合の維持という二つの価値の間に緊張関係が生じていることは否定できません。\nB: 特に移民の受け入れが進む社会においては異なる文化的背景を持つ人々が共に暮らすための公共哲学が不可欠となります。\nA: 日本は長らく単一民族社会であるという自負を持ってきましたが現在ではその前提そのものが事実上崩壊しつつあります。', question:'会話で議論されている主な問題は何?', options:['経済格差','文化的多様性と社会統合のバランス','環境問題','少子化'], answer:1, explain:'文化的多様性と社会統合のバランス。' }
  ],
  ko: [
    { id:'ko-l1', lang:'ko', level:'A1', dialog:'A: 안녕하세요 반갑습니다.\nB: 안녕하세요 저도 반갑습니다.\nA: 이름이 무엇입니까.\nB: 제 이름은 김민준입니다.', question:'B의 이름은?', options:['박민수','김민준','이영희','최지민'], answer:1, explain:'김민준입니다.' },
    { id:'ko-l2', lang:'ko', level:'A1', dialog:'A: 이것은 무엇입니까.\nB: 이것은 책입니다.\nA: 그것은 한국어 책입니까.\nB: 네 한국어 책입니다.', question:'이것은?', options:['영어책','한국어 책','중국어 책','일본어 책'], answer:1, explain:'한국어 책입니다.' },
    { id:'ko-l3', lang:'ko', level:'A1', dialog:'A: 오늘 날씨가 좋네요.\nB: 네 정말 맑고 따뜻합니다.\nA: 저는 이런 날씨를 좋아해요.', question:'오늘 날씨는?', options:['나쁘다','맑고 따뜻하다','비가 온다','춥다'], answer:1, explain:'맑고 따뜻하다.' },
    { id:'ko-l4', lang:'ko', level:'A1', dialog:'A: 몇 시입니까.\nB: 지금 오후 세 시입니다.\nA: 아 벌써 그렇군요.', question:'지금 몇 시?', options:['오전 3시','오후 3시','오후 2시','오후 4시'], answer:1, explain:'오후 세 시입니다.' },
    { id:'ko-l5', lang:'ko', level:'A1', dialog:'A: 어디에 사십니까.\nB: 저는 서울에 삽니다.\nA: 서울은 큰 도시네요.', question:'B는 어디에 삽니까?', options:['부산','인천','서울','대구'], answer:2, explain:'서울에 삽니다.' },
    { id:'ko-l6', lang:'ko', level:'A2', dialog:'A: 주말에 보통 무엇을 합니까.\nB: 친구들과 만나서 밥을 먹거나 영화를 봅니다.\nA: 즐거운 주말을 보내는군요.', question:'B는 주말에 무엇을 합니까?', options:['집에서 쉰다','친구와 밥 영화','공부만 한다','일한다'], answer:1, explain:'친구와 밥을 먹거나 영화를 본다.' },
    { id:'ko-l7', lang:'ko', level:'A2', dialog:'A: 이 옷은 얼마입니까.\nB: 이만 원입니다.\nA: 조금 비싸네요.', question:'이 옷은 얼마입니까?', options:['1만 원','2만 원','3만 원','5만 원'], answer:1, explain:'이만 원입니다.' },
    { id:'ko-l8', lang:'ko', level:'A2', dialog:'A: 한국 생활이 어떻습니까.\nB: 처음에는 힘들었지만 이제는 많이 익숙해졌습니다.\nA: 다행이네요.', question:'한국 생활은 어떠합니까?', options:['처음 힘들었지만 지금 익숙','아주 편안','처음부터 쉬웠음','싫다'], answer:0, explain:'처음 힘들었지만 지금 익숙해졌다.' },
    { id:'ko-l9', lang:'ko', level:'A2', dialog:'A: 내일 저녁 시간이 있습니까 같이 식사합시다.\nB: 미안하지만 내일은 약속이 있습니다. 모레는 괜찮습니다.\nA: 그럼 모레 봅시다.', question:'모레는 어떻습니까?', options:['내일 약속','모레 식사','매일 바쁨','약속 없음'], answer:1, explain:'모레 식사 약속.' },
    { id:'ko-l10', lang:'ko', level:'B1', dialog:'A: 최근에 읽은 책 중에서 인상 깊은 책이 있습니까.\nB: 네 채식주의자라는 책을 읽었는데 매우 깊은 인상을 받았습니다.\nA: 저도 그 책을 읽어 본 적이 있습니다.', question:'B가 인상 깊게 읽은 책은?', options:['인간 실격','채식주의자','나무','죄와 벌'], answer:1, explain:'채식주의자.' },
    { id:'ko-l11', lang:'ko', level:'B1', dialog:'A: 요즘 젊은 사람들 사이에서 워라밸이 중요하다는 이야기를 많이 합니다.\nB: 네 일과 삶의 균형을 중시하는 분위기가 확산되고 있습니다.\nA: 저도 가능한 한 정시에 퇴근하려고 노력하고 있습니다.', question:'회화의 주제는 무엇입니까?', options:['경제 성장','일과 삶의 균형 워라밸','여행','음식'], answer:1, explain:'일과 삶의 균형.' },
    { id:'ko-l12', lang:'ko', level:'B1', dialog:'A: 서울의 주거 문제는 어떻게 생각하십니까.\nB: 집값과 전세 가격이 너무 비싸서 젊은 사람들이 감당하기 어렵습니다.\nA: 정부에서도 다양한 대책을 내놓고 있지만 아직 부족한 것 같습니다.', question:'주거 문제의 핵심은?', options:['집이 부족하다','집값이 너무 비싸다','정부가 관심 없다','건물이 오래됨'], answer:1, explain:'집값이 너무 비싸다.' },
    { id:'ko-l13', lang:'ko', level:'B2', dialog:'A: 한국의 저출산 문제는 세계 최저 수준입니다.\nB: 경제적 불안정 주거 비용 육아 지원 부족 등 복합적인 요인이 있다고 생각합니다.\nA: 정부의 정책만으로는 한계가 있으며 사회 전체의 인식 변화가 필요하다고 봅니다.', question:'저출산의 원인으로 B가 지적한 것은?', options:['사람들이 아이를 싫어함','경제적 불안정 주거비 육아지원 부족','여성이 일하기 싫어함','교육비 저렴'], answer:1, explain:'경제적 불안정 주거비 육아지원 부족.' },
    { id:'ko-l14', lang:'ko', level:'B2', dialog:'A: 최근 K-pop과 한국 드라마가 전 세계적으로 인기를 얻고 있습니다.\nB: 한류 열풍은 단순한 문화 수출을 넘어 국가 브랜드 가치를 높이는 데 크게 기여하고 있습니다.\nA: 하지만 문화 콘텐츠 산업에만 의존하는 것은 위험할 수 있다는 지적도 있습니다.', question:'한류에 대한 B의 생각은?', options:['문화 수출은 부정적','문화 수출이 국가 브랜드 가치 상승에 기여','한류는 곧 소멸','K-pop만 중요함'], answer:1, explain:'문화 수출이 국가 브랜드 가치 상승에 기여.' },
    { id:'ko-l15', lang:'ko', level:'C1', dialog:'A: 한국 사회의 학벌주의 문제는 여전히 심각합니다.\nB: 이는 교육의 본래 목적을 왜곡할 뿐만 아니라 청년들의 정신적 고통을 가중시키는 요인이 됩니다.\nA: 학벌보다 능력과 인성을 중시하는 사회로 나아가야 하지만 제도적 뒷받침이 필수적입니다.', question:'회화의 주제는 무엇입니까?', options:['경제 발전','학벌주의 문제와 대안','정치 개혁','환경 문제'], answer:1, explain:'학벌주의 문제와 대안.' },
    { id:'ko-l16', lang:'ko', level:'C2', dialog:'A: 대한민국의 헌법적 가치와 민주주의 발전 과정은 우리가 지속적으로 성찰해야 할 중요한 주제입니다.\nB: 특히 권력 분립의 원칙과 시민적 자유의 확대 과정에서 나타난 긴장 관계는 현대 정치 철학의 중요한 연구 대상입니다.\nA: 또한 남북 분단의 상황 속에서 자유와 안보의 관계에 대한 심도 있는 논의가 필요합니다.', question:'이 대화의 핵심 주제는?', options:['경제 정책','헌법적 가치와 민주주의 발전 과정','문화 예술','교육 제도'], answer:1, explain:'헌법적 가치와 민주주의 발전 과정.' }
  ],
  es: [
    { id:'es-l1', lang:'es', level:'A1', dialog:'A: Hola buenos dias.\nB: Hola como estas.\nA: Muy bien gracias.', question:'Como esta A?', options:['Mal','Muy bien','Regular','Enfermo'], answer:1, explain:'A dice Muy bien.' },
    { id:'es-l2', lang:'es', level:'A1', dialog:'A: Como te llamas.\nB: Me llamo Maria.\nA: Mucho gusto Maria.', question:'Como se llama B?', options:['Ana','Maria','Luis','Carlos'], answer:1, explain:'Maria.' },
    { id:'es-l3', lang:'es', level:'A1', dialog:'A: De donde eres.\nB: Soy de Espana.\nA: Que bien!', question:'De donde es B?', options:['Mexico','Espana','Argentina','Colombia'], answer:1, explain:'De Espana.' },
    { id:'es-l4', lang:'es', level:'A1', dialog:'A: Cuantos anos tienes.\nB: Tengo veinticinco anos.\nA: Eres joven.', question:'Cuantos anos tiene B?', options:['20','25','30','35'], answer:1, explain:'Veinticinco.' },
    { id:'es-l5', lang:'es', level:'A1', dialog:'A: Que hora es.\nB: Son las tres de la tarde.\nA: Gracias.', question:'Que hora es?', options:['1 p.m.','2 p.m.','3 p.m.','4 p.m.'], answer:2, explain:'Tres de la tarde.' },
    { id:'es-l6', lang:'es', level:'A2', dialog:'A: Que haces normalmente los fines de semana.\nB: Normalmente voy al parque con mi familia y a veces voy de compras.\nA: Suena divertido.', question:'Que hace B los fines de semana?', options:['Se queda en casa','Va al parque con familia','Trabaja','Viaja'], answer:1, explain:'Va al parque con familia.' },
    { id:'es-l7', lang:'es', level:'A2', dialog:'A: Anoche vimos una pelicula.\nB: Como estuvo.\nA: Fue interesante pero un poco larga.\nB: Estoy de acuerdo.', question:'Como estuvo la pelicula?', options:['Muy corta','Interesante pero larga','Terrible','Muy graciosa'], answer:1, explain:'Interesante pero larga.' },
    { id:'es-l8', lang:'es', level:'A2', dialog:'A: Disculpe como llego a la estacion.\nB: Vaya derecho dos cuadras y luego gire a la izquierda.\nA: Muchas gracias.', question:'Que debe hacer A?', options:['Girar a la derecha','Derecho dos cuadras y girar izquierda','Volver','Parar'], answer:1, explain:'Girar a la izquierda.' },
    { id:'es-l9', lang:'es', level:'A2', dialog:'A: Quiero pedir un cafe y un bocadillo por favor.\nB: Para aqui o para llevar.\nA: Para aqui por favor.', question:'Donde comera A?', options:['En casa','Para llevar','En el restaurante','Afuera'], answer:2, explain:'Para aqui.' },
    { id:'es-l10', lang:'es', level:'B1', dialog:'A: He estado pensando en cambiar de trabajo recientemente.\nB: Por que que pasa.\nA: Siento que he dejado de crecer y el salario no es suficiente.', question:'Por que quiere cambiar de trabajo A?', options:['Odia colegas','No crece y salario bajo','Muy lejos','Jefe aburrido'], answer:1, explain:'No crece y salario bajo.' },
    { id:'es-l11', lang:'es', level:'B1', dialog:'A: Describe un dia tipico en tu vida.\nB: Me levanto a las siete hago ejercicio y luego desayuno. Despues del trabajo leo o quedo con amigos.\nA: Es muy saludable.', question:'A que hora se levanta B?', options:['6 AM','7 AM','8 AM','9 AM'], answer:1, explain:'A las siete.' },
    { id:'es-l12', lang:'es', level:'B1', dialog:'A: Tuve una experiencia terrible en el restaurante anoche.\nB: Que paso.\nA: La comida estaba fria y el camarero era grosero.\nB: Es inaceptable.', question:'Que salio mal en el restaurante?', options:['Comida excelente','Comida fria y camarero grosero','Muy caro','Muy lleno'], answer:1, explain:'Comida fria y camarero grosero.' },
    { id:'es-l13', lang:'es', level:'B2', dialog:'A: He estado reflexionando sobre mi carrera y me pregunto si estoy en el buen camino.\nB: Que te preocupa.\nA: Tengo exito pero me siento insatisfecho. Estoy pensando en un cambio completo hacia la educacion.', question:'Que esta considerando A?', options:['Ascenso','Cambio de carrera hacia educacion','Jubilacion','Negocios'], answer:1, explain:'Cambio de carrera hacia educacion.' },
    { id:'es-l14', lang:'es', level:'B2', dialog:'A: La empresa anuncio reestructuracion y mucha gente esta preocupada.\nB: El director necesita reducir costos para seguir siendo competitivo.\nA: Pero reducir personal sin mejorar procesos parece corto mirado.', question:'Que piensa A?', options:['Apoya totalmente','Corto mirado prefiere innovacion','No le importa','Quiere dimitir'], answer:1, explain:'Corto mirado prefiere innovacion.' },
    { id:'es-l15', lang:'es', level:'C1', dialog:'A: Las redes sociales han transformado fundamentalmente la comunicacion humana.\nB: Mantenemos conexiones superficiales con cientos mientras relaciones profundas se marchitan.\nA: La cantidad ha aumentado exponencialmente pero la calidad se ha deteriorado precipitadamente.', question:'Cual es la preocupacion principal?', options:['Mejoran conexiones','Erosionan la conexion social autentica','Son caras','Mueren'], answer:1, explain:'Erosionan la conexion social autentica.' },
    { id:'es-l16', lang:'es', level:'C2', dialog:'A: Los fundamentos epistemologicos de la investigacion cientifica han sido desafiados por la filosofia posmoderna.\nB: Aunque la certeza absoluta puede ser inalcanzable los mecanismos autocorrectivos del metodo cientifico proporcionan nuestro marco mas fiable.\nA: Esa posicion caracteriza esencialmente el pragmatismo filosofico.', question:'Que posicion representa B?', options:['Posmodernismo','Pragmatismo filosofico','Escepticismo radical','Idealismo'], answer:1, explain:'Pragmatismo filosofico.' }
  ],
  fr: [
    { id:'fr-l1', lang:'fr', level:'A1', dialog:'A: Bonjour comment allez-vous.\nB: Tres bien merci. Et vous.\nA: Moi aussi merci.', question:'Comment va B?', options:['Mal','Tres bien','Pas bien','Malade'], answer:1, explain:'Tres bien.' },
    { id:'fr-l2', lang:'fr', level:'A1', dialog:'A: Comment vous appelez-vous.\nB: Je m appelle Pierre.\nA: Enchante Pierre.', question:'Comment s appelle B?', options:['Jean','Pierre','Paul','Jacques'], answer:1, explain:'Pierre.' },
    { id:'fr-l3', lang:'fr', level:'A1', dialog:'A: D ou venez-vous.\nB: Je viens de France.\nA: Ah tres bien.', question:'D ou vient B?', options:['Belgique','France','Suisse','Canada'], answer:1, explain:'France.' },
    { id:'fr-l4', lang:'fr', level:'A1', dialog:'A: Quel age avez-vous.\nB: J ai trente ans.\nA: Vous etes jeune.', question:'Quel age a B?', options:['25','30','35','40'], answer:1, explain:'Trente ans.' },
    { id:'fr-l5', lang:'fr', level:'A1', dialog:'A: Quelle heure est-il.\nB: Il est trois heures de l apres-midi.\nA: Merci.', question:'Quelle heure est-il?', options:['1 h','2 h','3 h','4 h'], answer:2, explain:'Trois heures.' },
    { id:'fr-l6', lang:'fr', level:'A2', dialog:'A: Qu est-ce que tu fais normalement le week-end.\nB: Normalement je vais au parc avec ma famille et parfois je fais des courses.\nA: Ca a l air sympa.', question:'Que fait B le week-end?', options:['Reste chez lui','Va au parc avec famille','Travaille','Voyage'], answer:1, explain:'Va au parc avec famille.' },
    { id:'fr-l7', lang:'fr', level:'A2', dialog:'A: Hier soir nous avons vu un film.\nB: Comment etait-il.\nA: C etait interessant mais un peu long.\nB: Je suis d accord.', question:'Comment etait le film?', options:['Tres court','Interessant mais long','Terrible','Tres drole'], answer:1, explain:'Interessant mais long.' },
    { id:'fr-l8', lang:'fr', level:'A2', dialog:'A: Comment aller a la gare.\nB: Allez tout droit puis tournez a gauche.\nA: Merci beaucoup.', question:'Que doit faire A?', options:['Tourner a droite','Tout droit puis tourner a gauche','Retourner','S arreter'], answer:1, explain:'Tourner a gauche.' },
    { id:'fr-l9', lang:'fr', level:'A2', dialog:'A: Je voudrais commander un cafe et un sandwich s il vous plait.\nB: Sur place ou a emporter.\nA: Sur place s il vous plait.', question:'Ou mangera A?', options:['Chez lui','A emporter','Sur place','Dehors'], answer:2, explain:'Sur place.' },
    { id:'fr-l10', lang:'fr', level:'B1', dialog:'A: J ai pense a changer de travail recemment.\nB: Pourquoi qu est-ce qui se passe.\nA: J ai l impression de ne plus evoluer et le salaire n est pas suffisant.', question:'Pourquoi A veut changer de travail?', options:['Deteste collegues','N evolue pas et salaire bas','Trop loin','Chef ennuyeux'], answer:1, explain:'N evolue pas et salaire bas.' },
    { id:'fr-l11', lang:'fr', level:'B1', dialog:'A: Decrivez une journee typique.\nB: Je me leve a sept heures je fais du sport puis je prends le petit dejeuner. Apres le travail je lis ou je rencontre des amis.\nA: C est tres sain.', question:'A quelle heure B se leve-t-il?', options:['6 h','7 h','8 h','9 h'], answer:1, explain:'Sept heures.' },
    { id:'fr-l12', lang:'fr', level:'B1', dialog:'A: Si tu gagnais un million d euros que ferais-tu d abord.\nB: Je voyagerais autour du monde pendant un an puis j investirais le reste.\nA: Incroyable!', question:'Que ferait B d abord avec un million?', options:['Acheter maison','Voyager autour du monde un an','Arreter de travailler','Tout donner'], answer:1, explain:'Voyager autour du monde.' },
    { id:'fr-l13', lang:'fr', level:'B2', dialog:'A: J ai reflechi sur ma carriere et je me demande si je suis sur le bon chemin.\nB: Qu est-ce qui vous preoccupe.\nA: J ai du succes mais je me sens insatisfait. J envisage un changement complet vers l education.', question:'Qu est-ce que A envisage?', options:['Promotion','Changement de carriere vers education','Retraite','Affaires'], answer:1, explain:'Changement vers education.' },
    { id:'fr-l14', lang:'fr', level:'B2', dialog:'A: L entreprise a annonce une restructuration et beaucoup de gens sont inquiets.\nB: Le directeur doit reduire les couts pour rester competitif.\nA: Mais reduire le personnel sans ameliorer les processus parait a courte vue.', question:'Que pense A?', options:['Soutient totalement','A courte vue prefere innovation','N en a pas rien a faire','Veut demissionner'], answer:1, explain:'A courte vue.' },
    { id:'fr-l15', lang:'fr', level:'C1', dialog:'A: Les reseaux sociaux ont fondamentalement transforme la communication humaine.\nB: Nous maintenons des connexions superficielles avec des centaines tandis que des relations profondes dessechent.\nA: La quantite a augmente exponentiellement mais la qualite s est deterioree precipitamment.', question:'Quelle est la preoccupation principale?', options:['Amenent des connexions','Detruisent la connexion sociale authentique','Trop cher','Meurent'], answer:1, explain:'Detruisent la connexion sociale authentique.' },
    { id:'fr-l16', lang:'fr', level:'C2', dialog:'A: Les fondements epistemologiques de la recherche scientifique ont ete remis en question par la philosophie postmoderne.\nB: Bien que la certitude absolue puisse etre inatteignable les mecanismes autocorrectifs du methode scientifique fournissent notre cadre le plus fiable.\nA: Cette position caracterise essentiellement le pragmatisme philosophique.', question:'Quelle position represente B?', options:['Posmodernisme','Pragmatisme philosophique','Scepticisme radical','Idealisme'], answer:1, explain:'Pragmatisme philosophique.' }
  ],
};



/* ===== 成就徽章 BADGES ===== */
const BADGES = [
  { id:'b1', icon:'🎯', name:'初出茅庐', desc:'完成第一个学习课程。',
    check:(s)=>(s.coursesCompleted||[]).length>=1 },
  { id:'b2', icon:'📚', name:'勤奋学习者', desc:'完成 5 门课程。',
    check:(s)=>(s.coursesCompleted||[]).length>=5 },
  { id:'b3', icon:'🏆', name:'多语种达人', desc:'在至少 3 种语言中完成过课程。',
    check:(s)=>{
      const set = new Set((s.coursesCompleted||[]).map(id=>id.split('-')[0]));
      return set.size>=3;
    } },
  { id:'b4', icon:'🗣️', name:'口语新星', desc:'完成 5 次口语跟读练习。',
    check:(s)=>(s.speakCount||0)>=5 },
  { id:'b5', icon:'👂', name:'听力大师', desc:'完成 5 次听力练习。',
    check:(s)=>(s.listenCount||0)>=5 },
  { id:'b6', icon:'✨', name:'单词王', desc:'累计学习 20 个单词。',
    check:(s)=>(s.vocabMastered||[]).length>=20 },
  { id:'b7', icon:'🧠', name:'语法天才', desc:'累计答对 10 道语法题。',
    check:(s)=>(s.grammarCorrect||0)>=10 },
  { id:'b8', icon:'🔥', name:'经验值达人', desc:'累计获得 500 XP。',
    check:(s)=>(s.xp||0)>=500 },
  { id:'b9', icon:'⭐', name:'中高级飞跃', desc:'完成 B2 级别课程。',
    check:(s)=>(s.coursesCompleted||[]).some(id=>id.endsWith('-B2')) },
  { id:'b10', icon:'👑', name:'精通之路', desc:'完成 C2 级别课程。',
    check:(s)=>(s.coursesCompleted||[]).some(id=>id.endsWith('-C2')) },
  { id:'b11', icon:'🌈', name:'全级别挑战', desc:'在 A1-C2 六个级别中均有完成记录。',
    check:(s)=>{
      const set = new Set((s.coursesCompleted||[]).map(id=>id.split('-').slice(-1)[0]));
      return ['A1','A2','B1','B2','C1','C2'].every(l=>set.has(l));
    } },
  { id:'b12', icon:'🎓', name:'终身学习者', desc:'完成 12 门课程。',
    check:(s)=>(s.coursesCompleted||[]).length>=12 }
];

/* ===== 社区种子帖子 ===== */
const SEED_POSTS = [
  { id:'p1', author:'LinguaVerse 官方', lang:'🌐 综合', title:'🎉 欢迎来到多语种沉浸式学习社区',
    content:'在这里你可以分享学习心得、提问、打卡、结识同好。本平台支持英语、日语、韩语、西班牙语、法语五门主流语言的分级课程与互动练习。祝你学习愉快！', ts:Date.now()-86400000*3, likes:[], comments:[] },
  { id:'p2', author:'小明', lang:'🇯🇵 日本語', title:'日语 N5 备考心得分享',
    content:'最近完成了 A1-A2 的日语基础课程，发现五十音真的要每天念。推荐用单词闪卡 + 间隔重复的方法，效率比死记高很多！', ts:Date.now()-86400000*2, likes:[], comments:[] },
  { id:'p3', author:'Jane', lang:'🇬🇧 English', title:'Present perfect vs simple past 小技巧',
    content:'记住一句话：有 "since/for/ever/already/yet" 用现在完成时；有明确过去时间点用一般过去时。', ts:Date.now()-86400000, likes:[], comments:[] },
  { id:'p4', author:'한국어러버', lang:'🇰🇷 한국어', title:'韩语收音 ㄴ/ㄹ/ㅁ/ㅂ 的发音规则',
    content:'收音后跟以 ㄴ/ㅁ 开头的音节时，前面的收音会被鼻音化，非常好听！多跟读几次就会习惯。', ts:Date.now()-3600000*5, likes:[], comments:[] },
  { id:'p5', author:'Hola', lang:'🇪🇸 Español', title:'西班牙语的大舌音 rr 练习法',
    content:'把舌头放在上齿龈，用气流推动舌尖振动。先从 "tra"、"tre"、"tri" 开始，慢慢过渡到单词。', ts:Date.now()-3600000*2, likes:[], comments:[] },
  { id:'p6', author:'Amélie', lang:'🇫🇷 Français', title:'法语 liaison（连音）规则总结',
    content:'1) 冠词+名词：les amis → [lezami]；2) 形容词+名词：petit ami → [ptitami]；3) 代词+动词：nous avons → [nuzavɔ̃]。多听多跟读！', ts:Date.now()-3600000, likes:[], comments:[] }
];

function loadStore() {
  try {
    const raw = localStorage.getItem(STORE_KEY);
    if (!raw) return null;
    return JSON.parse(raw);
  } catch { return null; }
}
function saveStore(state) {
  localStorage.setItem(STORE_KEY, JSON.stringify(state));
}

/* 初始全局状态 */
var STATE = {
  user: null,          // { username, nickname, level(beginner/...), preferredLangs:[], dailyGoal, joinedAt }
  users: {},           // username -> { password, profile }
  posts: SEED_POSTS.slice(),   // { id, author, lang, title, content, ts, likes:[], comments:[] }
  dailyDate: '',       // 'YYYY-MM-DD'
  dailyTasks: {},      // key -> progress
  xp: 0,
  progress: {},        // lang -> { levelTag, xp, lessonsDone, moduleProgress }
  stats: {
    totalSessions: 0,
    vocabCorrect: 0,
    grammarCorrect: 0,
    speakCount: 0,
    listenCount: 0,
    streak: 0,
    lastActive: '',
    posts: 0
  },
  badges: [],          // 已解锁徽章 id 列表
  currentLang: 'all',
  currentLevel: 'all',
  currentModule: 'vocab',
  activity: [],        // { text, ts }
  membership: null      // null = 免费, 'lifetime' = 终身会员, 'monthly' = 月费会员
};

/* 从磁盘载入，合并默认 */
(function initState() {
  const s = loadStore();
  if (s) {
    // 保留原始字段，补全默认缺失字段
    STATE = Object.assign({}, STATE, s);
    if (!STATE.stats) STATE.stats = {};
    Object.assign(STATE.stats, {
      totalSessions: 0, vocabCorrect: 0, grammarCorrect: 0,
      speakCount: 0, listenCount: 0, streak: 0, lastActive: '', posts: 0,
      ...(s.stats || {})
    });
    if (!STATE.posts || STATE.posts.length === 0) STATE.posts = SEED_POSTS.slice();
    if (!STATE.badges) STATE.badges = [];
    if (!STATE.activity) STATE.activity = [];
  }
})();
// 暴露到 window，方便调试与外部脚本访问
window.STATE = STATE;

/* ===== Stripe 自动支付系统（零人工干预） =====
 *
 * 使用方法（只需 5 分钟在 stripe.com 后台设置，见 README.md 详细说明）：
 *
 * 1. 注册 stripe.com → 获取可发布公钥 (pk_test_xxxxxx 或 pk_live_xxxxx)
 * 2. 在 Stripe 后台：Products → Add product → 价格 ¥299 → 保存
 * 3. 在产品页面：Payment links → Create payment link
 *    - 填好名称、价格
 *    - After payment → "Don't show confirmation page"
 *    - Redirect URL 填你的网站 + "?payment_success=lifetime"
 *      例如：https://linguaverse.vercel.app/?payment_success=lifetime
 * 4. 在 Stripe 后台：Payment links → 复制链接
 * 5. 把下方 STRIPE_PUBLIC_KEY 和两个 PAYMENT_LINK 替换成你的即可
 *
 * 工作流程：
 * 用户点击"立即解锁" → 跳转到 Stripe 付款页 → 付款成功 →
 * Stripe 自动跳转回你的网站 ?payment_success=lifetime →
 * 浏览器自动检测到 success 参数 → 自动解锁会员！
 * ============================================================ */

// ⚠️ 请把下面替换成你自己的（从 Stripe 后台复制）
const STRIPE_PUBLIC_KEY = 'pk_test_替换成你自己的_51La'; // 从 Stripe → Developers → API keys
const PAYMENT_LINK_LIFETIME = 'https://buy.stripe.com/替换成你的终身会员链接'; // 从 Payment links 页面复制
const PAYMENT_LINK_MONTHLY = 'https://buy.stripe.com/替换成你的月费会员链接';

/* ===== 自动支付解锁：检测 URL 参数 ===== */
function autoUnlockFromPayment() {
  const urlParams = new URLSearchParams(window.location.search);
  const plan = urlParams.get('payment_success');
  if (!plan) return;

  if (plan === 'lifetime' || plan === 'monthly') {
    STATE.membership = plan;
    saveStore(STATE);
    // 清理 URL，不让用户看到 ?payment_success=xxx
    window.history.replaceState({}, document.title, window.location.pathname);
    // 显示成功弹窗
    showPaymentSuccessModal(plan);
    // 刷新界面
    if (typeof updateMembershipBadge === 'function') updateMembershipBadge();
    if (typeof updatePricingPage === 'function') updatePricingPage();
    if (typeof renderCourses === 'function') renderCourses();
  }
}

function showPaymentSuccessModal(plan) {
  const backdrop = document.createElement('div');
  backdrop.style.cssText = 'position:fixed;inset:0;background:rgba(20,15,5,.55);backdrop-filter:blur(4px);z-index:999;display:flex;align-items:center;justify-content:center;padding:20px;animation:toastIn .3s ease;';
  const card = document.createElement('div');
  card.style.cssText = 'background:#fff;border-radius:24px;padding:40px 32px;max-width:460px;width:100%;text-align:center;box-shadow:0 30px 80px rgba(0,0,0,.35);font-family:inherit;';
  card.innerHTML = `
    <div style="font-size:72px;margin-bottom:12px;">🎉</div>
    <h2 style="margin:0 0 8px;font-size:28px;font-weight:900;">付款成功！</h2>
    <p style="color:#6b6b6b;margin:0 0 20px;font-size:15px;line-height:1.7;">
      欢迎加入 LinguaVerse ${plan === 'lifetime' ? '终身会员' : '月费会员'}！<br/>
      你已解锁 <strong>全部 30 门高级课程</strong>（英语 · 日语 · 韩语 · 西语 · 法语，A1~C2 全部级别）。<br/>
      从今天起，你的语言学习之旅不再被限制。
    </p>
    <div style="background:linear-gradient(135deg,#fff7ed,#ede9fe);border:1.5px solid #fed7aa;border-radius:14px;padding:14px 18px;margin-bottom:20px;text-align:left;font-size:13px;color:#92400e;line-height:1.6;">
      💡 <strong>小提示：</strong>点击右上角"会员"徽章，随时查看你的会员状态。如果哪天不小心清除了浏览器数据，付款后再次访问本页会自动重新解锁。
    </div>
    <button id="startBtn" style="width:100%;padding:14px;background:linear-gradient(135deg,#7c3aed,#e8780f);color:#fff;border:none;border-radius:12px;font-size:16px;font-weight:700;cursor:pointer;font-family:inherit;">🚀 立即开始学习</button>
  `;
  backdrop.appendChild(card);
  document.body.appendChild(backdrop);
  card.querySelector('#startBtn').onclick = () => {
    backdrop.remove();
    go('courses');
  };
}

/* ===== Stripe 付款跳转（自动，无需后端） ===== */
function openStripePayment(plan) {
  const link = plan === 'lifetime' ? PAYMENT_LINK_LIFETIME : PAYMENT_LINK_MONTHLY;
  if (link.includes('替换')) {
    // 还没配置真实的 Stripe 链接，显示引导弹窗
    showStripeSetupModal(plan);
    return;
  }
  // 跳转到 Stripe 付款页，付款成功后 Stripe 会自动跳回你的网站
  // 并带上 ?payment_success=lifetime 参数（需要在 Stripe Payment Links 里设置 redirect）
  window.location.href = link;
}

function showStripeSetupModal(plan) {
  const backdrop = document.createElement('div');
  backdrop.style.cssText = 'position:fixed;inset:0;background:rgba(20,15,5,.55);backdrop-filter:blur(4px);z-index:999;display:flex;align-items:center;justify-content:center;padding:20px;animation:toastIn .3s ease;';
  const card = document.createElement('div');
  card.style.cssText = 'background:#fff;border-radius:24px;padding:36px 32px;max-width:500px;width:100%;box-shadow:0 30px 80px rgba(0,0,0,.35);font-family:inherit;';
  card.innerHTML = `
    <div style="text-align:center;margin-bottom:20px;">
      <div style="font-size:56px;margin-bottom:8px;">⚡</div>
      <h2 style="margin:0 0 4px;font-size:22px;font-weight:900;">即将开通自动付款</h2>
      <p style="color:#6b6b6b;margin:0;font-size:13px;">首次部署需在 Stripe 后台完成 3 步配置</p>
    </div>
    <div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:14px;padding:18px 20px;margin-bottom:18px;">
      <div style="font-size:14px;font-weight:700;color:#92400e;margin-bottom:10px;">📋 只需 3 步（约 5 分钟）：</div>
      <div style="font-size:13px;color:#78350f;line-height:1.9;">
        <strong>1.</strong> 去 <a href="https://stripe.com" target="_blank" style="color:#7c3aed;font-weight:700;">stripe.com</a> 注册账号并完成身份验证<br/>
        <strong>2.</strong> Products → Add product → 创建终身会员 (¥299) 和月费会员 (¥29) → 点击 "Payment link"<br/>
        <strong>3.</strong> Payment link → After payment → Redirect to URL → 填入你的网站地址：<br/>
        <code style="background:#fef3c7;padding:4px 8px;border-radius:6px;font-size:12px;">https://你的域名/?payment_success=lifetime</code><br/>
        （月费会员则填 <code style="background:#fef3c7;padding:4px 8px;border-radius:6px;font-size:12px;">?payment_success=monthly</code>）
      </div>
    </div>
    <div style="background:#f3f4f6;border-radius:12px;padding:14px 18px;margin-bottom:18px;font-size:12px;color:#4b5563;line-height:1.7;">
      🔑 复制你创建好的 Payment link，打开 <code>bundle.js</code>，把：<br/>
      <code>PAYMENT_LINK_LIFETIME = 'https://buy.stripe.com/你的终身会员链接'</code><br/>
      <code>PAYMENT_LINK_MONTHLY = 'https://buy.stripe.com/你的月费会员链接'</code><br/>
      然后重新上传到 Vercel 即可。从此以后，付款 → 自动跳转 → 自动解锁，全程无需人工。
    </div>
    <button id="closeBtn" style="width:100%;padding:13px;background:linear-gradient(135deg,#7c3aed,#e8780f);color:#fff;border:none;border-radius:12px;font-size:15px;font-weight:700;cursor:pointer;font-family:inherit;">我知道了</button>
  `;
  backdrop.appendChild(card);
  document.body.appendChild(backdrop);
  card.querySelector('#closeBtn').onclick = () => backdrop.remove();
}

/* ===== 会员工具 ===== */
function isPremium() { return STATE.membership === 'lifetime' || STATE.membership === 'monthly'; }
function isLifetime() { return STATE.membership === 'lifetime'; }

/* 判断课程是否需要会员（A1/A2 免费，B1~C2 需会员）*/
function isCourseLocked(course) {
  return !isPremium() && (course.level === 'B1' || course.level === 'B2' || course.level === 'C1' || course.level === 'C2');
}

function updateMembershipBadge() {
  const chip = document.getElementById('userchip');
  if (!chip) return;
  const old = chip.querySelector('.vip-badge-nav');
  if (old) old.remove();
  if (isLifetime()) {
    const badge = document.createElement('span');
    badge.className = 'vip-badge-nav';
    badge.textContent = '👑 终身';
    chip.insertBefore(badge, chip.firstChild);
  } else if (STATE.membership === 'monthly') {
    const badge = document.createElement('span');
    badge.className = 'vip-badge-nav';
    badge.textContent = '⭐ 月费';
    chip.insertBefore(badge, chip.firstChild);
  }
}

/* 旧函数：已被 Stripe 自动付款取代，保留空壳防止页面报错 */
function showPaymentModal(plan) { openStripePayment(plan); }

/* 更新定价页按钮状态 */
function updatePricingPage() {
  const freeBtn = document.getElementById('planFree')?.querySelector('.plan-btn');
  const lifeBtn = document.getElementById('planLifetime')?.querySelector('.plan-btn');
  const monthBtn = document.getElementById('planMonthly')?.querySelector('.plan-btn');
  if (freeBtn) { freeBtn.disabled = !STATE.membership; freeBtn.textContent = STATE.membership ? '免费版' : '当前方案'; }
  if (lifeBtn) {
    if (STATE.membership === 'lifetime') {
      lifeBtn.textContent = '✓ 已拥有'; lifeBtn.disabled = true; lifeBtn.style.opacity = '0.7';
    } else {
      lifeBtn.textContent = '立即升级 ¥299 →'; lifeBtn.disabled = false; lifeBtn.style.opacity = '1';
    }
  }
  if (monthBtn) {
    if (STATE.membership === 'monthly') {
      monthBtn.textContent = '✓ 已订阅'; monthBtn.disabled = true; monthBtn.style.opacity = '0.7';
    } else if (STATE.membership === 'lifetime') {
      monthBtn.textContent = '已是终身会员'; monthBtn.disabled = true; monthBtn.style.opacity = '0.7';
    } else {
      monthBtn.textContent = '月费订阅 ¥29/月'; monthBtn.disabled = false; monthBtn.style.opacity = '1';
    }
  }
}

/* ===== 工具 ===== */
function today() {
  const d = new Date();
  return `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`;
}
function timeAgo(ts) {
  const diff = Date.now() - ts;
  const mins = Math.floor(diff / 60000);
  if (mins < 1) return '刚刚';
  if (mins < 60) return `${mins} 分钟前`;
  const hrs = Math.floor(mins / 60);
  if (hrs < 24) return `${hrs} 小时前`;
  const days = Math.floor(hrs / 24);
  if (days < 7) return `${days} 天前`;
  const d = new Date(ts);
  return `${d.getMonth()+1}月${d.getDate()}日`;
}
function toast(msg) {
  const el = document.getElementById('toast');
  el.textContent = msg;
  el.hidden = false;
  clearTimeout(toast._t);
  toast._t = setTimeout(() => el.hidden = true, 2200);
}
function addXP(amount, reason) {
  STATE.xp += amount;
  STATE.stats.totalSessions += 1;
  toast(`+${amount} XP · ${reason || '学习'}`);
  checkBadges();
  updateUserChip();
  saveStore(STATE);
}
function addActivity(text) {
  STATE.activity.unshift({ text, ts: Date.now() });
  if (STATE.activity.length > 50) STATE.activity.length = 50;
}
function trackStreak() {
  const t = today();
  if (STATE.stats.lastActive === t) return;
  const y = new Date(); y.setDate(y.getDate() - 1);
  const ykey = `${y.getFullYear()}-${String(y.getMonth()+1).padStart(2,'0')}-${String(y.getDate()).padStart(2,'0')}`;
  if (STATE.stats.lastActive === ykey) {
    STATE.stats.streak = (STATE.stats.streak || 0) + 1;
  } else {
    STATE.stats.streak = 1;
  }
  STATE.stats.lastActive = t;
}

/* ===== 徽章 ===== */
function checkBadges() {
  const unlocks = [];
  for (const b of BADGES) {
    if (!STATE.badges.includes(b.id) && b.check(STATE)) {
      STATE.badges.push(b.id);
      unlocks.push(b);
    }
  }
  if (unlocks.length) {
    setTimeout(() => {
      unlocks.forEach(u => toast(`🏅 解锁徽章：${u.title}`));
    }, 500);
  }
}

/* ===== 每日任务 ===== */
function ensureDaily() {
  const t = today();
  if (STATE.dailyDate !== t) {
    STATE.dailyDate = t;
    STATE.dailyTasks = {};
    DAILY_TASKS_TEMPLATE.forEach(t => STATE.dailyTasks[t.key] = { progress: 0, done: false });
  }
  trackStreak();
}
function bumpDaily(type) {
  ensureDaily();
  // 找到对应任务并 +1，完成时给 XP
  for (const t of DAILY_TASKS_TEMPLATE) {
    if (t.type === type && !STATE.dailyTasks[t.key].done) {
      STATE.dailyTasks[t.key].progress += 1;
      if (STATE.dailyTasks[t.key].progress >= t.target) {
        STATE.dailyTasks[t.key].done = true;
        addXP(t.xp, '完成每日任务：' + t.title);
      }
    }
  }
}

/* ===== 用户芯片 ===== */
function updateUserChip() {
  const xpBadge = document.getElementById('xpBadge');
  const lvlBadge = document.getElementById('levelBadge');
  const av = document.getElementById('avatar');
  if (!xpBadge) return;
  xpBadge.textContent = `${STATE.xp} XP`;
  lvlBadge.textContent = `Lv.${getLevel(STATE.xp)}`;
  if (STATE.user && av) av.textContent = STATE.user.nickname.slice(0, 1).toUpperCase();
}

/* ===== 路由 ===== */
function go(route) {
  // 隐藏所有视图
  document.querySelectorAll('.view').forEach(v => v.hidden = true);
  document.querySelectorAll('.nav-link').forEach(a => a.classList.remove('active'));
  const target = document.getElementById('view-' + route);
  if (target) target.hidden = false;
  document.querySelectorAll('.nav-link').forEach(a => {
    if (a.dataset.route === route) a.classList.add('active');
  });
  // 渲染对应视图
  if (route === 'home') renderHome();
  if (route === 'courses') renderCourses();
  if (route === 'learn') renderLearn();
  if (route === 'community') renderCommunity();
  if (route === 'achievements') renderAchievements();
  if (route === 'profile') renderProfile();
  if (route === 'pricing') { updateMembershipBadge(); updatePricingPage(); }
  // 滚动到顶
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

/* ===== 登录/注册流程 ===== */
function setupAuth() {
  const loginForm = document.getElementById('loginForm');
  const registerForm = document.getElementById('registerForm');
  const tabs = document.querySelectorAll('.auth-tab');

  tabs.forEach(t => t.addEventListener('click', () => {
    tabs.forEach(x => x.classList.remove('active'));
    t.classList.add('active');
    if (t.dataset.tab === 'login') {
      loginForm.classList.remove('hidden');
      registerForm.classList.add('hidden');
    } else {
      loginForm.classList.add('hidden');
      registerForm.classList.remove('hidden');
    }
  }));

  loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const user = document.getElementById('loginUser').value.trim();
    const pass = document.getElementById('loginPass').value;
    const u = STATE.users[user];
    if (u && u.password === pass) {
      STATE.user = u.profile;
      enterApp();
      toast(`欢迎回来，${STATE.user.nickname}！`);
    } else {
      toast('用户名或密码不正确');
    }
  });

  registerForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('regName').value.trim();
    const user = document.getElementById('regUser').value.trim();
    const pass = document.getElementById('regPass').value;
    if (STATE.users[user]) {
      toast('该用户名已存在，请换一个');
      return;
    }
    if (!user || !pass) { toast('请填写完整'); return; }
    const langs = Array.from(document.querySelectorAll('#langChoice input:checked')).map(i => i.value);
    const level = document.getElementById('regLevel').value;
    const profile = {
      username: user, nickname: name, level,
      preferredLangs: langs.length ? langs : ['en'],
      dailyGoal: 20,
      joinedAt: Date.now()
    };
    STATE.users[user] = { password: pass, profile };
    STATE.user = profile;
    enterApp();
    toast(`欢迎加入 LinguaVerse，${name}！`);
  });
}

function enterApp() {
  document.getElementById('authScreen').hidden = true;
  document.getElementById('appRoot').hidden = false;
  document.getElementById('topbar').hidden = false;
  ensureDaily();
  addActivity(`${STATE.user.nickname} 进入了学习平台`);
  updateUserChip();
  updateMembershipBadge();
  saveStore(STATE);
  go('home');
}

function logout() {
  STATE.user = null;
  document.getElementById('authScreen').hidden = false;
  document.getElementById('appRoot').hidden = true;
  document.getElementById('topbar').hidden = true;
  saveStore(STATE);
  toast('已退出登录');
}

/* ===== 导航与视图事件 ===== */
function setupNav() {
  document.querySelectorAll('[data-route]').forEach(a => {
    a.addEventListener('click', (e) => {
      e.preventDefault();
      go(a.dataset.route);
    });
  });
  document.getElementById('logoutBtn').addEventListener('click', logout);
  document.getElementById('courseModal').addEventListener('click', (e) => {
    if (e.target.matches('[data-close]')) {
      document.getElementById('courseModal').hidden = true;
    }
  });
  // 定价页按钮（调用 Stripe 自动付款）
  document.getElementById('btnUpgrade')?.addEventListener('click', () => openStripePayment('lifetime'));
  document.getElementById('btnMonthly')?.addEventListener('click', () => openStripePayment('monthly'));
}

/* ===== 首页渲染 ===== */
function renderHome() {
  ensureDaily();
  const { nickname, preferredLangs } = STATE.user || {};
  const u = document.getElementById('heroUserName');
  if (u) u.textContent = nickname || '朋友';

  // 统计
  const heroStats = document.getElementById('heroStats');
  if (heroStats) {
    heroStats.innerHTML = '';
    const level = getLevel(STATE.xp);
    const langCount = Object.keys(STATE.progress || {}).length;
    const xpNeed = xpToNext(STATE.xp);
    const items = [
      { n: STATE.xp, l: '累计 XP' },
      { n: 'Lv.' + level, l: `下一阶段 ${xpNeed.cur}/${xpNeed.need}` },
      { n: STATE.stats.streak || 0, l: '连续学习天数' },
      { n: langCount || 0, l: '学习中的语言' }
    ];
    items.forEach(x => {
      const el = document.createElement('div');
      el.className = 'hero-stat';
      el.innerHTML = `<div class="n">${x.n}</div><div class="l">${x.l}</div>`;
      heroStats.appendChild(el);
    });
  }

  // 个性化推荐：根据 preferLangs × 级别匹配课程
  const recGrid = document.getElementById('recGrid');
  if (recGrid) {
    recGrid.innerHTML = '';
    const level = STATE.user?.level || 'beginner';
    const langList = STATE.user?.preferredLangs || ['en'];
    const recs = [];
    langList.forEach(lang => {
      // 根据用户级别选择课程级别
      const levelMap = { beginner: ['A1'], elementary: ['A1', 'A2'], intermediate: ['A2', 'B1'], advanced: ['B1', 'B2'] };
      const levels = levelMap[level] || ['A1'];
      levels.forEach(lv => {
        const c = COURSES.find(x => x.lang === lang && x.level === lv);
        if (c) recs.push(c);
      });
    });
    // 补足 4 个
    if (recs.length < 4) {
      COURSES.slice().sort(() => Math.random() - 0.5).forEach(c => {
        if (recs.length < 4 && !recs.includes(c)) recs.push(c);
      });
    }
    recs.slice(0, 6).forEach(c => {
      const langMeta = LANGUAGES[c.lang];
      const card = document.createElement('div');
      card.className = 'rec-card';
      card.innerHTML = `
        <span class="tag">${c.level}</span>
        <div class="rec-icon">${c.icon}</div>
        <h3 class="rec-title">${langMeta.flag} ${c.title}</h3>
        <p class="rec-sub">${c.subtitle}</p>
        <div class="rec-meta">
          <span>${c.lessons.length} 节课</span>
          <span>${c.xp} XP 奖励</span>
          <span>${langMeta.native}</span>
        </div>
      `;
      card.addEventListener('click', () => openCourseModal(c));
      recGrid.appendChild(card);
    });
  }

  // 每日目标
  const daily = document.getElementById('dailyGrid');
  if (daily) {
    daily.innerHTML = '';
    const icons = { vocab3: '📖', grammar2: '✍️', speak2: '🎤', listen1: '🎧', streak: '🔥' };
    DAILY_TASKS_TEMPLATE.forEach(t => {
      const cur = STATE.dailyTasks[t.key]?.progress || 0;
      const done = STATE.dailyTasks[t.key]?.done;
      // streak 按登录情况特殊处理
      let displayCur = cur, displayTarget = t.target;
      if (t.type === 'streak') {
        displayCur = (STATE.stats.streak || 0) >= 1 ? 1 : 0;
      }
      const ok = done || (t.type === 'streak' && displayCur >= displayTarget);
      const card = document.createElement('div');
      card.className = 'daily-card';
      card.dataset.ok = ok ? '1' : '0';
      card.innerHTML = `
        <div class="daily-icon">${icons[t.key]}</div>
        <div class="daily-body">
          <div class="t">${t.title}</div>
          <div class="p">${Math.min(displayCur, displayTarget)} / ${t.target}${ok ? ' · 已完成 ✓' : ''}</div>
        </div>
        <div class="daily-xp">+${t.xp}</div>
      `;
      daily.appendChild(card);
    });
  }
}

/* ===== 课程页 ===== */
function renderCourses() {
  const langFilter = document.getElementById('langFilter');
  const levelFilter = document.getElementById('levelFilter');
  const grid = document.getElementById('courseGrid');

  // 首次填充筛选
  if (langFilter && !langFilter.dataset.inited) {
    langFilter.innerHTML = '<span class="filter-label">语言</span>';
    const all = document.createElement('button');
    all.className = 'chip-btn active'; all.textContent = '全部'; all.value = 'all';
    langFilter.appendChild(all);
    Object.values(LANGUAGES).forEach(l => {
      const b = document.createElement('button');
      b.className = 'chip-btn'; b.textContent = `${l.flag} ${l.name}`;
      b.value = l.code;
      langFilter.appendChild(b);
    });
    langFilter.dataset.inited = '1';
    langFilter.addEventListener('click', (e) => {
      if (e.target.matches('.chip-btn')) {
        langFilter.querySelectorAll('.chip-btn').forEach(x => x.classList.remove('active'));
        e.target.classList.add('active');
        STATE.currentLang = e.target.value;
        paintCourseGrid();
      }
    });
  }
  if (levelFilter && !levelFilter.dataset.inited) {
    levelFilter.innerHTML = '<span class="filter-label">级别</span>';
    const all = document.createElement('button');
    all.className = 'chip-btn active'; all.textContent = '全部'; all.value = 'all';
    levelFilter.appendChild(all);
    ['A1','A2','B1','B2','C1','C2'].forEach(k => {
      const b = document.createElement('button');
      b.className = 'chip-btn'; b.textContent = k; b.value = k;
      levelFilter.appendChild(b);
    });
    levelFilter.dataset.inited = '1';
    levelFilter.addEventListener('click', (e) => {
      if (e.target.matches('.chip-btn')) {
        levelFilter.querySelectorAll('.chip-btn').forEach(x => x.classList.remove('active'));
        e.target.classList.add('active');
        STATE.currentLevel = e.target.value;
        paintCourseGrid();
      }
    });
  }
  paintCourseGrid();
}
function paintCourseGrid() {
  const grid = document.getElementById('courseGrid');
  grid.innerHTML = '';
  // 优先从按钮的 active 值读取（保证和 UI 一致），fallback 到 STATE
  const langBtn = document.querySelector('#langFilter .chip-btn.active');
  const lvlBtn = document.querySelector('#levelFilter .chip-btn.active');
  const lang = (langBtn && langBtn.value === 'all') ? null : (langBtn ? langBtn.value : (STATE.currentLang === 'all' ? null : STATE.currentLang));
  const level = (lvlBtn && lvlBtn.value === 'all') ? null : (lvlBtn ? lvlBtn.value : (STATE.currentLevel === 'all' ? null : STATE.currentLevel));
  const list = COURSES.filter(c => (!lang || c.lang === lang) && (!level || c.level === level));
  if (list.length === 0) {
    grid.innerHTML = `<div style="padding:40px; color:var(--ink-3); text-align:center;">暂无匹配课程，试试其他筛选条件 ✨</div>`;
    return;
  }
  list.forEach(c => {
    const lm = LANGUAGES[c.lang];
    const p = STATE.progress[c.lang] || { lessonsDone: [] };
    const done = p.lessonsDone?.filter(l => c.lessons.includes(l)).length || 0;
    const total = c.lessons.length;
    const locked = isCourseLocked(c);
    const card = document.createElement('div');
    card.className = 'course-card' + (locked ? ' course-locked' : '');
    card.innerHTML = `
      <div style="display:flex; justify-content:space-between; align-items:flex-start;">
        <div class="big-icon course-icon">${c.icon}</div>
        <span class="level-tag">${c.level}${locked ? ' 🔒' : ''}</span>
      </div>
      <h3 class="title">${lm.flag} ${c.title}</h3>
      <p class="subtitle">${c.subtitle}</p>
      <p class="lessons-count">共 ${total} 节课 · ${lm.native}${locked ? ' · 会员专属' : ''}</p>
      <div class="course-foot">
        <span class="progress-mini">进度 ${done}/${total}</span>
        <span class="xp-mini">${c.xp} XP</span>
      </div>
    `;
    card.addEventListener('click', () => openCourseModal(c));
    grid.appendChild(card);
  });
}

function openCourseModal(c) {
  const modal = document.getElementById('courseModal');
  const body = document.getElementById('modalBody');
  const lm = LANGUAGES[c.lang];
  const p = STATE.progress[c.lang] || { lessonsDone: [] };
  const doneSet = new Set(p.lessonsDone || []);
  const locked = isCourseLocked(c);

  if (locked) {
    body.innerHTML = `
      <div style="text-align:center;padding:20px 0;">
        <div style="font-size:60px;margin-bottom:12px;">🔒</div>
        <h2 class="m-title">${c.icon} ${lm.flag} ${c.title}</h2>
        <p class="m-sub">${c.subtitle} · ${c.level}</p>
        <div style="background:linear-gradient(135deg,#fdf4ff,#ede9fe);border:1.5px solid #a855f7;border-radius:14px;padding:20px;margin:16px 0;text-align:left;">
          <p style="margin:0 0 12px;font-weight:700;color:#7c3aed;">👑 此课程为会员专属内容</p>
          <p style="margin:0;font-size:14px;color:#6b6b6b;line-height:1.6;">升级终身会员（¥299）即可解锁全部 30 门课程，终身免费，无限学习！</p>
        </div>
        <div style="display:flex;gap:10px;">
          <button class="btn-secondary" id="closeLocked" style="flex:1;">返回</button>
          <button class="btn-primary" id="goPricing" style="flex:2;">立即升级解锁 →</button>
        </div>
      </div>
    `;
    modal.hidden = false;
    document.getElementById('closeLocked').addEventListener('click', () => { modal.hidden = true; });
    document.getElementById('goPricing').addEventListener('click', () => { modal.hidden = true; go('pricing'); });
    return;
  }

  body.innerHTML = `
    <h2 class="m-title">${c.icon} ${lm.flag} ${c.title}</h2>
    <p class="m-sub">${c.subtitle} · ${c.level} · 完成全部获得 ${c.xp} XP</p>
    <ul class="lesson-list">
      ${c.lessons.map((l,i) => `
        <li>${l}${doneSet.has(l) ? '<span style="margin-left:auto; color:#16a34a; font-weight:700;">✓</span>' : ''}</li>
      `).join('')}
    </ul>
    <div style="display:flex; gap:10px; justify-content:flex-end;">
      <button class="btn-secondary" id="markCourse">标记此课程为已学习</button>
      <button class="btn-primary" id="startLearnBtn">前往学习中心</button>
    </div>
  `;
  modal.hidden = false;
  document.getElementById('startLearnBtn').addEventListener('click', () => {
    modal.hidden = true;
    STATE.currentLang = c.lang;
    STATE.currentLevel = c.level;
    go('learn');
  });
  document.getElementById('markCourse').addEventListener('click', () => {
    if (!STATE.progress[c.lang]) STATE.progress[c.lang] = { lessonsDone: [] };
    c.lessons.forEach(l => {
      if (!STATE.progress[c.lang].lessonsDone.includes(l)) {
        STATE.progress[c.lang].lessonsDone.push(l);
      }
    });
    addXP(Math.round(c.xp / 2), '完成课程：' + c.title);
    addActivity(`完成了课程《${c.title}》`);
    saveStore(STATE);
    modal.hidden = true;
    toast('课程已标记完成！');
    renderCourses();
  });
}

/* ===== 学习中心 ===== */
function renderLearn() {
  // 若当前是"全部"，自动回退到第一个具体选项（学习模块不能用"全部"渲染）
  if (!LANGUAGES[STATE.currentLang]) STATE.currentLang = Object.keys(LANGUAGES)[0] || 'en';
  if (!['A1','A2','B1','B2','C1','C2'].includes(STATE.currentLevel)) STATE.currentLevel = 'A1';
  ensureModulePicker();
  // 初始化模块设置（语言/级别）
  const settings = document.getElementById('moduleSettings');
  if (!settings) return;
  settings.innerHTML = `
    <div class="msel">
      <span>语言</span>
      <select id="mlang">
        ${Object.values(LANGUAGES).map(l => `<option value="${l.code}" ${STATE.currentLang===l.code?'selected':''}>${l.flag} ${l.name}</option>`).join('')}
      </select>
    </div>
    <div class="msel">
      <span>级别</span>
      <select id="mlevel">
        <option value="A1" ${STATE.currentLevel==='A1'?'selected':''}>A1 入门</option>
        <option value="A2" ${STATE.currentLevel==='A2'?'selected':''}>A2 初级</option>
        <option value="B1" ${STATE.currentLevel==='B1'?'selected':''}>B1 中级</option>
        <option value="B2" ${STATE.currentLevel==='B2'?'selected':''}>B2 中高级</option>
        <option value="C1" ${STATE.currentLevel==='C1'?'selected':''}>C1 高级</option>
      </select>
    </div>
    <button class="btn-primary start-btn" id="restartModule">重新开始一组</button>
  `;
  document.getElementById('mlang').addEventListener('change', (e) => {
    STATE.currentLang = e.target.value;
    paintModule();
  });
  document.getElementById('mlevel').addEventListener('change', (e) => {
    STATE.currentLevel = e.target.value;
    paintModule();
  });
  document.getElementById('restartModule').addEventListener('click', paintModule);
  paintModule();
}

function ensureModulePicker() {
  document.querySelectorAll('.module-card').forEach(c => {
    c.addEventListener('click', () => {
      document.querySelectorAll('.module-card').forEach(x => x.classList.remove('active'));
      c.classList.add('active');
      STATE.currentModule = c.dataset.module;
      paintModule();
    });
  });
}

/* 模块渲染调度 */
function paintModule() {
  const area = document.getElementById('moduleArea');
  const m = STATE.currentModule;
  if (!area) return;
  if (m === 'vocab') paintVocab();
  if (m === 'grammar') paintGrammar();
  if (m === 'speaking') paintSpeaking();
  if (m === 'listening') paintListening();
}

/* ---------- 单词记忆 (闪卡) ---------- */
function paintVocab() {
  const area = document.getElementById('moduleArea');
  const list = (VOCAB[STATE.currentLang] || []).filter(v => v.level === STATE.currentLevel);
  // 降级：无则显示全部
  const pool = list.length ? list : (VOCAB[STATE.currentLang] || []);
  if (!pool.length) {
    area.innerHTML = `<div style="text-align:center; padding:40px; color:var(--ink-3);">该语言暂无单词数据，换个语言试试 ✨</div>`;
    return;
  }
  // 随机打乱
  const deck = pool.slice().sort(() => Math.random() - 0.5);
  let idx = 0;
  const renderOne = () => {
    if (idx >= deck.length) {
      area.innerHTML = `
        <div style="text-align:center; padding:40px;">
          <h2 style="font-size:28px;">🎉 本级别单词已学完</h2>
          <p style="color:var(--ink-3);">你已完成 ${deck.length} 张闪卡，快去其他级别或语言看看吧！</p>
          <button class="btn-primary" id="againBtn">再来一轮</button>
        </div>
      `;
      document.getElementById('againBtn').addEventListener('click', paintVocab);
      return;
    }
    const v = deck[idx];
    area.innerHTML = `
      <div class="flashcard" id="fc">
        <div class="flashcard-inner">
          <div class="flashcard-face flashcard-front">
            <h3 class="fc-word">${v.word}</h3>
            <p class="fc-phonetic">${v.phonetic || ''}</p>
            <button class="btn-secondary" id="speakBtn" style="margin-top:8px;">🔊 朗读</button>
            <p style="color:var(--ink-3); font-size:12px; margin-top:14px;">点击卡片查看含义</p>
          </div>
          <div class="flashcard-face flashcard-back">
            <p class="fc-meaning">${v.meaning}</p>
            <p class="fc-example">${v.example || ''}</p>
            <p class="fc-translation">${v.translation || ''}</p>
          </div>
        </div>
      </div>
      <div class="flashcard-actions">
        <button class="again-btn" id="btnAgain">还没掌握</button>
        <button class="flip-btn" id="btnFlip">翻面</button>
        <button class="know-btn" id="btnKnow">已掌握 →</button>
      </div>
      <p class="flashcard-progress">第 ${idx+1} / ${deck.length} 张</p>
    `;
    const fc = document.getElementById('fc');
    fc.addEventListener('click', (e) => {
      // 避免点击内部按钮时也触发翻面
      if (e.target.closest('button')) return;
      fc.classList.toggle('flipped');
    });
    document.getElementById('btnFlip').addEventListener('click', (e) => {
      e.stopPropagation();
      fc.classList.toggle('flipped');
    });
    document.getElementById('btnKnow').addEventListener('click', (e) => {
      e.stopPropagation();
      STATE.stats.vocabCorrect = (STATE.stats.vocabCorrect || 0) + 1;
      addXP(5, '掌握单词：' + v.word);
      addActivity(`掌握了 ${LANGUAGES[STATE.currentLang].name} 单词「${v.word}」`);
      bumpDaily('vocab');
      idx += 1;
      renderOne();
    });
    document.getElementById('btnAgain').addEventListener('click', (e) => {
      e.stopPropagation();
      // 把该单词移到末尾再学一次
      deck.push(v);
      idx += 1;
      renderOne();
    });
    document.getElementById('speakBtn').addEventListener('click', (e) => {
      e.stopPropagation();
      speak(v.word, LANGUAGES[STATE.currentLang].ttsLang);
    });
  };
  renderOne();
}

/* ---------- 语法练习 ---------- */
function paintGrammar() {
  const area = document.getElementById('moduleArea');
  const list = (GRAMMAR[STATE.currentLang] || []).filter(g => g.level === STATE.currentLevel);
  const pool = list.length ? list : (GRAMMAR[STATE.currentLang] || []);
  if (!pool.length) {
    area.innerHTML = `<div style="text-align:center; padding:40px; color:var(--ink-3);">该语言暂无语法数据</div>`;
    return;
  }
  const deck = pool.slice().sort(() => Math.random() - 0.5);
  let idx = 0;
  const renderOne = () => {
    if (idx >= deck.length) {
      area.innerHTML = `
        <div style="text-align:center; padding:40px;">
          <h2 style="font-size:28px;">✅ 全部完成</h2>
          <p>再刷一轮巩固一下？</p>
          <button class="btn-primary" id="againBtn">再来一轮</button>
        </div>
      `;
      document.getElementById('againBtn').addEventListener('click', paintGrammar);
      return;
    }
    const q = deck[idx];
    area.innerHTML = `
      <div class="grammar-card">
        <div class="grammar-rule">📘 ${q.rule}</div>
        <p class="grammar-q">${q.question}</p>
        <div class="grammar-options" id="gramOpts">
          ${q.options.map((o, i) => `<button class="grammar-opt" data-i="${i}">${o}</button>`).join('')}
        </div>
        <div class="grammar-next" id="gramNext" style="display:none;">
          <button class="btn-primary" id="btnNext">下一题 →</button>
        </div>
        <p class="flashcard-progress" style="text-align:center;">第 ${idx+1} / ${deck.length} 题</p>
      </div>
    `;
    let answered = false;
    document.querySelectorAll('#gramOpts .grammar-opt').forEach(btn => {
      btn.addEventListener('click', () => {
        if (answered) return;
        answered = true;
        const chosen = Number(btn.dataset.i);
        document.querySelectorAll('#gramOpts .grammar-opt').forEach(b => {
          const i = Number(b.dataset.i);
          if (i === q.answer) b.classList.add('correct');
          if (i === chosen && chosen !== q.answer) b.classList.add('wrong');
        });
        const explain = document.createElement('div');
        explain.className = 'grammar-explain';
        explain.innerHTML = (chosen === q.answer ? '✅ 正确！' : '❌ 不对哦…') + ' ' + q.explain;
        document.getElementById('gramOpts').after(explain);
        if (chosen === q.answer) {
          STATE.stats.grammarCorrect += 1;
          addXP(6, '答对语法题');
          addActivity(`答对了一道 ${LANGUAGES[STATE.currentLang].name} ${q.level} 语法题`);
          bumpDaily('grammar');
        }
        document.getElementById('gramNext').style.display = 'block';
        document.getElementById('btnNext').addEventListener('click', () => {
          idx += 1; renderOne();
        });
      });
    });
  };
  renderOne();
}

/* ---------- 口语跟读 ---------- */
function paintSpeaking() {
  const area = document.getElementById('moduleArea');
  const list = (SPEAKING[STATE.currentLang] || []).filter(s => s.level === STATE.currentLevel);
  const pool = list.length ? list : (SPEAKING[STATE.currentLang] || []);
  if (!pool.length) {
    area.innerHTML = `<div style="text-align:center; padding:40px; color:var(--ink-3);">该语言暂无句子数据</div>`;
    return;
  }
  const deck = pool.slice().sort(() => Math.random() - 0.5);
  let idx = 0;
  const renderOne = () => {
    if (idx >= deck.length) {
      area.innerHTML = `
        <div style="text-align:center; padding:40px;">
          <h2 style="font-size:28px;">🎤 完成跟读练习</h2>
          <button class="btn-primary" id="againBtn">再来一轮</button>
        </div>
      `;
      document.getElementById('againBtn').addEventListener('click', paintSpeaking);
      return;
    }
    const s = deck[idx];
    const lm = LANGUAGES[STATE.currentLang];
    area.innerHTML = `
      <div class="speak-card">
        <p style="color:var(--ink-3); font-size:13px; margin:0;">${lm.flag} ${s.level} · 点击朗读按钮后，大声朗读下面的句子</p>
        <p class="speak-sentence">${s.text}</p>
        <p class="speak-trans">${s.translation}</p>
        <div class="speak-buttons">
          <button class="btn-secondary" id="playTTS">🔊 示范朗读</button>
          <button class="btn-primary" id="startMic">🎙 我来跟读</button>
          <button class="btn-secondary" id="nextSent">跳过 →</button>
        </div>
        <div id="speakResult"></div>
        <p class="flashcard-progress">第 ${idx+1} / ${deck.length} 句</p>
      </div>
    `;
    document.getElementById('playTTS').addEventListener('click', () => speak(s.text, lm.ttsLang));
    document.getElementById('nextSent').addEventListener('click', () => {
      idx += 1; renderOne();
    });
    document.getElementById('startMic').addEventListener('click', () => {
      const res = document.getElementById('speakResult');
      res.innerHTML = `<div class="speak-result">🎙 正在尝试识别（浏览器需支持语音识别）...</div>`;
      recognize((ok, text) => {
        if (ok) {
          const score = similarityScore(s.text.toLowerCase(), text.toLowerCase());
          res.innerHTML = `<div class="speak-result">你说：「${text}」 · 相似度 ${score}% ${score>=60?'✨ 不错！':''}</div>`;
          if (score >= 50) {
            STATE.stats.speakCount += 1;
            addXP(8 + Math.floor(score / 10), '完成跟读练习');
            addActivity(`完成 ${lm.name} 口语跟读「${s.text.slice(0, 20)}...」`);
            bumpDaily('speak');
          }
        } else {
          // 即使识别失败，也允许用户自己确认
          res.innerHTML = `<div class="speak-result" style="background:#fef3c7; color:#92400e; box-shadow: 0 0 0 1px #fde68a;">⚠️ 你的浏览器不支持语音识别（需要 Chrome/Edge）。不过可以手动确认已朗读。<br><button class="btn-secondary" id="manualOk" style="margin-top:10px;">我已跟读，计数</button></div>`;
          document.getElementById('manualOk').addEventListener('click', () => {
            STATE.stats.speakCount += 1;
            addXP(6, '完成跟读练习');
            bumpDaily('speak');
            res.innerHTML = `<div class="speak-result">已记录本次练习 ✓</div>`;
          });
        }
      });
    });
  };
  renderOne();
}

/* ---------- 听力练习 ---------- */
function paintListening() {
  const area = document.getElementById('moduleArea');
  const list = (LISTENING[STATE.currentLang] || []).filter(s => s.level === STATE.currentLevel);
  const pool = list.length ? list : (LISTENING[STATE.currentLang] || []);
  if (!pool.length) {
    area.innerHTML = `<div style="text-align:center; padding:40px; color:var(--ink-3);">该语言暂无听力数据</div>`;
    return;
  }
  const deck = pool.slice().sort(() => Math.random() - 0.5);
  let idx = 0;
  const renderOne = () => {
    if (idx >= deck.length) {
      area.innerHTML = `<div style="text-align:center; padding:40px;"><h2 style="font-size:28px;">🎧 听力练习完成</h2><button class="btn-primary" id="againBtn">再来一轮</button></div>`;
      document.getElementById('againBtn').addEventListener('click', paintListening);
      return;
    }
    const d = deck[idx];
    const lm = LANGUAGES[STATE.currentLang];
    area.innerHTML = `
      <div class="listen-card">
        <p class="listen-title">${lm.flag} ${d.title} · ${d.level}</p>
        <button class="listen-play" id="playBtn">▶ 播放对话</button>
        <div class="listen-dialogue" id="dialogue" style="display:none;">
          ${d.dialogue.map(line => `<div class="dialogue-line"><span class="dialogue-who">${line.who}</span><span>${line.text}</span></div>`).join('')}
        </div>
        <p style="color:var(--ink-3); font-size:13px;">先听一遍，再尝试回答下面的问题。点击"显示原文"可查看文字。</p>
        <button class="btn-secondary" id="toggleText" style="margin-bottom:14px;">显示/隐藏原文</button>
        ${d.blanks.map((b,bi) => `
          <div class="listen-q-block">
            <p class="listen-q">Q${bi+1}. ${b.q}</p>
            <div class="listen-options" data-bi="${bi}">
              ${b.options.map((opt,oi) => `<button class="listen-opt" data-oi="${oi}">${opt}</button>`).join('')}
            </div>
          </div>
        `).join('')}
        <div class="grammar-next" id="nextArea" style="display:none;">
          <button class="btn-primary" id="nextQ">下一段对话 →</button>
        </div>
        <p class="flashcard-progress" style="text-align:center;">第 ${idx+1} / ${deck.length} 段</p>
      </div>
    `;
    document.getElementById('playBtn').addEventListener('click', () => {
      const full = d.dialogue.map(x => x.text).join('. ');
      speak(full, lm.ttsLang);
    });
    document.getElementById('toggleText').addEventListener('click', () => {
      const t = document.getElementById('dialogue');
      t.style.display = t.style.display === 'none' ? 'block' : 'none';
    });
    let answered = 0; let correctCount = 0;
    document.querySelectorAll('.listen-q-block').forEach(block => {
      const bi = Number(block.querySelector('.listen-options').dataset.bi);
      let localAnswered = false;
      block.querySelectorAll('.listen-opt').forEach(opt => {
        opt.addEventListener('click', () => {
          if (localAnswered) return;
          localAnswered = true;
          answered += 1;
          const oi = Number(opt.dataset.oi);
          block.querySelectorAll('.listen-opt').forEach(o => {
            const i = Number(o.dataset.oi);
            if (i === d.blanks[bi].answer) o.classList.add('correct');
            if (i === oi && oi !== d.blanks[bi].answer) o.classList.add('wrong');
          });
          if (oi === d.blanks[bi].answer) correctCount += 1;
          if (answered >= d.blanks.length) {
            if (correctCount >= Math.ceil(d.blanks.length / 2)) {
              STATE.stats.listenCount += 1;
              addXP(10 + correctCount * 3, '完成听力练习');
              addActivity(`完成 ${lm.name} 听力练习「${d.title}」`);
              bumpDaily('listen');
            }
            document.getElementById('nextArea').style.display = 'block';
            document.getElementById('nextQ').addEventListener('click', () => {
              idx += 1; renderOne();
            });
          }
        });
      });
    });
  };
  renderOne();
}

/* ===== TTS + 语音识别 ===== */
function speak(text, lang='en-US') {
  if (!('speechSynthesis' in window)) {
    toast('浏览器不支持语音合成');
    return;
  }
  try {
    const utter = new SpeechSynthesisUtterance(text);
    utter.lang = lang;
    utter.rate = 0.95;
    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(utter);
  } catch {
    toast('语音朗读失败');
  }
}

function recognize(cb) {
  const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
  if (!SR) return cb(false);
  try {
    const rec = new SR();
    rec.lang = LANGUAGES[STATE.currentLang].ttsLang;
    rec.interimResults = false;
    rec.onresult = (e) => {
      const text = Array.from(e.results).map(r => r[0].transcript).join(' ');
      cb(true, text);
    };
    rec.onerror = () => cb(false);
    rec.onend = () => {};
    rec.start();
  } catch { cb(false); }
}

/* 非常粗糙的相似度：计算最长公共子序列长度比例 + 相同单词比例，得到 0-100 分 */
function similarityScore(a, b) {
  if (!a || !b) return 0;
  const wa = a.replace(/[.,!?;:()"]/g,'').split(/\s+/).filter(Boolean);
  const wb = b.replace(/[.,!?;:()"]/g,'').split(/\s+/).filter(Boolean);
  const common = wa.filter(w => wb.includes(w)).length;
  const wordScore = Math.round(common / Math.max(wa.length, wb.length) * 100);
  // LCS
  const m = a.length, n = b.length;
  const dp = Array.from({length: m+1}, () => new Int16Array(n+1));
  for (let i=1; i<=m; i++) for (let j=1; j<=n; j++) {
    if (a[i-1] === b[j-1]) dp[i][j] = dp[i-1][j-1] + 1;
    else dp[i][j] = Math.max(dp[i-1][j], dp[i][j-1]);
  }
  const lcsScore = Math.round(dp[m][n] / Math.max(m, n) * 100);
  return Math.round((wordScore * 0.6 + lcsScore * 0.4));
}

/* ===== 社区渲染 ===== */
function renderCommunity() {
  // 发帖
  const f = document.getElementById('postForm');
  if (!f.dataset.inited) {
    f.dataset.inited = '1';
    f.addEventListener('submit', (e) => {
      e.preventDefault();
      const title = document.getElementById('postTitle').value.trim();
      const content = document.getElementById('postContent').value.trim();
      const lang = document.getElementById('postLang').value;
      if (!title || !content) return;
      STATE.posts.unshift({
        id: 'p' + Date.now(),
        author: STATE.user.nickname,
        lang,
        title, content,
        ts: Date.now(),
        likes: []
      });
      STATE.stats.posts = (STATE.stats.posts || 0) + 1;
      checkBadges();
      saveStore(STATE);
      document.getElementById('postTitle').value = '';
      document.getElementById('postContent').value = '';
      toast('发布成功 🎉');
      paintFeed();
    });
    const filter = document.querySelector('.feed-filter');
    filter.addEventListener('click', (e) => {
      if (e.target.matches('.chip-btn')) {
        filter.querySelectorAll('.chip-btn').forEach(x => x.classList.remove('active'));
        e.target.classList.add('active');
        paintFeed();
      }
    });
  }
  paintFeed();
  paintLeaderboard();
}
function paintFeed() {
  const feed = document.getElementById('feed');
  feed.innerHTML = '';
  const filter = document.querySelector('.feed-filter .chip-btn.active')?.textContent || '最新';
  let list = STATE.posts.slice();
  if (filter === '热门') list.sort((a,b) => (b.likes?.length||0) - (a.likes?.length||0));
  else if (filter === '我发布的') list = list.filter(p => p.author === STATE.user.nickname);
  else list.sort((a,b) => b.ts - a.ts);
  if (list.length === 0) {
    feed.innerHTML = `<div style="padding:30px; text-align:center; color:var(--ink-3);">还没有帖子，来发布第一篇吧 ✍️</div>`;
    return;
  }
  list.forEach(p => {
    const langMeta = LANGUAGES[p.lang];
    const flag = langMeta ? langMeta.flag : '🌐';
    const el = document.createElement('div');
    el.className = 'post';
    const liked = (p.likes || []).includes(STATE.user.username);
    el.innerHTML = `
      <div class="post-head">
        <div class="post-avatar">${p.author.slice(0,1).toUpperCase()}</div>
        <div class="post-meta">
          <span class="post-author">${p.author}</span>
          <span class="post-lang">${flag} · ${timeAgo(p.ts)}</span>
        </div>
      </div>
      <h4 class="post-title">${escapeHTML(p.title)}</h4>
      <p class="post-content">${escapeHTML(p.content)}</p>
      <div class="post-foot">
        <span class="post-like ${liked?'liked':''}" data-pid="${p.id}">♥ ${p.likes?.length || 0}</span>
        <span>💬 评论</span>
      </div>
    `;
    el.querySelector('.post-like').addEventListener('click', () => {
      if (!p.likes) p.likes = [];
      const uname = STATE.user.username;
      const idx = p.likes.indexOf(uname);
      if (idx >= 0) p.likes.splice(idx, 1); else p.likes.push(uname);
      saveStore(STATE);
      paintFeed();
    });
    feed.appendChild(el);
  });
}
function paintLeaderboard() {
  const host = document.getElementById('leaderboard');
  if (!host) return;
  // 计算榜单：从 SEED 中取再插入自己
  const me = { name: STATE.user.nickname, xp: STATE.xp, lang: (STATE.user.preferredLangs?.[0] || 'en') };
  const list = SEED_LEADERBOARD.filter(l => l.name !== me.name).concat([me]).sort((a,b) => b.xp - a.xp).slice(0, 6);
  host.innerHTML = list.map((l, i) => `
    <li>
      <span class="rank">#${i+1}</span>
      <span class="lname">${LANGUAGES[l.lang]?.flag || '🌐'} ${escapeHTML(l.name)}</span>
      <span class="lxp">${l.xp} XP</span>
    </li>
  `).join('');
}

/* ===== 成就页 ===== */
function renderAchievements() {
  const stats = document.getElementById('achStats');
  if (stats) {
    const items = [
      { n: STATE.xp, l: '累计 XP' },
      { n: getLevel(STATE.xp), l: '当前等级' },
      { n: STATE.stats.streak || 0, l: '连续登录天数' },
      { n: `${STATE.badges.length}/${BADGES.length}`, l: '已解锁徽章' }
    ];
    stats.innerHTML = items.map(x => `<div class="ach-stat"><div class="n">${x.n}</div><div class="l">${x.l}</div></div>`).join('');
  }
  const grid = document.getElementById('badgeGrid');
  if (grid) {
    grid.innerHTML = '';
    BADGES.forEach(b => {
      const unlocked = STATE.badges.includes(b.id);
      const el = document.createElement('div');
      el.className = 'badge-card ' + (unlocked ? 'unlocked' : 'locked');
      el.innerHTML = `
        <div class="badge-status">${unlocked ? '已解锁' : '未解锁'}</div>
        <div class="badge-icon">${b.icon}</div>
        <div class="badge-title">${b.title}</div>
        <div class="badge-desc">${b.desc}</div>
      `;
      grid.appendChild(el);
    });
  }
}

/* ===== 个人中心 ===== */
function renderProfile() {
  document.getElementById('profileAvatar').textContent = STATE.user.nickname.slice(0,1).toUpperCase();
  document.getElementById('profileName').textContent = STATE.user.nickname;
  const levelMap = { beginner: '零基础入门', elementary: '初级', intermediate: '中级', advanced: '高级' };
  document.getElementById('profileLevel').textContent = levelMap[STATE.user.level] || STATE.user.level;

  const meta = document.getElementById('profileMeta');
  meta.innerHTML = '';
  (STATE.user.preferredLangs || []).forEach(l => {
    const metaItem = document.createElement('span');
    metaItem.textContent = `${LANGUAGES[l]?.flag || '🌐'} ${LANGUAGES[l]?.name || l}`;
    meta.appendChild(metaItem);
  });
  const xpItem = document.createElement('span'); xpItem.textContent = `${STATE.xp} XP`; meta.appendChild(xpItem);
  const daysItem = document.createElement('span'); daysItem.textContent = `Lv.${getLevel(STATE.xp)}`; meta.appendChild(daysItem);

  // 进度
  const grid = document.getElementById('progressGrid');
  grid.innerHTML = '';
  const langs = Object.keys(STATE.progress || {});
  if (langs.length === 0) {
    grid.innerHTML = `<div style="padding:20px; color:var(--ink-3);">尚未有学习记录，去"学习中心"开始第一次练习吧！</div>`;
  } else {
    langs.forEach(l => {
      const p = STATE.progress[l];
      const total = COURSES.filter(c => c.lang === l).reduce((s, c) => s + c.lessons.length, 0);
      const done = p.lessonsDone?.length || 0;
      const pct = Math.min(100, Math.round(done / Math.max(1, total) * 100));
      const el = document.createElement('div');
      el.className = 'progress-item';
      el.innerHTML = `
        <div class="ph">${LANGUAGES[l].flag} ${LANGUAGES[l].name}<span>${pct}%</span></div>
        <div class="progress-bar"><span style="width:${pct}%"></span></div>
        <div class="pp" style="margin-top:8px;">${done} / ${total} 节课已学习</div>
      `;
      grid.appendChild(el);
    });
  }

  // 活动
  const alist = document.getElementById('activityList');
  alist.innerHTML = '';
  if (!STATE.activity.length) {
    alist.innerHTML = `<div style="padding:20px; color:var(--ink-3); text-align:center;">暂无活动记录</div>`;
  } else {
    STATE.activity.slice(0, 15).forEach(a => {
      const el = document.createElement('div');
      el.className = 'activity-item';
      el.innerHTML = `<span>${escapeHTML(a.text)}</span><span class="a-time">${timeAgo(a.ts)}</span>`;
      alist.appendChild(el);
    });
  }

  // 设置
  document.getElementById('nicknameInput').value = STATE.user.nickname;
  document.getElementById('dailyGoal').value = STATE.user.dailyGoal;
  document.getElementById('saveNickname').onclick = () => {
    const v = document.getElementById('nicknameInput').value.trim();
    if (v) { STATE.user.nickname = v; saveStore(STATE); updateUserChip(); toast('昵称已更新'); renderProfile(); }
  };
  document.getElementById('saveGoal').onclick = () => {
    const v = Number(document.getElementById('dailyGoal').value);
    if (v > 0) { STATE.user.dailyGoal = v; saveStore(STATE); toast('每日目标已更新'); }
  };
  // 语言偏好
  const pref = document.getElementById('prefLangChoice');
  pref.innerHTML = '';
  Object.values(LANGUAGES).forEach(l => {
    const c = document.createElement('label');
    c.className = 'lang-chip';
    c.innerHTML = `<input type="checkbox" value="${l.code}" ${(STATE.user.preferredLangs||[]).includes(l.code)?'checked':''}/>${l.flag} ${l.name}`;
    c.querySelector('input').addEventListener('change', () => {
      STATE.user.preferredLangs = Array.from(pref.querySelectorAll('input:checked')).map(x => x.value);
      if (STATE.user.preferredLangs.length === 0) STATE.user.preferredLangs = ['en'];
      saveStore(STATE);
    });
    pref.appendChild(c);
  });
}

/* ===== 工具：HTML 转义 ===== */
function escapeHTML(s) {
  return String(s || '').replace(/[&<>"']/g, c => ({
    '&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'
  }[c]));
}

/* ===== 启动 ===== */
document.addEventListener('DOMContentLoaded', () => {
  setupAuth();
  setupNav();
  // 如果 URL 带 ?payment_success=lifetime，说明用户刚付完款 → 自动解锁会员
  autoUnlockFromPayment();
  if (STATE.user) enterApp();
});
// 暴露关键函数到 window（便于调试）
window.LV = { go, enterApp, toast, STATE };
