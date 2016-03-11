if (Meteor.isClient) {
  Template.editor.rendered = function () {
    $('#summernote').summernote({
      height: 200
    });
  };
}
