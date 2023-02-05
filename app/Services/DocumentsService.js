import { appState } from "../AppState.js"
import { Document } from "../Models/Document.js"
import { EventEmitter } from "../Utils/EventEmitter.js"
import { saveState } from "../Utils/Store.js"


class DocumentsService {

    drawDocument(id) {
        const docIndex = appState.documents.findIndex(e => e.id == id)
        appState.document = appState.documents[docIndex]
    }
    createDocument(formData) {
        let newDate = this.createDate()
        let newDoc = new Document({ title: formData.title, color: formData.color, dateCreated: newDate, dateUpdated: newDate })
        appState.documents.push(newDoc)
        appState.emit('documents')
        saveState('documents', appState.documents)
    }

    deleteDocument(id) {
        const docIndex = appState.documents.findIndex(e => e.id == id)
        appState.documents.splice(docIndex, 1)
        appState.emit('documents')
        saveState('documents', appState.documents)
    }

    createDate() {
        let date = new Date()
        let day = date.getDate()
        let month = date.getMonth() + 1
        let year = date.getFullYear()
        let hour = null
        let minutes = date.getMinutes()
        let hourAndMinutes = null

        if (minutes < 10) {
            minutes = `0${minutes}`
        }
        if (date.getHours() % 12) {
            hour = (date.getHours() % 12).toString()
            hourAndMinutes = `${hour}:${minutes} PM`
        } else {
            hour = date.getHours().toString()
            hourAndMinutes = `${hour}:${minutes} AM`
        }
        return `${month}/${day}/${year} | ${hourAndMinutes}`
    }

    saveDocument(formData) {
        appState.document.dateUpdated = this.createDate()
        appState.document.body = formData.body
        saveState('documents', appState.documents)
    }
}

export const documentService = new DocumentsService()