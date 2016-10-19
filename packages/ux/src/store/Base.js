Ext.define('Ext.ux.store.Base', {
	extend: 'Ext.data.Store',
	autoLoad: false,
	autoSync: true,
	autoDestroy: true,
	remoteSort: true,
	pageSize: 20,

	constructor: function(config) {
		config = config || {};

		this.buildProxy(config);

		this.callParent([config]);
	},

	buildProxy: function(config) {
		var me = this;

		config.proxy = Ext.create('Ext.data.proxy.Rest', {
			reader: {
				method: 'get',
				type: 'json',
				rootProperty: 'list',
				totalProperty: "total"
			},
			writer: {
				type: 'json',
				writeAllFields: false
			},
			api: me.proxyAPI,
			noCache: true,
			listeners: {
				exception: function(that, response, operation, eOpts) {
					Ext.util.Common.errorHandler(response, function() {
						me.fireEvent("aftererror", operation, response);
					});
				}
			}
		});
	},

	setProxyParams: function(operation) {
		var me = this,
			params;

		if (operation.allowWrite()) {
			params = request.proxy.extraJsonData;
		} else {
			params = me.proxy.extraFilters ? me.getReadParams(operation) : me.proxy.extraParams;
		}

		operation.setParams(params);
	},

	getReadParams: function(operation) {
		var me = this;
		var readParams = {
			filters: me.proxy.extraFilters || [],
			sorts: me.getSortParams(operation.sorters),
			paging: {
				page: operation.getPage(),
				size: operation.getLimit()
			}
		};

		return {
			args: Ext.encode(readParams)
		};
	},

	getSortParams: function(sorters) {
		var me = this;
		var sorts = [];
		var items = me.getSorters().items;

		Ext.each(items, function(item) {
			sorts.push({
				field: item.property,
				asc: item.direction === 'ASC' ? true : false
			});
		});

		return sorts;
	},

	listeners: {
		write: function(store, operation) {
			var me = this;

			me.fireEvent("aftersuccess", operation);
		},

		beforerequest: function(store, operation, eOpts) {
			var me = this;

			me.setProxyParams(operation);
		}
	}
});