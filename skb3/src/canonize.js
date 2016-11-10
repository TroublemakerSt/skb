export default function canonize(url) {
	// TODO custom domain name
	const re = new RegExp('@?(https?:)?(\/\/)?(www\.)?((github|telegram|vk|vkontakte)[^\/]*\/)?([a-zA-Z0-9]*)', 'i');
	const username = url.match(re);
	console.log(username);
	return '@' + username [6];
}
