module.exports = {
    EMAIL_PATTERN: RegExp('([a-zA-Z0-9._-]{2,})+([@]+[a-zA-Z0-9._-]{2,})+([\.]+[a-z]{2,5}$)'),
    PASSWORD_PATTERN: RegExp('(?=.*\\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9ñ]{8,12}$'),
    NAME_PATTERN: RegExp('[0-9a-zA-ZÑñáéíóúÁÉÍÓÚ ]+[0-9a-zA-ZÑñáéíóúÁÉÍÓÚ]{2,50}'),
    PHONE_PATTERN: RegExp('[0-9]{8,14}')
};