Ext.define('SysContest.model.Subject',{
	 extend : 'Ext.data.Model',

	 fields : [
	 		{name : 'idSubject', type : 'int'},
	 		{name : 'name', type : 'string'},
	 		{name : 'idDiscipline' , type : 'int'}
	 ]
});