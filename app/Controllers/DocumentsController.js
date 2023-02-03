import { appState } from "../AppState.js";


export class DocumentsController{
  constructor()

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
}