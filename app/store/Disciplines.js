Ext.define('SysContest.store.Disciplines',{
	 extend : 'Ext.data.Store',

	 model : 'SysContest.model.Discipline',

	 pageSize : 20,

	 proxy : {
	 		type : 'ajax',
	 		api : {
	 			 create  : 'php/discipline/createDiscipline.php',
	 			 read    : 'php/discipline/listDisciplines.php',
	 			 update  : 'php/discipline/updateDiscipline.php',
	 			 destroy : 'php/discipline/deleteDiscipline.php'
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