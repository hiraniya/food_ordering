# Copyright (c) 2022, hiraniya and contributors
# For license information, please see license.txt

import frappe
import json
from frappe.model.document import Document

class FoodOrder(Document):
	pass

@frappe.whitelist()
def customer(customer, add1, add2, city, phone):
	doc=frappe.new_doc("Customer")
	doc.update({
		"customer_name":customer,
        "address_1":add1,
        "address_2":add2,
		"city":city,
		"customer_phone":phone,
		
	})
	doc.save(ignore_permissions=True)
	# return item(item_table)



@frappe.whitelist()
def sales_order(table, customer):

    table=json.loads(table)
    doc=frappe.new_doc("Sales Invoice")
    item_code=[]
    for i in range(0,len(table)):
        
        item=table[i]["food_item"]
        qty=table[i]["total_qty"]
        rate=table[i]["prize"]
        item_code.append({
            "item_code":item,
            "qty":qty,
            "rate":rate
        })
    

    frappe.errprint(item)
    doc.update({
            "customer":customer,
            "items":item_code,
        })
    doc.save(ignore_permissions=True)
				

# @frappe.whitelist()
# def payment(payment, self):
# 	   self.party_type="Customer"
           