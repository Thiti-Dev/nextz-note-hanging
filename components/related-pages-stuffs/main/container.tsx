import React,{useEffect,FunctionComponent,useState} from 'react'
import styles from './container.module.scss'
const Container:FunctionComponent = () => {
  useEffect(() => {
    // Fetch the current note from the database and then . . . .
  },[])
  const [inputText,setInputText] = useState("")
  const [noteList,setNoteList] = useState<string[]>([])
  function clearInput():void{
    setInputText("")
  }
  function hangTheNote():void{
    if(!inputText) return
    let updated_lists = [...noteList]
    updated_lists.push(inputText)
    setNoteList(updated_lists);
    clearInput()
  }
  function onInputChanged(event: React.ChangeEvent<HTMLInputElement>){
    const {value:userEnteredText} = event.target
    setInputText(userEnteredText)
  }

  //prefab
  let rendered_notes_element = null
  if(noteList.length){
    //if there is any note being hanged
    rendered_notes_element = noteList.map(noteText => {
      return <div className={styles.note_card}>
                {noteText}
            </div>
    })
  }
  // ────────────────────────────────────────────────────────────────────────────────


  return (
    <>
    <input value={inputText} onChange={onInputChanged} type="text" placeholder="Just type somethings . . ."/>
    <button onClick={hangTheNote}>hang it!</button>
      <div className={styles.container}>
        {rendered_notes_element}
      </div>
    </>
  )
}

export default Container