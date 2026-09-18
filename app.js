const services = {
  strategy: {
    index: '01',
    kicker: 'Stratégie',
    name: 'Marketing & Digital Strategy',
    title: 'Stratégie marketing, positionnement, communication, acquisition et développement de clientèle.',
    detailTitle: 'Marketing & Digital Strategy',
    summary: 'Une base stratégique claire avant l’exécution : marque, marché, acquisition, prix et go-to-market.',
    badge: 'STRATEGY',
    capabilities: ['Marketing strategy', 'Brand strategy', 'Positioning', 'Market & competitor analysis', 'Communication strategy', 'Customer acquisition', 'Pricing & value proposition', 'Go-to-market strategy', 'Marketing project management'],
    scope: ['Marketing strategy', 'Brand strategy', 'Positioning', 'Market & competitor analysis', 'Communication strategy', 'Customer acquisition', 'Pricing & value proposition', 'Go-to-market strategy', 'Marketing project management'],
    deliverables: ['Analyse marché & concurrence', 'Positionnement & proposition de valeur', 'Plan de communication', 'Go-to-market & plan marketing']
  },
  digital: {
    index: '02',
    kicker: 'Digital',
    name: 'Digital & E-commerce',
    title: 'Sites internet, e-commerce, réseaux sociaux, contenus, SEO, SEA et campagnes digitales.',
    detailTitle: 'Digital & E-commerce',
    summary: 'Une présence digitale cohérente, du site et de l’e-commerce jusqu’à l’acquisition, au CRM et au contenu.',
    badge: 'DIGITAL',
    capabilities: ['Website creation', 'Website management', 'E-commerce', 'Shopify', 'Landing pages', 'UX / digital experience', 'SEO', 'SEA', 'Google Ads', 'Meta Ads', 'Social media management', 'Email marketing', 'CRM', 'Digital content'],
    scope: ['Website creation & management', 'E-commerce & Shopify', 'SEO / SEA, Google Ads & Meta Ads', 'Social media, email marketing, CRM & content'],
    deliverables: ['Site / landing pages', 'E-commerce setup', 'Acquisition plan', 'Content & CRM activation']
  },
  growth: {
    index: '03',
    kicker: 'Croissance',
    name: 'Business Development',
    title: 'Prospection, acquisition, CRM, développement commercial et accompagnement des entreprises.',
    detailTitle: 'Business Development',
    summary: 'Structurer les actions commerciales pour générer, qualifier et développer les opportunités.',
    badge: 'GROWTH',
    capabilities: ['Commercial strategy', 'Lead generation', 'B2B prospecting', 'Client acquisition', 'Sales support', 'CRM', 'Partnership development', 'Market development', 'International business development'],
    scope: ['Commercial strategy', 'Lead generation & B2B prospecting', 'Client acquisition & sales support', 'CRM, partnerships & market development'],
    deliverables: ['Ciblage & stratégie commerciale', 'Prospection B2B', 'Pipeline CRM', 'Plan de développement marché']
  },
  trade: {
    index: '04',
    kicker: 'Trade Shows',
    name: 'Trade Shows & International Development',
    title: 'Préparation et accompagnement de projets liés aux salons professionnels, notamment à l’international et en Chine.',
    detailTitle: 'Trade Shows & International Development',
    summary: 'Un accompagnement de la stratégie salon jusqu’au sourcing, à la coordination du stand et au suivi commercial.',
    badge: 'CHINA',
    capabilities: ['Trade show strategy', 'Event concept', 'Exhibitor strategy', 'Booth project coordination', 'Supplier coordination', 'International sourcing', 'China market support', 'Pre-event communication', 'Lead generation', 'On-site commercial support', 'Post-event lead follow-up'],
    scope: ['Trade show & exhibitor strategy', 'Booth project & supplier coordination', 'International sourcing & China market support', 'Pre-event communication, on-site support & follow-up'],
    deliverables: ['Trade show plan', 'Booth & supplier brief', 'Lead capture plan', 'Post-event follow-up']
  }
};

const serviceIcons = { strategy: '◎', digital: '⌘', growth: '↗', trade: '展' };

const serviceLocales = {
  en: {
    strategy: {
      kicker: 'Strategy',
      name: 'Marketing & Digital Strategy',
      title: 'Marketing strategy, positioning, communication, acquisition and customer development.',
      detailTitle: 'Marketing & Digital Strategy',
      summary: 'A clear strategic foundation before execution: brand, market, acquisition, pricing and go-to-market.',
      capabilities: ['Marketing strategy', 'Brand strategy', 'Positioning', 'Market & competitor analysis', 'Communication strategy', 'Customer acquisition', 'Pricing & value proposition', 'Go-to-market strategy', 'Marketing project management'],
      scope: ['Marketing strategy', 'Brand strategy', 'Positioning', 'Market & competitor analysis', 'Communication strategy', 'Customer acquisition', 'Pricing & value proposition', 'Go-to-market strategy', 'Marketing project management'],
      deliverables: ['Market & competitor analysis', 'Positioning & value proposition', 'Communication plan', 'Go-to-market & marketing plan']
    },
    digital: {
      kicker: 'Digital',
      name: 'Digital & E-commerce',
      title: 'Websites, e-commerce, social media, content, SEO, SEA and digital campaigns.',
      detailTitle: 'Digital & E-commerce',
      summary: 'A coherent digital presence, from website and e-commerce to acquisition, CRM and content.',
      capabilities: ['Website creation', 'Website management', 'E-commerce', 'Shopify', 'Landing pages', 'UX / digital experience', 'SEO', 'SEA', 'Google Ads', 'Meta Ads', 'Social media management', 'Email marketing', 'CRM', 'Digital content'],
      scope: ['Website creation & management', 'E-commerce & Shopify', 'SEO / SEA, Google Ads & Meta Ads', 'Social media, email marketing, CRM & content'],
      deliverables: ['Website / landing pages', 'E-commerce setup', 'Acquisition plan', 'Content & CRM activation']
    },
    growth: {
      kicker: 'Growth',
      name: 'Business Development',
      title: 'Prospecting, acquisition, CRM, commercial development and business support.',
      detailTitle: 'Business Development',
      summary: 'Structure commercial actions to generate, qualify and develop opportunities.',
      capabilities: ['Commercial strategy', 'Lead generation', 'B2B prospecting', 'Client acquisition', 'Sales support', 'CRM', 'Partnership development', 'Market development', 'International business development'],
      scope: ['Commercial strategy', 'Lead generation & B2B prospecting', 'Client acquisition & sales support', 'CRM, partnerships & market development'],
      deliverables: ['Targeting & commercial strategy', 'B2B prospecting', 'CRM pipeline', 'Market development plan']
    },
    trade: {
      kicker: 'Trade Shows',
      name: 'Trade Shows & International Development',
      title: 'Preparation and support for trade-show projects, especially internationally and in China.',
      detailTitle: 'Trade Shows & International Development',
      summary: 'Support from trade-show strategy through sourcing, booth coordination and commercial follow-up.',
      capabilities: ['Trade show strategy', 'Event concept', 'Exhibitor strategy', 'Booth project coordination', 'Supplier coordination', 'International sourcing', 'China market support', 'Pre-event communication', 'Lead generation', 'On-site commercial support', 'Post-event lead follow-up'],
      scope: ['Trade show & exhibitor strategy', 'Booth project & supplier coordination', 'International sourcing & China market support', 'Pre-event communication, on-site support & follow-up'],
      deliverables: ['Trade show plan', 'Booth & supplier brief', 'Lead capture plan', 'Post-event follow-up']
    }
  },
  zh: {
    strategy: {
      kicker: '战略',
      name: '营销与数字战略',
      title: '营销战略、品牌定位、传播、获客与客户发展。',
      detailTitle: '营销与数字战略',
      summary: '先建立清晰的战略基础，再进入执行：品牌、市场、获客、定价与市场进入。',
      capabilities: ['营销战略', '品牌战略', '市场定位', '市场与竞品分析', '传播战略', '客户获取', '定价与价值主张', '市场进入战略', '营销项目管理'],
      scope: ['营销战略', '品牌战略', '市场定位', '市场与竞品分析', '传播战略', '客户获取', '定价与价值主张', '市场进入战略', '营销项目管理'],
      deliverables: ['市场与竞品分析', '定位与价值主张', '传播计划', '市场进入与营销计划']
    },
    digital: {
      kicker: '数字营销',
      name: '数字营销与电商',
      title: '网站、电商、社交媒体、内容、SEO、SEA 与数字广告。',
      detailTitle: '数字营销与电商',
      summary: '从网站和电商到获客、CRM 与内容，打造连贯的数字化体验。',
      capabilities: ['网站建设', '网站运营', '电子商务', 'Shopify', '落地页', 'UX / 数字体验', 'SEO', 'SEA', 'Google Ads', 'Meta Ads', '社交媒体运营', '邮件营销', 'CRM', '数字内容'],
      scope: ['网站建设与运营', '电商与 Shopify', 'SEO / SEA、Google Ads 与 Meta Ads', '社交媒体、邮件营销、CRM 与内容'],
      deliverables: ['网站 / 落地页', '电商搭建', '获客计划', '内容与 CRM 激活']
    },
    growth: {
      kicker: '增长',
      name: '商务拓展',
      title: 'B2B 开发、获客、CRM、商业发展与企业支持。',
      detailTitle: '商务拓展',
      summary: '系统化商业行动，用于产生、筛选并扩大业务机会。',
      capabilities: ['商业战略', '线索生成', 'B2B 开发', '客户获取', '销售支持', 'CRM', '合作伙伴拓展', '市场拓展', '国际商务拓展'],
      scope: ['商业战略', '线索生成与 B2B 开发', '客户获取与销售支持', 'CRM、合作伙伴与市场拓展'],
      deliverables: ['目标客户与商业战略', 'B2B 开发', 'CRM 销售管道', '市场拓展计划']
    },
    trade: {
      kicker: '展会',
      name: '展会与国际发展',
      title: '专业展会项目的准备与落地支持，尤其面向国际市场和中国。',
      detailTitle: '展会与国际发展',
      summary: '从展会战略、供应商与展台协调，到现场支持和后续商业跟进。',
      capabilities: ['展会战略', '活动概念', '参展战略', '展台项目协调', '供应商协调', '国际采购', '中国市场支持', '展前传播', '线索生成', '现场商业支持', '展后线索跟进'],
      scope: ['展会与参展战略', '展台项目与供应商协调', '国际采购与中国市场支持', '展前传播、现场支持与后续跟进'],
      deliverables: ['展会计划', '展台与供应商简报', '线索采集计划', '展后跟进']
    }
  }
};

const staticTranslations = {
  en: {
    'Accueil':'Home', 'Services':'Services', 'Solutions':'Solutions', 'Contact':'Contact',
    'Parler d’un projet':'Discuss a project', 'France × Chine':'France × China',
    'L’accès à l’international, sans détour':'International access, without detours',
    'Votre passerelle vers le marché chinois.':'Your bridge to the Chinese market.',
    'Marketing, e-commerce, développement commercial et salons professionnels — un seul studio pour avancer de l’idée à l’exécution.':'Marketing, e-commerce, business development and trade shows — one studio from idea to execution.',
    'Explorer les 4 expertises':'Explore the 4 areas', 'Présenter votre projet':'Present your project',
    'Flux actifs':'Live flows', 'Aérien':'Air', 'Maritime':'Sea',
    '4 expertises visibles immédiatement':'4 areas visible immediately',
    'Une ligne de services. Un carousel vivant de compétences.':'Four service areas. One live competency carousel.',
    'Voir le service en détail':'View service details', 'Sélection':'Selected',
    'Créé pour les entreprises ambitieuses':'Built for ambitious companies',
    'Des secteurs variés, une même logique de croissance.':'Different sectors, one growth logic.',
    'Quatre expertises.\nUn même pilotage.':'Four areas.\nOne coordination.',
    'Choisissez un bloc. Le contenu, les livrables et les compétences s’adaptent sans vous perdre dans une arborescence de pages.':'Choose an area. Content, deliverables and competencies adapt without unnecessary page complexity.',
    'Nous pouvons prendre en charge':'What we can handle', 'Livrables typiques':'Typical deliverables', 'Compétences':'Competencies',
    'Cadrer':'Frame', 'Concevoir':'Design', 'Exécuter':'Execute', 'Mesurer':'Measure', 'Discuter de ce service':'Discuss this service',
    'Née d’un aller-retour permanent entre les marchés.':'Born from constant movement between markets.',
    'Avenzo Studio a été créé pour aider les entreprises à réunir marketing, digital et développement commercial au sein d’une approche unique et flexible.':'Avenzo Studio was created to bring marketing, digital and business development together in one flexible approach.',
    'Une approche flexible':'A flexible approach', 'Une expertise disponible à la mission, au projet ou dans la durée.':'Expertise available for a mission, a project or a long-term collaboration.',
    'Choisir le niveau d’accompagnement qui correspond à votre situation.':'Choose the level of support that fits your situation.',
    'Présence digitale':'Digital presence', 'Renforcer votre présence digitale':'Strengthen your digital presence',
    'Pour une entreprise qui démarre ou qui veut professionnaliser sa présence digitale.':'For a company starting out or professionalizing its digital presence.',
    'Croissance':'Growth', 'Construire votre moteur d’acquisition':'Build your acquisition engine',
    'Pour une entreprise qui existe déjà et veut développer ses ventes.':'For an established company looking to grow sales.',
    'Développement':'Development', 'S’étendre sur de nouveaux marchés':'Expand into new markets',
    'Pour une entreprise qui veut se développer en France ou à l’international.':'For a company expanding in France or internationally.',
    'Personnalisation':'Custom', 'Un projet de développement sur mesure':'A custom development project',
    'Chaque entreprise est unique. Nous concevons une combinaison sur mesure de stratégie, d’expertise digitale et de développement commercial, adaptée à vos objectifs.':'Every company is unique. We create a tailored mix of strategy, digital expertise and business development around your goals.',
    'Notre méthode':'Our method', 'Découvrir, définir, créer, activer, optimiser.':'Discover, define, create, activate, optimize.',
    'Découvrir · Analyse':'Discover · Analyze', 'Définir · Stratégie':'Define · Strategy', 'Créer · Construire':'Create · Build', 'Développement · Activer':'Develop · Activate', 'Optimiser · Améliorer':'Optimize · Improve',
    'Nous analysons votre entreprise, votre marché, vos clients et vos objectifs.':'We analyze your company, market, clients and objectives.',
    'Nous définissons la stratégie, les priorités et les actions à mettre en place.':'We define the strategy, priorities and actions to implement.',
    'Nous créons les outils, contenus, campagnes et supports nécessaires.':'We create the required tools, content, campaigns and materials.',
    'Nous lançons les actions d’acquisition et de développement commercial.':'We launch acquisition and business-development actions.',
    'Nous analysons les résultats et faisons évoluer la stratégie.':'We analyze results and evolve the strategy.',
    'Avec Avenzo, on avance ensemble':'With Avenzo, we move forward together', 'Cinq principes pour relier stratégie et exécution.':'Five principles connecting strategy and execution.',
    'Une vision stratégique avant de passer à l’exécution.':'A strategic vision before execution.',
    'Chaque action digitale doit pouvoir contribuer au développement de l’entreprise.':'Every digital action should contribute to business development.',
    'Une approche adaptée aux entreprises qui souhaitent travailler au-delà de leur marché local.':'An approach for companies working beyond their local market.',
    'Parlons de votre projet.':'Let’s discuss your project.',
    'De quoi vous avez besoin ?':'What do you need?', 'Nom et prénom':'Full name', 'Entreprise':'Company', 'Votre projet':'Your project',
    'Envoyer le message':'Send message', 'Copier l’adresse':'Copy address', 'Zone':'Region', 'Langues':'Languages', 'Réponse':'Response',
    'Sous 48h ouvrées':'Within 48 business hours', 'France · Europe · Chine':'France · Europe · China',
    'Ensemble, on avance · France × Chine':'Together, we move forward · France × China',
    'France ↔ Chine':'France ↔ China'
  },
  zh: {
    'Accueil':'首页', 'Services':'服务', 'Solutions':'解决方案', 'Contact':'联系',
    'Parler d’un projet':'沟通项目', 'France × Chine':'法国 × 中国',
    'L’accès à l’international, sans détour':'连接国际市场，更直接',
    'Votre passerelle vers le marché chinois.':'连接中国市场的桥梁。',
    'Marketing, e-commerce, développement commercial et salons professionnels — un seul studio pour avancer de l’idée à l’exécution.':'营销、电商、商务拓展与专业展会——从想法到执行，由一个团队协同推进。',
    'Explorer les 4 expertises':'查看 4 大服务', 'Présenter votre projet':'介绍您的项目',
    'Flux actifs':'实时连接', 'Aérien':'航空', 'Maritime':'海运',
    '4 expertises visibles immédiatement':'4 大服务一目了然',
    'Une ligne de services. Un carousel vivant de compétences.':'四大服务方向，一个动态能力轮播。',
    'Voir le service en détail':'查看服务详情', 'Sélection':'当前选择',
    'Créé pour les entreprises ambitieuses':'为有增长目标的企业而设计',
    'Des secteurs variés, une même logique de croissance.':'不同产业，同一增长逻辑。',
    'Quatre expertises.\nUn même pilotage.':'四大专业方向。\n统一协同。',
    'Choisissez un bloc. Le contenu, les livrables et les compétences s’adaptent sans vous perdre dans une arborescence de pages.':'选择一个服务方向，即可查看对应内容、交付物与专业能力。',
    'Nous pouvons prendre en charge':'我们可以负责', 'Livrables typiques':'典型交付物', 'Compétences':'专业能力',
    'Cadrer':'定义范围', 'Concevoir':'设计', 'Exécuter':'执行', 'Mesurer':'衡量', 'Discuter de ce service':'咨询此服务',
    'Née d’un aller-retour permanent entre les marchés.':'源于法国、欧洲与中国市场之间的长期往来。',
    'Avenzo Studio a été créé pour aider les entreprises à réunir marketing, digital et développement commercial au sein d’une approche unique et flexible.':'Avenzo Studio 帮助企业将营销、数字化与商务拓展整合为灵活的一体化方案。',
    'Une approche flexible':'灵活的合作方式', 'Une expertise disponible à la mission, au projet ou dans la durée.':'可按单项任务、完整项目或长期合作提供专业支持。',
    'Choisir le niveau d’accompagnement qui correspond à votre situation.':'选择最适合您当前阶段的支持方式。',
    'Présence digitale':'数字化形象', 'Renforcer votre présence digitale':'强化您的数字化形象',
    'Pour une entreprise qui démarre ou qui veut professionnaliser sa présence digitale.':'适合刚起步或希望提升数字化专业度的企业。',
    'Croissance':'增长', 'Construire votre moteur d’acquisition':'建立您的获客引擎',
    'Pour une entreprise qui existe déjà et veut développer ses ventes.':'适合已有业务并希望扩大销售的企业。',
    'Développement':'市场拓展', 'S’étendre sur de nouveaux marchés':'进入新的市场',
    'Pour une entreprise qui veut se développer en France ou à l’international.':'适合希望在法国或国际市场发展的企业。',
    'Personnalisation':'定制', 'Un projet de développement sur mesure':'定制化发展项目',
    'Chaque entreprise est unique. Nous concevons une combinaison sur mesure de stratégie, d’expertise digitale et de développement commercial, adaptée à vos objectifs.':'每家企业都不同。我们根据目标组合战略、数字化能力与商务拓展服务。',
    'Notre méthode':'我们的方法', 'Découvrir, définir, créer, activer, optimiser.':'了解、定义、创建、激活、优化。',
    'Découvrir · Analyse':'了解 · 分析', 'Définir · Stratégie':'定义 · 战略', 'Créer · Construire':'创建 · 构建', 'Développement · Activer':'拓展 · 激活', 'Optimiser · Améliorer':'优化 · 改进',
    'Nous analysons votre entreprise, votre marché, vos clients et vos objectifs.':'分析您的企业、市场、客户与目标。',
    'Nous définissons la stratégie, les priorités et les actions à mettre en place.':'明确战略、优先级与行动计划。',
    'Nous créons les outils, contenus, campagnes et supports nécessaires.':'创建所需工具、内容、营销活动与材料。',
    'Nous lançons les actions d’acquisition et de développement commercial.':'启动获客与商务拓展行动。',
    'Nous analysons les résultats et faisons évoluer la stratégie.':'分析结果并持续优化战略。',
    'Avec Avenzo, on avance ensemble':'与 Avenzo 一起向前', 'Cinq principes pour relier stratégie et exécution.':'连接战略与执行的五项原则。',
    'Une vision stratégique avant de passer à l’exécution.':'先有战略视角，再进入执行。',
    'Chaque action digitale doit pouvoir contribuer au développement de l’entreprise.':'每项数字化行动都应服务于业务发展。',
    'Une approche adaptée aux entreprises qui souhaitent travailler au-delà de leur marché local.':'适合希望走出本地市场的企业。',
    'Parlons de votre projet.':'聊聊您的项目。',
    'De quoi vous avez besoin ?':'您需要什么？', 'Nom et prénom':'姓名', 'Entreprise':'公司', 'Votre projet':'您的项目',
    'Envoyer le message':'发送信息', 'Copier l’adresse':'复制邮箱', 'Zone':'区域', 'Langues':'语言', 'Réponse':'回复',
    'Sous 48h ouvrées':'48 个工作小时内', 'France · Europe · Chine':'法国 · 欧洲 · 中国',
    'Ensemble, on avance · France × Chine':'携手向前 · 法国 × 中国',
    'France ↔ Chine':'法国 ↔ 中国'
  }
};

const baseTextNodes = [];
let currentLang = 'fr';

function localizedService(key) {
  const base = services[key];
  if (currentLang === 'fr') return base;
  return { ...base, ...(serviceLocales[currentLang]?.[key] || {}) };
}

function captureBaseTextNodes() {
  const dynamicSelectors = [
    '#home-service-kicker','#home-service-title','#home-service-summary','#home-service-index',
    '#home-capability-marquee','#selection-caption','#selection-label','#selection-icon',
    '#detail-kicker','#detail-title','#detail-summary','#detail-badge','#detail-count',
    '#detail-scope','#detail-deliverables','#detail-capability-wrap','#year','[data-clock]'
  ].join(',');
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
  let node;
  while ((node = walker.nextNode())) {
    if (!node.textContent.trim()) continue;
    const parent = node.parentElement;
    if (!parent || parent.closest(dynamicSelectors)) continue;
    baseTextNodes.push({ node, base: node.textContent });
  }
}

function translateStaticNodes() {
  const dictionary = staticTranslations[currentLang] || {};
  for (const item of baseTextNodes) {
    const raw = item.base;
    const trimmed = raw.trim();
    const translated = currentLang === 'fr' ? trimmed : dictionary[trimmed];
    if (!translated) {
      item.node.textContent = raw;
      continue;
    }
    const leading = raw.match(/^\s*/)?.[0] || '';
    const trailing = raw.match(/\s*$/)?.[0] || '';
    item.node.textContent = leading + translated + trailing;
  }
}

function updateWorldClocks() {
  const locale = currentLang === 'zh' ? 'zh-CN' : currentLang === 'en' ? 'en-GB' : 'fr-FR';
  const now = new Date();
  document.querySelectorAll('[data-clock]').forEach(el => {
    el.textContent = new Intl.DateTimeFormat(locale, {
      timeZone: el.dataset.clock,
      hour: '2-digit',
      minute: '2-digit',
      hour12: false
    }).format(now);
  });
}

function setLanguage(lang) {
  currentLang = ['fr','en','zh'].includes(lang) ? lang : 'fr';
  document.documentElement.lang = currentLang === 'zh' ? 'zh-CN' : currentLang;
  document.querySelectorAll('[data-lang]').forEach(btn => {
    const active = btn.dataset.lang === currentLang;
    btn.classList.toggle('active', active);
    btn.setAttribute('aria-pressed', active ? 'true' : 'false');
  });
  localStorage.setItem('avenzo-language', currentLang);
  translateStaticNodes();
  updateHomeService(activeService);
  updateServiceDetail(activeService);
  updateWorldClocks();
}

const serviceOrder = ['strategy', 'digital', 'growth', 'trade'];
const pages = ['home', 'services', 'solutions', 'contact'];
let activeService = 'strategy';
let autoplayTimer = null;

function routeFromHash() {
  const raw = window.location.hash.replace(/^#\/?/, '');
  if (!raw) return { page: 'home', service: null };
  const parts = raw.split('/').filter(Boolean);
  const page = pages.includes(parts[0]) ? parts[0] : 'home';
  const service = parts[1] && services[parts[1]] ? parts[1] : null;
  return { page, service };
}

function setPage(page, { push = true, service = null } = {}) {
  const safePage = pages.includes(page) ? page : 'home';
  document.querySelectorAll('.page').forEach(el => el.classList.toggle('active', el.id === `page-${safePage}`));
  document.querySelectorAll('.main-nav [data-nav]').forEach(btn => {
    if (btn.dataset.nav === safePage) btn.setAttribute('aria-current', 'page');
    else btn.removeAttribute('aria-current');
  });

  if (service && services[service]) {
    activeService = service;
    updateHomeService(service);
    updateServiceDetail(service);
  }

  if (push) {
    const nextHash = safePage === 'home' ? '#/home' : `#/${safePage}${safePage === 'services' && activeService ? `/${activeService}` : ''}`;
    if (window.location.hash !== nextHash) history.pushState({}, '', nextHash);
  }

  if (safePage === 'home') startServiceAutoplay();
  else stopServiceAutoplay();

  window.scrollTo({ top: 0, behavior: 'auto' });
}

function capabilityChip(label, index) {
  return `<span class="marquee-chip"><em>${String(index + 1).padStart(2, '0')}</em>${label}</span>`;
}

function buildMarquee(capabilities) {
  const content = capabilities.map(capabilityChip).join('');
  return `<div class="marquee-track">${content}${content}</div>`;
}

function updateHomeService(key) {
  const service = localizedService(key);
  if (!service) return;
  activeService = key;

  document.querySelectorAll('[data-service]').forEach(btn => {
    const active = btn.dataset.service === key;
    btn.classList.toggle('active', active);
    btn.setAttribute('aria-selected', active ? 'true' : 'false');
  });

  document.getElementById('home-service-kicker').textContent = `${service.index} · ${service.kicker}`;
  document.getElementById('home-service-index').textContent = service.index;
  document.getElementById('home-service-title').textContent = service.title;
  document.getElementById('home-service-summary').textContent = service.summary;
  const selectionIcon = document.getElementById('selection-icon');
  const selectionLabel = document.getElementById('selection-label');
  const selectionCaption = document.getElementById('selection-caption');
  if (selectionIcon) selectionIcon.textContent = serviceIcons[key];
  if (selectionLabel) selectionLabel.textContent = service.kicker;
  if (selectionCaption) selectionCaption.textContent = currentLang === 'zh' ? '当前选择' : currentLang === 'en' ? 'Selected' : 'Sélection';

  const marquee = document.getElementById('home-capability-marquee');
  marquee.innerHTML = buildMarquee(service.capabilities);
  const track = marquee.querySelector('.marquee-track');
  track.style.animation = 'none';
  void track.offsetWidth;
  track.style.animation = '';
}

function updateServiceDetail(key) {
  const service = localizedService(key);
  if (!service) return;
  document.querySelectorAll('[data-service-tab]').forEach(btn => btn.classList.toggle('active', btn.dataset.serviceTab === key));
  document.getElementById('detail-kicker').textContent = `${service.index} · ${service.name}`;
  document.getElementById('detail-title').textContent = service.detailTitle;
  document.getElementById('detail-summary').textContent = service.summary;
  document.getElementById('detail-badge').textContent = service.badge;
  document.getElementById('detail-count').textContent = `${service.capabilities.length} compétences`;
  document.getElementById('detail-scope').innerHTML = service.scope.map(v => `<li>${v}</li>`).join('');
  document.getElementById('detail-deliverables').innerHTML = service.deliverables.map(v => `<li>${v}</li>`).join('');
  document.getElementById('detail-capability-wrap').innerHTML = service.capabilities.map(v => `<span class="capability-pill">${v}</span>`).join('');

  if (document.getElementById('page-services').classList.contains('active')) {
    const expected = `#/services/${key}`;
    if (window.location.hash !== expected) history.replaceState({}, '', expected);
  }
}

function nextService(step = 1) {
  const currentIndex = serviceOrder.indexOf(activeService);
  const nextIndex = (currentIndex + step + serviceOrder.length) % serviceOrder.length;
  const nextKey = serviceOrder[nextIndex];
  updateHomeService(nextKey);
  updateServiceDetail(nextKey);
}

function startServiceAutoplay() {
  stopServiceAutoplay();
  autoplayTimer = window.setInterval(() => nextService(1), 5200);
}

function stopServiceAutoplay() {
  if (autoplayTimer) {
    window.clearInterval(autoplayTimer);
    autoplayTimer = null;
  }
}

function resetAutoplay() {
  if (document.getElementById('page-home').classList.contains('active')) startServiceAutoplay();
}

function setTheme(theme) {
  const safeTheme = ['noir', 'slate', 'atelier'].includes(theme) ? theme : 'noir';
  document.documentElement.setAttribute('data-theme', safeTheme);
  document.querySelectorAll('[data-theme-choice]').forEach(btn => {
    const active = btn.dataset.themeChoice === safeTheme;
    btn.classList.toggle('active', active);
    btn.setAttribute('aria-pressed', active ? 'true' : 'false');
  });
  localStorage.setItem('avenzo-theme', safeTheme);
}

for (const btn of document.querySelectorAll('[data-nav]')) {
  btn.addEventListener('click', () => setPage(btn.dataset.nav));
}

for (const btn of document.querySelectorAll('[data-service]')) {
  btn.addEventListener('click', () => {
    updateHomeService(btn.dataset.service);
    updateServiceDetail(btn.dataset.service);
    resetAutoplay();
  });
}

for (const btn of document.querySelectorAll('[data-service-tab]')) {
  btn.addEventListener('click', () => {
    activeService = btn.dataset.serviceTab;
    updateHomeService(activeService);
    updateServiceDetail(activeService);
    resetAutoplay();
  });
}

for (const btn of document.querySelectorAll('[data-rail]')) {
  btn.addEventListener('click', () => {
    nextService(btn.dataset.rail === 'next' ? 1 : -1);
    resetAutoplay();
  });
}

document.getElementById('home-service-link').addEventListener('click', () => setPage('services', { service: activeService }));

for (const btn of document.querySelectorAll('[data-theme-choice]')) {
  btn.addEventListener('click', () => setTheme(btn.dataset.themeChoice));
}

for (const btn of document.querySelectorAll('[data-lang]')) {
  btn.addEventListener('click', () => setLanguage(btn.dataset.lang));
}

const carouselHub = document.querySelector('.service-carousel-hub');
if (carouselHub) {
  carouselHub.addEventListener('mouseenter', stopServiceAutoplay);
  carouselHub.addEventListener('mouseleave', resetAutoplay);
  carouselHub.addEventListener('focusin', stopServiceAutoplay);
  carouselHub.addEventListener('focusout', event => {
    if (!carouselHub.contains(event.relatedTarget)) resetAutoplay();
  });
}

document.addEventListener('visibilitychange', () => {
  if (document.hidden) stopServiceAutoplay();
  else resetAutoplay();
});

window.addEventListener('popstate', () => {
  const route = routeFromHash();
  if (route.service) activeService = route.service;
  updateHomeService(activeService);
  updateServiceDetail(activeService);
  setPage(route.page, { push: false, service: route.service || activeService });
});

const copyButton = document.getElementById('copy-email');
copyButton.addEventListener('click', async () => {
  try {
    await navigator.clipboard.writeText('contact@avenzostudio.com');
    const previous = copyButton.textContent;
    copyButton.textContent = 'Copié';
    window.setTimeout(() => copyButton.textContent = previous, 1500);
  } catch {
    copyButton.textContent = 'contact@avenzostudio.com';
  }
});

document.getElementById('contact-form').addEventListener('submit', event => {
  event.preventDefault();
  const name = document.getElementById('contact-name').value.trim();
  const company = document.getElementById('contact-company').value.trim();
  const email = document.getElementById('contact-email').value.trim();
  const message = document.getElementById('contact-message').value.trim();
  const needs = [...document.querySelectorAll('input[name="need"]:checked')].map(el => el.value).join(', ');
  const subject = encodeURIComponent(`Projet Avenzo Studio — ${company || name}`);
  const body = encodeURIComponent([
    `Nom : ${name}`,
    `Entreprise : ${company || '—'}`,
    `Email : ${email}`,
    `Besoin : ${needs || 'À préciser'}`,
    '',
    message
  ].join('\n'));
  window.location.href = `mailto:contact@avenzostudio.com?subject=${subject}&body=${body}`;
});

document.getElementById('year').textContent = new Date().getFullYear();

captureBaseTextNodes();

const savedTheme = localStorage.getItem('avenzo-theme');
setTheme(savedTheme || 'noir');

const initial = routeFromHash();
activeService = initial.service || 'strategy';

const savedLanguage = localStorage.getItem('avenzo-language');
setLanguage(savedLanguage || 'fr');
setPage(initial.page, { push: false, service: activeService });

updateWorldClocks();
window.setInterval(updateWorldClocks, 15000);
