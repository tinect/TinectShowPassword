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

        if (el.parentElement.style.position !== 'relative') {
            el.parentElement.style.position = 'relative';
        }

        el.classList.add('has--password-shower');

        const passwordShower = document.createElement('div');
        passwordShower.classList.add('password-shower', 'is--hidden');
        passwordShower.textContent = showPasswordTexts.show;

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
            passwordShower.textContent = showPasswordTexts.hide;
        } else {
            el.setAttribute('type', 'password');
            passwordShower.textContent = showPasswordTexts.show;
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

