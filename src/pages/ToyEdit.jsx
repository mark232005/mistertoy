import { toyService } from '../services/toy.service-remote.js'
import { useState, useEffect } from "react"
import { saveToy } from "../store/toys/toy.actions.js"
import { useNavigate, useParams } from 'react-router-dom'


export function ToyEdit() {
    const { toyId } = useParams()
    const labels = toyService.labels
    const [toyToEdit, setToyToEdit] = useState(toyService.getEmptyToy())
    const navigate = useNavigate()

    useEffect(() => {
        if (toyId) {
            toyService.getById(toyId).then(toy => setToyToEdit(toy))
        }
    }, [])
    function onSave(ev) {
        ev.preventDefault()
        console.log('edit',toyToEdit);
        // if(!toyToEdit.imgUrl)
        saveToy(toyToEdit).then(() => navigate('/toy')

        )
            .catch(err => {
                console.log('Saving toy failed', err);
            })
    }
    function handleChange({ target }) {
        const { name, value, type, checked, selectedOptions } = target
        let val
        if (type === 'checkbox') val = checked
        else if (type === 'select-multiple') {
            val = Array.from(selectedOptions, opt => opt.value)
        }
        else if (name === 'price') {
            val = +value
        }
        else val = value

        setToyToEdit(prevToy => ({ ...prevToy, [name]: val }))
    }
    return (
        <form onSubmit={onSave}>
            <label htmlFor="name">Name:</label>
            <input type="text" name="name" id="name" placeholder="toy's name" value={toyToEdit.name} onChange={handleChange} />
            <label htmlFor="imgUrl">Img Url:</label>
            <input type="text" name="imgUrl" id="imgUrl" placeholder="img Url" value={toyToEdit.imgUrl} onChange={handleChange} />
            <label htmlFor="price">Price:</label>
            <input type="text" name="price" id="price" placeholder="price" value={toyToEdit.price} onChange={handleChange} />
            <select multiple value={toyToEdit.lables} onChange={handleChange} name="labels">
                {labels.map(label => <option key={label} value={label}>{label}</option>
                )}
            </select>
            <label htmlFor="inStock">In Stock:</label>
            <input type="checkbox" name="inStock" id="inStock" checked={toyToEdit.inStock} onChange={handleChange} />
            <button>Save</button>
        </form>
    )
}