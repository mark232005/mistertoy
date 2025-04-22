import { useNavigate } from "react-router-dom";
import { ToyPreview } from "./ToyPreview.jsx";
export function ToyList({ toys, onRemoveToy }) {
    const navigate = useNavigate()

    function handleRemove(ev, toyId) {
        ev.stopPropagation();
        onRemoveToy(toyId);
    }

    function handleEdit(ev, toyId) {
        ev.stopPropagation();
        navigate(`/toy/edit/${toyId}`);
    }

    function handleDetails(ev, toyId) {
        ev.stopPropagation();
        navigate(`/toy/${toyId}`);
    }

    return (
            <ul className="clean-list toy-list grid  ">
                {
                    toys.map(toy => (
                        <li key={toy._id} className="flex flex-column " onClick={() => navigate(`/toy/${toy._id}`)}>
                            <ToyPreview toy={toy} />
                            <div>
                            <button onClick={(ev) => handleRemove(ev, toy._id)}>Remove</button>
                            <button onClick={(ev) => handleEdit(ev, toy._id)}>Edit</button>
                            </div>
                        </li>
                    ))
                }
            </ul>
    )
}