angular.module('halfsies').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('app/views/partials/logCreate.html',
    "<section class=\"page-wrap\">\n" +
    "    <h1>Create a new Halfsie</h1>\n" +
    "    <form data-ng-submit=\"create()\" novalidate>\n" +
    "        <div>\n" +
    "            <label for=\"amount\">Amount</label>\n" +
    "            <div>\n" +
    "                <input type=\"number\" data-ng-model=\"amount\" id=\"amount\" required />\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <div>\n" +
    "            <label for=\"description\">Description</label>\n" +
    "            <div>\n" +
    "                <textarea data-ng-model=\"description\" id=\"description\" cols=\"30\" rows=\"10\" required ></textarea>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <div class=\"alert alert__error icon-alert-error\" data-ng-show=\"error\">\n" +
    "            <strong data-ng-bind=\"error\"></strong>\n" +
    "        </div>\n" +
    "        <div>\n" +
    "            <input type=\"submit\" value=\"Submit\" data-pending-value=\"\" />\n" +
    "            <a href=\"/#!/\" class=\"btn btn--alt\">Cancel</a>\n" +
    "        </div>\n" +
    "    </form>\n" +
    "</section>"
  );


  $templateCache.put('app/views/partials/overview.html',
    "<section class=\"balance\" data-ng-controller=\"balance\" data-ng-show=\"balance\">\n" +
    "    <div class=\"page-wrap\">\n" +
    "        <div class=\"balance__circle\" data-ng-class=\"{active: !balance.owedPrimary}\">\n" +
    "            <div class=\"balance__circle-content\">\n" +
    "                <div class=\"icon icon-balance-skull\"></div>\n" +
    "                <div class=\"dollar-icon\">$</div>\n" +
    "                <div class=\"number\">{{ balance.owedPrimary }}</div>\n" +
    "                <div class=\"user\">{{ balance.userPrimary }}</div>\n" +
    "            </div>\n" +
    "            <div class=\"balance__circle-highlight\"><div></div></div>\n" +
    "        </div>\n" +
    "        <div class=\"balance__vs\">\n" +
    "            <h1>Vs</h1>\n" +
    "        </div>\n" +
    "        <div class=\"balance__circle\" data-ng-class=\"{active: !balance.owedSecondary}\">\n" +
    "            <div class=\"balance__circle-content\">\n" +
    "                <div class=\"icon icon-balance-sheep\"></div>\n" +
    "                <div class=\"dollar-icon\">$</div>\n" +
    "                <div class=\"number\">{{ balance.owedSecondary }}</div>\n" +
    "                <div class=\"user\">{{ balance.userSecondary }}</div>\n" +
    "            </div>\n" +
    "            <div class=\"balance__circle-highlight\"><div></div></div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</section>\n" +
    "<div class=\"page-wrap\">\n" +
    "    <a href=\"/#!/log/create\" class=\"btn\">Create a halfsie</a>\n" +
    "\n" +
    "    <ul data-ng-controller=\"logList\" class=\"log-list\" data-ng-show=\"logs\">\n" +
    "        <li data-ng-repeat=\"log in logs\" data-ng-class=\"{negative: log.isNegative}\">\n" +
    "            <span>{{ log.amount }}</span>\n" +
    "            <span>{{ log.description }}</span>\n" +
    "            <span>{{ log.user }}</span>\n" +
    "        </li>\n" +
    "        <span ng-show=\"(logs).length == 0\">No purchase log yet.</span>\n" +
    "        <div data-ng-show=\"error\">\n" +
    "            <strong data-ng-bind=\"error\"></strong>\n" +
    "        </div>\n" +
    "    </ul>\n" +
    "</div>"
  );

}]);
