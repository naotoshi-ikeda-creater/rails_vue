<template>
  <body>
    <div class="warpper">
      <div class="top">
        <div class="top_content">
          <h1>About this page</h1>
          <p>
            このウェブサイトは、池田尚駿の自己紹介、ならびに作成アプリケーションの<br />紹介を行うサイトです。
          </p>
        </div>
      </div>

      <div class="middle">
        <div class="middle_content">
          <div class="middle_texts">
            <h1>About me</h1>
            <h3 class="self-intro">自己紹介</h3>
            <ul>
              <li>氏名：池田尚駿</li>
              <li>現在職：早稲田大学商学部1年</li>
              <li>趣味：映画鑑賞</li>
            </ul>
            <h3 class="background">経歴</h3>
            <ul>
              <li>浜松西高校で3年間全てを野球に捧げる。</li>
              <li>慶應野球部に入るために、受験勉強を開始する。</li>
              <li>
                受験に不合格ののち、浪人。勉強していく中で人生について考え、野球を辞めることを決意。
              </li>
              <li>
                早稲田大に入学2ヶ月後、インターンとして新規事業に関わらせてもらう。(Vue.js,Swift)
              </li>
              <li>別のブロックチェーン会社でインターンをさせてもらう。</li>
              <li>独学でバックエンド言語を学習する。</li>
            </ul>
            <h3 class="language">学習中言語</h3>
            <ul>
              <li>Ruby on Rails,Vue.js,Go,Swift</li>
            </ul>
          </div>
        </div>
      </div>

      <div class="last">
        <div class="last_content">
          <h1>About myapp</h1>
          <div class="last_texts">
            <h2>「タスク管理アプリ」</h2>
            <h3 class="servise">サービス概要</h3>
            <p>
              簡単なtodoリスト。作成と削除が可能。今後、アップデートしていきます。
            </p>
            <h3 class="development">開発環境</h3>
            <p>
              APIとフロントエンドを切り離して開発しました。環境構築はDockerを使用しました。
            </p>
            <ul>
              <li>Frontend:Vue.js</li>
              <li>Backend(API):Ruby on Rails</li>
            </ul>
            <br />
            <p>＊上部メニューボタンから「Tasklist」クリックしてください。</p>
          </div>
        </div>
      </div>
    </div>
  </body>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  components: {
    HelloWorld
  }
};
</script>

<style lang="css">
p,
h1,
.top,
.middle {
  margin: 0px;
  padding: 0px;
}

.warpper {
  width: 100%;
  height: auto;
}

.top {
  background-image: url("/static/blue.jpeg");
  height: 100vh;
  background-size: auto 123%;
  background-position: center;
}

.top p {
  text-align: center;
  padding: 40px;
  color: black;
  font-family: "ヒラギノ角ゴシック";
  font-weight: bold;
}

.top_content,
.middle_content,
.last_content {
  width: 60%;
  margin: 0 auto;
  padding-top: 230px;
}

.middle_content {
  background-color: rgba(23, 26, 15, 0.8);
  width: 83%;
  height: 100%;
}

.top_content h1 {
  text-align: center;
  font-size: 4em;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
}
.top_content {
  background-color: rgba(244, 245, 241, 0.8);
  background-position: center;
  width: 83%;
  height: 100%;
}

.middle {
  background-image: url("/static/free.jpeg");
  height: 100vh;
  background-size: auto 123%;
  background-position: center;
}

.middle-content {
  padding-top: 20px;
}

.middle h1,
ul,
h3 {
  color: #ffffff;
}

.middle_texts {
  padding-left: 165px;
}

.middle_content h1 {
  font-size: 2.2em;
}

.last {
  background-image: url("/static/life!.jpeg");
  height: 100vh;
  background-size: auto 123%;
  background-position: center;
}

.last_content ul,
.last_content h1,
.last_content p,
.last_content h2,
.last_content h3 {
  color: #ffffff;
}

.last_content {
  padding-left: 12%;
}
.last_content p {
  font-size: 1.1em;
}

.last_content h1 {
  font-size: 2.2em;
}

.last_content h2 {
  font-size: 2em;
}

.last_content {
  background-color: rgba(53, 37, 46, 0.8);
  width: 83%;
  height: 100%;
}

.last_texts {
  padding-top: 20px;
}

.background,
.language,
.self-intro {
  padding: 20px;
}

.servise,
.development {
  padding-top: 15px;
  font-weight: bold;
}
</style>
