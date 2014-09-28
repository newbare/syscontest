Ext.define('SysContest.controller.Simulated', {
    extend: 'Ext.app.Controller',

    models : [
       'SysContest.model.Question'
    ],

    stores : [
      // 'SysContest.store.Disciplines'
    ],

    views : [
       'SysContest.view.simulated.SimulatedPanel'
    ]

});