class Card{
    constructor(name, kana, attr, text, effect){
        this.name = name;
        this.kana = kana;
        this.attr = attr;
        this.text = text;
        this.effect = effect;
    }
}

class MonsterCard extends Card{
    constructor(name, kana, attr, text, effect, atk, def){
        super(name, kana, attr, text, effect);
        this.atk = atk;
        this.def = def;
    }
}

var cards = [new Card("疎開", "そかい", "急", "ここどこ", "1回休み"),
             new MonsterCard("怪蟲・電灯蟲", "かいちゅうでんとうむし", "虫", "闇夜を照らす巨大な虫\n頭部の発光器官からは64ルクスの光を放つ\n太陽光充電式。ホタルと競っているが人気はない", "敵モンスター1体を1ターン行動不能にする", 3200, 1000),
             new MonsterCard("機械仕掛けの死神", "きかいじかけのしにがみ", "神", "AI国家が生んだ死刑執行人\nロボットがロボットを監視する社会で危険思想を見つけ、排除する。", "自分の場のモンスターすべてを破壊し召喚\n場のすべてのモンスターの効果を消滅させる", 6666, 6666)
            ];

document.write("<ul>");
cards.forEach(card => {
    document.write("<li>" + card.name + "</li>");
});
document.write("</ul>");