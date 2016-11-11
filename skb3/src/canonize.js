export default function canonize(url) {
  // TODO custom domain name
  if (!url) {
    return 'Invalid username';
  }
  const re = new RegExp('@?(https?:)?(\/\/)?(www\.)?((github|twitter|telegram|vk|vkontakte)[^\/]*\/)?([a-zA-Z0-9.]*)', 'i');
  const username = url.match(re);
  console.log(username);
  if (!username[6]) {
    return 'Invalid username';
  }
  return '@' + username[6];
}
