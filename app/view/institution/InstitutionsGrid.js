Ext.define ('SysContest.view.institution.InstitutionsGrid',{
	 extend : 'Ext.grid.Panel',
	 alias : 'widget.institutionsgrid',
	 store : 'SysContest.store.Institutions',

	 title : 'Instituições Cadastradas',

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
	 ]
});