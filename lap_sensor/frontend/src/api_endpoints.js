const JWT_AUTH = '/auth-jwt/'
const SENSOR = '/sensor/'

const api_endpoints = {
    login: JWT_AUTH,
    check_login: SENSOR + 'current_user/',
    all_readings: SENSOR + 'reading/',
    login_page: '/login/',
    logout: '/logout/'
}

export default api_endpoints