Ext.define('SysContest.view.Main', {
    extend: 'Ext.container.Container',
    requires:[
        'Ext.tab.Panel',
        'Ext.layout.container.Border',
        'SysContest.view.institution.InstitutionsGrid'
    ],
    
    xtype: 'app-main',

    layout: {
        type: 'border'
    },

    items: [{
        region: 'west',
        xtype: 'panel',
        title: 'SYS CONTEST',
        width: 150
    },{
        region: 'center',
        xtype: 'tabpanel',

        items:[{
            title: 'INSTITUIÇÕES',
            //bodyPadding: 10,
            items : [
                { 
                    xtype: 'institutionsgrid'
                }
            ]
        },
        {
            title : 'DISCIPLINAS'
        },
        {
            title : 'ASSUNTOS'
        },
        {
            title : 'PROVAS'
        },{
            title : 'SIMULADO'
        }]
    }]
});