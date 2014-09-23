Ext.define('SysContest.controller.Main', {
    extend: 'Ext.app.Controller',

    models : [
       'SysContest.model.Institution'
    ],

    stores : [
       'SysContest.store.Institutions'
    ],

    views : [
       'SysContest.view.institution.InstitutionsGrid',
       'SysContest.view.institution.InstitutionsForm'
    ],

    init : function (application){
      this.control({
        'institutionsgrid' : {
           render : this.onGridRender,
           itemdblclick : this.onEditClick
        },
        'institutionsgrid button#addInstitution' : {
          click : this.onAddClick
        },
        'institutionsgrid button#deleteInstitution' : {
          click : this.onDeleteClick
        },
        'institutionsform button#cancelInstitution' : {
          click : this.onCancelClick
        },
        'institutionsform button#saveInstitution' : {
          click : this.onSaveClick
        }

      });
    },

    onGridRender : function (grid, eOpts){
      grid.getStore().load();
    },

    openForm : function (title) {
       var win = Ext.create('SysContest.view.institution.InstitutionsForm');
       win.setTitle(title);
       return win;
    },

    onAddClick : function (btn , e, eOpts){
      this.openForm('Nova Instituição');
    },

    onEditClick : function (grid, record, item, index, e, eOpts){
        var win = this.openForm('Editar Instituição - ' + record.get('name'));
        var form = win.down('form');
        form.loadRecord(record);
    },

    onDeleteClick : function (btn, e, eOpts){
      Ext.MessageBox.confirm('Atenção','Deseja remover essa instituição?', function(btnConfirm){
        if (btnConfirm == 'yes'){
            var grid = btn.up('grid');
           var records = grid.getSelectionModel().getSelection();
           var store = grid.getStore();
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
          grid = Ext.ComponentQuery.query('institutionsgrid')[0],
          store = grid.getStore();

          if (record){
            record.set(values);
          }else{
            var institution = Ext.create('SysContest.model.Institution',{
              name : values.name
            });
            store.insert(0,institution);
          }
          store.sync();
          win.close();
    }

});
