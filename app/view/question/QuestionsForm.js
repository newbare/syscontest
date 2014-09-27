Ext.define('SysContest.view.question.QuestionsForm',{
		extend : 'Ext.window.Window',
		alias  : 'widget.questionsform',

		requires: [
        'Ext.form.field.Number'
  ],

		heigth : 100,
		width  : 500,
		modal  : true,
		layout : 'fit',
	 iconCls : 'icon-question',
	 title : 'Editar/Criar Questões',
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
							name : 'idQuestion'
						},
						{
								xtype: 'numberfield',
        fieldLabel: 'CÓDIGO DA PROVA',
        labelAlign: 'top',
        name: 'idExam',
        value: 1,
        minValue: 1,
        maxValue: 20000
       },
						{
							xtype : 'textareafield',
							name : 'statement',
							height: 100,
							labelAlign: 'top',
							fieldLabel : 'Enunciado da Questão'
						},
						{
        xtype: 'textfield',
        fieldLabel: 'Opção (A)',
        allowBlank: false,
        name : 'optionA',
        labelAlign: 'top',
    	 },
						{
        xtype: 'textfield',
        fieldLabel: 'Opção (B)',
        allowBlank: false,
        name : 'optionB',
        labelAlign: 'top',
    	 },
    	 {
        xtype: 'textfield',
        fieldLabel: 'Opção (C)',
        allowBlank: false,
        name : 'optionC',
        labelAlign: 'top',
    	 },
    	 {
        xtype: 'textfield',
        fieldLabel: 'Opção (D)',
        allowBlank: false,
        name : 'optionD',
        labelAlign: 'top',
    	 },
    	 {
        xtype: 'textfield',
        fieldLabel: 'Opção (E)',
        name : 'optionE',
        labelAlign: 'top',
    	 },
    	  {
         xtype: 'combobox',
         fieldLabel: 'Resposta',
         labelAlign: 'top',
         name: 'answer',
         store: ['A', 'B', 'C', 'D', 'E'],
         typeAhead: true,
         queryMode: 'local',
         emptyText: 'Selecione a resposta...'
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