Ext.define('App.form.SearchField', {
	extend: 'Ext.form.field.Base',
	alias: 'widget.searchField',
	inputType: 'search',
	searchUrl: 'http://www.baidu.com',
	//fieldSubTpl: '<a>百度</a>',
	initComponent: function() {
		this.callParent(arguments);
		this.on('specialkey', this.checkEnterKey, this);
		this.on('click', this.clickKey, this);
	},
	checkEnterKey: function(field, e) {
		var val = this.getValue();
		if (e.getKey() == e.ENTER && !Ext.isEmpty(val)) {
			var url = Ext.String.format(this.searchUrl, val);
			window.open(url);
		}
	}
});


Ext.define('App.view.account.userManage.Query', {
	extend: 'Ext.ux.component.filter.Query',
	alias: 'widget.userquery',
	requires: ['Ext.ux.component.combo.BaseCombo'],
	items: [{
		items: [{
			xtype: 'searchField',
			fieldLabel: '如果回车我就跳转'
		}, {
			fieldLabel: '用户名',
			name: 'username'
		}, {
			fieldLabel: '用户描述',
			name: 'userDesc'
		}, {
			xtype: 'basecombo',
			fieldLabel: '状态',
			name: 'enable',
			value: '',
			displayFormat: '',
			localData: [{
				name: '全部',
				code: ''
			}, {
				name: '启用',
				code: '1'
			}, {
				name: '禁用',
				code: '0'
			}]
		}]
	}]
});