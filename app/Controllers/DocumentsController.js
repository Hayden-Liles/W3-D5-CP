import { appState } from "../AppState.js";
import { removeAttributes, setAttributes, setHTML, setText } from "../Utils/Writer.js";
import { getFormData } from "../Utils/FormHandler.js";
import { documentService } from "../Services/DocumentsService.js"
import { saveState } from "../Utils/Store.js";
import { Pop } from "../Utils/Pop.js";


export class DocumentsController{
  constructor(){
    this.drawDocuments()
    setText('doc-header', `Create New Doc: ${appState.documents.length}`)
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

  async deleteDocument(id){
    try {
      const confirmation = await Pop.confirm('Are you sure you want to delete this?')
      if(confirmation){
        documentService.deleteDocument(id)
        setText('doc-header', `Create New Doc: ${appState.documents.length}`)
      }else{
        return
      }
    } catch (error) {
      return
    }
  }

  saveDocument(){
    window.event.preventDefault()
    const form = window.event.target
    let formData = getFormData(form)
    documentService.saveDocument(formData)
  }

}

