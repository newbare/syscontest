Ext.define ('SysContest.view.discipline.DisciplinesGrid',{
	 extend : 'Ext.grid.Panel',
	 alias : 'widget.disciplinesgrid',
	 store : 'SysContest.store.Disciplines',
	 title : 'Disciplinas Cadastradas',
	 iconCls : 'icon-discipline',

	 columns : [
	 		{
	 			text: 'ID',
	 			width : 35,
	 			dataIndex : 'idDiscipline'
	 		},
	 		{
	 			text  : 'Nome da Disciplina',
	 			width : 300,
	 			flex : 1,
	 			dataIndex : 'name'
	 		}
	 ],

	 dockedItems : [
	 	{
	 		xtype  : 'toolbar',
	 		dock : 'top',
	 		items : [
	 			{
	 				xtype : 'button',
	 				text  : 'Adicionar',
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
	 		emptyMsg : 'Nenhuma Questão relacionada com Disciplina.'
	 	}
	 ]
});