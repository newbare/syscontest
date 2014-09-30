Ext.define ('SysContest.view.dxs.DXSGrid',{
	 extend : 'Ext.grid.Panel',
	 alias : 'widget.dxsgrid',
	 store : 'SysContest.store.DisciplinesSubjects',
	 title : 'Disciplina X Assunto',
	 iconCls : 'icon-dxq',

	 columns : [
	 		{
	 			text: 'Código da Disciplina',
	 			width : 300,
	 			dataIndex : 'idDiscipline'
	 		},
	 		{
	 			text  : 'Código do Assunto',
	 			width : 300,
	 			dataIndex : 'idSubject'
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
	 				itemId : 'addDXS',
	 				iconCls : 'icon-plus'
	 			},
	 			{
	 				xtype  : 'button',
	 				text   : 'Excluir',
	 				itemId : 'deleteDXS',
	 				iconCls : 'icon-trash'
	 			}

	 		]
	 	},{
	 		xtype : 'pagingtoolbar',
	 		store : 'SysContest.store.DisciplinesSubjects',
	 		dock : 'bottom',
	 		displayInfo : 'true',
	 		displayMsg: 'Mostrando Relações {0} - {1} de {2}',
	 		emptyMsg : 'Nenhuma Relação encontrada.'
	 	}
	 ]
});