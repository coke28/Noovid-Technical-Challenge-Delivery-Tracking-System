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

/***/ "./resources/assets/core/js/custom/documentation/editors/quill/autosave.js":
/*!*********************************************************************************!*\
  !*** ./resources/assets/core/js/custom/documentation/editors/quill/autosave.js ***!
  \*********************************************************************************/
/***/ (() => {

eval("\n\n// Class definition\nvar KTFormsQuillAutosave = function () {\n  // Private functions\n  var exampleAutosave = function exampleAutosave() {\n    var Delta = Quill[\"import\"]('delta');\n    var quill = new Quill('#kt_docs_quill_autosave', {\n      modules: {\n        toolbar: true\n      },\n      placeholder: 'Type your text here...',\n      theme: 'snow'\n    });\n\n    // Store accumulated changes\n    var change = new Delta();\n    quill.on('text-change', function (delta) {\n      change = change.compose(delta);\n    });\n\n    // Save periodically\n    setInterval(function () {\n      if (change.length() > 0) {\n        console.log('Saving changes', change);\n        /*\r\n        Send partial changes\r\n        $.post('/your-endpoint', {\r\n        partial: JSON.stringify(change)\r\n        });\r\n          Send entire document\r\n        $.post('/your-endpoint', {\r\n        doc: JSON.stringify(quill.getContents())\r\n        });\r\n        */\n        change = new Delta();\n      }\n    }, 5 * 1000);\n\n    // Check for unsaved data\n    window.onbeforeunload = function () {\n      if (change.length() > 0) {\n        return 'There are unsaved changes. Are you sure you want to leave?';\n      }\n    };\n  };\n  return {\n    // Public Functions\n    init: function init() {\n      exampleAutosave();\n    }\n  };\n}();\n\n// On document ready\nKTUtil.onDOMContentLoaded(function () {\n  KTFormsQuillAutosave.init();\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZXNvdXJjZXMvYXNzZXRzL2NvcmUvanMvY3VzdG9tL2RvY3VtZW50YXRpb24vZWRpdG9ycy9xdWlsbC9hdXRvc2F2ZS5qcyIsIm1hcHBpbmdzIjoiQUFBYTs7QUFFYjtBQUNBLElBQUlBLG9CQUFvQixHQUFHLFlBQVk7RUFDbkM7RUFDQSxJQUFJQyxlQUFlLEdBQUcsU0FBbEJBLGVBQWVBLENBQUEsRUFBZTtJQUM5QixJQUFJQyxLQUFLLEdBQUdDLEtBQUssVUFBTyxDQUFDLE9BQU8sQ0FBQztJQUNqQyxJQUFJQyxLQUFLLEdBQUcsSUFBSUQsS0FBSyxDQUFDLHlCQUF5QixFQUFFO01BQzdDRSxPQUFPLEVBQUU7UUFDTEMsT0FBTyxFQUFFO01BQ2IsQ0FBQztNQUNEQyxXQUFXLEVBQUUsd0JBQXdCO01BQ3JDQyxLQUFLLEVBQUU7SUFDWCxDQUFDLENBQUM7O0lBRUY7SUFDQSxJQUFJQyxNQUFNLEdBQUcsSUFBSVAsS0FBSyxDQUFDLENBQUM7SUFDeEJFLEtBQUssQ0FBQ00sRUFBRSxDQUFDLGFBQWEsRUFBRSxVQUFVQyxLQUFLLEVBQUU7TUFDckNGLE1BQU0sR0FBR0EsTUFBTSxDQUFDRyxPQUFPLENBQUNELEtBQUssQ0FBQztJQUNsQyxDQUFDLENBQUM7O0lBRUY7SUFDQUUsV0FBVyxDQUFDLFlBQVk7TUFDcEIsSUFBSUosTUFBTSxDQUFDSyxNQUFNLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRTtRQUNyQkMsT0FBTyxDQUFDQyxHQUFHLENBQUMsZ0JBQWdCLEVBQUVQLE1BQU0sQ0FBQztRQUNyQztBQUNoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7UUFFZ0JBLE1BQU0sR0FBRyxJQUFJUCxLQUFLLENBQUMsQ0FBQztNQUN4QjtJQUNKLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDOztJQUVaO0lBQ0FlLE1BQU0sQ0FBQ0MsY0FBYyxHQUFHLFlBQVk7TUFDaEMsSUFBSVQsTUFBTSxDQUFDSyxNQUFNLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRTtRQUNyQixPQUFPLDREQUE0RDtNQUN2RTtJQUNKLENBQUM7RUFDTCxDQUFDO0VBRUQsT0FBTztJQUNIO0lBQ0FLLElBQUksRUFBRSxTQUFBQSxLQUFBLEVBQVk7TUFDZGxCLGVBQWUsQ0FBQyxDQUFDO0lBQ3JCO0VBQ0osQ0FBQztBQUNMLENBQUMsQ0FBQyxDQUFDOztBQUVIO0FBQ0FtQixNQUFNLENBQUNDLGtCQUFrQixDQUFDLFlBQVk7RUFDbENyQixvQkFBb0IsQ0FBQ21CLElBQUksQ0FBQyxDQUFDO0FBQy9CLENBQUMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvY29yZS9qcy9jdXN0b20vZG9jdW1lbnRhdGlvbi9lZGl0b3JzL3F1aWxsL2F1dG9zYXZlLmpzP2NlNDYiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG4vLyBDbGFzcyBkZWZpbml0aW9uXHJcbnZhciBLVEZvcm1zUXVpbGxBdXRvc2F2ZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgIC8vIFByaXZhdGUgZnVuY3Rpb25zXHJcbiAgICB2YXIgZXhhbXBsZUF1dG9zYXZlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBEZWx0YSA9IFF1aWxsLmltcG9ydCgnZGVsdGEnKTtcclxuICAgICAgICB2YXIgcXVpbGwgPSBuZXcgUXVpbGwoJyNrdF9kb2NzX3F1aWxsX2F1dG9zYXZlJywge1xyXG4gICAgICAgICAgICBtb2R1bGVzOiB7XHJcbiAgICAgICAgICAgICAgICB0b29sYmFyOiB0cnVlXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyOiAnVHlwZSB5b3VyIHRleHQgaGVyZS4uLicsXHJcbiAgICAgICAgICAgIHRoZW1lOiAnc25vdydcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgLy8gU3RvcmUgYWNjdW11bGF0ZWQgY2hhbmdlc1xyXG4gICAgICAgIHZhciBjaGFuZ2UgPSBuZXcgRGVsdGEoKTtcclxuICAgICAgICBxdWlsbC5vbigndGV4dC1jaGFuZ2UnLCBmdW5jdGlvbiAoZGVsdGEpIHtcclxuICAgICAgICAgICAgY2hhbmdlID0gY2hhbmdlLmNvbXBvc2UoZGVsdGEpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAvLyBTYXZlIHBlcmlvZGljYWxseVxyXG4gICAgICAgIHNldEludGVydmFsKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgaWYgKGNoYW5nZS5sZW5ndGgoKSA+IDApIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdTYXZpbmcgY2hhbmdlcycsIGNoYW5nZSk7XHJcbiAgICAgICAgICAgICAgICAvKlxyXG4gICAgICAgICAgICAgICAgU2VuZCBwYXJ0aWFsIGNoYW5nZXNcclxuICAgICAgICAgICAgICAgICQucG9zdCgnL3lvdXItZW5kcG9pbnQnLCB7XHJcbiAgICAgICAgICAgICAgICBwYXJ0aWFsOiBKU09OLnN0cmluZ2lmeShjaGFuZ2UpXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICBTZW5kIGVudGlyZSBkb2N1bWVudFxyXG4gICAgICAgICAgICAgICAgJC5wb3N0KCcveW91ci1lbmRwb2ludCcsIHtcclxuICAgICAgICAgICAgICAgIGRvYzogSlNPTi5zdHJpbmdpZnkocXVpbGwuZ2V0Q29udGVudHMoKSlcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgICAgIGNoYW5nZSA9IG5ldyBEZWx0YSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSwgNSAqIDEwMDApO1xyXG5cclxuICAgICAgICAvLyBDaGVjayBmb3IgdW5zYXZlZCBkYXRhXHJcbiAgICAgICAgd2luZG93Lm9uYmVmb3JldW5sb2FkID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBpZiAoY2hhbmdlLmxlbmd0aCgpID4gMCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuICdUaGVyZSBhcmUgdW5zYXZlZCBjaGFuZ2VzLiBBcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gbGVhdmU/JztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIC8vIFB1YmxpYyBGdW5jdGlvbnNcclxuICAgICAgICBpbml0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGV4YW1wbGVBdXRvc2F2ZSgpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbn0oKTtcclxuXHJcbi8vIE9uIGRvY3VtZW50IHJlYWR5XHJcbktUVXRpbC5vbkRPTUNvbnRlbnRMb2FkZWQoZnVuY3Rpb24gKCkge1xyXG4gICAgS1RGb3Jtc1F1aWxsQXV0b3NhdmUuaW5pdCgpO1xyXG59KTtcclxuIl0sIm5hbWVzIjpbIktURm9ybXNRdWlsbEF1dG9zYXZlIiwiZXhhbXBsZUF1dG9zYXZlIiwiRGVsdGEiLCJRdWlsbCIsInF1aWxsIiwibW9kdWxlcyIsInRvb2xiYXIiLCJwbGFjZWhvbGRlciIsInRoZW1lIiwiY2hhbmdlIiwib24iLCJkZWx0YSIsImNvbXBvc2UiLCJzZXRJbnRlcnZhbCIsImxlbmd0aCIsImNvbnNvbGUiLCJsb2ciLCJ3aW5kb3ciLCJvbmJlZm9yZXVubG9hZCIsImluaXQiLCJLVFV0aWwiLCJvbkRPTUNvbnRlbnRMb2FkZWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./resources/assets/core/js/custom/documentation/editors/quill/autosave.js\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./resources/assets/core/js/custom/documentation/editors/quill/autosave.js"]();
/******/ 	
/******/ })()
;