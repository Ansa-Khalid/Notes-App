

const addBtn=document.querySelector('#addBtn');
const main=document.querySelector('#main');
const saveNotes=()=>{
    const notes=document.querySelectorAll('.note textarea');
    const data=[];
    notes.forEach((notes)=>data.push(notes.value));
    localStorage.setItem('notes',JSON.stringify(data));
    if(data.length===0){
        localStorage.removeItem("notes");
    }
    else{
        localStorage.setItem('notes',JSON.stringify(data));
    }
}
addBtn.addEventListener('click',function(){addNotes()});

 const addNotes=(text="")=>{
    const note=document.createElement('div');
    note.classList.add('note');
    note.innerHTML=`<div class="tool"><i class="save fas fa-save"></i>
    <i class="trash fas fa-trash"></i></div>
    <textarea>${text}</textarea>`;
    note.querySelector(".trash").addEventListener('click',function(){
        note.remove();
        saveNotes();
    });
    note.querySelector(".save").addEventListener('click',function(){saveNotes()})
    main.appendChild(note);
    note.querySelector("textarea").addEventListener('focusout',function(){saveNotes()})
    saveNotes();
 }
 {
    function refresh(){
        const lsNotes=JSON.parse(localStorage.getItem('notes'));
       
        if(lsNotes===null){
            addNotes();
        }
        else{
            lsNotes.forEach((lsNotes)=>{
                addNotes(lsNotes)
            });
        }     
    }
}
refresh();
document.querySelector('.switcher-btn').onclick=()=>{
    document.querySelector('.color-switcher').classList.toggle('active')
}
let themeButtons=document.querySelectorAll('.theme-buttons');
themeButtons.forEach(color => {
    color.addEventListener('click',()=>{
        let dataColor=color.getAttribute('data-color');
        document.querySelector('body').style.setProperty('background-color',dataColor);
    });
});