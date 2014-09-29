Ext.define('SysContest.view.simulated.SidePanel',{
		extend : 'Ext.panel.Panel',
		alias  : 'widget.sidepanel',
		height: 400,
		//width : 150,
  defaults: {
   // applied to each contained panel
  // bodyStyle: 'padding:5px'
  },
  layout: {
   // layout-specific configs go here
   type: 'accordion',
   titleCollapse: false,
   animate: true,
   activeOnTop: true
  },
  //bodyStyle: 'padding:10px',
  items : [
					{
        title: 'Simulados',
        html : 'Para iniciar um novo simulado clique no botão <strong>Novo</strong>.',
        bodyStyle: 'padding:2px',
        dockedItems : [
   			   {
									 xtype : 'toolbar',
									 dock : 'bottom',
									 layout : {
										type : 'hbox',
										pack : 'end'
									 },
									 items : [
									 	  {
													 xtype : 'button',
													 text : 'Novo',
													 itemId : 'createSimulated',
													 iconCls : 'icon-plus'
										  }
							   ]
							  }
							 ]  	
    	},
			{
        title: 'Classificadores',
        html: '<p>Criar relações entre os dados na base de dados.</p>',
        bodyStyle: 'padding:2px',
        dockedItems : [
        {
           xtype : 'toolbar',
           dock : 'bottom',
           layout : {
            type : 'hbox',
            pack : 'end'
           },
           items : [
              {
                   xtype : 'button',
                   text : 'Disciplina',
                   itemId : 'createDXQ',
                   iconCls : 'icon-relation'
              }
         ]
        }
       ]
    	},
    	{
        title: 'Filtros',
        html: '<p>Aplicar filtros os seus simulados.</p>'
    	},{
        title: 'Base de Dados',
        html: '<p>Gerenciar base de dados aqui.</p>'
    	}
  ]
});