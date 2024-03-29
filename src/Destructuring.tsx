import React, {useState} from "react";


export type ManType = {
    name: string
    age: number
    lessons: Array<{ title: string, name?: string}>
    address: {
        street: {
            title: string
        }
    }
}


type PropsType = {
    title: string
    man: ManType
    food: Array<string>
    car: {model: string}
}


export const ManComponent: React.FC<PropsType> = ({title, man, ...props} ) => {

    //const {title, man} = props
    //const {title, man, ...restProps} = props

    const [message, setMessage] = useState<string>("hello")

    return <div>
    <h1>{title}</h1>
        <div>
            {man.name}
        </div>
        <div>
            {props.car.model}
        </div>
    </div>
}