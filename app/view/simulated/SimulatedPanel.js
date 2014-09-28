Ext.define('SysContest.view.simulated.SimulatedPanel',{
		extend : 'Ext.panel.Panel',
		alias  : 'widget.simulatedpanel',
		heigth : '100%',
		modal  : true,
		layout : 'fit',
	 iconCls : 'icon-simulated',
	 title : 'Simulado',
		autoShow : true,

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
					 itemId : 'cancelSimulado',
					 iconCls : 'icon-del'
			  	},
				 {
					xtype : 'button',
					text : 'Corrigir',
					itemId : 'checkSimulado',
					iconCls : 'icon-save'
						}]
		 }]	
	
});