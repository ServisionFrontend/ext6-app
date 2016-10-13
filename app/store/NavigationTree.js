Ext.define('Ext6App.store.NavigationTree', {
	extend: 'Ext.data.TreeStore',

	storeId: 'NavigationTree',

	fields: [{
		name: 'text'
	}],

	root: {
		expanded: true,
		children: [{
			text: 'Dashboard',
			iconCls: 'x-fa fa-desktop',
			rowCls: 'nav-tree-badge nav-tree-badge-new',
			routeId: 'dashboard', // routeId defaults to viewType
			leaf: true
		}, {
			text: 'Email',
			iconCls: 'x-fa fa-send',
			rowCls: 'nav-tree-badge nav-tree-badge-hot',
			leaf: true
		}, {
			text: 'Profile',
			iconCls: 'x-fa fa-user',
			leaf: true
		}, {
			text: 'Search results',
			iconCls: 'x-fa fa-search',
			leaf: true
		}, {
			text: 'FAQ',
			iconCls: 'x-fa fa-question',
			leaf: true
		}, {
			text: 'Pages',
			iconCls: 'x-fa fa-leanpub',
			expanded: false,
			selectable: false,
			//routeId: 'pages-parent',
			//id: 'pages-parent',

			children: [{
					text: 'Blank Page',
					iconCls: 'x-fa fa-file-o',
					viewType: 'pageblank',
					leaf: true
				},

				{
					text: '404 Error',
					iconCls: 'x-fa fa-exclamation-triangle',
					viewType: 'page404',
					leaf: true
				}, {
					text: '500 Error',
					iconCls: 'x-fa fa-times-circle',
					viewType: 'page500',
					leaf: true
				}, {
					text: 'Lock Screen',
					iconCls: 'x-fa fa-lock',
					viewType: 'lockscreen',
					leaf: true
				},

				{
					text: 'Login',
					iconCls: 'x-fa fa-check',
					viewType: 'login',
					leaf: true
				}, {
					text: 'Register',
					iconCls: 'x-fa fa-pencil-square-o',
					viewType: 'register',
					leaf: true
				}, {
					text: 'Password Reset',
					iconCls: 'x-fa fa-lightbulb-o',
					viewType: 'passwordreset',
					leaf: true
				}
			]
		}, {
			text: 'Widgets',
			iconCls: 'x-fa fa-flask',
			leaf: true
		}, {
			text: 'Forms',
			iconCls: 'x-fa fa-edit',
			leaf: true
		}, {
			text: 'Charts',
			iconCls: 'x-fa fa-pie-chart',
			leaf: true
		}]
	}
});