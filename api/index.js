const BASE_URL = ''
export default ({
	url,
	method = 'get',
	data = {
		start: 0
	}
}) => {
	return new Promise((resolve, reject) => {
		uni.request({
			url:BASE_URL + url,
			data,
			header: {
				'content-type': 'application/x-www-form-urlencoded'
			},
			method,
			success(res) {
				resolve(res)
			},
			fail(err) {
				reject(err)
			},
		})
	})
}
