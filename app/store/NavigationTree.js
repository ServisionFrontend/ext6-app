Ext.define('Ext6App.store.NavigationTree', {
	extend: 'Ext.data.TreeStore',

	storeId: 'NavigationTree',

	fields: [{
		name: 'text'
	}],

	root: {
		expanded: true,
		children: [{
			text: '供应商管理',
			iconCls: 'x-fa fa-user',
			leaf: false,
			expanded: false,
			selectable: false,
			children: [{
				text: '供应商信息',
				iconCls: 'x-fa fa-gavel',
				viewType: 'pageblank',
				leaf: true
			}, {
				text: '供应商配件',
				iconCls: 'x-fa fa-info-circle',
				viewType: 'pageblank',
				leaf: true
			}]
		}, {
			text: '配件管理',
			iconCls: 'x-fa fa-send',
			leaf: true
		}, {
			text: 'OEM用法',
			iconCls: 'x-fa fa-user',
			leaf: true
		}, {
			text: '基础数据',
			iconCls: 'x-fa fa-search',
			leaf: true
		}, {
			text: '用户管理',
			iconCls: 'x-fa fa-leanpub',
			expanded: false,
			selectable: false,
			children: []
		}]
	}
});