Ext.define ('SysContest.view.subject.SubjectsGrid', {
	 extend : 'Ext.grid.Panel',
	 alias : 'widget.subjectsgrid',
	 store : 'SysContest.store.Subjects',
	 title : 'Assuntos Cadastrados',
	 iconCls : 'icon-subject',

	 columns : [
	 		{
	 			text: 'ID',
	 			width : 100,
	 			dataIndex : 'idSubject'
	 		},
	 		{
	 			text  : 'Nome do Assunto',
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
	 				itemId : 'addSubject',
	 				iconCls : 'icon-plus'
	 			},
	 			{
	 				xtype  : 'button',
	 				text   : 'Excluir',
	 				itemId : 'deleteSubject',
	 				iconCls : 'icon-trash'
	 			}

	 		]
	 	},{
	 		xtype : 'pagingtoolbar',
	 		store : 'SysContest.store.Subjects',
	 		dock : 'bottom',
	 		displayInfo : 'true',
	 		displayMsg: 'Mostrando Assuntos {0} - {1} de {2}',
	 		emptyMsg : 'Nenhum Assunto foi Cadastrado.'
	 	}
	 ]
});