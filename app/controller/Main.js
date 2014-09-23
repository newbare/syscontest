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
           render : this.onGridRender
        },
        'institutionsgrid button#addInstitution' : {
          click : this.onAddClick
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
    }

});
