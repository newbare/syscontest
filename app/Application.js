Ext.define('SysContest.Application', {
    name: 'SysContest',

    extend: 'Ext.app.Application',

    requires : [
            'Ext.toolbar.Paging',
            'Ext.form.Panel',
            'Ext.form.field.Hidden',
            'Ext.form.field.ComboBox',
            'Ext.layout.container.Accordion'
    ],

    views: [
        // TODO: add views here
        
    ],

    controllers: [
        // TODO: add controllers here
        'Institution',
        'Discipline',
        'Subject',
        'Exam',
        'Question',
        'Simulated'
    ],

    stores: [
        // TODO: add stores here
    ]
});
