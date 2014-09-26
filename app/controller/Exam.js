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
    ],


    init : function (application) {
        this.control({
          'examesgrid' : {
             render : this.onGridRender
            //itemdblclick : this.onEditClick
          }
          
        });

    },

    onGridRender : function (grid, eOpts){
      grid.getStore().load();
    }

});