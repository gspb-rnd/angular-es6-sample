import React from 'react';
import Person from '../models/Person';

const upperFilter = (input: string): string => {
  return input.toUpperCase();
};

export default function Home() {
  const [person, setPerson] = React.useState<Person | null>(null);

  React.useEffect(() => {
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
    <div className="p-4 text-center">
      Hello {upperFilter(person.name)}!
    </div>
  );
}
