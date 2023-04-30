import CardContent from "../card-content/card-content.component";
import './card-list.styles.css';

// destructuring as the parameter of the functional component / implicit return
const CardList = ({ monsters }) => (
    <div className="card-list">
        {monsters.map((monster) => {
            const {name, email, id} = monster;
            return(
                <CardContent id={id} name={name} email={email} />
            )
        })}
    </div>
)

export default CardList;