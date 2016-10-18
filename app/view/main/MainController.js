/**
 * This class is the controller for the main view for the application. It is specified as
 * the "controller" of the Main view class.
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('App.view.main.MainController', {
	extend: 'Ext.app.ViewController',

	alias: 'controller.main',

	onToggleNavigationSize: function() {
		var me = this,
			refs = me.getReferences(),
			navigationList = refs.navigationTreeList,
			navigationWrap = refs.navigationWrap,
			wrapContainer = refs.mainContainerWrap,
			collapsing = !navigationList.getMicro(),
			new_width = collapsing ? 64 : 250;

		if (!collapsing) {
			// If we are leaving micro mode (expanding), we do that first so that the
			// text of the items in the navlist will be revealed by the animation.
			navigationList.setMicro(false);

			navigationWrap.setOverflowXY(false, true);

		} else {
			navigationWrap.scrollTo(0, 0);
			navigationWrap.setOverflowXY(false, false);
		}

		// Start this layout first since it does not require a layout
		refs.senchaLogo.animate({
			dynamic: true,
			to: {
				width: new_width
			}
		});

		navigationWrap.width = new_width;

		wrapContainer.updateLayout({
			isRoot: true
		});

		// navigationList.el.addCls('nav-tree-animating');

		if (collapsing) {
			navigationWrap.on({
				afterlayoutanimation: function() {
					// navigationList.el.removeCls('nav-tree-animating');
					navigationList.setMicro(true);
				},
				single: true
			});

		}

	}
});