import { Component } from "react";
import CardContent from "../card-content/card-content.component";
import './card-list.styles.css';

class CardList extends Component {
    render() {
        const { monsters } = this.props;

        return (
            <div className="card-list">
                {monsters.map((monster) => {
                    const {name, email, id} = monster;
                    return(
                        <CardContent id={id} name={name} email={email} />
                    )
                })}
            </div>
        );
    }
}

export default CardList;