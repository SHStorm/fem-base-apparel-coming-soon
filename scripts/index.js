const EMAIL_REGEX = /^\S+@\S+\.\S+$/; // custom email regex (not precise)

const $form = document.getElementById('form');
const $email = $form.elements.namedItem('email');
const $error = document.getElementById('error');

$form.setAttribute('novalidate', '');

$form.addEventListener('submit', e => {
    e.preventDefault();

    const error = validate(new FormData($form));
    if (error) {
        showError(error);
        $email.focus();
    } else {
        hideError();
    }
});

function validate(formData) {
    const email = formData.get('email');

    if (email.trim() === '') {
        return 'Please provide your email';
    } else if (!EMAIL_REGEX.test(email)) {
        return 'Please provide valid email';
    }

    return null;
}

function showError(error) {
    $email.classList.add('invalid');
    $error.textContent = error;
    $error.hidden = false;
}

function hideError() {
    $email.classList.remove('invalid');
    $error.textContent = '';
    $error.hidden = true;
}
