Ext.define('SysContest.controller.Exam', {
    extend: 'Ext.app.Controller',

    models : [
       'SysContest.model.Exam'
    ],

    stores : [
       'SysContest.store.Exames'
    ],

    views : [
       'SysContest.view.exam.ExamesGrid'
       //'SysContest.view.discipline.DisciplinesForm'
    ]

});