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
			wrapContainer = refs.mainContainerWrap,
			collapsing = !navigationList.getMicro(),
			new_width = collapsing ? 64 : 250;

		if (Ext.isIE9m || !Ext.os.is.Desktop) {
			Ext.suspendLayouts();

			refs.senchaLogo.setWidth(new_width);

			navigationList.setWidth(new_width);
			navigationList.setMicro(collapsing);

			Ext.resumeLayouts(); // do not flush the layout here...

			// No animation for IE9 or lower...
			wrapContainer.layout.animatePolicy = wrapContainer.layout.animate = null;
			wrapContainer.updateLayout(); // ... since this will flush them
		} else {
			if (!collapsing) {
				// If we are leaving micro mode (expanding), we do that first so that the
				// text of the items in the navlist will be revealed by the animation.
				navigationList.setMicro(false);
			}

			// Start this layout first since it does not require a layout
			refs.senchaLogo.animate({
				dynamic: true,
				to: {
					width: new_width
				}
			});

			// Directly adjust the width config and then run the main wrap container layout
			// as the root layout (it and its chidren). This will cause the adjusted size to
			// be flushed to the element and animate to that new size.
			navigationList.width = new_width;
			wrapContainer.updateLayout({
				isRoot: true
			});
			navigationList.el.addCls('nav-tree-animating');

			// We need to switch to micro mode on the navlist *after* the animation (this
			// allows the "sweep" to leave the item text in place until it is no longer
			// visible.
			if (collapsing) {
				navigationList.on({
					afterlayoutanimation: function() {
						navigationList.setMicro(true);
						navigationList.el.removeCls('nav-tree-animating');
					},
					single: true
				});
			}
		}
	}
});