Ext.define('SysContest.view.simulated.FilterForm', {
	extend : 'Ext.form.Panel',
	//title  : 'Filtrar por',
	alias  : 'widget.filterform',

	items: [
		{
			  xtype : 'combobox',
			  fieldLabel: 'Disciplina',
			  labelAlign: 'top',
			  displayField: 'name',
			  store : 'SysContest.store.Disciplines'
		}

	]

});