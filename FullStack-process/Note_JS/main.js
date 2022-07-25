
const notes=[
    {
        id:1,
        nd:"Đây là note 1 dòng được trích ra từ văn bản nào đó trong src"
    },
    {
        id:2,
        nd:"Đây là giao diện web note lại quá trình học Reactjs",
    },
    {
        id:3,
        nd:"Giao diện note là cái gì đó rất đpwj và ổn định",
    },
    {
        id:4,
        nd:"Cơ sở dữ liệu là thứ rất quan trọng",
    },
    {
        id:5,
        nd:"Sẽ có buổi test quan trọng vào tuần tới"
    }
]
function find_note(){
    const text=document.getElementById('inputValue');
    notes.map((note,)=>{
        let classN="note-"+(note.id)
        let sttnote=document.getElementById(classN)
        if(!note.nd.includes( text.value)){
            sttnote.style.display='none';
        }else{
            sttnote.style.display='block';
        }
    })
    if(text.value==null){
        notes.map((note,)=>{
            let classN="note-"+(note.id)
            let sttnote=document.getElementById(classN)
            sttnote.style.display='block';
        })
    }
}
function handleMouseClick(id){
    const Textnote=document.getElementById("text")
    Textnote.innerText=notes[id-1].nd;
}
function handleClickMenutab(){
    const all=document.getElementById('all')
    all.style.background='red'
}
