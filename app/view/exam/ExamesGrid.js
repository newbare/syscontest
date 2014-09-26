Ext.define ('SysContest.view.exam.ExamesGrid',{
	 extend : 'Ext.grid.Panel',
	 alias : 'widget.examesgrid',
	 store : 'SysContest.store.Exames',
	 title : 'Provas Cadastradas',
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
	 		store : 'SysContest.store.Disciplines',
	 		dock : 'bottom',
	 		displayInfo : 'true',
	 		displayMsg: 'Mostrando Disciplinas {0} - {1} de {2}',
	 		emptyMsg : 'Nenhuma Disciplina foi Cadastrada.'
	 	}
	 ]
});