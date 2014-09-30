Ext.define('SysContest.view.dxs.DXSForm',{
		extend : 'Ext.window.Window',
		alias  : 'widget.dxsform',

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
							name : 'idDisciplina',
							labelAlign: 'top',
							fieldLabel : 'Código da Disciplina',
							value: 1,
       minValue: 1,
       maxValue: 20000
						},
						{
							xtype : 'numberfield',
							name : 'idSubject',
							labelAlign: 'top',
							fieldLabel : 'Código do Assunto',
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
					 itemId : 'cancelDXS',
					 iconCls : 'icon-del'
			  	},
				 {
					xtype : 'button',
					text : 'Salvar',
					itemId : 'saveDXS',
					iconCls : 'icon-save'
				}]
		}]
});