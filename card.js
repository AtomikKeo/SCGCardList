class Card{
    constructor(name, kana, author, date, attr, text, effect){
        this.name = name;
        this.kana = kana;
        this.author = author;
        this.date = date;
        this.attr = attr;
        this.text = text;
        this.effect = effect;
        
    }
    
    ToString(){
        return this.name+","+this.kana+","+this.author+","+this.attr+","+this.text+","+this.effect;
    }

    ToType(){
        return "Card";
    }

    display(){
        return `<p class='title'>名前：${this.name}</br>読み：${this.kana}</br>作者：${this.author}</br>日付：${this.date}</p>`;
    }

}

class MonsterCard extends Card{
    constructor(name, kana, author, date, attr, text, effect, atk, def){
        super(name, kana, author, date, attr, text, effect);
        this.atk = atk;
        this.def = def;
    }
    ToString(){
        return super.ToString()+","+this.atk+","+this.def;
    }

    ToType(){
        return "MonsterCard";
    }
}

var cards = [
            new Card("疎開","そかい","ぜっとん","2017/1/21","急","ここどこ。","3ターン休み。"),
            new MonsterCard("ドラゴン","どらごん","ぜっとん","2017/1/22","竜","あのJ・K・ローリングも見捨てた！は虫類の域を出ないふつうのドラゴン。","",2000,1500),
            new Card("性転換","せいてんかん","ぜっとん","2017/1/23","変","患部は手刀で斬る。","傷付いた相手1体を破壊。"),
            new MonsterCard("怪僧・シンラツ","かいそうしんらつ","ぜっとん","2017/1/24","酷","修業のため、山にこもり山の生物を全て言葉責めで殺した。","",4500,13),
            new Card("着払い殺し屋","ちゃくばらいころしや","ぜっとん","2017/1/25","損","代金を払わされた挙句、殺されるというひどいサービス。","相手のエネルギー-1　敵1体を破壊"),
            new MonsterCard("グスタフ","ぐすたふ","ぜっとん","2017/1/26","叩","壊れた街頭テレビを「叩けば直る理論」で直すために製作されていた。事業仕分けで凍結。","",3000,4200),
            new Card("双子島の氷剣","ふたごじまのひょうけん","ぜっとん","2017/1/27","氷","かつて、島は1つだった。勇者が島を訪れ地面に刺さっていた剣を引き抜くと島が1つ増えた。剣の身にはあたりと書いてあった。","氷状態にし、1000ダメージ"),
            new MonsterCard("いにしえドラゴン","いにしえどらごん","ぜっとん","2017/1/28","竜","太古から生きるドラゴン。　神龍とタメであることを自慢するが、いざ神龍を前にすると恐縮する。","",1800,2000),
            new Card("プロファイリング","ぷろふぁいりんぐ","ぜっとん","2017/1/29","勘","些細な情報から人の行動や心情を読み取る特殊技能。もっとよく知りたい人はアメリカの刑事ドラマを見よう。","相手のカード1枚を知る"),
            new MonsterCard("七五三少女・チトセ第一形態","しちごさんしょうじょちとせだいいちけいたい","ぜっとん","2017/1/30","千","産まれてからずっと千歳飴のみを摂取し育った生粋の七五三少女。3歳で第一形態　5歳で第二形態　7歳で第三形態となる。","",6000,1400),
            new Card("きのうのジャー","きのうのじゃー","Rurgas","2017/1/31","食","昨日洗い忘れたジャー。　今日の主食はパンよ","相手のDEF-1000"),
            new MonsterCard("オレンジマスカット","おれんじますかっと","てぃえん","2017/2/1","混","自分がオレンジなのか、マスカットなのか。　彼は自らに問い続ける。","",20,5000),
            new Card("マインドコントロール","まいんどこんとろーる","ゆーげん","2017/2/2","脳","人に見える部分は実はプラグ。　十字キーしかないので細かい操作はできない。","敵モンスターを1体うばう"),
            new MonsterCard("オーボエドラゴン","おーぼえどらごん","ぜっとん","2017/2/3","竜","その役目を終えたオーボエ達の魂がドラゴンとなった。　言い伝えでは洞窟に向かって、「すいませーん！ラの音もらえますか？」と叫ぶとオーボエドラゴンの鳴き声が聞こえるという。","場にいる全ての竜属性モンスターのATK+500",1500,4100),
            new Card("蹂躙","じゅうりん","keo","2017/2/4","馬","権力、暴力、ときに馬力によって相手をふみにじる。力とは己の中にある暴れ馬なのかもしれない。","ATK3000以下のカードを破壊"),
            new MonsterCard("忠犬・ポチ公","ちゅうけんぽちこう","keo","2017/2/5","犬","人類みなご主人と思っている。ご主人のためなら三日三晩銀のスプーンでもガマンする。","自分のモンスターが破壊される度ATK+2000",2000,2000),
            new Card("腐鎌","くさりがま","keo","2017/2/6","腐","その昔、ある村の武装農民が鎖鎌をじめじめした風通しの悪い所へとばしてしまったまま千年の時をへて、今の姿で発見された。","毒状態にし1000ダメージ"),
            new MonsterCard("逆さまのジョー","さかさまのじょー","keo","2017/2/7","奇","自分の重力だけ逆さなので家から出れない白シャツ好きニート。見たものの重力を逆さまにする。","モンスターのATK,DEF交換",2500,2000),
            new Card("マドーハ","まどーは","ぜっとん","2017/2/8","闇","悪魔の力を借りて繰り出す闇属性魔法。これを喰らうと、動悸・息切れ・かゆみ・あかぎれ等に襲われる。","相手のモンスター1体に呪いをかける。"),
            new MonsterCard("うまドラゴン","うまどらごん","keo","2017/2/9","竜","馬とドラゴンの交配種　空をとぶより、芝を走るのが好き。というかとべない。","",2700,1500),
            new Card("豆まき","まめまき","keo","2017/2/10","豆","しびれを切らした鬼たちの逆襲である。その威力は棍棒による攻撃をこえる。","相手の全モンスターに1000ダメージ"),
            new MonsterCard("振り返らない美人","ふりかえらないびじん","keo","2017/2/11","美","振り返らないかぎりは美人オーラをめちゃくちゃ出してる人。正面の姿を見た者はいない。","裏返された時全カード破壊",1000,0),
            new Card("薬草ジュース","やくそうじゅーす","ぜっとん","2017/2/12","癒","7種の薬草を配合して作られたジュース。スパイスが効いていて意外に美味しい。でも最近出てる0カロリーとかトクホのやつはあんまり美味しくない。","モンスター1体の体力を1200回復"),
            new MonsterCard("運命神・コイントス","うんめいしんこいんとす","keo","2017/2/13","神","迷える子羊にコインの導きを。日に700億回もコインをトスする。コインには自分の顔を刻んでいる。","他のカードを裏返す",2000,2000),
            new MonsterCard("ショコラット","しょこらっと","ぜっとん","2017/2/14","愛","1年に一度現れる、愛を媒介する生物。　そうではない個体もいる。","",2140,3701),
            new Card("豚バラモダン蹴り","ぶたばらもだんげり","ぜっとん","2017/2/15","脚","童話「かちかち山」にて、兎がタヌキを懲らしめるのに使用した技。必要以上に相手を痛めつけるパワーがある。","相手プレイヤーに1000ダメージ"),
            new MonsterCard("六手の奏","ろってのそう","ぜっとん","2017/2/16","爽","分類はラクトアイス。濃厚な立ち回りやシャリシャリとした剣捌きは他の追随を許さない。言うまでもなく弱点は熱","",3500,126),
            new Card("悪魔のティッシュ箱","あくまのてぃっしゅばこ","keo","2017/2/17","箱","ティッシュをとろうと近づいた者を見境なく攻撃する。花粉の時期は狩りの季節だ。","攻撃時表になり、攻撃者と共に破壊する"),
            new MonsterCard("それ池！チンパンジー","それいけちんぱんじー","カビゴン","2017/2/18","猿","日光旅行に行って以来、すぐ水に入りたがるし、嫌な現実から目をそらし、耳をふさぎ、口を閉ざすようになった。　ずぶ濡れの温泉饅頭を押し付けてくる","",2500,2500),
            new Card("咄嗟に内蔵を開けて弾を避ける技","とっさにないぞうをあけてたまをさけるわざ","ぜっとん","2017/2/19","柔","緊急時、弓・弾丸などの遠距離武器を撃ち込まれた場合にそれを避けるための技。発動時、肋骨が4、5本やられる。","１ターン、敵からの攻撃を無効化"),
            new MonsterCard("BRAIN_HACKER","ぶれいんはっかー","ぜっとん","2017/2/20","侵","チキュウ　ノ　カンキョウ　ニ　テキオウ　スルタメ　チキュウジン　ノ　トウブ　ヲ　ウチュウフク　ノ　カワリニ　シテイル　ホームシックギミ","",2200,1200),
            new Card("精霊召喚","せいれいしょうかん","ぜっとん","2017/2/21","召","天界から精霊を召喚する。精霊が出てくるオーラでプレイしてる机がバッてなってカードがぐちゃぐちゃになる。精霊は罪悪感で死ぬ。","手札を全て捨て、山札から同じ枚数引き直す"),
            new MonsterCard("介錯人・ピーター","かいしゃくにんぴーたー","ぜっとん","2017/2/22","斬","仲間が切腹する度に介錯を務めていたがその内に気が触れてしまった。今では切腹していない人の首さえ、斬り落とす。","攻撃時、仲間のモンスター1体に500ダメージ",3000,2600),
            new MonsterCard("三児の親「津」","さんじのおやつ","カビゴン","2017/2/23","親","製菓工場で働く対少子高齢化最終兵器。最近の悩みはハゲ","三回破壊されない",1500,2500),
            new Card("賢人の巻物","けんじんのまきもの","ぜっとん","2017/2/24","知","遥か昔の賢人が残したとされる巻物。生きていく上で大切な言葉や思想が綴られている。","場に出ている全味方モンスターの防御を1000UP"),
            new MonsterCard("イマドキモデルドラゴン","いまどきもでるどらごん","ぜっとん","2017/2/25","竜","びきゃくでこがお！　SNSにたえずじどりをアップするドラゴン！　さいきんなにをかんちがいしたのかCDデビューをしたぞ！！","このモンスターがふくすうばにでていたばあい、それらどうしにしかこうげきできない",3000,4500),
            new Card("つよい着ぐるみ","つよいきぐるみ","てぃえん","2017/2/26","布","着るとすごくつよくなる着ぐるみ。　週5でせんたくしなくてはならない。　すごく乾きにくい。","自分のモンスター一体のATK+3000"),
            new MonsterCard("七五三少女・チトセ第二形態","しちごさんしょうじょだいにけいたい","ぜっとん","2017/2/27","戦","一人前の七五三戦士を目指す少女、チトセ。5歳になった今でも相変わらず千歳飴だけを食べ続けている。","魔法による攻撃力低下の影響を受けない",7500,2000),
            new Card("魔法の杖・カステラ","まほうのつえかすてら","ぜっとん","2017/2/28","魔","魔法を発動する際に使う杖。初心者でも扱いやすいモデルだが、高度な魔法を使うには安定しない。単三電池を2本使用。","手札のコスト3以下の魔法カードをランダムに発動。"),
            new MonsterCard("ジェームズの木","じぇーむずのき","ぜっとん","2017/3/1","永","森は消滅と再生を繰り返す。　そこに集う動物たちも時代によって変わっていく。　しかし、ジェームズはそこにいる。","死なない",120,100),
            new Card("全力クラウチングスタート","ぜんりょくくらうちんぐすたーと","ぜっとん","2017/3/2","走","無理のある体勢により、アキレス腱がちぎれ飛ぶ程初速に命を懸ける技。なおその後は激痛によりまともに走ることができない。","モンスター1体に先制を付与"),
            new MonsterCard("クミトッテ姫","くみとってひめ","ぜっとん","2017/3/3","察","クーキヨム王国の国王、サッシテ・メデモノヲイウの一人娘。　あまり口で物を言わず、目で訴えかけてくるので国賓として訪問した国は苦労するという。","自分が出たターンの直後のターンで攻撃されない",2400,4000),
            new Card("S・Sプレイ","えすえすぷれい","ぜっとん","2017/3/4","攻","どちらもSなのでどちらかが折れるまで何も始まらない。　鞭で互いを叩き続け両方次第にMに目覚めていく。　そしてまた何も始まらない。","このカードが使われたターンでは場に出している全モンスターは攻撃をしなければならない"),
            new MonsterCard("ハルピュイア","はるぴゅいあ","ぜっとん","2017/3/5","鳥","ハーピーとも呼ばれる、くっそマナーの悪い悪鳥だピュイア。　こんな奴は飼いならして嫌がらせに使う他無いピュイアね。","破壊時、敵の場の全モンスターに200ダメージ",2600,1600),
            new Card("ロゼッタ・ストーン","ろぜったすとーん","ぜっとん","2017/3/7","石","聖なる石板。古代エジプト語で記述された文字列は長らく解読されていなかったが、最近の研究によりひたすら「里芋」を意味する隠語が羅列されているだけということが分かった。","自分のエネルギー+3"),
            new MonsterCard("とりけら","とりけら","ぜっとん","2017/3/8","盾","白亜紀に隆盛を極めた恐竜の生き残り。　顔が頑丈な盾になっており、大概の攻撃は跳ね返してしまう。　ディズニーをデズニーって発音しちゃう。","一撃で倒されない",3600,8000),
            new Card("一生のお願い","いっしょうのおねがい","シャオ","2018/12/26","魔","お前の一生は何回あるんだ","相手の手札を一枚確認し、自分の手札に加える。自分のドローフェイズ時にこのカードが墓地に存在する場合、通常のドローの代わりにこのカードを手札に加えることができる。"),
            new MonsterCard("政財界に強いパイプを持つなまこ","せいざいかいにつよいぱいぷをもつなまこ","nyaruko","2018/12/27","生食","政財界、それは政界と財界。この世のすべてを司る化物がいる場所。そんな中生まれたなまこは習字にそろばんピアノ馬術など習い事に追われている。ただスキューバダイビングは苦手。","使用プレイヤーが負けそうになった時効果発動　1万円を納めることで使用プレイヤーを勝ちにする",300,2000),
            new MonsterCard("極龍","きょくろん","ぜっとん","2018/12/27","竜","極端な数のボール(なんでもいい)を集めると出現する龍。修学旅行で沖縄か北海道以外に行くと死ぬといわれている。","破壊時、場にいるモンスターの全ステータスを1か9999にする",9999,1),
            new Card("試作プロトマシンレイメイ・α(ver.0)","しさくぷろとましんれいめいあるふぁばーじょんぜろ","ぜっとん","2018/12/28","仮","何かはよくわからないがめちゃくちゃ初期に作られたんだろうなって感じのマシン。それ系の博物館だと大方最初のフロアに置いてある。何系かはわからない。","ゲーム開始時このカードが手札にあると、先攻＆行動回数+1"),
            new Card("SANDO_of_Food","さんどおぶふーど","Rurgas","2019/1/9","食","いわゆる三度の飯　好きなものの踏み台にされるかわいそうな奴　現代人の生活リズムの変化により、三度というアイデンティティの喪失の危機に陥っている","手札を３枚捨てる。　そのあと墓地から好きなモンスター一体を手札に加える"),
            new Card("封印されしやつⅣ","ふういんされしやつふぉー","nyaruko","2019/1/10","Ⅳ","長い間封印されていたせいで文字もみえねえしなんだこれ　そもそもⅠ～Ⅲどこにあるのかだれかしらない？","任意で発動できる。カードを探す振りをして相手の山札、手札、フィールドからカードを3枚盗む"),
            new MonsterCard("スフィンクスベイビー","すふぃんくすべいびー","keo","2019/1/11","砂","なぞなぞ好きの砂漠の赤ちゃん。観光客になぞなぞを教えてもらっている。","",2000,4500),
            new MonsterCard("高圧的洗浄機","こうあつてきせんじょうき","keo","2019/1/12","圧","ブラックな環境で生み出されてしまった洗浄機　買ってもらわないと困るんだよね　こっちも仕事でやってんだわ","このカードが場にある限り　相手はカードを3枚以上出せない",1200, 800),
            new Card("ゴキゲンキ","ごきげんき","Gothica","2019/1/13","薬","ゴキゲンになれるわけではな、ゴキブリの生命力を高める実験薬。甘い。","デッキから虫属性モンスターをHP+3000して特殊召喚"),
            new Card("オチ製造機","おちせいぞうき","ゆーげん","2019/1/14","爆","どんな状況もこれで一発！あらゆることが丸く収まる。","任意のモンスターを任意のタイミングで破壊できる。"),
            new MonsterCard("異世界人","いせかいじん","ぜっとん","2019/1/15","X","異世界から来た謎の知的生命体。我々の常識や倫理は全く通用しない。それはまさに異物_ like a 酢豚のパイナップル、アンパンに乗ってるしょっぱい桜、お洒落なサラダに入ってるマンゴー。","他モンスターの効果を受けない。",3000,4500),
            new Card("逆落とし穴","ぎゃくおとしあな","シャオ","2019/1/16","罠","天井に設置された落とし穴　勿論誰も落ちることはない","モンスター召喚時に発動できる。　もう一度このカードをセットする"),
            new MonsterCard("コズミック・フィッシャーマン","こずみっくふぃっしゃーまん","レナルー","2019/1/17","光","【戦士族/効果】少し体重が軽くてなで肩。","",73,73),
            new Card("母の怒り","ははのいかり","マイカイ","2019/1/18","母","これを法と心得よ","相手の詭弁を許さない。詭弁だった場合、相手に怒りを与え勝利する。"),
            new MonsterCard("ふてくされピラミッド","ふてくされぴらみっど","Gothica","2019/1/19","墓","日に照らされ続けて3000年が経過したピラミッド。かつて日焼けサロンの考案料として稼いだ金で様々な化粧水を試している。","今日の天気が晴れならば水っぽい効果を無効にする",2009,3007),
            new MonsterCard("実家で育ててるミニトマト","じっかでそだててるみにとまと","karasawa","2019/1/20","摘","手軽につまみ食いできるほうが悪い。","プレイヤーはカードを一枚引く。対戦相手はプレイヤーが目を離している隙に自身のデッキから一枚多くカードを引いてもよい。ただしそれがバレた場合そのカードを元に戻す。",1200,50),
            new Card("ささくれた笹","ささくれたささ","ネオ猫鍋","2019/1/21","ぎゃく","ささくれた笹。　ギャグではない。　パンダの口がケガする。","「パンダ」と名のつくモンスターの攻撃力/防御力を0にし、効果を無効にする。"),
            new MonsterCard("究極龍","きゅうきょくろん","シャオ","2019/1/22","竜","地球というボールを元に出現した極龍。全人類を1人にするか5000兆人にするか悩んでいる。","極龍が破壊されたとき、手札から特殊召喚できる。デッキ1枚を残し、他のカード全てを手札に加え、自分のターン終了時ゲームに敗北する。",1,99999),
            new Card("突発牛肉","とっぱつぎゅうにく","keo","2019/1/23","食","いきなり、ステーキである。","このカードをドローした瞬間に相手カードを1枚指定し破壊"),
            new Card("私情をはさむリトマス試験紙","しじょうをはさむりとますしけんし","wakame","2019/1/24","赤","青が嫌いなので青色には染まらない。プロ意識のかけらもない。","場にある全ての青いカードを破壊する"),
            new MonsterCard("怪蟲・電灯蟲","かいちゅうでんとうむし","keo","2019/1/25","虫","闇夜を照らす巨大な虫　頭部の発光器官からは64ルクスの光を放つ　太陽光充電式。ホタルと競っているが人気はない","敵モンスター1体を1ターン行動不能にする",3200,1000),
            new Card("変身！！","へんしん","えっさー","2019/1/26","魔","それは子供の永遠の憧れであり　拗らせた大人を戻れなくさせる枷","プレイヤーは変身する。返信が完了するまでに満たした条件によって以下の効果を発動する。・10秒以内に変身が完了した：自分のライフポイントを2倍にする。　・専用BGMが流れた：墓地からモンスター1体特殊召喚する。　・衣服の80％以上が変化した：手札からモンスターを1体特殊召喚する。　・名乗り口上を言った：自分モンスターの攻撃力は2倍になる。　・キメポーズ時に背景で爆発が起こった：自分モンスターは効果を受けない。　・相手プレイヤーも変身した：相手はゲームに勝利する。　・変身できなかった：プレイヤーは敗北する。"),
            new MonsterCard("七五三少女・チトセ第三形態","しちごさんしょうじょだいさんけいたい","ぜっとん","2019/1/27","閃","少女は7歳になった。七五三戦士としての道はまだ始まったばかり。まるで飴細工のように形状・硬さを自在に操ることで千歳飴を様々な攻撃や防御に利用する。やっぱり三食千歳飴。","被ダメージを常に-1000　また攻撃してきた相手モンスターに対し毎回1000ダメージを与える。",8000,7530),
            new Card("でっかい袈裟固","でっかいけさがため","keo","2019/1/28","柔","でっかい人が為せる柔道技　でっかさの前に人間は皆平等　まずはでっかい投げ技で倒そう","大きすぎず、小さすぎないモンスターを試合終了まで行動不能にする"),
            new MonsterCard("フレディー・マーズ","ふれでぃーまーず","カビゴン","2019/1/29","姫","フレディー戦士たちの一員。趣味は胸毛を燃やすこと。決め台詞は「火星に代わってRadio Ga Ga」","破壊されたときデッキからATK1500以下のフレディーと名のつくカードを召喚できる",1500,1500),
            new Card("南風と月","みなみかぜとつき","ネオ猫鍋","2019/1/30","話","みんな仲良し。ちょっと肌寒いね。明日も元気に頑張ろう！","お互いの手札を5枚にする。　フィールドのカードを全て公開し、守備表示にする。"),
            new MonsterCard("カメレオン・レオン","かめれおんれおん","wakame","2019/1/31","隠","暗殺術に磨きのかかったレオン。　これにはマチルダ(右)も驚きを隠せない。","攻撃を受けるたびにサイコロを振り、3以上がでたらその攻撃を回避する。",6500,350),
            new Card("ロズウェルすぎる","ろずうぇるすぎる","ぜっとん","2019/2/1","多","ロズウェルすぎた。軍の敷地で蚊取り線香焚いたら思いの外UFOがポンポン落ちるしせっかくだから全員連れて帰ってる。","自分の手札を相手に公開し場に出ている相手モンスターの効果を失わせる。"),
            new MonsterCard("機械仕掛けの死神","きかいじかけのしにがみ","keo","2019/2/2","神","AI国家が生んだ死刑執行人　ロボットがロボットを監視する社会で危険思想を見つけ、排除する。","自分の場のモンスターすべて破壊し召喚　場のすべてのモンスターの効果を消滅させる",6666,6666),
            new MonsterCard("DA_PAND","だぱんだ","ネオ猫鍋","2019/2/3","A","よ～み～か～た～熊猫　ぱんだじゃなくてくまねこ　U・U・U・E・N！U・U・U・E・N！","このカードは「パンダ」として扱うこともできるが、「パンダ」として扱わないこともできる　歌って踊ってる間は攻撃力、防御力が倍になる。",2018,2018),
            new Card("レベルアップ！","れべるあっぷ","シャオ","2019/2/4","凄","食パンは焼いてバターのみが至高","モンスターカードを一枚選択して発動。そのカードを進化させる。"),
            new MonsterCard("漆黒の料理人","しっこくのりょうりにん","Gothica","2019/2/5","黒","食材と見たら何でも料理する闇コック。本職は大工。","食材は効果を発揮できない",2200,800),
            new MonsterCard("矛盾賢者・パラドクス","むじゅんけんじゃぱらどくす","keo","2019/2/6","哲","「私の言うことは常に矛盾する」が口癖　その話が本当なら矛盾するはずだが、矛盾してない　そう、彼の存在自体が矛盾しているのだ。","カード効果の矛盾を指摘し、それらのカードを消滅　その後、このカードを特殊召喚",4000,2000),
            new Card("秘めたる力！？","ひめたるちから","ネオ猫鍋","2019/2/7","叫","うおおおおおおおおおおおおおおおお！！！！！","構えを取り、一息の続く限り叫ぶ。叫んだ秒数÷10倍このターン自分のカードの攻撃力が上がる。ただし、相手は叫んでる間にくすぐり攻撃をしても良い。"),
            new MonsterCard("パンチ星野","ぱんちほしの","ぜっとん","2019/2/8","拳","心で見なきゃ、ものごとはよく見えない。大切なことは、目に見えないんだよ。(サン＝テグジュペリ『星の王子さま』より)", "HPが最大であるとき、攻撃が確殺になる。", 1900,3910),
            new Card("サイクロトロン呼吸法","さいくろとろんこきゅうほう","keo","2019/2/9","息","1秒間にダム3杯分の空気を循環させる呼吸法　瞬間的に使うことで脳機能を活性化できる　しかし、地球温暖化の原因として問題視されている","サイコロを振って偶数の場合。自分のエネルギー+5　奇数の場合自分のHP-3000"),
            new MonsterCard("六智衆第三導士カンジィ","ろくちしゅうだいさんどうしかんじぃ","たにし","2019/2/10","字","汝、漢字を感じるべし。勘じゃダメよ。なんつって。ぷぷ。","自分はカード1枚引き、そのカードに書かれている任意の個所を例文として読み上げ、相手はそれを漢字で紙に書く。答えがテキスト該当箇所と異なる場合、自分はそのカードをプレイする。",2000,2000),
        ];
var authors = {};
function SetATKOrder(card1, card2){
    var atk1 = (typeof card1.atk === "undefined" ? 0 : card1.atk);
    var atk2 = (typeof card2.atk === "undefined" ? 0 : card2.atk);
    if(atk1<atk2) return -1;
    if(atk1>atk2) return 1;
    return 0;
}

function SetDEFOrder(card1, card2){
    var def1 = (typeof card1.def === "undefined" ? 0 : card1.def);
    var def2 = (typeof card2.def === "undefined" ? 0 : card2.def);
    if(def1<def2) return -1;
    if(def1>def2) return 1;
    return 0;
}

function SetNameOrder(card1, card2){
    var name1 = card1.kana;
    var name2 = card2.kana;
    if(name1<name2) return -1;
    if(name1>name2) return 1;
    return 0;
}

function SetAttrOrder(card1, card2){
    var attr1 = card1.attr;
    var attr2 = card2.attr;
    if(attr1<attr2) return -1;
    if(attr1>attr2) return 1;
    return 0;
}

function SetDateOrder(card1, card2){
    var data1 = card1.date.split('/');
    var data2 = card2.date.split('/');
    date1 = new Date(Number(data1[0]),Number(data1[1])-1,Number(data1[2]));
    date2 = new Date(Number(data2[0]),Number(data2[1])-1,Number(data2[2]));
    if(date1<date2) return -1;
    if(date1>date2) return 1;
    return 0;
}

function checkAll(value){
    for(var author in authors){
        document.getElementById(author).checked = value;
    }
}

function OnSearch(){
    word = document.getElementById("word").value;
    param = document.getElementById("orderParam").value;
    order = document.getElementById("ordercb").checked;
    isMonster = document.getElementById("isMonster").checked;
    isSpell = document.getElementById("isSpell").checked;
    checkedAuthors = [];
    for(var author in authors){
        authorCheckbox = document.getElementById(author).checked;
        if(authorCheckbox)checkedAuthors.push(author);
    }
    result = document.getElementById("result");
    result.innerHTML = "<ul>";
    switch (param){
        case "name":
            cards.sort(SetNameOrder);
            break;
        case "atk":
            cards.sort(SetATKOrder);
            break;
        case "def":
            cards.sort(SetDEFOrder);
            break;
        case "date":
            cards.sort(SetDateOrder);
            break;
        default:
            cards.sort();
            break;
    }
    for(var i=0;i<cards.length;i++){
        var idx;
        if(order){
            idx = cards.length - (i + 1);
        }else{
            idx = i;
        }
        var card = cards[idx];
        console.log(card.date);
        if(isMonster === false && card.ToType() === "MonsterCard") continue;
        if(isSpell === false && card.ToType() === "Card") continue;
        if(checkedAuthors.indexOf(card.author) == -1) continue;        
        if(card.ToString().match(word)){
            result.innerHTML += `<a href="images/${card.name}.png" data-lightbox="cards" title="${card.display()}"><img src="images/${card.name}.png" width=195 height=270 class=card title=${card.name}></a> `;
        }
    }
    result.innerHTML += "</ul>";
}

function CreateAuthorsBox(){
    var authorsDiv = document.getElementById("authors");
    authors = {};
    for(var i=0;i<cards.length;i++){
        var card = cards[i];
        var author = card.author;
        if(typeof authors[author] === "undefined") authors[author] = 0;
        authors[author] += 1;
    }
    var keys=[];
    for(var key in authors)keys.push(key);
    keys.sort(function(author1, author2){
        return authors[author1] < authors[author2] ? 1 : -1;
    });
    for(var i=0;i<keys.length;i++){
        author = keys[i];
        var html = `<input type="checkbox" id="${author}" checked=true onchange="OnSearch();"><label for="${author}">${author}(${authors[author]})</label>`;
        authorsDiv.innerHTML += html;
    }
}