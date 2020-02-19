window.addEventListener("load", function () {
    const fields = document.querySelectorAll('input[type="password"]');

    if (fields.length) {
        [].forEach.call(fields, function (field) {
            addPasswordShower(field);
        });
    }
});

function addPasswordShower(el) {
    if (el.classList.contains('has--password-shower')) {
        return;
    }

    el.classList.add('has--password-shower');

    const passwordShower = document.createElement('div');
    passwordShower.classList.add('password-shower', 'is--hidden');
    passwordShower.textContent = showPasswordTexts.show;

    passwordShower.addEventListener("click", function () {
        changePasswordType(el, passwordShower);
    });

    insertAfter(passwordShower, el);

    togglePasswordShower(passwordShower, el);

    el.addEventListener("keyup", function () {
        togglePasswordShower(passwordShower, el);
    });
}

function togglePasswordShower(passwordShower, passwordField) {
    if (passwordField.value !== '') {
        passwordShower.classList.remove('is--hidden');
    } else {
        passwordShower.classList.add('is--hidden');
    }
}

function changePasswordType(el, passwordShower) {
    const currentType = el.getAttribute('type');
    if (currentType === 'password') {
        el.setAttribute('type', 'text');
        passwordShower.textContent = showPasswordTexts.hide;
    } else {
        el.setAttribute('type', 'password');
        passwordShower.textContent = showPasswordTexts.show;
    }
}

/* https://stackoverflow.com/a/50066247 */
function insertAfter(newElement, targetElement) {
    const parent = targetElement.parentNode;
    if (parent.lastChild === targetElement) {
        parent.appendChild(newElement);
    } else {
        parent.insertBefore(newElement, targetElement.nextSibling);
    }
}
