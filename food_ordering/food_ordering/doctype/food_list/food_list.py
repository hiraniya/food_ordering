# Copyright (c) 2022, hiraniya and contributors
# For license information, please see license.txt

import frappe
from frappe.model.document import Document

class FoodList(Document):
	pass


@frappe.whitelist()
def item(item_code, prize):

	doc=frappe.new_doc("Item")
	doc.update({
			"item_code":item_code,
			"standard_rate":prize,
		})
	doc.save(ignore_permissions=True)
