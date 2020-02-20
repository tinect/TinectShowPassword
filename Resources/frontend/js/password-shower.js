window.addEventListener("load", function () {
    const fields = document.querySelectorAll('input[type="password"]');
    if (fields.length) {
        [].forEach.call(fields, function (field) {
            passwordShower.init(field);
        });
    }
});

const passwordShower = {
    init: function (el) {
        if (el.classList.contains('has--password-shower')) {
            return;
        }
        const me = this;

        if (window.getComputedStyle(el.parentElement).getPropertyValue('position') !== 'relative') {
            el.parentElement.classList.add('is--relative');
        }

        el.classList.add('has--password-shower');

        const passwordShower = document.createElement('div');
        passwordShower.classList.add('password-shower', 'is--hidden', 'icon-tsp-eye');
        passwordShower.setAttribute('title', showPasswordTexts.show);

        passwordShower.addEventListener("click", function () {
            me.changePasswordType(el, passwordShower);
        });

        me.insertAfter(passwordShower, el);

        me.togglePasswordShower(passwordShower, el);

        el.addEventListener("keyup", function () {
            me.togglePasswordShower(passwordShower, el);
        });
    },

    togglePasswordShower: function (passwordShower, passwordField) {
        if (passwordField.value !== '') {
            passwordShower.classList.remove('is--hidden');
        } else {
            passwordShower.classList.add('is--hidden');
        }
    },

    changePasswordType: function (el, passwordShower) {
        const currentType = el.getAttribute('type');
        if (currentType === 'password') {
            el.setAttribute('type', 'text');
            passwordShower.classList.add('icon-tsp-eyeoff');
            passwordShower.classList.remove('icon-tsp-eye');
            passwordShower.setAttribute('title', showPasswordTexts.hide);
        } else {
            el.setAttribute('type', 'password');
            passwordShower.classList.add('icon-tsp-eye');
            passwordShower.classList.remove('icon-tsp-eyeoff');
            passwordShower.setAttribute('title', showPasswordTexts.show);
        }
    },

    insertAfter: function (newElement, targetElement) {
        /* https://stackoverflow.com/a/50066247 */
        const parent = targetElement.parentNode;
        if (parent.lastChild === targetElement) {
            parent.appendChild(newElement);
        } else {
            parent.insertBefore(newElement, targetElement.nextSibling);
        }
    }
};

