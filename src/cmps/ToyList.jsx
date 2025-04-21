import { ToyPreview } from "./ToyPreview.jsx";

export function ToyList({ toys, onRemoveToy }) {

    return (
        <section className="toy-list grid ">
            <ul className="clean-list  ">
                {
                    toys.map(toy => (
                        <li key={toy._id} className="flex">
                            <ToyPreview toy={toy} remove={onRemoveToy} />
                        </li>
                    ))
                }
            </ul>
        </section>
    )
}