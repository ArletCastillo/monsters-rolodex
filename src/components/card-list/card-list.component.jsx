import CardContent from "../card-content/card-content.component";
import './card-list.styles.css';

// destructuring as the parameter of the functional component / implicit return
const CardList = ({ monsters }) => (
    <div className="card-list">
        {monsters.map((monster) => {
            return(
                <CardContent key={monster.id} monster={monster} />
            )
        })}
    </div>
)

export default CardList;