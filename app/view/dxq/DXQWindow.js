Ext.define('SysContest.view.dxq.DXQWindow',{
		extend : 'Ext.window.Window',
		alias  : 'widget.dxqwindow',
		heigth : 100,
		width  : 600,
		modal  : true,
		layout : 'fit',
	 iconCls : 'icon-db',
	 title : 'Classificar por Disciplina',
		autoShow : true,

		items : [
				{
					xtype : 'panel',
					defaults : {
						anchor : '100%'
					},
					items : [
						{
								 xtype : 'dxqgrid',
						}
					]
				}
		]
});