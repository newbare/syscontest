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
       'SysContest.view.dxq.DXQWindow'
    ],

    init : function (application) {
        this.control({
          'dxqwindow' : {
             render : this.onGridRender,
             //itemdblclick : this.onEditClick
          }
        });
    },

    onGridRender : function (window, eOpts){
      var grid = window.down('grid');
      grid.getStore().load();
    }

     
});
