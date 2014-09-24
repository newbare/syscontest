Ext.define('SysContest.view.discipline.DisciplinesForm',{
		extend : 'Ext.window.Window',
		alias  : 'widget.disciplinesform',

		heigth : 100,
		width  : 500,
		modal  : true,
		layout : 'fit',
	 iconCls : 'icon-discipline',
	 title : 'Editar/Criar Disciplina',
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
							name : 'idDiscipline'
						},
						{
							xtype : 'textfield',
							name : 'name',
							fieldLabel : 'Disciplina'
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
					 itemId : 'cancelDiscipline',
					 iconCls : 'icon-del'
			  	},
				 {
					xtype : 'button',
					text : 'Salvar',
					itemId : 'saveDiscipline',
					iconCls : 'icon-save'
				}]
		}]
});