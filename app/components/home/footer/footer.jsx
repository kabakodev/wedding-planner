export default function Footer(){
    return(
        <footer className="bg-(--cream) py-8 text-center text-sm text-(--text)">
            &copy; {new Date().getFullYear()} Furu Planner. Tous droits réservés.
        </footer>
    )
}