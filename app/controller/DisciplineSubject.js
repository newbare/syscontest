Ext.define('SysContest.controller.DisciplineSubject', {
    extend: 'Ext.app.Controller',

    models : [
       'SysContest.model.DisciplineSubject'
    ],

    stores : [
       'SysContest.store.DisciplinesSubjects'
    ],

    views : [
      'SysContest.view.dxs.DXSGrid',
      'SysContest.view.dxs.DXSWindow',
      'SysContest.view.simulated.SidePanel',
      'SysContest.view.dxs.DXSForm'
    ],

    init : function (application) {
        this.control({
         'dxswindow' : {
             render : this.onGridRender,
          },
          'sidepanel button#openDXS' : {
            click : this.onOpenClick,
          },
          'dxswindow button#addDXS' : {
            click : this.onAddClick
          },
          'dxsgrid' : {
            itemdblclick : this.onEditClick
          },
          'dxsgrid button#deleteDXS' : {
            click : this.onDeleteClick
          },
          'dxsform button#cancelDXS' : {
            click : this.onCancelClick
          }
        });
    },

    onGridRender : function (window, eOpts){
      var grid = window.down('grid');
      grid.getStore().load();
    },

    openForm : function (title) {
       var win = Ext.create('SysContest.view.dxs.DXSForm');
       win.setTitle(title);
       return win;
    },

    onAddClick : function (btn , e, eOpts){
      this.openForm('Classificador');
    },

    onOpenClick : function (btn , e, eOpts){
      var win = Ext.create('SysContest.view.dxs.DXSWindow');
      return win;
    },

    onDeleteClick : function (btn, e, eOpts){
      Ext.MessageBox.confirm('Atenção','Deseja remover essa Relação?', function(btnConfirm){
        if (btnConfirm == 'yes'){
           var grid = btn.up('grid'),
               records = grid.getSelectionModel().getSelection(),
               store = grid.getStore();
           store.remove(records);
           store.sync(); 
           Ext.MessageBox.alert('Mensagem','Relação removida!');
        } 
      });
    },

    onCancelClick : function (btn, e, eOpts){
      var win = btn.up('window');
      var form = win.down('form');
      form.getForm().reset();
      win.close();
    },

    onEditClick : function (grid, record, item, index, e, eOpts){
        var win = this.openForm('Editar Relação');
        var form = win.down('form');
        form.loadRecord(record);
    }   

});
