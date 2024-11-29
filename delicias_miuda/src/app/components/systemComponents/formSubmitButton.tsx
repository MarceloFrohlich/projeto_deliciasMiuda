'use client'

import { ReactElement } from 'react'
import { useFormStatus } from 'react-dom'

interface IFormSubmitButton {
    action: string | ReactElement
    waiting: string
    onClick?: () => void
    buttonColor?: string
    hoverColor?: string
    isFull?: boolean
}
export default function FormSubmitButton({ action, waiting, onClick, buttonColor, isFull, hoverColor }: IFormSubmitButton) {

    const { pending } = useFormStatus()

    return (
        <button onClick={onClick} 
        className={`${buttonColor ? `${buttonColor} ${hoverColor}` : 'bg-yellowVela hover:bg-yellow-600'} ${isFull ? 'w-full' : ''} duration-300 rounded-lg py-2 px-4 text-white `}
            disabled={pending}>
            {pending ? <div className='flex items-center justify-center'> 
                <p>{waiting}</p>
            </div>
                :
                `${action}`}
        </button>
    )
}