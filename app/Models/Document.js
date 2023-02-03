import { generateId } from "../Utils/generateId.js"


export class Document{
  constructor(data){
    this.id = data.id || generateId()
    this.title = data.title
    this.color = data.color || '#ffffff'
    this.body = data.body || ''
    this.dateCreated = data.dateCreated
    this.dateUpdated = data.dateUpdated
  }

  get documentsHTML(){
    return`
    <div class="card d-flex justify-content-center text-center">
      <p class="p-1 ps-2 card-bg">${this.name}<i class="fa-solid fa-circle-dot px-2" id="dot-img" style="color: ${this.color}"></i></p>
    </div>
    `
  }

  get documentHTML(){
    return`
    <div class="row bg-dark mt-5 py-5 justify-content-center">
      <div class="col-3 pt-2" id="doc-info-container">
        <div>
          <p>${this.title}</p>
          <p>Created: ${this.dateCreated}</p>
          <p>Updated: ${this.dateUpdated}</p>
        </div>
      </div>
      <div class="col-7 text-center">
        <textarea name="text-area" id="text-area" cols="70">${this.body}</textarea>
      </div>
    </div>
    `
  }


}