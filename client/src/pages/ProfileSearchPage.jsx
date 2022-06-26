import { useState } from 'react';
import { profileSearch } from '../services/profile';
import ProfileCard from '../components/ProfileCard';

const ProfileSearchPage = () => {
  const [term, setTerm] = useState('');
  const [profiles, setProfiles] = useState([]);

  const handleSearch = (event) => {
    event.preventDefault();
    profileSearch(term).then((data) => {
      setProfiles(data.profiles);
    });
  };

  return (
    <div>
      <form onSubmit={handleSearch}>
        <label htmlFor="input-search-term">Search by name</label>
        <input
          id="input-search-term"
          type="text"
          placeholder="Search for other users..."
          value={term}
          onChange={(event) => setTerm(event.target.value)}
        />
        <button>Search</button>
      </form>
      {profiles.map((profile) => (
        <ProfileCard key={profile._id} profile={profile} />
      ))}
    </div>
  );
};

export default ProfileSearchPage;
