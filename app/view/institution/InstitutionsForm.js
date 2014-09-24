Ext.define('SysContest.view.institution.InstitutionsForm',{
		extend : 'Ext.window.Window',
		alias  : 'widget.institutionsform',

		heigth : 100,
		width  : 200,
		layout : 'fit',
	//	iconCls : 'icon-company',
		autoShow : true,

		items : [
				{
					xtype : 'form',
					bodyPadding : 10,
					defaults : {
						anchor : '100%'
					},
					items : [
						{
							xtype : 'hiddenfield',
							name : 'idInstitution'
						},
						{
							xtype : 'textfield',
							name : 'name',
							fieldLabel : 'Nome da Instituição'
						}
					]
				}
		]
});