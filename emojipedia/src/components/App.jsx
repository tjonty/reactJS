import React from "react";

import Card from "./Card";
import emojipedia from '../emojipedia';

function createCard(emojiTerm) {
    return (
        <Card
            key={emojiTerm.id}
            icon={emojiTerm.emoji}
            name={emojiTerm.name}
            desc={emojiTerm.meaning}
        />
    );
}

function App() {
    return (
        <div>
            <h1>
                <span>emojipedia</span>
            </h1>
            <dl className="dictionary">
                {emojipedia.map(createCard)}
            </dl>
        </div>
    );
}

export default App;
