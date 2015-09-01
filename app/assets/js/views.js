angular.module('halfsies').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('app/views/partials/logCreate.html',
    "<section class=\"page-wrap\">\r" +
    "\n" +
    "    <h1>Create a new Halfsie</h1>\r" +
    "\n" +
    "    <form data-ng-submit=\"create()\" novalidate>\r" +
    "\n" +
    "        <div>\r" +
    "\n" +
    "            <label for=\"amount\">Amount</label>\r" +
    "\n" +
    "            <div>\r" +
    "\n" +
    "                <input type=\"number\" data-ng-model=\"amount\" id=\"amount\" required />\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "        <div>\r" +
    "\n" +
    "            <label for=\"description\">Description</label>\r" +
    "\n" +
    "            <div>\r" +
    "\n" +
    "                <textarea data-ng-model=\"description\" id=\"description\" cols=\"30\" rows=\"10\" required ></textarea>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "        <div class=\"alert alert__error icon-alert-error\" data-ng-show=\"error\">\r" +
    "\n" +
    "            <strong data-ng-bind=\"error\"></strong>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "        <div>\r" +
    "\n" +
    "            <input type=\"submit\" value=\"Submit\" data-pending-value=\"\" />\r" +
    "\n" +
    "            <a href=\"/#!/\" class=\"btn btn--alt\">Cancel</a>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "    </form>\r" +
    "\n" +
    "</section>"
  );


  $templateCache.put('app/views/partials/overview.html',
    "<section class=\"balance\" data-ng-controller=\"balance\">\r" +
    "\n" +
    "    <div class=\"page-wrap\">\r" +
    "\n" +
    "        <div class=\"balance__circle\">\r" +
    "\n" +
    "            <div class=\"balance__circle-content\">\r" +
    "\n" +
    "                <div class=\"icon\"><span>$<span></div>\r" +
    "\n" +
    "                <div class=\"number\">{{ balance.owedPrimary }}</div>\r" +
    "\n" +
    "                <div class=\"user\">{{ balance.userPrimary }}</div>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "            <div class=\"balance__circle-highlight\"><div></div></div>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "        <div class=\"balance__vs\">\r" +
    "\n" +
    "            <h1>Vs</h1>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "        <div class=\"balance__circle\">\r" +
    "\n" +
    "            <div class=\"balance__circle-content\">\r" +
    "\n" +
    "                <div class=\"icon\"><span>$<span></div>\r" +
    "\n" +
    "                <div class=\"number\">{{ balance.owedSecondary }}</div>\r" +
    "\n" +
    "                <div class=\"user\">{{ balance.userSecondary }}</div>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "            <div class=\"balance__circle-highlight\"><div></div></div>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "</section>\r" +
    "\n" +
    "<div class=\"page-wrap\">\r" +
    "\n" +
    "    <a href=\"/#!/log/create\" class=\"btn\">Create a halfsie</a>\r" +
    "\n" +
    "\r" +
    "\n" +
    "    <ul data-ng-controller=\"logList\">\r" +
    "\n" +
    "        <li data-ng-repeat=\"log in logs\">\r" +
    "\n" +
    "            <span>{{ log.amount }}</span>\r" +
    "\n" +
    "            <span>{{ log.description }}</span>\r" +
    "\n" +
    "            <span>{{ log.user }}</span>\r" +
    "\n" +
    "        </li>\r" +
    "\n" +
    "        <span ng-show=\"(logs).length == 0\">No purchase log yet.</span>\r" +
    "\n" +
    "        <div data-ng-show=\"error\">\r" +
    "\n" +
    "            <strong data-ng-bind=\"error\"></strong>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "    </ul>\r" +
    "\n" +
    "</div>"
  );

}]);
