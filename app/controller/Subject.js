Ext.define('SysContest.controller.Institution', {
    extend: 'Ext.app.Controller',

    models : [
       'SysContest.model.Subject'
    ],

    stores : [
       'SysContest.store.Subjects'
    ],

    views : [
       'SysContest.view.Subject.SubjectsGrid'
      // 'SysContest.view.institution.InstitutionsForm'
    ]

});