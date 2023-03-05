export default {
    template:`
      <div class="modal fade" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <slot name="header">
                <h1 class="modal-title fs-5" id="staticBackdropLabel">Header</h1>                
              </slot>              
            </div>
            <div class="modal-body">
              <slot name="body">
                body
              </slot>
            </div>
            <div class="modal-footer">
              <slot name="footer">
                footer
              </slot>
            </div>
          </div>
        </div>
      </div>
    `    
}