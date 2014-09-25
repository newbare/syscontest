Ext.define('SysContest.store.Subjects',{
	 extend : 'Ext.data.Store',

	 model : 'SysContest.model.Subject',

	 pageSize : 20,

	 proxy : {
	 		type : 'ajax',
	 		api : {
	 			 create  : 'php/discipline/createSubject.php',
	 			 read    : 'php/discipline/listSubjects.php',
	 			 update  : 'php/discipline/updateSubject.php',
	 			 destroy : 'php/discipline/deleteSubject.php'
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