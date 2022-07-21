// Copyright (c) 2016, xyz and contributors
// For license information, please see license.txt

frappe.ui.form.on('Item dms', {

  author: function(frm){

  let cat_name = frm.doc.cat_name;

   if(author){
    frappe.call({
     method: "dms.dms.doctype.item_dms.item_dms.get_attribute_category",
     args: {cat_name: cat_name}
    }).done((r) => {

   frm.doc.my_article = []

   $.each(r.message, function(_i, e){
   let entry = frm.add_child("item_character");
   entry.article_name = e.name;
 })
 refresh_field("item_character")

  })
 }

}

});
