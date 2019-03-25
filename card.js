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

function IDtoPackName(id){
    if(HellResidence.indexOf(id) >= 0){
        return "魔界レジデンス";
    }else if(Ryu.indexOf(id) >= 0){
        return "りゅう";
    }else{
        return "無印";
    }
}

function setAllCheckboxOfPacksTo(value){
    for(var i=0;i<packData.length;i++){
        document.getElementById(packData[i]).checked = value;
    }
}

function setAllCheckboxOfAuthorsTo(value){
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
    isDeck = document.getElementById("isDeck").checked;
    
    cards = [];
    checkedAuthors = [];
    checkedPacks = [];
    //デッキ表示分岐
    if(isDeck === false){
        cards = cardlist.concat();
    }else{
        for(var i = 0;i<deck.length;i++){
            cards.push(cardlist[Number(deck[i])]);
        }
    }

    //作者チェックリスト
    for(var author in authors){
        authorCheckbox = document.getElementById(author).checked;
        if(authorCheckbox)checkedAuthors.push(author);
    }
    //パックチェックリスト
    for(var i=0;i<packData.length;i++){
        pack = packData[i];
        packCheckbox = document.getElementById(pack).checked;
        if(packCheckbox)checkedPacks.push(pack);
    }

    result = document.getElementById("result");
    result.innerHTML = "<ul>";

    //表示順
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

    //各種フィルタリング
    for(var i=0;i<cards.length;i++){
        var idx;
        //逆順
        if(order){
            idx = cards.length - (i + 1);
        }else{
            idx = i;
        }
        var card = cards[idx];
        if(isMonster === false && card.ToType() === "MonsterCard") continue;
        if(isSpell === false && card.ToType() === "Card") continue;
        if(checkedPacks.indexOf(IDtoPackName(card.id)) == -1) continue;
        if(checkedAuthors.indexOf(card.author) == -1) continue;
        if(card.ToString().match(word) && card.id <= 10000){
            var html = "";
            html += `<div class="card">`;
            html += `<a href="images/${card.name}.png" data-lightbox="cards" title="${card.display()}"><img src="dummy.png" data-src="images/${card.name}.png" width=195 height=270 class="card-img lazyload" title=${card.name}></a> `;
            if(isDeck === false){
                html += `<div class="card-info">`;
                html += `<span class="addcard" onclick="AddCard('${card.id}');"></span>`
                html += `<span class="remcard" onclick="RemoveCard('${card.id}');"></span>`
                html += `<span id="${card.id}_num" class="cardNum">${CountCard(card.id)}</span>`
                html += `</div>`;
            }else{
                $(".card").css("height","300px");
            }
            html += `</div>`;
            
            result.innerHTML += html;
        }
    }
    if(word == "今日のカードゲーム"){
        card = IDtoCard(10001);
        var html = "";
        html += `<div class="card">`;
        html += `<a href="images/${card.name}.png" data-lightbox="cards" title="${card.display()}"><img src="dummy.png" data-src="images/${card.name}.png" width=195 height=270 class="card-img lazyload" title=${card.name}></a> `;
        if(isDeck === false){
            html += `<div class="card-info">`;
            html += `<audio src="audios/PA_LOVER-赤く漲る会津-.wav" controls preload="auto" muted=true><p>サポートされていません。</P></audio>`;
            html += `</div>`;
        }
        html += `</div>`;
        
        result.innerHTML += html;
    }
    result.innerHTML += "</ul>";
    CreateTweetButton();
}

function CreateAuthorsBox(){
    var authorsDiv = document.getElementById("authors");
    authors = {};
    for(var i=0;i<cardlist.length;i++){
        var card = cardlist[i];
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

function CreatePacksBox(){
    var packsDiv = document.getElementById("packs");
    for(var i=0;i<packData.length;i++){
        pack = packData[i];
        var html = `<input type="checkbox" id="${pack}" checked=true onchange="OnSearch();"><label for="${pack}">${pack}パックを表示</label>`;
        packsDiv.innerHTML += html;
    }
}

