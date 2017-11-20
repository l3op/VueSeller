<template>
	<div class="micro">
		<div class="title">
			<h3>推荐来源:</h3>
			<div><span>产品类型: 钟表，珠宝首饰，眼镜</span></div>
		</div>
		<div class="content-top">
			<div class="top">
				<div class="conpic"></div>
				<span>主页:</span>
				<p>PVC Tarpaullins,canvas,HDPE Tarpaaaaaaaaaaaaaaaaaaaaaaaa</p>
			</div>
			<p class="say-some">padid on june,padid on june,padid on june,padid on june,padid on june,padid on june,padid on june,padid on june,padid on june,ppppppppppppppppppppppppppppppppppppppppppppppppppp</p>
			<p class="fenlei">分类:padid on june,padid on june,padid on june,padid on june,padid on</p>
			<span class="what-time">
				<i class="icon-font">&#xe67f;</i>
				<span>2017-12-12 13:00</span>
			</span>
		</div>
		<div class="bottom-content">
			<span class="see-detail"  @click="dialogVisible = true">查看详情</span>
			<div class="contact-you">
				<el-button type="primary"><i class="el-icon-plus"></i>联系人</el-button>
			</div>
		</div>
		
		<el-dialog
		  title="提示"
		  v-model="dialogVisible"
		  size="tiny"
		  :before-close="handleClose">
		  
		  <div class="top-box">
		  	<h3>推荐来源:</h3>
		  	<div><span>搜索历史:PVC</span></div>
		  </div>
		  <div class="next-box">
		  	<div class="top">
				<div class="conpic"></div>
				<span>主页:</span>
				<p>PVC Tarpaullins,canvas,HDPE Tarpaaaaaaaaaaaaaaaaaaaaaaaa</p>
			</div>
			<p class="say-some">padid on june,padid on june,padid on june,padid on june,padid on june,padid on june,padid on june,padid on june,padid on june,ne,padid on june,padid on june,padne,padid on june,padid on june,padne,padid on june,padid on june,pad</p>
			<ul class="connect">
				<li>公司: <span>padid</span></li>
				<li>联系人: <span>mr.wang</span></li>
				<li>邮箱: <span></span></li>
				<li>国家: <span>england</span></li>
				<li>地址: <span>padid on june</span></li>
				<li>电话: <span>250351060</span></li>
				<li>传真: <span>123456123</span></li>
				<li>官网: <span>www.baidu.com</span></li>
				<li class="fenlei">分类: <span>padid on june</span></li>
			</ul>
			<span class="what-time">
				<i class="icon-font">&#xe67f;</i>
				<span>2017-12-12 13:00</span>
			</span>
		  </div>
		  
		</el-dialog>
	</div>
</template>

<script>
export default {
  data () {
    return {
      dialogVisible: false
    }
  },
  methods: {
    handleClose (done) {
      this.$confirm('确认关闭？')
        .then(_ => {
          done()
        })
        .catch(_ => {})
    }
  }
}
</script>

<style lang="less" rel="stylesheet/less">
	.micro {
		width: 380px;
		margin-top: 20px;
		background: #FFFFFF;
		box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.10);
		border-radius: 2px;
		.title {
			display: flex;
			align-items: center;
			justify-content: flex-start;
			height: 48px;
			border-bottom: 1px solid #EAF0F6;
			h3 {
				font-family: "微软雅黑";
				font-size: 14px;
				color: #666666;
				letter-spacing: 0;
				margin-left: 20px;
				margin-right: 3px;
			}
			div:nth-of-type(1) {
				display: inline-block;
				height: 28px;
				font-size: 13px;
				color: #33475B;
				letter-spacing: 0;
				background-color: rgba(255, 59, 110, 0.40);
				border-radius: 5px;
				span {
					line-height: 28px;
					padding: 0 13px;
				}
			}
		}
		.content-top {
			box-sizing: border-box;
			padding: 16px 20px;
			
			.top {
				display: flex;
				justify-content: flex-start;
				align-items: center;
				width: 100%;
				.conpic{
					height: 14px;
					width: 13px;
					display: inline-block;
					background-image: url(../../../assets/xunpan/apic.svg);
					background-size: 100% 100%;
				}
				i {
					font-size: 13px;
				}
				span {
					font-family: PingFangSC-Regular;
					font-size: 12px;
					color: #33475B;
					letter-spacing: 0;
					margin: 0px 2px;
				}
				p {
					width: 290px;
					overflow: hidden;
					text-overflow: ellipsis;
					white-space: nowrap;
					font-family: PingFangSC-Semibold;
					font-size: 16px;
					color: #444444;
					letter-spacing: 0;
				}
			}
			.say-some {
				margin-top: 19px;
				margin-bottom: 19px;
				font-family: HelveticaNeue;
				font-size: 14px;
				color: #888888;
				letter-spacing: 0;
				line-height: 14px;
				overflow: hidden;
				text-overflow: ellipsis;
				display: -webkit-box;
				-webkit-box-orient: vertical;
				-webkit-line-clamp: 3;
			}
			.fenlei {
				width: 100%;
				font-family: PingFangSC-Regular;
				font-size: 14px;
				color: #444444;
				letter-spacing: 0;
				overflow: hidden;
				white-space: nowrap;
				text-overflow: ellipsis;
				margin-bottom: 8px;
			}
			.what-time {
				font-family: HelveticaNeue;
				font-size: 14px;
				color: #888888;
				letter-spacing: 0;
				line-height: 18px;
			}
		}
		.bottom-content {
			background-color: #F8F9FD;
			width: 100%;
			height: 60px;
			display: flex;
			justify-content: flex-end;
			align-items: center;
			.contact-you {
				width: 80px;
				height: 28px;
				background-color: transparent;
				margin-right: 20px;
				.el-button {
					padding: 0px;
					display: flex;
					justify-content: center;
					align-items: center;
					width: 100%;
					height: 100%;
					font-family: PingFangSC-Regular;
					font-size: 13px;
					color: #FFFFFF;
					letter-spacing: 0;
					i {
						font-size: 10px;
						margin-right: 2px;
						position: relative;
						top: -1px;
					}
				}
			}
			.see-detail {
				font-family: PingFangSC-Regular;
				font-size: 13px;
				color: #666666;
				line-height: 21px;
				margin-right: 20px;
			}
		}
		.el-dialog__header{
			display: none;
		}
		.el-dialog{
			width: 680px;
			height: 480px;
		}
		.el-dialog__body{
			padding: 0px;
		}
		.top-box{
			width: 100%;
			height: 60px;
			display: flex;
			justify-content: flex-start;
			align-items: center;
			border-bottom:1px solid #EAF0F6;
			h3{
				font-family: "微软雅黑";
				font-size: 14px;
				color: #666666;
				letter-spacing: 0;
				margin-left: 20px;
				margin-right: 6px;
			}
			div:nth-of-type(1) {
				display: inline-block;
				height: 28px;
				font-size: 13px;
				color: #33475B;
				letter-spacing: 0;
				background-color: rgba(255,59,110,0.40);
				border-radius: 5px;
				span {
					line-height: 28px;
					padding: 0 13px;
				}
			}
		}
		.next-box{
			width: 100%;
			height: 340px;
			box-sizing: border-box;
			padding: 20px;
			.top {
				display: flex;
				justify-content: flex-start;
				align-items: center;
				width: 100%;
				.conpic{
					height: 18px;
					width: 18px;
					display: inline-block;
					background-image: url(../../../assets/xunpan/apic.svg);
					background-size: 100% 100%;
				}
				
				span {
					font-family: PingFangSC-Regular;
					font-size: 14px;
					color: #33475B;
					letter-spacing: 0;
					margin: 0px 2px;
					margin-right: 5px;
				}
				p {
					width: 570px;
					overflow: hidden;
					text-overflow: ellipsis;
					white-space: nowrap;
					font-family: PingFangSC-Semibold;
					font-size: 18px;
					color: #444444;
					letter-spacing: 0;
				}
			}
			.say-some {
				margin-top: 17px;
				margin-bottom: 16px;
				font-family: HelveticaNeue;
				font-size: 14px;
				color: #888888;
				
				line-height: 20px;
				word-wrap: break-word;
			}
			.connect{
				font-family: PingFangSC-Regular;
				font-size: 14px;
				color: #888888;
				letter-spacing: 0;
				margin-bottom: 8px;
				span{
					font-family: PingFangSC-Regular;
					font-size: 13px;
					color: #000000;
					letter-spacing: 0;
					line-height: 24px;
				}
				.fenlei{
					margin-top: 21px;
				}
			}
			.what-time {
				font-family: HelveticaNeue;
				font-size: 14px;
				color: #888888;
				letter-spacing: 0;
				line-height: 18px;
				
			}
		}
		
	}
</style>

