import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';
import './profile-fixes.css';

const rootPath = import.meta.env.BASE_URL;
const posters = ['封面图.jpg', '楚歌.jpg', '古战场.jpg', '心魔.jpg', '信物.jpg', '战斗.jpg', '破镜.jpg', '写信.jpg'];
const clips = [
  ['kling_20260501_作品_镜头_1_2s_大全_3482_0.mp4', '梦境启幕', '封面图.jpg'],
  ['kling_20260501_作品_镜头_1_2s_近景_3757_0.mp4', '近景凝视', '心魔.jpg'],
  ['kling_20260501_作品_定格___卷轴收束__3908_0.mp4', '卷轴收束', '结尾.jpg'],
  ['kling_20260501_作品_镜头_1_2s_快切_3857_0.mp4', '楚歌快切', '战斗.jpg'],
];

const questions = ['虞姬是谁？', '为何是一盏灯？', '你最想对项羽说什么？', '这个项目想表达什么？', 'AI 参与了哪些环节？', '完整成片如何完成？'];
const answers = {
  '虞姬是谁？': '我是楚汉相争故事里被反复讲述的虞姬。史书落笔很轻，后世却给了我漫长的回声。',
  '为何是一盏灯？': '灯是记忆，也是未说完的话。它逆流而来，让过去重新照进此刻。',
  '你最想对项羽说什么？': '愿你记得楚歌之外，还有人在灯下等过一个答案。',
  '这个项目想表达什么？': '它想让虞姬不只停留在诀别里，而成为一个拥有选择、记忆与目光的人。',
  'AI 参与了哪些环节？': 'AI 参与角色设定、分镜推演、画面生成与动态影像，Zoe 负责方向判断、筛选和叙事编排。',
  '完整成片如何完成？': '先确定“一灯照楚歌”的核心意象，再拆成镜头、生成画面、制作动态，最后完成声音与节奏剪辑。',
};

function App() {
  const [lightbox, setLightbox] = useState(null);
  const [messages, setMessages] = useState([
    { from: 'yuji', text: '若你问我，灯为何逆流而来？' },
    { from: 'zoe', text: '因为故事还没有结束。' },
  ]);
  const ask = (question) => setMessages((items) => [...items, { from: 'zoe', text: question }, { from: 'yuji', text: answers[question] }]);

  return <>
    <header className="nav"><a className="brand" href="#top">zoe's <i>space</i></a><nav><a href="#profile">角色介绍</a><a href="#works">作品案例</a><a href="#experience">互动体验</a><a href="#contact">联系方式</a></nav><span className="navMark">AI DESIGN / 01</span></header>
    <main>
      <section id="top" className="hero"><video className="heroVideo" autoPlay muted loop playsInline poster={`${rootPath}封面图.jpg`}><source src={`${rootPath}kling_20260501_作品_镜头_1_2s_叠化_3801_0.mp4`} type="video/mp4" /></video><div className="heroShade" /><div className="heroInner"><p className="eyebrow">AI DESIGNER / PRODUCT THINKER</p><h1>Zoe's<br /><span>数字幻境</span></h1><p className="heroCopy">我是 Zoe，一个还在不断试验的 AI 产品探索者。喜欢把新技术拆开、重组，再做成有趣、好用，也有一点想象力的体验。</p><a className="scrollCue" href="#project">向下探索 <b>↓</b></a></div><div className="heroStamp">Z / 2026<br />SCROLL TO ENTER</div></section>

      <section id="project" className="section projectOverview"><div className="sectionHead"><p className="eyebrow">01 / PROJECT OVERVIEW</p><h2>一灯照楚歌</h2><p className="intro">一个围绕虞姬展开的 AI 叙事营销实验。以“逆流而来的灯”为线索，把历史人物、东方情绪和当代影像语言连接起来。</p></div><div className="briefGrid"><article><span>01 / 内容</span><h3>角色新叙事</h3><p>不重复霸王别姬的既有结局，而是从虞姬的目光出发，重写记忆、选择与告别。</p></article><article><span>02 / 制作方式</span><h3>AI 影像工作流</h3><p>完成概念设定、分镜推演、画面生成、动态制作、配音与剪辑，形成完整短片和系列海报。</p></article><article><span>03 / 投放效果</span><h3>传播验证</h3><p>以完整成片、短镜头和视觉海报组成连续内容单元，用于验证历史人物年轻化表达在短视频场景中的吸引力。</p></article><article><span>04 / 最终目标</span><h3>可持续角色资产</h3><p>建立可继续扩展为互动问答、社交内容与数字角色体验的东方叙事原型。</p></article></div></section>

      <section id="profile" className="section profile"><div className="sectionHead"><p className="eyebrow">02 / CHARACTER</p><h2>角色介绍</h2><p className="intro">虞姬，楚汉相争时期西楚霸王项羽身边的女子。史书中的她寥寥数笔，却在后世的诗歌、戏曲与绘画中不断回返，成为忠贞、勇敢与诀别的象征。这个项目从“一灯照楚歌”出发，重新想象她在历史缝隙中的一瞬。</p></div><div className="profileGrid"><div className="profileVisual"><div className="profileImage"><img src={`${rootPath}封面图.jpg`} alt="虞姬全身角色视觉" /><div className="profileScan" /></div><div className="profileBadge"><span>CHARACTER / 01</span><strong>YU JI</strong><small>虞姬 · 数字角色档案</small></div><i className="profileIndex">01</i></div><div className="profileText"><span>AI PRODUCT EXPLORER</span><h3>让技术成为<br />可感知的叙事。</h3><p>我关注 AI 产品从模型能力到用户体验的完整链路：定义问题、设计交互、组织内容，并将抽象的智能转化为人可以理解和使用的界面。</p><div className="metrics"><div><strong>01</strong><small>产品策略</small></div><div><strong>02</strong><small>AI 体验</small></div><div><strong>03</strong><small>视觉叙事</small></div></div></div></div></section>

      <section id="works" className="section works"><div className="sectionHead wide"><p className="eyebrow">03 / SELECTED WORKS</p><h2>作品 / 案例</h2><h3>虞姬 - 一灯照楚歌 - AI营销案例</h3><p>以历史人物为核心的 AI 影像营销实验，从角色设定、分镜到完整成片，构建一套可传播的东方叙事。</p></div><article className="campaign"><div className="campaignVideo"><video controls preload="metadata" poster={`${rootPath}5月1日-封面.jpg`}><source src={`${rootPath}5月1日-web.mp4`} type="video/mp4" /></video></div><div className="campaignInfo"><p className="eyebrow">FULL CAMPAIGN FILM / 05.01</p><h3>一灯照楚歌</h3><p>完整营销案例视频</p><p className="muted">以一盏逆流而来的灯为线索，连接历史、角色与当代情绪。点击播放观看完整成片。</p></div></article><div className="videoGrid fourVideos">{clips.map(([src, title, poster]) => <article className="workCard" key={src}><video muted loop playsInline preload="metadata" poster={`${rootPath}${poster}`} onMouseEnter={(e) => e.currentTarget.play()} onMouseLeave={(e) => { e.currentTarget.pause(); e.currentTarget.currentTime = 0; }}><source src={`${rootPath}${src}`} type="video/mp4" /></video><div><span>AI VIDEO</span><h3>{title}</h3></div></article>)}</div><div className="posterGrid">{posters.map((poster) => <button className="poster" key={poster} onClick={() => setLightbox(`${rootPath}${poster}`)}><img src={`${rootPath}${poster}`} alt="虞姬营销案例海报" /></button>)}</div></section>

      <section id="experience" className="section experience"><div className="sectionHead"><p className="eyebrow">04 / INTERACTIVE Q&A</p><h2>与虞姬对话</h2><p>选择一个问题，听她讲述这段由历史与 AI 共同完成的梦。</p></div><div className="chat"><div className="chatTop"><span className="avatar yujiAvatar">虞</span><div><strong>虞姬</strong><small>梦境已连接</small></div><span className="online" /></div><div className="messages">{messages.map((item, index) => <div className={`messageRow ${item.from}`} key={`${item.text}-${index}`}><span className="avatar">{item.from === 'yuji' ? '虞' : 'Z'}</span><p>{item.text}</p></div>)}</div><div className="questionList">{questions.map((q) => <button key={q} onClick={() => ask(q)}>{q}<span>↗</span></button>)}</div></div></section>
    </main>
    <footer id="contact" className="footer"><div><p className="eyebrow">05 / CONTACT</p><h2>让我们创造<br /><em>下一场梦。</em></h2></div><address><a href="tel:+8613292198712">+86 13292198712</a><a href="mailto:22443007@zju.edu.cn">22443007@zju.edu.cn</a><span>AI DESIGNER / ZOE</span></address></footer>
    {lightbox && <div className="lightbox" onClick={() => setLightbox(null)}><button onClick={() => setLightbox(null)}>×</button><img src={lightbox} alt="全图预览" /></div>}
  </>;
}

createRoot(document.getElementById('root')).render(<App />);
