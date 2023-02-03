import { DocumentsController } from "./Controllers/DocumentsController.js";
import { ValuesController } from "./Controllers/ValuesController.js";

class App {
  // valuesController = new ValuesController();
  documentsController = new DocumentsController()
}

window["app"] = new App();
