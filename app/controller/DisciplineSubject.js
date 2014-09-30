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
         'dxswindow' : {
             render : this.onGridRender,
          },
          'sidepanel button#openDXS' : {
            click : this.onOpenClick,
          }
        });
    },

    onGridRender : function (window, eOpts){
      var grid = window.down('grid');
      grid.getStore().load();
    },

    onOpenClick : function (btn , e, eOpts){
      var win = Ext.create('SysContest.view.dxs.DXSWindow');
      return win;
    }   

});
