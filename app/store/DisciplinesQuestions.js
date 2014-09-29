Ext.define('SysContest.store.DisciplinesQuestions',{
	 extend : 'Ext.data.Store',

	 model : 'SysContest.model.DisciplineQuestion',

	 pageSize : 25,

	 proxy : {
	 		type : 'ajax',
	 		api : {
	 			 create  : 'php/dxq/createDQ.php',
	 			 read    : 'php/dxq/listDQs.php',
	 			 update  : 'php/dxq/updateDQ.php',
	 			 destroy : 'php/dxq/deleteDQ.php'
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