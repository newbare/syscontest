Ext.define('SysContest.controller.Subject', {
    extend: 'Ext.app.Controller',

    models : [
       'SysContest.model.Subject'
    ],

    stores : [
       'SysContest.store.Subjects'
    ],

    views : [
       'SysContest.view.subject.SubjectsGrid'
      // 'SysContest.view.institution.InstitutionsForm'
    ]

});