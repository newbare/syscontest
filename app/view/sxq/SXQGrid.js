Ext.define ('SysContest.view.sxq.SXQGrid',{
	 extend : 'Ext.grid.Panel',
	 alias : 'widget.sxqgrid',
	 store : 'SysContest.store.SubjectsQuestions',
	 title : 'Assunto X Questão',
	 iconCls : 'icon-dxq',

	 columns : [
	 		{
	 			text: 'Código do Assunto',
	 			width : 300,
	 			dataIndex : 'idSubject'
	 		},
	 		{
	 			text  : 'Código da Questão',
	 			width : 300,
	 			dataIndex : 'idQuestion'
	 		}
	 ],

	 dockedItems : [
	 	{
	 		xtype  : 'toolbar',
	 		dock : 'top',
	 		items : [
	 			{
	 				xtype : 'button',
	 				text  : 'Criar',
	 				itemId : 'addSXQ',
	 				iconCls : 'icon-plus'
	 			},
	 			{
	 				xtype  : 'button',
	 				text   : 'Excluir',
	 				itemId : 'deleteSXQ',
	 				iconCls : 'icon-trash'
	 			}

	 		]
	 	},{
	 		xtype : 'pagingtoolbar',
	 		store : 'SysContest.store.SubjectsQuestions',
	 		dock : 'bottom',
	 		displayInfo : 'true',
	 		displayMsg: 'Mostrando Relações {0} - {1} de {2}',
	 		emptyMsg : 'Nenhuma Relação encontrada.'
	 	}
	 ]
});