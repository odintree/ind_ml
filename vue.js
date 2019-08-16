
var app = new Vue({
	el: '#app',
	data: {
		message: 'Home Work #3',
		theInput: '',
		lists: [],
		info: '',
		msg: '',
		season: 0, holiday: 0, workingday: 0, weather: 0, temp: 0, humidity: 0, windspeed: 0, casual: 0, registered: 0,
		result: 0,
	},
	methods: {
		sendData: function () {
			this.result = 'hi alizhan';
			axios
				.post('http://127.0.0.1:5000/', {
					season: this.season,
					holiday: this.holiday,
					workingday: this.workingday,
					weather: this.weather,
					temp: this.temp,
					humidity: this.humidity,
					windspeed: this.windspeed,
					casual: this.casual,
					registered: this.registered,

				})
				.then(response => (this.result = response.data['result']))
		},
		addText: function () {
			this.lists.unshift({
				title: this.theInput,
			});
			this.theInput = '';
		}
	},
	// mounted() {
	// 	axios
	// 		.get('http://127.0.0.1:5000/')
	// 		.then(response => (this.info = response))
	// }
})