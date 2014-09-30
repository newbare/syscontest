Ext.define('SysContest.view.dxs.DXSWindow',{
		extend : 'Ext.window.Window',
		alias  : 'widget.dxswindow',
		heigth : 100,
		width  : 600,
		modal  : true,
		layout : 'fit',
	 iconCls : 'icon-db',
	 title : 'Classificar Assuntos por Disciplina',
		autoShow : true,

		items : [
				{
					xtype : 'panel',
					defaults : {
						anchor : '100%'
					},
					items : [
						{
								 xtype : 'dxsgrid',
						}
					]
				}
		]
});