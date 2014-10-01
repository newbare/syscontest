Ext.define('SysContest.view.simulated.FilterForm', {
	extend : 'Ext.form.Panel',
	//title  : 'Filtrar por',
	alias  : 'widget.filterform',
 layout : 'anchor',
// height : 300,
 bodyStyle: 'padding:5px',
	items: [
		{
			  xtype : 'combobox',
			  fieldLabel: 'Disciplina',
			  labelAlign: 'top',
			  itemId : 'comboDiscipline',
			  width : 220,
			  displayField: 'name',
			  store : 'SysContest.store.Disciplines'
		},
		{
			  xtype : 'combobox',
			  fieldLabel: 'Assunto',
			  labelAlign: 'top',
			  displayField: 'name',
			  itemId : 'comboSubject',
			  width : 220,
			  store : 'SysContest.store.Subjects'
		},
		{
			  xtype : 'combobox',
			  fieldLabel: 'Cargo',
			  labelAlign: 'top',
			  displayField: 'role',
			  width : 220,
			  itemId : 'comboRole',
			  store : 'SysContest.store.Exames'
		}

	]

});