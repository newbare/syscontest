Ext.define('SysContest.model.Exam', {
	extend : 'Ext.data.Model',

	fields : [
			{name : 'idExam', type : 'int'},
			{name : 'idInstitution' , type : 'int'},
			{name : 'year', type : 'int'},
			{name : 'role', type : 'string'},
			{name : 'level', type : 'string'},
			{name : 'organ', type : 'string'}
	]

});