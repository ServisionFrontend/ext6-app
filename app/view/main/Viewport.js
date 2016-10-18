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
			html: '',
			width: 250
		}, {
			margin: '0 0 0 8',
			ui: 'header',
			iconCls: 'x-fa fa-navicon',
			id: 'main-navigation-btn',
			handler: 'onToggleNavigationSize'
		}]
	}, {
		xtype: 'maincontainerwrap',
		id: 'main-view-detail-wrap',
		reference: 'mainContainerWrap',
		flex: 1,
		items: [{
			region: 'west',
			scrollable: 'y',
			reference: 'navigationWrap',
			layout: 'fit',
			// border: true,
			// style: "border:4px solid red;",
			bodyStyle: 'background:#32404e;',
			items: [{
				xtype: 'treelist',
				reference: 'navigationTreeList',
				itemId: 'navigationTreeList',
				ui: 'navigation',
				store: Ext.create('App.store.NavigationTree'),
				expanderFirst: false,
				width: 250,
				expanderOnly: false
			}]
		}, {
			xtype: 'container',
			region: 'center',
			reference: 'mainCardPanel1',
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
				}]
			}]
		}]
	}]
});