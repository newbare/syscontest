Ext.define ('SysContest.view.institution.DisciplinesGrid',{
	 extend : 'Ext.grid.Panel',
	 alias : 'widget.disciplinesgrid',
	 store : 'SysContest.store.Disciplines',
	 title : 'Disciplinas Cadastradas',
	 iconCls : 'icon-company',

	 columns : [
	 		{
	 			text: 'ID',
	 			width : 35,
	 			dataIndex : 'idInstitution'
	 		},
	 		{
	 			text  : 'Nome da Instituição',
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
	 				itemId : 'addInstitution',
	 				iconCls : 'icon-plus'
	 			},
	 			{
	 				xtype  : 'button',
	 				text   : 'Excluir',
	 				itemId : 'deleteInstitution',
	 				iconCls : 'icon-trash'
	 			}

	 		]
	 	},{
	 		xtype : 'pagingtoolbar',
	 		store : 'SysContest.store.Institutions',
	 		dock : 'bottom',
	 		displayInfo : 'true',
	 		displayMsg: 'Mostrando Instituições {0} - {1} de {2}',
	 		emptyMsg : 'Nenhuma Instituição foi Cadastrada.'
	 	}
	 ]
});