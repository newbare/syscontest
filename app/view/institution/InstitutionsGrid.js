Ext.define ('SysContest.view.institution.InstitutionsGrid',{
	 extend : 'Ext.grid.Panel',
	 alias : 'widget.institutionsgrid',
	 store : 'SysContest.store.Institutions',
	 title : 'Instituições Cadastradas',
	 iconCls : 'icon-grid',

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
	 				iconCls : 'icon-add'
	 			},
	 			{
	 				xtype  : 'button',
	 				text   : 'Excluir',
	 				itemId : 'deleteInstitution',
	 				iconCls : 'icon-delete'
	 			}

	 		]
	 	},{
	 		xtype : 'pagingtoolbar',
	 		store : 'SysContest.store.Institutions',
	 		dock : 'bottom',
	 		displayInfo : 'true',
	 		emptyMsg : 'Nenhuma Instituição foi Cadastrada.'
	 	}
	 ]
});