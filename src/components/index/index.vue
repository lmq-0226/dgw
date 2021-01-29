<template>
  <div class="component">
    <!-- 顶部轮播图 -->
    <div class="swipers">
      <div class="clup">
        <swiper :options="swiperOption" ref="mySwiper">
          <!-- 轮播图list -->
          <swiper-slide v-for="(item, index) in swiperList" :key="index">
            <div class="slide_left">
              <img :src="item.icon" alt="" />
            </div>
            <div class="slide_right">
              <div class="title">
                <p>{{ item.title }}</p>
              </div>
              <div class="subhead">
                <p>{{ item.subhead }}</p>
              </div>
              <div class="state">
                <p>{{ item.state }}</p>
              </div>
            </div>
          </swiper-slide>
        </swiper>
        <!-- 左右切换按钮 -->
        <div class="swiper-button-prev" slot="button-prev"></div>
        <div class="swiper-button-next" slot="button-next"></div>
      </div>
    </div>
    <!-- 进度轮播图 -->
    <div class="planSwipers">
      <swiper :options="planSwiperOption" ref="mySwiper">
        <!-- 轮播图list -->
        <swiper-slide v-for="(item, index) in planSwiperList" :key="index">
          <div class="slide_top">
            <img :src="item.icon" alt="" />
          </div>
          <div class="slide_bottom">
            <div class="title">
              <p>{{ item.title }}</p>
            </div>
          </div>
        </swiper-slide>
      </swiper>
    </div>
    <!-- 新闻列表 -->
    <div class="newsList">
      <div class="list_left">
        <ul class="tabnews">
          <li class="tab on" data-item="1">卡片</li>
          <li class="tab" data-item="2" >列表</li>
        </ul>
        <!-- 卡片 -->
        <div>
          <div class="art_item art_item1">
            <ul>
              <li v-for="(item,index) in 39" :key="index">
                <p class="p1">
                  <img src="../../assets/plan1.jpg" alt="">
                </p>
                <p class="p2">国内中高风险地区及全域实行封闭管理的人员，原则上不能进京</p>
                <p class="p3">
                  <span class="sp1">中国</span>
                  <span class="sp2">2021-01-27 19：06</span>
                </p>
              </li>
            </ul>
          </div>
          <!-- 列表 -->
          <div class="art_item art_item2">
            <ul>
              <li v-for="(item,index) in 39" :key="index">
                <ul class="uk1">
                  <li class="l1"><img src="../../assets/plan1.jpg" alt=""></li>
                </ul>
                <ul class="uk2">
                  <li class="l2">国内中高风险地区及全域实行封闭管理的人员，原则上不能进京</li>
                  <li class="l3">今天下午，在北京市新型冠状病毒肺炎疫情防控工作第222场新闻发布会上，北京市委宣传部副部长、市政府新闻办主任、市政府新闻发言人徐和建介绍，国内中高风险地区及全域实行封闭管理的人员，原则上不能进京。</li>
                  <li class="l4">
                    <span class="sp1">中国</span>
                    <span class="sp2">2021-01-27 19：06</span>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="list_right">
        <ul class="topImage">
          <li>
            <img src="../../assets/beiqi.jpg" alt="">
          </li>
        </ul>
        <span class="spTitle">大公视频</span>
        <!-- 视频列表 -->
        <div class="videoList">
          <ul v-for="(item,index) in 4" :key="index" :class="index==0?'active':''">
            <li>
              <img src="http://img.takungpao.com/2021/0127/20210127024500504.jpg" alt="">
              <span>
                <em></em>
              </span>
            </li>
            <li>科比逝世一周年　科蜜在这家咖啡店传承「曼巴精神」</li>
            <li> 2021-01-27 14:41</li>
          </ul>
          
        </div>
        <!-- 四个超链接 -->
        <div class="location">
          <ul>
            <li v-for="(item,index) in 4" :key="index">
              <img src="../../assets/location1.jpg" alt="">
            </li>
          </ul>
        </div>
        <!-- 阅读排行 -->
        <div class="readingList">
          <span class="spTitle">阅读排行</span>
          <div class="list">
            <ul v-for="(item,index) in 10" :key="index">
              <li :class="index<=2 ? 'red' : ''">{{index+1}}</li>
              <li>快手热爆遭全港疯抢 首日孖展3000亿超去年的蚂蚁</li>
              <li>2021-01-27 04:23:48</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <!-- 底部轮播 -->
    <div class="chanye_wrap">
      <ul v-for="(item,index) in bottomSwiperList" :key="index" :class="index == 0 ? 'on show' :''">
        <li class="h3_tab">
          <p>{{item.title}}</p>
        </li>
        <li class="chanye">
          <p v-for="(elem,cut) in item.arr" :key="cut">
            <img :src="elem.icon" alt="">
            <span>{{elem.title}}</span>
          </p>
        </li>
      </ul>
    </div>
    <!-- 返回顶部按钮 -->
    <div id="tipback" title="返回顶部" style="display: block;" @click="backTop"></div>
  </div>
</template>
<script>
$(function () {
  $(".tabnews > .tab").hover(function () {
    var $data = $(this).attr("data-item");
    $(this).addClass("on").siblings().removeClass("on"); //动态添加/删除class
    $(".art_item" + $data).css({ display: "block" }).siblings().css({ display: "none" });//控制元素显示/隐藏
  });
  // 根据滚动距离控制返回顶部按钮的显示/隐藏
  $(window).scroll(function(){ 
		var t = document.documentElement.scrollTop || document.body.scrollTop;      
		if( t > 500 ) {
			$('#tipback').show();		
		} else { 
			$('#tipback').hide();	
		}
  });
  //底部轮播切换
  // 鼠标经过切换
	$('.chanye_wrap ul').each(function(index){
		$(this).on('mouseover',function(){
			$('.chanye_wrap ul').removeClass('on');
			$(this).addClass('on');
			$('.chanye_wrap ul').removeClass('show').eq(index).addClass('show');
		});
  });
  // 自动切换
	var num = 1;
	function autoplay(){
		num == 3? num=0 : num;
		$('.chanye_wrap ul').removeClass('on').eq(num).addClass('on');
		$('.chanye_wrap ul').removeClass('show').eq(num).addClass('show');
		num++;
	}
	let timer = setInterval(autoplay,1e4);
	$('.chanye_wrap').on('mouseover',function(){
		clearInterval(timer);
	}).on('mouseout',function(){
		timer = setInterval(autoplay,1e4);
	});
});

// 引入swiper插件和样式
import { swiper, swiperSlide } from "vue-awesome-swiper";
import "swiper/dist/css/swiper.css";
export default {
  components: {
    swiper,
    swiperSlide,
  },
  name: "index",
  data() {
    return {
      // 轮播图属性设置
      swiperOption: {
        loop: true,
        speed:500,
        autoplay: {
          delay: 5000,
          stopOnLastSlide: false,
          disableOnInteraction: false,
        },
        // 设置点击箭头
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      },
      planSwiperOption:{
        loop: true, //循环播放
        autoplay: {
          delay: 3000, //自动播放速度
          stopOnLastSlide: false,
          disableOnInteraction: false,
        },
        speed:1000, //切换速度
        slidesPerView : 4, //一页显示几个
        slidesPerGroup : 1, //一次轮播几个
        spaceBetween : 20, //间距
      },
      // 轮播内容
      swiperList: [
        {
          icon: require("../../assets/banner.jpg"),
          title: "广东GDP破11万亿超越俄韩 连续32年居全国之首",
          subhead:
            "全球在疫情冲击之下，中国是唯一实现经济正增长的主要经济体，这意味着广东GDP肯定超过2020年俄罗斯、韩国的GDP。",
          state: "中国",
        },
        {
          icon: require("../../assets/banner1.jpg"),
          title: "林郑：拜登政府应公正看待港国安法",
          subhead:
            "林郑月娥指出，维护国家安全是每个国家的合法权利和义务，自己及其他被“制裁”的同事将继续坚定不移，恪尽职守，依法履行职责，维护国家的主权统一和领土完整。",
          state: "港闻",
        },
        {
          icon: require("../../assets/banner2.jpg"),
          title: "“独论”横行台湾 民进党蔡政府大搞一言堂",
          subhead:
            "两岸学者指出，台当局控制舆论，是为了掩饰过失、赢得选举，并宣扬“台独”，打压有关统一的言论。",
          state: "两岸",
        },
      ],
      // 进度轮播内容
      planSwiperList:[
        {
          icon:require('../../assets/plan1.jpg'),
          title:'“突袭强检”应扩大到“全面强检”“突袭强检”应扩大到“全面强检”“突袭强检”应扩大到“全面强检”“突袭强检”应扩大到“全面强检”'
        },
        {
          icon:require('../../assets/plan1.jpg'),
          title:'“突袭强检”应扩大到“全面强检”'
        },
        {
          icon:require('../../assets/plan1.jpg'),
          title:'“突袭强检”应扩大到“全面强检”'
        },
        {
          icon:require('../../assets/plan1.jpg'),
          title:'“突袭强检”应扩大到“全面强检”'
        },
        {
          icon:require('../../assets/plan1.jpg'),
          title:'“突袭强检”应扩大到“全面强检”'
        },
        {
          icon:require('../../assets/plan1.jpg'),
          title:'“突袭强检”应扩大到“全面强检”'
        },
        {
          icon:require('../../assets/plan1.jpg'),
          title:'“突袭强检”应扩大到“全面强检”'
        },
        {
          icon:require('../../assets/plan1.jpg'),
          title:'“突袭强检”应扩大到“全面强检”'
        }
      ],
      bottomSwiperList:[
        {title:'大公宗教',arr:[
          {icon:"http://img.takungpao.com/2021/0118/20210118042736918.jpg",title:'2020第六屆觀音文化節 香港儒釋道共同呼籲成立:世界慈悲日'},
          {icon:"http://img.takungpao.com/2021/0118/20210118042736918.jpg",title:'2020第六屆觀音文化節 香港儒釋道共同呼籲成立:世界慈悲日'},
          {icon:"http://img.takungpao.com/2021/0118/20210118042736918.jpg",title:'2020第六屆觀音文化節 香港儒釋道共同呼籲成立:世界慈悲日'}
        ]},
        {title:'大公国学',arr:[
          {icon:"http://img.takungpao.com/2021/0127/20210127053425493.jpg",title:'越罗衫袂迎“秋”风·汉服文化秀礼遇宋“潮”游乐园'},
          {icon:"http://img.takungpao.com/2021/0127/20210127053425493.jpg",title:'越罗衫袂迎“秋”风·汉服文化秀礼遇宋“潮”游乐园'},
          {icon:"http://img.takungpao.com/2021/0127/20210127053425493.jpg",title:'越罗衫袂迎“秋”风·汉服文化秀礼遇宋“潮”游乐园'}
        ]},
        {title:'TOP体育',arr:[
          {icon:"http://img.takungpao.com/2019/0514/20190514013033103.jpg",title:'中国长白山国际林海雪地马拉松节'},
          {icon:"http://img.takungpao.com/2019/0514/20190514013033103.jpg",title:'中国长白山国际林海雪地马拉松节'},
          {icon:"http://img.takungpao.com/2019/0514/20190514013033103.jpg",title:'中国长白山国际林海雪地马拉松节'}
        ]}
      ]
    };
  },
  mounted(){
    
  },
  methods:{
    // 点击图片回到顶部方法，加计时器是为了过渡顺滑
    backTop () {
      // 使用定时器实现缓慢滚动返回顶部效果
      let timer = setInterval(() => {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
        let ispeed = Math.floor(-scrollTop / 5)
        document.documentElement.scrollTop = document.body.scrollTop = scrollTop + ispeed
        if (scrollTop === 0) {
          clearInterval(timer)
        }
      }, 40)
    },
  }
};
</script>
<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
  list-style: none;
  text-decoration: none;
}
.component {
  background: #F1F1F1;
  // 返回顶部按钮
  #tipback {
    width: 45px;
    height: 45px;
    background: #ccc url(../../assets/back.png) center center no-repeat;
    cursor: pointer;
    position: fixed;
    left: 50%;
    margin-left: 600px;
    bottom: 100px;
    z-index: 100;
    display: none;
  }
  // 轮播图
  .swipers {
    width: 100%;
    background: #e5e5e5;
    .clup {
      width: 1200px;
      margin: auto;
      position: relative;
      .swiper-container {
        width: 1200px;
        min-width: 1200px;
        margin: auto;
        .swiper-slide {
          display: flex;
          justify-content: space-between;
          .slide_left {
            width: 75%;
            img {
              width: 100%;
              height: 100%;
              cursor: pointer;
            }
          }
          .slide_right {
            width: 25%;
            background: #303030;
            color: #fff;
            padding: 0 20px;
            position: relative;
            div {
              p {
                cursor: pointer;
                transition: all .3s;
                &:hover{
                  color: #c9a063;
                  transition: all .3s;
                }
              }
            }
            .title {
              p {
                line-height: 40px;
                padding: 30px 0;
                font-size: 30px;
                color: #fff;
              }
            }
            .subhead {

            }
            .state {
              position: absolute;
              left: 20px;
              bottom: 30px;
            }
          }
        }
      }
      // 轮播左按钮
      .swiper-button-prev {
        background: url("../../assets/arrow_l.png") center center no-repeat;
        outline: none;
        position: absolute;
        left: -50px;
      }
      // 轮播右按钮
      .swiper-button-next {
        background: url("../../assets/arrow_r.png") center center no-repeat;
        outline: none;
        position: absolute;
        right: -50px;
      }
    }
  }
  // 顶部轮播end
  // 进度轮播
  .planSwipers{
    width: 1200px;
    margin: 20px auto;
    .swiper-container {
      display: flex;
      justify-content: space-between;
      .swiper-slide{
        text-align: center;
        height: auto;
        background: #fff;
        &:hover{
          img{
            transform: scale(1.1);
            transition: 1s;
          }
        }
        .slide_top{
          width: 100%;
          height: 160px;
          overflow: hidden;
          img{
            transition: 1s;
            width: 100%;
            cursor: pointer;
          }
        }
        .slide_bottom{
          height: 48px;
          line-height: 24px;
          font-size: 16px;
          color: #000;
          padding: 10px;
          p{
            transition: all .5s;
            &:hover{
              color: #c9a063;
              transition: all .5s;
            }
            cursor: pointer;
            overflow: hidden;
            text-overflow: ellipsis;
            display: box;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
          }
          
        }
      }
    }
  }
  // 新闻列表
  .newsList{
    display: flex;
    justify-content: space-between;
    width: 1200px;
    margin: auto;
    // 左侧
    .list_left{
      width: 68%;
      .tabnews{
        margin-bottom: 20px;
        li{
          display: inline-block;
          width: 35px;
          height: 28px;
          background: #bbb url('../../assets/card.png') no-repeat 3px center;
          line-height: 28px;
          padding-left: 25px;
          font-size: 14px;
          color: #fff;
          cursor: pointer;
          margin-right: 1px;
        }
        :nth-child(2){ 
          background: #bbb url('../../assets/list.png') no-repeat 3px center;
        }
        .on {
          background-color: #c9a063;
        }
      }
      .art_item{
        width: 100%;
      }
      .art_item1{
        display: block;
        // 卡片式新闻列表
        ul{
          display: flex;
          justify-content: space-between;
          flex-wrap: wrap;
          li{
            width: 32%;
            background: #fff;
            padding-bottom: 20px;
            margin-bottom: 20px;
            .p1{
              display: block;
              width: 100%;
              height: 142px;
              overflow: hidden;
              cursor: pointer;
              img{
                width: 100%;
                transition: 1s;
              }
            }
            &:hover{
              img{
                transform: scale(1.1);
                transition: 1s;
              }
            }
            .p2{
              padding: 0 15px;
              margin-top: 15px;
              font-size: 16px;
              line-height: 24px;
              cursor: pointer;
              transition: all .5s;
              &:hover{
                color: #c9a063;
                transition: all .5s;
              }
              overflow: hidden;
              text-overflow: ellipsis;
              display: box;
              display: -webkit-box;
              -webkit-line-clamp: 2;
              -webkit-box-orient: vertical;
            }
            .p3{
              padding: 0 15px;
              margin-top: 15px;
              .sp1{
                font-size: 14px;
                color: #666;
                cursor: pointer;
                transition: all .5s;
                &:hover{
                  color: #c9a063;
                  transition: all .5s;
                }
              }
              .sp2{
                font-size: 12px;
                color: #999;
                padding-left: 10px;
              }
            }
          }
        }
      }
      .art_item2{
        display: none;
        >ul{
          width: 100%;
          background: #fff;
          >li{
            // width: 100%;
            padding: 20px;
            border-bottom: solid 1px rgb(241, 235, 235);
            display: flex;
            .uk1{
              .l1{
                width: 250px;
                height: 140px;
                overflow: hidden;
                cursor: pointer;
                &:hover{
                  img{
                    transform: scale(1.1);
                    transition: 1s;
                  }
                }
                img{
                  width: 250px;
                  transition: 1s;
                }
              }
            }
            .uk2{
              padding: 0px 0px 0px 20px;
              .l2{
                line-height: 24px;
                font-size: 16px;
                color: #000;
                margin-bottom: 8px;
                transition: .5s;
                cursor: pointer;
                &:hover{
                  color: #c9a063;
                  transition: .5s;
                }
              }
              .l3{
                font-size: 14px;
                color: #666;
                margin-bottom: 20px;
                cursor: pointer;
                line-height: 24px;
                overflow: hidden;
                text-overflow: ellipsis;
                display: box;
                display: -webkit-box;
                -webkit-line-clamp: 3;
                -webkit-box-orient: vertical;
              }
              .l4{
                 height: 14px;
                line-height: 14px;
                font-size: 14px;
                .sp1{
                  color: #666;
                  cursor: pointer;
                  transition: .5s;
                  &:hover{
                    color: #c9a063;
                    transition: .5s;
                  }
                }
                .sp2{
                  font-size: 12px;
                  font-family: arial;
                  color: #999;
                  padding-left: 15px;
                }
              }
            }
          }
        }
      }
    }
    // 右侧
    .list_right{
      width: 28%;
      .spTitle{
        height: 20px;
        line-height: 20px;
        padding-left: 10px;
        border-left: 6px solid #c9a063;
        font-size: 18px;
        color: #333;
      }
      .topImage{
        margin-bottom: 20px;
        li{
          img{
            width: 100%;
            cursor: pointer;
          }
        }
      }
      // 视频列表
      .videoList{
        margin-top: 20px;
        ul{
          height: auto;
          padding: 20px 10px 20px 20px;
          background: #333;
          border-bottom: 1px solid #919191;
          position: relative;
          &:hover{
            li{
              img{
                transform: scale(1.1);
                transition: all 1s;
              }
            } 
          }
          :nth-child(1){
            width: 140px;
            height: 80px;
            overflow: hidden;
            position: relative;
            float: left;
            span{
              height: 14px;
              line-height: 14px;
              padding: 10px;
              background: url(../../assets/bg_black.png) repeat;
              font-size: 14px;
              font-family: arial;
              color: #fff;
              position: absolute;
              left: 0;
              bottom: 0;
              em{
                width: 16px;
                height: 14px;
                background: url(../../assets/layout.png) -175px -140px no-repeat;
                float: left;
              }
            }
            img{
              width: 100%;
              cursor: pointer;
              transition: all 1s;
            }
          }
          :nth-child(2){
            line-height: 24px;
            padding-left: 150px;
            font-size: 14px;
            font-weight: bold;
            color: #fff;
            cursor: pointer;
          }
          :nth-child(3){
            height: 14px;
            padding-left: 150px;
            line-height: 14px;
            padding-top: 12px;
            font-size: 12px;
            font-family: arial;
            font-weight: normal;
            color: #999;
          }
        }
        // 第一条视频的样式
        .active{
          width: 100%;
          height: 205px;
          padding: 0;
          :nth-child(1){
            margin: 0;
            padding: 0;
            width: 100%;
            height: 100%;
            img{
              width: 100%;
              height: 100%;
            }
            span{
              position: absolute;
              left: 50%;
              top: 50%;
              background: none;
              em{
                width: 40px;
                height: 40px;
                background: url(../../assets/layout.png) 0 -220px no-repeat;
                margin: -20px 0 0 -20px;
              }
            }
          }
          :nth-child(2){
            padding: 20px 3% 12px 5%;
            text-align: center;
            position: absolute;
            left: 0;
            bottom: 0;
            z-index: 2;
            font-size: 16px;
            font-weight: bold;
            line-height: 24px;
            background: url(../../assets/bg_black_mask.png) left top repeat-x;
          }
        }
      }
      // 四个超链接
      .location{
        margin-bottom: 20px;
        ul{
          li{
            margin-top: 20px;
            img{
              width: 100%;
              cursor: pointer;
            }
          }
        }
      }
      // 阅读排行
      .readingList{
        .list{
          margin-top: 20px;
          background: #fff;
          ul{
            height: auto;
            padding: 15px 15px 15px 40px;
            border-bottom: 1px solid #f1f1f1;
            position: relative;
            :nth-child(1){
              width: 40px;
              height: 24px;
              line-height: 24px;
              font-size: 24px;
              font-family: arial;
              font-style: italic;
              color: #666;
              text-align: center;
              position: absolute;
              left: 0;
              top: 16px;
            }
            .red{
              color: #ba0000;
            }
            :nth-child(2){
              height: auto;
              line-height: 24px;
              font-size: 16px;
              margin-bottom: 10px;
              color: #666;
              cursor: pointer;
              transition: all .5s;
              &:hover{
                color: #c9a063;
                transition: all .5s;
              }
            }
            :nth-child(3){
              height: 14px;
              line-height: 14px;
              font-size: 12px;
              font-family: arial;
              color: #999;
            }
          }
        }
      }
    }
  }
  .chanye_wrap{
    width: 1200px;
    height: 280px;
    position: relative;
    margin: 0 auto 20px;
    .on{
      .h3_tab{
        color: #c9a063;
      }
    }
    .show{
      .chanye{
        z-index: 3;
      }
    }
    ul{
      .h3_tab{
        width: 100px;
        height: 28px;
        line-height: 28px;
        font-size: 18px;
        color: #333;
        cursor: pointer;
        z-index: 5;
        float: left;
        transition: all 0.3s ease-in-out 0s;
      }
      .chanye {
        width: 1220px;
        height: auto;
        position: absolute;
        left: 0;
        top: 42px;
        z-index: 2;
        display: flex;
        justify-content: space-between;
        
        p{
          width: 386px;
          height: 217px;
          display: inline-block;
          margin: 0 20px 20px 0;
          overflow: hidden;
          position: relative;
          cursor: pointer;
          &:hover{
            img{
              transform: scale(1.1);
              transition: all 1s;
            }
          }
          img{
            width: 100%;
            height: 100%;
            border: none;
            transition: all 1s;
          }
          span{
            width: 92%;
            height: auto;
            line-height: 24px;
            padding: 20px 3% 12px 5%;
            background: url(../../assets/bg_black_mask.png) left top repeat-x;
            font-size: 16px;
            color: #fefefe;
            position: absolute;
            left: 0;
            bottom: 0;
            z-index: 2;
          }
        }
      }
    }
  }
}
</style>
