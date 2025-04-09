import React, { useState, useEffect } from 'react';
import Person from '../models/Person';

const upperFilter = (input: string): string => {
  return input.toUpperCase();
};

export default function Home() {
  const [person, setPerson] = useState<Person | null>(null);

  useEffect(() => {
    const fetchPerson = async () => {
      const newPerson = new Person();
      setPerson(newPerson);
    };

    fetchPerson();
  }, []);

  if (!person) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      Hello {upperFilter(person.name)}!
    </div>
  );
}
