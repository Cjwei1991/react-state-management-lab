import './ZombieFighters.css';


const ZombieFighters = (props) => {
    const handleAddFighter = (fighter) => {
        const alreadyInTeam = props.team.some(f => f.id === fighter.id);
        const totalSpent = props.team.reduce((total, f) => total + f.price, 0);
        const remainingMoney = props.money - totalSpent;

        if (alreadyInTeam) {
            alert("Fighter already in team!");
            return;
        }
        if (remainingMoney >= fighter.price) {
            props.setTeam(prevTeam => [...prevTeam, fighter]);
        } else {
            alert("Not enough money!");
        }
    }

    const handleRemoveFighter = (fighter) => {
        props.setTeam(prevTeam => prevTeam.filter(f => f.name !== fighter.name));
    }

    return (
        <div className="zombie">
            <img src={props.fighter.img} />
            <p><span>Name: </span>{props.fighter.name}</p>
            <p><span>Price: </span>{props.fighter.price}</p>
            <p><span>Strength: </span>{props.fighter.strength}</p>
            <p><span>Agility: </span>{props.fighter.agility}</p>
            <button onClick={() => handleAddFighter(props.fighter)}>Add</button>
            <button onClick={() => handleRemoveFighter(props.fighter)}>Remove</button>
        </div>
    );
};

export default ZombieFighters;