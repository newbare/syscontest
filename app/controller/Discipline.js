Ext.define('SysContest.controller.Discipline', {
    extend: 'Ext.app.Controller',

    models : [
       'SysContest.model.Discipline'
    ],

    stores : [
       'SysContest.store.Disciplines'
    ],

    views : [
       'SysContest.view.discipline.DisciplinesGrid'
       //'SysContest.view.institution.InstitutionsForm'
    ],

    init : function (application) {
        this.control({
          'disciplinesgrid' : {
             render : this.onGridRender
          }
        });
    },

    onGridRender : function (grid, eOpts){
      grid.getStore().load();
    },
  
});
