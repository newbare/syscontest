Ext.define('SysContest.store.DisciplinesSubjects',{
	 extend : 'Ext.data.Store',

	 model : 'SysContest.model.DisciplineSubject',

	 pageSize : 10,

	 proxy : {
	 		type : 'ajax',
	 		api : {
	 			 create  : 'php/dxs/createDXS.php',
	 			 read    : 'php/dxs/listDXSs.php',
	 			 update  : 'php/dxs/updateDXS.php',
	 			 destroy : 'php/dxs/deleteDXS.php'
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