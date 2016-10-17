var extjsConfig = App.extjsConfig,
	bootPage = extjsConfig.pages[extjsConfig.pageCode];

Ext.application({
	name: 'App',

	extend: 'App.Application',

	requires: [
		'App.*'
	],

	controllers: [bootPage.controller],

	mainView: bootPage.viewport

});