// contactform validation with jquery validation plugin, https://jqueryvalidation.org/
$(document).ready(function () {
    $("form").validate({
        debug: true,
        rules: {
            fname: {
              lettersonly: true,
              required: true,
              minlength: 2

            },
            lname: {
                lettersonlywithslash: true,
                required: true,
                minlength: 2
            },
            han: {
                hannumber: true,
                required: true,
                minlength: 7
            },
            email: {
                required: true,
                email: true
            },
            phone: {
                required: false,
                digits: true,
                minlength: 11
            }
        },
        messages: {
            fname: {
                required: "*Required name",
                minlength: " Must be at least {0} characters."
            },
            fname: {
                required: "*Required name",
                minlength: " Must be at least {0} characters."
            },
            han: {
                required: "*Required Health Authory Number",
                minlength: "Must be at least {0} characters."
            },
            email: {
                required: "*Required Email address"
            },
            phone: {
                digits: "Only digits accepted",
                minlength: "A minimum of {0} digits are required."
            }
        }
    });
  jQuery.validator.addMethod("lettersonly", function(value, element) {
  return this.optional(element) || /^[a-z]+$/i.test(value);
  }, "Add letters only");

  jQuery.validator.addMethod("lettersonlywithslash", function(value, element) {
  return this.optional(element) || /^[a-z-]+$/i.test(value);
}, "Add letters only or slash between names");

  jQuery.validator.addMethod("hannumber", function(value, element) {
  return this.optional(element) || /^(ZHA)\d{6}$/.test(value);
  }, "starts with 'ZHA' and 6 digits after");
});
