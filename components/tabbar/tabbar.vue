<template>
	<view class="tabbar">
		<u-tabbar :value="current" activeColor="#8cadd0" :fixed="true" @change="change" :placeholder="false"
			:safeAreaInsetBottom="false">
			<u-tabbar-item :text="item.text" v-for="item in list" :key="item.id" @click="changeTab(item)">
				<image class="u-page__item__slot-icon" slot="active-icon" :src="item.selectedIconPath">
				</image>
				<image class="u-page__item__slot-icon" slot="inactive-icon" :src="item.iconPath">
				</image>
			</u-tabbar-item>
		</u-tabbar>
	</view>
</template>

<script>
	export default {
		props: {
			changtab: {
				type: Function
			}
		},
		data() {
			return {
				current: 0,
				list: [{
						id: 0,
						iconPath: "../../static/images/home.png",
						selectedIconPath: "../../static/images/home-active.png",
						text: '首页',
						customIcon: false,
						pagePath: "/pages/index/index"
					},
					{
						id: 1,
						iconPath: "../../static/images/video.png",
						selectedIconPath: "../../static/images/video-active.png",
						text: '视频',
						customIcon: false,
						pagePath: "/pages/video/video"
					},
					{
						id: 2,
						iconPath: "../../static/images/search.png",
						selectedIconPath: "../../static/images/search-active.png",
						text: '发现',
						customIcon: false,
						pagePath: "/pages/findView/findView"
					},
					{
						id: 3,
						iconPath: "../../static/images/me.png",
						selectedIconPath: "../../static/images/me-active.png",
						text: '我的',
						customIcon: false,
						pagePath: "/pages/MyView/MyView"
					},
				]
			};
		},
		mounted() {

		},
		methods: {
			changeTab(item) {
				this.$emit("changtab", item)
			},
			change(name) {
				this.current = name;
			}
		}
	}
</script>

<style lang="scss">
	.u-page__item__slot-icon {
		width: 20px !important;
		height: 20px !important;
	}
</style>
