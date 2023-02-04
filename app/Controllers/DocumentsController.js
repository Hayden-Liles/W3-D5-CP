import { appState } from "../AppState.js";
import { setHTML } from "../Utils/Writer.js";
import { getFormData } from "../Utils/FormHandler.js";
import { documentService } from "../Services/DocumentsService.js"


export class DocumentsController{
  constructor(){
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
  drawDocument(){
    let template = appState.document.documentHTML
    setHTML('main-container', template)
  }

  // STUB create & delete
  createDocument(){
    window.event.preventDefault()
    const form = window.event.target
    let formData = getFormData(form)
    documentService.createDocument(formData)
  }

  deleteDocument(id){
    documentService.deleteDocument(id)
  }

}

