Ext.define('SysContest.Application', {
    name: 'SysContest',

    extend: 'Ext.app.Application',

    requires : [
            'Ext.toolbar.Paging',
            'Ext.form.Panel',
            'Ext.form.field.Hidden',
            'Ext.form.field.ComboBox'
    ],

    views: [
        // TODO: add views here
        
    ],

    controllers: [
        // TODO: add controllers here
        'Institution',
        'Discipline',
        'Subject'
    ],

    stores: [
        // TODO: add stores here
    ]
});
