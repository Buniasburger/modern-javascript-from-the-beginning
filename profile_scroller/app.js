const data = [
    {
        name: 'John Doe',
        age: '32',
        gender: 'male',
        lookingFor: 'female',
        location: 'Boston MA',
        image: 'https://randomuser.me/api/portraits/men/82.jpg'
    },
    {
        name: 'Jane Smith',
        age: '36',
        gender: 'female',
        lookingFor: 'man',
        location: 'Miami FL',
        image: 'https://randomuser.me/api/portraits/women/82.jpg'
    },
    {
        name: 'William Johson',
        age: '38',
        gender: 'male',
        lookingFor: 'female',
        location: 'Lynn MA',
        image: 'https://randomuser.me/api/portraits/men/83.jpg'
    }
];

const profiles = profileIterator(data);
// Call first profile
nextProfile();

// Next event
document.querySelector('#next').addEventListener('click', nextProfile);

function nextProfile() {
    const currentProfile = profiles.next().value;
    
    try {
        document.querySelector('#profile-display').innerHTML = `
            <ul class="list-group">
                <li class="list-group-item">Name: ${currentProfile.name}</li>
                <li class="list-group-item">Age: ${currentProfile.age}</li>
                <li class="list-group-item">Location: ${currentProfile.location}</li>
                <li class="list-group-item">Preference: ${currentProfile.gender} looking for ${currentProfile.lookingFor}</li>
            </ul>`;
        document.querySelector('#image-display').innerHTML = `<img src="${currentProfile.image}">`;
    } catch (e) {
        // No more profiles
        location.reload();
    }
}

// Profile iterator
function profileIterator(profiles) {
    let nextIndex = 0;

    return {
        next: () => {
            return nextIndex < profiles.length ? {value: profiles[nextIndex++], done: false} : {done: true}
        }
    }
}