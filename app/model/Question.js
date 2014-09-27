Ext.define('SysContest.model.Question', {
	extend : 'Ext.data.Model',

	fields : [
			{name : 'idQuestion', type : 'int'},
			{name : 'idExam', type : 'int'},
			{name : 'statement' , type : 'string'},
			{name : 'answer' , type : 'string'},
			{name : 'optionA', type : 'string'},
			{name : 'optionB', type : 'string'},
			{name : 'optionC', type : 'string'},
			{name : 'optionD', type : 'string'},
			{name : 'optionE', type : 'string'}
	]
});