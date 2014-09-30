Ext.define('SysContest.store.SubjectsQuestions',{
	 extend : 'Ext.data.Store',

	 model : 'SysContest.model.SubjectQuestion',

	 pageSize : 10,

	 proxy : {
	 		type : 'ajax',
	 		api : {
	 			 create  : 'php/sxq/createSXQ.php',
	 			 read    : 'php/sxq/listSXQs.php',
	 			 update  : 'php/sxq/updateSXQ.php',
	 			 destroy : 'php/sxq/deleteSXQ.php'
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