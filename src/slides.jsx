import {
  Boundary,
  EvidencePlaceholder,
  FlowArrow,
  NumberBadge,
  Slide,
  SlideTitle,
  Visual,
} from "./components";

const taskParts = [
  ["01", "目标", "最终希望完成什么"],
  ["02", "材料", "需要读取哪些事实"],
  ["03", "规则", "按什么标准判断"],
  ["04", "结果", "形成什么交付或动作"],
];

const chapterLabel = (chapter) => `康家佳品 · 悟空场景化实战 · ${chapter}`;

export function createSlides(assetUrl) {
  const logo = assetUrl("钉钉-logo.png");
  const wukong = assetUrl("悟空形象.png");
  const dws = assetUrl("DWS-暗色图片.png");

  return [
    {
      title: "悟空场景化实战培训",
      duration: "1 分钟",
      notes:
        "开场只讲业务，不解释技术名词。请听众先把悟空理解为一个能参与工作链、但仍由人授权和判断的执行伙伴。今天的目标，是共同把一个真实工作场景梳理成可复用的 Skill。",
      content: (
        <Slide logo={logo} label="康家佳品 · 2026" className="cover-slide">
          <div className="cover-layout">
            <div className="cover-copy">
              <div className="eyebrow">WUKONG · SCENARIO WORKSHOP</div>
              <h1>悟空场景化<br />实战培训</h1>
              <p>让智能体参与康家佳品的产品、交付、销售与经营协同</p>
              <div className="cover-chain">
                需求 <span>→</span> 产品 <span>→</span> 研发 <span>→</span> 供应链
                <span>→</span> 质量 <span>→</span> 销售 <span>→</span> 服务 <span>→</span> 经营
              </div>
            </div>
            <div className="cover-visual">
              <div className="business-orbit orbit-one">经营管理</div>
              <div className="business-orbit orbit-two">产品交付</div>
              <div className="business-orbit orbit-three">品牌获客</div>
              <div className="business-orbit orbit-four">渠道销售</div>
              <div className="wukong-halo" aria-hidden="true" />
              <Visual src={wukong} alt="钉钉悟空形象" className="wukong-hero" />
            </div>
          </div>
        </Slide>
      ),
    },
    {
      title: "今天不是学习更多 AI 功能，而是学会把工作交给悟空",
      duration: "2 分钟",
      notes:
        "三个目标是递进关系：先判断任务是否适合，再学会交代任务，最后把稳定方法沉淀为团队 Skill。不要承诺今天就完成企业级建设，现场目标是完成第一次正确拆解。",
      content: (
        <Slide logo={logo} label={chapterLabel("开场") } className="goals-slide">
          <SlideTitle
            eyebrow="TODAY'S OUTCOME"
            title="今天不是学习更多 AI 功能，而是学会把工作交给悟空"
            lead="从会使用，到会交代，再到会建设。"
          />
          <div className="goal-stairs">
            <article><NumberBadge>01</NumberBadge><h3>会使用</h3><p>判断什么任务适合交给悟空</p></article>
            <article><NumberBadge>02</NumberBadge><h3>会交代</h3><p>说清目标、材料、规则和结果</p></article>
            <article><NumberBadge>03</NumberBadge><h3>会建设</h3><p>发现可沉淀为 Skill 的部门场景</p></article>
          </div>
          <div className="bottom-statement">现场验收：每组完成 1 张真实场景任务卡</div>
        </Slide>
      ),
    },
    {
      title: "四条业务主线，共同指向同一条端到端价值链",
      duration: "3 分钟",
      notes:
        "请客户核对部门归属。这里的四条主线来自方案材料，不代表正式组织架构定稿；有部门名称或职责变化时，应现场标记待确认。强调悟空场景不能按单一工具划分，而应跟随业务结果。",
      content: (
        <Slide logo={logo} label={chapterLabel("业务认知") }>
          <SlideTitle eyebrow="BUSINESS MAP" title="四条业务主线，共同指向同一条端到端价值链" />
          <div className="lane-grid">
            <article className="lane lane-primary"><span>经营管理</span><strong>综管 · 财务</strong><p>制度、组织协同与经营结果</p></article>
            <article className="lane"><span>产品交付</span><strong>产品 · 研发 · 供应链 · 质管 · 用服</strong><p>从需求定义到服务闭环</p></article>
            <article className="lane"><span>品牌获客</span><strong>品推 · 社群营销</strong><p>传播、活动、运营与转化</p></article>
            <article className="lane"><span>渠道销售</span><strong>B2B · 大客户 · 海外 · 小画仙</strong><p>客户开发、销售转化与经营</p></article>
          </div>
          <Boundary>部门名称与业务归属需由客户现场确认</Boundary>
        </Slide>
      ),
    },
    {
      title: "一项业务结果，通常需要多个部门共同完成",
      duration: "3 分钟",
      notes:
        "沿着价值链逐段询问：哪些信息在当前环节产生，下一环节如何获取，谁负责确认。悟空的切入点不是代替某个部门，而是减少查找、整理、交接和回写中的摩擦。",
      content: (
        <Slide logo={logo} label={chapterLabel("业务认知") }>
          <SlideTitle eyebrow="END-TO-END VALUE CHAIN" title="一项业务结果，通常需要多个部门共同完成" lead="任何一处信息断点，都会变成下一环节的等待。" />
          <div className="value-chain">
            {["客户与市场", "产品定义", "研发方案", "采购生产", "质量检验", "市场销售", "售后服务", "经营核算"].map((item, i) => (
              <div className={i === 0 || i === 7 ? "chain-node strong" : "chain-node"} key={item}>
                <span>{String(i + 1).padStart(2, "0")}</span><strong>{item}</strong>
              </div>
            ))}
          </div>
          <div className="handoff-line"><span>信息</span><span>责任</span><span>进度</span><span>判断</span><strong>需要在交接中保持一致</strong></div>
        </Slide>
      ),
    },
    {
      title: "问题不在信息少，而在信息无法继续推动执行",
      duration: "2 分钟",
      notes:
        "把问题归为三类：找不到、接不住、沉淀不下来。不要泛讲 AI 提效，先让客户确认这些协作摩擦是否真实存在，并记录不适用的点。",
      content: (
        <Slide logo={logo} label={chapterLabel("业务认知") } className="problem-slide">
          <SlideTitle eyebrow="THE CONFLICT" title="问题不在信息少，而在信息无法继续推动执行" />
          <div className="problem-grid">
            <article className="problem-major"><div className="oversized-number">01</div><h3>散落</h3><p>群聊、文档、表格与系统各自保存一段事实，形成结果前要反复寻找。</p></article>
            <article><div className="oversized-number">02</div><h3>断点</h3><p>纪要没有变成任务，分析没有回写系统，风险没有触达责任人。</p></article>
            <article><div className="oversized-number">03</div><h3>失传</h3><p>同类工作依赖个人经验，方法没有沉淀为团队可复用的标准。</p></article>
          </div>
        </Slide>
      ),
    },
    {
      title: "工作方式的变化，是把执行链交给悟空推进",
      duration: "2 分钟",
      notes:
        "左侧是人工串联工具，右侧是人明确目标后由悟空组织执行。这里不是全自动化承诺；任何写入、发送或关键业务判断仍要遵循授权和确认。",
      content: (
        <Slide logo={logo} label={chapterLabel("业务认知") }>
          <SlideTitle eyebrow="WORKING MODEL" title="工作方式的变化，是把执行链交给悟空推进" />
          <div className="shift-grid">
            <article className="shift-old"><span>过去</span><h3>人追着工具跑</h3><ul><li>逐处查找信息</li><li>手工汇总材料</li><li>凭个人经验处理</li><li>复制结果并逐个通知</li></ul></article>
            <div className="shift-arrow"><span>目标驱动</span>→</div>
            <article className="shift-new"><span>现在</span><h3>悟空沿着任务跑</h3><ul><li>统一收集事实</li><li>按 Skill 提炼重点</li><li>调用工具查询与执行</li><li>把结果推进到下一步</li></ul></article>
          </div>
          <div className="bottom-statement">人的责任没有消失：提出目标、授权动作、检查事实、作出判断</div>
        </Slide>
      ),
    },
    {
      title: "普通 AI 生成答案，悟空继续推进工作",
      duration: "2 分钟",
      notes:
        "用同一个任务比较边界。普通 AI 可以写周报模板；悟空在拥有相应工具、数据和权限时，还能读取、判断、生成、更新和通知。必须强调“在拥有相应能力与授权时”。",
      content: (
        <Slide logo={logo} label={chapterLabel("业务认知") } className="compare-slide">
          <SlideTitle eyebrow="FROM ANSWER TO ACTION" title="普通 AI 生成答案，悟空继续推进工作" lead="示例任务：整理本周新品进展，并提醒存在延期风险的负责人。" />
          <div className="compare-track">
            <article><span>普通 AI</span><h3>生成一份周报模板</h3><div className="compare-end">答案</div></article>
            <article className="compare-active"><span>悟空</span><div className="action-sequence"><b>读取</b><FlowArrow/><b>汇总</b><FlowArrow/><b>判断</b><FlowArrow/><b>生成</b><FlowArrow/><b>更新</b><FlowArrow/><b>提醒</b></div><div className="compare-end">业务结果</div></article>
          </div>
          <Boundary>执行范围取决于已开通工具、数据权限与人工确认</Boundary>
        </Slide>
      ),
    },
    {
      title: "把工作交给悟空，先说清楚四件事",
      duration: "3 分钟",
      notes:
        "提示词不是修辞比赛。现场让听众用自己的一个任务口述四项：目标、材料、规则、结果。信息缺失时应明确待确认，不能让悟空用猜测补齐业务事实。",
      content: (
        <Slide logo={logo} label={chapterLabel("工作机制") }>
          <SlideTitle eyebrow="TASK BRIEF" title="把工作交给悟空，先说清楚四件事" lead="完整任务 = 目标 + 材料 + 规则 + 结果" />
          <div className="four-blocks">
            {taskParts.map(([n, title, copy]) => (
              <article key={title}><NumberBadge>{n}</NumberBadge><h3>{title}</h3><p>{copy}</p></article>
            ))}
          </div>
          <div className="example-strip"><strong>例：</strong>生成新品上市准备报告｜读取项目计划与进度｜识别延期且不得虚构｜输出报告、风险表与待确认动作</div>
        </Slide>
      ),
    },
    {
      title: "Skill 是把优秀员工的方法，变成可重复执行的标准",
      duration: "3 分钟",
      notes:
        "把 Skill 讲成工作方法，不先讲文件格式。一个有效 Skill 要说明适用场景、输入、步骤、规则、工具、输出和确认点。业务部门定义方法，技术侧帮助配置和接入。",
      content: (
        <Slide logo={logo} label={chapterLabel("工作机制") } className="skill-slide">
          <SlideTitle eyebrow="SKILL" title="Skill 是把优秀员工的方法，变成可重复执行的标准" />
          <div className="definition-layout">
            <div className="definition-card"><span>业务化定义</span><blockquote>一套可以被重复使用的<br />标准工作方法</blockquote></div>
            <div className="method-stack">
              {["何时使用", "需要什么输入", "按哪些步骤", "遵循什么规则", "调用哪些工具", "输出什么结果", "哪里人工确认"].map((item, i) => <div key={item}><span>{i + 1}</span>{item}</div>)}
            </div>
          </div>
          <div className="bottom-statement">提示词解决一次问题，Skill 沉淀一类工作的标准方法</div>
        </Slide>
      ),
    },
    {
      title: "一次好提问，经过验证后才能成为团队 Skill",
      duration: "2 分钟",
      notes:
        "强调演进而非二选一。临时任务适合提示词；高频、稳定、可验收的任务，才值得逐步模板化和 Skill 化。不要把未经验证的个人写法直接发布为团队标准。",
      content: (
        <Slide logo={logo} label={chapterLabel("工作机制") }>
          <SlideTitle eyebrow="FROM PROMPT TO STANDARD" title="一次好提问，经过验证后才能成为团队 Skill" />
          <div className="maturity-road">
            <article><span>01</span><h3>一次提问</h3><p>解决临时需求</p></article><FlowArrow/>
            <article><span>02</span><h3>优质提示词</h3><p>复用表达结构</p></article><FlowArrow/>
            <article><span>03</span><h3>任务模板</h3><p>固定输入与输出</p></article><FlowArrow/>
            <article className="maturity-final"><span>04</span><h3>Skill</h3><p>固化步骤、规则、工具与确认点</p></article>
          </div>
          <div className="criteria-row"><span>高频</span><span>稳定</span><span>规则明确</span><span>结果可验收</span></div>
        </Slide>
      ),
    },
    {
      title: "DWS 是悟空使用钉钉能力的统一执行入口",
      duration: "3 分钟",
      notes:
        "使用用户提供的 DWS 官方图片。解释 DWS 的业务意义：让悟空在授权范围内查询和执行钉钉能力。不要在这里承诺所有产品、所有接口都已开通；具体支持范围要在演示前验证。",
      content: (
        <Slide logo={logo} label={chapterLabel("工作机制") } className="dws-slide" dark>
          <div className="dws-copy">
            <div className="eyebrow">DINGTALK WORKSPACE CLI</div>
            <h2>DWS 是悟空使用钉钉能力的统一执行入口</h2>
            <p>Skill 规定该怎么做，DWS 负责在钉钉中真正去做。</p>
            <div className="dws-tags"><span>AI 表格</span><span>日历</span><span>通讯录</span><span>群聊</span><span>审批</span><span>文档</span></div>
          </div>
          <Visual src={dws} alt="DingTalk Workspace CLI 官方暗色宣传图" className="dws-official-visual" />
          <Boundary>能力范围以客户当前开通项与授权范围为准</Boundary>
        </Slide>
      ),
    },
    {
      title: "DWS 把查询与执行接成一条可确认的链路",
      duration: "2 分钟",
      notes:
        "查询是获取事实，执行是改变状态。建议默认先查询、形成预览，再由人确认创建、修改或发送。具体命令和产品能力不在主课展开。",
      content: (
        <Slide logo={logo} label={chapterLabel("工作机制") }>
          <SlideTitle eyebrow="QUERY → PREVIEW → ACTION" title="DWS 把查询与执行接成一条可确认的链路" />
          <div className="capability-split">
            <article><div className="capability-label">查询信息</div><ul><li>读取 AI 表格数据</li><li>查询人员与组织</li><li>查询日程与审批</li><li>获取群聊与文档信息</li></ul></article>
            <div className="confirm-gate"><span>预览</span><strong>人工确认</strong></div>
            <article className="capability-action"><div className="capability-label">执行动作</div><ul><li>新增或更新记录</li><li>创建日程与任务</li><li>生成或更新内容</li><li>发送群消息与提醒</li></ul></article>
          </div>
          <Boundary>未验证的写入与发送动作不进入正式演示承诺</Boundary>
        </Slide>
      ),
    },
    {
      title: "MCP 在需要时，把悟空延伸到钉钉之外",
      duration: "2 分钟",
      notes:
        "这里只讲业务作用。MCP Server 的开发、部署、鉴权和接口封装放在技术附录或后续共创。外部系统是否可接，必须逐一确认接口、权限和合规要求。",
      content: (
        <Slide logo={logo} label={chapterLabel("工作机制") }>
          <SlideTitle eyebrow="MCP" title="MCP 在需要时，把悟空延伸到钉钉之外" lead="DWS 连接钉钉；MCP 连接企业已有业务系统。" />
          <div className="system-constellation">
            <div className="system-center"><strong>悟空</strong><span>MCP</span></div>
            {["ERP", "CRM", "PLM", "QMS", "售后系统", "仓储物流"].map((system) => <div className="system-node" key={system}>{system}</div>)}
          </div>
          <Boundary>以上为候选连接方向，不代表康家佳品已完成接入</Boundary>
        </Slide>
      ),
    },
    {
      title: "一项任务由五层能力共同完成，人员始终掌握最终判断",
      duration: "3 分钟",
      notes:
        "从上到下解释：用户提出目标，悟空拆解调度，Skill 给出标准方法，DWS 或 MCP 调用系统，底层产品与数据完成实际动作。人横向贯穿全链路，负责授权与判断。",
      content: (
        <Slide logo={logo} label={chapterLabel("工作机制") } className="architecture-slide">
          <SlideTitle eyebrow="THE OPERATING MODEL" title="一项任务由五层能力共同完成，人员始终掌握最终判断" compact />
          <div className="architecture-layout">
            <div className="architecture-stack">
              <div><span>01</span><strong>用户目标</strong><p>定义要完成的业务结果</p></div>
              <div className="architecture-accent"><span>02</span><strong>悟空</strong><p>理解、拆解与调度任务</p></div>
              <div><span>03</span><strong>Skill</strong><p>提供标准工作方法</p></div>
              <div><span>04</span><strong>DWS ｜ MCP</strong><p>调用钉钉与外部系统</p></div>
              <div><span>05</span><strong>产品与系统</strong><p>查询事实、记录结果、执行动作</p></div>
            </div>
            <div className="human-rail">
              <Visual src={wukong} alt="钉钉悟空形象" className="wukong-small" />
              <h3>人员贯穿全链路</h3>
              <p>提出目标</p><p>提供规则</p><p>授权动作</p><p>确认结果</p>
            </div>
          </div>
        </Slide>
      ),
    },
    {
      title: "悟空可以执行，但不能绕过企业管理规则",
      duration: "2 分钟",
      notes:
        "把权限与确认作为可信使用的前提，而不是最后补充。高风险动作至少包含对外发送、业务数据写入、日程或任务创建、关键业务结论发布。实际风险分级需与客户制度对齐。",
      content: (
        <Slide logo={logo} label={chapterLabel("工作机制") }>
          <SlideTitle eyebrow="TRUST BY DESIGN" title="悟空可以执行，但不能绕过企业管理规则" />
          <div className="guardrail-track">
            {[
              ["身份", "基于当前用户身份访问"],
              ["权限", "查询范围受数据权限限制"],
              ["预览", "修改与发送前展示结果"],
              ["确认", "高风险动作由人授权"],
              ["留痕", "过程可追踪、结果可复核"],
            ].map(([title, copy], i) => <article key={title}><NumberBadge>{i + 1}</NumberBadge><h3>{title}</h3><p>{copy}</p></article>)}
          </div>
          <div className="bottom-statement">悟空负责准备和执行，人负责授权和最终判断</div>
        </Slide>
      ),
    },
    {
      title: "主场景一：让新品上市从“各自推进”变成“共同看清”",
      duration: "3 分钟",
      notes:
        "这是共同演示的主场景，覆盖产品、研发、供应链、质管、品推、业务、用服和财务。先确认康家佳品是否有可用于培训的脱敏项目数据。",
      content: (
        <Slide logo={logo} label={chapterLabel("主场景一") } className="scene-intro scene-one">
          <div className="scene-intro-copy"><div className="eyebrow">SCENARIO 01 · 新品上市协同</div><h2>让新品上市从<br />“各自推进”变成<br />“共同看清”</h2><p>跨部门进度、风险、责任与行动被放进同一条任务链。</p></div>
          <div className="scene-intro-visual"><span className="scene-number">01</span><Visual src={wukong} alt="钉钉悟空形象" className="wukong-scene" /></div>
        </Slide>
      ),
    },
    {
      title: "把一个上市目标，拆成可执行、可检查的任务链",
      duration: "4 分钟",
      notes:
        "先展示用户任务原句，再拆解为四项。现场要替换“某新品”为真实、可脱敏的产品。规则里必须明确不得虚构信息，缺失项写待确认。",
      content: (
        <Slide logo={logo} label={chapterLabel("新品上市") } className="task-slide">
          <SlideTitle eyebrow="TASK BRIEF" title="把一个上市目标，拆成可执行、可检查的任务链" compact />
          <div className="task-quote">“汇总某新品的研发、采购、试产、质量和推广准备情况，识别延期及风险，生成上市准备报告，并通知相关负责人。”</div>
          <div className="task-parts-grid">
            <article><NumberBadge>目标</NumberBadge><p>看清上市准备状态与风险</p></article>
            <article><NumberBadge>材料</NumberBadge><p>计划、进度、采购、质量、营销资料</p></article>
            <article><NumberBadge>规则</NumberBadge><p>识别延期、依赖、缺失；不得虚构</p></article>
            <article><NumberBadge>结果</NumberBadge><p>报告、风险记录、待确认通知</p></article>
          </div>
        </Slide>
      ),
    },
    {
      title: "新品上市 Skill 把七步检查固化为统一方法",
      duration: "5 分钟",
      notes:
        "七步来自方案中的候选 SOP，正式发布前需由业务部门确认顺序、规则和验收口径。尤其是“影响判断”和“责任分工”不能只由模型自动决定。",
      content: (
        <Slide logo={logo} label={chapterLabel("新品上市") }>
          <SlideTitle eyebrow="SKILL BLUEPRINT" title="新品上市 Skill 把七步检查固化为统一方法" />
          <div className="workflow-seven">
            {[
              "确认产品与计划时间", "收集各部门进展", "对照里程碑", "识别延期与阻塞",
              "判断上市影响", "形成风险与责任", "生成管理摘要",
            ].map((item, i) => <article key={item} className={i === 4 || i === 5 ? "human-check" : ""}><span>{String(i + 1).padStart(2, "0")}</span><strong>{item}</strong>{(i === 4 || i === 5) && <small>人工确认</small>}</article>)}
          </div>
          <Boundary>候选 SOP，需由康家佳品业务负责人确认后再固化为 Skill</Boundary>
        </Slide>
      ),
    },
    {
      title: "工具负责取数和执行，真实界面需要用现场证据说话",
      duration: "7 分钟",
      notes:
        "此页用于现场演示。截图到位后，先读取项目数据，再展示风险写回或通知预览。任何写入和发送都必须在可控测试范围内完成。当前仅保留真实截图位。",
      content: (
        <Slide logo={logo} label={chapterLabel("新品上市") } className="product-proof-slide">
          <SlideTitle eyebrow="DWS + MCP IN ACTION" title="工具负责取数和执行，真实界面需要用现场证据说话" compact />
          <div className="proof-layout">
            <div className="tool-rail">
              <article><span>DWS · 查询</span><p>读取新品项目数据、查询相关人员</p></article>
              <article><span>MCP · 按需</span><p>连接 ERP / PLM / QMS / 物流</p></article>
              <article><span>DWS · 执行</span><p>更新风险、创建日程、预览通知</p></article>
            </div>
            <EvidencePlaceholder id="S01" title="新品项目 AI 表格 / 悟空执行过程" detail="请提供已脱敏的项目数据页，需能看到里程碑、责任人、状态和风险字段。" />
          </div>
        </Slide>
      ),
    },
    {
      title: "场景完成的标准，不是“生成了文字”，而是风险得到承接",
      duration: "6 分钟",
      notes:
        "最终交付分为看清、承接、推进三层。截图应来自真实演示结果，不能用设计稿。没有准备度基线时不展示虚构百分比。责任人、时间与对外通知必须人工确认。",
      content: (
        <Slide logo={logo} label={chapterLabel("新品上市") }>
          <SlideTitle eyebrow="DONE DEFINITION" title="场景完成的标准，不是“生成了文字”，而是风险得到承接" compact />
          <div className="done-layout">
            <div className="done-stack">
              <article><span>看清</span><p>各部门进展 · 延期节点 · 质量与供应风险</p></article>
              <article><span>承接</span><p>责任人 · 计划完成时间 · 上市建议</p></article>
              <article><span>推进</span><p>风险记录更新 · 群消息或会议通知</p></article>
            </div>
            <EvidencePlaceholder id="S02" title="新品上市准备报告 / 风险清单" detail="请提供真实演示生成的报告或风险表截图，隐去敏感产品和人员信息。" />
          </div>
          <Boundary>任何责任归属、完成时间与发送动作均需人工确认</Boundary>
        </Slide>
      ),
    },
    {
      title: "主场景二：把大客户项目推进变成一条连续的协同链",
      duration: "3 分钟",
      notes:
        "本场景面向 B2B、大客户、海外和小画仙业务，同时连接产品、供应链、财务、质管与综管。重点是需求完整性、内部评审和下一步动作。",
      content: (
        <Slide logo={logo} label={chapterLabel("主场景二") } className="scene-intro scene-two">
          <div className="scene-intro-copy"><div className="eyebrow">SCENARIO 02 · 大客户项目</div><h2>把项目推进变成<br />一条连续的<br />协同链</h2><p>从客户需求到回款跟进，每一步都有事实、责任与下一动作。</p></div>
          <div className="scene-intro-visual"><span className="scene-number">02</span><Visual src={wukong} alt="钉钉悟空形象" className="wukong-scene" /></div>
        </Slide>
      ),
    },
    {
      title: "大客户项目最怕的，不是步骤多，而是关键条件没对齐",
      duration: "5 分钟",
      notes:
        "九个阶段不要求全部自动化。现场先确认客户需求、报价、交期和风险的真实数据来源，再选择适合试点的一段。优先从内部评审材料开始，风险更可控。",
      content: (
        <Slide logo={logo} label={chapterLabel("大客户项目") }>
          <SlideTitle eyebrow="PROJECT PIPELINE" title="大客户项目最怕的，不是步骤多，而是关键条件没对齐" compact />
          <div className="project-pipeline">
            {["客户需求", "产品选型", "成本报价", "内部评审", "合同审批", "下单生产", "质量检验", "物流交付", "回款跟进"].map((item, i) => <div key={item} className={[2,3,6].includes(i) ? "risk-stage" : ""}><span>{i + 1}</span><strong>{item}</strong></div>)}
          </div>
          <div className="project-task"><span>悟空任务</span><p>整理需求 → 检查完整性 → 汇总报价、交期与风险 → 生成评审材料 → 创建下一步</p></div>
        </Slide>
      ),
    },
    {
      title: "大客户 Skill 把需求、方案、商务与交付风险放在一起评审",
      duration: "4 分钟",
      notes:
        "八步中，需求完整性、定制范围、成本报价和交期属于关键确认点。外部企业信息只能使用已授权、合规的数据服务。截图需来自脱敏后的项目记录和真实评审材料。",
      content: (
        <Slide logo={logo} label={chapterLabel("大客户项目") } className="skill-proof-slide">
          <SlideTitle eyebrow="SKILL + EXECUTION" title="大客户 Skill 把需求、方案、商务与交付风险放在一起评审" compact />
          <div className="skill-proof-layout">
            <div className="compact-steps">
              {["提取需求", "检查完整性", "区分标准 / 定制", "匹配产品方案", "收集成本报价", "识别交付风险", "生成评审材料", "输出沟通建议"].map((item, i) => <div key={item}><span>{i + 1}</span>{item}</div>)}
            </div>
            <div className="proof-column">
              <div className="mini-tools"><span>DWS｜项目记录 · 人员 · 日程 · 审批</span><span>MCP｜CRM · ERP · 物流 · 外部信息</span></div>
              <EvidencePlaceholder id="S03" title="大客户项目记录 / 内部评审材料" detail="请提供一个脱敏项目的需求页，以及悟空生成的真实评审结果。" />
            </div>
          </div>
          <Boundary>客户需求、定制范围、报价与交期必须由业务人员确认</Boundary>
        </Slide>
      ),
    },
    {
      title: "主场景三：让每一次客诉都进入可追踪的质量闭环",
      duration: "3 分钟",
      notes:
        "本场景覆盖用服、质管、研发、供应链、产品、业务和财务。强调问题分类只是起点，真正的完成标准是整改有责任、时间和关闭证据。",
      content: (
        <Slide logo={logo} label={chapterLabel("主场景三") } className="scene-intro scene-three">
          <div className="scene-intro-copy"><div className="eyebrow">SCENARIO 03 · 客诉质量闭环</div><h2>让每一次客诉<br />都进入可追踪的<br />质量闭环</h2><p>从问题描述到整改关闭，让相似问题成为可复用的组织经验。</p></div>
          <div className="scene-intro-visual"><span className="scene-number">03</span><Visual src={wukong} alt="钉钉悟空形象" className="wukong-scene" /></div>
        </Slide>
      ),
    },
    {
      title: "客诉 Skill 统一九步方法，但把根因判断留给专业人员",
      duration: "5 分钟",
      notes:
        "悟空可以提取、分类、匹配和形成建议；风险等级、根因、整改措施与客户回复应由专业人员确认。历史相似问题只能作为线索，不能替代调查结论。",
      content: (
        <Slide logo={logo} label={chapterLabel("质量闭环") }>
          <SlideTitle eyebrow="SKILL BLUEPRINT" title="客诉 Skill 统一九步方法，但把根因判断留给专业人员" compact />
          <div className="quality-method">
            <div className="quality-auto"><span>悟空准备</span>{["提取型号 / 表现 / 场景", "客诉分类", "匹配相似历史问题", "查询批次与供应商", "生成整改任务草案", "形成客户回复建议"].map((item, i)=><p key={item}><b>{i+1}</b>{item}</p>)}</div>
            <div className="quality-gate"><span>专业判断</span><strong>风险等级</strong><strong>可能原因 / 根因</strong><strong>整改措施</strong></div>
            <div className="quality-output"><span>持续跟踪</span><p>责任人</p><p>完成时间</p><p>关闭证据</p></div>
          </div>
          <Boundary>“可能原因”不得未经确认转写为“已确认根因”</Boundary>
        </Slide>
      ),
    },
    {
      title: "质量闭环需要同时留下业务结果与执行证据",
      duration: "5 分钟",
      notes:
        "真实演示建议准备两张截图：客诉汇总或质量问题记录，以及整改任务或质量周报。客户回复涉及对外沟通，必须预览并由责任人确认。",
      content: (
        <Slide logo={logo} label={chapterLabel("质量闭环") } className="quality-proof-slide">
          <SlideTitle eyebrow="RESULT + EVIDENCE" title="质量闭环需要同时留下业务结果与执行证据" compact />
          <div className="quality-result-layout">
            <div className="quality-result-list">
              {["客诉分类与高频问题", "涉及型号、批次与风险等级", "整改责任人与完成时间", "客户回复建议", "管理层质量摘要"].map((item,i)=><div key={item}><span>0{i+1}</span><p>{item}</p></div>)}
              <div className="tool-line">DWS｜记录 · 任务 · 会议 · 通知　MCP｜工单 · ERP · QMS · PLM</div>
            </div>
            <EvidencePlaceholder id="S04" title="客诉汇总 / 整改任务 / 质量周报" detail="请提供脱敏后的真实界面，至少能证明问题分类、责任和关闭状态。" />
          </div>
        </Slide>
      ),
    },
    {
      title: "经营管理场景，优先从规则明确、结果可复核的工作切入",
      duration: "1 分钟",
      notes:
        "场景地图用于启发，不等同于已验证能力。请综管和财务各圈选一个高频、耗时且有明确规则的候选任务。",
      content: (
        <Slide logo={logo} label={chapterLabel("部门场景地图") }>
          <SlideTitle eyebrow="SCENARIO MAP · 经营管理" title="经营管理场景，优先从规则明确、结果可复核的工作切入" compact />
          <div className="department-map two-departments">
            <article><div className="department-name">综管</div><div className="scenario-cloud"><span>会议材料整理</span><span>制度问答</span><span>合同用印检查</span><span>固定资产盘点</span><span>采购需求汇总</span><span>跨部门待办</span></div><p>DWS：AI 表格 · 审批 · 日历 · 群聊 · 通讯录 · 文档</p></article>
            <article><div className="department-name">财务</div><div className="scenario-cloud"><span>预算执行分析</span><span>报销材料检查</span><span>应收回款跟踪</span><span>费用异常识别</span><span>毛利分析</span><span>经营报表</span></div><p>DWS：AI 表格 · 审批 · 群聊 · 通讯录 · 文档</p></article>
          </div>
          <Boundary>场景方向待业务部门确认，产品能力需逐项验证</Boundary>
        </Slide>
      ),
    },
    {
      title: "产品与研发场景，围绕需求—方案—上市节奏形成连续资产",
      duration: "1 分钟",
      notes:
        "小家电产品、厨电产品与研发有共享数据，也有不同专业判断。优先选择输入材料稳定、产出格式清晰的需求整理或项目报告。",
      content: (
        <Slide logo={logo} label={chapterLabel("部门场景地图") }>
          <SlideTitle eyebrow="SCENARIO MAP · 产品与研发" title="产品与研发场景，围绕需求—方案—上市节奏形成连续资产" compact />
          <div className="department-columns">
            <article><h3>小家电产品</h3><p>市场需求汇总</p><p>新品立项材料</p><p>竞品对比</p><p>生命周期分析</p><small>可能连接：PLM · ERP · 市场信息</small></article>
            <article className="department-featured"><h3>厨电产品</h3><p>需求与规格定义</p><p>成本目标检查</p><p>上市节奏跟踪</p><p>产品迭代复盘</p><small>可能连接：PLM · ERP · QMS</small></article>
            <article><h3>研发</h3><p>需求文档整理</p><p>技术问题归类</p><p>测试问题汇总</p><p>量产问题分析</p><small>可能连接：PLM · 测试系统</small></article>
          </div>
          <Boundary>候选系统仅作连接方向，不代表已接入</Boundary>
        </Slide>
      ),
    },
    {
      title: "供应链、质量与服务，应围绕风险发现和闭环速度选场景",
      duration: "1 分钟",
      notes:
        "三类部门共享产品、批次、供应商与问题数据。优先选择可验证的汇总、预警、分类和跟踪，不直接把模型建议当作采购、质量或服务决策。",
      content: (
        <Slide logo={logo} label={chapterLabel("部门场景地图") }>
          <SlideTitle eyebrow="SCENARIO MAP · 交付保障" title="供应链、质量与服务，应围绕风险发现和闭环速度选场景" compact />
          <div className="risk-map">
            <article><span>供应链</span><h3>让交期风险更早暴露</h3><p>供应商比较 · 采购跟踪 · 库存预警 · 订单物流汇总</p><small>ERP · WMS · 物流 · 供应商系统</small></article>
            <article><span>质管</span><h3>让质量问题持续被追踪</h3><p>检验汇总 · 问题分类 · 供应商质量 · 整改任务 · 质量周报</p><small>QMS · ERP · PLM</small></article>
            <article><span>用服</span><h3>让服务经验持续复用</h3><p>工单分类 · 回复建议 · 备件统计 · 服务分析 · 知识问答</p><small>工单系统 · ERP · 知识库</small></article>
          </div>
          <Boundary>关键判断与对外回复必须由相应责任人确认</Boundary>
        </Slide>
      ),
    },
    {
      title: "品牌与渠道场景，先把“研究—内容—跟进”变成稳定节奏",
      duration: "2 分钟",
      notes:
        "本页信息较多，讲解时只要求每个部门圈选一个候选场景。外部市场、企业、投放、认证等数据需确认合法来源与接入方式。",
      content: (
        <Slide logo={logo} label={chapterLabel("部门场景地图") } className="sales-map-slide">
          <SlideTitle eyebrow="SCENARIO MAP · 品牌获客与渠道销售" title="品牌与渠道场景，先把“研究—内容—跟进”变成稳定节奏" compact />
          <div className="sales-map">
            <div className="sales-zone brand-zone"><span>品牌获客</span><article><b>品推</b><p>活动方案 · 内容选题 · 新品传播 · 复盘</p></article><article><b>社群营销</b><p>团购策划 · 选品分析 · 社群话术 · 活动复盘</p></article></div>
            <div className="sales-zone channel-zone"><span>渠道销售</span><article><b>小家电 B2B</b><p>客户调研 · 项目评审 · 报价材料</p></article><article><b>厨电 B2B</b><p>工程需求 · 选型 · 投标 · 交付跟踪</p></article><article><b>厨电大客户</b><p>客户分析 · 合作规划 · 风险跟踪</p></article><article><b>小家电海外</b><p>多语言沟通 · 样品订单 · 认证材料</p></article><article><b>小画仙</b><p>品牌经营 · 招商材料 · 销售库存</p></article></div>
          </div>
          <Boundary>场景用于共创启发，DWS、MCP 与权限范围均待逐项核对</Boundary>
        </Slide>
      ),
    },
    {
      title: "共同演示只做一件事：完整走通一个真实任务",
      duration: "6 分钟",
      notes:
        "共同演示建议使用新品上市场景。先展示最终目标和数据，再让客户观察悟空的计划、工具调用、确认点和结果。若网络或环境失败，应使用真实录屏或截图备份，而不是现场编造成功界面。",
      content: (
        <Slide logo={logo} label={chapterLabel("现场实操") } className="demo-slide">
          <SlideTitle eyebrow="ROUND 01 · 跟着做" title="共同演示只做一件事：完整走通一个真实任务" compact />
          <div className="demo-layout">
            <div className="demo-steps">
              {["输入任务", "选择 Skill", "选择资料", "查看计划", "查看 DWS 调用", "预览动作", "确认执行", "检查结果"].map((item,i)=><div key={item}><span>{String(i+1).padStart(2,"0")}</span><p>{item}</p></div>)}
            </div>
            <EvidencePlaceholder id="S05" title="悟空完整执行过程 / 录屏关键帧" detail="请提供共同演示环境的真实截图或短录屏：至少覆盖计划、工具调用、确认和结果。" />
          </div>
          <div className="bottom-statement">先建立“我能看懂、我能控制、我能复核”的使用信心</div>
        </Slide>
      ),
    },
    {
      title: "第二轮不照抄示例，每组换成自己的真实工作",
      duration: "10 分钟",
      notes:
        "按四条业务主线分组。每组选一个真实、高频、可验证任务，先不急着写 Skill。讲师巡回答疑，帮助把模糊诉求改写为目标、材料、规则和结果。",
      content: (
        <Slide logo={logo} label={chapterLabel("现场实操") } className="group-slide">
          <SlideTitle eyebrow="ROUND 02 · 换成自己的场景" title="第二轮不照抄示例，每组换成自己的真实工作" />
          <div className="group-grid">
            <article><span>01</span><h3>经营管理组</h3><p>综管 · 财务</p></article>
            <article><span>02</span><h3>产品交付组</h3><p>产品 · 研发 · 供应链 · 质管 · 用服</p></article>
            <article><span>03</span><h3>品牌获客组</h3><p>品推 · 社群营销</p></article>
            <article><span>04</span><h3>渠道销售组</h3><p>B2B · 大客户 · 海外 · 小画仙</p></article>
          </div>
          <div className="group-instruction"><strong>每组只选 1 个场景</strong><span>说清四件事</span><span>标出工具</span><span>标出确认点</span><span>定义验收结果</span></div>
        </Slide>
      ),
    },
    {
      title: "一张任务卡，把业务经验翻译成可建设的场景",
      duration: "4 分钟",
      notes:
        "请各组按顺序填写。对不知道的数据来源、系统能力或责任边界，直接写待确认。最后用一句话复述：在什么条件下，读取什么，按什么规则，输出什么，由谁确认。",
      content: (
        <Slide logo={logo} label={chapterLabel("现场实操") } className="worksheet-slide">
          <SlideTitle eyebrow="SCENARIO WORKSHEET" title="一张任务卡，把业务经验翻译成可建设的场景" compact />
          <div className="worksheet-grid">
            {["场景名称", "使用部门", "触发条件", "输入材料", "工作步骤", "业务规则", "Skill", "DWS", "MCP", "输出结果", "确认节点", "业务价值"].map((item,i)=><div key={item}><span>{String(i+1).padStart(2,"0")}</span><strong>{item}</strong></div>)}
          </div>
          <div className="worksheet-footer"><strong>复述模板</strong><p>当 ______ 时，悟空读取 ______，按照 ______ 完成 ______，并在 ______ 由 ______ 确认。</p></div>
        </Slide>
      ),
    },
    {
      title: "第一批 Skill，要从高频、耗时、规则明确的任务开始",
      duration: "2 分钟",
      notes:
        "用左侧七项做正向筛选，用右侧风险条件排除。价值高但规则不清的任务，可以先做信息整理和辅助判断，不要直接自动执行。",
      content: (
        <Slide logo={logo} label={chapterLabel("建设方法") }>
          <SlideTitle eyebrow="PRIORITIZATION" title="第一批 Skill，要从高频、耗时、规则明确的任务开始" compact />
          <div className="priority-layout">
            <article className="priority-yes"><span>优先选择</span><div>{["高频发生", "人工耗时", "输入明确", "步骤稳定", "有判断规则", "输出固定", "需要跨部门协同"].map(x=><p key={x}>✓ {x}</p>)}</div></article>
            <div className="priority-axis"><strong>先小后大</strong><span>可验证</span><span>可控风险</span></div>
            <article className="priority-no"><span>第一批暂缓</span><div>{["极低频特殊事项", "完全依赖专家临场判断", "数据来源不稳定", "权限边界不明确", "结果无法人工核验", "一开始就需复杂改造"].map(x=><p key={x}>— {x}</p>)}</div></article>
          </div>
        </Slide>
      ),
    },
    {
      title: "把业务 SOP 变成 Skill，需要业务、数字化、IT 与用户共同完成",
      duration: "2 分钟",
      notes:
        "业务部门拥有方法和规则，数字化团队负责工具与权限，IT 负责必要连接，最终用户用真实任务验证。任何一方单独建设都容易失真。",
      content: (
        <Slide logo={logo} label={chapterLabel("建设方法") }>
          <SlideTitle eyebrow="BUILD TOGETHER" title="把业务 SOP 变成 Skill，需要业务、数字化、IT 与用户共同完成" compact />
          <div className="build-road"><span>找场景</span><FlowArrow/><span>梳理流程</span><FlowArrow/><span>明确规则</span><FlowArrow/><span>确定工具</span><FlowArrow/><span>设置确认</span><FlowArrow/><span>测试优化</span><FlowArrow/><span>发布推广</span></div>
          <div className="role-grid">
            <article><b>业务部门</b><p>方法 · 规则 · 材料 · 验收</p></article>
            <article><b>数字化团队</b><p>工具 · 数据 · 权限 · 流程</p></article>
            <article><b>IT 团队</b><p>接口 · MCP · 系统接入</p></article>
            <article><b>最终用户</b><p>真实任务测试 · 反馈优化</p></article>
          </div>
        </Slide>
      ),
    },
    {
      title: "企业能力库不是 Skill 越多越好，而是每一项都有人负责",
      duration: "2 分钟",
      notes:
        "三层演进：个人先用通用 Skill，部门验证样板，企业再统一管理。进入企业能力库时应明确所有者、版本、权限、适用范围和验收方式。",
      content: (
        <Slide logo={logo} label={chapterLabel("建设方法") }>
          <SlideTitle eyebrow="CAPABILITY LIBRARY" title="企业能力库不是 Skill 越多越好，而是每一项都有人负责" compact />
          <div className="capability-pyramid">
            <div className="pyramid-top"><span>03</span><strong>企业能力库</strong><p>统一管理 Skill、连接、权限与案例</p></div>
            <div className="pyramid-middle"><span>02</span><strong>部门样板</strong><p>用真实任务验证高频方法</p></div>
            <div className="pyramid-base"><span>01</span><strong>个人任务</strong><p>从通用 Skill 开始建立使用习惯</p></div>
          </div>
          <div className="asset-criteria"><span>所有者</span><span>版本</span><span>权限</span><span>适用范围</span><span>验收方式</span></div>
        </Slide>
      ),
    },
    {
      title: "今天只需记住四句话，以及人的一项最终责任",
      duration: "2 分钟",
      notes:
        "请全场跟着复述四句话。最后停在“人负责什么”：提出目标、提供判断标准、授权关键动作、确认最终结果。",
      content: (
        <Slide logo={logo} label={chapterLabel("总结") } className="summary-slide">
          <SlideTitle eyebrow="FOUR SENTENCES" title="今天只需记住四句话，以及人的一项最终责任" compact />
          <div className="summary-layout">
            <div className="summary-lines">
              <p><span>悟空</span>理解目标，拆解和调度任务。</p>
              <p><span>Skill</span>把业务经验沉淀为标准方法。</p>
              <p><span>DWS</span>让悟空在钉钉中查询和执行。</p>
              <p><span>MCP</span>在需要时连接外部业务系统。</p>
            </div>
            <div className="summary-human"><Visual src={wukong} alt="钉钉悟空形象" className="wukong-summary" /><strong>人员</strong><p>提出目标 · 提供规则<br />授权动作 · 确认结果</p></div>
          </div>
        </Slide>
      ),
    },
    {
      title: "从一个真实任务开始，让悟空逐步进入业务",
      duration: "2 分钟",
      notes:
        "收口时明确下一步：每部门提交两个候选，筛选一个高价值场景，共创一个可演示 Skill 样板，再用真实材料测试复盘。不要把一次培训包装为完成企业级落地。",
      content: (
        <Slide logo={logo} label={chapterLabel("课后行动") } className="action-slide">
          <div className="action-copy"><div className="eyebrow">NEXT ACTION</div><h2>从一个真实任务开始，<br />让悟空逐步进入业务</h2><p>不追求一次覆盖所有部门，先跑通一个可验证、可复用的样板。</p></div>
          <div className="action-timeline">
            {[
              ["01", "各部门提交", "每部门 2 个候选场景"],
              ["02", "共同筛选", "选择 1 个高价值场景"],
              ["03", "梳理任务", "输入 · 步骤 · 规则 · 输出"],
              ["04", "明确边界", "DWS · MCP · 人工确认"],
              ["05", "共创样板", "用真实材料测试并复盘"],
            ].map(([n,title,copy])=><article key={n}><span>{n}</span><div><h3>{title}</h3><p>{copy}</p></div></article>)}
          </div>
          <div className="closing-line">下一步验收：一个能被真实业务人员复核的 Skill 样板</div>
        </Slide>
      ),
    },
  ];
}
