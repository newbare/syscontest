Ext.define('SysContest.model.Discipline', {
	extend : 'Ext.data.Model',

	fields : [
			{name : 'idDiscipline', type : 'int'},
			{name : 'name' , type : 'string'}
	],

 hasMany : { 
   model :'SysContest.model.Subject', 
   name: 'subjects', 
   associationKey: 'subjects',
   foreignKey : 'idDiscipline'
 }

});