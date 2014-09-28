Ext.define('SysContest.store.Institutions',{
	 extend : 'Ext.data.Store',

	 model : 'SysContest.model.Institution',

	 pageSize : 25,

	 proxy : {
	 		type : 'ajax',
	 		api : {
	 			 create  : 'php/institution/createInstitution.php',
	 			 read    : 'php/institution/listInstitutions.php',
	 			 update  : 'php/institution/updateInstitution.php',
	 			 destroy : 'php/institution/deleteInstitution.php'
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
	 },
	 //autoLoad : true,
});