$(function() {
	//音乐
	/*function audioAutoPlay(id) {
		var audio = document.getElementById(id);
		audio.play();
		document.addEventListener("WeixinJSBridgeReady", function() {
			audio.play();
		}, false);
	}
	audioAutoPlay('musicStar');*/
	//音乐
	var pauseMark = true;
	$(".music_btn").click(function() {
		if(pauseMark) {
			pauseMark = false;
			$(this).children('img').attr('src', 'images/music_off.png');
			$(this).removeClass('music_on');
			$("#music")[0].pause();
		} else {
			$(this).children('img').attr('src', 'images/music_on.png');
			$(this).addClass('music_on');
			$("#music")[0].play();
			pauseMark = true;
		}
	});

	function audioAutoPlay(id) {
		var audio = document.getElementById(id);
		audio.play();
		document.addEventListener("WeixinJSBridgeReady", function() {
			if(pauseMark) {
				audio.play();
			}
		}, false);
	}
	audioAutoPlay('music');

	//loading页面加载结束
	$('.loading .progress div').on('animationend', function() {
		$('.loading').fadeOut();
		$('.music_btn').fadeIn();
		$('.screen1 .box').fadeIn()
	});

	//swiper-container
	var mySwiper = new Swiper('.swiper-container', {
		autoplay: false,
		direction: 'horizontal',
		loop: false,
		noSwiping: true,
		initialSlide: 0,
		// 如果需要前进后退按钮
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
		on: {
			init: function() {
				swiperAnimateCache(this); //隐藏动画元素 
				swiperAnimate(this); //初始化完成开始动画
			},
			slideChangeTransitionEnd: function() {
				swiperAnimate(this); //每个slide切换结束时也运行当前slide动画
				//this.slides.eq(this.activeIndex).find('.ani').removeClass('ani'); //动画只展现一次，去除ani类名
			}
		}
	});

	//scroll
	mui('.mui-scroll-wrapper').scroll({
		scrollY: true, //是否竖向滚动
		scrollX: false, //是否横向滚动
		startX: 0, //初始化时滚动至x
		startY: 0, //初始化时滚动至y
		indicators: false, //是否显示滚动条
		deceleration: 0.0006, //阻尼系数,系数越小滑动越灵敏
		bounce: true //是否启用回弹
	})

	//目录跳转
	$('.screen1').on('click', function() {
		mySwiper.slideTo(1);
	})
	$('.mulu li:nth-of-type(1)').on('click', function() {
		mySwiper.slideTo(3);
	})
	$('.mulu li:nth-of-type(2)').on('click', function() {
		mySwiper.slideTo(4);
	})
	$('.mulu li:nth-of-type(3)').on('click', function() {
		mySwiper.slideTo(5);
	})
	$('.mulu li:nth-of-type(4)').on('click', function() {
		mySwiper.slideTo(6);
	})
	$('.mulu li:nth-of-type(5)').on('click', function() {
		mySwiper.slideTo(8);
	})
	$('.mulu li:nth-of-type(6)').on('click', function() {
		mySwiper.slideTo(11);
	})
	$('.mulu li:nth-of-type(7)').on('click', function() {
		mySwiper.slideTo(12);
	})

	//选择题
	$('.xzt ul').each(function(index, item) {
		$(item).children('li').on('click', function() {
			$(this).css('color', '#d00e31').siblings().css('color', '#000000');
			$(this).parent('ul').attr('data-num', $(this).attr('data-num'));
		});
	});

	//提交答案
	$('.xzt .tijiao span').on('click', function() {
		var name = $('#name').val()
		var tel = $('#tel').val()
		var dataArr = [];

		$('.xzt ul').each(function(index, item) {
			if(!$(item).attr('data-num')) {
				return false
			}
			dataArr.push($(item).attr('data-num'));
		});

		if(dataArr.length != 5 || !name || !tel) {
			mui.alert('请填写完整信息');
			return false
		}

		console.log(dataArr)
		console.log(name)
		console.log(tel)

		mui.alert('提交成功');
	});

})