Ext.define('SysContest.view.simulated.SimulatedPanel',{
		extend : 'Ext.panel.Panel',
		alias  : 'widget.simulatedpanel',
		heigth : '100%',
		modal  : true,
		layout : 'fit',
	 iconCls : 'icon-simulated',
	 title : 'SIMULADO COM QUESTÕES DE PROVAS DE CONCURSO PÚBLICO',
		autoShow : true,
		html : '',
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
					 iconCls : 'icon-del'
			  	},
				 {
					xtype : 'button',
					text : 'Corrigir',
					itemId : 'checkSimulated',
					iconCls : 'icon-save'
						}]
		 }]	
	
});