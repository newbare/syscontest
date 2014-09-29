Ext.define('SysContest.store.DisciplinesQuestions',{
	 extend : 'Ext.data.Store',

	 model : 'SysContest.model.DisciplineQuestion',

	 pageSize : 10,

	 proxy : {
	 		type : 'ajax',
	 		api : {
	 			 create  : 'php/dxq/createDXQ.php',
	 			 read    : 'php/dxq/listDXQs.php',
	 			 update  : 'php/dxq/updateDXQ.php',
	 			 destroy : 'php/dxq/deleteDXQ.php'
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