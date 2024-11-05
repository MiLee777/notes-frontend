import { RiDeleteBack2Line } from "react-icons/ri";

export const MyNotes = ({ index, text, isEditing, onEditClick, onSaveClick, onDeleteClick }) => {

  return (
    <div className='note'>
      <p className='note__text'>{index + 1}. {text}</p>
      <div className='note__btns'>
      <button
        className='note__edit'
        onClick={isEditing ? onSaveClick : onEditClick}>
        {isEditing ? "Save" : "Edit"}
      </button>
      <RiDeleteBack2Line
        className='note__delete'
        onClick={onDeleteClick} />
      </div>
    </div>
  )
}