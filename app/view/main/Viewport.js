Ext.define('App.view.main.Viewport', {
	extend: 'Ext.container.Viewport',

	requires: [
		'Ext.button.Segmented',
		'Ext.list.Tree',
		'App.view.main.MainContainerWrap'
	],
	controller: 'main',
	viewModel: 'main',

	itemId: 'mainView',
	layout: {
		type: 'vbox',
		align: 'stretch'
	},

	items: [{
		xtype: 'toolbar',
		height: 64,
		itemId: 'headerBar',
		padding: 0,
		items: [{
			border: true,
			xtype: 'component',
			reference: 'senchaLogo',
			cls: 'sencha-logo',
			html: '<div class="main-logo"><img src="resources/images/logo.png">浩配主数据管理系统</div>',
			width: 250
		}, {
			margin: '0 0 0 8',
			ui: 'header',
			iconCls: 'x-fa fa-navicon',
			id: 'main-navigation-btn',
			enableToggle: true,
			handler: 'onToggleNavigationSize' //onToggleNavigationSize//onToggleMicro
		}]
	}, {
		xtype: 'maincontainerwrap',
		id: 'main-view-detail-wrap',
		reference: 'mainContainerWrap',
		flex: 1,
		items: [{
			// region: 'west',
			// width: 250,
			// split: true,
			// reference: 'treelistContainer',
			// layout: {
			// 	type: 'vbox',
			// 	align: 'stretch'
			// },
			// split: true,
			// border: false,
			// scrollable: 'y',
			// items: [{
			// 		xtype: 'treelist',
			// 		reference: 'treelist',
			// 		store: Ext.create('App.store.NavigationTree')
			// 	}]
			region: 'west',
			scrollable: 'y',
			width: 250,
			reference: 'navigationWrap',
			layout: {
				type: 'vbox',
				align: 'stretch'
			},
			cls: 'treelist-with-nav',
			items: [{
				xtype: 'treelist',
				reference: 'navigationTreeList',
				itemId: 'navigationTreeList',
				ui: 'navigation',
				store: Ext.create('App.store.NavigationTree'),
				expanderFirst: false,
				expanderOnly: false
			}]
		}, {
			xtype: 'container',
			region: 'center',
			reference: 'mainCardPanel',
			cls: 'sencha-dash-right-main-container',
			itemId: 'contentPanel',
			layout: {
				type: 'card',
				anchor: '100%'
			},
			padding: 8,
			items: [{
				xtype: 'tabpanel',
				id: "tabs",
				items: [{
					title: '首页',
					layout: 'fit',
					closeAction: "destroy"
				}],
				plugins: Ext.create('Ext.ux.TabCloseMenu')
			}]
		}]
	}]
});