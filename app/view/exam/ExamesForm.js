Ext.define('SysContest.view.exam.ExamesForm',{
		extend : 'Ext.window.Window',
		alias  : 'widget.examesform',

		heigth : 100,
		width  : 500,
		modal  : true,
		layout : 'fit',
	 iconCls : 'icon-exam',
	 title : 'Editar/Criar Prova',
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
							name : 'idExam'
						},
						{
								xtype: 'numberfield',
        fieldLabel: 'CÓDIGO DA INSTITUIÇÃO',
        labelAlign: 'top',
        name: 'idInstitution',
        value: 1,
        minValue: 1,
        maxValue: 20000
       },
       {
								xtype: 'numberfield',
        fieldLabel: 'Ano',
        labelAlign: 'top',
        name: 'year',
        value: 1,
        minValue: 2000,
        maxValue: 5000
       },
						{
							xtype: 'textfield',
							name: 'role',
							labelAlign: 'top',
							fieldLabel : 'Cargo'
						},
						{
       xtype: 'combobox',
         fieldLabel: 'Nível',
         labelAlign: 'top',
         name: 'level',
         store: ['FUNDAMENTAL', 'MÉDIO', 'SUPERIOR'],
         typeAhead: true,
         queryMode: 'local',
         emptyText: 'Selecione o nível...'
      },
      	{
							xtype: 'textfield',
							name: 'organ',
							labelAlign: 'top',
							fieldLabel : 'Orgão'
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
					 itemId : 'cancelExam',
					 iconCls : 'icon-del'
			  	},
				 {
					xtype : 'button',
					text : 'Salvar',
					itemId : 'saveExam',
					iconCls : 'icon-save'
				}]
		}]
});