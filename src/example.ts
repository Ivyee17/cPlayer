import cplayer from "./lib";
import { IAudioItem } from "./lib/interfaces";
import cplayerView from "./lib/view";

require('./neko.css');
require('highlight.js/styles/ocean.css');

// const hljs = require('highlight.js/lib/highlight');
// const javascript = require('highlight.js/lib/languages/javascript');
// const xml = require('highlight.js/lib/languages/xml');
// hljs.registerLanguage('javascript', javascript);
// hljs.registerLanguage('xml', xml);

// hljs.initHighlightingOnLoad();

window.addEventListener("load",
  function () {
    function from163(id: string) {
      if (!id) throw new Error("Unable Property.");
      return fetch("https://music.huaji8.top/?id=" + id).then(function (res: any) { return res.json() }).then((data) => {
        let obj = {
          name: data.info.songs[0].name,
          artist: data.info.songs[0].ar.map(function (ar: any) { return ar.name }).join(','),
          poster: data.pic.url,
          lyric: data.lyric.lyric,
          sublyric: data.lyric.tlyric,
          src: data.url.url,
          album: data.info.songs[0].al.name
        }
        return obj;
      })
    }

    let playlist: IAudioItem[] = [
      {
        src: require('./example/music-1.mp3'),
        poster: require('./example/music-1.jpg'),
        name: 'チルドレンレコード',
        artist: '96猫,伊東歌詞太郎',
        lyric: '[00:28.12]白いイヤホンを耳にあて\n[00:30.51]少しニヤッとして合図する\n[00:32.74]染み込んだこの温度が\n[00:35.07]ドアをノックした瞬間に\n[00:37.47]溢れそうになるよ\n[00:38.97]「まだ視えない？」\n[00:39.81]目を凝らして臨む争奪戦\n[00:41.96]あの日躊躇した脳裏から\n[00:44.07]「今だ、取り戻せ」と\n[00:45.66]コードが鳴り出しそう\n[00:48.61]愛しくて、辛くて\n[00:51.39]世界を嫌ったヒトの\n[00:57.71]酷く理不尽な 「構成」\n[01:00.46]肯定していちゃ未来は生み出せない\n[01:04.98]少年少女前を向く\n[01:07.26]暮れる炎天さえ希望論だって\n[01:09.70]「ツレモドセ」\n[01:10.69]「ツレモドセ」\n[01:12.00]三日月が赤く燃え上がる\n[01:14.04]さぁさぁ、コードを0で刻め\n[01:16.54]想像力の外側の世界へ\n[01:18.86]オーバーな空想戦線へ\n[01:29.87]「お先にどうぞ」って舌を出す\n[01:32.28]余裕ぶった無邪気な目\n[01:34.50]「ほら出番だ」パスワードで\n[01:36.79]目を覚ましたじゃじゃ馬は止まらない\n[01:39.25]もう夜が深くなる\n[01:41.21]「オコサマ」なら燃える延長戦\n[01:43.64]逆境ぐあいがクールだろ\n[01:45.80]寝れないねまだまだ\n[01:47.30]ほら早く！早く\n[01:48.66]イン?テンポで視線を合わせて\n[01:50.81]ハイタッチでビートが鳴り出せば\n[01:52.95]考えてちゃ遅いでしょう\n[01:55.05]ほらノっかってこうぜ\n[01:56.93]ワンコードで視線を合わせて\n[01:59.78]ぶっ飛んだグルーヴが渦巻けば\n[02:02.05]冗談じゃない見えるはず\n[02:04.02]そのハイエンドの風景の隙間に\n[02:06.75]さぁどうだい\n[02:07.76]この暑さも\n[02:08.73]すれ違いそうだった価値観も\n[02:10.93]「悪くないかな」\n[02:12.08]目を開き 手を取り合ったら\n[02:15.84]案外チープな言葉も\n[02:17.69]「合い言葉だ」って言い合える\n[02:19.97]少しだけ前を向ける\n[02:24.75]少年少女、前を向く\n[02:26.91]揺れる炎天すら希望論だって\n[02:29.26]思い出し、口に出す\n[02:31.52]不可思議な出会いと別れを\n[02:34.03]「ねぇねぇ、突飛な世界のこと\n[02:36.13]散々だって笑い飛ばせたんだ」\n[02:38.49]合図が終わる\n[02:40.71]少年少女前を向け\n[02:43.06]眩む炎天すら希望論だって\n[02:45.44]「ツカミトレ」\n[02:46.50]「ツカミトレ」と\n[02:47.71]太陽が赤く燃え上がる\n[02:49.77]さぁさぁ、コールだ。\n[02:51.34]最後にしよう\n[02:52.49]最善策はその目を見開いた\n[02:54.75]オーバーな妄想戦線\n[02:56.71]感情性のメビウスの先へ\n',
        sublyric: '[00:28.12]戴上白色耳机\n[00:30.51]稍微扬起嘴角做出信号\n[00:32.74]渗入体内的这个温度\n[00:35.07]在敲门的那一瞬间\n[00:37.47]也要满溢出来了\n[00:38.97] 「还看不见吗？」\n[00:39.81]凝视面对这场争夺战\n[00:41.96]那天在犹豫的脑袋中\n[00:44.07]「就是现在，拿回来吧」\n[00:45.66]似乎响起了这样的信号\n[00:48.61]深爱著，煎熬著\n[00:51.39]讨厌著世界的人的\n[00:57.71]残酷无道理的「构成」\n[01:00.46]如果承认了就没有未来可言\n[01:04.98]少年少女前进吧\n[01:07.26]连垂暮的炽热烈日都成了希望论\n[01:09.70]「带回来吧」\n[01:10.69]「带回来吧」\n[01:12.00]赤红新月高高燃起\n[01:14.04]来吧来吧，刻上0的记号\n[01:16.54]前往超乎想像的世界\n[01:18.86] 前往超载的空想战线\n[01:29.87]「你先吧」吐出舌头\n[01:32.28]表示还有馀裕的天真眼神\n[01:34.50]「好了登场吧」的密码\n[01:36.79]醒来的悍马停不下来\n[01:39.25]夜已深\n[01:41.21] 「小孩」进行斗志高昂延长赛\n[01:43.64]身陷逆境听起来很酷吧？\n[01:45.80]还睡不著呢 \n[01:47.30]好了快一点！快一点！\n[01:48.66]抓准节拍(in tempo)对上视线\n[01:50.81]击掌打出响亮节奏(beat)\n[01:52.95]思考的话不就太慢了吗？\n[01:55.05]好了敲响门铃吧\n[01:56.93]一个信号(one code)对上视线\n[01:59.78]飞跃的轨迹(groove)也卷起漩涡\n[02:02.05]别开玩笑了应该看得到吧\n[02:04.02]从那高级奢侈(high end)的风景缝隙间\n[02:06.75]觉得怎么样呢？\n[02:07.76]份燥热也 \n[02:08.73]貌似碰巧的价值观也\n[02:10.93]「不算太糟呐」 \n[02:12.08]睁开眼睛，相互握手之後\n[02:15.84]廉价的话语也意外能\n[02:17.69]「是暗语喔」的互相说着\n[02:19.97]能稍微地向前行\n[02:24.75]少年少女前进吧\n[02:26.91]连晃动的炽热夏日都成了希望论\n[02:29.26]回想起来，缓缓道出\n[02:31.52]那不可思议的相遇与离别\n[02:34.03]「呐呐，那飞跃的世界的事情\n[02:36.13] 虽然悲惨但就笑一笑让它过去吧」\n[02:38.49]信号终止\n[02:40.71]少年少女前进吧 \n[02:43.06]连眩目的炽热夏日都成了希望论\n[02:45.44] 「紧抓住吧」\n[02:46.50]「紧抓住吧」\n[02:47.71]赤红烈日高高燃起\n[02:49.77]来吧来吧，在呼唤我们了\n[02:51.34]努力到最後吧\n[02:52.49]上上策张开了那个眼睛\n[02:54.75]超载的妄想战线\n[02:56.71]朝向感性的梅比斯环的前方',
        album: 'アイリス'
      },
      {
        src: require('./example/music-2.mp3'),
        poster: require('./example/music-2.png'),
        name: 'ひねくれネジと雨',
        artist: 'ねこぼーろ',
        lyric: '[by:吃土少女Z]\n[00:00.00] 作曲 : ねこぼーろ\n[00:01.00] 作词 : ねこぼーろ\n[00:35.07]「ねえ 鼓膜 溶ける感覚\n[00:39.73]指の 先で 光る体温\n[00:45.13]僕は 未だ わからないよ」\n[00:50.50]\n[00:51.00]時が経てば 忘れてしまう\n[00:55.50]いつかの君も 色褪せてしまう\n[01:00.96]でも僕は 未だ、「忘れないよ」\n[01:06.78]\n[01:07.44]まわる まわる 世界は\n[01:09.71]僕の事など無視をして\n[01:12.78]何も知らずに そっと\n[01:15.10]僕の心 錆び付かせる\n[01:18.16]もう君を守るなんて言えないな\n[01:22.94]\n[01:23.44]こわれ こわれる 僕は\n[01:25.92]誰も 信じられなくなる\n[01:28.96]「誰も知らずに そっと\n[01:31.30]雨に溶けて 無くなる」とか\n[01:34.33]ああそんなふざけた事 言えないな ああ\n[01:41.10]\n[01:45.19]ああ 鼓膜 突き破る赤\n[01:49.52]頭の裏で 溶けてなくなる\n[01:54.90]そう僕はまだ 聴こえ「ないよ」\n[02:00.99]\n[02:01.35]まわる まわる 世界は\n[02:03.65]僕の事など無視をして\n[02:06.73]何も知らずに そっと\n[02:09.06]僕の鼓動 錆び付かせる\n[02:12.06]もう君を見る事無く消えたいな ああ\n[02:18.19]\n[02:31.74]\n[02:33.74]相対 曖昧な 返答でごまかし\n[02:39.09]大体 反対な 顔を作る\n[02:44.49]後悔 先に立たずだ\n[02:48.55]\n[02:49.98]―nonsense―\n[03:20.32]\n[03:22.32]まわる まわる 世界は\n[03:24.57]僕の事など無視をして\n[03:27.60]何も知らずに そっと\n[03:29.92]僕の心 錆び付かせる\n[03:32.93]「もう君を守るなんて言えないな」\n[03:37.84]\n[03:38.55]こわれ こわれる 僕は\n[03:40.78]誰も 信じられなくなる\n[03:43.77]「誰も知らずに そっと\n[03:46.11]雨に溶けて 無くなる」とか\n[03:49.20]ああそんなふざけた事言えないな\n[03:53.88]\n[03:54.64]ああ\n[03:55.81]まわる\n[03:56.33]まわる\n[03:56.96]まわるまわる\n[03:58.26]まわるまわるまわる\n[04:00.95]これで終わる落ちる目眩だ\n[04:04.67]ああ ああ ああ ああ ああ\n[04:12.14]\n',
        sublyric: '[by:Tsumugi-mio]\n[00:24.23]\n[00:35.07]呐呐 鼓膜 快要融化的感觉\n[00:39.73]指尖 前面 是那光芒的体温\n[00:45.13]现在 的我 还未曾知晓\n[00:51.00]我即将要忘记 那遥远的时光\n[00:55.50]总有一天你也 将会褪去颜色\n[01:00.96]「但是现在的我还 没有 忘记哟」\n[01:07.44]回转的 回转的 这个世界将我全然无视\n[01:09.71]就像什么都不知道一样\n[01:12.78]悄悄地\n[01:15.10]我的心生锈\n[01:18.16]「会守护你的」\n[01:23.44]这句话已经说不出口\n[01:25.92]谁也不会相信\n[01:28.96]悄悄地\n[01:31.30]像雨一样融化掉\n[01:34.33]像这样不可能的事情 我是说不出口的\n[01:45.19]啊啊 扎破 鼓膜的赤红颜色\n[01:49.52]头脑里面 就像要溶化了一样\n[01:54.90]这样的我 再一次变得「听不见了」\n[02:01.35]回转的 回转的 这个世界将我全然无视\n[02:03.65]就像什么都不知道一样\n[02:06.73]悄悄地\n[02:09.06]让我的心最后的跳动生锈\n[02:12.06]你的事情已经像开始就不存在一般消失掉了啊\n[02:33.74]暧昧的回答 那才是谎话\n[02:39.09]你做出的大致都\n[02:44.49]是反对的神情呢\n[02:49.98]- - - - - - - -\n[03:22.32]回转的 回转的 这个世界将我全然无视\n[03:24.57]就像什么都不知道一样\n[03:27.60]悄悄地\n[03:29.92]使我的心生锈\n[03:32.93]「会守护你的」\n[03:38.55]这句话已经说不出口\n[03:40.78]快要坏掉 快要坏掉的\n[03:43.77]谁也不知道 悄悄地\n[03:46.11]像雨一样融化掉 消失不见\n[03:49.20]之类的像这样不可能的事情 说不出口\n[03:54.64]啊啊\n[03:55.81]回转着\n[03:56.33]回转着\n[03:56.96]回转回转着\n[03:58.26]回转着回转着回转着\n[04:00.95]终末时遗留下的头晕\n[04:04.67]啊啊 啊啊 啊啊 啊啊\n',
        album: 'TEXT'
      },
      // {
      //   src: require('./example/music-3.mp3'),
      //   poster: require('./example/music-3.jpg'),
      //   name: 'In my room',
      //   artist: 'FELT',
      //   album: 'Grow Color'
      // },
      // {
      //   src: require('./example/video-1.mp4'),
      //   poster: require('./example/video-1.png'),
      //   name: 'ボーカロイドたちがただﾃｯﾃｰﾃﾚｯﾃｰするだけ',
      //   type: 'video'
      // }
    ];

    const options = {
      zoomOutKana: true,
      volume: 0.75,
      dropDownMenuMode: 'top'
    };

    let players = [ new cplayer({
      ...options,
      playlist: playlist.push(playlist.shift()) && playlist,
      element: document.getElementById('app'),
    }),new cplayer({
      ...options,
      playlist: playlist.push(playlist.shift()) && playlist,
      element: document.getElementById('app4'),
      big: true
    })];

    (window as any).cplayerView = cplayerView;

    // document.getElementById('add163').addEventListener("click", () => {
    //   let id163 = prompt('输入音乐的网易云ID:', '').trim();
    //   if (id163) {
    //     from163(id163).then(audio => {
    //       players.forEach(player => {
    //         player.view.showPlaylist();
    //         setTimeout(() => {
    //           player.add(audio);
    //         }, 500);
    //       })
    //     })
    //   }
    // });

    // document.getElementById('openplaylist').addEventListener("click", (e) => {
    //   players.forEach(player => player.view.showPlaylist());
    // });

    // document.getElementById('closeplaylist').addEventListener("click", (e) => {
    //   players.forEach(player => player.view.showInfo());
    // });

    // document.getElementById('remove').addEventListener("click", (e) => {
    //   players.forEach(player => player.view.showPlaylist());
    //   setTimeout(() => {
    //     players.forEach(player => player.remove(player.playlist[player.playlist.length - 1]));
    //   }, 600)
    // });

    players[0].on('ended', () =>{
      console.log('Event: ended');
    }).on('play', () => {
      console.log('Event: play');
    }).on('pause', () => {
      console.log('Event: pause');
    }).on('playmodechange', () => {
      console.log('Event: playmodechange');
    }).on('openaudio', () => {
      console.log('Event: openaudio');
    }).on('playstatechange', () => {
      console.log('Event: playstatechange');
    }).on('started', () => {
      console.log('Event: started');
    });

    (window as any).demoPlayer = players[0];
    (window as any).demoPlayers = players;
    (window as any).playlist = playlist;
  }
)