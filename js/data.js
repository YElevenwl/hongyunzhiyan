const RouteData = {
    themeNames: {
        'hongse_jiaoyu': '红色革命教育', 'hongse_juBenYou': '红色剧本游', 'hongse_jiyi': '红色记忆寻访',
        'hongse_junshi': '红色军事体验', 'hongse_minSu': '红色主题民宿', 'hongse_nongGeng': '红色农耕文化',
        'hongse_shengYin': '红色声音档案', 'hongse_yingShi': '红色影视研学',
        'hongse_shiCi': '红色诗词研学', 'hongse_diTu': '红色地图探秘', 'hongse_jianZhu': '红色建筑寻踪',
        'hongse_jiaFeng': '红色家风传承', 'hongse_shaoNian': '红色少年先锋', 'hongse_changZheng': '红色长征体验',
        'hongse_yingXiong': '红色英雄故事', 'hongse_qiZhi': '红色旗帜传承', 'hongse_lieShi': '红色烈士缅怀',
        'hongse_tongZhan': '红色统战记忆', 'hongse_nuZi': '红色娘子军', 'hongse_qiongYa': '琼崖纵队精神',
        'limiao': '黎苗文化', 'feiyi_yediao': '非遗椰雕', 'feiyi_lijin': '非遗黎锦',
        'feiyi_jianZhi': '非遗剪纸', 'feiyi_taoYi': '非遗陶艺', 'feiyi_muDiao': '非遗木雕',
        'feiyi_zhiYi': '非遗织锦', 'feiyi_yaoCao': '非遗药香',
        'haiyang': '海洋科普', 'shengtai': '热带雨林生态', 'nongye': '热带农业', 'dizhi': '火山地质',
        'shengwu': '红树林生态', 'shanHu': '珊瑚礁保护', 'haiGui': '海龟保护', 'reDaiYu': '热带鱼类',
        'xiangcun': '乡村振兴', 'nongLv': '农旅融合', 'minSu': '民宿体验', 'teChan': '特色农产品',
        'dianShang': '乡村电商', 'sheQu': '社区营造',
        'ziyougang': '自贸港建设', 'keJi': '科技研学', 'hangTian': '航天科技', 'shuZi': '数字经济', 'lvSe': '绿色能源',
        'hongse': '红色教育', 'feiyi': '非遗技艺'
    },

    gradeNames: {
        'primary_low': '小学1-3年级', 'primary_high': '小学4-6年级',
        'primary': '小学', 'junior': '初中', 'senior': '高中',
        'university': '大学', 'postgraduate': '研究生'
    },

    locationNames: {
        'haikou': '海口市', 'sanya': '三亚市', 'danzhou': '儋州市', 'sansha': '三沙市',
        'qionghai': '琼海市', 'wanning': '万宁市', 'wenchang': '文昌市', 'wuzhishan': '五指山市', 'dongfang': '东方市',
        'lingao': '临高县', 'chengmai': '澄迈县', 'dingan': '定安县', 'tunchang': '屯昌县',
        'changjiang': '昌江黎族自治县', 'baisha': '白沙黎族自治县', 'ledong': '乐东黎族自治县',
        'lingshui': '陵水黎族自治县', 'baoting': '保亭黎族苗族自治县', 'qiongzhong': '琼中黎族苗族自治县',
        'haikou_meilan': '美兰区', 'haikou_qiongshan': '琼山区',
        'haikou_xiuying': '秀英区', 'haikou_longhua': '龙华区', 'haikou_jiangdong': '江东新区',
        'sanya_tianya': '天涯区', 'sanya_hedong': '河东区',
        'sanya_yazhou': '崖州区', 'sanya_haiTang': '海棠区',
        'danzhou_nada': '那大镇', 'danzhou_yangpu': '洋浦经济开发区',
        'guilinyang': '桂林洋开发区', 'boao': '博鳌镇', 'xinglong': '兴隆华侨农场',
        'haikou_jiangdong_new': '海口江东新区'
    },

    budgetNames: {
        'ultra_economy': '30元/人以下', 'economy': '30-50元/人', 'low': '50-80元/人',
        'low_medium': '80-120元/人', 'medium': '120-200元/人',
        'medium_high': '200-300元/人', 'high': '300-500元/人', 'premium': '500-800元/人',
        'luxury': '800-1200元/人', 'top': '1200元/人以上'
    },

    dayNames: { '1': '一日游', '2': '两日1夜', '3': '三日2夜', '4': '四日3夜', '5': '五日4夜', '6': '六日5夜', '7': '七日6夜' },

    themeCategory(t) {
        if (t.startsWith('hongse')) return 'hongse';
        if (t.startsWith('feiyi') || t === 'limiao' || t === 'limiao_wuDao' || t === 'lijin') return 'feiyi';
        if (['haiyang', 'shengtai', 'nongye', 'dizhi', 'shengwu', 'shanHu', 'haiGui', 'reDaiYu', 'reDaiZhiWu', 'huoShan', 'hongShuLin'].includes(t)) return 'ziran';
        if (['xiangcun', 'nongLv', 'minSu', 'teChan', 'dianShang', 'sheQu', 'nongGeng'].includes(t)) return 'xiangcun';
        if (['ziyougang', 'keJi', 'hangTian', 'shuZi', 'lvSe'].includes(t)) return 'xiandai';
        return 'hongse';
    },

    THEME_SITES: {
        hongse: [
            { name: '琼崖工农红军云龙改编旧址', area: 'haikou', tags: ['jiaoyu', 'qiongYa'] },
            { name: '海南革命烈士纪念碑', area: 'haikou', tags: ['jiaoyu', 'lieShi'] },
            { name: '母瑞山革命根据地纪念园', area: 'dingan', tags: ['jiaoyu', 'qiongYa', 'changZheng'] },
            { name: '临高角解放公园', area: 'lingao', tags: ['jiaoyu', 'junshi', 'lieShi'] },
            { name: '红色娘子军纪念园', area: 'qionghai', tags: ['nuZi', 'jiaoyu', 'yingXiong'] },
            { name: '高山村红色剧本游基地', area: 'haikou', tags: ['juBenYou', 'diTu'] },
            { name: '迈德村红色文化体验区', area: 'haikou', tags: ['jiyi', 'jiaFeng'] },
            { name: '桂林洋开发区红色文旅区', area: 'haikou', tags: ['nongGeng', 'minSu'] },
            { name: '冯白驹故居', area: 'haikou', tags: ['yingXiong', 'qiongYa', 'jiaFeng'] },
            { name: '六连岭革命遗址', area: 'wanning', tags: ['jiaoyu', 'qiongYa', 'junshi'] },
            { name: '白沙起义纪念园', area: 'baisha', tags: ['yingXiong', 'qiongYa', 'qiZhi'] },
            { name: '琼崖纵队司令部旧址', area: 'qiongzhong', tags: ['qiongYa', 'junshi', 'diTu'] },
            { name: '文昌航天发射场', area: 'wenchang', tags: ['qiZhi', 'keJi'] },
            { name: '三亚红色娘子军演艺公园', area: 'sanya', tags: ['nuZi', 'yingShi', 'geYao'] },
            { name: '解放海南岛战役烈士陵园', area: 'haikou', tags: ['lieShi', 'jiaoyu'] },
            { name: '琼海市阳江镇红色村', area: 'qionghai', tags: ['nongGeng', 'jiaFeng', 'xiangcun'] },
            { name: '定安县岭口镇革命老区', area: 'dingan', tags: ['jiyi', 'nongGeng'] },
            { name: '万宁市和乐镇革命旧址', area: 'wanning', tags: ['jiaoyu', 'yingXiong'] },
            { name: '陵水县苏维埃政府旧址', area: 'lingshui', tags: ['qiongYa', 'jianZhu', 'diTu'] },
            { name: '儋州市那大镇革命纪念馆', area: 'danzhou', tags: ['jiaoyu', 'jiyi'] },
            { name: '澄迈县美亭革命烈士陵园', area: 'chengmai', tags: ['lieShi', 'jiaoyu'] },
            { name: '临高角渡海登陆点', area: 'lingao', tags: ['junshi', 'changZheng'] },
            { name: '五指山革命根据地纪念园', area: 'wuzhishan', tags: ['qiongYa', 'junshi', 'diTu'] },
            { name: '乐东县志仲镇红色教育基地', area: 'ledong', tags: ['jiaoyu', 'shaoNian'] },
            { name: '昌江县十月田镇红色遗址', area: 'changjiang', tags: ['jiyi', 'nongGeng', 'junshi'] },
            { name: '保亭县新政镇红色文化园', area: 'baoting', tags: ['jiaoyu', 'tongZhan'] },
            { name: '屯昌县西昌镇红色旧址', area: 'tunchang', tags: ['jiaoyu', 'jiyi'] },
            { name: '琼中县红毛镇革命遗址', area: 'qiongzhong', tags: ['qiongYa', 'yingXiong'] },
            { name: '海口市人民公园烈士纪念碑', area: 'haikou', tags: ['lieShi', 'shiCi'] },
            { name: '海南解放公园', area: 'haikou', tags: ['qiZhi', 'jiaoyu'] },
        ],
        feiyi: [
            { name: '槟榔谷黎苗文化旅游区', area: 'baoting', tags: ['limiao', 'wuDao'] },
            { name: '海南民族博物馆', area: 'wuzhishan', tags: ['limiao', 'lijin'] },
            { name: '五指山黎苗文化村', area: 'wuzhishan', tags: ['limiao', 'bianZhi'] },
            { name: '演丰镇椰雕工坊', area: 'haikou', tags: ['yediao', 'diaoKe'] },
            { name: '白沙黎族陶艺村', area: 'baisha', tags: ['taoYi'] },
            { name: '保亭黎锦传习所', area: 'baoting', tags: ['lijin', 'zhiYi'] },
            { name: '昌江黎族剪纸艺术馆', area: 'changjiang', tags: ['jianZhi'] },
            { name: '儋州东坡书院', area: 'danzhou', tags: ['shuFa'] },
            { name: '东方市黎锦文化村', area: 'dongfang', tags: ['lijin', 'zhiYi'] },
            { name: '陵水椰雕传承基地', area: 'lingshui', tags: ['yediao'] },
            { name: '乐东黎族木雕工坊', area: 'ledong', tags: ['muDiao', 'diaoKe'] },
            { name: '琼中黎苗药香体验馆', area: 'qiongzhong', tags: ['yaoCao'] },
            { name: '定安县琼剧文化体验馆', area: 'dingan', tags: ['xiQu'] },
            { name: '万宁兴隆咖啡非遗体验', area: 'wanning', tags: ['teChan'] },
            { name: '文昌椰子文化产业园', area: 'wenchang', tags: ['yediao', 'teChan'] },
        ],
        ziran: [
            { name: '海南热带海洋生物博物馆', area: 'sanya', tags: ['haiyang', 'reDaiYu'] },
            { name: '蜈支洲岛', area: 'sanya', tags: ['haiyang', 'shanHu'] },
            { name: '分界洲岛', area: 'lingshui', tags: ['haiyang', 'shanHu'] },
            { name: '三亚亚特兰蒂斯水族馆', area: 'sanya', tags: ['haiyang', 'reDaiYu'] },
            { name: '南海博物馆', area: 'qionghai', tags: ['haiyang'] },
            { name: '尖峰岭热带雨林', area: 'ledong', tags: ['shengtai', 'reDaiZhiWu'] },
            { name: '霸王岭国家森林公园', area: 'changjiang', tags: ['shengtai'] },
            { name: '海口火山群世界地质公园', area: 'haikou', tags: ['dizhi', 'huoShan'] },
            { name: '东寨港红树林保护区', area: 'haikou', tags: ['shengwu', 'hongShuLin'] },
            { name: '兴隆热带植物园', area: 'wanning', tags: ['nongye', 'reDaiZhiWu'] },
            { name: '三亚水稻国家公园', area: 'sanya', tags: ['nongye'] },
            { name: '中国热带农业科学院', area: 'haikou', tags: ['nongye'] },
            { name: '陵水海龟救助站', area: 'lingshui', tags: ['haiGui'] },
            { name: '昌江棋子湾珊瑚礁保护区', area: 'changjiang', tags: ['shanHu'] },
            { name: '万宁大洲岛海洋生态保护区', area: 'wanning', tags: ['haiyang', 'shanHu'] },
            { name: '琼海潭门海洋渔业小镇', area: 'qionghai', tags: ['haiyang', 'reDaiYu'] },
            { name: '五指山热带雨林国家公园', area: 'wuzhishan', tags: ['shengtai', 'reDaiZhiWu'] },
            { name: '澄迈富力红树湾湿地', area: 'chengmai', tags: ['shengwu', 'hongShuLin'] },
            { name: '儋州磷枪石岛珊瑚礁保护区', area: 'danzhou', tags: ['shanHu'] },
            { name: '临高角海洋生态公园', area: 'lingao', tags: ['haiyang'] },
        ],
        xiangcun: [
            { name: '博鳌镇沙美村', area: 'qionghai', tags: ['xiangcun', 'sheQu'] },
            { name: '文昌市龙楼镇好圣村', area: 'wenchang', tags: ['xiangcun', 'dianShang'] },
            { name: '琼海市博鳌镇北仍村', area: 'qionghai', tags: ['xiangcun', 'minSu'] },
            { name: '儋州市木棠镇铁匠村', area: 'danzhou', tags: ['xiangcun', 'teChan'] },
            { name: '澄迈县永发镇', area: 'chengmai', tags: ['nongLv', 'teChan'] },
            { name: '定安县龙湖镇', area: 'dingan', tags: ['xiangcun', 'nongLv'] },
            { name: '陵水光坡镇', area: 'lingshui', tags: ['nongLv', 'teChan'] },
            { name: '万宁兴隆咖啡谷', area: 'wanning', tags: ['nongLv', 'teChan'] },
            { name: '海口石山镇火山口民宿群', area: 'haikou', tags: ['minSu', 'nongLv'] },
            { name: '三亚中廖村', area: 'sanya', tags: ['xiangcun', 'sheQu'] },
            { name: '保亭布隆赛乡村旅游区', area: 'baoting', tags: ['xiangcun', 'minSu'] },
            { name: '白沙黎族自治县茶园小镇', area: 'baisha', tags: ['nongLv', 'teChan'] },
            { name: '乐东尖峰镇热带果园', area: 'ledong', tags: ['nongLv', 'teChan'] },
            { name: '屯昌梦幻香山芳香文化园', area: 'tunchang', tags: ['nongLv', 'teChan'] },
            { name: '琼中湾岭镇鸭坡村', area: 'qiongzhong', tags: ['xiangcun', 'sheQu'] },
        ],
        xiandai: [
            { name: '海南自由贸易港展示馆', area: 'haikou', tags: ['ziyougang', 'shuZi'] },
            { name: '海口江东新区展示中心', area: 'haikou', tags: ['ziyougang', 'shuZi'] },
            { name: '三亚崖州湾科技城', area: 'sanya', tags: ['keJi', 'shuZi'] },
            { name: '博鳌亚洲论坛永久会址', area: 'qionghai', tags: ['ziyougang'] },
            { name: '洋浦经济开发区', area: 'danzhou', tags: ['ziyougang', 'lvSe'] },
            { name: '文昌国际航天城', area: 'wenchang', tags: ['hangTian', 'keJi'] },
            { name: '海南生态软件园', area: 'chengmai', tags: ['keJi', 'shuZi'] },
            { name: '海口复兴城互联网产业园', area: 'haikou', tags: ['keJi', 'shuZi'] },
            { name: '三亚互联网信息产业园', area: 'sanya', tags: ['shuZi', 'keJi'] },
            { name: '东方海上风电产业基地', area: 'dongfang', tags: ['lvSe'] },
            { name: '昌江核电科普基地', area: 'changjiang', tags: ['lvSe', 'keJi'] },
        ],
    },

    THEME_ACTIVITIES: {
        hongse_jiaoyu: ['革命历史讲解', '红色故事分享', '烈士缅怀仪式', '红色歌曲学唱', '重走红军路', '革命遗址参观', '红色知识竞赛', '革命精神研讨', '红色主题班会', '革命历史纪录片观看'],
        hongse_juBenYou: ['红色剧本杀体验', '角色扮演', '历史情景重现', '团队推理协作', '红色文化知识问答', '沉浸式剧情互动', '红色密室逃脱', '历史人物模拟'],
        hongse_jiyi: ['老兵口述历史聆听', '红色文物鉴赏', '革命书信阅读', '历史影像观看', '红色记忆采集', '口述史整理', '红色档案查阅', '革命遗物鉴赏'],
        hongse_junshi: ['军事队列训练', '野外拉练', '军事知识讲座', '战地救护演练', '军事障碍赛', '国防教育', '模拟战斗体验', '军事地图识读'],
        hongse_minSu: ['红色主题民宿入住体验', '革命年代生活体验', '红色主题房间设计', '老宅改造参观', '红色故事夜话', '革命时期饮食体验', '红色主题空间布置'],
        hongse_nongGeng: ['红色农耕体验', '革命时期农具使用', '集体劳动体验', '红军粮制作', '农耕文化讲座', '革命时期粮食故事', '红色农场参观'],
        hongse_shengYin: ['红色声音档案聆听', '革命歌曲学唱', '口述历史录音', '红色广播剧欣赏', '声音博物馆参观', '红色电报体验', '革命号角聆听'],
        hongse_yingShi: ['红色电影放映', '革命纪录片观看', '红色影视配音', '短视频创作', '影视基地参观', '红色微电影拍摄', '革命题材影评'],
        hongse_shiCi: ['红色诗词朗诵', '革命诗歌创作', '毛泽东诗词赏析', '红色书法书写', '诗词大会竞赛', '革命家书诵读', '红色楹联鉴赏'],
        hongse_diTu: ['红色地图绘制', '革命路线标注', '历史地图对比', '红色地标打卡', 'GIS红色文化展示', '革命战场沙盘推演', '红色地理知识竞赛'],
        hongse_jianZhu: ['红色建筑参观', '革命旧址考察', '红色建筑写生', '历史建筑保护讲座', '革命建筑模型制作', '红色建筑摄影', '古建筑修复体验'],
        hongse_jiaFeng: ['红色家风故事分享', '革命家书阅读', '家风家训讲座', '红色家庭档案整理', '革命先辈家风学习', '家训书法书写', '红色家风展览参观'],
        hongse_shaoNian: ['少年先锋队仪式', '红色少年故事会', '革命小英雄学习', '少先队队歌学唱', '红色少年团建', '革命精神传承宣誓', '红色少年训练营'],
        hongse_changZheng: ['长征路线模拟', '长征故事讲述', '长征精神研讨', '长征食物体验', '长征歌曲学唱', '长征地图绘制', '长征精神主题演讲'],
        hongse_yingXiong: ['英雄事迹学习', '英雄故事演讲', '英雄人物研究', '英雄纪念碑参观', '英雄精神传承讨论', '英雄主题绘画', '英雄人物扮演'],
        hongse_qiZhi: ['升旗仪式体验', '旗帜故事学习', '旗帜制作体验', '旗帜文化讲座', '红色旗帜宣誓', '旗帜护卫训练', '旗帜历史展览'],
        hongse_lieShi: ['烈士陵园祭扫', '烈士事迹学习', '烈士家书阅读', '缅怀仪式参与', '烈士精神研讨', '献花致敬仪式', '烈士纪念墙参观'],
        hongse_tongZhan: ['统战历史学习', '统战故事分享', '民族团结体验', '统战精神研讨', '多党合作讲座', '统战文化展览参观', '民族团结联谊'],
        hongse_nuZi: ['红色娘子军故事学习', '娘子军歌曲学唱', '娘子军精神研讨', '女性革命者事迹', '娘子军主题表演', '红色女性力量讲座', '娘子军路线参观'],
        hongse_qiongYa: ['琼崖纵队历史学习', '琼崖精神研讨', '琼崖革命故事', '琼崖纵队路线参观', '琼崖精神主题演讲', '琼崖革命文物鉴赏', '琼崖精神传承宣誓'],
        limiao: ['黎锦织造体验', '苗族歌舞表演', '竹竿舞学习', '黎族美食制作', '苗族银饰欣赏', '黎族船型屋参观', '三月三节庆体验', '黎族纹面文化学习'],
        feiyi_yediao: ['椰雕技艺学习', '椰壳工艺品制作', '非遗传承人交流', '椰雕作品鉴赏', '椰子文化体验', '椰雕创意设计'],
        feiyi_lijin: ['黎锦编织体验', '纺染织绣学习', '黎锦纹样设计', '黎锦文化讲座', '织锦技艺传承', '黎锦服饰鉴赏'],
        feiyi_jianZhi: ['剪纸技法学习', '海南特色剪纸', '剪纸作品创作', '剪纸文化讲座', '红色主题剪纸', '剪纸装裱体验'],
        feiyi_taoYi: ['陶艺制作体验', '黎族陶器鉴赏', '陶艺创作', '窑烧参观', '陶艺彩绘', '古陶修复体验'],
        feiyi_muDiao: ['木雕技法学习', '海南木雕鉴赏', '木雕创作体验', '木雕文化讲座', '木雕工具认识', '木雕作品打磨'],
        feiyi_zhiYi: ['织锦工艺学习', '传统织机操作', '纹样设计创作', '织锦文化讲座', '织锦作品鉴赏', '植物染色体验'],
        feiyi_yaoCao: ['黎苗草药认知', '药香制作体验', '传统药方学习', '药草种植参观', '药香文化讲座', '养生药膳体验'],
        haiyang: ['海洋生物观察', '海洋生态讲座', '海洋环保实践', '珊瑚礁保护体验', '海洋生物摄影', '深海探索', '海洋标本制作', '潮间带生态调查'],
        shengtai: ['热带雨林探秘', '植物标本采集', '生态观察记录', '雨林生存体验', '生物多样性调查', '雨林夜观', '生态摄影'],
        nongye: ['热带水果采摘', '农业科技参观', '农耕体验', '农产品加工', '农业知识讲座', '农业无人机演示', '有机种植体验'],
        dizhi: ['火山地质考察', '岩石标本采集', '地质知识讲座', '火山口徒步', '地热体验', '地质剖面观察', '矿物鉴赏'],
        shengwu: ['红树林生态观察', '鸟类观察记录', '湿地保护实践', '红树林种植', '生态摄影', '底栖生物调查', '水质检测体验'],
        shanHu: ['珊瑚礁生态观察', '珊瑚种植体验', '海洋酸化实验', '珊瑚种类识别', '珊瑚礁保护讲座', '水下摄影体验'],
        haiGui: ['海龟救助站参观', '海龟保护讲座', '海龟放生体验', '海龟栖息地考察', '海洋保护志愿活动', '海龟追踪数据学习'],
        reDaiYu: ['热带鱼类识别', '鱼类标本制作', '鱼类生态观察', '渔业文化体验', '鱼类绘画记录', '海洋牧场参观'],
        xiangcun: ['乡村参观', '农耕体验', '乡村美食制作', '乡村文化学习', '乡村民宿体验', '乡村电商体验', '乡村规划研讨'],
        nongLv: ['农旅融合参观', '休闲农业体验', '乡村旅游规划', '特色农产品品鉴', '农事节庆参与', '农庄经营体验'],
        minSu: ['民宿入住体验', '民宿设计学习', '在地文化体验', '民宿经营交流', '乡村生活体验', '民宿改造参观'],
        teChan: ['特色农产品品鉴', '农产品加工体验', '品牌打造学习', '电商直播体验', '农产品溯源', '农产品包装设计'],
        dianShang: ['乡村电商讲座', '直播带货体验', '农产品网店运营', '电商物流参观', '数字乡村建设学习', '电商创业案例分享'],
        sheQu: ['社区营造参观', '乡村治理学习', '社区文化活动', '乡村规划研讨', '社区志愿服务', '社区文化墙设计'],
        ziyougang: ['自贸港政策讲解', '国际贸易知识', '免税购物体验', '港口参观', '自贸港未来展望', '跨境电商体验'],
        keJi: ['科技企业参观', 'AI技术体验', '创客空间体验', '编程入门', '科技讲座', '机器人互动', '3D打印体验'],
        hangTian: ['航天发射场参观', '航天知识讲座', '火箭模型制作', '航天模拟体验', '太空科普', '卫星数据应用学习'],
        shuZi: ['数字经济讲座', '大数据应用参观', '智慧城市体验', '数字文创体验', '云计算中心参观', '数字农业展示'],
        lvSe: ['绿色能源讲座', '光伏发电参观', '风力发电体验', '环保科技学习', '碳中和知识', '新能源车辆体验'],
        hongse_geYao: ['红色歌曲学唱', '革命歌谣欣赏', '红歌创作体验', '合唱排练', '红歌历史学习', '红歌比赛', '革命号角演奏'],
        hongse_shuFa: ['红色诗词书写', '革命标语临摹', '毛笔书法练习', '硬笔书法创作', '书法作品展览', '红色书法鉴赏', '书法技法讲座'],
        hongse_huiHua: ['红色主题绘画', '革命场景写生', '英雄人物肖像', '红色连环画创作', '绘画技法学习', '红色美术鉴赏', '主题画展'],
        hongse_juBen: ['红色剧本创作', '角色分配与排练', '剧本围读', '舞台布置', '红色短剧演出', '剧本研讨', '红色故事改编'],
        hongse_jianBao: ['红色剪报制作', '革命资料收集', '剪报排版设计', '红色主题剪贴', '历史图片整理', '剪报展览', '红色文献摘录'],
        lijin: ['黎锦纹样鉴赏', '黎锦织造体验', '纺染织绣学习', '纹样设计创作', '黎锦文化讲座', '黎锦服饰欣赏', '传统织机操作'],
        limiao_wuDao: ['黎苗舞蹈学习', '竹竿舞体验', '打柴舞教学', '黎族钱铃舞', '苗族盘皇舞', '舞蹈服饰体验', '黎苗歌舞晚会'],
        reDaiZhiWu: ['热带植物观察', '植物标本采集', '植物分类学习', '热带花卉写生', '植物园参观', '种子收集', '植物拓印'],
        huoShan: ['火山地质考察', '火山岩石鉴赏', '地质剖面观察', '火山口徒步', '火山模型制作', '地热体验', '火山科普讲座'],
        hongShuLin: ['红树林生态观察', '红树林种植体验', '底栖生物调查', '候鸟观察', '水质检测', '红树林摄影', '湿地保护实践'],
        nongGeng: ['农耕体验', '农具认识与使用', '传统播种收割', '农产品加工', '农事节庆参与', '田园写生', '农耕文化馆参观'],
    },

    THEME_GOALS: {
        hongse: ['传承红色基因', '弘扬革命精神', '坚定理想信念', '厚植爱国情怀', '学习革命历史', '培育时代新人', '增强民族自信', '践行社会主义核心价值观'],
        feiyi: ['传承非遗文化', '体验传统技艺', '感受文化魅力', '培养工匠精神', '增强文化自信', '保护文化遗产'],
        ziran: ['认识自然生态', '培养环保意识', '学习科学知识', '探索自然奥秘', '树立生态理念', '践行绿色发展'],
        xiangcun: ['了解乡村振兴', '体验农耕文化', '感受乡村发展', '参与乡村建设', '学习乡村创新', '助力共同富裕'],
        xiandai: ['了解现代发展', '培养国际视野', '认识科技创新', '展望未来蓝图', '学习前沿知识', '激发创新精神'],
    },

    generateRouteResult(theme, days, grade, people, location, budget) {
        const cat = this.themeCategory(theme);
        const themeName = this.themeNames[theme] || this.themeNames[cat] || '红色教育';
        const gradeName = this.gradeNames[grade] || '小学';
        const locName = this.locationNames[location] || '海口市';
        const budgetName = this.budgetNames[budget] || '120-200元/人';
        const dayName = this.dayNames[days] || days + '日';
        const d = parseInt(days) || 1;
        const p = parseInt(people) || 10;

        const themeKey = theme.replace('hongse_', '').replace('feiyi_', '');
        const themeLabel = cat === 'hongse' ? '红色' : cat === 'feiyi' ? '非遗' : cat === 'ziran' ? '自然' : cat === 'xiangcun' ? '乡村' : '现代';

        const budgetPerPerson = {
            ultra_economy: 25, economy: 40, low: 65, low_medium: 100,
            medium: 160, medium_high: 250, high: 400, premium: 650, luxury: 1000, top: 1500
        };
        const perPerson = budgetPerPerson[budget] || 160;
        const totalBudget = perPerson * p;

        const accommodation = d > 1 ? (perPerson >= 500 ? '星级酒店' : perPerson >= 200 ? '品质民宿' : perPerson >= 100 ? '经济型酒店/民宿' : '青年旅舍/民宿') : null;

        const transportMap = [
            { min: 30, max: 999, name: '旅游大巴（45座）', desc: '配备专业导游和随队医生' },
            { min: 20, max: 29, name: '旅游中巴（22座）', desc: '配备专业导游' },
            { min: 15, max: 19, name: '旅游巴士（17座）', desc: '配备专业导游' },
            { min: 7, max: 14, name: '商务包车（7-15座）', desc: '舒适型车辆，灵活安排行程' },
            { min: 3, max: 6, name: '自驾拼车/SUV', desc: '精品小团，深度体验' }
        ];
        const transportInfo = transportMap.find(t => p >= t.min && p <= t.max) || transportMap[transportMap.length - 1];

        const mealPlan = d === 1 ? '含午餐（海南特色餐）' :
                         d === 2 ? '含3正餐1早餐（含1次特色餐）' :
                         d === 3 ? '含5正餐2早餐（含2次特色餐）' :
                         d <= 5 ? `含${d * 2 - 1}正餐${d - 1}早餐（含${Math.ceil(d / 2)}次特色餐）` :
                         `含${d * 2}正餐${d}早餐（每日含特色餐，含1次黎苗长桌宴）`;

        const teamType = p <= 5 ? '精品小团' : p <= 10 ? '标准团队' : p <= 20 ? '中型团队' : '大型团队';
        const teamDesc = p <= 5 ? '个性化定制服务，深度互动体验' :
                         p <= 10 ? '兼顾个人体验与团队协作' :
                         p <= 20 ? '分组管理，每组8-10人配1名辅导员' :
                         '分组管理，每组10人配1名辅导员+1名安全员';

        const dayProfiles = {
            1: { label: '精华一日游', sitesNeeded: 2, actsPerDay: 3, style: '紧凑高效，精选核心点位' },
            2: { label: '经典两日游', sitesNeeded: 3, actsPerDay: 5, style: '节奏适中，核心+拓展' },
            3: { label: '深度三日游', sitesNeeded: 4, actsPerDay: 6, style: '深入体验，理论与实践结合' },
            4: { label: '沉浸四日游', sitesNeeded: 5, actsPerDay: 7, style: '全面覆盖，多维度学习' },
            5: { label: '探索五日游', sitesNeeded: 6, actsPerDay: 8, style: '系统研学，课题式探究' },
            6: { label: '成长六日游', sitesNeeded: 7, actsPerDay: 9, style: '全程沉浸，能力全面提升' },
            7: { label: '蜕变七日营', sitesNeeded: 8, actsPerDay: 10, style: '完整周期，成果导向培养' },
        };
        const profile = dayProfiles[d] || dayProfiles[7];

        const acts = this.THEME_ACTIVITIES[theme] || this.THEME_ACTIVITIES[Object.keys(this.THEME_ACTIVITIES).find(k => k.startsWith(cat))] || ['主题讲解', '实地参观', '互动体验', '小组讨论', '成果分享'];
        const goals = this.THEME_GOALS[cat] || this.THEME_GOALS.hongse;

        const sites = this.THEME_SITES[cat] || this.THEME_SITES.hongse;

        const areaHierarchy = {
            'haikou': ['haikou', 'xiuying', 'longhua', 'qinglan', 'meilan', 'qiongshan', 'jiangdong', 'jiangdong_new', 'guilinyang'],
            'sanya': ['sanya', 'tianya', 'hedong', 'yazhou', 'haitang'],
            'danzhou': ['danzhou', 'nada', 'yangpu'],
            'qionghai': ['qionghai', 'boao', 'jiaji'],
            'wanning': ['wanning', 'xinglong', 'shimei'],
            'wenchang': ['wenchang', 'longwou', 'tanmen'],
            'wuzhishan': ['wuzhishan', 'nanbao'],
            'dongfang': ['dongfang', 'bashezhen'],
            'lingao': ['lingao', 'xinying'],
            'chengmai': ['chengmai', 'laojiang', 'yongfa'],
            'dingan': ['dingan', 'lingkou', 'hetou'],
            'tunchang': ['tunchang', 'xichang', 'nankeng'],
            'changjiang': ['changjiang', 'shibadui'],
            'baisha': ['baisha', 'zhiya'],
            'ledong': ['ledong', 'jianfeng'],
            'lingshui': ['lingshui', 'guangpo'],
            'baoting': ['baoting', 'xinzheng'],
            'qiongzhong': ['qiongzhong', 'hongmao'],
        };

        const locationAreaPrefix = location.split('_')[0];

        const getAreaScore = (siteArea) => {
            if (siteArea === location) return 100;
            if (siteArea === locationAreaPrefix) return 80;
            const prefixAreas = areaHierarchy[locationAreaPrefix] || [locationAreaPrefix];
            if (prefixAreas.includes(siteArea)) return 60;
            if (siteArea.startsWith(locationAreaPrefix)) return 40;
            return 0;
        };

        const scoredSites = sites.map(s => {
            const areaScore = getAreaScore(s.area);
            const tagScore = (s.tags && s.tags.includes(themeKey)) ? 50 : 0;
            const sameCatScore = (cat === 'hongse' && s.tags?.some(t => t.startsWith('hongse'))) ? 20 :
                                (cat === 'feiyi' && s.tags?.some(t => t.startsWith('feiyi') || t === 'limiao')) ? 20 :
                                (cat === 'ziran' && s.tags?.some(t => ['haiyang', 'shengtai', 'nongye', 'dizhi', 'shengwu', 'shanHu', 'haiGui', 'reDaiYu'].includes(t))) ? 20 : 0;
            return { ...s, score: areaScore + tagScore + sameCatScore };
        });

        scoredSites.sort((a, b) => b.score - a.score);

        let primarySites = scoredSites.filter(s => s.score >= 100 || (s.score >= 50 && s.tags && s.tags.includes(themeKey)));
        let secondarySites = scoredSites.filter(s => s.score >= 40 && s.score < 100 && !(s.tags && s.tags.includes(themeKey)));
        let themeFallback = scoredSites.filter(s => s.score < 40 && s.tags && s.tags.includes(themeKey));
        let anyFallback = scoredSites.filter(s => s.score < 40 && !s.tags?.includes(themeKey) && !primarySites.includes(s) && !secondarySites.includes(s) && !themeFallback.includes(s));

        const sitesNeeded = Math.min(profile.sitesNeeded, scoredSites.length);

        if (primarySites.length < sitesNeeded) {
            const needed = sitesNeeded - primarySites.length;
            primarySites = [...primarySites, ...secondarySites.slice(0, needed)];
            secondarySites = secondarySites.slice(needed);
        }
        if (primarySites.length < sitesNeeded) {
            const needed = sitesNeeded - primarySites.length;
            primarySites = [...primarySites, ...themeFallback.slice(0, needed)];
            themeFallback = themeFallback.slice(needed);
        }
        if (primarySites.length < sitesNeeded) {
            const needed = sitesNeeded - primarySites.length;
            primarySites = [...primarySites, ...anyFallback.slice(0, needed)];
        }

        const pickSites = primarySites.slice(0, sitesNeeded);
        const locationList = pickSites.map(s => s.name);

        const activityList = acts.length > 0 ? acts : ['主题讲解', '实地参观', '互动体验', '小组讨论', '成果分享'];
        const goalList = goals.slice(0, Math.min(goals.length, d + 2));

        const safetyList = ['注意交通安全，听从带队老师指挥', '遵守团队纪律，不擅自离队',
            '携带个人常用药品', '注意饮食卫生，不吃路边摊', '保管好个人物品和贵重财物',
            '夏季注意防暑降温，多饮水', '海边活动注意安全，不下海游泳', '山区活动注意防蚊虫',
            '雨天路滑注意行走安全', '夜间活动注意照明', '户外活动做好防晒措施', '尊重当地风俗习惯'];

        const courseListBase = ['美育绘画课程', '研学手册制作', '团队协作活动', '成果展示分享',
            '红色文化知识竞赛', '研学日记撰写', '摄影采风', '非遗手工体验'];
        const courseListExtra = ['自然观察记录', '红色故事创作', '主题辩论赛', '文化调研报告',
            '课题研究报告', '创意作品集', '微视频制作', '研学成果展板'];
        const courseList = [...courseListBase, ...courseListExtra].slice(0, d + 3);

        const itineraryTemplates = {
            1: (i, sites, acts) => ({
                morning: `08:00 ${locName}集合出发\n09:30 抵达${sites[0]}，开营仪式`,
                afternoon: `10:00 ${acts[0] || '主题研学活动'}\n12:00 午餐（海南特色）\n14:00 ${acts[1] || sites[0] + '深度体验'}\n16:00 ${acts[2] || '研学总结与分享'}`,
                evening: undefined,
                meals: '午餐'
            }),
            2: (i, sites, acts) => i === 1 ? {
                morning: `07:30 ${locName}集合出发\n09:00 抵达${sites[0]}, 开营仪式与破冰`,
                afternoon: `10:30 ${acts[0] || '主题导入与讲解'}\n12:00 午餐\n14:00 ${sites[0]}实地研学\n16:30 团队建设活动`,
                evening: `18:30 晚餐\n20:00 研学日记与分享会`,
                meals: '早中晚'
            } : {
                morning: `07:30 晨练与早餐\n09:00 ${sites[1] || '拓展研学点'}参访`,
                afternoon: `11:00 ${acts[2] || '实践体验活动'}\n12:30 午餐\n14:00 ${acts[3] || '成果整理与汇报'}\n16:00 闭营仪式，颁发证书`,
                evening: `17:00 返程`,
                meals: '早中'
            },
            3: (i, sites, acts) => i === 1 ? {
                morning: `07:30 ${locName}集合出发\n09:00 抵达营地，分配房间\n10:00 开营仪式 + 破冰活动`,
                afternoon: `12:00 午餐\n14:00 ${sites[0]}参访 + ${acts[0]}\n17:00 入住休整`,
                evening: `18:00 晚餐\n19:30 研学导读 + 日记时间\n21:00 熄灯休息`,
                meals: '早中晚（含欢迎晚宴）'
            } : i === 3 ? {
                morning: `06:30 晨练\n07:30 早餐\n09:00 ${acts[acts.length - 3] || '综合实践活动'}`,
                afternoon: `12:00 午餐\n14:00 成果汇报准备\n15:30 结营仪式 + 成果展示\n17:00 合影留念`,
                evening: `18:00 返程`,
                meals: '早中'
            } : {
                morning: `07:00 晨练\n07:30 早餐\n09:00 ${sites[Math.min(i - 1, sites.length - 1)] || '当日研学点'}参访`,
                afternoon: `11:30 ${acts[(i - 1) * 2] || '专题研学活动'}\n12:30 午餐\n14:30 ${acts[(i - 1) * 2 + 1] || '动手实践环节'}\n17:00 小组讨论`,
                evening: `18:00 晚餐\n19:30 ${['电影欣赏', '篝火晚会', '才艺展示', '故事分享'][i - 2] || '晚间活动'}\n21:00 日记 + 熄灯`,
                meals: '早中晚'
            },
        };

        const defaultDayTemplate = (i, sites, acts) => {
            const daySiteIndex = Math.min(i - 1, sites.length - 1);
            const actStartIdx = (i - 1) * 2;
            if (i === 1) {
                return {
                    morning: `07:30 ${locName}集合出发\n09:00 抵达首站，开营仪式\n10:30 ${sites[0] || '主研学基地'}导览`,
                    afternoon: `12:00 午餐\n14:00 ${acts[0] || '主题研学活动A'}\n16:00 ${acts[1] || '主题研学活动B'}`,
                    evening: d > 1 ? `18:00 晚餐\n19:30 研学导读与分享\n21:00 休息` : undefined,
                    meals: d > 1 ? '早中晚' : '午餐'
                };
            } else if (i === d) {
                return {
                    morning: `07:00 晨练\n08:00 早餐\n09:00 ${acts[actStartIdx] || '总结性研学活动'}`,
                    afternoon: `11:00 成果整理与排练\n12:00 午餐\n14:00 结营仪式 + 成果汇报\n16:00 颁发证书 + 合影`,
                    evening: '17:00 返程',
                    meals: '早中'
                };
            } else {
                return {
                    morning: `07:00 晨练\n08:00 早餐\n09:00 ${sites[daySiteIndex] || '当日研学点'}参访\n11:00 ${acts[actStartIdx] || '专题讲座'}`,
                    afternoon: `12:00 午餐\n14:00 ${acts[actStartIdx + 1] || '实践体验'}\n16:30 分组研讨`,
                    evening: `18:00 晚餐\n19:30 ${['观影赏析', '文艺晚会', '知识竞赛', '夜话分享', '星空课堂', '联欢晚会'][(i - 2) % 6] || '晚间主题活动'}\n21:00 日记 + 休息`,
                    meals: '早中晚'
                };
            }
        };

        const getDayItinerary = (i, sites, acts) => {
            if (itineraryTemplates[d]) return itineraryTemplates[d](i, sites, acts);
            return defaultDayTemplate(i, sites, acts);
        };

        const itinerary = [];
        for (let i = 1; i <= d; i++) {
            const daySiteIndex = Math.min(i - 1, locationList.length - 1);
            const daySites = locationList.slice(daySiteIndex, daySiteIndex + 2);
            const dayActs = activityList.slice((i - 1) * 2, (i - 1) * 2 + 3);
            const dayItin = getDayItinerary(i, locationList, activityList);
            const titlePrefixes = ['', '初识', '深入', '探索', '践行', '升华', '蜕变', '绽放'];
            const dayTitleSuffix = i === 1 ? (d === 1 ? '·精华一日' : '·启程报到') : (i === d ? '·结营返程' : ('·' + (titlePrefixes[i] || '')));
            const dayTitle = `第${i}天${dayTitleSuffix}`;
            itinerary.push({
                day: i,
                title: dayTitle,
                morning: dayItin.morning,
                afternoon: dayItin.afternoon,
                evening: dayItin.evening,
                sites: daySites,
                meals: dayItin.meals
            });
        }

        const gradeTips = {
            'primary_low': '低年级学生建议1:8师生比，活动以游戏化、体验式为主，减少理论讲授',
            'primary_high': '中高年级学生建议1:10师生比，可增加知识性内容，引导思考',
            'junior': '初中生建议1:12师生比，注重实践操作与独立思考结合',
            'senior': '高中生建议1:15师生比，可设置研究性学习任务和社会调研',
            'university': '大学生建议1:20师生比，设置课题研究与社会调查任务',
            'postgraduate': '研究生建议导师制指导，侧重学术研究与田野调查'
        };

        const highlights = [];
        if (d >= 1) highlights.push(`精选${locationList.length}个核心研学点位`);
        if (d >= 3) highlights.push(`${d - 1}晚住宿体验`);
        if (d >= 5) highlights.push('课题式探究学习');
        if (p <= 5) highlights.push('精品小团定制');
        if (cat === 'hongse') highlights.push('红色精神传承主线贯穿');
        if (themeKey === 'juBenYou') highlights.push('沉浸式剧本体验');

        return {
            success: true,
            name: `${themeName}${dayName}研学`,
            theme: themeName,
            themeLabel,
            days: days,
            dayLabel: dayName,
            profile: profile.style,
            grade: gradeName,
            people: people,
            teamType,
            teamDesc,
            location: locName,
            budget: budgetName,
            perPersonBudget: perPerson,
            totalBudget: totalBudget,
            accommodation,
            transport: transportInfo.name,
            transportDesc: transportInfo.desc,
            mealPlan,
            locations: locationList,
            activities: activityList,
            goals: goalList,
            itinerary: itinerary,
            safety: safetyList.slice(0, Math.min(d + 4, safetyList.length)),
            courses: courseList,
            highlights,
            gradeTip: gradeTips[grade] || gradeTips['primary_low'],
            tips: [`建议穿着舒适运动鞋和防晒服装`, `随身携带雨具，海南天气多变`,
                `提前了解${themeName}相关知识`, `准备研学手册和记录工具`,
                `${gradeName}学生建议家长陪同`, `海南紫外线强烈，请做好防晒`,
                d > 1 ? `多日研学请携带换洗衣物和洗漱用品` : '',
                `尊重当地黎苗民族风俗习惯`, `${teamType}模式：${teamDesc}`].filter(Boolean)
        };
    },

    courseTypeNames: {
        'painting': '绘画课', 'handcraft': '手工课', 'heritage': '非遗体验', 'science': '科普绘画',
        'music': '红色音乐', 'drama': '戏剧表演', 'calligraphy': '书法课', 'photography': '摄影课',
        'banHua': '版画课', 'shuiYin': '水印拓印', 'taoYi': '陶艺课', 'diaoKe': '雕刻课',
        'bianZhi': '编织课', 'jianZhi': '剪纸课', 'wuDao': '舞蹈课', 'langSong': '朗诵课',
        'ziRan': '自然笔记', 'diZhi': '地质手绘'
    },

    courseThemeNames: {
        'hongse_jiyi': '红色记忆', 'hongse_geYao': '红色歌谣', 'hongse_shuFa': '红色书法',
        'hongse_huiHua': '红色绘画', 'hongse_juBen': '红色剧本', 'hongse_yingShi': '红色影视',
        'hongse_shengYin': '红色声音', 'hongse_jianBao': '红色剪报',
        'hongse_shiCi': '红色诗词', 'hongse_diTu': '红色地图', 'hongse_yingXiong': '红色英雄',
        'hongse_qiZhi': '红色旗帜', 'hongse_nuZi': '红色娘子军', 'hongse_qiongYa': '琼崖精神',
        'hongse_jiaFeng': '红色家风', 'hongse_jianZhu': '红色建筑',
        'lijin': '黎锦纹样', 'feiyi_yediao': '椰雕技艺', 'feiyi_jianZhi': '剪纸艺术',
        'feiyi_taoYi': '陶艺制作', 'feiyi_zhiYi': '织锦工艺', 'feiyi_muDiao': '木雕技艺',
        'feiyi_yaoCao': '药香制作', 'limiao_wuDao': '黎苗舞蹈',
        'haiyang': '海洋生态', 'reDaiZhiWu': '热带植物', 'huoShan': '火山地质', 'hongShuLin': '红树林',
        'shanHu': '珊瑚礁', 'haiGui': '海龟保护', 'reDaiYu': '热带鱼类',
        'xiangcun': '乡村风光', 'nongGeng': '农耕文化', 'minSu': '民俗风情', 'teChan': '特色物产',
        'dianShang': '乡村电商',
        'hongse': '红色文化', 'feiyi': '非遗技艺'
    },

    difficultyNames: {
        'easy': '简单', 'medium': '中等', 'hard': '较难', 'professional': '专业'
    },

    COURSE_OBJECTIVES: {
        painting: ['掌握绘画基本技法', '培养审美能力', '提升创作能力', '感受艺术之美', '学会色彩搭配', '培养观察能力'],
        handcraft: ['锻炼动手能力', '学习制作技巧', '培养创造力', '体验手工乐趣', '提升空间思维', '培养耐心品质'],
        heritage: ['了解非遗文化', '学习传统技艺', '感受文化传承', '培养文化自信', '传承工匠精神', '创新传统工艺'],
        science: ['学习科学知识', '培养科学思维', '掌握观察方法', '提升科学素养', '学会科学记录', '培养探究精神'],
        music: ['学习红色歌曲', '感受音乐魅力', '培养音乐素养', '传承红色精神', '掌握基本乐理', '提升表现力'],
        drama: ['学习表演技巧', '体验戏剧魅力', '培养表达能力', '增强团队协作', '提升自信心', '理解角色塑造'],
        calligraphy: ['学习书法技法', '感受汉字之美', '培养专注力', '传承书法文化', '掌握运笔方法', '提升审美水平'],
        photography: ['学习摄影技巧', '培养观察力', '提升审美水平', '记录美好瞬间', '掌握构图方法', '学会光影运用'],
        banHua: ['掌握版画技法', '学习刻版工艺', '培养设计思维', '感受版画艺术', '学会拓印技巧', '提升创作能力'],
        shuiYin: ['学习水印拓印技法', '了解传统印刷术', '培养动手能力', '感受拓印之美', '掌握调墨技巧', '创新拓印应用'],
        taoYi: ['掌握陶艺成型技法', '学习泥料处理', '培养造型能力', '感受陶艺之美', '学会釉色搭配', '了解窑烧工艺'],
        diaoKe: ['学习雕刻基本技法', '掌握工具使用', '培养立体思维', '感受雕刻艺术', '学会浮雕与圆雕', '提升专注力'],
        bianZhi: ['学习编织基本技法', '掌握经纬规律', '培养耐心品质', '感受编织之美', '学会纹样设计', '创新编织应用'],
        jianZhi: ['掌握剪纸技法', '学习传统纹样', '培养精细动作', '感受剪纸之美', '学会对称构图', '创新剪纸设计'],
        wuDao: ['学习舞蹈基本动作', '感受舞蹈韵律', '培养身体协调', '提升表现力', '掌握节奏感', '理解舞蹈文化'],
        langSong: ['学习朗诵技巧', '感受语言之美', '培养表达能力', '提升自信心', '掌握语调运用', '理解作品内涵'],
        ziRan: ['学习自然观察方法', '掌握手绘记录技巧', '培养生态意识', '提升绘画能力', '学会科学记录', '感受自然之美'],
        diZhi: ['学习地质手绘技法', '掌握岩石矿物描绘', '培养科学观察力', '提升绘画能力', '了解地质知识', '感受地质之美'],
    },

    COURSE_MATERIALS: {
        painting: ['画纸（A4/A3）', '水彩颜料', '画笔套装', '铅笔', '橡皮', '调色盘', '参考图'],
        handcraft: ['手工材料包', '剪刀', '胶水', '彩纸', '颜料', '制作教程', '参考样品'],
        heritage: ['非遗材料包', '传统工具', '参考样品', '制作教程', '文化资料'],
        science: ['画纸', '科学资料', '观察工具', '绘画工具', '参考图', '记录本'],
        music: ['乐谱', '音响设备', '乐器（口琴/笛子）', '歌词本', '录音设备'],
        drama: ['剧本', '道具', '服装', '音响设备', '舞台布置材料'],
        calligraphy: ['毛笔', '墨汁', '宣纸', '砚台', '字帖', '毛毡'],
        photography: ['相机/手机', '三脚架', '摄影指南', '存储卡', '后期软件'],
        banHua: ['版画木板/胶板', '刻刀套装', '油墨', '滚筒', '版画纸', '拓印工具'],
        shuiYin: ['拓印板材', '水性颜料', '毛刷', '宣纸', '调色盘', '喷壶'],
        taoYi: ['陶泥', '转盘', '雕塑工具', '釉料', '围裙', '作品展示台'],
        diaoKe: ['雕刻材料（木/石/皂）', '雕刻刀套装', '砂纸', '防护手套', '铅笔', '参考图'],
        bianZhi: ['编织线材', '编织针/梭子', '编织架', '剪刀', '尺子', '参考纹样'],
        jianZhi: ['彩纸/宣纸', '剪刀', '刻刀', '垫板', '参考纹样', '装裱材料'],
        wuDao: ['舞蹈服装', '音响设备', '舞蹈鞋', '镜子', '舞蹈视频教程', '手绢/扇子'],
        langSong: ['朗诵文本', '音响设备', '话筒', '背景音乐', '评分表', '录音设备'],
        ziRan: ['速写本', '彩色铅笔', '水彩笔', '放大镜', '标本盒', '自然图鉴'],
        diZhi: ['速写本', '铅笔套装', '橡皮', '矿物标本', '地质图', '放大镜'],
    },

    generateCourseResult(courseType, courseTheme, courseGrade, duration, difficulty, location) {
        const typeName = this.courseTypeNames[courseType] || '绘画课';
        const themeName = this.courseThemeNames[courseTheme] || '红色文化';
        const gradeName = this.gradeNames[courseGrade] || '小学';
        const diffName = this.difficultyNames[difficulty] || '简单';
        const cat = this.themeCategory(courseTheme);
        const locName = this.locationNames[location] || (location === 'classroom' ? '教室' : location);

        const objectives = this.COURSE_OBJECTIVES[courseType] || this.COURSE_OBJECTIVES.painting;
        const materials = this.COURSE_MATERIALS[courseType] || this.COURSE_MATERIALS.painting;

        const themeObj = [
            `了解${themeName}的历史背景和文化内涵`,
            `学习${themeName}的核心知识和表现手法`,
            `掌握${typeName}的基本技法与创作方法`,
            `通过实践创作，深化对${themeName}的理解`,
            `培养文化传承意识和审美鉴赏能力`,
            `激发对${cat === 'hongse' ? '红色文化' : cat === 'feiyi' ? '非遗文化' : cat === 'ziran' ? '自然生态' : cat === 'xiangcun' ? '乡村文化' : '现代发展'}的热爱与探索精神`
        ];

        const durMap = { 'halfday': 180, 'wholeday': 360 };
        const dur = durMap[duration] || parseInt(duration) || 90;
        const stepTimes = dur <= 40 ? [3, 5, 7, 15, 7, 3] :
                          dur <= 60 ? [5, 8, 10, 25, 8, 4] :
                          dur <= 90 ? [5, 10, 10, 40, 15, 10] :
                          dur <= 120 ? [8, 15, 12, 55, 20, 10] :
                          dur <= 180 ? [10, 20, 15, 90, 30, 15] :
                          [15, 30, 25, 180, 60, 20];

        const introMethods = {
            hongse: '红色故事讲述与历史影像播放',
            feiyi: '非遗作品展示与传承人视频',
            ziran: '自然影像播放与标本展示',
            xiangcun: '乡村风光图片与视频展示',
            xiandai: '科技发展视频与数据展示'
        };

        const steps = [
            `导入环节（${stepTimes[0]}分钟）：通过${introMethods[cat] || '图片视频展示'}，激发学生兴趣`,
            `知识讲解（${stepTimes[1]}分钟）：讲解${themeName}的特点、历史和${typeName}相关知识`,
            `示范演示（${stepTimes[2]}分钟）：教师示范${typeName}的核心技法与创作步骤`,
            `学生实践（${stepTimes[3]}分钟）：学生根据所学进行${themeName}主题创作实践`,
            `作品展示（${stepTimes[4]}分钟）：学生展示作品，互相评价，分享创作心得`,
            `总结提升（${stepTimes[5]}分钟）：教师总结，强调文化传承与创新的重要性`
        ];

        const evalItems = ['作品创意性', '主题表现力', '技法运用', '文化理解深度', '课堂参与度', '完成度'];

        const gradeMaterials = gradeName.includes('小学1-3') ? ['安全剪刀（圆头）', '彩色铅笔', '围裙'] :
                               gradeName.includes('小学4-6') ? ['美工刀（教师监督使用）', '水彩笔', '画板'] :
                               gradeName.includes('初中') ? ['专业画笔', '调色板', '速写本'] :
                               gradeName.includes('高中') ? ['专业级颜料', '画布', '创作参考书'] :
                               gradeName.includes('大学') ? ['专业创作材料', '研究资料', '论文模板'] :
                               ['学术研究资料', '专业创作工具', '田野调查表'];

        const courseLocation = location === 'classroom' ? '教室即可' :
            `配合${locName}研学点位，实地教学`;

        const locationActivity = location !== 'classroom' ?
            [`实地参观${locName}相关${themeName}场所`, `现场采集${themeName}创作素材`, `与当地${cat === 'feiyi' ? '非遗传承人' : cat === 'hongse' ? '红色讲解员' : '专业人员'}交流`] : [];

        return {
            success: true,
            name: `${themeName}${typeName}`,
            type: typeName,
            theme: themeName,
            grade: gradeName,
            duration: duration === 'halfday' ? '半天（3-4小时）' : duration === 'wholeday' ? '全天（6-8小时）' : dur + '分钟',
            difficulty: diffName,
            location: courseLocation,
            objectives: themeObj,
            materials: [...materials, ...gradeMaterials],
            steps: steps,
            evaluation: evalItems,
            locationActivities: locationActivity,
            extensions: [`课后作业：完成一幅${themeName}主题作品`, `拓展阅读：${themeName}相关书籍推荐`,
                `实践建议：前往${themeName}相关场馆实地体验`,
                `线上资源：${themeName}数字博物馆/虚拟展厅参观`,
                `跨学科融合：结合${cat === 'hongse' ? '历史' : cat === 'feiyi' ? '社会学' : cat === 'ziran' ? '科学' : '经济学'}深化理解`]
        };
    }
};