const path = require('path');

class DefaultController {

	index(req, res) {

		res.render('productList', {
			title: "Product",
			content: "Default: index"
		});
	}

	detail(req, res) {

		res.render('productDetail', {
			title: "Product",
			content: "Default: index"
		});
	}
}

module.exports = new DefaultController();