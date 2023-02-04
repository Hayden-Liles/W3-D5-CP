import { appState } from "../AppState.js"
import { Document } from "../Models/Document.js"
import { EventEmitter } from "../Utils/EventEmitter.js"


class DocumentsService{
    createDocument(formData){
        let newDoc = new Document({title: formData.title, color: formData.color})
        appState.documents.push(newDoc)
        appState.emit('documents')
    }

    deleteDocument(id){
        const docIndex = appState.documents.findIndex(e => e.id == id)
        appState.documents.splice(docIndex, 1)
        appState.emit('documents')
    }
}

export const documentService = new DocumentsService()