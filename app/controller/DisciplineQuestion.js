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
            click : this.onOpenClick,
          },
          'dxqwindow button#cancelDXQ' : {
            click : this.onCloseWin
          }, 
        });
    },

    onGridRender : function (window, eOpts){
      var grid = window.down('grid');
      grid.getStore().load();
    },

    onOpenClick : function (btn , e, eOpts){
      var win = Ext.create('SysContest.view.dxq.DXQWindow');
      return win;
    },

    onCloseWin : function (btn, e, eOpts){
      var win = btn.up('window');
      win.close();
    },


});
