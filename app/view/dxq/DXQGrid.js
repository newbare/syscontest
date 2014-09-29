Ext.define ('SysContest.view.dxq.DXQGrid',{
	 extend : 'Ext.grid.Panel',
	 alias : 'widget.dxqgrid',
	 store : 'SysContest.store.DisciplinesQuestions',
	 title : 'Disciplinas X Questões',
	 iconCls : 'icon-dxq',

	 columns : [
	 		{
	 			text: 'Código da Disciplina',
	 			width : 300,
	 			dataIndex : 'idDiscipline'
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
	 				itemId : 'addDXQ',
	 				iconCls : 'icon-plus'
	 			},
	 			{
	 				xtype  : 'button',
	 				text   : 'Excluir',
	 				itemId : 'deleteDXQ',
	 				iconCls : 'icon-trash'
	 			}

	 		]
	 	},{
	 		xtype : 'pagingtoolbar',
	 		store : 'SysContest.store.DisciplinesQuestions',
	 		dock : 'bottom',
	 		displayInfo : 'true',
	 		displayMsg: 'Mostrando Relações {0} - {1} de {2}',
	 		emptyMsg : 'Nenhuma Relação encontrada.'
	 	}
	 ]
});