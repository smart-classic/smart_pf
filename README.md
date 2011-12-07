Exploratory support for Web apps in Practice Fusion.

    git clone  --recursive git@github.com:chb/smart_pf.git
    cd smart_pf/addon-sdk
    source bin/activate
    cd ..
    cp -r lib/shared data/    
    cfx run
    [ Firefox launches.  Now log in to Practice Fusion ]


Building .js interfaces from WSDL:

    npm install xml2json
    wget https://pfws.practicefusion.com/emr/2.0.45.1/Chart.asmx?WSDL > wsdl/Chart.asmx.wsdl
    node lib/node/parse_wsdl.js wsdl/Chart.asmx.wsdl > lib/shared/Chart.js 

Building a ready-to-install extension:

    > cfx xpi

