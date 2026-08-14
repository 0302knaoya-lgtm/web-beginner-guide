"use client";

import { useState } from "react";

const sampleCode = `<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>わたしの最初のページ</title>
  <style>
    body {
      font-family: sans-serif;
      max-width: 640px;
      margin: 80px auto;
      padding: 0 24px;
      background: #f4f0e7;
      color: #172023;
    }
    h1 { color: #5b57d9; }
    button { padding: 12px 18px; cursor: pointer; }
  </style>
</head>
<body>
  <h1>こんにちは、Web！</h1>
  <p>これは、わたしが作った最初のページです。</p>
  <button id="hello">クリックしてみる</button>

  <script>
    document.querySelector('#hello').addEventListener('click', () => {
      alert('JavaScriptが動きました！');
    });
  </script>
</body>
</html>`;

const lessons = [
  { num: "01", tag: "STRUCTURE", title: "HTML", icon: "</>", className: "html-card", text: "見出し、文章、画像など、ページの「中身と骨組み」をつくります。", sample: "<h1>こんにちは！</h1>" },
  { num: "02", tag: "STYLE", title: "CSS", icon: "#", className: "css-card", text: "色、余白、文字サイズなど、ページの「見た目」を整えます。", sample: "h1 { color: blue; }" },
  { num: "03", tag: "ACTION", title: "JavaScript", icon: "JS", className: "js-card", text: "クリックへの反応など、ページに「動きと機能」を加えます。", sample: "alert('こんにちは！');" },
];

export default function Home() {
  const [copied, setCopied] = useState(false);

  async function copyCode() {
    await navigator.clipboard.writeText(sampleCode);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1800);
  }

  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Webのはじめかた ホーム">
          <span className="brand-mark">W</span><span>Webのはじめかた</span>
        </a>
        <nav aria-label="メインナビゲーション">
          <a href="#basics">3つの基本</a><a href="#practice">ミニ制作</a><a href="#roadmap">ロードマップ</a><a href="#glossary">用語集</a>
        </nav>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow">はじめてのWeb開発</p>
          <h1>Webページは、<br /><span>3つの言葉</span>でできている。</h1>
          <p className="lead">HTMLで骨組みをつくり、CSSで見た目を整え、JavaScriptで動きを加える。まずは全体像をつかんで、小さなページを公開するところまで進みましょう。</p>
          <a className="primary-button" href="#basics">10分で基本をつかむ <span aria-hidden="true">↓</span></a>
          <p className="hero-note">専門知識ゼロでOK · パソコン1台から始められます</p>
        </div>
        <div className="browser-card" aria-label="Webページを構成するコードの例">
          <div className="browser-bar"><i /><i /><i /><div className="address">my-first-page.html</div></div>
          <div className="code-window">
            <p><b>01</b> <span className="code-blue">&lt;h1&gt;</span>こんにちは！<span className="code-blue">&lt;/h1&gt;</span></p>
            <p><b>02</b> <span className="code-pink">h1</span> &#123; <span className="code-green">color</span>: #5955d9; &#125;</p>
            <p><b>03</b> <span className="code-yellow">console</span>.log(<span className="code-string">&quot;できた！&quot;</span>);</p>
          </div>
          <div className="preview-window"><span className="preview-label">PREVIEW</span><strong>こんにちは！</strong><span className="cursor-dot" /></div>
        </div>
      </section>

      <section className="basics" id="basics">
        <div className="section-heading"><p className="eyebrow">THE BIG THREE</p><h2>まず覚える、3つの基本</h2><p>難しい名前に見えても、役割はとてもシンプルです。</p></div>
        <div className="basic-grid">
          {lessons.map((item) => (
            <article className={`basic-card ${item.className}`} key={item.title}>
              <span className="card-number">{item.num}</span><div className="icon-box">{item.icon}</div><p className="card-tag">{item.tag}</p><h3>{item.title}</h3><p>{item.text}</p><code>{item.sample}</code>
            </article>
          ))}
        </div>
        <div className="analogy"><span className="analogy-icon">⌂</span><div><strong>家づくりに例えると</strong><p>HTMLは柱や壁、CSSは色やインテリア、JavaScriptは照明や自動ドア。3つが組み合わさって、使えるWebページになります。</p></div></div>
      </section>

      <section className="how-web section-shell">
        <div className="section-heading left"><p className="eyebrow">HOW THE WEB WORKS</p><h2>ページが届くまで</h2><p>URLを入力してから表示されるまでは、たった4ステップです。</p></div>
        <ol className="flow" aria-label="Webページ表示の流れ">
          <li><span>1</span><b>URLを入力</b><small>ブラウザに住所を伝える</small></li><li className="flow-arrow">→</li>
          <li><span>2</span><b>リクエスト</b><small>サーバーへお願いを送る</small></li><li className="flow-arrow">→</li>
          <li><span>3</span><b>レスポンス</b><small>HTMLなどが返ってくる</small></li><li className="flow-arrow">→</li>
          <li><span>4</span><b>画面に表示</b><small>ブラウザが組み立てる</small></li>
        </ol>
        <p className="flow-note">ブラウザ：ChromeやSafariなど、ページを表示するアプリ　／　サーバー：ページのデータを保管して届けるコンピューター</p>
      </section>

      <section className="practice" id="practice">
        <div className="section-shell practice-grid">
          <div className="practice-copy"><p className="eyebrow">LET&apos;S BUILD</p><h2>最初の1ページを<br />作ってみよう</h2><p>右のコードをコピーし、テキストエディタに貼り付けて <code>index.html</code> という名前で保存します。ファイルをダブルクリックすれば、ブラウザに表示されます。</p>
            <ol className="check-list"><li><b>1</b><span>メモ帳やVS Codeを開く</span></li><li><b>2</b><span>コードを貼り付ける</span></li><li><b>3</b><span><code>index.html</code> で保存する</span></li><li><b>4</b><span>ブラウザで開いてボタンを押す</span></li></ol>
            <div className="success-box"><span>✓</span><p><strong>成功の目印</strong><br />見出しが紫色になり、ボタンを押すと小さなメッセージが出れば完成です。</p></div>
          </div>
          <div className="editor-card">
            <div className="editor-head"><span>index.html</span><button type="button" onClick={copyCode} aria-live="polite">{copied ? "コピーしました ✓" : "コードをコピー"}</button></div>
            <pre><code>{sampleCode}</code></pre>
          </div>
        </div>
      </section>

      <section className="tools section-shell">
        <div className="section-heading"><p className="eyebrow">STARTER KIT</p><h2>最初に用意するもの</h2><p>高価なソフトは不要。どれも無料で始められます。</p></div>
        <div className="tool-grid">
          <article><span className="tool-icon">⌨</span><div><p className="card-tag">WRITE</p><h3>テキストエディタ</h3><p>コードを書くアプリ。まずはVS Codeが定番です。</p></div></article>
          <article><span className="tool-icon">◎</span><div><p className="card-tag">VIEW</p><h3>Webブラウザ</h3><p>ページを表示して確認。ChromeやSafariでOK。</p></div></article>
          <article><span className="tool-icon">▱</span><div><p className="card-tag">ORGANIZE</p><h3>作業フォルダ</h3><p>HTML、CSS、画像をひとまとめにして管理します。</p></div></article>
        </div>
      </section>

      <section className="roadmap" id="roadmap">
        <div className="section-shell"><div className="section-heading left"><p className="eyebrow">4-WEEK ROADMAP</p><h2>迷わない学習の順番</h2><p>毎日30〜60分。完璧を目指さず、作りながら覚えましょう。</p></div>
          <div className="weeks">
            <article><span>WEEK 01</span><h3>HTMLで中身をつくる</h3><ul><li>見出し・文章・リンク</li><li>画像・リスト・フォーム</li><li>意味のあるタグの使い方</li></ul><em>ゴール：自己紹介ページ</em></article>
            <article><span>WEEK 02</span><h3>CSSで見た目を整える</h3><ul><li>色・文字・余白</li><li>Flexboxで横並び</li><li>スマホ対応の考え方</li></ul><em>ゴール：見やすい紹介サイト</em></article>
            <article><span>WEEK 03</span><h3>JavaScriptで動かす</h3><ul><li>変数・条件分岐・関数</li><li>クリックイベント</li><li>HTMLを書き換えるDOM</li></ul><em>ゴール：簡単なクイズ</em></article>
            <article><span>WEEK 04</span><h3>公開して改善する</h3><ul><li>Git・GitHubの基本</li><li>無料サービスで公開</li><li>他の人に使ってもらう</li></ul><em>ゴール：URLを共有する</em></article>
          </div>
        </div>
      </section>

      <section className="trouble section-shell">
        <div className="section-heading"><p className="eyebrow">WHEN YOU GET STUCK</p><h2>動かないときの確認リスト</h2></div>
        <div className="trouble-grid">
          <details><summary><span>01</span>保存した？</summary><p>変更後はまず保存。エディタのタブに丸印があれば、まだ保存されていない合図です。</p></details>
          <details><summary><span>02</span>ファイル名は正しい？</summary><p><code>index.html.txt</code> ではなく <code>index.html</code> になっているか確認します。</p></details>
          <details><summary><span>03</span>記号が抜けていない？</summary><p>閉じタグ、丸かっこ、波かっこ、引用符が左右そろっているかを確認します。</p></details>
          <details><summary><span>04</span>ブラウザを更新した？</summary><p>保存しただけでは古い表示のまま。再読み込みボタンを押して確認します。</p></details>
        </div>
        <p className="encourage">エラーは「失敗」ではなく、直す場所を教えてくれるヒントです。</p>
      </section>

      <section className="glossary" id="glossary">
        <div className="section-shell"><div className="section-heading left"><p className="eyebrow">MINI GLOSSARY</p><h2>最初に出会う用語</h2></div>
          <dl>
            <div><dt>タグ</dt><dd><code>&lt;h1&gt;</code> のように、HTMLで要素の意味を示す印。</dd></div>
            <div><dt>要素</dt><dd>見出しや文章など、ページを構成するひとつひとつの部品。</dd></div>
            <div><dt>属性</dt><dd>リンク先など、タグへ追加情報を渡すもの。</dd></div>
            <div><dt>クラス</dt><dd>CSSを当てる要素に付ける、再利用できる名前。</dd></div>
            <div><dt>レスポンシブ</dt><dd>スマホやPCなど、画面幅に合わせて表示を変える設計。</dd></div>
            <div><dt>デバッグ</dt><dd>不具合の原因を見つけて、正しく動くように直す作業。</dd></div>
          </dl>
        </div>
      </section>

      <section className="final-cta"><p className="eyebrow">READY?</p><h2>あなたの「作ってみたい」が、<br />いちばん良い教材です。</h2><p>小さく作る → ブラウザで見る → ひとつ直す。<br />この繰り返しが、Web開発の基本です。</p><a className="primary-button light" href="#practice">最初のページを作る <span>↑</span></a></section>
      <footer><a className="brand" href="#top"><span className="brand-mark">W</span><span>Webのはじめかた</span></a><p>作りながら、少しずつ。はじめてのWeb開発ガイド。</p></footer>
    </main>
  );
}
