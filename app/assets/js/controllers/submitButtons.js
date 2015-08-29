(function (halfsies) {
    'use strict';

    var PENDING_CLASS = 'pending',
        PENDING_VAL_ATTR = 'data-pending-value',
        ORIGINAL_VAL = 'original-val';

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

            halfsies.controllers.submitButtons.setPendingState(this);
        },

        setPendingState: function (targ) {
            //first store original value while we conveniently have the targ looked up.
            angular.element(targ).data(ORIGINAL_VAL, angular.element(targ).val());

            angular.element(targ).addClass(PENDING_CLASS);
            angular.element(targ).val(angular.element(targ).attr(PENDING_VAL_ATTR));
        },

        hasPendingClass: function (ele) {
            if (angular.element(ele).hasClass(PENDING_CLASS)) {
                return true;
            }
            return false;
        },

        httpFinishHand: function () {
            halfsies.controllers.submitButtons.removePendingState(document.querySelectorAll('input[type="submit"]'));
        },

        removePendingState: function (targ) {
            angular.element(targ).removeClass(PENDING_CLASS);
            angular.element(targ).val(angular.element(targ).data(ORIGINAL_VAL));
        }
    });
}(halfsies));

document.addEventListener('DOMContentLoaded', halfsies.controllers.submitButtons.init);