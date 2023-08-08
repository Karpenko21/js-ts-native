import React, {ChangeEvent, MouseEvent} from "react";

/*const callback = () => {
    alert('hey')
}

window.setTimeout(callback, 1000)*/


export const User = () => {

    const deleteUser = (e: MouseEvent<HTMLButtonElement>) => {
        console.log(e.currentTarget.name)
    }

    const saveUser = () => {
        console.log("User was saved")
    }

    const onNameChanged = () => {
        console.log("name was changed")
    }

    const focusLostHandler = () => {
        console.log("focus was lost")
    }

    const onAgeChanged = (event: ChangeEvent<HTMLInputElement>) => {
        console.log("age was changed: " + event.currentTarget.value )
    }

    return <div> <textarea onBlur={focusLostHandler}
                           onChange={onNameChanged}>Dimych</textarea>
        <button name="delete" onClick={deleteUser}>delete</button>
        <button name="save" onClick={deleteUser}>save</button>
        <input   onChange={onAgeChanged} type={"number"}/>
    </div>
}