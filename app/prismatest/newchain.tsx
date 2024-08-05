import { createChain, createLink } from "./actions/actions"

//new chain input form design. Calls to createChain for db interaction
export function NewChain() {
    return (
        <form action={createChain} className="flex flex-col gap-y-2 w-[300px]">
            <input
                type="text"
                name="title"
                placeholder="Nom de la chain"
                className="px-2 py-1 rounded-sm"
            />
            <button
                type="submit"
                className="bg-blue-500 py-2 text-white rounded-sm"
            >
                Nouvelle chain
            </button>
        </form>
    )
}

//same for links
export function NewLink() {
    return (
        <form action={createLink} className="flex flex-col gap-y-2 w-[300px]">
            <input
                type="text"
                name="title"
                placeholder="Titre du lien"
                className="px-2 py-1 rounded-sm"
            />
            <input
                type="text"
                name="content"
                placeholder="Lien"
                className="px-2 py-1 rounded-sm"
            />
            <input
                type="number"
                name="chainId"
                placeholder="Id de la chain"
                className="px-2 py-1 rounded-sm"
            />
            <button
                type="submit"
                className="bg-blue-500 py-2 text-white rounded-sm"
            >
                Nouveau lien
            </button>
        </form>
    )
}