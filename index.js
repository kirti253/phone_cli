/**
 * make phone cli
 *create
  take data from user
  write it in json file

   * read()
 * read file from file system
 * check data existence
 * if not show error
 * if yes show data
 * show index along with todo content
 */

const fs = require("fs");
const { Command } = require("commander");

function readContact() {
  const content = fs.readFileSync("todos.json", "utf-8");
  const arrayOfObject = JSON.parse(content);
  return arrayOfObject;
}
function writeContact(arrayOfObject) {
  fs.writeFileSync("todos.json", JSON.stringify(arrayOfObject));
}
const program = new Command();
program.name("contact").description("conatact info").version("0.0.1");

program
  .command("list")
  .description("list contact")
  .action(() => {
    const arrayOfObject = readContact();
    console.log(arrayOfObject);
  });

program
  .command("add")
  .description("add contact")
  .argument("<name>", "username")
  .argument("<phone>", "phone number")
  .action((name, phone) => {
    const arrayOfObject = readContact();
    arrayOfObject.push({ name: name, contact: phone });
    console.log({ name, phone });
    writeContact(arrayOfObject);
  });

program
  .command("delete")
  .description("delete contact")
  .argument("id", "id of task")
  .action((id) => {
    const arrayOfObject = readContact();
    if (arrayOfObject[id]) {
      arrayOfObject.splice[id];
      writeContact(arrayOfObject);
      console.log("contact successfully deleted");
    } else {
      console.log("contact not exist");
    }
  });

program
  .command("update")
  .description("update contact")
  .argument("<id>", "id of contact")
  .argument("<name>", "username")
  .argument("<phone>", "phone number")
  .action((id, name, phone) => {
    const arrayOfObject = readContact();
    if (arrayOfObject[id]) {
      arrayOfObject[id] = { name, phone };
      writeContact(arrayOfObject);
      console.log("contact successfully updated");
    } else {
      console.log("contact not exist");
    }
  });
program.parse();
