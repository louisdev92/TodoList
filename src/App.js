import './App.css';
import {useState} from "react";

function App() {

    const [taches, setTaches] = useState([]);
    const [nouvelleTache, setNouvelleTache] = useState('');

    const ajouterTache = () => {
        if (nouvelleTache.trim() !== '') {
            setTaches([...taches, nouvelleTache]);
            setNouvelleTache('');
        }
    };

    const supprimerTache = (index) => {
        const nouvellesTaches = taches.filter((_, i) => i !== index);
        setTaches(nouvellesTaches);
    };

    return (
        <div>
            <h1>
                Gestionnaire de Tâches
            </h1>
            <input
                type="text"
                value={nouvelleTache}
                onChange={(e) => setNouvelleTache(e.target.value)}
                placeholder="Ajouter une nouvelle tâche"
            />
            <button onClick={ajouterTache}>Ajouter</button>
            <ul>
                {taches.map((tache, index) => (
                    <li key={index}>
                        {tache}
                        <button onClick={() => supprimerTache(index)}>Supprimer</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}
export default App;
