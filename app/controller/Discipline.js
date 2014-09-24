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
          },
          'disciplinesgrid button#deleteDiscipline' : {
            click : this.onDeleteClick
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
    },

    onDeleteClick : function (btn, e, eOpts){
      Ext.MessageBox.confirm('Atenção','Deseja remover essa Disciplina?', function(btnConfirm){
        if (btnConfirm == 'yes'){
           var grid = btn.up('grid'),
               records = grid.getSelectionModel().getSelection(),
               store = grid.getStore();
           store.remove(records);
           store.sync(); 
           Ext.MessageBox.alert('Mensagem','Registro deletado!');
        } 
      });
    }
  
});
