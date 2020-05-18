<template>
  <div id="aCoursesList" class="bg-fa of">
    <!-- /课程列表 开始 -->
    <section class="container">
      <header class="comm-title">
        <h2 class="fl tac">
          <span class="c-333">全部课程</span>
        </h2>
      </header>
      <section class="c-sort-box">
        <section class="c-s-dl">
          <dl>
            <dt>
              <span class="c-999 fsize14">课程类别</span>
            </dt>
            <dd class="c-s-dl-li">
              <ul class="clearfix">
                <li>
                  <a title="全部" href="#">全部</a>
                </li>
                <li  v-for="(item,index) in this.subjectNestedList" :key="index">
                  <a :title="item.title" href="#">{{item.title}}</a>
                </li>

              </ul>
            </dd>
          </dl>
          <dl>
            <dt>
              <span class="c-999 fsize14"></span>
            </dt>
            <dd class="c-s-dl-li">
              <ul class="clearfix">
                <li v-for="(item,index) in subSubjectList" :key="index"><!--二级分类-->
                  <a title="职称英语" href="#">{{item.title}}</a>
                </li>

              </ul>
            </dd>
          </dl>
          <div class="clear"></div>
        </section>
        <div class="js-wrap">
          <section class="fr">
            <span class="c-ccc">
              <i class="c-master f-fM">1</i>/
              <i class="c-666 f-fM">1</i>
            </span>
          </section>
          <section class="fl">
            <ol class="js-tap clearfix">
              <li>
                <a title="关注度" href="#">关注度</a>
              </li>
              <li>
                <a title="最新" href="#">最新</a>
              </li>
              <li class="current bg-orange">
                <a title="价格" href="#">价格&nbsp;
                  <span>↓</span>
                </a>
              </li>
            </ol>
          </section>
        </div>
        <div class="mt40">
          <!-- /无数据提示 开始-->
          <section class="no-data-wrap" v-if="data.total==0">
            <em class="icon30 no-data-ico">&nbsp;</em>
            <span class="c-666 fsize14 ml10 vam">没有相关数据，小编正在努力整理中...</span>
          </section>
          <!-- /无数据提示 结束-->
          <article class="comm-course-list" v-if="data.total>0">
            <ul class="of" id="bna">
              <li v-for="(item,index) in data.items" :key="index">
                <div class="cc-l-wrap">
                  <section class="course-img">
                    <img :src="item.cover" class="img-responsive" alt="听力口语">
                    <div class="cc-mask">
                      <a href="/course/1" title="开始学习" class="comm-btn c-btn-1">开始学习</a>
                    </div>
                  </section>
                  <h3 class="hLh30 txtOf mt10">
                    <a href="/course/1" :title="item.title" class="course-title fsize18 c-333">{{item.title}}</a>
                  </h3>
                  <section class="mt10 hLh20 of">
                    <span class="fr jgTag bg-green">
                      <i class="c-fff fsize12 f-fA">免费</i>
                    </span>
                    <span class="fl jgAttr c-ccc f-fA">
                      <i class="c-999 f-fA">9634人学习</i>
                      |
                      <i class="c-999 f-fA">9634评论</i>
                    </span>
                  </section>
                </div>
              </li>
            </ul>
            <div class="clear"></div>
          </article>
        </div>
        <!-- 公共分页 开始 -->
        <div>
          <div class="paging">
            <a class="undisable" title>首</a>
            <a id="backpage" class="undisable" href="#" title>&lt;</a>
            <a href="#" title class="current undisable">1</a>
            <a href="#" title>2</a>
            <a id="nextpage" href="#" title>&gt;</a>
            <a href="#" title>末</a>
            <div class="clear"></div>
          </div>
        </div>
        <!-- 公共分页 结束 -->
      </section>
    </section>
    <!-- /课程列表 结束 -->
  </div>
</template>
<script>
  import course from '@/api/course'
  export default {

    data(){
      return{
        page:1,
        data:{},
        subjectNestedList: [], // 一级分类列表
        subSubjectList: [], // 二级分类列表
        searchObj: {}, // 查询表单对象
        oneIndex:-1,
        twoIndex:-1,
        buyCountSort:"",
        gmtCreateSort:"",
        priceSort:""
      }
    },
    created(){
this.initCourseFirst();
this.initSubject();

    },
    methods:{
//1 查询第一页数据
      initCourseFirst(){
        course.getCoursePageList(1,8,this.searchObj).then(res=>{
          this.data=res.data.data
        })
      },
      //2 查询所有分类
      initSubject(){
        course.getAllSubject().then(res=>{
          this.subjectNestedList=res.data.data.list
        })
      },
      //3 分页切换的方法
      gotoPage(page){
        course.getCoursePageList(page,8).then(res=>{
          this.data=res.data.data
        })
      }
    }
  };
</script>
