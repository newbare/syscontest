Ext.define('SysContest.controller.DisciplineSubject', {
    extend: 'Ext.app.Controller',

    models : [
       'SysContest.model.DisciplineSubject'
    ],

    stores : [
       'SysContest.store.DisciplinesSubjects'
    ],

    views : [
      'SysContest.view.dxs.DXSGrid',
      'SysContest.view.dxs.DXSWindow',
      'SysContest.view.simulated.SidePanel',
      'SysContest.view.dxs.DXSForm'
    ],

    init : function (application) {
        this.control({
         
        });
    }

   

});
