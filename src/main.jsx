import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';

const rootPath = '/';
const posters = ['封面图.jpg', '楚歌.jpg', '古战场.jpg', '心魔.jpg', '信物.jpg', '战斗.jpg', '破镜.jpg', '写信.jpg', '结尾.jpg'];
const clips = [
  ['kling_20260501_作品_镜头_1_2s_大全_3482_0.mp4', '梦境启幕'],
  ['kling_20260501_作品_镜头_1_2s_近景_3757_0.mp4', '近景凝视'],
  ['kling_20260501_作品_定格___卷轴收束__3908_0.mp4', '卷轴收束'],
];

function App() {
  const [lightbox, setLightbox] = useState(null);
  const [messages, setMessages] = useState([{ from: 'yuji', text: '若你问我，灯为何逆流而来？' }, { from: 'zoe', text: '因为故事还没有结束。' }]);
  const questions = ['虞姬是谁？', '这个项目想表达什么？', '你如何使用 AI 完成创作？'];
  const answers = {
    '虞姬是谁？': '她是楚汉相争时期项羽身边的虞姬，后世以“虞兮”之歌记住她的忠贞与决绝。',
    '这个项目想表达什么？': '我用一盏灯作为叙事线索，让虞姬从历史人物变成一段可被当代观看的情绪记忆。',
    '你如何使用 AI 完成创作？': '从概念、分镜、角色设定到动态影像，我把 AI 当作创作系统，持续进行视觉判断与产品化编排。',
  };
  const ask = (question) => setMessages((items) => [...items, { from: 'zoe', text: question }, { from: 'yuji', text: answers[question] }]);
  return <>
    <header className="nav"><a className="brand" href="#top">zoe's <i>space</i></a><nav><a href="#profile">角色介绍</a><a href="#works">作品案例</a><a href="#experience">互动体验</a><a href="#contact">联系方式</a></nav><span className="navMark">AI DESIGN / 01</span></header>
    <main>
      <section id="top" className="hero"><video className="heroVideo" autoPlay muted loop playsInline poster={`${rootPath}封面图.jpg`}><source src={`${rootPath}kling_20260501_作品_镜头_1_2s_叠化_3801_0.mp4`} type="video/mp4" /></video><div className="heroShade" /><div className="heroInner"><p className="eyebrow">AI DESIGNER / PRODUCT THINKER</p><h1>ZOe<br /><span>的数字幻境</span></h1><p className="heroCopy">我是一名 AI 产品设计师，擅长把复杂的技术能力转译成清晰、可用且有情绪的产品体验。</p><a className="scrollCue" href="#profile">向下探索 <b>↓</b></a></div><div className="heroStamp">Z / 2026<br />SCROLL TO ENTER</div></section>
      <section id="profile" className="section profile"><div className="sectionHead"><p className="eyebrow">01 / CHARACTER</p><h2>角色介绍</h2><p className="intro">虞姬，楚汉相争时期西楚霸王项羽身边的女子。史书中的她寥寥数笔，却在后世的诗歌、戏曲与绘画中不断回返，成为忠贞、勇敢与诀别的象征。这个项目从“一灯照楚歌”出发，重新想象她在历史缝隙中的一瞬。</p></div><div className="profileGrid"><div className="profileImage"><img src={`${rootPath}虞姬.webp`} alt="虞姬角色" /></div><div className="profileText"><span>AI PRODUCT DESIGNER</span><h3>让技术成为<br />可感知的叙事。</h3><p>我关注 AI 产品从模型能力到用户体验的完整链路：定义问题、设计交互、组织内容，并将抽象的智能转化为人可以理解和使用的界面。</p><div className="metrics"><div><strong>01</strong><small>产品策略</small></div><div><strong>02</strong><small>AI 体验</small></div><div><strong>03</strong><small>视觉叙事</small></div></div></div></div></section>
      <section id="works" className="section works"><div className="sectionHead wide"><p className="eyebrow">02 / SELECTED WORKS</p><h2>作品 / 案例</h2><h3>虞姬 - 一灯照楚歌 - AI营销案例</h3><p>以历史人物为核心的 AI 影像营销实验，从角色设定、分镜到完整成片，构建一套可传播的东方叙事。</p></div><article className="campaign"><div className="campaignVideo"><video controls preload="metadata" poster={`${rootPath}5月1日-封面.jpg`}><source src={`${rootPath}5月1日.mp4`} type="video/mp4" /></video></div><div className="campaignInfo"><p className="eyebrow">FULL CAMPAIGN FILM / 05.01</p><h3>一灯照楚歌</h3><p>完整营销案例视频</p><p className="muted">以一盏逆流而来的灯为线索，连接历史、角色与当代情绪。点击播放观看完整成片。</p></div></article><div className="videoGrid">{clips.map(([src, title]) => <article className="workCard" key={src}><video muted loop playsInline preload="metadata" poster={`${rootPath}${title === '梦境启幕' ? '封面图.jpg' : title === '近景凝视' ? '心魔.jpg' : '结尾.jpg'}`} onMouseEnter={(e) => e.currentTarget.play()} onMouseLeave={(e) => { e.currentTarget.pause(); e.currentTarget.currentTime = 0; }}><source src={`${rootPath}${src}`} type="video/mp4" /></video><div><span>AI VIDEO</span><h3>{title}</h3></div></article>)}</div><div className="posterGrid">{posters.map((poster) => <button className="poster" key={poster} onClick={() => setLightbox(`${rootPath}${poster}`)}><img src={`${rootPath}${poster}`} alt="虞姬营销案例海报" /></button>)}</div></section>
      <section id="experience" className="section experience"><div className="sectionHead"><p className="eyebrow">03 / INTERACTIVE Q&A</p><h2>与虞姬对话</h2><p>选择一个问题，听她讲述这段由历史与 AI 共同完成的梦。</p></div><div className="chat"><div className="chatTop"><span className="avatar yujiAvatar">虞</span><div><strong>虞姬</strong><small>梦境已连接</small></div><span className="online" /></div><div className="messages">{messages.map((item, index) => <div className={`messageRow ${item.from}`} key={`${item.text}-${index}`}><span className="avatar">{item.from === 'yuji' ? '虞' : 'Z'}</span><p>{item.text}</p></div>)}</div><div className="questionList">{questions.map((q) => <button key={q} onClick={() => ask(q)}>{q}<span>↗</span></button>)}</div></div></section>
    </main>
    <footer id="contact" className="footer"><div><p className="eyebrow">04 / CONTACT</p><h2>让我们创造<br /><em>下一场梦。</em></h2></div><address><a href="tel:+8613292198712">+86 13292198712</a><a href="mailto:22443007@zju.edu.cn">22443007@zju.edu.cn</a><span>AI DESIGNER / ZOE</span></address></footer>
    {lightbox && <div className="lightbox" onClick={() => setLightbox(null)}><button onClick={() => setLightbox(null)}>×</button><img src={lightbox} alt="全图预览" /></div>}
  </>;
}

createRoot(document.getElementById('root')).render(<App />);
