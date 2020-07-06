<template>
  <div id="app">

		<!-- tabbar底层导航部分 -->
    <nav class="mui-bar mui-bar-tab">
			<routerLink class="mui-tab-item" to="/home">
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">首页</span>
			</routerLink>
			<routerLink class="mui-tab-item" to="/category">
				<span class="mui-icon mui-icon-extra mui-icon-extra-class"></span>
				<span class="mui-tab-label">分类</span>
			</routerLink>
			<routerLink class="mui-tab-item" to="/cart">
				<span class="mui-icon mui-icon-extra mui-icon-extra-cart">
					<span class="mui-badge">0</span>
				</span>
				<span class="mui-tab-label">购物车</span>
			</routerLink>
			<routerLink class="mui-tab-item" to="/profile">
				<span class=" mui-icon mui-icon-contact"></span>
				<span class="mui-tab-label">我的</span>
			</routerLink>
		</nav>
    <router-view />
  </div>
</template>

<style lang="scss" scoped>
.mui-bar-tab .mui-tab-item.mui-active{
	color: #FF8E97; 
}
#app{
	padding-top: 2.5rem;
}
</style>
