const { get_conf } = require("../node_utils");
const conf = get_conf();

function get_url(socket, path) {
	if (!path) {
		path = "";
	}
	// Call the local Frappe webserver over loopback instead of the request's
	// Origin hostname — the site name is passed separately via the
	// X-Frappe-Site-Name header, so this doesn't depend on that hostname
	// being resolvable from this process (dev domains, no public DNS, etc.).
	return `http://127.0.0.1:${conf.webserver_port}${path}`;
}

module.exports = {
	get_url,
};
