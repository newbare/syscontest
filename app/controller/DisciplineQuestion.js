Ext.define('SysContest.controller.Discipline', {
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
          'dxqgrid' : {
             render : this.onGridRender,
             //itemdblclick : this.onEditClick
          }
        });
    },

    onGridRender : function (grid, eOpts){
      grid.getStore().load();
    }

     
});
