import React from 'react';

const contentStyle = {
    textAlign: 'left'
}

function MeaningfulSequence() {
    return (
        <div style={contentStyle}>
            <h1>Some inaccessible content without a role</h1>
            <pre>Menu</pre>
            <pre>        Breakfast        Lunch           Dinner</pre>
            <pre>Monday  2 fried eggs     tomato soup     garden salad</pre>
            <pre>        bacon            hamburger       Fried Chicken</pre>
            <pre>        toast            onion rings     green beans</pre>
            <pre>                         Oatmeal cookie  mashed potatoes</pre>
            <pre>Tuesday Pancakes         vegetable soup  Caesar salad</pre>
            <pre>        sausage          hot dogs        Spaghetti with meatballs</pre>
            <pre>        orange juice     potato salad    Italian bread</pre>
            <pre>                         brownie         ice cream</pre>
            
        </div>
    );
}

export default MeaningfulSequence;