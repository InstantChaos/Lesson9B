"use strict";
var games_component_1 = require("./games.component");
// includes sub components
var list_component_1 = require("./list/list.component");
exports.GamesRoutes = [{
        path: 'api',
        component: games_component_1.GamesComponent,
        children: [
            { path: 'games', component: list_component_1.ListComponent }
        ]
    }];
//# sourceMappingURL=games.routes.js.map