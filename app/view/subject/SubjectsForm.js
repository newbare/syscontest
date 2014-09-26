Ext.define('SysContest.view.subject.SubjectsForm',{
		extend : 'Ext.window.Window',
		alias  : 'widget.subjectsform',

		heigth : 100,
		width  : 500,
		modal  : true,
		layout : 'fit',
	 iconCls : 'icon-subject',
	 title : 'Editar/Criar Assunto',
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
							name : 'idSubject'
						},{
							xtype : 'textfield',
							name : 'name',
							fieldLabel : 'Assunto'
						},{
							xtype : 'combo',
							fieldLabel: 'Disciplina', 
							displayField: 'name',
							valueField: 'idDiscipline',
							store: 'SysContest.store.Disciplines'
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
					 itemId : 'cancelSubject',
					 iconCls : 'icon-del'
			  	},
				 {
					xtype : 'button',
					text : 'Salvar',
					itemId : 'saveSubject',
					iconCls : 'icon-save'
				}]
		}]
});