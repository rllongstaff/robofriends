import React from 'react';
import Card from './Card';  // import our Card component

const CardList = ({ robots }) => {
    // here we create a variable to hold an array of every robot and it's index value
    // and we loop through it
    const cardsArray = robots.map((user, i) => {
        // return has paranthesis because multi-lined return output
        return (
            <Card 
                key={robots[i].id} 
                id={robots[i].id} 
                name={robots[i].name} 
                email={robots[i].email} 
            />
        );

    })
    // output the card array into a div and that is what the CardList component does
    return (
        <div>
            {cardsArray}                      
        </div>        
    );
}


export default CardList;