syscontest
==========

Software de análise e gestão em base de dados para provas e simulados.

# SysContest/app

This folder contains the javascript files for the application.

# SysContest/resources

This folder contains static resources (typically an `"images"` folder as well).

# SysContest/overrides

This folder contains override classes. All overrides in this folder will be 
automatically included in application builds if the target class of the override
is loaded.

# SysContest/sass/etc

This folder contains misc. support code for sass builds (global functions, 
mixins, etc.)

# SysContest/sass/src

This folder contains sass files defining css rules corresponding to classes
included in the application's javascript code build.  By default, files in this 
folder are mapped to the application's root namespace, 'SysContest'. The
namespace to which files in this directory are matched is controlled by the
app.sass.namespace property in SysContest/.sencha/app/sencha.cfg. 

# SysContest/sass/var

This folder contains sass files defining sass variables corresponding to classes
included in the application's javascript code build.  By default, files in this 
folder are mapped to the application's root namespace, 'SysContest'. The
namespace to which files in this directory are matched is controlled by the
app.sass.namespace property in SysContest/.sencha/app/sencha.cfg. 

