Ext.define('SysContest.controller.Discipline', {
    extend: 'Ext.app.Controller',

    models : [
       'SysContest.model.Discipline'
    ],

    stores : [
       'SysContest.store.Disciplines'
    ],

    views : [
       'SysContest.view.discipline.DisciplinesGrid',
       'SysContest.view.discipline.DisciplinesForm'
    ],

    init : function (application) {
        this.control({
          'disciplinesgrid' : {
             render : this.onGridRender
          },
           'disciplinesgrid button#addDiscipline' : {
             click : this.onAddClick
          }
        });
    },

    onGridRender : function (grid, eOpts){
      grid.getStore().load();
    },

     openForm : function (title) {
       var win = Ext.create('SysContest.view.discipline.DisciplinesForm');
       win.setTitle(title);
       return win;
    },

    onAddClick : function (btn , e, eOpts){
      this.openForm('Nova Disciplina');
    }
  
});
