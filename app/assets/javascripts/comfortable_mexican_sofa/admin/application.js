// Overwrite this file in your application /app/assets/javascripts/comfortable_mexican_sofa/admin/application.js 

 //= require tinymce
 window.CMS.wysiwyg = function() {
     tinymce.init({
	    selector: "textarea",
	    theme: "modern",
	    plugins: ["code"],
	    toolbar1: "insertfile undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image",
	    toolbar2: "print preview media | forecolor backcolor emoticons",
	    image_advtab: true,
	    templates: [
	        {title: 'Test template 1', content: 'Test 1'},
	        {title: 'Test template 2', content: 'Test 2'}
	    ]

	});
 };