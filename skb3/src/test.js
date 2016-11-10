import canonize from './canonize';

const array = [
	'https://telegram.me/troublemakerst',
	'https://telegrqwe.me/troublemakerst',
	'https://telegrqwe.me/troublemakerst112',
	'Https://Telegram.me/troublemakerst',
	'Https://Telegram.mE/TroublemakerSt',
	'https://Telegram.me/troublemakerst',
	'//telegram.me/troublemakerst',
	'http://telegram.me/troublemakerst',
	'telegram.me/troublemakerst',
	'troublemakerst',
	'@troublemakerst',
	'https://vk.com/troublemakerst',
	'http://vk.com/troublemakerst',
	'//vk.com/troublemakerst',
	'vk.com/troublemakerst',
	'vk.com/troublemakerst?w=wall-117903599_1076',
	'vk.com/troublemakerst/profile',
];

array.forEach ((url) => {
	const username = canonize(url);
	console.log(username[6]);
})
