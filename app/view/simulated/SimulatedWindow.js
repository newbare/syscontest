Ext.define('SysContest.view.simulated.SimulatedWindow',{
		extend : 'Ext.window.Window',
		alias  : 'widget.simulatedwindow',
		heigth : 100,
		width  : 600,
		modal  : true,
		layout : 'fit',
	 iconCls : 'icon-simulated',
	 title : 'Novo Simulado',
		autoShow : true,

		items : [
				{
					xtype : 'panel',
					defaults : {
						anchor : '100%'
					},
					items : [
						{
							xtype : 'simulatedpanel',
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
					 itemId : 'cancelSimulated',
					 iconCls : 'icon-remove'
			  	},
				 {
					xtype : 'button',
					text : 'Corrigir',
					itemId : 'checkSimulated',
					iconCls : 'icon-next'
				}]
		}]
});