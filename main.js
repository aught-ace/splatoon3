'use strict';

const currentVersion = document.querySelector('#version').textContent;

// 知識集
const card = [];

// 表示する1枚のカードの要素
const cardWrap = document.querySelector('#card'); // カード全体
const cardCategory = document.querySelector('#card-category'); // カテゴリー
const cardTitle = document.querySelector('#card-title'); // タイトル
const cardBody = document.querySelector('#card-body'); // 本文

// すべてのカードの要素
const cardDiv = document.querySelectorAll('.card'); // カード全体
const cardTitleDiv = document.querySelectorAll('.card-title'); // カードタイトル
const cardCategorySpan = document.querySelectorAll('.card-category'); // カードカテゴリー
const cardBodyDiv = document.querySelectorAll('.card-body'); // カード本文

// 要素
const controlDiv = document.querySelector('#control'); // もどるボタン
const backButton = document.querySelector('#back'); // もどるボタン
const reverseButton = document.querySelector('#reverse'); // すべてうらがえすボタン
const showButton = document.querySelector('#show'); // めくるボタン
const showCheck = document.querySelector('#show input[type="checkbox"]'); // みるチェックボックス
const reverseCheck = document.querySelector('#reverse input[type="checkbox"]'); // うらがえしのチェックボックス
const nextButton = document.querySelector('#next'); // すすむボタン
const mainCheck = document.querySelector('#main'); // メインのチェックボックス
const subCheck = document.querySelector('#sub'); // サブのチェックボックス
const specialCheck = document.querySelector('#special'); // スペシャルのチェックボックス
const gearPowerCheck = document.querySelector('#gear-power'); // スペシャルのチェックボックス
const weaponSetCheck = document.querySelector('#weapon-set'); // ブキセットのチェックボックス

// JavaScriptオンの場合は表示する要素
controlDiv.classList.remove('none');
cardWrap.classList.remove('none');

// カードすべてを取得
for(let i = 0; i < cardTitleDiv.length; i++) {
    card[i] = {};
    card[i].title = cardTitleDiv[i].innerHTML;
    card[i].category = cardCategorySpan[i].innerHTML;
    card[i].body = cardBodyDiv[i].innerHTML;
    cardDiv[i].remove();
}

// カテゴリーの対応
const categoryClassName = {
    currentVersion: 'version',
    'メイン': 'main',
    'サブ': 'sub',
    'スペシャル': 'special',
    'ギアパワー': 'gear-power',
    'ブキセット': 'weapon-set',
};

let index = 0; // 現在のインデクス

// カードをシャッフル
for(let i = 1; i < card.length - 1; i++) {
    const r = i + Math.floor(Math.random() * (card.length - i)); // i以降のランダムなインデクス
    [card[i], card[r]] = [card[r], card[i]]; // 交換
}

// カードを表示
const viewCard = () => {
    cardTitle.innerHTML = card[index].title;
    cardCategory.innerHTML = card[index].category;
    cardBody.innerHTML = card[index].body;
    cardCategory.className = categoryClassName[card[index].category];
}
viewCard();

// 前のカードを表示
const backCard = (event) => {
    let c = null;

    showCheck.checked = false;

    do {
        index--;
        if(index < 0) index = card.length - 1;
        c = card[index].category;
    } while (
        c !== currentVersion && (
            c === 'メイン' && !mainCheck.checked ||
            c === 'サブ' && !subCheck.checked ||
            c === 'スペシャル' && !specialCheck.checked ||
            c === 'ギアパワー' && !gearPowerCheck.checked ||
            c === 'ブキセット' && !weaponSetCheck.checked
        )
    );
    viewCard();
};

// 次のカードを表示
const nextCard = (event) => {
    let c = null;

    showCheck.checked = false;

    do {
        index++;
        if(card.length <= index) index = 0;
        c = card[index].category;
    } while (
        c !== currentVersion && (
            c === 'メイン' && !mainCheck.checked ||
            c === 'サブ' && !subCheck.checked ||
            c === 'スペシャル' && !specialCheck.checked ||
            c === 'ギアパワー' && !gearPowerCheck.checked ||
            c === 'ブキセット' && !weaponSetCheck.checked
        )
    );
    viewCard();
};

backButton.addEventListener('click', backCard); // 戻るボタンを押した
nextButton.addEventListener('click', nextCard); // 進むボタンを押した