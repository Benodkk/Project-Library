let myLibrary=[];

let titleContainer=document.querySelector(".titleContainer")
let authorContainer=document.querySelector(".authorContainer")
let pagesContainer=document.querySelector(".pagesContainer")
let readContainer=document.querySelector(".readContainer")
let delateLine=document.querySelector('.delateLine')

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

function Book(title, author, pages, read){
  this.title=title;
  this.author=author;
  this.pages=pages;
  this.read=read;
  myLibrary.push(title)
  myLibrary.push(author)
  myLibrary.push(pages)
  myLibrary.push(read)
}


add.addEventListener('click', () => {
  event.preventDefault();
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
  console.log(myLibrary)
}
)

let preventDuplication = 0;
let line = 0;

function segregation(){

  for(let i=0; i<myLibrary.length; i++){
    if (preventDuplication==1){
      titleContainer.textContent='Title:'
      authorContainer.textContent='Author:'
      pagesContainer.textContent='Pages:'
      readContainer.textContent='Read/Not Read:'
      preventDuplication=0
    }

    if(i%4==0){
      let titleDiv = document.createElement("div");
      titleContainer.appendChild(titleDiv)  
      titleDiv.textContent=myLibrary[i];
    }
    else if(i%4==1){
      let authorDiv = document.createElement("div");
      authorContainer.appendChild(authorDiv)  
      authorDiv.textContent=myLibrary[i];
    }
    else if(i%4==2){
      let pagesDiv = document.createElement("div");
      pagesContainer.appendChild(pagesDiv)  
      pagesDiv.textContent=myLibrary[i];
    }
    else if(i%4==3){
      let readDiv = document.createElement("div");
      readContainer.appendChild(readDiv)  
      readDiv.textContent=myLibrary[i];


    }
  }
  preventDuplication=1;
  line+=1



  let delateLineBtn = document.createElement('button')
  delateLineBtn.innerHTML='DELETE'
  delateLine.appendChild(delateLineBtn)
  delateLineBtn.classList.add(`${line}`)


  function dupaa () {
    let masakra=Number(delateLineBtn.classList.value)
    let child = delateLine.lastElementChild;

    for(let i=1; i<=line; i++){
      if(i==masakra){
        myLibrary.splice(masakra*4-4,4)
        line-=1;
      }
    }
    console.log(line)
    while (child) {
      delateLine.removeChild(child);
      child = delateLine.lastElementChild
    }
    for (let i=1; i<=line; i++){
      let delateLineBtn = document.createElement('button')
      delateLineBtn.innerHTML='DELETE'
      delateLine.appendChild(delateLineBtn)
      delateLineBtn.classList.add(`${i}`)
      delateLineBtn.addEventListener('click', dupaa)
    }
  }
  delateLineBtn.addEventListener('click', dupaa)
}

