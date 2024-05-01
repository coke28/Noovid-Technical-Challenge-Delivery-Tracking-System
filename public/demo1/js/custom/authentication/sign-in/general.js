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

/***/ "./resources/assets/extended/js/custom/authentication/sign-in/general.js":
/*!*******************************************************************************!*\
  !*** ./resources/assets/extended/js/custom/authentication/sign-in/general.js ***!
  \*******************************************************************************/
/***/ (() => {

eval("\n\n// Class definition\nvar KTSigninGeneral = function () {\n  // Elements\n  var form;\n  var submitButton;\n  var validator;\n\n  // Handle form\n  var handleForm = function handleForm(e) {\n    // Init form validation rules. For more info check the FormValidation plugin's official documentation:https://formvalidation.io/\n    validator = FormValidation.formValidation(form, {\n      fields: {\n        'email': {\n          validators: {\n            notEmpty: {\n              message: 'Email address is required'\n            },\n            emailAddress: {\n              message: 'The value is not a valid email address'\n            }\n          }\n        },\n        'password': {\n          validators: {\n            notEmpty: {\n              message: 'The password is required'\n            },\n            callback: {\n              message: 'Please enter valid password'\n            }\n          }\n        }\n      },\n      plugins: {\n        trigger: new FormValidation.plugins.Trigger(),\n        bootstrap: new FormValidation.plugins.Bootstrap5({\n          rowSelector: '.fv-row',\n          eleInvalidClass: '',\n          eleValidClass: ''\n        })\n      }\n    });\n\n    // Handle form submit\n    submitButton.addEventListener('click', function (e) {\n      // Prevent button default action\n      e.preventDefault();\n\n      // Validate form\n      validator.validate().then(function (status) {\n        if (status === 'Valid') {\n          // Show loading indication\n          submitButton.setAttribute('data-kt-indicator', 'on');\n\n          // Disable button to avoid multiple click\n          submitButton.disabled = true;\n\n          // Simulate ajax request\n          axios.post(submitButton.closest('form').getAttribute('action'), new FormData(form)).then(function (response) {\n            // Show message popup. For more info check the plugin's official documentation: https://sweetalert2.github.io/\n            Swal.fire({\n              text: \"You have successfully logged in!\",\n              icon: \"success\",\n              buttonsStyling: false,\n              confirmButtonText: \"Ok, got it!\",\n              customClass: {\n                confirmButton: \"btn btn-primary\"\n              }\n            }).then(function (result) {\n              if (result.isConfirmed) {\n                form.querySelector('[name=\"email\"]').value = \"\";\n                form.querySelector('[name=\"password\"]').value = \"\";\n                window.location.reload();\n              }\n            });\n          })[\"catch\"](function (error) {\n            var dataMessage = error.response.data.message;\n            var dataErrors = error.response.data.errors;\n            for (var errorsKey in dataErrors) {\n              if (!dataErrors.hasOwnProperty(errorsKey)) continue;\n              dataMessage += \"\\r\\n\" + dataErrors[errorsKey];\n            }\n            if (error.response) {\n              Swal.fire({\n                text: dataMessage,\n                icon: \"error\",\n                buttonsStyling: false,\n                confirmButtonText: \"Ok, got it!\",\n                customClass: {\n                  confirmButton: \"btn btn-primary\"\n                }\n              });\n            }\n          }).then(function () {\n            // always executed\n            // Hide loading indication\n            submitButton.removeAttribute('data-kt-indicator');\n\n            // Enable button\n            submitButton.disabled = false;\n          });\n        } else {\n          // Show error popup. For more info check the plugin's official documentation: https://sweetalert2.github.io/\n          Swal.fire({\n            text: \"Sorry, looks like there are some errors detected, please try again.\",\n            icon: \"error\",\n            buttonsStyling: false,\n            confirmButtonText: \"Ok, got it!\",\n            customClass: {\n              confirmButton: \"btn btn-primary\"\n            }\n          });\n        }\n      });\n    });\n  };\n\n  // Public functions\n  return {\n    // Initialization\n    init: function init() {\n      form = document.querySelector('#kt_sign_in_form');\n      submitButton = document.querySelector('#kt_sign_in_submit');\n      handleForm();\n    }\n  };\n}();\n\n// On document ready\nKTUtil.onDOMContentLoaded(function () {\n  KTSigninGeneral.init();\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZXNvdXJjZXMvYXNzZXRzL2V4dGVuZGVkL2pzL2N1c3RvbS9hdXRoZW50aWNhdGlvbi9zaWduLWluL2dlbmVyYWwuanMiLCJtYXBwaW5ncyI6IkFBQWE7O0FBRWI7QUFDQSxJQUFJQSxlQUFlLEdBQUcsWUFBWTtFQUM5QjtFQUNBLElBQUlDLElBQUk7RUFDUixJQUFJQyxZQUFZO0VBQ2hCLElBQUlDLFNBQVM7O0VBRWI7RUFDQSxJQUFJQyxVQUFVLEdBQUcsU0FBYkEsVUFBVUEsQ0FBYUMsQ0FBQyxFQUFFO0lBQzFCO0lBQ0FGLFNBQVMsR0FBR0csY0FBYyxDQUFDQyxjQUFjLENBQ3JDTixJQUFJLEVBQ0o7TUFDSU8sTUFBTSxFQUFFO1FBQ0osT0FBTyxFQUFFO1VBQ0xDLFVBQVUsRUFBRTtZQUNSQyxRQUFRLEVBQUU7Y0FDTkMsT0FBTyxFQUFFO1lBQ2IsQ0FBQztZQUNEQyxZQUFZLEVBQUU7Y0FDVkQsT0FBTyxFQUFFO1lBQ2I7VUFDSjtRQUNKLENBQUM7UUFDRCxVQUFVLEVBQUU7VUFDUkYsVUFBVSxFQUFFO1lBQ1JDLFFBQVEsRUFBRTtjQUNOQyxPQUFPLEVBQUU7WUFDYixDQUFDO1lBQ0RFLFFBQVEsRUFBRTtjQUNORixPQUFPLEVBQUU7WUFDYjtVQUNKO1FBQ0o7TUFDSixDQUFDO01BQ0RHLE9BQU8sRUFBRTtRQUNMQyxPQUFPLEVBQUUsSUFBSVQsY0FBYyxDQUFDUSxPQUFPLENBQUNFLE9BQU8sQ0FBQyxDQUFDO1FBQzdDQyxTQUFTLEVBQUUsSUFBSVgsY0FBYyxDQUFDUSxPQUFPLENBQUNJLFVBQVUsQ0FBQztVQUM3Q0MsV0FBVyxFQUFFLFNBQVM7VUFDdEJDLGVBQWUsRUFBRSxFQUFFO1VBQ25CQyxhQUFhLEVBQUU7UUFDbkIsQ0FBQztNQUNMO0lBQ0osQ0FDSixDQUFDOztJQUVEO0lBQ0FuQixZQUFZLENBQUNvQixnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsVUFBVWpCLENBQUMsRUFBRTtNQUNoRDtNQUNBQSxDQUFDLENBQUNrQixjQUFjLENBQUMs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QUFRLENBQUNkLGFBQWEsQ0FBQyxrQkFBa0IsQ0FBQztNQUNqRDNDLFlBQVksR0FBR3lELFFBQVEsQ0FBQ2QsYUFBYSxDQUFDLG9CQUFvQixDQUFDO01BRTNEekMsVUFBVSxDQUFDLENBQUM7SUFDaEI7RUFDSixDQUFDO0FBQ0wsQ0FBQyxDQUFDLENBQUM7O0FBRUg7QUFDQXdELE1BQU0sQ0FBQ0Msa0JBQWtCLENBQUMsWUFBWTtFQUNsQzdELGVBQWUsQ0FBQzBELElBQUksQ0FBQyxDQUFDO0FBQzFCLENBQUMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvZXh0ZW5kZWQvanMvY3VzdG9tL2F1dGhlbnRpY2F0aW9uL3NpZ24taW4vZ2VuZXJhbC5qcz81YjgxIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xyXG5cclxuLy8gQ2xhc3MgZGVmaW5pdGlvblxyXG52YXIgS1RTaWduaW5HZW5lcmFsID0gZnVuY3Rpb24gKCkge1xyXG4gICAgLy8gRWxlbWVudHNcclxuICAgIHZhciBmb3JtO1xyXG4gICAgdmFyIHN1Ym1pdEJ1dHRvbjtcclxuICAgIHZhciB2YWxpZGF0b3I7XHJcblxyXG4gICAgLy8gSGFuZGxlIGZvcm1cclxuICAgIHZhciBoYW5kbGVGb3JtID0gZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAvLyBJbml0IGZvcm0gdmFsaWRhdGlvbiBydWxlcy4gRm9yIG1vcmUgaW5mbyBjaGVjayB0aGUgRm9ybVZhbGlkYXRpb24gcGx1Z2luJ3Mgb2ZmaWNpYWwgZG9jdW1lbnRhdGlvbjpodHRwczovL2Zvcm12YWxpZGF0aW9uLmlvL1xyXG4gICAgICAgIHZhbGlkYXRvciA9IEZvcm1WYWxpZGF0aW9uLmZvcm1WYWxpZGF0aW9uKFxyXG4gICAgICAgICAgICBmb3JtLFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBmaWVsZHM6IHtcclxuICAgICAgICAgICAgICAgICAgICAnZW1haWwnOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlkYXRvcnM6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vdEVtcHR5OiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogJ0VtYWlsIGFkZHJlc3MgaXMgcmVxdWlyZWQnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZW1haWxBZGRyZXNzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogJ1RoZSB2YWx1ZSBpcyBub3QgYSB2YWxpZCBlbWFpbCBhZGRyZXNzJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAncGFzc3dvcmQnOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlkYXRvcnM6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vdEVtcHR5OiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogJ1RoZSBwYXNzd29yZCBpcyByZXF1aXJlZCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICdQbGVhc2UgZW50ZXIgdmFsaWQgcGFzc3dvcmQnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHBsdWdpbnM6IHtcclxuICAgICAgICAgICAgICAgICAgICB0cmlnZ2VyOiBuZXcgRm9ybVZhbGlkYXRpb24ucGx1Z2lucy5UcmlnZ2VyKCksXHJcbiAgICAgICAgICAgICAgICAgICAgYm9vdHN0cmFwOiBuZXcgRm9ybVZhbGlkYXRpb24ucGx1Z2lucy5Cb290c3RyYXA1KHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcm93U2VsZWN0b3I6ICcuZnYtcm93JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZWxlSW52YWxpZENsYXNzOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZWxlVmFsaWRDbGFzczogJydcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgICAgLy8gSGFuZGxlIGZvcm0gc3VibWl0XHJcbiAgICAgICAgc3VibWl0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgLy8gUHJldmVudCBidXR0b24gZGVmYXVsdCBhY3Rpb25cclxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgICAgICAgLy8gVmFsaWRhdGUgZm9ybVxyXG4gICAgICAgICAgICB2YWxpZGF0b3IudmFsaWRhdGUoKS50aGVuKGZ1bmN0aW9uIChzdGF0dXMpIHtcclxuICAgICAgICAgICAgICAgIGlmIChzdGF0dXMgPT09ICdWYWxpZCcpIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBTaG93IGxvYWRpbmcgaW5kaWNhdGlvblxyXG4gICAgICAgICAgICAgICAgICAgIHN1Ym1pdEJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ2RhdGEta3QtaW5kaWNhdG9yJywgJ29uJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vIERpc2FibGUgYnV0dG9uIHRvIGF2b2lkIG11bHRpcGxlIGNsaWNrXHJcbiAgICAgICAgICAgICAgICAgICAgc3VibWl0QnV0dG9uLmRpc2FibGVkID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gU2ltdWxhdGUgYWpheCByZXF1ZXN0XHJcbiAgICAgICAgICAgICAgICAgICAgYXhpb3MucG9zdChzdWJtaXRCdXR0b24uY2xvc2VzdCgnZm9ybScpLmdldEF0dHJpYnV0ZSgnYWN0aW9uJyksIG5ldyBGb3JtRGF0YShmb3JtKSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBTaG93IG1lc3NhZ2UgcG9wdXAuIEZvciBtb3JlIGluZm8gY2hlY2sgdGhlIHBsdWdpbidzIG9mZmljaWFsIGRvY3VtZW50YXRpb246IGh0dHBzOi8vc3dlZXRhbGVydDIuZ2l0aHViLmlvL1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgU3dhbC5maXJlKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiBcIllvdSBoYXZlIHN1Y2Nlc3NmdWxseSBsb2dnZWQgaW4hXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWNvbjogXCJzdWNjZXNzXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnV0dG9uc1N0eWxpbmc6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbmZpcm1CdXR0b25UZXh0OiBcIk9rLCBnb3QgaXQhXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VzdG9tQ2xhc3M6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uZmlybUJ1dHRvbjogXCJidG4gYnRuLXByaW1hcnlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLnRoZW4oZnVuY3Rpb24gKHJlc3VsdCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXN1bHQuaXNDb25maXJtZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9ybS5xdWVyeVNlbGVjdG9yKCdbbmFtZT1cImVtYWlsXCJdJykudmFsdWUgPSBcIlwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3JtLnF1ZXJ5U2VsZWN0b3IoJ1tuYW1lPVwicGFzc3dvcmRcIl0nKS52YWx1ZSA9IFwiXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgLmNhdGNoKGZ1bmN0aW9uIChlcnJvcikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGRhdGFNZXNzYWdlID0gZXJyb3IucmVzcG9uc2UuZGF0YS5tZXNzYWdlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGRhdGFFcnJvcnMgPSBlcnJvci5yZXNwb25zZS5kYXRhLmVycm9ycztcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IGVycm9yc0tleSBpbiBkYXRhRXJyb3JzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFkYXRhRXJyb3JzLmhhc093blByb3BlcnR5KGVycm9yc0tleSkpIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFNZXNzYWdlICs9IFwiXFxyXFxuXCIgKyBkYXRhRXJyb3JzW2Vycm9yc0tleV07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGVycm9yLnJlc3BvbnNlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgU3dhbC5maXJlKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDogZGF0YU1lc3NhZ2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGljb246IFwiZXJyb3JcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnV0dG9uc1N0eWxpbmc6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25maXJtQnV0dG9uVGV4dDogXCJPaywgZ290IGl0IVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXN0b21DbGFzczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uZmlybUJ1dHRvbjogXCJidG4gYnRuLXByaW1hcnlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGFsd2F5cyBleGVjdXRlZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gSGlkZSBsb2FkaW5nIGluZGljYXRpb25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN1Ym1pdEJ1dHRvbi5yZW1vdmVBdHRyaWJ1dGUoJ2RhdGEta3QtaW5kaWNhdG9yJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gRW5hYmxlIGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3VibWl0QnV0dG9uLmRpc2FibGVkID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBTaG93IGVycm9yIHBvcHVwLiBGb3IgbW9yZSBpbmZvIGNoZWNrIHRoZSBwbHVnaW4ncyBvZmZpY2lhbCBkb2N1bWVudGF0aW9uOiBodHRwczovL3N3ZWV0YWxlcnQyLmdpdGh1Yi5pby9cclxuICAgICAgICAgICAgICAgICAgICBTd2FsLmZpcmUoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiBcIlNvcnJ5LCBsb29rcyBsaWtlIHRoZXJlIGFyZSBzb21lIGVycm9ycyBkZXRlY3RlZCwgcGxlYXNlIHRyeSBhZ2Fpbi5cIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWNvbjogXCJlcnJvclwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBidXR0b25zU3R5bGluZzogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbmZpcm1CdXR0b25UZXh0OiBcIk9rLCBnb3QgaXQhXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1c3RvbUNsYXNzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25maXJtQnV0dG9uOiBcImJ0biBidG4tcHJpbWFyeVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gUHVibGljIGZ1bmN0aW9uc1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICAvLyBJbml0aWFsaXphdGlvblxyXG4gICAgICAgIGluaXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNrdF9zaWduX2luX2Zvcm0nKTtcclxuICAgICAgICAgICAgc3VibWl0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2t0X3NpZ25faW5fc3VibWl0Jyk7XHJcblxyXG4gICAgICAgICAgICBoYW5kbGVGb3JtKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxufSgpO1xyXG5cclxuLy8gT24gZG9jdW1lbnQgcmVhZHlcclxuS1RVdGlsLm9uRE9NQ29udGVudExvYWRlZChmdW5jdGlvbiAoKSB7XHJcbiAgICBLVFNpZ25pbkdlbmVyYWwuaW5pdCgpO1xyXG59KTtcclxuIl0sIm5hbWVzIjpbIktUU2lnbmluR2VuZXJhbCIsImZvcm0iLCJzdWJtaXRCdXR0b24iLCJ2YWxpZGF0b3IiLCJoYW5kbGVGb3JtIiwiZSIsIkZvcm1WYWxpZGF0aW9uIiwiZm9ybVZhbGlkYXRpb24iLCJmaWVsZHMiLCJ2YWxpZGF0b3JzIiwibm90RW1wdHkiLCJtZXNzYWdlIiwiZW1haWxBZGRyZXNzIiwiY2FsbGJhY2siLCJwbHVnaW5zIiwidHJpZ2dlciIsIlRyaWdnZXIiLCJib290c3RyYXAiLCJCb290c3RyYXA1Iiwicm93U2VsZWN0b3IiLCJlbGVJbnZhbGlkQ2xhc3MiLCJlbGVWYWxpZENsYXNzIiwiYWRkRXZlbnRMaXN0ZW5lciIsInByZXZlbnREZWZhdWx0IiwidmFsaWRhdGUiLCJ0aGVuIiwic3RhdHVzIiwic2V0QXR0cmlidXRlIiwiZGlzYWJsZWQiLCJheGlvcyIsInBvc3QiLCJjbG9zZXN0IiwiZ2V0QXR0cmlidXRlIiwiRm9ybURhdGEiLCJyZXNwb25zZSIsIlN3YWwiLCJmaXJlIiwidGV4dCIsImljb24iLCJidXR0b25zU3R5bGluZyIsImNvbmZpcm1CdXR0b25UZXh0IiwiY3VzdG9tQ2xhc3MiLCJjb25maXJtQnV0dG9uIiwicmVzdWx0IiwiaXNDb25maXJtZWQiLCJxdWVyeVNlbGVjdG9yIiwidmFsdWUiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsInJlbG9hZCIsImVycm9yIiwiZGF0YU1lc3NhZ2UiLCJkYXRhIiwiZGF0YUVycm9ycyIsImVycm9ycyIsImVycm9yc0tleSIsImhhc093blByb3BlcnR5IiwicmVtb3ZlQXR0cmlidXRlIiwiaW5pdCIsImRvY3VtZW50IiwiS1RVdGlsIiwib25ET01Db250ZW50TG9hZGVkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./resources/assets/extended/js/custom/authentication/sign-in/general.js\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./resources/assets/extended/js/custom/authentication/sign-in/general.js"]();
/******/ 	
/******/ })()
;