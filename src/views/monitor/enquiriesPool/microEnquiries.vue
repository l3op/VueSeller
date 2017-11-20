<template>
  <!--微询盘start-->
    <div class="micro_enquirie">
        <div class="left_display" v-show="microOpenIndex!=index" v-if="microEnquiries.oriVideo&&microEnquiries.oriVideo.length>0">
          <i class="icon-font vedio_display">&#xe61f;</i>
          <img :src="vedio.coverurl" v-for="(vedio, index) in microEnquiries.oriVideo" v-if="index==0" @click.stop="videoLink(vedio.targeturl)" :class="{'canclick':vedio.targeturl!=''&&vedio.targeturl!=null}" />
        </div>
        <div class="left_display" v-show="microOpenIndex!=index" :class="{'image_displays':microEnquiries.oriPic&&microEnquiries.oriPic.length>1}" v-else-if="microEnquiries.oriPic&&microEnquiries.oriPic.length>0">
          <img :src="img.url" v-for="(img, index) in microEnquiries.oriPic" v-if="index==0" />
        </div>
        <div class="middel_info" :class="microOpenIndex!=index?'confine-width-one':'confine-width-two'">
          <p class="time">
            <i class="icon-font">&#xe67f;</i>{{microEnquiries.enquiryTime | time-formater-no-second}}
            <span class="source" v-if="microEnquiries.keywordMatchs !== null && microEnquiries.keywordMatchs.length !== 0 ">
              <em></em>
              来源:
              <span class="keywords">
                <span v-if="microEnquiries.keywordMatchs[0].type === 'explore' && microEnquiries.keywordMatchs[0].isMatched === 1">探索关键字</span>
                <span v-if="microEnquiries.keywordMatchs[0].type === 'system' && microEnquiries.keywordMatchs[0].isMatched === 1">系统关键字</span>
                <span v-if="microEnquiries.keywordMatchs[0].type === 'detective' && microEnquiries.keywordMatchs[0].isMatched === 1">外贸侦探关键字</span>
                <span v-if="microEnquiries.keywordMatchs[0].type === 'product' && microEnquiries.keywordMatchs[0].isMatched === 1">商品分类关键字</span>
                <span v-if="microEnquiries.keywordMatchs[0].type === 'seo' && microEnquiries.keywordMatchs[0].isMatched === 1">SEO关键字</span>
              </span>
            </span>
          </p>
          <div class="content rough" :class="microOpenIndex!=index?'one-row-confine-two':''" v-if="microEnquiries.enquiryPerson.contactsPersonId==''||microEnquiries.enquiryPerson.contactsPersonId==null">
            <p ref="content">
              {{microEnquiries.oriContent==''?'暂无数据':microEnquiries.oriContent}}
              <a :href="getLinkUrl(link.text)" v-for="(link,index) in microEnquiries.oriLink" v-if="microEnquiries.oriLink&&link.href!=''&&link.href!=null" :key="link" target="_blank"><span v-if="index!==0">,</span>{{link.text}}
              </a>
            </p>
            <span class="omit" v-if="contentIsHaveOmit">...</span>
          </div>
          <div class="content" :class="commonOpenIndex!=index?'one-row-confine-two':''" v-else>
            <p ref="content">
              {{microEnquiries.oriContent==''?'暂无数据':microEnquiries.oriContent}}
              <a :href="getLinkUrl(link.text)" v-for="(link,index) in microEnquiries.oriLink" v-if="microEnquiries.oriLink&&link.href!=''&&link.href!=null" :key="link" target="_blank"><span v-if="index!==0">,</span>{{link.text}}
              </a>
            </p>
            <span class="omit" v-if="contentIsHaveOmit">...</span>
          </div>
          <carouselChange v-show="microOpenIndex==index" v-if="microEnquiries.oriPic&&microEnquiries.oriPic.length>0&&(microEnquiries.oriVideo==''||microEnquiries.oriVideo==null)" :imageList="microEnquiries.oriPic" @nextPageSure="nextPageFunc"></carouselChange>
          <p class="video" v-show="microOpenIndex==index" v-else v-for="(vedio, index) in microEnquiries.oriVideo" v-if="vedio.coverurl!=''&&vedio.coverurl!=null" @click.stop="videoLink(vedio.targeturl)">
            <i class="icon-font big_vedio_display">&#xe61f;</i>
            <img :src="vedio.coverurl" />
          </p>
          <!--<div v-show="microOpenIndex !== index">-->
            <div v-show="!allMement || microOpenIndex !== index" >
              <p class="info" >
            <span class="logo canclick" @click.stop="linkPageHome(microEnquiries.enquiryPerson)">
              <img :src="microEnquiries.enquiryPerson.avatar" alt="" v-if="microEnquiries.enquiryPerson.avatar!=''&&microEnquiries.enquiryPerson.avatar!=null">
              <img src="/static/img/default-head.png" alt="" v-else>
            </span>
                <span class="name one-row-confine text_canclick" @click.stop="linkPageHome(microEnquiries.enquiryPerson)">
              {{microEnquiries.enquiryPerson.firstname}} {{microEnquiries.enquiryPerson.lastname}}
            </span>
              </p>
              <div class="desc" :class="microOpenIndex!=index?'one-row-confine-two':''" ref="desc"><p>{{microEnquiries.enquiryContent}}</p> <span class="omit" v-if="descIsHaveOmit">...</span></div>
            </div>
          <!--</div>-->
          <div class="loading loading-circle loading-top" v-if="mementLoading" v-show="microOpenIndex==index"></div>
          <!--展现全部的评论内容-->
          <div v-show="microOpenIndex==index">
            <div class="allComment info" v-show='allMement' v-for="item in MementList">
              <div style="padding-bottom: 5px; border-bottom: 1px solid #ccc">
                <span class="logo canclick" @click.stop="open(item.profile.id)">
                  <img :src="item.profile.thumbSrc" alt="" v-if="item.profile.thumbSrc!='' && item.profile.thumbSrc!=null">
                  <img src="/static/img/default-head.png" alt="" v-else>
                </span>
                <span class="name one-row-confine text_canclick" @click.stop="open(item.profile.id)">{{item.profile.name}}</span>
                <span class="createTime">{{item.commentTime | time-formater-no-second}}</span>
                <div class="desc" :class="microOpenIndex!=index?'one-row-confine-two':''" ref="desc"><p>{{item.text}}</p></div>
              </div>
              <!--回复评论-->
              <div style="padding-bottom: 5px; border-bottom: 1px solid #ccc" v-if="item.replies !== null && item.replies.length !== 0">
                <div style="padding-left: 40px;padding-top: 10px" v-for="repley in item.replies">
                <span class="logo canclick" @click.stop="open(repley.profile.id)">
                  <img :src="repley.profile.thumbSrc" alt="" v-if="repley.profile.thumbSrc!='' && repley.profile.thumbSrc!=null">
                  <img src="/static/img/default-head.png" alt="" v-else>
                </span>
                  <span class="name one-row-confine text_canclick" @click.stop="open(repley.profile.id)">
                  {{repley.profile.name}}
                 </span>
                  <span class="createTime">{{repley.commentTime | time-formater-no-second}}</span>
                  <div class="desc" :class="microOpenIndex!=index?'one-row-confine-two':''" ref="desc"><p>{{repley.text}}</p> </div>
                </div>
              </div>
            </div>
            <p style="font-size: 14px;color: #33475B;padding-top: 8px" @click="allMement()" v-if="MementList.length > 5">全部评论</p>
          </div>
        </div>
        <div class="right_opt">
          <el-button type="primary" class="right_btn" size="small" @click="addPersonFunc(microEnquiries,$event)" v-if="microEnquiries.enquiryPerson.contactsPersonId==''||microEnquiries.enquiryPerson.contactsPersonId==null"><i class="icon-font">&#xe6ad;</i>联系人</el-button>
          <el-button type="primary" class="right_btn" size="small" @click="selPerson(microEnquiries.enquiryPerson.contactsPersonId)" v-else>查看联系人</el-button>
          <el-button type="default" class="right_btn" size="small" @click="sendOpen(index, microEnquiries.thirdId)" v-if="microOpenIndex!=index" ref="selbtn">查看</el-button>
          <el-button type="default" class="right_btn" size="small" @click="sendOpen(-1)" v-if="microOpenIndex==index" ref="sqbtn">收起</el-button>
        </div>
    </div>
  </div>
  <!--微询盘end-->
</template>

<script>
  import carouselChange from '@/components/carouselChange/carouselChange.vue'
  import enquiriesAPI from '@/api/enquiriesAPI'
  import Util from '@/common/Util.js'
  export default{
    props: {
      microEnquiries: Object,
      microOpenIndex: Number,
      index: Number
    },
    data () {
      return {
        isAddIng: false,  // 联系人是否正在添加中
        canSel: false,
        contentIsHaveOmit: false,
        descIsHaveOmit: false,
        allMement: false,
        MementList: [],
        mementLoading: false,
        allMementList: []
      }
    },
    computed: {
    },
    components: {
      carouselChange
    },
    watch: {
    },
    mounted () {
      if (this.$refs.content.clientHeight <= 20) {
        this.contentIsHaveOmit = false
      } else {
        this.contentIsHaveOmit = true
      }
      if (this.$refs.desc.clientHeight <= 20) {
        this.descIsHaveOmit = false
      } else {
        this.descIsHaveOmit = true
      }
      if (this.$refs.content.clientHeight <= 20 && this.$refs.desc.clientHeight <= 20 && (!this.microEnquiries.oriPic || this.microEnquiries.oriPic.length === 0) && (this.microEnquiries.oriVideo === '' || this.microEnquiries.oriVideo === null)) {
        this.canSel = false
      } else {
        this.canSel = true
      }
    },
    methods: {
      sendOpen (index, commentId) {
        if (index === -1) {
          this.allMement = false
          this.mementLoading = false
          this.contentIsHaveOmit = true
          this.descIsHaveOmit = true
        } else {
          this.mementList(commentId)
          this.allMement = true
          this.contentIsHaveOmit = false
          this.descIsHaveOmit = false
        }
        this.$emit('openMicro', index)
      },
//      全部评论
      allMement () {
        this.MementList = this.allMementList
      },
//      获取评论
      mementList (commentId) {
        this.MementList = []
        this.mementLoading = true
        enquiriesAPI.getMementList({commentId: commentId}).then(res => {
          if (!res.data.code) {
            this.mementLoading = false
            if (res.data.data.comments !== null && res.data.data.comments.length > 0) {
              if (res.data.data.comments.length > 5) {
                this.allMementList = res.data.data.comments
                this.MementList = res.data.data.comments.slice(0, 5)
              } else {
                this.MementList = res.data.data.comments
              }
            }
          }
        })
      },
      getLinkUrl (url) {
        return Util.checkUrl(url)
      },
      nextPageFunc (value) {
        console.log(value)
      },
      // 视频链接跳转
      videoLink (url) {
        window.open(url)
      },
      linkPageHome (obj) {
        let homepage = obj.fbHomepage
        let fbid = obj.fbID
        if (homepage !== '' && homepage !== null) {
          window.open(homepage)
        } else if (fbid !== '' && fbid !== null) {
          window.open('https://www.facebook.com/profile.php?id=' + fbid)
        }
      },
      open (url) {
        window.open('https://www.facebook.com/' + url)
      },
      // 微询盘当前页变更
      // 添加联系人
      addPersonFunc (item, event) {
        if (!this.isAddIng) {
          this.isAddIng = true
          if (this.isExecution) {
            return
          }
          this.isExecution = true
          let enquiryPerson = item.enquiryPerson
          let id = item.inquiryId
          let params = {
            firstName: enquiryPerson.firstname,
            lastName: enquiryPerson.lastName,
            microRecommendId: item.recommendId,
            createSource: 'commercial_opportunity_create'
          }
          if (enquiryPerson.avatar !== '' && enquiryPerson.avatar !== null) {
            params.avatar = enquiryPerson.avatar
          }
          let sociaes = []
          let homepageurl = ''
          let homepage = enquiryPerson.fbHomepage
          let fbid = enquiryPerson.fbID
          if (homepage !== '' && homepage !== null) {
            homepageurl = homepage
          } else if (fbid !== '' && fbid !== null) {
            homepageurl = 'https://www.facebook.com/profile.php?id=' + fbid
          }
          sociaes.push({'platform': 0, 'url': homepageurl, 'socialId': enquiryPerson.fbID})
          params.sociaes = JSON.stringify(sociaes)
          enquiriesAPI.addPerson(params).then(res => {
            if (res.data.code === 0) {
              let personId = res.data.data.personId
              item.enquiryPerson.contactsPersonId = personId
              this.isAddIng = false
              let valueObj = {
                id: id,
                personId: personId
              }
              this.$emit('addSure', valueObj)
//            this.enquirielist.forEach((item, index) => {
//              if (item.inquiryId === id) {
//                item.enquiryPerson.contactsPersonId = personId
//              }
//            })
              this.$message({
                message: '添加成功',
                type: 'success'
              })
            }
            this.isExecution = false
          })
        }
      },
      // 查看联系人
      selPerson (id) {
        this.$router.push({
          path: '/contactDetail',
          query: {'contactType': 0, 'contactId': id}
        })
      }
    }
  }
</script>
<!--<style lang="less" rel="stylesheet/less">-->
  <!--.micro_enquiries{-->
    <!--.micro_enquirie{-->
      <!--.right_opt{-->
        <!--.el-button&#45;&#45;default{-->
          <!--width:80px;-->
          <!--height:30px;-->
          <!--margin-left:0px;-->
        <!--}-->
        <!--.el-button&#45;&#45;primary{-->
          <!--width:80px;-->
          <!--height:30px;-->
          <!--margin-left:0px;-->
          <!--margin-bottom:8px;-->
          <!--.icon-font{-->
            <!--margin-right:4px;-->
          <!--}-->
        <!--}-->
      <!--}-->
    <!--}-->
  <!--}-->
<!--</style>-->

