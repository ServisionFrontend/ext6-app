Ext.define('App.store.account.UserManage', {
	extend: 'Ext.ux.store.Base',
	model: 'App.model.account.UserManage',
	isUpload: true,
	proxyAPI: {
		read: App.globalConfig.path + '/user/list.json',
		create: App.globalConfig.path + '/user/add.json',
		update: App.globalConfig.path + '/user/update.json',
		destroy: App.globalConfig.path + ''
	}
});