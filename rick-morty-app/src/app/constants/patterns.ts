export const EMAIL_PATTERN: string = '([a-zA-Z0-9._-]{2,})+([@]+[a-zA-Z0-9._-]{2,})+([\.]+[a-z]{2,5}$)';
export const PASSWORD_PATTERN: string = '(?=.*\\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9ñ]{8,12}';
export const PASSWORD_LOGIN_PATTERN: string = '[a-zA-Z0-9ñ]{8,12}';
export const NAME_PATTERN: string = '([0-9a-zA-ZÑñáéíóúÁÉÍÓÚ ]){3,50}';
export const PHONE_PATTERN: string = '[0-9]{8,14}';
