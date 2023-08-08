class Modals {


  // Call the function to create and add the modal to the body

  
}

class EventModal {
  constructor(){
    const options = [
      { value: 'dmedicine', label: 'Medicine' },
      { value: 'sselling', label: 'Selling' },
      { value: 'gshopping', label: 'Shopping' },
    ];

    const categorises = [
      { value: '', label: 'No category' },
      { value: 'sselling', label: 'Selling' },
      { value: 'gshopping', label: 'Shopping' },
    ];

    const access = [
      { value: '0', label: 'Private' },
      { value: '1', label: 'Restricted' },
      { value: '2', label: 'Public' },
    ];

    const status = [
      { value: '0', label: 'Inactive' },
      { value: '1', label: 'Active' },
      { value: '2', label: 'Archieved' },
    ];

    const format = [
      { value: '0', label: 'Text' },
      { value: '1', label: 'HTML' },
    ];

    // const textInput = createFormField('Title:', 'evt_title', 'title', 'text', [], 'Default Title');
    // const textareaInput = createFormField('Content:', 'evt_content', 'content', 'textarea', [], 'Default Content');
    // const selectInput = createFormField('Section:', 'evt_section', 'section', 'select', options);
    // const checkboxInput = createFormField('Starred:', 'evt_starred', 'starred', 'checkbox', [], '1');
    // const rangeInput = createFormField('Importance:', 'evt_importance', 'importance', 'range', [], '2');
    // const dateInput = createFormField('Set Date:', 'evt_setdate', 'setdate', 'date');

    this.fields = [];
    this.fields.push(this.createFormField('Title:', 'evt_title', 'title', 'text', [], 'Default Title'));
    this.fields.push(this.createFormField('Content:', 'evt_content', 'content', 'textarea', [], 'Default Content'));
    this.fields.push(this.createFormField('Section:', 'evt_section', 'section', 'select', options));
    this.fields.push(this.createFormField('Category:', 'evt_category', 'category', 'select', categorises));
    this.fields.push(this.createFormField('Importance:', 'evt_importance', 'importance', 'range', [], '2'));
    this.fields.push(this.createFormField('Set Date:', 'evt_setdate', 'setdate', 'date'));
    this.fields.push(this.createFormField('Access:', 'evt_access', 'access', 'select', access));
    this.fields.push(this.createFormField('Status:', 'evt_status', 'status', 'select', status));
    this.fields.push(this.createFormField('Starred:', 'evt_starred', 'starred', 'checkbox', [], '1', true));
    this.fields.push(this.createFormField('Pinned:', 'evt_pinned', 'pinned', 'checkbox', [], '0', true));
    this.fields.push(this.createFormField('Locked:', 'evt_locked', 'locked', 'checkbox', [], '0', true));
    this.fields.push(this.createFormField('Format:', 'evt_format', 'format', 'select', format));
    
    this.modalBody = this.modalEventEditor(this.fields);
  }

  get()
  {
    return this.modalBody;
  }

  modalEventEditor(elements = []) {
    // Create the modal container
    const modalContainer = document.createElement('div');
    modalContainer.id = 'modalHtmlEditor';
    modalContainer.classList.add('uk-modal-container');
    modalContainer.setAttribute('uk-modal', '');
    modalContainer.setAttribute('bg-close', 'false');
  
    // Modal close button
    const modalCloseButton = document.createElement('button');
    modalCloseButton.classList.add('uk-modal-close-full', 'uk-close-large');
    modalCloseButton.setAttribute('type', 'button');
    modalCloseButton.setAttribute('uk-close', '');
    modalCloseButton.style.background = 'none';
  
    // Modal dialog
    const modalDialog = document.createElement('div');
    modalDialog.classList.add('uk-modal-dialog');
  
    // Modal close button inside dialog
    const modalCloseButtonInsideDialog = document.createElement('button');
    modalCloseButtonInsideDialog.classList.add('uk-modal-close-default');
    modalCloseButtonInsideDialog.setAttribute('type', 'button');
    modalCloseButtonInsideDialog.setAttribute('uk-close', '');
  
    // Modal header
    const modalHeader = document.createElement('div');
    modalHeader.classList.add('uk-modal-header');
  
    const modalTitle = document.createElement('h2');
    modalTitle.classList.add('uk-modal-title');
    modalTitle.textContent = 'Headline';
  
    // Modal body
    const modalBody = document.createElement('div');
    modalBody.classList.add('uk-modal-body');
    modalBody.setAttribute('uk-overflow-auto', '');
  
    // Modal form
    const modalForm = document.createElement('form');
    modalForm.classList.add('uk-form-stacked', 'uk-margin-large');
    modalForm.setAttribute('method', 'POST');
    modalForm.setAttribute('action', 'submit.php');
  
    // Modal form fields and elements (omitted for brevity)
  
    // Modal footer
    const modalFooter = document.createElement('div');
    modalFooter.classList.add('uk-modal-footer', 'uk-text-right');
  
    const cancelButton = document.createElement('button');
    cancelButton.classList.add('uk-button', 'uk-button-default', 'uk-modal-close');
    cancelButton.setAttribute('type', 'button');
    cancelButton.textContent = 'Cancel';
  
    const saveButton = document.createElement('button');
    saveButton.classList.add('uk-button', 'uk-button-primary');
    saveButton.id = 'eventor_act_saveEvent';
    saveButton.setAttribute('type', 'button');
    saveButton.textContent = 'Save';
  
    // Append all elements together to create the modal structure
    modalHeader.appendChild(modalTitle);
    for (let i = 0 ; i < elements.length; i++)
    {
      modalForm.appendChild(elements[i]);
    }
   // modalForm.appendChild(/* Add your form fields and elements here */);
    modalBody.appendChild(modalForm);
    modalFooter.appendChild(cancelButton);
    modalFooter.appendChild(saveButton);
    modalDialog.appendChild(modalCloseButtonInsideDialog);
    modalDialog.appendChild(modalHeader);
    modalDialog.appendChild(modalBody);
    modalDialog.appendChild(modalFooter);
    modalContainer.appendChild(modalCloseButton);
    modalContainer.appendChild(modalDialog);
  
    // Append the modal container to the body
    return modalContainer;
  }
  


  createFormField(labelText, id, name, type, options = [], defaultValue = '', hasLabel = true) {
    const divElement = document.createElement('div');
    divElement.classList.add('uk-margin');
  
      const labelElement = document.createElement('label');
      labelElement.classList.add('uk-form-label');
      labelElement.setAttribute('for', id);
      labelElement.textContent = labelText;

  
    const formControls = document.createElement('div');
    formControls.classList.add('uk-form-controls');
  
    let inputElement;
  
    switch (type) {
      case 'text':
      case 'date':
        inputElement = document.createElement('input');
        inputElement.classList.add('uk-input');
        inputElement.setAttribute('type', type);
        inputElement.id = id;
        inputElement.name = name;
        inputElement.value = defaultValue;
        break;
      case 'textarea':
        inputElement = document.createElement('textarea');
        inputElement.classList.add('uk-textarea');
        inputElement.id = id;
        inputElement.name = name;
        inputElement.rows = '6';
        inputElement.textContent = defaultValue;
        break;
      case 'select':
        inputElement = document.createElement('select');
        inputElement.classList.add('uk-select');
        inputElement.id = id;
        inputElement.name = name;
  
        options.forEach(option => {
          const optionElement = document.createElement('option');
          optionElement.value = option.value;
          optionElement.textContent = option.label;
          inputElement.appendChild(optionElement);
        });
  
        break;
      case 'checkbox':
        inputElement = document.createElement('input');
        inputElement.classList.add('uk-checkbox');
        inputElement.setAttribute('type', 'checkbox');
        inputElement.id = id;
        inputElement.name = name;
        inputElement.value = defaultValue;
        //labelElement.appendChild(inputElement);
        break;
      case 'range':
        inputElement = document.createElement('input');
        inputElement.classList.add('uk-range');
        inputElement.setAttribute('type', 'range');
        inputElement.setAttribute('min', '0');
        inputElement.setAttribute('max', '5');
        inputElement.setAttribute('step', '1');
        inputElement.id = id;
        inputElement.setAttribute('aria-label', 'Range');
        inputElement.name = name;
        inputElement.value = defaultValue;
        break;
      default:
        break;
    }
  
    formControls.appendChild(inputElement);
    divElement.appendChild(labelElement);
    divElement.appendChild(formControls);
  
    return divElement;
  }


 

}








class SettingsModal
{
  constructor(){

  }


  get(){
    let result = `<div id="modal-full" class="uk-modal-full" uk-modal>
        <div class="uk-modal-dialog">
            <button class="uk-modal-close-full uk-close-large" type="button" uk-close></button>
            <div class="uk-grid-collapse uk-child-width-1-2@s uk-flex-middle" uk-grid>
                <div class="uk-background-cover" style="background-image: url('images/photo.jpg');" uk-height-viewport></div>
                <div class="uk-padding-large">
                    <h1>Headline</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
            </div>
        </div>
    </div>`;

    return result;
  }
}