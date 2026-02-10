# Copyright (c) 2015, Frappe Technologies Pvt. Ltd. and Contributors
# License: MIT. See LICENSE

import frappe

sitemap = 1


def get_context(context):
	context.doc = frappe.get_cached_doc("About Us Settings")
<<<<<<< HEAD

=======
	if context.doc.is_disabled:
		frappe.local.flags.redirect_location = "/404"
		raise frappe.Redirect
>>>>>>> 46ae36b1285e64328b8ba9047871f2589ae8ee96
	return context
