const SweetAlert = (title, showCancelButton, cancelButtonText, confirmButtonText, doFunc = () => {}) => {
    Swal.fire({
        title: title,
        showCancelButton: showCancelButton,
        cancelButtonText: cancelButtonText,
        confirmButtonText: confirmButtonText,
        confirmButtonColor: '#0d6efd',
      }).then((result) => {
        if (result.isConfirmed) {
            doFunc()
        }
      })
}