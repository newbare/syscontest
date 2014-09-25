Ext.define('SysContest.store.Subjects',{
	 extend : 'Ext.data.Store',

	 model : 'SysContest.model.Subject',

	 pageSize : 20,

	 proxy : {
	 		type : 'ajax',
	 		api : {
	 			 create  : 'php/subject/createSubject.php',
	 			 read    : 'php/subject/listSubjects.php',
	 			 update  : 'php/subject/updateSubject.php',
	 			 destroy : 'php/subject/deleteSubject.php'
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