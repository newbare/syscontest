Ext.define('SysContest.view.sxq.SXQForm',{
		extend : 'Ext.window.Window',
		alias  : 'widget.sxqform',

		heigth : 100,
		width  : 300,
		modal  : true,
		layout : 'fit',
	 iconCls : 'icon-sxq',
	 title : 'Editar/Criar Relação',
		autoShow : true,

		items : [
				{
					xtype : 'form',
					bodyPadding : 10,
					defaults : {
						anchor : '100%'
					},
					items : [
						{
							xtype : 'numberfield',
							name : 'idSubject',
							labelAlign: 'top',
							fieldLabel : 'Código da Assunto',
							value: 1,
       minValue: 1,
       maxValue: 20000
						},
						{
							xtype : 'numberfield',
							name : 'idQuestion',
							labelAlign: 'top',
							fieldLabel : 'Código da Questão',
							value: 1,
       minValue: 1,
       maxValue: 20000
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
					 itemId : 'cancelSXQ',
					 iconCls : 'icon-del'
			  	},
				 {
					xtype : 'button',
					text : 'Salvar',
					itemId : 'saveSXQ',
					iconCls : 'icon-save'
				}]
		}]
});