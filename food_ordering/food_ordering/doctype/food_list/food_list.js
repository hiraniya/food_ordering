// Copyright (c) 2022, hiraniya and contributors
// For license information, please see license.txt

frappe.ui.form.on('Food List', {
	after_save: function(frm) {
		frappe.call({
				method:"food_ordering.food_ordering.doctype.food_list.food_list.item",
				args: {
							 "item_code":cur_frm.doc.name,
							 "prize":cur_frm.doc.prize,
							
						 },
						 callback(r){
				 console.log("fdgdg")
				}
			   })
	}
});
