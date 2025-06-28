'use strict';

// 知識集
const card = [
    {
        category: 'サブ',
        title: 'スプラッシュボム',
        body: '地面に接地して<mark>しばらくすると爆発する</mark>ボム。',
    },
    {
        category: 'サブ',
        title: 'キューバンボム',
        body: '地面や壁に<mark>くっつく</mark>ボム。スプラッシュボムより爆発までの<mark>時間が長く、爆風が広い</mark>。',
    },
    {
        category: 'サブ',
        title: 'カーリングボム',
        body: '地面を<mark>塗り進んでから爆発する</mark>ボム。ボタンを押し続けると<mark>早く爆発し、爆風も広くなる</mark>。',
    },
    {
        category: 'サブ',
        title: 'ロボットボム',
        body: '着地した場所の周囲を探知し、<mark>自動で相手を追いかける</mark>ボム。相手に<mark>近づくと停止して爆発する</mark>。',
    },
    {
        category: 'サブ',
        title: 'クイックボム',
        body: '何かにぶつかると、<mark>すぐに爆発する</mark>ボム。<mark>インク消費量は少ないが爆発も小さく攻撃力も低い</mark>。',
    },
    {
        category: 'サブ',
        title: 'スプリンクラー',
        body: '地面や壁にくっつき、<mark>インクをまき散らす</mark>仕掛け。しばらく設置したままにすると<mark>勢いが弱まる</mark>。同時に1つまで出せる。',
    },
    {
        category: 'サブ',
        title: 'スプラッシュシールド',
        body: '<mark>敵の侵入や攻撃を防ぐ</mark>インクの壁。攻撃されると<mark>壊れるまでの時間が早くなる</mark>。同時に1つまで出せる。',
    },
    {
        category: 'サブ',
        title: 'タンサンボム',
        body: 'ボタンを押しっぱなしにして構え、<mark>操作するほど早くパワーが貯まり</mark>、投げるとパワーに応じて<mark>最大3回連続で爆発する</mark>ボム。コントローラーやスティックやボタンに反応してパワーが貯まる。',
    },
    {
        category: 'サブ',
        title: 'ジャンプビーコン',
        body: 'マップ上で選ぶと、<mark>そこにスーパージャンプする</mark>ビーコン。ビーコンを装備していない仲間は<mark>2回跳べる</mark>。同時に3つまで出せる。',
    },
    {
        category: 'サブ',
        title: 'ポイントセンサー',
        body: '投げた場所の近くにいる敵を<mark>マーキングする</mark>装置。マークは<mark>味方全員に見える</mark>。',
    },
    {
        category: 'サブ',
        title: 'トラップ',
        body: '足元に設置し、<mark>敵が近づくと作動する</mark>罠。敵を<mark>マーキングし、ダメージを与える</mark>。敵のインクで<mark>塗られても作動する</mark>。同時に2つまで出せる。',
    },
    {
        category: 'サブ',
        title: 'ポイズンミスト',
        body: '着弾すると毒の霧が発生し、入った敵の<mark>移動を遅くしてインクを減らし続ける</mark>容器。霧の中に<mark>居続けるほど効果が大きくなる</mark>。',
    },

    {
        category: 'サブ',
        title: 'ラインマーカー',
        body: '一直線に飛び壁や地面で跳ね返り、<mark>触れた相手をマーキングする</mark>線。<mark>直撃するとダメージを与える</mark>。',
    },
    {
        category: 'サブ',
        title: 'トーピード',
        body: '敵の近くに投げると変形して<mark>相手に向かって飛んでいく</mark>武器。着弾すると<mark>爆発するインクをまき散らす</mark>。攻撃されると撃ち落される。',
    },
    {
        category: 'スペシャル',
        title: 'ウルトラショット',
        body: '回転しながら飛ぶ3発ずつの強力なショット。<mark>射程がとても長い</mark>。3回まで撃てる。',
    },
    {
        category: 'スペシャル',
        title: 'グレートバリア',
        body: '足元に設置する球状のバリア。敵の<mark>外からのインク攻撃を防ぐ</mark>が、<mark>敵自体の侵入は防げない</mark>。内部中心の装置や頂上の部品を攻撃されると早く壊れる。',
    },
    {
        category: 'スペシャル',
        title: 'ショクワンダー',
        body: '触腕を伸ばして<mark>ステージを飛び回れる</mark>変身。変身中も<mark>メインウェポンで攻撃できる</mark>。インクが切れると変身が解けてスーパージャンプで元の場所に戻る。',
    },
    {
        category: 'スペシャル',
        title: 'マルチミサイル',
        body: 'カーソルで狙った<mark>最大5つの目標に発射できる</mark>ミサイル。目標の数によってミサイルの数が変わる。',
    },
    {
        category: 'スペシャル',
        title: 'アメフラシ',
        body: 'インクの雨雲を発生させる装置。雨雲は<mark>少しずつ前進しながらインクを降らせる</mark>。自分や味方の雨を受けると、センプクしていなくてもダメージが素早く回復する。',
    },
    {
        category: 'スペシャル',
        title: 'ナイスダマ',
        body: '自分や味方が<mark>ナイスのシグナルを送ることで力が貯まる</mark>弾。投げつけると<mark>大きな爆発が起こる</mark>。ナイスを送った味方はスペシャルゲージが少し貯まる。',
    },
    {
        category: 'スペシャル',
        title: 'ホップソナー',
        body: 'かくれた敵をあぶり出す<mark>ウェーブを生み出す</mark>装置。ウェーブが当たると<mark>マーキングしてダメージを与える</mark>。ウェーブは<mark>ジャンプでかわせる</mark>。',
    },
    {
        category: 'スペシャル',
        title: 'キューインキ',
        body: '敵が撃った<mark>インクを吸い込むほどゲージが貯まり最後に強力な弾を放てる</mark>装置。吸い込みは敵の動きを遅らせる効果もある。ゲージを最大まで貯めるほか、一定時間が経過しても弾を発射できる。',
    },
    {
        category: 'スペシャル',
        title: 'メガホンレーザー5.1ch',
        body: '敵を<mark>カーソルで狙い自動で追撃する</mark>6つのメガホン型のレーザー。2つずつ作動する。<mark>発動中もメインやサブを使うことができる</mark>。',
    },
    {
        category: 'スペシャル',
        title: 'ジェットパック',
        body: 'インクを噴射して<mark>空を飛びながら付属のランチャーで攻撃できる</mark>装置。ジャンプのボタンで<mark>一時的に高度を上げられる</mark>。地面の高さに応じて高度が変わる。地面がない所や金網では飛び続けられない。',
    },
    {
        category: 'スペシャル',
        title: 'ウルトラハンコ',
        body: '<mark>前方を叩きつけながら前進できる</mark>巨大なハンコ。ハンコを<mark>遠くに投げつけて攻撃することもできるが、スペシャルの時間が終了する</mark>。',
    },
    {
        category: 'スペシャル',
        title: 'カニタンク',
        body: '<mark>連射ショットやカノン砲で攻撃できる</mark>戦車。ZLで球状になって転がり、<mark>防御したり壁を登ったりできる</mark>。背中が弱点である。',
    },
    {
        category: 'スペシャル',
        title: 'サメライド',
        body: '直線のコースを作り、<mark>前方に突撃して爆発する</mark>フロート。ボタンを押すかコースから外れると爆発する。コースもあらかじめインクで塗られる。',
    },
    {
        category: 'スペシャル',
        title: 'トリプルトルネード',
        body: '投げて<mark>着弾するとその場所にインクの竜巻が撃ち込まれる</mark>装置。竜巻の形状はとても縦に長い。3つまで投げられる。',
    },
    {
        category: 'スペシャル',
        title: 'エナジースタンド',
        body: '一部の<mark>能力を一時的に強化する</mark>ドリンクが入った冷蔵庫。4本入りで自分や味方1人につき1本だけ飲める。効果中に<mark>やられるとすぐに復活できる</mark>が効果は切れる。',
    },
    {
        category: 'スペシャル',
        title: 'デコイチラシ',
        body: '広範囲に大量に発射し、<mark>スーパージャンプそっくりなマーカーが表示されて着地する</mark>デコイ。一定時間で爆発するが、攻撃されると爆発せずに壊れる。',
    },
    {
        category: 'スペシャル',
        title: 'テイオウイカ',
        body: '<mark>敵のインク攻撃を弾く</mark>巨大なイカまたはタコへの変身。ジャンプすると<mark>強力なスピンによる体当たりができる</mark>他、チャージして<mark>前方に突撃することもできる</mark>。',
    },
    {
        category: 'スペシャル',
        title: 'ウルトラチャクチ',
        body: '空中に浮き上がって<mark>地面に叩きつける</mark>、自分自身とインクを合わせた3つのこぶし。スーパージャンプ中に使うと自分のこぶしだけを叩きつける。',
    },
    {
        category: 'スペシャル',
        title: 'スミナガシート',
        body: '投げて着弾すると、<mark>少しずつ前進する大きなシートを発生させる</mark>装置。触れた敵は<mark>一定時間色が見えづらくなり</mark>、ダメージも少し受ける。',
    },

    {
        category: 'メイン',
        title: 'スプラシューター',
        body: '<mark>バランスが取れた</mark>性能のシューター。',
    },
    {
        category: 'メイン',
        title: 'スプラローラー',
        body: '<mark>標準的な</mark>性能のローラー。',
    },
    {
        category: 'メイン',
        title: 'スプラチャージャー',
        body: '<mark>扱いやすい</mark>性能のチャージャー。フルチャージしたまま少しの間インクを泳げる<mark>チャージキープが可能</mark>。',
    },
    {
        category: 'メイン',
        title: 'ホットブラスター',
        body: '<mark>攻撃力が高め</mark>のブラスター。敵に直撃すると<mark>一撃で倒せる</mark>。射程も短く連射も遅め。',
    },
    {
        category: 'メイン',
        title: 'バケットスロッシャー',
        body: '<mark>標準的で扱いやすい</mark>性能のスロッシャー。',
    },
    {
        category: 'メイン',
        title: 'スプラマニューバー',
        body: '<mark>標準的な</mark>性能のマニューバー。スライドは2回連続で可能。',
    },
    {
        category: 'メイン',
        title: 'ホクサイ',
        body: '<mark>攻撃に適した</mark>性能のフデ。振るのは少し遅い。',
    },
    {
        category: 'メイン',
        title: 'バレルスピナー',
        body: '<mark>射程が長い</mark>スピナー。チャージには時間がかかる。',
    },
    {
        category: 'メイン',
        title: 'トライストリンガー',
        body: '<mark>標準的な</mark>性能のストリンガー。3本の矢をチャージしてから放つと<mark>着弾した時に爆発する</mark>。',
    },
    {
        category: 'メイン',
        title: 'プロモデラーMG',
        body: '<mark>連射がとても速く塗り性能が高い</mark>シューター。射程はとても短く、弾ブレがとても大きい。',
    },
    {
        category: 'メイン',
        title: 'パラシェルター',
        body: '<mark>標準的な</mark>性能のシェルター。開き続けると傘をパージして前進させられる。',
    },
    {
        category: 'メイン',
        title: 'ドライブワイパー',
        body: '<mark>振るのが速い</mark>ワイパー。普通に振ると横振り、チャージすると縦振りになる。射程もやや長いが攻撃力は低め。',
    },
    {
        category: 'メイン',
        title: 'N-ZAP85',
        body: '<mark>連射が速い</mark>シューター。<mark>塗り性能は高い</mark>が、攻撃力は低め。',
    },
    {
        category: 'メイン',
        title: 'カーボンローラー',
        body: '<mark>振るのが速い</mark>ローラー。射程は短く攻撃力も低い。',
    },
    {
        category: 'メイン',
        title: 'ラピッドブラスター',
        body: '<mark>射程が長く連射が速め</mark>のブラスター。敵に直撃しても一撃では倒せない。',
    },
    {
        category: 'メイン',
        title: 'パブロ',
        body: '<mark>振るのも塗り進むのもとても速い</mark>フデ。<mark>連続で振ることができる</mark>が攻撃力は低い。',
    },
    {
        category: 'メイン',
        title: 'わかばシューター',
        body: '<mark>インク効率がとても高く塗り性能が高い</mark>シューター。弾ブレが大きい。',
    },
    {
        category: 'メイン',
        title: 'スペースシューター',
        body: '<mark>射程と連射が速いため塗り性能が高い</mark>シューター。攻撃力は低い。',
    },
    {
        category: 'メイン',
        title: 'スクイックリンα',
        body: '<mark>チャージ時間が短い動きやすい</mark>チャージャー。射程は短い。',
    },
    {
        category: 'メイン',
        title: 'デュアルスイーパー',
        body: '<mark>射程が長い</mark>マニューバー。スライド後に攻撃性能が変わらないが、<mark>射程は少し伸びる。</mark>また、スライド後の<mark>硬直中も少し動くことができる</mark>。スライドは2回連続で可能。',
    },
    {
        category: 'メイン',
        title: 'ボールドマーカー',
        body: '<mark>連射も速く攻撃力も高め</mark>のシューター。射程は非常に短く弾ブレも大きい。',
    },
    {
        category: 'メイン',
        title: 'プライムシューター',
        body: '<mark>射程が長めで攻撃力も高めで弾ブレも少ない</mark>シューター。連射は遅くインク効率が悪い。',
    },
    {
        category: 'メイン',
        title: 'スプラスコープ',
        body: 'スプラチャージャー同様<mark>扱いやすく、スコープが付き射程が少しだけ増した</mark>チャージャー。チャージキープはできない。',
    },
    {
        category: 'メイン',
        title: 'ヒッセン',
        body: '<mark>軽くて振りやすい</mark>スロッシャー。<mark>一度に3方向へインクを飛ばせる</mark>。射程は短く攻撃力は低い。',
    },
    {
        category: 'メイン',
        title: 'LACT-450',
        body: '<mark>軽くて塗り性能が高い</mark>ストリンガー。フルチャージしたままインクを泳ぐ<mark>チャージキープが可能</mark>。<mark>チャージして放っても矢が爆発しない</mark>。射程は短く攻撃力は低い。',
    },
    {
        category: 'メイン',
        title: '.52ガロン',
        body: '<mark>1発の攻撃力が高い</mark>シューター。敵に命中すると<mark>2発で倒せる</mark>。連射は遅く弾ブレが大きい。',
    },
    {
        category: 'メイン',
        title: 'ロングブラスター',
        body: '<mark>射程が長い</mark>ブラスター。敵に直撃すると<mark>一撃で倒せる</mark>。連射は遅い。',
    },
    {
        category: 'メイン',
        title: 'ダイナモローラー',
        body: '<mark>攻撃力が高く射程が長い</mark>ローラー。振るのも塗り進みも遅い。',
    },
    {
        category: 'メイン',
        title: 'スプラスピナー',
        body: '<mark>軽くてチャージ時間が短く扱いやすい</mark>性能のスピナー。',
    },
    {
        category: 'メイン',
        title: 'ノヴァブラスター',
        body: '<mark>連射が速く短時間で爆発する</mark>弾のブラスター。敵に直撃すると<mark>一撃で倒せる</mark>。射程は短い。',
    },
    {
        category: 'メイン',
        title: 'L3リールガン',
        body: '<mark>1トリガーで3つの弾を発射する</mark>シューター。押しっぱなしでは連射できない。<mark>射程もやや長く塗り性能も高め</mark>。敵に4発命中しないと倒すことができない。',
    },
    {
        category: 'メイン',
        title: 'イグザミナー',
        body: '<mark>軽く連射が速く連射時間も長い</mark>スピナー。フルチャージするとが<mark>連射が速くなる</mark>。チャージ時間も長い。',
    },
    {
        category: 'メイン',
        title: '24式張替傘・甲',
        body: '<mark>パージするまでの時間が短い</mark>シェルター。<mark>ショットの攻撃力が高い</mark>。<mark>傘は速く前進する</mark>。傘の耐久性は低い。',
    },
    {
        category: 'メイン',
        title: 'フィンセント',
        body: '<mark>射程も長く攻撃力も高い</mark>フデ。最初の振り始めが遅い。',
    },
    {
        category: 'メイン',
        title: 'R-PEN/5H',
        body: '<mark>連続で撃てる</mark>チャージャー。フルチャージすると<mark>5回連続で撃つことができる</mark>。<mark>塗り性能が高い</mark>。攻撃力は低く敵に2発当てないと倒すことができない。チャージキープもできない。',
    },
    {
        category: 'メイン',
        title: 'スクリュースロッシャー',
        body: '<mark>直撃すると攻撃力が高く、周りにインクも飛び散るスクリュー弾が撃てる</mark>スロッシャー。',
    },
    {
        category: 'メイン',
        title: 'スパッタリー',
        body: '<mark>軽くて連射が速く動きやすい</mark>マニューバー。射程は短い。',
    },
    {
        category: 'メイン',
        title: 'ジェットスイーパー',
        body: '<mark>射程がとても長い</mark>シューター。連射は遅く攻撃力も低い。',
    },
    {
        category: 'メイン',
        title: 'モップリン',
        body: '<mark>1振りで時間差で2つのインクを飛ばせる</mark>スロッシャー。狙いを横に動かしながら振ると<mark>インクが横にばらまかれる</mark>。<mark>塗り性能も高い</mark>。',
    },
    {
        category: 'メイン',
        title: 'ジムワイパー',
        body: '<mark>攻撃力が高い</mark>ワイパー。普通に振ると横振り、チャージすると縦振りになる。縦振りに必要なチャージ時間は長い。',
    },
    {
        category: 'メイン',
        title: 'シャープマーカー',
        body: '<mark>弾ブレがない</mark>シューター。<mark>連射は速い</mark>が攻撃力は低い。',
    },
    {
        category: 'メイン',
        title: 'ワイドローラー',
        body: '<mark>軽くて塗りの幅が広い</mark>ローラー。<mark>横振りは幅の広いインクを飛ばすことができ、縦振りはインクを遠くに飛ばせる</mark>。<mark>塗り性能が高い</mark>が、攻撃力は低い。',
    },
    {
        category: 'メイン',
        title: 'キャンピングシェルター',
        body: '<mark>傘の横幅が広く耐久性が高い</mark>シェルター。<mark>ショットの射程も長く攻撃力も高い</mark>が、連射はとても遅い。',
    },
    {
        category: 'メイン',
        title: '.96ガロン',
        body: '<mark>攻撃力が高く射程も長い</mark>シューター。敵に命中すると<mark>2発で倒すことができる</mark>。弾ブレが大きく連射は遅い。',
    },
    {
        category: 'メイン',
        title: 'クアッドホッパーブラック',
        body: '<mark>4回連続でスライドできる</mark>マニューバー。<mark>スライド中にも弾を発射できる</mark>。攻撃力は低い。',
    },
    {
        category: 'メイン',
        title: 'リッター4K',
        body: '<mark>非常に射程が長い</mark>チャージャー。フルチャージしてインクの中を泳ぐ<mark>チャージキープが少しの間可能</mark>。インク消費量は多くチャージ時間も長い。',
    },
    {
        category: 'メイン',
        title: 'スパイガジェット',
        body: '<mark>傘を開いたまま連射ができる</mark>シェルター。傘のパージはできない。攻撃力は低く傘の耐久性も低い。',
    },
    {
        category: 'メイン',
        title: 'ボトルガイザー',
        body: '<mark>最初の1発は攻撃力が高く射程が長いが、それ以降の弾は連射が速く塗りに特化している</mark>シューター。手動による連射と自動の連射によって使い分けることができる。',
    },
    {
        category: 'メイン',
        title: 'オーバーフロッシャー',
        body: '<mark>地形にバウンドする弾を1振りで4発ずつ撃てる</mark>スロッシャー。',
    },
    {
        category: 'メイン',
        title: 'フルイドV',
        body: '<mark>5方向へインクを飛ばせる</mark>ストリンガー。ある程度チャージして撃つとインクを<mark>1か所に撃つ</mark>ことができ、更にチャージしてから撃つと<mark>広くまき散らせる</mark>ことができる。インクは爆発する。チャージは遅い。',
    },
    {
        category: 'メイン',
        title: 'S-BLAST92',
        body: '<mark>地上では遠くで爆発する弾ブレが小さい弾、ジャンプ中は近くで大きく爆発する弾を発射できる</mark>ブラスター。連射は遅い。',
    },
    {
        category: 'メイン',
        title: 'ヴァリアブルローラー',
        body: '<mark>横振りは軽くて素早く行うことができ、縦振りは遠くまでインクを飛ばせる</mark>ローラー。<mark>縦振りで塗って横振りで攻撃するとよい</mark>。',
    },
    {
        category: 'メイン',
        title: 'ハイドラント',
        body: '<mark>射程がとても長い</mark>スピナー。インク消費量がとても多くチャージ時間が非常に長い。',
    },
    {
        category: 'メイン',
        title: 'ケルビン525',
        body: '<mark>スライド後の攻撃力が上がる</mark>マニューバー。<mark>スライド直後の弾は命中すると2発で敵を倒せる。</mark>。<mark>2回連続でスライドできる。</mark>。連射は遅い。',
    },
    {
        category: 'メイン',
        title: 'デンタルワイパーミント',
        body: '<mark>射程が長く攻撃力が高い</mark>ワイパー。普通の振り方もチャージ斬りも横振りである。',
    },
    {
        category: 'メイン',
        title: 'クラッシュブラスター',
        body: '<mark>連射がとても速い</mark>ブラスター。射程は短く攻撃力は低い。',
    },
    {
        category: 'メイン',
        title: 'ガエンFF',
        body: '<mark>スライド前は射程が長く、スライド後は連射が速い</mark>マニューバー。反対にスライド前は連射が遅く、スライド後は射程が短い。',
    },
    {
        category: 'メイン',
        title: '14式竹筒銃・甲',
        body: '<mark>高速でチャージできて連射が速く、フルチャージ後も動きやすい</mark>チャージャー。敵に命中しても1発では倒せないため、<mark>フルチャージと通常の2発を連続で当てる</mark>とよい。チャージキープはできない。',
    },
    {
        category: 'メイン',
        title: 'H3リールガン',
        body: '<mark>1トリガーで攻撃力が高い3発ずつの弾を撃つことができる</mark>シューター。敵に<mark>3発すべて当てると1回で倒すことができる</mark>。押しっぱなしでは連射できず、連射も遅い。',
    },
    {
        category: 'メイン',
        title: 'ソイチューバー',
        body: '<mark>フルチャージしなくてもインクの中を泳ぐチャージキープを長時間行うことができる</mark>チャージャー。<mark>途中までのチャージでも敵を1撃で倒せる威力になる</mark>。フルチャージにかかる時間は長い。',
    },
    {
        category: 'メイン',
        title: 'Rブラスターエリート',
        body: '<mark>射程がとても長い</mark>ブラスター。爆発力は低い。攻撃力も低く、敵に直撃しても1撃では倒せない。',
    },
    {
        category: 'メイン',
        title: '4Kスコープ',
        body: 'リッター4Kよりも<mark>更に射程が長く、スコープで狙うことができる</mark>チャージャー。チャージキープはできない。',
    },
    {
        category: 'メイン',
        title: 'ノーチラス47',
        body: '<mark>フルチャージしたままインクを泳ぐチャージキープが可能</mark>なスピナー。発射中に<mark>再チャージができる</mark>。',
    },
    {
        category: 'メイン',
        title: 'エクスプロッシャー',
        body: '<mark>放物線を描いて飛び着弾すると爆発する弾を発射する</mark>スロッシャー。連射は遅い。',
    },
    {
        category: 'メイン',
        title: 'クーゲルシュライバー',
        body: '<mark>撃ち始めは連射が速いが撃ち続けると変化して射程が長く弾ブレが小さくなる</mark>スピナー。発射中に<mark>再チャージができる</mark>。逆に撃ち始めは射程は短く弾ブレが大きく、変化後は連射が遅め。',
    },

    {
        category: 'ギアパワー',
        title: 'インク効率アップ (メイン)',
        body: '<mark>メインの消費インク量が少なくなる</mark>。付きやすいブランドはジモンとタタキケンサキ。',
    },
    {
        category: 'ギアパワー',
        title: 'インク効率アップ (サブ)',
        body: '<mark>サブの消費インク量が少なくなる</mark>。付きやすいブランドはホッコリーとアナアキ。',
    },
    {
        category: 'ギアパワー',
        title: 'インク回復力アップ',
        body: '<mark>インクの回復速度が上がる</mark>。付きやすいブランドはアロメ。',
    },
    {
        category: 'ギアパワー',
        title: 'ヒト移動速度アップ',
        body: '<mark>ヒト状態の移動速度が上がる</mark>。付きやすいブランドはロッケンベルグ。',
    },
    {
        category: 'ギアパワー',
        title: 'イカダッシュ速度アップ',
        body: '<mark>イカダッシュ時の移動速度が上がる</mark>。付きやすいブランドはクラーゲス。',
    },
    {
        category: 'ギアパワー',
        title: 'スペシャル増加量アップ',
        body: '<mark>スペシャルゲージの増加量が上がる</mark>。付きやすいブランドはヤコ。',
    },
    {
        category: 'ギアパワー',
        title: 'スペシャル減少量ダウン',
        body: '<mark>自分がやられた時のスペシャルゲージの減少量が少なくなる</mark>。付きやすいブランドはエゾッコとエゾッコリー。',
    },
    {
        category: 'ギアパワー',
        title: 'スペシャル性能アップ',
        body: '<mark>スペシャルの性能が上がる</mark>。付きやすいブランドはフォーリマ。',
    },
    {
        category: 'ギアパワー',
        title: '復活時間短縮',
        body: '<mark>敵を一人も倒せないまま連続でやられた時の復活時間が短くなる</mark>。付きやすいブランドはホタックス。',
    },
    {
        category: 'ギアパワー',
        title: 'スーパージャンプ時間短縮',
        body: '<mark>スーパージャンプにかかる時間が短くなる</mark>。付きやすいブランドはアイロニック。',
    },
    {
        category: 'ギアパワー',
        title: 'サブ性能アップ',
        body: '<mark>サブの性能が上がる</mark>。付きやすいブランドはエンペリー。',
    },
    {
        category: 'ギアパワー',
        title: '相手インク影響軽減',
        body: '<mark>相手のインクを踏んだときのダメージや移動速度の減少量が少なくなる</mark>。付きやすいブランドはバトロイカ。',
    },
    {
        category: 'ギアパワー',
        title: 'サブ影響軽減',
        body: '<mark>敵のサブによるダメージや効果を軽減する</mark>。付きやすいブランドはシグレニ。',
    },
    {
        category: 'ギアパワー',
        title: 'アクション強化',
        body: '<mark>イカロールを行える角度が広くなり、イカノボリの貯めが早くなり、ジャンプ直後に攻撃するときの弾のブレが小さくなる</mark>。付きやすいブランドはバラズシとシチリン。',
    },
    {
        category: 'ギアパワー',
        title: 'スタートダッシュ',
        body: '<mark>対戦開始から30カウントの間、移動に関する効果がかなり上がる</mark>。アタマの基本ギアパワーにしか付けられない。',
    },
    {
        category: 'ギアパワー',
        title: 'ラストスパート',
        body: '<mark>対戦終了の30カウント前からインク効率とインク回復速度がかなり上がる</mark>。アタマの基本ギアパワーにしか付けられない。',
    },
    {
        category: 'ギアパワー',
        title: '逆境強化',
        body: '自分のチームの人数が敵のチームより少ない場合、<mark>少しずつスペシャルゲージが増える</mark>。アタマの基本ギアパワーにしか付けられない。',
    },
    {
        category: 'ギアパワー',
        title: 'カムバック',
        body: 'やられて復活した後、<mark>しばらくの間一部の能力がかなり上がる</mark>。アタマの基本ギアパワーにしか付けられない。',
    },
    {
        category: 'ギアパワー',
        title: 'イカニンジャ',
        body: '地面をイカダッシュした時に<mark>インクが飛び散らなくなる</mark>。移動速度は少し遅くなる。フクの基本ギアパワーにしか付けられない。',
    },
    {
        category: 'ギアパワー',
        title: 'リベンジ',
        body: '復活したとき、<mark>自分を倒した敵の位置が遠くから見えるようになる</mark>。フクの基本ギアパワーにしか付けられない。',
    },
    {
        category: 'ギアパワー',
        title: 'サーマルインク',
        body: 'メインを直接当てた相手が、<mark>しばらく遠くから見えるようになる</mark>。フクの基本ギアパワーにしか付けられない。',
    },
    {
        category: 'ギアパワー',
        title: '復活ペナルティアップ',
        body: '<mark>自分と倒した敵のスペシャル減少量と復活時間が増える</mark>。フクの基本ギアパワーにしか付けられない。',
    },
    {
        category: 'ギアパワー',
        title: '追加ギアパワー倍化',
        body: 'このギアについている<mark>追加ギアパワーを1個で2個分の効果にする</mark>。フクのフェスTの基本ギアパワーとして初めから付いており、別のギアパワーで上書きしてしまうと元には戻せない。',
    },
    {
        category: 'ギアパワー',
        title: 'ステルスジャンプ',
        body: '<mark>スーパージャンプの着地点のマーカーが離れた場所からは見えなくなる</mark>。クツの基本ギアパワーにしか付けられない。。',
    },
    {
        category: 'ギアパワー',
        title: '対物攻撃力アップ',
        body: '<mark>プレイヤー以外の物体に対して攻撃した時のダメージが増える</mark>。ただしシェルターの傘は含まない。クツの基本ギアパワーにしか付けられない。。',
    },
    {
        category: 'ギアパワー',
        title: '受け身術',
        body: 'スーパージャンプ着地時に<mark>前転できる</mark>。クツの基本ギアパワーにしか付けられない。。',
    },

    {
        category: 'ブキセット',
        title: 'スプラシューター',
        body: 'サブは<mark>キューバンボム</mark>、スペシャルは<mark>ウルトラショット</mark>。',
    },
    {
        category: 'ブキセット',
        title: 'ヒーローシューター レプリカ',
        body: 'サブは<mark>キューバンボム</mark>、スペシャルは<mark>ウルトラショット</mark>。',
    },
    {
        category: 'ブキセット',
        title: 'オーダーシューター レプリカ',
        body: 'サブは<mark>キューバンボム</mark>、スペシャルは<mark>ウルトラショット</mark>。',
    },
    {
        category: 'ブキセット',
        title: 'スプラシューターコラボ',
        body: 'サブは<mark>スプラッシュボム</mark>、スペシャルは<mark>トリプルトルネード</mark>。',
    },
    {
        category: 'ブキセット',
        title: 'オクタシューター レプリカ',
        body: 'サブは<mark>スプラッシュボム</mark>、スペシャルは<mark>トリプルトルネード</mark>。',
    },
    {
        category: 'ブキセット',
        title: 'スプラシューター煌',
        body: 'サブは<mark>クイックボム</mark>、スペシャルは<mark>テイオウイカ</mark>。',
    },
    {
        category: 'ブキセット',
        title: '.96ガロン',
        body: 'サブは<mark>スプリンクラー</mark>、スペシャルは<mark>キューインキ</mark>。',
    },
    {
        category: 'ブキセット',
        title: '.96ガロンデコ',
        body: 'サブは<mark>スプラッシュシールド</mark>、スペシャルは<mark>テイオウイカ</mark>。',
    },
    {
        category: 'ブキセット',
        title: '.96ガロン爪',
        body: 'サブは<mark>ラインマーカー</mark>、スペシャルは<mark>エナジースタンド</mark>。',
    },
    {
        category: 'ブキセット',
        title: 'シャープマーカー',
        body: 'サブは<mark>クイックボム</mark>、スペシャルは<mark>カニタンク</mark>。',
    },
    {
        category: 'ブキセット',
        title: 'シャープマーカーネオ',
        body: 'サブは<mark>キューバンボム</mark>、スペシャルは<mark>トリプルトルネード</mark>。',
    },
    {
        category: 'ブキセット',
        title: 'シャープマーカーGECK',
        body: 'サブは<mark>ポイズンミスト</mark>、スペシャルは<mark>アメフラシ</mark>。',
    },
    {
        category: 'ブキセット',
        title: 'わかばシューター',
        body: 'サブは<mark>スプラッシュボム</mark>、スペシャルは<mark>グレートバリア</mark>。',
    },
    {
        category: 'ブキセット',
        title: 'もみじシューター',
        body: 'サブは<mark>トーピード</mark>、スペシャルは<mark>ホップソナー</mark>。',
    },
    {
        category: 'ブキセット',
        title: '.52ガロン',
        body: 'サブは<mark>スプラッシュシールド</mark>、スペシャルは<mark>メガホンレーザー5.1ch</mark>。',
    },
    {
        category: 'ブキセット',
        title: '.52ガロンデコ',
        body: 'サブは<mark>カーリングボム</mark>、スペシャルは<mark>スミナガシート</mark>。',
    },
    {
        category: 'ブキセット',
        title: 'H3リールガン',
        body: 'サブは<mark>ポイントセンサー</mark>、スペシャルは<mark>エナジースタンド</mark>。',
    },
    {
        category: 'ブキセット',
        title: 'H3リールガンD',
        body: 'サブは<mark>スプラッシュシールド</mark>、スペシャルは<mark>グレートバリア</mark>。',
    },
    {
        category: 'ブキセット',
        title: 'H3リールガンSNAK',
        body: 'サブは<mark>キューバンボム</mark>、スペシャルは<mark>トリプルトルネード</mark>。',
    },
    {
        category: 'ブキセット',
        title: 'L3リールガン',
        body: 'サブは<mark>カーリングボム</mark>、スペシャルは<mark>カニタンク</mark>。',
    },
    {
        category: 'ブキセット',
        title: 'L3リールガンD',
        body: 'サブは<mark>クイックボム</mark>、スペシャルは<mark>ウルトラハンコ</mark>。',
    },
    {
        category: 'ブキセット',
        title: 'L3リールガン箔',
        body: 'サブは<mark>スプラッシュボム</mark>、スペシャルは<mark>ジェットパック</mark>。',
    },
    {
        category: 'ブキセット',
        title: 'N-ZAP85',
        body: 'サブは<mark>キューバンボム</mark>、スペシャルは<mark>エナジースタンド</mark>。',
    },
    {
        category: 'ブキセット',
        title: 'N-ZAP89',
        body: 'サブは<mark>ロボットボム</mark>、スペシャルは<mark>デコイチラシ</mark>。',
    },
    {
        category: 'ブキセット',
        title: 'ジェットスイーパー',
        body: 'サブは<mark>ラインマーカー</mark>、スペシャルは<mark>キューインキ</mark>。',
    },
    {
        category: 'ブキセット',
        title: 'ジェットスイーパーカスタム',
        body: 'サブは<mark>ポイズンミスト</mark>、スペシャルは<mark>アメフラシ</mark>。',
    },
    {
        category: 'ブキセット',
        title: 'ジェットスイーパーCOBR',
        body: 'サブは<mark>クイックボム</mark>、スペシャルは<mark>ウルトラチャクチ</mark>。',
    },
    {
        category: 'ブキセット',
        title: 'プライムシューター',
        body: 'サブは<mark>ラインマーカー</mark>、スペシャルは<mark>カニタンク</mark>。',
    },
    {
        category: 'ブキセット',
        title: 'プライムシューターコラボ',
        body: 'サブは<mark>キューバンボム</mark>、スペシャルは<mark>ナイスダマ</mark>。',
    },
    {
        category: 'ブキセット',
        title: 'プライムシューターFRZN',
        body: 'サブは<mark>スプラッシュボム</mark>、スペシャルは<mark>マルチミサイル</mark>。',
    },
    {
        category: 'ブキセット',
        title: 'プロモデラーMG',
        body: 'サブは<mark>タンサンボム</mark>、スペシャルは<mark>サメライド</mark>。',
    },
    {
        category: 'ブキセット',
        title: 'プロモデラーRG',
        body: 'サブは<mark>スプリンクラー</mark>、スペシャルは<mark>ナイスダマ</mark>。',
    },
    {
        category: 'ブキセット',
        title: 'プロモデラー彩',
        body: 'サブは<mark>クイックボム</mark>、スペシャルは<mark>スミナガシート</mark>。',
    },
    {
        category: 'ブキセット',
        title: 'ボールドマーカー',
        body: 'サブは<mark>カーリングボム</mark>、スペシャルは<mark>ウルトラハンコ</mark>。',
    },
    {
        category: 'ブキセット',
        title: 'ボールドマーカーネオ',
        body: 'サブは<mark>ジャンプビーコン</mark>、スペシャルは<mark>メガホンレーザー5.1ch</mark>。',
    },
    {
        category: 'ブキセット',
        title: 'ボトルガイザー',
        body: 'サブは<mark>スプラッシュシールド</mark>、スペシャルは<mark>ウルトラショット</mark>。',
    },
    {
        category: 'ブキセット',
        title: 'ボトルガイザーフォイル',
        body: 'サブは<mark>ロボットボム</mark>、スペシャルは<mark>スミナガシート</mark>。',
    },
    {
        category: 'ブキセット',
        title: 'スペースシューター',
        body: 'サブは<mark>ポイントセンサー</mark>、スペシャルは<mark>メガホンレーザー5.1ch</mark>。',
    },
    {
        category: 'ブキセット',
        title: 'スペースシューターコラボ',
        body: 'サブは<mark>トラップ</mark>、スペシャルは<mark>ジェットパック</mark>。',
    },
    {
        category: 'ブキセット',
        title: 'ロングブラスター',
        body: 'サブは<mark>キューバンボム</mark>、スペシャルは<mark>ホップソナー</mark>。',
    },
    {
        category: 'ブキセット',
        title: 'ロングブラスターカスタム',
        body: 'サブは<mark>スプラッシュボム</mark>、スペシャルは<mark>テイオウイカ</mark>。',
    },
    {
        category: 'ブキセット',
        title: 'ホットブラスター',
        body: 'サブは<mark>ロボットボム</mark>、スペシャルは<mark>グレートバリア</mark>。',
    },
    {
        category: 'ブキセット',
        title: 'ホットブラスターカスタム',
        body: 'サブは<mark>ポイントセンサー</mark>、スペシャルは<mark>ウルトラチャクチ</mark>。',
    },
    {
        category: 'ブキセット',
        title: 'ホットブラスター艶',
        body: 'サブは<mark>ジャンプビーコン</mark>、スペシャルは<mark>カニタンク</mark>。',
    },
    {
        category: 'ブキセット',
        title: 'クラッシュブラスター',
        body: 'サブは<mark>スプラッシュボム</mark>、スペシャルは<mark>ウルトラショット</mark>。',
    },
    {
        category: 'ブキセット',
        title: 'クラッシュブラスターネオ',
        body: 'サブは<mark>カーリングボム</mark>、スペシャルは<mark>デコイチラシ</mark>。',
    },
    {
        category: 'ブキセット',
        title: 'Rブラスターエリート',
        body: 'サブは<mark>ポイズンミスト</mark>、スペシャルは<mark>キューインキ</mark>。',
    },
    {
        category: 'ブキセット',
        title: 'Rブラスターエリートデコ',
        body: 'サブは<mark>ラインマーカー</mark>、スペシャルは<mark>メガホンレーザー5.1ch</mark>。',
    },
    {
        category: 'ブキセット',
        title: 'RブラスターエリートWNTR',
        body: 'サブは<mark>キューバンボム</mark>、スペシャルは<mark>エナジースタンド</mark>。',
    },
    {
        category: 'ブキセット',
        title: 'ノヴァブラスター',
        body: 'サブは<mark>スプラッシュボム</mark>、スペシャルは<mark>ショクワンダー</mark>。',
    },
    {
        category: 'ブキセット',
        title: 'ノヴァブラスターネオ',
        body: 'サブは<mark>タンサンボム</mark>、スペシャルは<mark>ウルトラハンコ</mark>。',
    },
    {
        category: 'ブキセット',
        title: 'オーダーブラスター レプリカ',
        body: 'サブは<mark>スプラッシュボム</mark>、スペシャルは<mark>ショクワンダー</mark>。',
    },
    {
        category: 'ブキセット',
        title: 'ラピッドブラスター',
        body: 'サブは<mark>トラップ</mark>、スペシャルは<mark>トリプルトルネード</mark>。',
    },
    {
        category: 'ブキセット',
        title: 'ラピッドブラスターデコ',
        body: 'サブは<mark>トーピード</mark>、スペシャルは<mark>ジェットパック</mark>。',
    },
    {
        category: 'ブキセット',
        title: 'S-BLAST92',
        body: 'サブは<mark>スプリンクラー</mark>、スペシャルは<mark>サメライド</mark>。',
    },
    {
        category: 'ブキセット',
        title: 'S-BLAST91',
        body: 'サブは<mark>クイックボム</mark>、スペシャルは<mark>ナイスダマ</mark>。',
    },
    {
        category: 'ブキセット',
        title: 'ダイナモローラー',
        body: 'サブは<mark>スプリンクラー</mark>、スペシャルは<mark>エナジースタンド</mark>。',
    },
    {
        category: 'ブキセット',
        title: 'ダイナモローラーテスラ',
        body: 'サブは<mark>スプラッシュボム</mark>、スペシャルは<mark>デコイチラシ</mark>。',
    },
    {
        category: 'ブキセット',
        title: 'ダイナモローラー冥',
        body: 'サブは<mark>ポイントセンサー</mark>、スペシャルは<mark>メガホンレーザー5.1ch</mark>。',
    },
    {
        category: 'ブキセット',
        title: 'スプラローラー',
        body: 'サブは<mark>カーリングボム</mark>、スペシャルは<mark>グレートバリア</mark>。',
    },
    {
        category: 'ブキセット',
        title: 'スプラローラーコラボ',
        body: 'サブは<mark>ジャンプビーコン</mark>、スペシャルは<mark>テイオウイカ</mark>。',
    },
    {
        category: 'ブキセット',
        title: 'オーダーローラー レプリカ',
        body: 'サブは<mark>カーリングボム</mark>、スペシャルは<mark>グレートバリア</mark>。',
    },
    {
        category: 'ブキセット',
        title: 'ヴァリアブルローラー',
        body: 'サブは<mark>トラップ</mark>、スペシャルは<mark>マルチミサイル</mark>。',
    },
    {
        category: 'ブキセット',
        title: 'ヴァリアブルローラーフォイル',
        body: 'サブは<mark>キューバンボム</mark>、スペシャルは<mark>スミナガシート</mark>。',
    },
    {
        category: 'ブキセット',
        title: 'カーボンローラー',
        body: 'サブは<mark>ロボットボム</mark>、スペシャルは<mark>ショクワンダー</mark>。',
    },
    {
        category: 'ブキセット',
        title: 'カーボンローラーデコ',
        body: 'サブは<mark>クイックボム</mark>、スペシャルは<mark>ウルトラショット</mark>。',
    },
    {
        category: 'ブキセット',
        title: 'カーボンローラーANGL',
        body: 'サブは<mark>タンサンボム</mark>、スペシャルは<mark>デコイチラシ</mark>。',
    },
    {
        category: 'ブキセット',
        title: 'ワイドローラー',
        body: 'サブは<mark>スプラッシュシールド</mark>、スペシャルは<mark>キューインキ</mark>。',
    },
    {
        category: 'ブキセット',
        title: 'ワイドローラーコラボ',
        body: 'サブは<mark>ラインマーカー</mark>、スペシャルは<mark>アメフラシ</mark>。',
    },
    {
        category: 'ブキセット',
        title: 'ワイドローラー惑',
        body: 'サブは<mark>トーピード</mark>、スペシャルは<mark>ウルトラチャクチ</mark>。',
    },
    {
        category: 'ブキセット',
        title: 'パブロ',
        body: 'サブは<mark>スプラッシュボム</mark>、スペシャルは<mark>メガホンレーザー5.1ch</mark>。',
    },
    {
        category: 'ブキセット',
        title: 'パブロ・ヒュー',
        body: 'サブは<mark>トラップ</mark>、スペシャルは<mark>ウルトラハンコ</mark>。',
    },
    {
        category: 'ブキセット',
        title: 'ホクサイ',
        body: 'サブは<mark>キューバンボム</mark>、スペシャルは<mark>ショクワンダー</mark>。',
    },
    {
        category: 'ブキセット',
        title: 'ホクサイ・ヒュー',
        body: 'サブは<mark>ジャンプビーコン</mark>、スペシャルは<mark>アメフラシ</mark>。',
    },
    {
        category: 'ブキセット',
        title: 'オーダーブラシ レプリカ',
        body: 'サブは<mark>キューバンボム</mark>、スペシャルは<mark>ショクワンダー</mark>。',
    },
    {
        category: 'ブキセット',
        title: 'ホクサイ彗',
        body: 'サブは<mark>ロボットボム</mark>、スペシャルは<mark>テイオウイカ</mark>。',
    },
    {
        category: 'ブキセット',
        title: 'フィンセント',
        body: 'サブは<mark>カーリングボム</mark>、スペシャルは<mark>ホップソナー</mark>。',
    },
    {
        category: 'ブキセット',
        title: 'フィンセント・ヒュー',
        body: 'サブは<mark>ポイントセンサー</mark>、スペシャルは<mark>マルチミサイル</mark>。',
    },
    {
        category: 'ブキセット',
        title: 'フィンセントBRNZ',
        body: 'サブは<mark>スプラッシュシールド</mark>、スペシャルは<mark>ウルトラショット</mark>。',
    },
    {
        category: 'ブキセット',
        title: 'リッター4K',
        body: 'サブは<mark>トラップ</mark>、スペシャルは<mark>ホップソナー</mark>。',
    },
    {
        category: 'ブキセット',
        title: 'リッター4Kカスタム',
        body: 'サブは<mark>ジャンプビーコン</mark>、スペシャルは<mark>テイオウイカ</mark>。',
    },
    {
        category: 'ブキセット',
        title: 'スプラチャージャー',
        body: 'サブは<mark>スプラッシュボム</mark>、スペシャルは<mark>キューインキ</mark>。',
    },
    {
        category: 'ブキセット',
        title: 'スプラチャージャーコラボ',
        body: 'サブは<mark>スプラッシュシールド</mark>、スペシャルは<mark>トリプルトルネード</mark>。',
    },
    {
        category: 'ブキセット',
        title: 'オーダーチャージャー レプリカ',
        body: 'サブは<mark>スプラッシュボム</mark>、スペシャルは<mark>キューインキ</mark>。',
    },
    {
        category: 'ブキセット',
        title: 'スプラチャージャーFRST',
        body: 'サブは<mark>スプリンクラー</mark>、スペシャルは<mark>カニタンク</mark>。',
    },
    {
        category: 'ブキセット',
        title: '14式竹筒銃・甲',
        body: 'サブは<mark>ロボットボム</mark>、スペシャルは<mark>メガホンレーザー5.1ch</mark>。',
    },
    {
        category: 'ブキセット',
        title: '14式竹筒銃・乙',
        body: 'サブは<mark>タンサンボム</mark>、スペシャルは<mark>デコイチラシ</mark>。',
    },
    {
        category: 'ブキセット',
        title: 'スクイックリンα',
        body: 'サブは<mark>ポイントセンサー</mark>、スペシャルは<mark>グレートバリア</mark>。',
    },
    {
        category: 'ブキセット',
        title: 'スクイックリンβ',
        body: 'サブは<mark>ロボットボム</mark>、スペシャルは<mark>ショクワンダー</mark>。',
    },
    {
        category: 'ブキセット',
        title: 'ソイチューバー',
        body: 'サブは<mark>トーピード</mark>、スペシャルは<mark>マルチミサイル</mark>。',
    },
    {
        category: 'ブキセット',
        title: 'ソイチューバーカスタム',
        body: 'サブは<mark>タンサンボム</mark>、スペシャルは<mark>ウルトラハンコ</mark>。',
    },
    {
        category: 'ブキセット',
        title: 'スプラスコープ',
        body: 'サブは<mark>スプラッシュボム</mark>、スペシャルは<mark>キューインキ</mark>。',
    },
    {
        category: 'ブキセット',
        title: 'スプラスコープコラボ',
        body: 'サブは<mark>スプラッシュシールド</mark>、スペシャルは<mark>トリプルトルネード</mark>。',
    },
    {
        category: 'ブキセット',
        title: 'スプラスコープFRST',
        body: 'サブは<mark>スプリンクラー</mark>、スペシャルは<mark>カニタンク</mark>。',
    },
    {
        category: 'ブキセット',
        title: '4Kスコープ',
        body: 'サブは<mark>トラップ</mark>、スペシャルは<mark>ホップソナー</mark>。',
    },
    {
        category: 'ブキセット',
        title: 'R-PEN/5H',
        body: 'サブは<mark>スプリンクラー</mark>、スペシャルは<mark>エナジースタンド</mark>。',
    },
    {
        category: 'ブキセット',
        title: 'R-PEN/5B',
        body: 'サブは<mark>スプラッシュシールド</mark>、スペシャルは<mark>アメフラシ</mark>。',
    },
    {
        category: 'ブキセット',
        title: 'スクリュースロッシャー',
        body: 'サブは<mark>タンサンボム</mark>、スペシャルは<mark>ナイスダマ</mark>。',
    },
    {
        category: 'ブキセット',
        title: 'スクリュースロッシャーネオ',
        body: 'サブは<mark>ポイントセンサー</mark>、スペシャルは<mark>ウルトラショット</mark>。',
    },
    {
        category: 'ブキセット',
        title: 'エクスプロッシャー',
        body: 'サブは<mark>ポイントセンサー</mark>、スペシャルは<mark>アメフラシ</mark>。',
    },
    {
        category: 'ブキセット',
        title: 'エクスプロッシャーカスタム',
        body: 'サブは<mark>スプラッシュシールド</mark>、スペシャルは<mark>ウルトラチャクチ</mark>。',
    },
    {
        category: 'ブキセット',
        title: 'オーバーフロッシャー',
        body: 'サブは<mark>スプリンクラー</mark>、スペシャルは<mark>アメフラシ</mark>。',
    },
    {
        category: 'ブキセット',
        title: 'オーバーフロッシャーデコ',
        body: 'サブは<mark>ラインマーカー</mark>、スペシャルは<mark>テイオウイカ</mark>。',
    },
    {
        category: 'ブキセット',
        title: 'バケットスロッシャー',
        body: 'サブは<mark>スプラッシュボム</mark>、スペシャルは<mark>トリプルトルネード</mark>。',
    },
    {
        category: 'ブキセット',
        title: 'バケットスロッシャーデコ',
        body: 'サブは<mark>ラインマーカー</mark>、スペシャルは<mark>ショクワンダー</mark>。',
    },
    {
        category: 'ブキセット',
        title: 'オーダースロッシャー レプリカ',
        body: 'サブは<mark>スプラッシュボム</mark>、スペシャルは<mark>トリプルトルネード</mark>。',
    },
    {
        category: 'ブキセット',
        title: 'ヒッセン',
        body: 'サブは<mark>ポイズンミスト</mark>、スペシャルは<mark>ジェットパック</mark>。',
    },
    {
        category: 'ブキセット',
        title: 'ヒッセン・ヒュー',
        body: 'サブは<mark>タンサンボム</mark>、スペシャルは<mark>エナジースタンド</mark>。',
    },
    {
        category: 'ブキセット',
        title: 'ヒッセンASH',
        body: 'サブは<mark>スプラッシュボム</mark>、スペシャルは<mark>スミナガシート</mark>。',
    },
    {
        category: 'ブキセット',
        title: 'モップリン',
        body: 'サブは<mark>キューバンボム</mark>、スペシャルは<mark>サメライド</mark>。',
    },
    {
        category: 'ブキセット',
        title: 'モップリンD',
        body: 'サブは<mark>ジャンプビーコン</mark>、スペシャルは<mark>ホップソナー</mark>。',
    },
    {
        category: 'ブキセット',
        title: 'モップリン角',
        body: 'サブは<mark>カーリング</mark>、スペシャルは<mark>カニタンク</mark>。',
    },
    {
        category: 'ブキセット',
        title: 'ハイドラント',
        body: 'サブは<mark>ロボットボム</mark>、スペシャルは<mark>ナイスダマ</mark>。',
    },
    {
        category: 'ブキセット',
        title: 'ハイドラント・カスタム',
        body: 'サブは<mark>トラップ</mark>、スペシャルは<mark>スミナガシート</mark>。',
    },
    {
        category: 'ブキセット',
        title: 'ハイドラント圧',
        body: 'サブは<mark>スプリンクラー</mark>、スペシャルは<mark>グレートバリア</mark>。',
    },
    {
        category: 'ブキセット',
        title: 'クーゲルシュライバー',
        body: 'サブは<mark>タンサンボム</mark>、スペシャルは<mark>ジェットパック</mark>。',
    },
    {
        category: 'ブキセット',
        title: 'クーゲルシュライバー・ヒュー',
        body: 'サブは<mark>トラップ</mark>、スペシャルは<mark>キューインキ</mark>。',
    },
    {
        category: 'ブキセット',
        title: 'スプラスピナー',
        body: 'サブは<mark>クイックボム</mark>、スペシャルは<mark>ウルトラハンコ</mark>。',
    },
    {
        category: 'ブキセット',
        title: 'スプラスピナーコラボ',
        body: 'サブは<mark>ポイズンミスト</mark>、スペシャルは<mark>グレートバリア</mark>。',
    },
    {
        category: 'ブキセット',
        title: 'スプラスピナーPYTN',
        body: 'サブは<mark>ジャンプビーコン</mark>、スペシャルは<mark>ウルトラショット</mark>。',
    },
    {
        category: 'ブキセット',
        title: 'ノーチラス47',
        body: 'サブは<mark>ポイントセンサー</mark>、スペシャルは<mark>アメフラシ</mark>。',
    },
    {
        category: 'ブキセット',
        title: 'ノーチラス79',
        body: 'サブは<mark>キューバンボム</mark>、スペシャルは<mark>ウルトラチャクチ</mark>。',
    },
    {
        category: 'ブキセット',
        title: 'バレルスピナー',
        body: 'サブは<mark>スプリンクラー</mark>、スペシャルは<mark>ホップソナー</mark>。',
    },
    {
        category: 'ブキセット',
        title: 'バレルスピナーデコ',
        body: 'サブは<mark>ポイントセンサー</mark>、スペシャルは<mark>テイオウイカ</mark>。',
    },
    {
        category: 'ブキセット',
        title: 'オーダースピナー レプリカ',
        body: 'サブは<mark>スプリンクラー</mark>、スペシャルは<mark>ホップソナー</mark>。',
    },
    {
        category: 'ブキセット',
        title: 'イグザミナー',
        body: 'サブは<mark>カーリングボム</mark>、スペシャルは<mark>エナジースタンド</mark>。',
    },
    {
        category: 'ブキセット',
        title: 'イグザミナー・ヒュー',
        body: 'サブは<mark>スプラッシュボム</mark>、スペシャルは<mark>カニタンク</mark>。',
    },
    {
        category: 'ブキセット',
        title: 'ケルビン525',
        body: 'サブは<mark>スプラッシュシールド</mark>、スペシャルは<mark>ナイスダマ</mark>。',
    },
    {
        category: 'ブキセット',
        title: 'ケルビン525デコ',
        body: 'サブは<mark>ポイントセンサー</mark>、スペシャルは<mark>ウルトラショット</mark>。',
    },
    {
        category: 'ブキセット',
        title: 'クアッドホッパーブラック',
        body: 'サブは<mark>ロボットボム</mark>、スペシャルは<mark>サメライド</mark>。',
    },
    {
        category: 'ブキセット',
        title: 'クアッドホッパーホワイト',
        body: 'サブは<mark>スプリンクラー</mark>、スペシャルは<mark>ショクワンダー</mark>。',
    },
    {
        category: 'ブキセット',
        title: 'スパッタリー',
        body: 'サブは<mark>ジャンプビーコン</mark>、スペシャルは<mark>エナジースタンド</mark>。',
    },
    {
        category: 'ブキセット',
        title: 'スパッタリー・ヒュー',
        body: 'サブは<mark>トーピード</mark>、スペシャルは<mark>サメライド</mark>。',
    },
    {
        category: 'ブキセット',
        title: 'スパッタリーOWL',
        body: 'サブは<mark>スプラッシュボム</mark>、スペシャルは<mark>メガホンレーザー5.1ch</mark>。',
    },
    {
        category: 'ブキセット',
        title: 'スプラマニューバー',
        body: 'サブは<mark>キューバンボム</mark>、スペシャルは<mark>カニタンク</mark>。',
    },
    {
        category: 'ブキセット',
        title: 'スプラマニューバーコラボ',
        body: 'サブは<mark>カーリングボム</mark>、スペシャルは<mark>ウルトラチャクチ</mark>。',
    },
    {
        category: 'ブキセット',
        title: 'オーダーマニューバー レプリカ',
        body: 'サブは<mark>キューバンボム</mark>、スペシャルは<mark>カニタンク</mark>。',
    },
    {
        category: 'ブキセット',
        title: 'スプラマニューバー耀',
        body: 'サブは<mark>タンサンボム</mark>、スペシャルは<mark>グレートバリア</mark>。',
    },
    {
        category: 'ブキセット',
        title: 'デュアルスイーパー',
        body: 'サブは<mark>スプラッシュボム</mark>、スペシャルは<mark>ホップソナー</mark>。',
    },
    {
        category: 'ブキセット',
        title: 'デュアルスイーパーカスタム',
        body: 'サブは<mark>ジャンプビーコン</mark>、スペシャルは<mark>デコイチラシ</mark>。',
    },
    {
        category: 'ブキセット',
        title: 'デュアルスイーパー蹄',
        body: 'サブは<mark>ポイントセンサー</mark>、スペシャルは<mark>スミナガシート</mark>。',
    },
    {
        category: 'ブキセット',
        title: 'ガエンFF',
        body: 'サブは<mark>トラップ</mark>、スペシャルは<mark>メガホンレーザー5.1ch</mark>。',
    },
    {
        category: 'ブキセット',
        title: 'ガエンFFカスタム',
        body: 'サブは<mark>クイックボム</mark>、スペシャルは<mark>トリプルトルネード</mark>。',
    },
    {
        category: 'ブキセット',
        title: 'スパイガジェット',
        body: 'サブは<mark>トラップ</mark>、スペシャルは<mark>サメライド</mark>。',
    },
    {
        category: 'ブキセット',
        title: 'スパイガジェットソレーラ',
        body: 'サブは<mark>トーピード</mark>、スペシャルは<mark>スミナガシート</mark>。',
    },
    {
        category: 'ブキセット',
        title: 'スパイガジェット繚',
        body: 'サブは<mark>カーリングボム</mark>、スペシャルは<mark>メガホンレーザー5.1ch</mark>。',
    },
    {
        category: 'ブキセット',
        title: 'キャンピングシェルター',
        body: 'サブは<mark>ジャンプビーコン</mark>、スペシャルは<mark>キューインキ</mark>。',
    },
    {
        category: 'ブキセット',
        title: 'キャンピングシェルターソレーラ',
        body: 'サブは<mark>トラップ</mark>、スペシャルは<mark>ウルトラショット</mark>。',
    },
    {
        category: 'ブキセット',
        title: 'キャンピングシェルターCREM',
        body: 'サブは<mark>ポイズンミスト</mark>、スペシャルは<mark>デコイチラシ</mark>。',
    },
    {
        category: 'ブキセット',
        title: 'パラシェルター',
        body: 'サブは<mark>スプリンクラー</mark>、スペシャルは<mark>トリプルトルネード</mark>。',
    },
    {
        category: 'ブキセット',
        title: 'パラシェルターソレーラ',
        body: 'サブは<mark>ロボットボム</mark>、スペシャルは<mark>ジェットパック</mark>。',
    },
    {
        category: 'ブキセット',
        title: 'オーダーシェルター レプリカ',
        body: 'サブは<mark>スプリンクラー</mark>、スペシャルは<mark>トリプルトルネード</mark>。',
    },
    {
        category: 'ブキセット',
        title: '24式張替傘・甲',
        body: 'サブは<mark>ラインマーカー</mark>、スペシャルは<mark>グレートバリア</mark>。',
    },
    {
        category: 'ブキセット',
        title: '24式張替傘・乙',
        body: 'サブは<mark>ポイズンミスト</mark>、スペシャルは<mark>ウルトラチャクチ</mark>。',
    },
    {
        category: 'ブキセット',
        title: 'トライストリンガー',
        body: 'サブは<mark>ポイズンミスト</mark>、スペシャルは<mark>メガホンレーザー5.1ch</mark>。',
    },
    {
        category: 'ブキセット',
        title: 'トライストリンガーコラボ',
        body: 'サブは<mark>スプリンクラー</mark>、スペシャルは<mark>デコイチラシ</mark>。',
    },
    {
        category: 'ブキセット',
        title: 'オーダーストリンガー レプリカ',
        body: 'サブは<mark>ポイズンミスト</mark>、スペシャルは<mark>メガホンレーザー5.1ch</mark>。',
    },
    {
        category: 'ブキセット',
        title: 'トライストリンガー燈',
        body: 'サブは<mark>ラインマーカー</mark>、スペシャルは<mark>ジェットパック</mark>。',
    },
    {
        category: 'ブキセット',
        title: 'LACT-450',
        body: 'サブは<mark>カーリングボム</mark>、スペシャルは<mark>マルチミサイル</mark>。',
    },
    {
        category: 'ブキセット',
        title: 'LACT-450デコ',
        body: 'サブは<mark>スプラッシュシールド</mark>、スペシャルは<mark>サメライド</mark>。',
    },
    {
        category: 'ブキセット',
        title: 'LACT-450MILK',
        body: 'サブは<mark>トーピード</mark>、スペシャルは<mark>ナイスダマ</mark>。',
    },
    {
        category: 'ブキセット',
        title: 'フルイドV',
        body: 'サブは<mark>ロボットボム</mark>、スペシャルは<mark>ウルトラハンコ</mark>。',
    },
    {
        category: 'ブキセット',
        title: 'フルイドVカスタム',
        body: 'サブは<mark>ポイントセンサー</mark>、スペシャルは<mark>ホップソナー</mark>。',
    },
    {
        category: 'ブキセット',
        title: 'ドライブワイパー',
        body: 'サブは<mark>トーピード</mark>、スペシャルは<mark>ウルトラハンコ</mark>。',
    },
    {
        category: 'ブキセット',
        title: 'ドライブワイパーデコ',
        body: 'サブは<mark>ジャンプビーコン</mark>、スペシャルは<mark>マルチミサイル</mark>。',
    },
    {
        category: 'ブキセット',
        title: 'ドライブワイパーRUST',
        body: 'サブは<mark>カーリングボム</mark>、スペシャルは<mark>ウルトラショット</mark>。',
    },
    {
        category: 'ブキセット',
        title: 'ジムワイパー',
        body: 'サブは<mark>クイックボム</mark>、スペシャルは<mark>ショクワンダー</mark>。',
    },
    {
        category: 'ブキセット',
        title: 'ジムワイパー・ヒュー',
        body: 'サブは<mark>ポイズンミスト</mark>、スペシャルは<mark>カニタンク</mark>。',
    },
    {
        category: 'ブキセット',
        title: 'オーダーワイパー レプリカ',
        body: 'サブは<mark>クイックボム</mark>、スペシャルは<mark>ショクワンダー</mark>。',
    },
    {
        category: 'ブキセット',
        title: 'ジムワイパー封',
        body: 'サブは<mark>ロボットボム</mark>、スペシャルは<mark>ナイスダマ</mark>。',
    },
    {
        category: 'ブキセット',
        title: 'デンタルワイパーミント',
        body: 'サブは<mark>キューバンボム</mark>、スペシャルは<mark>グレートバリア</mark>。',
    },
    {
        category: 'ブキセット',
        title: 'デンタルワイパースミ',
        body: 'サブは<mark>スプラッシュシールド</mark>、スペシャルは<mark>ジェットパック</mark>。',
    },
];

const categoryClassName = {
    'メイン': 'main',
    'サブ': 'sub',
    'スペシャル': 'special',
    'ギアパワー': 'gear-power',
    'ブキセット': 'weapon-set',
};

// 現在のインデクス
let index = 0;

// 要素
const backButton = document.querySelector('#back'); // もどるボタン
const nextButton = document.querySelector('#next'); // すすむボタン
const cardCategory = document.querySelector('#card-category'); // カテゴリー
const cardTitle = document.querySelector('#card-title'); // タイトル
const cardBody = document.querySelector('#card-body'); // 本文
const mainCheck = document.querySelector('#main'); // メインのチェックボックス
const subCheck = document.querySelector('#sub'); // サブのチェックボックス
const specialCheck = document.querySelector('#special'); // スペシャルのチェックボックス
const gearPowerCheck = document.querySelector('#gear-power'); // スペシャルのチェックボックス
const weaponSetCheck = document.querySelector('#weapon-set'); // ブキセットのチェックボックス

// カードをシャッフル
for(let i = 0; i < card.length - 1; i++) {
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

// 前のカードを表示
const backCard = (event) => {
    if(
        !mainCheck.checked &&
        !subCheck.checked &&
        !specialCheck.checked &&
        !gearPowerCheck.checked &&
        !weaponSetCheck.checked
    ) return;

    let c = null;

    do {
        index--;
        if(index < 0) index = card.length - 1;
        c = card[index].category;
    } while (
        c === 'メイン' && !mainCheck.checked ||
        c === 'サブ' && !subCheck.checked ||
        c === 'スペシャル' && !specialCheck.checked ||
        c === 'ギアパワー' && !gearPowerCheck.checked ||
        c === 'ブキセット' && !weaponSetCheck.checked
    );
    viewCard();
};

// 次のカードを表示
const nextCard = (event) => {
    if(
        !mainCheck.checked &&
        !subCheck.checked &&
        !specialCheck.checked &&
        !gearPowerCheck.checked &&
        !weaponSetCheck.checked
    ) return;

    let c = null;

    do {
        index++;
        if(card.length <= index) index = 0;
        c = card[index].category;
    } while (
        c === 'メイン' && !mainCheck.checked ||
        c === 'サブ' && !subCheck.checked ||
        c === 'スペシャル' && !specialCheck.checked ||
        c === 'ギアパワー' && !gearPowerCheck.checked ||
        c === 'ブキセット' && !weaponSetCheck.checked
    );
    viewCard();
};

backButton.addEventListener('click', backCard); // 戻るボタンを押した
nextButton.addEventListener('click', nextCard); // 進むボタンを押した