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
             render : this.onGridRender,
             itemdblclick : this.onEditClick
          },
           'disciplinesgrid button#addDiscipline' : {
             click : this.onAddClick
          },
          'disciplinesgrid button#deleteDiscipline' : {
            click : this.onDeleteClick
          },
          'disciplinesform button#cancelDiscipline' : {
            click : this.onCancelClick
          },
           'disciplinesform button#saveDiscipline' : {
              click : this.onSaveClick
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

    onEditClick : function (grid, record, item, index, e, eOpts){
        var win = this.openForm('Editar Disciplina - ' + record.get('name'));
        var form = win.down('form');
        form.loadRecord(record);
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
    },

    onCancelClick : function (btn, e, eOpts){
      var win = btn.up('window');
      var form = win.down('form');
      form.getForm().reset();
      win.close();
    },

     onSaveClick : function (btn, e, eOpts){
      var win = btn.up('window'),
          form = win.down('form'),
          values = form.getValues(),
          record = form.getRecord(),
          grid = Ext.ComponentQuery.query('disciplinesgrid')[0],
          store = grid.getStore();

          if (record){
            record.set(values);
          }else{
            var discipline = Ext.create('SysContest.model.Discipline',{
              name : values.name
            });
            store.insert(0,discipline);
          }
          store.sync();
          win.close();
    }
  
});
