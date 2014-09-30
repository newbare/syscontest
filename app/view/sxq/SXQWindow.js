Ext.define('SysContest.view.sxq.SXQWindow',{
		extend : 'Ext.window.Window',
		alias  : 'widget.sxqwindow',
		heigth : 100,
		width  : 600,
		modal  : true,
		layout : 'fit',
	 iconCls : 'icon-db',
	 title : 'Classificar por Assunto',
		autoShow : true,

		items : [
				{
					xtype : 'panel',
					defaults : {
						anchor : '100%'
					},
					items : [
						{
								 xtype : 'sxqgrid',
						}
					]
				}
		]
});