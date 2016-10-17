Ext.define('App.view.account.userManage.Grid', {
	extend: 'Ext.ux.component.grid.Grid',
	alias: 'widget.usergrid',
	rownumberer: true,
	controlButtons: ["update", "resetpwd"],
	tbar: [{
		xtype: 'button',
		text: '添加',
		action: 'create'
	}, '-', {
		xtype: 'button',
		text: '修改',
		action: 'update',
		disabled: true,
		singleSelectEnable: true
	}, '-', {
		xtype: 'button',
		text: '重置密码',
		action: 'resetpwd',
		disabled: true
	}],
	columns: [{
		text: '用户名',
		dataIndex: 'username',
		locked: true,
		width: 260
	}, {
		text: '用户描述',
		dataIndex: 'userDesc',
		width: 120
	}, {
		text: '状态',
		dataIndex: 'enable',
		width: 120,
		renderer: function(v) {
			return v ? "启用" : "禁用";
		}

	}, {
		text: '创建人',
		dataIndex: 'createdBy',
		width: 120
	}, {
		text: '创建时间',
		dataIndex: 'createdDate',
		width: 120
	}, {
		text: '修改人',
		dataIndex: 'modifiedBy',
		width: 120
	}, {
		text: '修改时间',
		dataIndex: 'modifiedDate',
		width: 120
	}]
});