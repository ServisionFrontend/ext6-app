// var extjsConfig = App.extjsConfig;
// var bootPage = extjsConfig.pages[extjsConfig.pageCode];

// Ext.application({
// 	name: 'App',

// 	extend: 'App.Application',

// 	requires: [
// 		'App.*',
// 		'Ext.util.Common'
// 	],

// 	controllers: [bootPage.controller],

// 	mainView: bootPage.viewport

// });


Ext.application({
	name: 'App',
	extend: 'Ext.app.Application',
	appFolder: 'app',
	requires: [
		'App.*',
		'Ext.util.Common'
	],
	paths: {
		"App": App.globalConfig.appPath,
		'Ext.ux': App.globalConfig.uxPath
	},
	controllers: [App.pageConfig.controller],
	mainView: App.pageConfig.viewport
});