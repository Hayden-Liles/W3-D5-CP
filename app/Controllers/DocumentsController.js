import { appState } from "../AppState.js";
import { removeAttributes, setAttributes, setHTML, setText } from "../Utils/Writer.js";
import { getFormData } from "../Utils/FormHandler.js";
import { documentService } from "../Services/DocumentsService.js"
import { saveState } from "../Utils/Store.js";


export class DocumentsController{
  constructor(){
    this.drawDocuments()
    appState.on('documents', this.drawDocuments)
  }

  // STUB for the Document(s)
  drawDocuments(){
    let template = ''
    appState.documents.forEach(e => {
      template += e.documentsHTML
    })
    setHTML('documents-container', template)
  }

  // STUB for the Document
  drawDocument(id){
    documentService.drawDocument(id)
    let template = appState.document.documentHTML
    setHTML('main-container', template)
    removeAttributes('main-container', 'hidden')
    setAttributes('default-container', 'hidden', 'true')
  }

  // STUB create & delete
  createDocument(){
    window.event.preventDefault()
    const form = window.event.target
    let formData = getFormData(form)
    documentService.createDocument(formData)
    setText('doc-header', `Create New Doc: ${appState.documents.length}`)
  }

  deleteDocument(id){
    documentService.deleteDocument(id)
  }

  saveDocument(){
    window.event.preventDefault()
    const form = window.event.target
    let formData = getFormData(form)
    documentService.saveDocument(formData)
  }

}

