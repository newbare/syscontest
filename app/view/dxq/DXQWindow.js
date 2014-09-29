Ext.define('SysContest.view.dxq.DXQWindow',{
		extend : 'Ext.window.Window',
		alias  : 'widget.dxqwindow',
		heigth : 100,
		width  : 400,
		modal  : true,
		layout : 'fit',
	 iconCls : 'icon-dqx',
	 title : 'Disciplina X Questão',
		autoShow : true,

		items : [
				{
					xtype : 'panel',
					defaults : {
						anchor : '100%'
					},
					items : [
						{
							// xtype : 'simulatedpanel',
						}
					]
				}
		],

		dockedItems : [
			{
				xtype : 'toolbar',
				dock : 'bottom',
				layout : {
					type : 'hbox',
					pack : 'end'
				},
				
			  items: [
			   {
					 xtype : 'button',
					 text : 'Cancelar',
					 itemId : 'cancelDXQ',
					 iconCls : 'icon-remove'
			  	},
				 { 
					xtype : 'button',
					text : 'Salvar',
					itemId : 'saveDXQ',
					iconCls : 'icon-save'
				}]
		}]
});