Ext.define('SysContest.controller.DisciplineQuestion', {
    extend: 'Ext.app.Controller',

    models : [
       'SysContest.model.DisciplineQuestion'
    ],

    stores : [
       'SysContest.store.DisciplinesQuestions'
    ],

    views : [
       'SysContest.view.dxq.DXQGrid',
       'SysContest.view.dxq.DXQWindow',
       'SysContest.view.simulated.SidePanel'
    ],

    init : function (application) {
        this.control({
          'dxqwindow' : {
             render : this.onGridRender,
             //itemdblclick : this.onEditClick
          },
          'sidepanel button#createDXQ' : {
            click : this.onAddClick,
          }
        });
    },

    onGridRender : function (window, eOpts){
      var grid = window.down('grid');
      grid.getStore().load();
    },

    onAddClick : function (btn , e, eOpts){
      var win = Ext.create('SysContest.view.dxq.DXQWindow');
      return win;
    }

});
