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
        }

      });
    },

    onGridRender : function (grid, eOpts){
      grid.getStore().load();
    }

});
