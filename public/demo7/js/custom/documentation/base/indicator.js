/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./resources/assets/core/js/custom/documentation/base/indicator.js":
/*!*************************************************************************!*\
  !*** ./resources/assets/core/js/custom/documentation/base/indicator.js ***!
  \*************************************************************************/
/***/ (() => {

eval(" // Class definition\n\nvar KTBaseIndicatorDemos = function () {\n  // Private functions\n  var _example1 = function _example1(element) {\n    // Element to indecate\n    var button = document.querySelector(\"#kt_button_1\"); // Handle button click event\n\n    button.addEventListener(\"click\", function () {\n      // Activate indicator \n      button.setAttribute(\"data-kt-indicator\", \"on\"); // Disable indicator after 3 seconds\n\n      setTimeout(function () {\n        button.removeAttribute(\"data-kt-indicator\");\n      }, 3000);\n    });\n  };\n\n  var _example2 = function _example2(element) {\n    // Element to indecate\n    var button = document.querySelector(\"#kt_button_2\"); // Handle button click event\n\n    button.addEventListener(\"click\", function () {\n      // Activate indicator \n      button.setAttribute(\"data-kt-indicator\", \"on\"); // Disable indicator after 3 seconds\n\n      setTimeout(function () {\n        button.removeAttribute(\"data-kt-indicator\");\n      }, 3000);\n    });\n  };\n\n  var _example3 = function _example3(element) {\n    // Element to indecate\n    var button = document.querySelector(\"#kt_button_3\"); // Handle button click event\n\n    button.addEventListener(\"click\", function () {\n      // Activate indicator \n      button.setAttribute(\"data-kt-indicator\", \"on\"); // Disable indicator after 3 seconds\n\n      setTimeout(function () {\n        button.removeAttribute(\"data-kt-indicator\");\n      }, 3000);\n    });\n  };\n\n  return {\n    // Public Functions\n    init: function init(element) {\n      _example1();\n\n      _example2();\n\n      _example3();\n    }\n  };\n}(); // On document ready\n\n\nKTUtil.onDOMContentLoaded(function () {\n  KTBaseIndicatorDemos.init();\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZXNvdXJjZXMvYXNzZXRzL2NvcmUvanMvY3VzdG9tL2RvY3VtZW50YXRpb24vYmFzZS9pbmRpY2F0b3IuanMuanMiLCJtYXBwaW5ncyI6IkNBRUE7O0FBQ0EsSUFBSUEsb0JBQW9CLEdBQUcsWUFBVztBQUNsQztBQUNBLE1BQUlDLFNBQVMsR0FBRyxTQUFaQSxTQUFZLENBQVNDLE9BQVQsRUFBa0I7QUFDOUI7QUFDQSxRQUFJQyxNQUFNLEdBQUdDLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixjQUF2QixDQUFiLENBRjhCLENBSTlCOztBQUNBRixJQUFBQSxNQUFNLENBQUNHLGdCQUFQLENBQXdCLE9BQXhCLEVBQWlDLFlBQVc7QUFDeEM7QUFDQUgsTUFBQUEsTUFBTSxDQUFDSSxZQUFQLENBQW9CLG1CQUFwQixFQUF5QyxJQUF6QyxFQUZ3QyxDQUl4Qzs7QUFDQUMsTUFBQUEsVUFBVSxDQUFDLFlBQVc7QUFDbEJMLFFBQUFBLE1BQU0sQ0FBQ00sZUFBUCxDQUF1QixtQkFBdkI7QUFDSCxPQUZTLEVBRVAsSUFGTyxDQUFWO0FBR0gsS0FSRDtBQVNILEdBZEQ7O0FBZ0JBLE1BQUlDLFNBQVMsR0FBRyxTQUFaQSxTQUFZLENBQVNSLE9BQVQsRUFBa0I7QUFDOUI7QUFDQSxRQUFJQyxNQUFNLEdBQUdDLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixjQUF2QixDQUFiLENBRjhCLENBSTlCOztBQUNBRixJQUFBQSxNQUFNLENBQUNHLGdCQUFQLENBQXdCLE9BQXhCLEVBQWlDLFlBQVc7QUFDeEM7QUFDQUgsTUFBQUEsTUFBTSxDQUFDSSxZQUFQLENBQW9CLG1CQUFwQixFQUF5QyxJQUF6QyxFQUZ3QyxDQUl4Qzs7QUFDQUMsTUFBQUEsVUFBVSxDQUFDLFlBQVc7QUFDbEJMLFFBQUFBLE1BQU0sQ0FBQ00sZUFBUCxDQUF1QixtQkFBdkI7QUFDSCxPQUZTLEVBRVAsSUFGTyxDQUFWO0FBR0gsS0FSRDtBQVNILEdBZEQ7O0FBZ0JBLE1BQUlFLFNBQVMsR0FBRyxTQUFaQSxTQUFZLENBQVNULE9BQVQsRUFBa0I7QUFDOUI7QUFDQSxRQUFJQyxNQUFNLEdBQUdDLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixjQUF2QixDQUFiLENBRjhCLENBSTlCOztBQUNBRixJQUFBQSxNQUFNLENBQUNHLGdCQUFQLENBQXdCLE9BQXhCLEVBQWlDLFlBQVc7QUFDeEM7QUFDQUgsTUFBQUEsTUFBTSxDQUFDSSxZQUFQLENBQW9CLG1CQUFwQixFQUF5QyxJQUF6QyxFQUZ3QyxDQUl4Qzs7QUFDQUMsTUFBQUEsVUFBVSxDQUFDLFlBQVc7QUFDbEJMLFFBQUFBLE1BQU0sQ0FBQ00sZUFBUCxDQUF1QixtQkFBdkI7QUFDSCxPQUZTLEVBRVAsSUFGTyxDQUFWO0FBR0gsS0FSRDtBQVNILEdBZEQ7O0FBaUJBLFNBQU87QUFDSDtBQUNBRyxJQUFBQSxJQUFJLEVBQUUsY0FBU1YsT0FBVCxFQUFrQjtBQUNwQkQsTUFBQUEsU0FBUzs7QUFDVFMsTUFBQUEsU0FBUzs7QUFDVEMsTUFBQUEsU0FBUztBQUNaO0FBTkUsR0FBUDtBQVFILENBM0QwQixFQUEzQixDLENBNkRBOzs7QUFDQUUsTUFBTSxDQUFDQyxrQkFBUCxDQUEwQixZQUFXO0FBQ2pDZCxFQUFBQSxvQkFBb0IsQ0FBQ1ksSUFBckI7QUFDSCxDQUZEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9jb3JlL2pzL2N1c3RvbS9kb2N1bWVudGF0aW9uL2Jhc2UvaW5kaWNhdG9yLmpzP2YwY2YiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG4vLyBDbGFzcyBkZWZpbml0aW9uXHJcbnZhciBLVEJhc2VJbmRpY2F0b3JEZW1vcyA9IGZ1bmN0aW9uKCkge1xyXG4gICAgLy8gUHJpdmF0ZSBmdW5jdGlvbnNcclxuICAgIHZhciBfZXhhbXBsZTEgPSBmdW5jdGlvbihlbGVtZW50KSB7XHJcbiAgICAgICAgLy8gRWxlbWVudCB0byBpbmRlY2F0ZVxyXG4gICAgICAgIHZhciBidXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2t0X2J1dHRvbl8xXCIpO1xyXG5cclxuICAgICAgICAvLyBIYW5kbGUgYnV0dG9uIGNsaWNrIGV2ZW50XHJcbiAgICAgICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgLy8gQWN0aXZhdGUgaW5kaWNhdG9yIFxyXG4gICAgICAgICAgICBidXR0b24uc2V0QXR0cmlidXRlKFwiZGF0YS1rdC1pbmRpY2F0b3JcIiwgXCJvblwiKTtcclxuXHJcbiAgICAgICAgICAgIC8vIERpc2FibGUgaW5kaWNhdG9yIGFmdGVyIDMgc2Vjb25kc1xyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgYnV0dG9uLnJlbW92ZUF0dHJpYnV0ZShcImRhdGEta3QtaW5kaWNhdG9yXCIpO1xyXG4gICAgICAgICAgICB9LCAzMDAwKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICB2YXIgX2V4YW1wbGUyID0gZnVuY3Rpb24oZWxlbWVudCkge1xyXG4gICAgICAgIC8vIEVsZW1lbnQgdG8gaW5kZWNhdGVcclxuICAgICAgICB2YXIgYnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNrdF9idXR0b25fMlwiKTtcclxuXHJcbiAgICAgICAgLy8gSGFuZGxlIGJ1dHRvbiBjbGljayBldmVudFxyXG4gICAgICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIC8vIEFjdGl2YXRlIGluZGljYXRvciBcclxuICAgICAgICAgICAgYnV0dG9uLnNldEF0dHJpYnV0ZShcImRhdGEta3QtaW5kaWNhdG9yXCIsIFwib25cIik7XHJcblxyXG4gICAgICAgICAgICAvLyBEaXNhYmxlIGluZGljYXRvciBhZnRlciAzIHNlY29uZHNcclxuICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgIGJ1dHRvbi5yZW1vdmVBdHRyaWJ1dGUoXCJkYXRhLWt0LWluZGljYXRvclwiKTtcclxuICAgICAgICAgICAgfSwgMzAwMCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgdmFyIF9leGFtcGxlMyA9IGZ1bmN0aW9uKGVsZW1lbnQpIHtcclxuICAgICAgICAvLyBFbGVtZW50IHRvIGluZGVjYXRlXHJcbiAgICAgICAgdmFyIGJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIja3RfYnV0dG9uXzNcIik7XHJcblxyXG4gICAgICAgIC8vIEhhbmRsZSBidXR0b24gY2xpY2sgZXZlbnRcclxuICAgICAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAvLyBBY3RpdmF0ZSBpbmRpY2F0b3IgXHJcbiAgICAgICAgICAgIGJ1dHRvbi5zZXRBdHRyaWJ1dGUoXCJkYXRhLWt0LWluZGljYXRvclwiLCBcIm9uXCIpO1xyXG5cclxuICAgICAgICAgICAgLy8gRGlzYWJsZSBpbmRpY2F0b3IgYWZ0ZXIgMyBzZWNvbmRzXHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICBidXR0b24ucmVtb3ZlQXR0cmlidXRlKFwiZGF0YS1rdC1pbmRpY2F0b3JcIik7XHJcbiAgICAgICAgICAgIH0sIDMwMDApO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgXHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICAvLyBQdWJsaWMgRnVuY3Rpb25zXHJcbiAgICAgICAgaW5pdDogZnVuY3Rpb24oZWxlbWVudCkge1xyXG4gICAgICAgICAgICBfZXhhbXBsZTEoKTtcclxuICAgICAgICAgICAgX2V4YW1wbGUyKCk7XHJcbiAgICAgICAgICAgIF9leGFtcGxlMygpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbn0oKTtcclxuXHJcbi8vIE9uIGRvY3VtZW50IHJlYWR5XHJcbktUVXRpbC5vbkRPTUNvbnRlbnRMb2FkZWQoZnVuY3Rpb24oKSB7XHJcbiAgICBLVEJhc2VJbmRpY2F0b3JEZW1vcy5pbml0KCk7XHJcbn0pOyJdLCJuYW1lcyI6WyJLVEJhc2VJbmRpY2F0b3JEZW1vcyIsIl9leGFtcGxlMSIsImVsZW1lbnQiLCJidXR0b24iLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJhZGRFdmVudExpc3RlbmVyIiwic2V0QXR0cmlidXRlIiwic2V0VGltZW91dCIsInJlbW92ZUF0dHJpYnV0ZSIsIl9leGFtcGxlMiIsIl9leGFtcGxlMyIsImluaXQiLCJLVFV0aWwiLCJvbkRPTUNvbnRlbnRMb2FkZWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./resources/assets/core/js/custom/documentation/base/indicator.js\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./resources/assets/core/js/custom/documentation/base/indicator.js"]();
/******/ 	
/******/ })()
;