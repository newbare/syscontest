Ext.define('SysContest.store.Exames',{
	 extend : 'Ext.data.Store',

	 model : 'SysContest.model.Exam',

	 pageSize : 20,

	 proxy : {
	 		type : 'ajax',
	 		api : {
	 			 create  : 'php/exam/createExam.php',
	 			 read    : 'php/exam/listExames.php',
	 			 update  : 'php/exam/updateExam.php',
	 			 destroy : 'php/exam/deleteExam.php'
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