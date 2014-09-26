Ext.define ('SysContest.view.question.QuestionsGrid',{
	 extend : 'Ext.grid.Panel',
	 alias : 'widget.questionsgrid',
	 store : 'SysContest.store.Questions',
	 title : 'Questões de Concurso Público Cadastradas',
	 iconCls : 'icon-question',

	 columns : [
	 		{
	 			text: 'ID Questão',
	 			width : 100,
	 			dataIndex : 'idQuestion'
	 		},
	 		{
	 			text  : 'ID Prova',
	 			width : 100,
	 			dataIndex : 'idExam'
	 		},
	 		{
	 			 text : 'Enunciado da Questão',
	 			 width : 300,
	 			 flex : 1,
	 			 dataIndex :'statement'
	 		},
	 		{
	 			 texto : 'Resposta',
	 			 width : 100,
	 			 dataIndex : 'answer'
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
	 				itemId : 'addQuestion',
	 				iconCls : 'icon-plus'
	 			},
	 			{
	 				xtype  : 'button',
	 				text   : 'Excluir',
	 				itemId : 'deleteQuestion',
	 				iconCls : 'icon-trash'
	 			}

	 		]
	 	},{
	 		xtype : 'pagingtoolbar',
	 		store : 'SysContest.store.Questions',
	 		dock : 'bottom',
	 		displayInfo : 'true',
	 		displayMsg: 'Mostrando Questões {0} - {1} de {2}',
	 		emptyMsg : 'Nenhuma Questão foi Cadastrada.'
	 	}
	 ]
});