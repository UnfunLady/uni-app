import http from '../../http/http.js'
const getHotPointList = () => {
	return http.request({
		baseUrl: '/aa',
		url: "/search/api/v1/pc-wap/rolling-word",
		method: "get"
	})
}

const getNews = (size = 0) => {
	return http.request({
		url: `/nc/article/list/T1467284926140/${size}-20.html`,
		method: "get"
	})
}

export default {
	getHotPointList,
	getNews
}
