/**
 * レビューデータ
 *
 * App Store / Google Play のユーザーレビューを一元管理
 * Subject × Store でネストして管理
 */

// ============================================
// 型定義
// ============================================

export type Subject = "history" | "geography" | "civics";
export type Store = "app-store" | "google-play";

export type Review = {
	rating: number;
	subject: Subject;
	store: Store;
	title?: string;
	content: string;
	author?: string;
	date?: string;
};

// ============================================
// 科目メタデータ
// ============================================

export const SUBJECT_LABELS: Record<Subject, string> = {
	history: "歴史",
	geography: "地理",
	civics: "公民",
};

/** Chakra カラートークン */
export const SUBJECT_COLORS: Record<Subject, string> = {
	history: "red.500",
	geography: "teal.500",
	civics: "blue.500",
};

// ============================================
// レビューデータ
// ============================================

export const REVIEWS: Record<Subject, Record<Store, Review[]>> = {
	history: {
		"app-store": [
			{
				rating: 5,
				subject: "history",
				store: "app-store",
				title: "歴史大好き",
				content: "歴史大好きだけどこれはおもろい",
				author: "うぁうき",
				date: "2026/04/05",
			},
			{
				rating: 5,
				subject: "history",
				store: "app-store",
				title: "わかりやすい",
				content: "資料が豊富でわかりやすいです",
				author: "あのまの",
				date: "2026/04/02",
			},
			{
				rating: 5,
				subject: "history",
				store: "app-store",
				title: "最高",
				content:
					"あの、本当に最高です。中三受験生です。苦手な歴史もこのアプリなら自分から進んで勉強することが出来ます！！いつも歴史を勉強する際はほかの出来事との関連をいちいち調べたり分からない語句を調べるのが面倒くさくて頭に入らないのですが、このアプリなら回答のあと詳しーーい説明を入れて毎回納得できるのでほんとに最高です。受験まであと1ヶ月なのでこのアプリで頑張ります。公民地理も使っています！！ほかの教科も出たらいいな",
				author: "ictcthlbiinin",
				date: "2026/01/29",
			},
			{
				rating: 5,
				subject: "history",
				store: "app-store",
				title: "内容は最高！！でも少しだけ、、",
				content:
					"内容は最高すぎるんですが、音楽をバックグラウンドで聴けないのが少し残念です",
				author: "slen156eq",
				date: "2026/01/25",
			},
			{
				rating: 5,
				subject: "history",
				store: "app-store",
				title: "すばらしい",
				content: "いい勉強になったわよざます",
				author: "いやさかニキ",
				date: "2025/12/05",
			},
			{
				rating: 5,
				subject: "history",
				store: "app-store",
				title: "いい",
				content: "わかりやすい！こんなのはじめて",
				author: "にックとネーむ",
				date: "2025/11/21",
			},
			{
				rating: 4,
				subject: "history",
				store: "app-store",
				title: "good",
				content: "わかりやすい",
				author: "ちずおた",
				date: "2025/10/27",
			},
			{
				rating: 5,
				subject: "history",
				store: "app-store",
				title: "LYNX",
				content: "説明があってわかりやすい",
				author: "qosjay",
				date: "2025/10/19",
			},
			{
				rating: 5,
				subject: "history",
				store: "app-store",
				title: "良い",
				content:
					"難しい問題があるアプリを探していたのでインストール。内容としては発展的なものから標準的なものまでかなり幅広い。自分の苦手なキーワードなども分析してくれる。デメリットは読み込みが遅すぎる。二回くらい再起動しないと問題が始まらない時があるのでそこを改善してほしい。それ以外は最高。",
				author: "義和団事件",
				date: "2025/09/20",
			},
			{
				rating: 5,
				subject: "history",
				store: "app-store",
				title: "神アプリ",
				content:
					"私みたいな勉強中毒者にとってスマホで簡単に歴史が学べるのはとてもありがたいです。広告がうざったるいので課金しました。課金する価値があると思います。定期的にアプデが入って学習記録が全滅するのだけ気になります。ただ、その分もう一回やり直せばいいので勉強にはなってます！",
				author: "勉強しか勝たん♡",
				date: "2025/07/21",
			},
			{
				rating: 5,
				subject: "history",
				store: "app-store",
				title: "素晴らしい！",
				content:
					"無料アプリなのに広告も少なく、勉強に適しているアプリだと思います。問題もランダムですし、ランダムに選ぶ問題の範囲を比較的狭められるので小テストなどの勉強にも良いと思います！オススメです！",
				author: "歴史が難しい",
				date: "2025/06/26",
			},
			{
				rating: 4,
				subject: "history",
				store: "app-store",
				title: "物凄く良い！だからこそ…",
				content:
					"高校歴史版が欲しい！他のアプリを見るに中学の内容を専門に開発しているようだから難しいとは思うが。",
				author: "リーチレオン",
				date: "2025/05/11",
			},
			{
				rating: 5,
				subject: "history",
				store: "app-store",
				title: "本当にいれてよかったアプリです。",
				content:
					"今までの学習アプリの中で一番だと感じました！設定によって、回答を隠してじっくり考えてから選択肢が出てくるようにできます。選択肢をチラ見して少しズルすることも防げるのでよかったら設定を開いてみてください。そして、選択肢の中に分からないものがあった時、毎回調べるのが面倒だったり、そもそも調べなかったりすると思いますが、回答し終わった時にまた選択肢をタップすると内容を知ることができます。苦手なところやまだやっていないところも%や円グラフで分かるのでここも便利だと思います。",
				author: "鬼にクラッカー",
				date: "2025/02/19",
			},
			{
				rating: 5,
				subject: "history",
				store: "app-store",
				title: "問題点",
				content:
					"アプリとしての完成度も高いしすごく使いやすいけど、「新思潮派」をタップしたら芥川龍之介の見出しが出てくるなど、おした用語とは違う用語の解説が出てくることがあるから、なおしてほしい。",
				author: "とおりすがりの仮面ライダー",
				date: "2025/02/19",
			},
			{
				rating: 5,
				subject: "history",
				store: "app-store",
				title: "これを使って1週間で偏差値が3上がりました",
				content: "すごすぎます",
				author: "クリゲー",
				date: "2024/12/30",
			},
			{
				rating: 5,
				subject: "history",
				store: "app-store",
				title: "とても助かってます！",
				content:
					"下の方に小さな広告はありますが悪質ではないし、何より解説がすごく詳しくてとても参考になっています！地理と政治、国際もあったらいいなと思っています。運営さん本当にありがとうございます！もっと伸びるべきなのではないかと思うアプリです。",
				author: "dfgbghj",
				date: "2024/12/19",
			},
			{
				rating: 5,
				subject: "history",
				store: "app-store",
				title: "すごいいい",
				content:
					"言葉の解説も細かく書いてあるし分かんなかったところがわかるようになると思う。あとゲームみたいで楽しい。😽💕 BGMとかもかわいくてさいこーです。",
				author: "まるまーままま",
				date: "2024/11/28",
			},
			{
				rating: 5,
				subject: "history",
				store: "app-store",
				title: "すごく使いやすい",
				content:
					"画面もシンプルでちょうどいい 世界恐慌と全体主義のファシズムの選択肢が2つになっているので直して欲しいです",
				author: "!@5#7",
				date: "2024/08/21",
			},
			{
				rating: 5,
				subject: "history",
				store: "app-store",
				title: "最高！",
				content: "地理バージョンも待ってます！",
				author: "ひろきよ",
				date: "2024/08/15",
			},
			{
				rating: 5,
				subject: "history",
				store: "app-store",
				title: "歴史",
				content: "苦手な所が表示されてなおかつ、説明をしてくれるのがいい",
				author: "鱈ダヨー > (˙︶˙` ∋",
				date: "2024/01/22",
			},
			{
				rating: 4,
				subject: "history",
				store: "app-store",
				title: "使い始めたばかりですが",
				content:
					"デザインもシンプルで分かりやすく、解説もしっかり書かれていていいと思います。隙間時間に手軽に出来るので使いやすいです。",
				author: "病みの島",
				date: "2024/01/05",
			},
			{
				rating: 5,
				subject: "history",
				store: "app-store",
				title: "感謝",
				content:
					"今年受験生なのですが暗記が苦手でアプリ探しても中々無くて焦りましたがこのアプリがあったので使って見たら点数が上がって使わせて頂いています。感謝してます。",
				author: "Kumatsuki",
				date: "2023/11/03",
			},
			{
				rating: 5,
				subject: "history",
				store: "app-store",
				title: "めちゃ楽しいが。",
				content: "太宰府ではなく、大宰府です！",
				author: "やっとあえた",
				date: "2023/10/30",
			},
			{
				rating: 5,
				subject: "history",
				store: "app-store",
				title: "応援してます！🥳👍",
				content:
					"勉強し直そうと思って入れたのですが解説がわかりやすくとても良いです！ですが、地図を使った説明もあるととてもありがたいです😖",
				author: "ニックネーム全部被るやん笑",
				date: "2023/10/20",
			},
			{
				rating: 5,
				subject: "history",
				store: "app-store",
				title: "めっちゃいい！",
				content:
					"解説もめっちゃ詳しく載ってるし、やってて飽きひんかった！今までにやってきた地理のアプリの中でもごっつよかったで！これなら学校行けない自分でも高校受験頑張れそうや！何よりやりやすくてモチベーションえらい上がるしな！自分めっちゃできんやん！って思える！やってよかったって思うわ〜！",
				author: "あいなもみ",
				date: "2023/10/02",
			},
			{
				rating: 5,
				subject: "history",
				store: "app-store",
				title: "たすかってます",
				content:
					"解説がすごく良い。答えの解説だけでなく、選択肢の単語の解説、さらには問題文に出てきた単語に関する解説まであって一問で浮かぶ疑問が全て解消されるしたくさん学べてる実感があっていい。",
				author: "記録魔",
				date: "2023/09/05",
			},
			{
				rating: 4,
				subject: "history",
				store: "app-store",
				title: "最高",
				content:
					"広告が少し多い気がしますが無料なのでいいとします。ですが問題を解くと違う場所が押ささり間違ったことになります",
				author: "りゆずん",
				date: "2023/09/05",
			},
			{
				rating: 4,
				subject: "history",
				store: "app-store",
				title: "要点（個人の意見）",
				content:
					"・問題は詳しい。テストに向くかは個人次第。 ・広告を見なければ次の問題に進めない。悪質。 ・演出が大きいため集中力が削がれる。 ・解説は詳しい。便利。",
				author: "小学5年生です。",
				date: "2023/08/12",
			},
			{
				rating: 5,
				subject: "history",
				store: "app-store",
				title: "最高",
				content:
					"写真もあるし解説もあるしどこができていないかがわかる！本当に愛用してます！本当に欲を言えばなんですが､､､地理も出して欲しいです！こんなにも使いやすいので､､､",
				author: "K4030U",
				date: "2023/08/01",
			},
			{
				rating: 5,
				subject: "history",
				store: "app-store",
				title: "ありがとうございます！！！",
				content:
					"これ本当にいいです！クイズ形式で分かりやすいし、簡単に復習もできる！自分の苦手なワードを出してくれたり、問題をチェックすることで自分の苦手な問題を簡単に練習できます！！！もちろん予習も出来たりするし、自分の理解度がとても分かりやすく表示されてありがたいです！中学生の間はめっちゃ使うと思います！",
				author: "すりづふし",
				date: "2023/06/27",
			},
			{
				rating: 4,
				subject: "history",
				store: "app-store",
				title: "使いやすい！でも…",
				content:
					"とても使いやすく、解説も分かりやすいと感じました！アプリの雰囲気もかわいくて、ただ問題集を解くよりもやる気が出ました！欲を言えば、学年を設定して出題する問題を変える機能をつけてほしいです！「一年生」と選べば、一年生の範囲の問題が出てくるように…みたいな。私自身、まだ中1なので、まだ全然習ってない問題が出て焦りました。予習をしたい時ならいいのですが、テスト前などはテスト範囲の問題を解きたいです。できればでいいので、ご一考いただけますと幸いです！",
				author: "ぺがのんのん",
				date: "2023/06/21",
			},
			{
				rating: 4,
				subject: "history",
				store: "app-store",
				title: "ちょっと…",
				content:
					"他はいいのですが、広告が多いのと、大正デモクラシーのところに選択肢に二つ同じ答えがあるとこがあります…",
				author: "tmgptojmdbw'",
				date: "2023/06/17",
			},
			{
				rating: 5,
				subject: "history",
				store: "app-store",
				title: " •̀֊•́ )\u202A",
				content: "問題の後の解説とかが分かりやすい。",
				author: "姫鷹さくら",
				date: "2023/05/23",
			},
			{
				rating: 4,
				subject: "history",
				store: "app-store",
				title: "広告なくしてー",
				content:
					"凄く簡単でやりやすいけど、広告をなくして欲しいです🙏そしたらめっちゃ良くなると思います(*^^*)",
				author: "さなぁ✨",
				date: "2023/01/29",
			},
			{
				rating: 4,
				subject: "history",
				store: "app-store",
				title: "そのままです",
				content:
					"広告がないともっといいと思います ただでさえ短いので過ぎた願いだとは思いますが..",
				author: "r s y.b",
				date: "2022/11/12",
			},
			{
				rating: 5,
				subject: "history",
				store: "app-store",
				title: "素晴らしいアプリです！！",
				content: "欲を出せば広告を課金で消せるやつを作って欲しいです！！",
				author: "EWACジェガン",
				date: "2022/09/24",
			},
			{
				rating: 4,
				subject: "history",
				store: "app-store",
				title: "内容は良いと思う",
				content: "出題中の背景のアニメーションを切るモードが欲しい。問題文に集中できない。",
				author: "qqqqssssaaa",
				date: "2022/04/24",
			},
			{
				rating: 5,
				subject: "history",
				store: "app-store",
				title: "広告がなければ最高。",
				content: "動画広告を見たら、一ヶ月広告が出ない的なやつ欲しいです。",
				author: "どこにでもいそうなフツーの人",
				date: "2022/04/07",
			},
			{
				rating: 5,
				subject: "history",
				store: "app-store",
				title: "気持ち良く勉強出来ます",
				content:
					"このアプリは、やっていると自然に入っていけるところがとてもいい。答えや答え以外の語句も、説明が充実しているので、効率良く勉強出来るし、画面が綺麗で雰囲気があるから、同じ問題も新鮮な気持ちで取り組めている。とても気持ち良く勉強出来るアプリです。",
				author: "m.m👤",
				date: "2021/09/21",
			},
			{
				rating: 5,
				subject: "history",
				store: "app-store",
				title: "使いやすい！",
				content:
					"暗記量の多い歴史が苦手だったけど、このアプリで苦労せず覚えられるようになった！他のアプリより用語の説明が丁寧で、歴史の流れもわかりやすい。単元別に問題を解けるから定期テストにも重宝しそうです。あと、デザインが綺麗で単純にやってて嫌にならないのもいい👍",
				author: "suuuuum🐻",
				date: "2021/09/12",
			},
		],
		"google-play": [
			{
				rating: 5,
				subject: "history",
				store: "google-play",
				content: "難易度がちょうどいい",
				author: "持田蒼依",
				date: "2026/04/04",
			},
			{
				rating: 5,
				subject: "history",
				store: "google-play",
				content: "使いやすい。",
				author: "中山翔太（Remone4892s）",
				date: "2026/02/25",
			},
			{
				rating: 5,
				subject: "history",
				store: "google-play",
				content: "とてもいい！！お世話になってます",
				author: "TK G",
				date: "2026/02/02",
			},
			{
				rating: 5,
				subject: "history",
				store: "google-play",
				content:
					"今まで使っていたアプリよりも使いやすいです！ 使いやすいUIや、とても丁寧でわかりやすい解説があるので、しっかり覚えられます！特に解説は重要単語にマーカーが引かれているので覚えやすいです！",
				author: "SHOYAN",
				date: "2026/01/31",
			},
			{
				rating: 5,
				subject: "history",
				store: "google-play",
				content:
					"勉強になるし時間が空いたときにできたり、途中で終わっても途中から出来たりバグも一切なくて愛用してます",
				author: "はるはる",
				date: "2025/11/22",
			},
			{
				rating: 4,
				subject: "history",
				store: "google-play",
				content:
					"中学校社会の復習で使える。ただ公民がないので、星4にしてます。公民があれば5にしたい。",
				author: "Makoto Oonisi",
				date: "2025/07/04",
			},
			{
				rating: 5,
				subject: "history",
				store: "google-play",
				content:
					"UIが美しく、機能設計も最高です、他の科目も欲しくなってしまう良アプリ✨ ひとまず課金してやりこみます！",
				author: "J",
				date: "2025/04/26",
			},
			{
				rating: 4,
				subject: "history",
				store: "google-play",
				content: "分かりやすい👍",
				author: "とらまる",
				date: "2025/02/25",
			},
			{
				rating: 4,
				subject: "history",
				store: "google-play",
				content: "画面の動きが重いのが残念です それ以外は今のところ良いと思います",
				author: "Izumisano Station Sandy Rinku Seacle Store",
				date: "2025/02/14",
			},
			{
				rating: 5,
				subject: "history",
				store: "google-play",
				content:
					"とてもいいアプリです。 解説が充実していて、入試の記述対策にもいいと思います。 地理と公民も作ってくれるとありがたいです。 応援してます。",
				author: "田部由奈",
				date: "2025/02/02",
			},
			{
				rating: 5,
				subject: "history",
				store: "google-play",
				content:
					"他の学習アプリと比べても使いやすいしとてもいいアプリだと思います。これからも開発頑張ってください。応援してます。最近ダウンロードしていいアプリ見つけた！と思ったんですが、選択肢の誤植が気になってました。レビュー見たらだいぶ前に指摘されてるし最終更新は去年。これは修正ないのかな…と思ってたんですが、昨日アップデートに気付きました。嬉しいです。",
				author: "Yuki K",
				date: "2024/10/12",
			},
			{
				rating: 4,
				subject: "history",
				store: "google-play",
				content:
					"とても使いやすくてスキマ時間に勉強できます！アプリ全体の明るい雰囲気がモチベーションアップにもなります。四択問題でたまに同じ選択肢が出てくるのは修正していただきたいです。",
				author: "近野愛月",
				date: "2024/06/17",
			},
			{
				rating: 4,
				subject: "history",
				store: "google-play",
				content:
					"報告があるが、三秒ほどで終わるのであまり気にならない。また、歴史の問題は答えたあとに、解説を詳しくしてくれるので勉強になる！",
				author: "鈴木丈弥",
				date: "2023/09/14",
			},
			{
				rating: 5,
				subject: "history",
				store: "google-play",
				content: "問題集があり助かる広告もなく助かる！",
				author: "おすし",
				date: "2023/03/22",
			},
			{
				rating: 4,
				subject: "history",
				store: "google-play",
				content: "勉強になった",
				author: "岡本美代",
				date: "2022/11/30",
			},
			{
				rating: 5,
				subject: "history",
				store: "google-play",
				content:
					"答えにもしっかりとした解説があって、設定で選択問題と自分で答えを書くのと選べるのがすごくいい",
				author: "おすしすしすし",
				date: "2022/01/24",
			},
		],
	},
	geography: {
		"app-store": [
			{
				rating: 5,
				subject: "geography",
				store: "app-store",
				title: "すばらしぃ",
				content: "いいね",
				author: "ねことかひしや",
				date: "2025/11/04",
			},
			{
				rating: 5,
				subject: "geography",
				store: "app-store",
				title: "最高のアプリです！",
				content:
					"中学地理の基礎を学び直すためにダウンロードしました！とても使いやすく、豆知識も勉強になります。",
				author: "仁行順平",
				date: "2025/08/28",
			},
			{
				rating: 5,
				subject: "geography",
				store: "app-store",
				title: "欲しかったアプリ",
				content:
					"以前から歴史版を使っていて他の科目もあればなーと思っていたので、地理版も登場して嬉しいです。間違えた問題が繰り返されるから苦労せずに暗記できるし、その日の挑戦数や理解度が一目でわかるので、自然と100%を目指したくなるのがいい。解説や関連ワードが充実していて知識が広がっていく楽しみがあるのもこのアプリのいいところだと思う。広告がもう少し減ったら最高だけど、本格的に使いたいので広告なしの有料版を購入したいと思ってます。",
				author: "suuuuum🐻",
				date: "2025/07/04",
			},
			{
				rating: 5,
				subject: "geography",
				store: "app-store",
				title: "とても覚えやすい！",
				content:
					"沢山の問題に答えるだけでなく、答えた後の説明を読む事で理解が深まって、関連する知識を自然と覚えられるのが、凄いと思いました。勝手に頭に入って来るって言うか、とても覚え易いです。間違えても覚えていける楽しみを感じるアプリです。",
				author: "m.m👤",
				date: "2025/06/14",
			},
		],
		"google-play": [
			{
				rating: 4,
				subject: "geography",
				store: "google-play",
				content:
					"アプリの機能は、無料で、使いやすくていいと思います。テスト勉強に使いやすくなるように、教科書に掲載されているような重要用語にしぼって取り組めると良くなると思います。（現在は「超重要」を選んでも学校で習わないような用語も出てきます）",
				author: "上籠健人",
				date: "2026/04/05",
			},
			{
				rating: 5,
				subject: "geography",
				store: "google-play",
				content: "広告もあまりないに使いやすすぎる 最高のアプリです",
				author: "みにみに",
				date: "2026/01/25",
			},
			{
				rating: 5,
				subject: "geography",
				store: "google-play",
				content: "とても楽しく覚えれます みなさんもやってみてください",
				author: "瑛太",
				date: "2025/11/02",
			},
			{
				rating: 4,
				subject: "geography",
				store: "google-play",
				content:
					"細かい事まで学べるし、単元(？)ごとにまとめてあって学びたいことがすぐ学べて良いですが、開くのに少し時間がかかったり、学校の勉強よりも細かい事まで問題が出たりするのが難点です。",
				author: "桜",
				date: "2025/10/13",
			},
			{
				rating: 5,
				subject: "geography",
				store: "google-play",
				content:
					"これが私の求めてたものです！！ 今年受験なのでめっちゃ使いたいです！ UIも分かりやすいし、無駄なアニメーションも少なく、信頼できます。 あと、学習時間が出るのも地味に助かります 友達にもおすすめしたいです",
				author: "ポッテイトウ",
				date: "2025/07/29",
			},
			{
				rating: 4,
				subject: "geography",
				store: "google-play",
				content:
					"どれだけ合ってるとかパーセントで表してくれるのですごく勉強しやすい。 だが、全て無料でできるようにして欲しい。",
				author: "大森りんたろう",
				date: "2025/07/14",
			},
			{
				rating: 5,
				subject: "geography",
				store: "google-play",
				content:
					"とても見やすく画面が構成されていて、クイズの前に知識の確認ができ、前準備ができた状態で問題にチャレンジすることができるのが、とても良いところ。 また、問題の画面でも、キーワードをタップするだけで、そのキーワードに関する用語や知識が表示され、インターフェイスがとても直感的。 用語を忘れたとしても、体系的にまとめられているので、忘れた用語にすぐにたどり着けることができる。役に立つ。",
				author: "姓名",
				date: "2025/07/09",
			},
		],
	},
	civics: {
		"app-store": [
			{
				rating: 5,
				subject: "civics",
				store: "app-store",
				title: "問題の訂正をお願いします",
				content:
					"「最高裁判所」のところで、「唯一、違憲審査権をもつ。」と書いてありましたが、「違憲立法審査権(違憲審査権)」のところでは「下級裁判所ももつ。」と書いてあったので「下級裁判所ももつ。」の方に統一していただきたいです。",
				author: "Akira415",
				date: "2026/01/16",
			},
			{
				rating: 5,
				subject: "civics",
				store: "app-store",
				title: "テスト前に助かるアプリ！",
				content:
					"地理と歴史のアプリが使いやすくてずっと使ってたので、公民版も入れてみました。関連ワードが一緒に出てきて説明も詳しいから、ただ暗記するだけじゃなくて「なるほど！」ってなります。苦手な問題を何回もくり返しできるのもありがたいです。テスト前はこれだけやっておけば安心って思えるし、勉強がちょっと楽しくなりました！",
				author: "suuuuum🐻",
				date: "2025/12/22",
			},
		],
		"google-play": [
			{
				rating: 5,
				subject: "civics",
				store: "google-play",
				content: "最高です",
				author: "木村裕子",
				date: "2026/02/14",
			},
			{
				rating: 5,
				subject: "civics",
				store: "google-play",
				content: "受験の味方",
				author: "ましゅ",
				date: "2025/11/29",
			},
		],
	},
};
