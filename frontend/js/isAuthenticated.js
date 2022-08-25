vendasApp.factory('isAuthenticated', isAutenticated);
function isAutenticated(AuthService) {
	const token = AuthService.getToken();
	return token;
}