Ext.define ('SysContest.view.dxq.DXQGrid',{
	 extend : 'Ext.grid.Panel',
	 alias : 'widget.dxqgrid',
	 store : 'SysContest.store.DisciplinesQuestions',
	 title : 'Disciplinas X Questões',
	 iconCls : 'icon-dxq',

	 columns : [
	 		{
	 			text: 'ID Disciplina',
	 			width : 150,
	 			dataIndex : 'idDiscipline'
	 		},
	 		{
	 			text  : 'ID Questão',
	 			width : 150,
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
	 				itemId : 'addDiscipline',
	 				iconCls : 'icon-plus'
	 			},
	 			{
	 				xtype  : 'button',
	 				text   : 'Excluir',
	 				itemId : 'deleteDiscipline',
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