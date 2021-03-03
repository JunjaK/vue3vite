const localeSetting =  {
	state: {
		locale: 'ko-KR'
	},
	getters: {
		getLocale: (state:any) => state.locale
	},
	actions: {
		changeLocale(context:any, data:string) {
			context.commit('SET_LOCALE', data)
		},
		clearLocale(context:any) {
			context.commit('INIT_LOCALE')
		}
	},
	mutations: {
		SET_LOCALE(state:any, payload:string) {
			state.locale = payload
		}
	},
}

export default localeSetting
