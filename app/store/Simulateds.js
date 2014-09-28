Ext.define('SysContest.store.Simulateds',{
		extend: 'Ext.data.Store',
		model: 'SysContest.model.Question',
		
		pageSize : 10,

		proxy: {
			type: 'ajax',

			url: 'php/simulated/simulated.php',
			
			reader: {
				type: 'json',
				root: 'data'
			}

		},
		autoLoad: true
});