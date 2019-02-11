deck = [];

function CountCard(id){
    var count = 0;
    for(var i=0;i<deck.length;i++){
        cardID = deck[i];
        if(cardID == id) count++;
    }
    return count;
}

function AddCard(id){
    deck.push(id);
    var num = document.getElementById(id + "_num");
    num.innerText = CountCard(id);
    CreateTweetButton();
}

function RemoveCard(id){
    var index = deck.indexOf(id);
    if(index !== -1){
        deck.splice(index,1);
    }
    var num = document.getElementById(id + "_num");
    num.innerText = CountCard(id);
    CreateTweetButton();
}

function putDeck(){
    return deck.join(",");
}

function readParamToDeck(){
    if(getParam("deck") != null) deck = getParam("deck").split(",");
}

function getParam(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}

function CreateTweetButton(){
    tweetBtn = document.getElementById("tweetBtn");
    html = "";
    html += `<a href="https://twitter.com/share?url=https://atomikkeo.github.io/SCGCardList`;
    html += `?deck=${putDeck()}`;
    html += `&via=Supercardgame01`;
    html += `&hashtags=今日のカードゲーム`;
    html += `"`;
    html += ` onclick="window.open(this.href, 'tweetwindow', 'width=650, height=470, personalbar=0, toolbar=0, scrollbars=1, sizable=1'); return false;"`;
    html += `>`;
    html += `デッキを共有`;
    html += `</a>`;
    tweetBtn.innerHTML = html;
}