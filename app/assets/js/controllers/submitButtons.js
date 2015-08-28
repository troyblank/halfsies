(function (halfsies) {
    'use strict';

    var PENDING_CLASS = 'pending';

    function addEventListeners() {
        angular.element(document.querySelectorAll('input[type="submit"]')).on('click', halfsies.controllers.submitButtons.submitHand);
        halfsies.util.eventDispatcher.addEventListener(halfsies.util.eventDispatcher.HTTP_FINISH_EVENT, halfsies.controllers.submitButtons.httpFinishHand);
    }

    halfsies.namespace('controllers.submitButtons', {
        init: function () {
            addEventListeners();
        },

        submitHand: function (e) {
            if (halfsies.controllers.submitButtons.hasPendingClass(this)) {
                e.preventDefault();
                return false;
            }

            angular.element(this).addClass(PENDING_CLASS);
        },

        hasPendingClass: function (ele) {
            if (angular.element(ele).hasClass(PENDING_CLASS)) {
                return true;
            }
            return false;
        },

        httpFinishHand: function () {
            angular.element(document.querySelectorAll('input[type="submit"]')).removeClass(PENDING_CLASS);
        }
    });
}(halfsies));

document.addEventListener('DOMContentLoaded', halfsies.controllers.submitButtons.init);