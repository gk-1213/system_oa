export function setToken(key,token) {
	return window.sessionStorage.setItem(key, token)
}

export function getToken(key) {
	return window.sessionStorage.getItem(key)
}

export function removeToken(key) {
	return window.sessionStorage.removeItem(key)
}
