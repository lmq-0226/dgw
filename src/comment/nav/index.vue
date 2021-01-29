<template>
    <div class="component">
        <!-- nav -->
        <div class="head">
            <div class="headLeft">
                <div class="logo">
                    <img src="http://r2d2.takungpao.com/cn/common/images/logo_tkp.png" alt="">
                </div>
                <div class="navList">
                    <ul>
                        <li v-for="(item,index) in navList" :key="index">
                            <a>{{item.title}}</a>
                            <div class="subnav">
                                <ul>
                                    <li v-for="(elem,cut) in item.subnav" :key="cut">
                                        <span class="subitem">{{elem.title}}</span>
                                        <span class="line" v-show="cut != item.subnav.length-1"> /</span>
                                    </li>
                                </ul>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="headRight">
                <ul class="date">
                    <ul class="dateLeft">
                        <li>
                            {{time}}
                        </li>
                        <li class="link">
                            <a>注册</a>
                            <a>登录</a>
                            <span>|</span>
                            <a>香港站</a>
                        </li>  
                    </ul>
                    <ul>
                        <li class="epaper">
                            <img src="http://r2d2.takungpao.com/cn/common/images/epaper.jpg" alt="大公报电子版">
                        </li>  
                    </ul>
                </ul>
            </div>
        </div>
        <!-- 搜索 -->
        <div class="kuaixun_wrap">
            <div class="kuaixun">
                <div class="search">
                    <input type="text" placeholder="输入搜索内容">
                    <button><img src="../../assets/search.png" alt=""></button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: 'index',
    data () {
        return {
            time:'',
            navList:[
                {title:'新闻',subnav:[
                    {title:'中国'},
                    {title:'港闻'},
                    {title:'两岸'},
                    {title:'国际'},
                    {title:'军事'},
                    {title:'大众访谈'},
                ]},
                {title:'评论',subnav:[
                    {title:'社评'},
                    {title:'北京观察'},
                    {title:'隔海观澜'},
                    {title:'纵横谈'},
                    {title:'点击香江'},
                    {title:'公评世界'},
                    {title:'大众评论'},
                ]},
                {title:'视频',subnav:[]},
                {title:'财经',subnav:[
                    {title:'大公财经'},
                    {title:'紫荆财智'},
                    {title:'经济观察家'},
                    {title:'田湾点经'},
                    {title:'港股'},
                    {title:'汽车'},
                    {title:'商业'},
                ]},
                {title:'艺文',subnav:[
                    {title:'大公园'},
                    {title:'小公园'},
                    {title:'艺术赏析'},
                    {title:'有料历史'},
                    {title:'大公故事'},
                    {title:'养生堂'},
                ]},
                {title:'专题',subnav:[]},
            ]
        }
    },
    mounted(){
        this.getTime()
    },
    methods:{
        getTime(){
            var d = new Date();
            console.log(d);
            this.time = d.getFullYear() + "年" + (d.getMonth()+1) + "月" + d.getDate() + "日 星期" + "日一二三四五六".charAt(d.getDay())
        }
    }
}
</script>
<style lang="scss" scoped>
*{
    margin: 0;
    padding: 0;
    list-style: none;
    text-decoration: none;
}
.component{
    background: #fff;
    min-width: 1200px;
    height: auto;
    background: #fff;
    border-top: 3px solid #c9a063;
    // 导航nav
    .head{
        width: 1200px;
        height: 68px;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
        align-items: center;
        // 导航左侧
        .headLeft{
            display: flex;
            justify-content: space-between; 
            align-items: center;
            width: 55%;
            .logo{
                width: 35%;
                img{
                    width: 140px;
                    height: auto;
                    vertical-align: middle;
                } 
            }
            // 导航列表
            .navList{
                width: 68%;
                float: right; 
                position: relative;
                >ul{
                    display: flex;
                    justify-content: space-between; 
                    >li{
                        font-size: 18px;
                        color: #444;
                        height: 68px;
                        line-height: 68px;
                        cursor: pointer;
                        a{
                            display: block;
                            padding: 0 18px;
                            transition: all .5s;
                        }
                        &:hover{
                            background:#f6f6f6;
                            color: #c9a063;
                            transition: all .5s;
                            .subnav{
                                display: block;
                            }
                        }
                        // 二级菜单
                        .subnav{
                            width: 980px;
                            height: 40px;
                            line-height: 40px;
                            padding-left: 235px;
                            background: #f1f1f1;
                            position: absolute;
                            left: -220px;
                            top: 68px;
                            z-index: 9;
                            display: none;
                            ul {
                                width: 100%;
                                li{
                                    display: inline-block;
                                    font-size: 14px;
                                    color: #666;
                                    .subitem{
                                        transition: all .5s;
                                        &:hover{
                                            color: #c9a063;
                                            transition: all .5s;
                                        }
                                    }
                                    .line {
                                        padding: 0 12px;
                                        font-size: 12px;
                                        color: #999;
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
        // 导航右侧
        .headRight{
            width: 20%;
            .date{
                display: flex;
                justify-content: space-between;
                font-size: 12px;
                color: #999;
                align-content: center;
                .dateLeft{
                    .link{
                        margin-top: 5px;
                        color: #666;
                        a{
                            margin-right: 10px;
                        }
                        span {
                            color: #eee;
                            font-family: arial;
                            margin-left: 2px;
                            margin-right: 8px;
                        }
                    }
                }
                .epaper{
                    width: 82px;
                    height: auto;
                }
            }
            
        }
    }
    // 搜索
    .kuaixun_wrap {
        width: 100%;
        min-width: 1200px;
        height: 40px;
        background-color:  #f1f1f1;
        .kuaixun {
            width: 1200px;
            height: 100%;
            position: relative;
            margin: 0 auto;
            .search{
                width: 200px;
                height: 23px;
                border-bottom: 1px solid #ddd;
                background: #f1f1f1;
                position: absolute;
                right: 0;
                top: 8px;
                input,button{
                    border: none;
                    background: transparent;
                    outline:none;
                }
                button{
                    cursor: pointer;
                    img{
                        width: 15px;
                        height: 15px;
                    }
                }
            }
        }
    }
}
</style>
