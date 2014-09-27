Ext.define('SysContest.controller.Exam', {
    extend: 'Ext.app.Controller',

    models : [
       'SysContest.model.Exam'
    ],

    stores : [
       'SysContest.store.Exames'
    ],

    views : [
       'SysContest.view.exam.ExamesGrid',
       'SysContest.view.exam.ExamesForm'
    ],


    init : function (application) {
        this.control({
          'examesgrid' : {
             render : this.onGridRender,
             itemdblclick : this.onEditClick
          },
          'examesgrid button#addExam' : {
             click : this.onAddClick
          },
          'examesgrid button#deleteExam' : {
            click : this.onDeleteClick
          },
          'examesform button#cancelExam' : {
            click : this.onCancelClick
          },
          'examesform button#saveExam' : {
              click : this.onSaveClick
           }

        });

    },

    onGridRender : function (grid, eOpts){
      grid.getStore().load();
    },

    openForm : function (title) {
       var win = Ext.create('SysContest.view.exam.ExamesForm');
       win.setTitle(title);
       return win;
    },

    onAddClick : function (btn , e, eOpts){
      this.openForm('Nova Prova');
    },

    onEditClick : function (grid, record, item, index, e, eOpts){
        var win = this.openForm('Editar Prova - ' + record.get('idExam'));
        var form = win.down('form');
        form.loadRecord(record);
    },

    onDeleteClick : function (btn, e, eOpts){
      Ext.MessageBox.confirm('Atenção','Deseja remover essa Prova?', function(btnConfirm){
        if (btnConfirm == 'yes'){
           var grid = btn.up('grid'),
               records = grid.getSelectionModel().getSelection(),
               store = grid.getStore();
           store.remove(records);
           store.sync(); 
           Ext.MessageBox.alert('Mensagem','Prova deletada!');
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
          grid = Ext.ComponentQuery.query('examesgrid')[0],
          store = grid.getStore();

          if (record){
            record.set(values);
          }else{
            var exam = Ext.create('SysContest.model.Exam',{
              idInstitution : values.idInstitution,
              year : values.year,
              role : values.role,
              level : values.level,
              organ : values.organ
            });
            store.insert(0,exam);
          }
          store.sync();
          win.close();
    }

});