Ext.define('App.view.account.userManage.Edit', {
	extend: 'Ext.ux.component.edit.Edit',
	requires: ['Ext.ux.component.combo.GroupCombo'],
	title: '用户管理',
	ckdlist: [],
	updateDisableItems: ['username'],
	items: [{
		items: [{
			xtype: 'hiddenfield',
			name: 'id'
		}, {
			fieldLabel: '用户名',
			name: 'username'
		}, {
			fieldLabel: '用户描述',
			name: 'userDesc',
			allowBlank: true
		}, {
			xtype: 'basecombo',
			fieldLabel: '状态',
			name: 'enable',
			value: true,
			displayFormat: '',
			localData: [{
				name: '启用',
				code: true
			}, {
				name: '禁用',
				code: false
			}]
		}, {
			xtype: 'fieldset',
			title: '权限分配',
			items: [{
				itemId: 'promise_m',
				xtype: 'groupmanage'
			}]
		}, {
			xtype: 'hiddenfield',
			name: 'changeDirty'
		}]
	}],
	listeners: {
		afterrender: function() {
			var me = this,
				promiseG = me.down("[itemId=promise_m]"),
				ckdlist = me.ckdlist;
			promiseG.load(ckdlist);
		}
	},

	setRecord: function() {
		var me = this;
		me.callParent(arguments);
		me.ckdlist = arguments[0].get("permissionIds");
	},

	getParams: function() {
		var me = this,
			params = {},
			promiseG = me.down("[itemId=promise_m]"),
			enable = me.query("[name='enable']"),
			items = me.getFormFields();

		Ext.each(items, function(item) {
			if (!item.isNotSubmit) {
				var temp = item.getValue();
				params[item.name] = temp;
			}
		});
		Ext.apply(params, {
			permissionIds: promiseG.codes
		});

		return params;
	}
});