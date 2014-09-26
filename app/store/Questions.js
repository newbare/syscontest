Ext.define('SysContest.store.Questions',{
	 extend : 'Ext.data.Store',

	 model : 'SysContest.model.Question',

	 pageSize : 20,

	 proxy : {
	 		type : 'ajax',
	 		api : {
	 			 create  : 'php/question/createQuestion.php',
	 			 read    : 'php/question/listQuestions.php',
	 			 update  : 'php/question/updateQuestion.php',
	 			 destroy : 'php/question/deleteQuestion.php'
	 		},
	 		reader : {
	 			type : 'json',
	 			root : 'data'
	 		},
	 		writer : {
	 			type : 'json',
	 			root : 'data',
	 			encode : true
	 		}
	 }
	 
});