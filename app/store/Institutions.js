Ext.define('SysContest.store.Institutions',{
	 extend : 'Ext.data.Store',

	 model : 'SysContest.model.Institution',

	 pageSize : 20,

	 proxy : {
	 		type : 'ajax',
	 		api : {
	 			 create  : 'php/createInstitution.php',
	 			 read    : 'php/listInstitutions.php',
	 			 update  : 'php/updateInstitution.php',
	 			 destroy : 'php/deleteInstitution.php'
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
	 autoLoad : true,
});