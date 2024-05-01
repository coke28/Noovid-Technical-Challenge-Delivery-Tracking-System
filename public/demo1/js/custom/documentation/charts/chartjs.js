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

/***/ "./resources/assets/core/js/custom/documentation/charts/chartjs.js":
/*!*************************************************************************!*\
  !*** ./resources/assets/core/js/custom/documentation/charts/chartjs.js ***!
  \*************************************************************************/
/***/ (() => {

eval("\n\n// Class definition\nvar KTGeneralChartJS = function () {\n  // Randomizer function\n  function getRandom() {\n    var min = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;\n    var max = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 100;\n    return Math.floor(Math.random() * (max - min) + min);\n  }\n  function generateRandomData() {\n    var min = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;\n    var max = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 100;\n    var count = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 10;\n    var arr = [];\n    for (var i = 0; i < count; i++) {\n      arr.push(getRandom(min, max));\n    }\n    return arr;\n  }\n\n  // Private functions\n  var example1 = function example1() {\n    // Define chart element\n    var ctx = document.getElementById('kt_chartjs_1');\n\n    // Define colors\n    var primaryColor = KTUtil.getCssVariableValue('--bs-primary');\n    var dangerColor = KTUtil.getCssVariableValue('--bs-danger');\n    var successColor = KTUtil.getCssVariableValue('--bs-success');\n\n    // Define fonts\n    var fontFamily = KTUtil.getCssVariableValue('--bs-font-sans-serif');\n\n    // Chart labels\n    var labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];\n\n    // Chart data\n    var data = {\n      labels: labels,\n      datasets: [{\n        label: 'Dataset 1',\n        data: generateRandomData(1, 100, 12),\n        backgroundColor: primaryColor,\n        stack: 'Stack 0'\n      }, {\n        label: 'Dataset 2',\n        data: generateRandomData(1, 100, 12),\n        backgroundColor: dangerColor,\n        stack: 'Stack 1'\n      }, {\n        label: 'Dataset 3',\n        data: generateRandomData(1, 100, 12),\n        backgroundColor: successColor,\n        stack: 'Stack 2'\n      }]\n    };\n\n    // Chart config\n    var config = {\n      type: 'bar',\n      data: data,\n      options: {\n        plugins: {\n          title: {\n            display: false\n          }\n        },\n        responsive: true,\n        interaction: {\n          intersect: false\n        },\n        scales: {\n          x: {\n            stacked: true\n          },\n          y: {\n            stacked: true\n          }\n        }\n      }\n    };\n\n    // Init ChartJS -- for more info, please visit: https://www.chartjs.org/docs/latest/\n    var myChart = new Chart(ctx, config);\n  };\n  var example2 = function example2() {\n    // Define chart element\n    var ctx = document.getElementById('kt_chartjs_2');\n\n    // Define colors\n    var primaryColor = KTUtil.getCssVariableValue('--bs-primary');\n    var dangerColor = KTUtil.getCssVariableValue('--bs-danger');\n    var successColor = KTUtil.getCssVariableValue('--bs-success');\n\n    // Define fonts\n    var fontFamily = KTUtil.getCssVariableValue('--bs-font-sans-serif');\n\n    // Chart labels\n    var labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];\n\n    // Chart data\n    var data = {\n      labels: labels,\n      datasets: [{\n        label: 'Dataset 1',\n        data: generateRandomData(1, 50, 7),\n        borderColor: primaryColor,\n        backgroundColor: 'transparent'\n      }, {\n        label: 'Dataset 2',\n        data: generateRandomData(1, 50, 7),\n        borderColor: dangerColor,\n        backgroundColor: 'transparent'\n      }]\n    };\n\n    // Chart config\n    var config = {\n      type: 'line',\n      data: data,\n      options: {\n        plugins: {\n          title: {\n            display: false\n          }\n        },\n        responsive: true\n      }\n    };\n\n    // Init ChartJS -- for more info, please visit: https://www.chartjs.org/docs/latest/\n    var myChart = new Chart(ctx, config);\n  };\n  var example3 = function example3() {\n    // Define chart element\n    var ctx = document.getElementById('kt_chartjs_3');\n\n    // Define colors\n    var primaryColor = KTUtil.getCssVariableValue('--bs-primary');\n    var dangerColor = KTUtil.getCssVariableValue('--bs-danger');\n    var successColor = KTUtil.getCssVariableValue('--bs-success');\n    var warningColor = KTUtil.getCssVariableValue('--bs-warning');\n    var infoColor = KTUtil.getCssVariableValue('--bs-info');\n\n    // Chart labels\n    var labels = ['January', 'February', 'March', 'April', 'May'];\n\n    // Chart data\n    var data = {\n      labels: labels,\n      datasets: [{\n        label: 'Dataset 1',\n        data: generateRandomData(1, 100, 5),\n        backgroundColor: [primaryColor, dangerColor, successColor, warningColor, infoColor]\n      }]\n    };\n\n    // Chart config\n    var config = {\n      type: 'pie',\n      data: data,\n      options: {\n        plugins: {\n          title: {\n            display: false\n          }\n        },\n        responsive: true\n      }\n    };\n\n    // Init ChartJS -- for more info, please visit: https://www.chartjs.org/docs/latest/\n    var myChart = new Chart(ctx, config);\n  };\n  var example4 = function example4() {\n    // Define chart element\n    var ctx = document.getElementById('kt_chartjs_4');\n\n    // Define colors\n    var primaryColor = KTUtil.getCssVariableValue('--bs-primary');\n    var dangerColor = KTUtil.getCssVariableValue('--bs-danger');\n    var dangerLightColor = KTUtil.getCssVariableValue('--bs-light-danger');\n\n    // Define fonts\n    var fontFamily = KTUtil.getCssVariableValue('--bs-font-sans-serif');\n\n    // Chart labels\n    var labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];\n\n    // Chart data\n    var data = {\n      labels: labels,\n      datasets: [{\n        label: 'Dataset 1',\n        data: generateRandomData(50, 100, 12),\n        borderColor: primaryColor,\n        backgroundColor: 'transparent',\n        stack: 'combined'\n      }, {\n        label: 'Dataset 2',\n        data: generateRandomData(1, 60, 12),\n        backgroundColor: dangerColor,\n        borderColor: dangerColor,\n        stack: 'combined',\n        type: 'bar'\n      }]\n    };\n\n    // Chart config\n    var config = {\n      type: 'line',\n      data: data,\n      options: {\n        plugins: {\n          title: {\n            display: false\n          }\n        },\n        responsive: true,\n        interaction: {\n          intersect: false\n        },\n        scales: {\n          y: {\n            stacked: true\n          }\n        }\n      },\n      defaults: {\n        font: {\n          family: 'inherit'\n        }\n      }\n    };\n\n    // Init ChartJS -- for more info, please visit: https://www.chartjs.org/docs/latest/\n    var myChart = new Chart(ctx, config);\n  };\n  var example5 = function example5() {\n    // Define chart element\n    var ctx = document.getElementById('kt_chartjs_5');\n\n    // Define colors\n    var infoColor = KTUtil.getCssVariableValue('--bs-info');\n    var infoLightColor = KTUtil.getCssVariableValue('--bs-light-info');\n    var warningColor = KTUtil.getCssVariableValue('--bs-warning');\n    var warningLightColor = KTUtil.getCssVariableValue('--bs-light-warning');\n    var primaryColor = KTUtil.getCssVariableValue('--bs-primary');\n    var primaryLightColor = KTUtil.getCssVariableValue('--bs-light-primary');\n\n    // Define fonts\n    var fontFamily = KTUtil.getCssVariableValue('--bs-font-sans-serif');\n\n    // Chart labels\n    var labels = ['January', 'February', 'March', 'April', 'May', 'June'];\n\n    // Chart data\n    var data = {\n      labels: labels,\n      datasets: [{\n        label: 'Dataset 1',\n        data: generateRandomData(20, 80, 6),\n        borderColor: infoColor,\n        backgroundColor: infoLightColor\n      }, {\n        label: 'Dataset 2',\n        data: generateRandomData(10, 60, 6),\n        backgroundColor: warningLightColor,\n        borderColor: warningColor\n      }, {\n        label: 'Dataset 3',\n        data: generateRandomData(0, 80, 6),\n        backgroundColor: primaryLightColor,\n        borderColor: primaryColor\n      }]\n    };\n\n    // Chart config\n    var config = {\n      type: 'radar',\n      data: data,\n      options: {\n        plugins: {\n          title: {\n            display: false\n          }\n        },\n        responsive: true\n      }\n    };\n\n    // Init ChartJS -- for more info, please visit: https://www.chartjs.org/docs/latest/\n    var myChart = new Chart(ctx, config);\n  };\n  return {\n    // Public Functions\n    init: function init() {\n      // Global font settings: https://www.chartjs.org/docs/latest/general/fonts.html\n      Chart.defaults.font.size = 13;\n      Chart.defaults.font.family = KTUtil.getCssVariableValue('--bs-font-sans-serif');\n      example1();\n      example2();\n      example3();\n      example4();\n      example5();\n    }\n  };\n}();\n\n// On document ready\nKTUtil.onDOMContentLoaded(function () {\n  KTGeneralChartJS.init();\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZXNvdXJjZXMvYXNzZXRzL2NvcmUvanMvY3VzdG9tL2RvY3VtZW50YXRpb24vY2hhcnRzL2NoYXJ0anMuanMiLCJtYXBwaW5ncyI6IkFBQWE7O0FBRWI7QUFDQSxJQUFJQSxnQkFBZ0IsR0FBRyxZQUFZO0VBQy9CO0VBQ0EsU0FBU0MsU0FBU0EsQ0FBQSxFQUFxQjtJQUFBLElBQXBCQyxHQUFHLEdBQUFDLFNBQUEsQ0FBQUMsTUFBQSxRQUFBRCxTQUFBLFFBQUFFLFNBQUEsR0FBQUYsU0FBQSxNQUFHLENBQUM7SUFBQSxJQUFFRyxHQUFHLEdBQUFILFNBQUEsQ0FBQUMsTUFBQSxRQUFBRCxTQUFBLFFBQUFFLFNBQUEsR0FBQUYsU0FBQSxNQUFHLEdBQUc7SUFDakMsT0FBT0ksSUFBSSxDQUFDQyxLQUFLLENBQUNELElBQUksQ0FBQ0UsTUFBTSxDQUFDLENBQUMsSUFBSUgsR0FBRyxHQUFHSixHQUFHLENBQUMsR0FBR0EsR0FBRyxDQUFDO0VBQ3hEO0VBRUEsU0FBU1Esa0JBQWtCQSxDQUFBLEVBQWlDO0lBQUEsSUFBaENSLEdBQUcsR0FBQUMsU0FBQSxDQUFBQyxNQUFBLFFBQUFELFNBQUEsUUFBQUUsU0FBQSxHQUFBRixTQUFBLE1BQUcsQ0FBQztJQUFBLElBQUVHLEdBQUcsR0FBQUgsU0FBQSxDQUFBQyxNQUFBLFFBQUFELFNBQUEsUUFBQUUsU0FBQSxHQUFBRixTQUFBLE1BQUcsR0FBRztJQUFBLElBQUVRLEtBQUssR0FBQVIsU0FBQSxDQUFBQyxNQUFBLFFBQUFELFNBQUEsUUFBQUUsU0FBQSxHQUFBRixTQUFBLE1BQUcsRUFBRTtJQUN0RCxJQUFJUyxHQUFHLEdBQUcsRUFBRTtJQUNaLEtBQUssSUFBSUMsQ0FBQyxHQUFHLENBQUMsRUFBRUEsQ0FBQyxHQUFHRixLQUFLLEVBQUVFLENBQUMsRUFBRSxFQUFFO01BQzVCRCxHQUFHLENBQUNFLElBQUksQ0FBQ2IsU0FBUyxDQUFDQyxHQUFHLEVBQUVJLEdBQUcsQ0FBQyxDQUFDO0lBQ2pDO0lBQ0EsT0FB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LEtBQUssQ0FBQ1EsUUFBUSxDQUFDQyxJQUFJLENBQUNDLE1BQU0sR0FBR25DLE1BQU0sQ0FBQ0MsbUJBQW1CLENBQUMsc0JBQXNCLENBQUM7TUFFL0VOLFFBQVEsQ0FBQyxDQUFDO01BQ1YrQixRQUFRLENBQUMsQ0FBQztNQUNWRSxRQUFRLENBQUMsQ0FBQztNQUNWRyxRQUFRLENBQUMsQ0FBQztNQUNWSyxRQUFRLENBQUMsQ0FBQztJQUNkO0VBQ0osQ0FBQztBQUNMLENBQUMsQ0FBQyxDQUFDOztBQUVIO0FBQ0FwQyxNQUFNLENBQUMwQyxrQkFBa0IsQ0FBQyxZQUFZO0VBQ2xDOUQsZ0JBQWdCLENBQUM0RCxJQUFJLENBQUMsQ0FBQztBQUMzQixDQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2NvcmUvanMvY3VzdG9tL2RvY3VtZW50YXRpb24vY2hhcnRzL2NoYXJ0anMuanM/ZDI2NCJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcclxuXHJcbi8vIENsYXNzIGRlZmluaXRpb25cclxudmFyIEtUR2VuZXJhbENoYXJ0SlMgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAvLyBSYW5kb21pemVyIGZ1bmN0aW9uXHJcbiAgICBmdW5jdGlvbiBnZXRSYW5kb20obWluID0gMSwgbWF4ID0gMTAwKSB7XHJcbiAgICAgICAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4pICsgbWluKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBnZW5lcmF0ZVJhbmRvbURhdGEobWluID0gMSwgbWF4ID0gMTAwLCBjb3VudCA9IDEwKSB7XHJcbiAgICAgICAgdmFyIGFyciA9IFtdO1xyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY291bnQ7IGkrKykge1xyXG4gICAgICAgICAgICBhcnIucHVzaChnZXRSYW5kb20obWluLCBtYXgpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGFycjtcclxuICAgIH1cclxuXHJcbiAgICAvLyBQcml2YXRlIGZ1bmN0aW9uc1xyXG4gICAgdmFyIGV4YW1wbGUxID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIC8vIERlZmluZSBjaGFydCBlbGVtZW50XHJcbiAgICAgICAgdmFyIGN0eCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdrdF9jaGFydGpzXzEnKTtcclxuXHJcbiAgICAgICAgLy8gRGVmaW5lIGNvbG9yc1xyXG4gICAgICAgIHZhciBwcmltYXJ5Q29sb3IgPSBLVFV0aWwuZ2V0Q3NzVmFyaWFibGVWYWx1ZSgnLS1icy1wcmltYXJ5Jyk7XHJcbiAgICAgICAgdmFyIGRhbmdlckNvbG9yID0gS1RVdGlsLmdldENzc1ZhcmlhYmxlVmFsdWUoJy0tYnMtZGFuZ2VyJyk7XHJcbiAgICAgICAgdmFyIHN1Y2Nlc3NDb2xvciA9IEtUVXRpbC5nZXRDc3NWYXJpYWJsZVZhbHVlKCctLWJzLXN1Y2Nlc3MnKTtcclxuXHJcbiAgICAgICAgLy8gRGVmaW5lIGZvbnRzXHJcbiAgICAgICAgdmFyIGZvbnRGYW1pbHkgPSBLVFV0aWwuZ2V0Q3NzVmFyaWFibGVWYWx1ZSgnLS1icy1mb250LXNhbnMtc2VyaWYnKTtcclxuXHJcbiAgICAgICAgLy8gQ2hhcnQgbGFiZWxzXHJcbiAgICAgICAgY29uc3QgbGFiZWxzID0gWydKYW51YXJ5JywgJ0ZlYnJ1YXJ5JywgJ01hcmNoJywgJ0FwcmlsJywgJ01heScsICdKdW5lJywgJ0p1bHknLCAnQXVndXN0JywgJ1NlcHRlbWJlcicsICdPY3RvYmVyJywgJ05vdmVtYmVyJywgJ0RlY2VtYmVyJ107XHJcblxyXG4gICAgICAgIC8vIENoYXJ0IGRhdGFcclxuICAgICAgICBjb25zdCBkYXRhID0ge1xyXG4gICAgICAgICAgICBsYWJlbHM6IGxhYmVscyxcclxuICAgICAgICAgICAgZGF0YXNldHM6IFtcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBsYWJlbDogJ0RhdGFzZXQgMScsXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YTogZ2VuZXJhdGVSYW5kb21EYXRhKDEsIDEwMCwgMTIpLFxyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogcHJpbWFyeUNvbG9yLFxyXG4gICAgICAgICAgICAgICAgICAgIHN0YWNrOiAnU3RhY2sgMCcsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsOiAnRGF0YXNldCAyJyxcclxuICAgICAgICAgICAgICAgICAgICBkYXRhOiBnZW5lcmF0ZVJhbmRvbURhdGEoMSwgMTAwLCAxMiksXHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBkYW5nZXJDb2xvcixcclxuICAgICAgICAgICAgICAgICAgICBzdGFjazogJ1N0YWNrIDEnLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBsYWJlbDogJ0RhdGFzZXQgMycsXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YTogZ2VuZXJhdGVSYW5kb21EYXRhKDEsIDEwMCwgMTIpLFxyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogc3VjY2Vzc0NvbG9yLFxyXG4gICAgICAgICAgICAgICAgICAgIHN0YWNrOiAnU3RhY2sgMicsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBdXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgLy8gQ2hhcnQgY29uZmlnXHJcbiAgICAgICAgY29uc3QgY29uZmlnID0ge1xyXG4gICAgICAgICAgICB0eXBlOiAnYmFyJyxcclxuICAgICAgICAgICAgZGF0YTogZGF0YSxcclxuICAgICAgICAgICAgb3B0aW9uczoge1xyXG4gICAgICAgICAgICAgICAgcGx1Z2luczoge1xyXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICByZXNwb25zaXZlOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgaW50ZXJhY3Rpb246IHtcclxuICAgICAgICAgICAgICAgICAgICBpbnRlcnNlY3Q6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHNjYWxlczoge1xyXG4gICAgICAgICAgICAgICAgICAgIHg6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3RhY2tlZDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHk6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3RhY2tlZDogdHJ1ZVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIC8vIEluaXQgQ2hhcnRKUyAtLSBmb3IgbW9yZSBpbmZvLCBwbGVhc2UgdmlzaXQ6IGh0dHBzOi8vd3d3LmNoYXJ0anMub3JnL2RvY3MvbGF0ZXN0L1xyXG4gICAgICAgIHZhciBteUNoYXJ0ID0gbmV3IENoYXJ0KGN0eCwgY29uZmlnKTtcclxuICAgIH1cclxuXHJcbiAgICB2YXIgZXhhbXBsZTIgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgLy8gRGVmaW5lIGNoYXJ0IGVsZW1lbnRcclxuICAgICAgICB2YXIgY3R4ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2t0X2NoYXJ0anNfMicpO1xyXG5cclxuICAgICAgICAvLyBEZWZpbmUgY29sb3JzXHJcbiAgICAgICAgdmFyIHByaW1hcnlDb2xvciA9IEtUVXRpbC5nZXRDc3NWYXJpYWJsZVZhbHVlKCctLWJzLXByaW1hcnknKTtcclxuICAgICAgICB2YXIgZGFuZ2VyQ29sb3IgPSBLVFV0aWwuZ2V0Q3NzVmFyaWFibGVWYWx1ZSgnLS1icy1kYW5nZXInKTtcclxuICAgICAgICB2YXIgc3VjY2Vzc0NvbG9yID0gS1RVdGlsLmdldENzc1ZhcmlhYmxlVmFsdWUoJy0tYnMtc3VjY2VzcycpO1xyXG5cclxuICAgICAgICAvLyBEZWZpbmUgZm9udHNcclxuICAgICAgICB2YXIgZm9udEZhbWlseSA9IEtUVXRpbC5nZXRDc3NWYXJpYWJsZVZhbHVlKCctLWJzLWZvbnQtc2Fucy1zZXJpZicpO1xyXG5cclxuICAgICAgICAvLyBDaGFydCBsYWJlbHNcclxuICAgICAgICBjb25zdCBsYWJlbHMgPSBbJ0phbnVhcnknLCAnRmVicnVhcnknLCAnTWFyY2gnLCAnQXByaWwnLCAnTWF5JywgJ0p1bmUnLCAnSnVseSddO1xyXG5cclxuICAgICAgICAvLyBDaGFydCBkYXRhXHJcbiAgICAgICAgY29uc3QgZGF0YSA9IHtcclxuICAgICAgICAgICAgbGFiZWxzOiBsYWJlbHMsXHJcbiAgICAgICAgICAgIGRhdGFzZXRzOiBbXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw6ICdEYXRhc2V0IDEnLFxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IGdlbmVyYXRlUmFuZG9tRGF0YSgxLCA1MCwgNyksXHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyQ29sb3I6IHByaW1hcnlDb2xvcixcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICd0cmFuc3BhcmVudCdcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw6ICdEYXRhc2V0IDInLFxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IGdlbmVyYXRlUmFuZG9tRGF0YSgxLCA1MCwgNyksXHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyQ29sb3I6IGRhbmdlckNvbG9yLFxyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJ3RyYW5zcGFyZW50J1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgXVxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIC8vIENoYXJ0IGNvbmZpZ1xyXG4gICAgICAgIGNvbnN0IGNvbmZpZyA9IHtcclxuICAgICAgICAgICAgdHlwZTogJ2xpbmUnLFxyXG4gICAgICAgICAgICBkYXRhOiBkYXRhLFxyXG4gICAgICAgICAgICBvcHRpb25zOiB7XHJcbiAgICAgICAgICAgICAgICBwbHVnaW5zOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHJlc3BvbnNpdmU6IHRydWUsXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICAvLyBJbml0IENoYXJ0SlMgLS0gZm9yIG1vcmUgaW5mbywgcGxlYXNlIHZpc2l0OiBodHRwczovL3d3dy5jaGFydGpzLm9yZy9kb2NzL2xhdGVzdC9cclxuICAgICAgICB2YXIgbXlDaGFydCA9IG5ldyBDaGFydChjdHgsIGNvbmZpZyk7XHJcbiAgICB9XHJcblxyXG4gICAgdmFyIGV4YW1wbGUzID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIC8vIERlZmluZSBjaGFydCBlbGVtZW50XHJcbiAgICAgICAgdmFyIGN0eCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdrdF9jaGFydGpzXzMnKTtcclxuXHJcbiAgICAgICAgLy8gRGVmaW5lIGNvbG9yc1xyXG4gICAgICAgIHZhciBwcmltYXJ5Q29sb3IgPSBLVFV0aWwuZ2V0Q3NzVmFyaWFibGVWYWx1ZSgnLS1icy1wcmltYXJ5Jyk7XHJcbiAgICAgICAgdmFyIGRhbmdlckNvbG9yID0gS1RVdGlsLmdldENzc1ZhcmlhYmxlVmFsdWUoJy0tYnMtZGFuZ2VyJyk7XHJcbiAgICAgICAgdmFyIHN1Y2Nlc3NDb2xvciA9IEtUVXRpbC5nZXRDc3NWYXJpYWJsZVZhbHVlKCctLWJzLXN1Y2Nlc3MnKTtcclxuICAgICAgICB2YXIgd2FybmluZ0NvbG9yID0gS1RVdGlsLmdldENzc1ZhcmlhYmxlVmFsdWUoJy0tYnMtd2FybmluZycpO1xyXG4gICAgICAgIHZhciBpbmZvQ29sb3IgPSBLVFV0aWwuZ2V0Q3NzVmFyaWFibGVWYWx1ZSgnLS1icy1pbmZvJyk7XHJcblxyXG4gICAgICAgIC8vIENoYXJ0IGxhYmVsc1xyXG4gICAgICAgIGNvbnN0IGxhYmVscyA9IFsnSmFudWFyeScsICdGZWJydWFyeScsICdNYXJjaCcsICdBcHJpbCcsICdNYXknXTtcclxuXHJcbiAgICAgICAgLy8gQ2hhcnQgZGF0YVxyXG4gICAgICAgIGNvbnN0IGRhdGEgPSB7XHJcbiAgICAgICAgICAgIGxhYmVsczogbGFiZWxzLFxyXG4gICAgICAgICAgICBkYXRhc2V0czogW1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsOiAnRGF0YXNldCAxJyxcclxuICAgICAgICAgICAgICAgICAgICBkYXRhOiBnZW5lcmF0ZVJhbmRvbURhdGEoMSwgMTAwLCA1KSxcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFtwcmltYXJ5Q29sb3IsIGRhbmdlckNvbG9yLCBzdWNjZXNzQ29sb3IsIHdhcm5pbmdDb2xvciwgaW5mb0NvbG9yXVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgXVxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIC8vIENoYXJ0IGNvbmZpZ1xyXG4gICAgICAgIGNvbnN0IGNvbmZpZyA9IHtcclxuICAgICAgICAgICAgdHlwZTogJ3BpZScsXHJcbiAgICAgICAgICAgIGRhdGE6IGRhdGEsXHJcbiAgICAgICAgICAgIG9wdGlvbnM6IHtcclxuICAgICAgICAgICAgICAgIHBsdWdpbnM6IHtcclxuICAgICAgICAgICAgICAgICAgICB0aXRsZToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgcmVzcG9uc2l2ZTogdHJ1ZSxcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIC8vIEluaXQgQ2hhcnRKUyAtLSBmb3IgbW9yZSBpbmZvLCBwbGVhc2UgdmlzaXQ6IGh0dHBzOi8vd3d3LmNoYXJ0anMub3JnL2RvY3MvbGF0ZXN0L1xyXG4gICAgICAgIHZhciBteUNoYXJ0ID0gbmV3IENoYXJ0KGN0eCwgY29uZmlnKTtcclxuICAgIH1cclxuXHJcbiAgICB2YXIgZXhhbXBsZTQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgLy8gRGVmaW5lIGNoYXJ0IGVsZW1lbnRcclxuICAgICAgICB2YXIgY3R4ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2t0X2NoYXJ0anNfNCcpO1xyXG5cclxuICAgICAgICAvLyBEZWZpbmUgY29sb3JzXHJcbiAgICAgICAgdmFyIHByaW1hcnlDb2xvciA9IEtUVXRpbC5nZXRDc3NWYXJpYWJsZVZhbHVlKCctLWJzLXByaW1hcnknKTtcclxuICAgICAgICB2YXIgZGFuZ2VyQ29sb3IgPSBLVFV0aWwuZ2V0Q3NzVmFyaWFibGVWYWx1ZSgnLS1icy1kYW5nZXInKTtcclxuICAgICAgICB2YXIgZGFuZ2VyTGlnaHRDb2xvciA9IEtUVXRpbC5nZXRDc3NWYXJpYWJsZVZhbHVlKCctLWJzLWxpZ2h0LWRhbmdlcicpO1xyXG5cclxuICAgICAgICAvLyBEZWZpbmUgZm9udHNcclxuICAgICAgICB2YXIgZm9udEZhbWlseSA9IEtUVXRpbC5nZXRDc3NWYXJpYWJsZVZhbHVlKCctLWJzLWZvbnQtc2Fucy1zZXJpZicpO1xyXG5cclxuICAgICAgICAvLyBDaGFydCBsYWJlbHNcclxuICAgICAgICBjb25zdCBsYWJlbHMgPSBbJ0phbnVhcnknLCAnRmVicnVhcnknLCAnTWFyY2gnLCAnQXByaWwnLCAnTWF5JywgJ0p1bmUnLCAnSnVseScsICdBdWd1c3QnLCAnU2VwdGVtYmVyJywgJ09jdG9iZXInLCAnTm92ZW1iZXInLCAnRGVjZW1iZXInXTtcclxuXHJcbiAgICAgICAgLy8gQ2hhcnQgZGF0YVxyXG4gICAgICAgIGNvbnN0IGRhdGEgPSB7XHJcbiAgICAgICAgICAgIGxhYmVsczogbGFiZWxzLFxyXG4gICAgICAgICAgICBkYXRhc2V0czogW1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsOiAnRGF0YXNldCAxJyxcclxuICAgICAgICAgICAgICAgICAgICBkYXRhOiBnZW5lcmF0ZVJhbmRvbURhdGEoNTAsIDEwMCwgMTIpLFxyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlckNvbG9yOiBwcmltYXJ5Q29sb3IsXHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAndHJhbnNwYXJlbnQnLFxyXG4gICAgICAgICAgICAgICAgICAgIHN0YWNrOiAnY29tYmluZWQnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsOiAnRGF0YXNldCAyJyxcclxuICAgICAgICAgICAgICAgICAgICBkYXRhOiBnZW5lcmF0ZVJhbmRvbURhdGEoMSwgNjAsIDEyKSxcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IGRhbmdlckNvbG9yLFxyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlckNvbG9yOiBkYW5nZXJDb2xvcixcclxuICAgICAgICAgICAgICAgICAgICBzdGFjazogJ2NvbWJpbmVkJyxcclxuICAgICAgICAgICAgICAgICAgICB0eXBlOiAnYmFyJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBdXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgLy8gQ2hhcnQgY29uZmlnXHJcbiAgICAgICAgY29uc3QgY29uZmlnID0ge1xyXG4gICAgICAgICAgICB0eXBlOiAnbGluZScsXHJcbiAgICAgICAgICAgIGRhdGE6IGRhdGEsXHJcbiAgICAgICAgICAgIG9wdGlvbnM6IHtcclxuICAgICAgICAgICAgICAgIHBsdWdpbnM6IHtcclxuICAgICAgICAgICAgICAgICAgICB0aXRsZToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgcmVzcG9uc2l2ZTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIGludGVyYWN0aW9uOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaW50ZXJzZWN0OiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBzY2FsZXM6IHtcclxuICAgICAgICAgICAgICAgICAgICB5OiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YWNrZWQ6IHRydWVcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGRlZmF1bHRzOiB7XHJcbiAgICAgICAgICAgICAgICBmb250OiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZmFtaWx5OiAnaW5oZXJpdCcsXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICAvLyBJbml0IENoYXJ0SlMgLS0gZm9yIG1vcmUgaW5mbywgcGxlYXNlIHZpc2l0OiBodHRwczovL3d3dy5jaGFydGpzLm9yZy9kb2NzL2xhdGVzdC9cclxuICAgICAgICB2YXIgbXlDaGFydCA9IG5ldyBDaGFydChjdHgsIGNvbmZpZyk7XHJcbiAgICB9XHJcblxyXG4gICAgdmFyIGV4YW1wbGU1ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIC8vIERlZmluZSBjaGFydCBlbGVtZW50XHJcbiAgICAgICAgdmFyIGN0eCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdrdF9jaGFydGpzXzUnKTtcclxuXHJcbiAgICAgICAgLy8gRGVmaW5lIGNvbG9yc1xyXG4gICAgICAgIHZhciBpbmZvQ29sb3IgPSBLVFV0aWwuZ2V0Q3NzVmFyaWFibGVWYWx1ZSgnLS1icy1pbmZvJyk7XHJcbiAgICAgICAgdmFyIGluZm9MaWdodENvbG9yID0gS1RVdGlsLmdldENzc1ZhcmlhYmxlVmFsdWUoJy0tYnMtbGlnaHQtaW5mbycpO1xyXG4gICAgICAgIHZhciB3YXJuaW5nQ29sb3IgPSBLVFV0aWwuZ2V0Q3NzVmFyaWFibGVWYWx1ZSgnLS1icy13YXJuaW5nJyk7XHJcbiAgICAgICAgdmFyIHdhcm5pbmdMaWdodENvbG9yID0gS1RVdGlsLmdldENzc1ZhcmlhYmxlVmFsdWUoJy0tYnMtbGlnaHQtd2FybmluZycpO1xyXG4gICAgICAgIHZhciBwcmltYXJ5Q29sb3IgPSBLVFV0aWwuZ2V0Q3NzVmFyaWFibGVWYWx1ZSgnLS1icy1wcmltYXJ5Jyk7XHJcbiAgICAgICAgdmFyIHByaW1hcnlMaWdodENvbG9yID0gS1RVdGlsLmdldENzc1ZhcmlhYmxlVmFsdWUoJy0tYnMtbGlnaHQtcHJpbWFyeScpO1xyXG5cclxuICAgICAgICAvLyBEZWZpbmUgZm9udHNcclxuICAgICAgICB2YXIgZm9udEZhbWlseSA9IEtUVXRpbC5nZXRDc3NWYXJpYWJsZVZhbHVlKCctLWJzLWZvbnQtc2Fucy1zZXJpZicpO1xyXG5cclxuICAgICAgICAvLyBDaGFydCBsYWJlbHNcclxuICAgICAgICBjb25zdCBsYWJlbHMgPSBbJ0phbnVhcnknLCAnRmVicnVhcnknLCAnTWFyY2gnLCAnQXByaWwnLCAnTWF5JywgJ0p1bmUnXTtcclxuXHJcbiAgICAgICAgLy8gQ2hhcnQgZGF0YVxyXG4gICAgICAgIGNvbnN0IGRhdGEgPSB7XHJcbiAgICAgICAgICAgIGxhYmVsczogbGFiZWxzLFxyXG4gICAgICAgICAgICBkYXRhc2V0czogW1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsOiAnRGF0YXNldCAxJyxcclxuICAgICAgICAgICAgICAgICAgICBkYXRhOiBnZW5lcmF0ZVJhbmRvbURhdGEoMjAsIDgwLCA2KSxcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXJDb2xvcjogaW5mb0NvbG9yLFxyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogaW5mb0xpZ2h0Q29sb3IsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsOiAnRGF0YXNldCAyJyxcclxuICAgICAgICAgICAgICAgICAgICBkYXRhOiBnZW5lcmF0ZVJhbmRvbURhdGEoMTAsIDYwLCA2KSxcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IHdhcm5pbmdMaWdodENvbG9yLFxyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlckNvbG9yOiB3YXJuaW5nQ29sb3IsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsOiAnRGF0YXNldCAzJyxcclxuICAgICAgICAgICAgICAgICAgICBkYXRhOiBnZW5lcmF0ZVJhbmRvbURhdGEoMCwgODAsIDYpLFxyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogcHJpbWFyeUxpZ2h0Q29sb3IsXHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyQ29sb3I6IHByaW1hcnlDb2xvcixcclxuICAgICAgICAgICAgICAgIH0sICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBdXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgLy8gQ2hhcnQgY29uZmlnXHJcbiAgICAgICAgY29uc3QgY29uZmlnID0ge1xyXG4gICAgICAgICAgICB0eXBlOiAncmFkYXInLFxyXG4gICAgICAgICAgICBkYXRhOiBkYXRhLFxyXG4gICAgICAgICAgICBvcHRpb25zOiB7XHJcbiAgICAgICAgICAgICAgICBwbHVnaW5zOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHJlc3BvbnNpdmU6IHRydWUsXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICAvLyBJbml0IENoYXJ0SlMgLS0gZm9yIG1vcmUgaW5mbywgcGxlYXNlIHZpc2l0OiBodHRwczovL3d3dy5jaGFydGpzLm9yZy9kb2NzL2xhdGVzdC9cclxuICAgICAgICB2YXIgbXlDaGFydCA9IG5ldyBDaGFydChjdHgsIGNvbmZpZyk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICAvLyBQdWJsaWMgRnVuY3Rpb25zXHJcbiAgICAgICAgaW5pdDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAvLyBHbG9iYWwgZm9udCBzZXR0aW5nczogaHR0cHM6Ly93d3cuY2hhcnRqcy5vcmcvZG9jcy9sYXRlc3QvZ2VuZXJhbC9mb250cy5odG1sXHJcbiAgICAgICAgICAgIENoYXJ0LmRlZmF1bHRzLmZvbnQuc2l6ZSA9IDEzO1xyXG4gICAgICAgICAgICBDaGFydC5kZWZhdWx0cy5mb250LmZhbWlseSA9IEtUVXRpbC5nZXRDc3NWYXJpYWJsZVZhbHVlKCctLWJzLWZvbnQtc2Fucy1zZXJpZicpO1xyXG5cclxuICAgICAgICAgICAgZXhhbXBsZTEoKTtcclxuICAgICAgICAgICAgZXhhbXBsZTIoKTtcclxuICAgICAgICAgICAgZXhhbXBsZTMoKTtcclxuICAgICAgICAgICAgZXhhbXBsZTQoKTtcclxuICAgICAgICAgICAgZXhhbXBsZTUoKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG59KCk7XHJcblxyXG4vLyBPbiBkb2N1bWVudCByZWFkeVxyXG5LVFV0aWwub25ET01Db250ZW50TG9hZGVkKGZ1bmN0aW9uICgpIHtcclxuICAgIEtUR2VuZXJhbENoYXJ0SlMuaW5pdCgpO1xyXG59KTtcclxuIl0sIm5hbWVzIjpbIktUR2VuZXJhbENoYXJ0SlMiLCJnZXRSYW5kb20iLCJtaW4iLCJhcmd1bWVudHMiLCJsZW5ndGgiLCJ1bmRlZmluZWQiLCJtYXgiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJnZW5lcmF0ZVJhbmRvbURhdGEiLCJjb3VudCIsImFyciIsImkiLCJwdXNoIiwiZXhhbXBsZTEiLCJjdHgiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwicHJpbWFyeUNvbG9yIiwiS1RVdGlsIiwiZ2V0Q3NzVmFyaWFibGVWYWx1ZSIsImRhbmdlckNvbG9yIiwic3VjY2Vzc0NvbG9yIiwiZm9udEZhbWlseSIsImxhYmVscyIsImRhdGEiLCJkYXRhc2V0cyIsImxhYmVsIiwiYmFja2dyb3VuZENvbG9yIiwic3RhY2siLCJjb25maWciLCJ0eXBlIiwib3B0aW9ucyIsInBsdWdpbnMiLCJ0aXRsZSIsImRpc3BsYXkiLCJyZXNwb25zaXZlIiwiaW50ZXJhY3Rpb24iLCJpbnRlcnNlY3QiLCJzY2FsZXMiLCJ4Iiwic3RhY2tlZCIsInkiLCJteUNoYXJ0IiwiQ2hhcnQiLCJleGFtcGxlMiIsImJvcmRlckNvbG9yIiwiZXhhbXBsZTMiLCJ3YXJuaW5nQ29sb3IiLCJpbmZvQ29sb3IiLCJleGFtcGxlNCIsImRhbmdlckxpZ2h0Q29sb3IiLCJkZWZhdWx0cyIsImZvbnQiLCJmYW1pbHkiLCJleGFtcGxlNSIsImluZm9MaWdodENvbG9yIiwid2FybmluZ0xpZ2h0Q29sb3IiLCJwcmltYXJ5TGlnaHRDb2xvciIsImluaXQiLCJzaXplIiwib25ET01Db250ZW50TG9hZGVkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./resources/assets/core/js/custom/documentation/charts/chartjs.js\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./resources/assets/core/js/custom/documentation/charts/chartjs.js"]();
/******/ 	
/******/ })()
;