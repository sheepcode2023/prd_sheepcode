$("#js-home-slick01").slick({
	variableWidth: true,
	centerMode: true,
	centerPadding: "10px",
	autoplay: true, // 自動でスクロール
	autoplaySpeed: 0, // 自動再生のスライド切り替えまでの時間を設定
	speed: 7000, // スライドが流れる速度を設定
	cssEase: "linear", // スライドの流れ方を等速に設定
	slidesToShow: 7, // 表示するスライドの数
	swipe: false, // 操作による切り替えはさせない
	arrows: false, // 矢印非表示
	pauseOnFocus: true, // スライダーをフォーカスした時にスライドを停止させるか
	pauseOnHover: true, // スライダーにマウスホバーした時にスライドを停止させるか
});
$("#js-home-slick02").slick({
	variableWidth: true,
	centerMode: true,
	autoplay: true, // 自動でスクロール
	autoplaySpeed: 5000, // 自動再生のスライド切り替えまでの時間を設定
	arrows: false, // 矢印非表示
	dots: true,
});
