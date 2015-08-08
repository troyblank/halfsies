angular.module('halfsies').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('app/views/partials/logCreate.html',
    "<section>\r" +
    "\n" +
    "    <h1>Create a new log</h1>\r" +
    "\n" +
    "    <form data-ng-submit=\"create()\" novalidate>\r" +
    "\n" +
    "        <div>\r" +
    "\n" +
    "            <label for=\"amount\">Amount</label>\r" +
    "\n" +
    "            <div>\r" +
    "\n" +
    "                <input type=\"number\" data-ng-model=\"amount\" id=\"amount\" placeholder=\"Amount\" required />\r" +
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
    "                <textarea data-ng-model=\"description\" id=\"description\" cols=\"30\" rows=\"10\" placeholder=\"Description\" required ></textarea>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "        <div data-ng-show=\"error\">\r" +
    "\n" +
    "            <strong data-ng-bind=\"error\"></strong>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "        <div>\r" +
    "\n" +
    "            <input type=\"submit\" />\r" +
    "\n" +
    "            <a href=\"/#!/\">Cancel</a>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "    </form>\r" +
    "\n" +
    "</section>"
  );


  $templateCache.put('app/views/partials/overview.html',
    "<section data-ng-controller=\"balance\">\r" +
    "\n" +
    "    {{ balance.userPrimary }} : {{ balance.owedPrimary }}<br/>\r" +
    "\n" +
    "    {{ balance.userSecondary }} : {{ balance.owedSecondary }}<br/>\r" +
    "\n" +
    "</section>\r" +
    "\n" +
    "\r" +
    "\n" +
    "<a href=\"/#!/log/create\">Create a log</a>.\r" +
    "\n" +
    "\r" +
    "\n" +
    "<ul data-ng-controller=\"logList\">\r" +
    "\n" +
    "    <li data-ng-repeat=\"log in logs\">\r" +
    "\n" +
    "        <span>{{ log.amount }}</span>\r" +
    "\n" +
    "        <span>{{ log.description }}</span>\r" +
    "\n" +
    "        <span>{{ log.user }}</span>\r" +
    "\n" +
    "    </li>\r" +
    "\n" +
    "    <span ng-show=\"(logs).length == 0\">No purchase log yet.</span>\r" +
    "\n" +
    "    <div data-ng-show=\"error\">\r" +
    "\n" +
    "        <strong data-ng-bind=\"error\"></strong>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "</ul>"
  );

}]);
