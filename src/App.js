import React from 'react';
import Contact from './components/Contact';
import ContactList from './components/ContactList';

function App() {
  return (
    <div className="App">
      <Contact name='Tammy Fowler' avatar='https://randomuser.me/api/portraits/women/36.jpg' online />
      <Contact name='Lydia Dunn' avatar='https://randomuser.me/api/portraits/women/94.jpg'  />
      <Contact name='Jimmy Jenkins' avatar='https://randomuser.me/api/portraits/men/78.jpg' online />
      <ContactList />
    </div>
  );
}

export default App;
