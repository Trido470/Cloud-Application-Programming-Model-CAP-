sap.ui.define([
    "sap/fe/test/JourneyRunner",
	"ns/project1/test/integration/pages/IncidentsList",
	"ns/project1/test/integration/pages/IncidentsObjectPage"
], function (JourneyRunner, IncidentsList, IncidentsObjectPage) {
    'use strict';

    var runner = new JourneyRunner({
        launchUrl: sap.ui.require.toUrl('ns/project1') + '/test/flp.html#app-preview',
        pages: {
			onTheIncidentsList: IncidentsList,
			onTheIncidentsObjectPage: IncidentsObjectPage
        },
        async: true
    });

    return runner;
});

