Ext.define('SysContest.view.institution.InstitutionsForm',{
		extend : 'Ext.window.Window',
		alias  : 'widget.institutionsform',

		heigth : 100,
		width  : 500,
		modal  : true,
		layout : 'fit',
	  iconCls : 'icon-company',
	  title : 'Editar/Criar Instituição',
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
							fieldLabel : 'Instituição'
						}
					]
				}
		],

		dockedItems : [
			{
				xtype : 'toolbar',
				dock : 'bottom',
				layout : {
					type : 'hbox',
					pack : 'end'
				},
				
			  items: [
			   {
					 xtype : 'button',
					 text : 'Cancelar',
					 itemId : 'cancelInstitution',
					 iconCls : 'icon-del'
			  	},
				 {
					xtype : 'button',
					text : 'Salvar',
					itemId : 'saveInstitution',
					iconCls : 'icon-save'
				}]
		}]
});