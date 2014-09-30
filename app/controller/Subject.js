Ext.define('SysContest.controller.Subject', {
    extend: 'Ext.app.Controller',

    models : [
       'SysContest.model.Subject'
    ],

    stores : [
       'SysContest.store.Subjects'
    ],

    views : [
       'SysContest.view.subject.SubjectsGrid',
        'SysContest.view.subject.SubjectsForm'
    ],

     init : function (application){
      this.control({
        'subjectsgrid' : {
           render : this.onGridRender,
           itemdblclick : this.onEditClick
         },
         'subjectsgrid button#addSubject' : {
          click : this.onAddClick
         },
         'subjectsgrid button#deleteSubject' : {
          click : this.onDeleteClick
         },
         'subjectsform button#cancelSubject' : {
            click : this.onCancelClick
          }

      });
    },

    onGridRender : function (grid, eOpts){
      grid.getStore().load();
    },

    openForm : function (title) {
       var win = Ext.create('SysContest.view.subject.SubjectsForm');
       win.setTitle(title);
       return win;
    },

    onAddClick : function (btn , e, eOpts){
      this.openForm('Nova Assunto');
    },

    onEditClick : function (grid, record, item, index, e, eOpts){
        var win = this.openForm('Editar Assunto - ' + record.get('name'));
        var form = win.down('form');
        form.loadRecord(record);
    },

    onDeleteClick : function (btn, e, eOpts){
      Ext.MessageBox.confirm('Atenção','Deseja remover esse Assunto?', function(btnConfirm){
        if (btnConfirm == 'yes'){
           var grid = btn.up('grid'),
               records = grid.getSelectionModel().getSelection(),
               store = grid.getStore();
           store.remove(records);
           store.sync(); 
           Ext.MessageBox.alert('Mensagem','Assunto removido!');
        } 
      });
    },

    onCancelClick : function (btn, e, eOpts){
      var win = btn.up('window');
      var form = win.down('form');
      form.getForm().reset();
      win.close();
    }

});