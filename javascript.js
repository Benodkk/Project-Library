let myLibrary=[];

let mainTable=document.querySelector('.mainTable')

let popUpForm=document.querySelector('.popUp')

let add=document.querySelector('#add')

let newBookBtnActive=1;

// form popping out button
let newBookBtn = document.querySelector('.newBtn');
newBookBtn.addEventListener('click', () => {
  if (newBookBtnActive==0){
    popUpForm.style.display = 'block';
    newBookBtnActive=1;
  }
  else if (newBookBtnActive==1){
    popUpForm.style.display = 'none'
    newBookBtnActive=0;
  }
});

let form = document.getElementById('bookForm')

// form validation

const bookTitle = document.getElementById('bookTitle')
const authorr = document.getElementById('author')
const pagess = document.getElementById('pages')

function formValidity(){
  console.log('dupa')
  if (bookTitle.validity.valueMissing) {
    bookTitle.setCustomValidity('Give the book title')
    bookTitle.reportValidity();
  }
  else {
    bookTitle.setCustomValidity('')
  }

  if (authorr.validity.valueMissing) {
    authorr.setCustomValidity('Give the book author')
    authorr.reportValidity();
  }
  else {
    authorr.setCustomValidity('')
  }

  if (pagess.validity.valueMissing) {
    pagess.setCustomValidity('How many pages the book have?')
    pagess.reportValidity();
  }
  else {
    pagess.setCustomValidity('')
  }
} 


class Book {
  constructor(title, author, pages, read){
    this.title=title;
    this.author=author;
    this.pages=pages;
    this.read=read;
    myLibrary.push(title)
    myLibrary.push(author)
    myLibrary.push(pages)
    myLibrary.push(read)
  }
}

add.addEventListener('click', () => {
  event.preventDefault();
  if (bookTitle.validity.valueMissing || authorr.validity.valueMissing || pagess.validity.valueMissing){
    formValidity()
  }
  else{ 
  title=form.elements['bookTitle'].value;
  author=form.elements['author'].value;
  pages=form.elements['pages'].value;
  readOrNot=form.elements['read'].checked;
  if (readOrNot==false){
    read='Not Read'
  }
  else if (readOrNot==true){
    read='Read'
  }
  new Book(title, author, pages, read);
  segregation()
  }


}
)




let preventDuplication = 0;
let line = 0;

function segregation(){
    let oneBook = document.createElement('div');
    mainTable.appendChild(oneBook);
    oneBook.classList.add('oneBook')


    for (let i=0; i<myLibrary.length; i++){
      if(i%4==0){
        let oneTitle = document.createElement("div");
        oneBook.appendChild(oneTitle)  
        oneTitle.textContent=myLibrary[i];
        oneTitle.classList.add('one')
      }
      else if(i%4==1){
        let oneAuthor = document.createElement("div");
        oneBook.appendChild(oneAuthor)  
        oneAuthor.textContent=myLibrary[i];
        oneAuthor.classList.add('one')
      }
      else if(i%4==2){
        let onePages = document.createElement("div");
        oneBook.appendChild(onePages)  
        onePages.textContent=myLibrary[i];
        onePages.classList.add('one')
      }
      else if(i%4==3){
        let oneRead = document.createElement("button");
        oneBook.appendChild(oneRead)  
        oneRead.textContent=myLibrary[i];
        oneRead.classList.add('one')
        if(readOrNot==true){
          oneRead.style.backgroundColor='rgb(68, 187, 68)'
        }
        else if(readOrNot==false){
          oneRead.style.backgroundColor='rgb(255, 62, 62)'
        }
        oneRead.addEventListener('click', () => {
          if(oneRead.textContent=="Not Read"){
            oneRead.style.backgroundColor='rgb(68, 187, 68)'
            oneRead.textContent="Read"
          }
          else if(oneRead.textContent=="Read"){
            oneRead.style.backgroundColor='rgb(255, 62, 62)'
            oneRead.textContent='Not Read'
          }
        })
      }
    }

    let delateLineBtn = document.createElement('button')
    delateLineBtn.textContent='DELETE'
    delateLineBtn.classList.add('one')
    oneBook.appendChild(delateLineBtn)

    delateLineBtn.addEventListener('click', () => {
      oneBook.remove()
    })
    myLibrary=[]
  }

