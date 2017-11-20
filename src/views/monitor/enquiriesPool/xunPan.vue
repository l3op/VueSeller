<template>
	<div class="commonEnq">
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
			<div class="center-info">
				<div class="pic"></div>
				<div class="right">
					<div class="name">Cheryl Patel</div>
					<div class="time">2017-12-12 13:00</div>
				</div>
			</div>
			<p class="say-some">padid on june,padid on june,padid on june,padid on june,padid on june,padid on june,padid on june,padid on june,padid on june,</p>

		</div>
		<div class="pic-box"></div>
		<div class="content-bottom">
			<div class="person-info">
				<div class="person-pic"></div>
				<div class="person-name">
					<div class="who">Cheryl Patel</div>
					<div class="who-time">2017-12-12 13:00</div>
				</div>
				<div class="contact-person"><el-button type="primary"><i class="el-icon-plus"></i>联系人</el-button></div>
			</div>
			<p class="what-say">padid on june,padid on june,padid on june,padid on june,padid on june,padid on june,padid on june,padid on june,padid on june</p>
			<div class="line-bottom"></div>
			<div class="detail">
				<span @click="dialogVisible = true">查看详情</span>
				<div class="mount">
					<i class="icon-font">&#xe67f;</i>
					<span>45</span>
				</div>
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
			<div class="center-info">
				<div class="pic"></div>
				<div class="right">
					<div class="name">Cheryl Patel</div>
					<div class="time">2017-12-12 13:00</div>
				</div>
			</div>
			<p class="say-some">padid on june,padid juneonn june,padid juneonn ju,padid juneonn ju,padid juneonn ju,padid juneonn ju,padid juneonn ju,padid onon june,padid on june,padid on june,padid onon june,padid on june,padid on june,pe,padne,padid on</p>
			
		  </div>
		  <div class="lunbo"></div>
		  <div class="say-box">
		  	<div class="someone">
		  		<div class="person-pic"></div>
		  		<span>Cheryl Patel</span>
		  		<div class="contact-person"><el-button type="primary"><i class="el-icon-plus"></i>联系人</el-button></div>
		  	</div>
		    <div class="next-one">
		    	<div class="pic"></div>
		    	<div class="liuyan">
		    		<div><span>Cheryl Patel</span><span>2017-12-12 13:00</span></div>
		    		<p>padid on june,padid ju,padid juneonn ju,padidid on june,padid on june,padid onon june,padid on june,padid on june,pe,padne,padid on</p>
		    	</div>
		    </div>
		    <div class="history-say">
		    	<div class="pic"></div>
		    	<div class="liuyan">
		    		<div><span>Cheryl Patel</span><span>2017-12-12 13:00</span></div>
		    		<p>padid on june,padid ju,padid juneonn ju,padidid on june,padid on june,padid onon june,padid on june,padid on june,pe,padne,padid on</p>
		    	</div>
		    </div>
		    <div class="history-say">
		    	<div class="pic"></div>
		    	<div class="liuyan">
		    		<div><span>Cheryl Patel</span><span>2017-12-12 13:00</span></div>
		    		<p>padid on june,padid ju,padid juneonn ju,padidid on june,padid on june,padid onon june,padid on june,padid on june,pe,padne,padid on</p>
		    	</div>
		    </div>
		  	<span class="bottom-title">全部评论</span>
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
	.commonEnq {
		width: 380px;
		background: #FFFFFF;
		box-shadow: 0 0 4px 0 rgba(0,0,0,0.10);
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
				background-color: rgba(0, 184, 204, 0.40);
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
					width: 14px;
					height: 13px;
					display: inline-block;
					background-image: url(../../../assets/xunpan/commom.svg);
					background-size: 100% 100%;
					position: relative;
					top: -1px;
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
			.center-info {
				display: flex;
				justify-content: flex-start;
				align-items: center;
				margin-top: 10px;
				.pic {
					height: 32px;
					width: 32px;
					border-radius: 2px;
					background-image: url(../../../assets/demopic.jpg);
					background-size: 100% 100%;
					margin-right: 8px;
				}
				.right {
					height: 32px;
					width: 300px;
					position: relative;
					.name {
						font-family: PingFangSC-Semibold;
						font-size: 14px;
						color: #6295F7;
						letter-spacing: 0;
					}
					.time {
						font-family: PingFangSC-Regular;
						font-size: 12px;
						color: #888888;
						letter-spacing: 0;
						position: absolute;
						bottom: 0px;
					}
					.say-some {
						width: 100%;
					}
				}
			}
			.say-some {
				margin-top: 10px;
				
				font-family: HelveticaNeue;
				font-size: 14px;
				color: #888888;
				letter-spacing: 0;
				line-height: 14px;
				overflow: hidden;
				text-overflow: ellipsis;
				display: -webkit-box;
				-webkit-box-orient: vertical;
				-webkit-line-clamp: 2;
			}
		}
		.pic-box {
			height: 180px;
			background-image: url(../../../assets/demopic.jpg);
			background-size: 100% 100%;
		}
		.content-bottom {
			background-color: #F8F9FD;
			width: 100%;
			box-sizing: border-box;
			padding: 20px 0px 20px 20px;
			.person-info{
				position: relative;
				display:flex;
				.person-pic{
					width: 40px;
					height: 40px;
					background-image: url(../../../assets/demopic.jpg);
					background-size: 100% 100%;
					border-radius: 20px;
					margin-right: 8px;
				}
				.person-name{
					position: relative;
					width: 298px;
					.who{
						font-family: PingFangSC-Semibold;
						font-size: 14px;
						color: #6295F7;
						letter-spacing: 0;
					}
					.who-time{
						font-family: PingFangSC-Regular;
						font-size: 12px;
						color: #888888;
						letter-spacing: 0;
						position: absolute;
						bottom: 3px;
					}
				}
				.contact-person{
					width: 80px;
					height: 28px;
					position: absolute;
					top: 0px;
					right: 20px;
					background: transparent;
					.el-button{
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
						i{
							font-size: 10px;
							margin-right: 2px;
							position: relative;
							top: -1px;
						}
					}
				}
			}
			.what-say{
				width: 294px;
				margin-left: 49px;
				color: #888888;
				margin-top: 8px;
				overflow: hidden;
		        line-height: 14px;
		        text-overflow: ellipsis;
		        display: -webkit-box;
		        -webkit-box-orient: vertical;
		        -webkit-line-clamp: 2;       
			}
			.line-bottom{
				width: 310px;
				height: 2px;
				background-color:  #E4E4E4;
				margin-left: 49px;
				margin-top: 10px;
			}
			.detail{
				width: 310px;
				margin-left: 49px;
				display: flex;
				justify-content: space-between;
				margin-top: 10px;
				align-items: center;
				>span{
					font-family: PingFangSC-Regular;
					font-size: 13px;
					color: #666666;
					line-height: 21px;
				}
				.mount{
					margin-right: 20px;
					font-family: PingFangSC-Regular;
					font-size: 14px;
					color: #666666;
					letter-spacing: 0;
				}
			}
		}
		.commonEnq .el-dialog{
			height: auto;
		}
		.el-dialog__header{
			display: none;
		}
		.el-dialog{
			width: 680px;
			
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
				p{
					font-family: PingFangSC-Semibold;
					font-size: 18px;
					color: #444444;
					letter-spacing: 0;
				}
				span {
					font-family: PingFangSC-Regular;
					font-size: 14px;
					color: #33475B;
					letter-spacing: 0;
					margin: 0px 2px;
					margin-right: 5px;
				}
				
			}
			.center-info {
				display: flex;
				justify-content: flex-start;
				align-items: center;
				margin-top: 10px;
				margin-bottom: 10px;
				.pic {
					height: 32px;
					width: 32px;
					border-radius: 2px;
					background-image: url(../../../assets/demopic.jpg);
					background-size: 100% 100%;
					margin-right: 8px;
				}
				.right {
					height: 32px;
					width: 300px;
					position: relative;
					.name {
						font-family: PingFangSC-Semibold;
						font-size: 14px;
						color: #6295F7;
						letter-spacing: 0;
					}
					.time {
						font-family: PingFangSC-Regular;
						font-size: 12px;
						color: #888888;
						letter-spacing: 0;
						position: absolute;
						bottom: 0px;
					}
					.say-some {
						width: 100%;
					}
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
		}
		.lunbo{
				width: 100%;
				height: 347px;
				border-bottom: 1px solid #EAF0F6;
			}
		.say-box{
			
			padding:0px 20px 20px 20px;
			.someone{
				position: relative;
				display: flex;
				align-items: center;
				justify-content: flex-start;
				height: 76px;
				width: 100%;
				border-bottom: 1px solid #EAF0F6;
				
				.person-pic{
					width: 40px;
					height: 40px;
					background-image: url(../../../assets/demopic.jpg);
					background-size: 100% 100%;
					border-radius: 20px;
					margin-right: 8px;
				}
				>span{
					font-family: PingFangSC-Semibold;
					font-size: 14px;
					color: #5488F9;
					letter-spacing: 0;
				}
				.contact-person{
					width: 80px;
					height: 28px;
					position: absolute;					
					right: 20px;
					background: transparent;
					top: 50%;
					transform: translateY(-50%);
					.el-button{
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
						i{
							font-size: 10px;
							margin-right: 2px;
							position: relative;
							top: -1px;
						}
					}
				}
			}
			.next-one{
			    overflow: hidden;
				
				width: 100%;
				border-bottom: 1px solid #EAF0F6;
				box-sizing: border-box;
				padding: 16px;
				.pic {
					height: 40px;
					width: 40px;
					border-radius: 20px;
					background-image: url(../../../assets/demopic.jpg);
					background-size: 100% 100%;
					margin-right: 8px;
					float: left;
				}
				.liuyan{
					float: left;
					div{
						>span:nth-of-type(1){
							font-family: PingFangSC-Semibold;
							font-size: 14px;
							color: #5488F9;
							letter-spacing: 0;
						}
						>span:nth-of-type(2){
							font-family: PingFangSC-Regular;
							font-size: 13px;
							color: #888888;
							letter-spacing: 0;
							margin-left: 10px;
						}
					}
					>p{
						width: 560px;
						font-family: PingFangSC-Regular;
						font-size: 13px;
						color: #888888;
						letter-spacing: 0;
						margin-top: 6px;
					}
				}
			}
			.history-say{
				overflow: hidden;				
				width: 100%;				
				box-sizing: border-box;
				box-sizing: border-box;
				padding-left: 70px;
				margin-top: 17px;
				.pic {
					height: 40px;
					width: 40px;
					border-radius: 20px;
					background-image: url(../../../assets/demopic.jpg);
					background-size: 100% 100%;
					margin-right: 8px;
					float: left;
				}
				.liuyan{
					float: left;
					width: 479px;
					div{
						>span:nth-of-type(1){
							font-family: PingFangSC-Semibold;
							font-size: 14px;
							color: #5488F9;
							letter-spacing: 0;
						}
						>span:nth-of-type(2){
							font-family: PingFangSC-Regular;
							font-size: 13px;
							color: #888888;
							letter-spacing: 0;
							margin-left: 10px;
						}
					}
					>p{
						
						font-family: PingFangSC-Regular;
						font-size: 13px;
						color: #888888;
						letter-spacing: 0;
						margin-top: 6px;
					}
				}
				
			}
			.history-say:nth-last-of-type(1){
				        border-bottom: 1px solid #EAF0F6;
				        padding-bottom: 16px;
				        margin-bottom: 9px;
				}
		    .bottom-title{
		    	font-family: PingFangSC-Regular;
				font-size: 14px;
				color: #666666;
				line-height: 21px;
				
		    }
		}
		.el-dialog{
			top: 0px !important;
		}
	}
</style>

