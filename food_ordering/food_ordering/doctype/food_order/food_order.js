// Copyright (c) 2022, hiraniya and contributors
// For license information, please see license.txt

frappe.ui.form.on('Food Order', {
	item: function() {
		cur_frm.save()

	},
	item1: function() {
		cur_frm.save()

	},
	before_submit: function() {
      if(cur_frm.doc.customer_name){
		frappe.call({
			method:"food_ordering.food_ordering.doctype.food_order.food_order.customer",
			args: {
						 
						 "customer":cur_frm.doc.customer_name,
						 "add1":cur_frm.doc.address_1,
						 "add2":cur_frm.doc.address_2,
						 "city":cur_frm.doc.city,
					     "phone":cur_frm.doc.phone,
						 "item_table":cur_frm.doc.hd,
						
					 },
				
		   })
	  }	
	  
	},
	on_submit: function(frm, cdt, cdn) {
	var d = locals[cdt][cdn];
	var total = 0;
	frm.doc.hd.forEach(function (d) { total += d.total_amount; });
	cur_frm.set_value("total_payable_amount", total);
	refresh_field("total_payable_amount");

	frappe.call({
		method:"food_ordering.food_ordering.doctype.food_order.food_order.sales_order",
		args: { 
			 "customer":cur_frm.doc.customer_name,
			 "table":cur_frm.doc.hd,

			},
			callback(r){
				frm.add_custom_button(__('payment'), function () {
					frappe.set_route("Form", "Payment Entry",
					"new-payment-entry-1")
					
			   })
			   }
	   })
	  
	}

	  
});



function t_amount(frm,cdt,cdn){
	let row=locals[cdt][cdn];
	   let tot_amount=row.prize * row.total_qty
			   frappe.model.set_value(cdt, cdn, "total_amount", tot_amount);
			
	   
   }
   
   
frappe.ui.form.on('Enter Your Food List', {
	prize:function(frm,cdt,cdn){
	   t_amount(frm,cdt,cdn);
   },
   total_qty:function(frm,cdt,cdn){
	   t_amount(frm,cdt,cdn);
   },
   food_item:function(frm,cdt,cdn){
	t_amount(frm,cdt,cdn);
},
   })