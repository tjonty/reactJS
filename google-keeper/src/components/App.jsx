import React from 'react';

// IMPORT COMPONENTS
import Header from './Header';
import Note from "./Note";
import Footer from "./Footer";

import notes from '../notes';

const App = () => {
    return (
        <div>
            <Header />
            {notes.map((note) => {
                return (
                    <Note 
                        key={note.key}
                        title={note.title}
                        content={note.content}
                    />
                )
            })}
            <Footer />
        </div>
    );
}

export default App;