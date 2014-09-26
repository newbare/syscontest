Ext.define ('SysContest.view.exam.ExamesGrid',{
	 extend : 'Ext.grid.Panel',
	 alias : 'widget.examesgrid',
	 store : 'SysContest.store.Exames',
	 title : 'Provas Cadastradas',
	 iconCls : 'icon-exam',

	 columns : [
	 		{
	 			text: 'ID Prova',
	 			width : 50,
	 			dataIndex : 'idExam'
	 		},
	 		{
	 			text  : 'ID Instituição',
	 			width : 50,
	 			dataIndex : 'idInstitution'
	 		},
	 		{
	 			text : 'Ano',
	 			width : 30,
	 			dataIndex : 'year'
	 		},
	 		{
	 				text : 'Cargo',
	 				width : 150,
	 				flex : 1,
	 				dataIndex : 'role' 
	 		},
	 		{
	 			 text : 'Nível',
	 			 width : 100,
	 			 dataIndex : 'level'
	 		},
	 		{
	 			 text : 'Orgão',
	 			 width : 200,
	 			 dataIndex : 'organ'
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
	 				itemId : 'addExam',
	 				iconCls : 'icon-plus'
	 			},
	 			{
	 				xtype  : 'button',
	 				text   : 'Excluir',
	 				itemId : 'deleteExam',
	 				iconCls : 'icon-trash'
	 			}

	 		]
	 	},{
	 		xtype : 'pagingtoolbar',
	 		store : 'SysContest.store.Exames',
	 		dock : 'bottom',
	 		displayInfo : 'true',
	 		displayMsg: 'Mostrando Provas {0} - {1} de {2}',
	 		emptyMsg : 'Nenhuma Prova foi Cadastrada.'
	 	}
	 ]
});