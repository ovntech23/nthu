// Sponsored Playlist Data - App admin can add songs here
const sponsoredPlaylists = {
    zanaco: [
        {
            id: 101,
            title: "Zanaco Success Story",
            artist: "Zanaco Choir",
            album: "Banking with Zanaco",
            duration: "4:20",
            cover: "album-1.jpg",
            url: "" // Add your song URL here
        },
        {
            id: 102,
            title: "Financial Freedom",
            artist: "Zanaco Band",
            album: "Banking with Zanaco",
            duration: "3:45",
            cover: "album-2.jpg",
            url: "" // Add your song URL here
        }
    ],
    zamtel: [
        {
            id: 201,
            title: "Zamtel Connection",
            artist: "Zamtel Sound",
            album: "Connected",
            duration: "3:30",
            cover: "album-3.jpg",
            url: "https://nthungulumusic.us-southeast-1.linodeobjects.com/nthungulu2%2FAboola%20Jesu%20Aboola%20by%20Sydney%20de%20Captain.mp3" // Add your song URL here
        },
        {
            id: 202,
            title: "Fast Internet Life",
            artist: "Zamtel Band",
            album: "Connected",
            duration: "4:10",
            cover: "album-4.jpg",
            url: "" // Add your song URL here
        }
    ],
    zesco: [
        {
            id: 301,
            title: "Power of Zambia",
            artist: "Zesco Choir",
            album: "Electric Dreams",
            duration: "5:15",
            cover: "album-1.jpg",
            url: "" // Add your song URL here
        },
        {
            id: 302,
            title: "Energy Flow",
            artist: "Zesco Band",
            album: "Electric Dreams",
            duration: "3:55",
            cover: "album-2.jpg",
            url: "" // Add your song URL here
        }
    ]
};

// Track Data - Add your song URLs here
const tracks = [
    {
        id: 1,
        title: "Tondolo",
        artist: "PK Chishala",
        album: "Namusonda",
        duration: "3:45",
        cover: "album-1.jpg",
        url: "https://nthungulumusic.us-southeast-1.linodeobjects.com/PK%20Chishala%20Tondolo%20tumfwe%20ifyo%20bakotwamba.mp3" // Add your song URL here (e.g., "https://example.com/song1.mp3")
    },
    {
        id: 2,
        title: "Muka Muchona",
        artist: "Peter Tsotsi Juma",
        album: "Peter Tsotsi Juma",
        duration: "4:12",
        cover: "album-2.jpg",
        url: "https://nthungulumusic.us-southeast-1.linodeobjects.com/Peter%20%E2%80%98%E2%80%99Tsotsi%E2%80%99%E2%80%99%20Juma%20Muka%20Muchona.mp3" // Add your song URL here
    },
    {
        id: 3,
        title: "Kwi Lamba Ekwesu",
        artist: "Mulemena Boys",
        album: "Mulemena Boys",
        duration: "3:58",
        cover: "album-3.jpg",
        url: "https://nthungulumusic.us-southeast-1.linodeobjects.com/Kwi%20Lamba%20Ekwesu%20Mulemena%20Boys%20Zambian%20Music.mp3" // Add your song URL here
    },
    {
        id: 4,
        title: "Icupo",
        artist: "Shalawambe",
        album: "Icupo",
        duration: "3:30",
        cover: "album-4.jpg",
        url: "https://nthungulumusic.us-southeast-1.linodeobjects.com/Shalawambe%20Icupo%20Cha%20Kulala%20Pa%20Mpapa%20feat.Ricky%20Cho.mp3" // Add your song URL here
    },
    {
        id: 5,
        title: "Bauze",
        artist: "Paul Ngozi",
        album: "Bauze",
        duration: "4:05",
        cover: "album-1.jpg",
        url: "https://nthungulumusic.us-southeast-1.linodeobjects.com/Bauze%20Paul%20Ngozi%20Zambian%20Music.mp3" // Add your song URL here
    },
    {
        id: 6,
        title: "Nsakwa Ya Ba Kaonde",
        artist: "Masasu Band",
        album: "Masasu",
        duration: "3:22",
        cover: "album-2.jpg",
        url: "https://nthungulumusic.us-southeast-1.linodeobjects.com/MASASU%20BAND%20NSANKWA%20YA%20BA%20KAONDE.mp3" // Add your song URL here
    },
    {
        id: 7,
        title: "Dziko La Mulungu",
        artist: "Masiye Band",
        album: "Dziko La Mulungu",
        duration: "4:18",
        cover: "album-3.jpg",
        url: "https://nthungulumusic.us-southeast-1.linodeobjects.com/Masiye%20Band%20Dziko%20La%20Mulungu%20Zambian%20Music.mp3" // Add your song URL here
    },
    {
        id: 8,
        title: "Sebe",
        artist: "Joyce Nyirongo",
        album: "Sebe",
        duration: "3:55",
        cover: "album-4.jpg",
        url: "https://nthungulumusic.us-southeast-1.linodeobjects.com/Joyce%20Nyrirongo%20Sebe%20Official%20Video.mp3" // Add your song URL here
    },
    {
        id: 9,
        title: "Bana Bandi",
        artist: "Ackim Simukonda",
        album: "Bana Bandi",
        duration: "3:22",
        cover: "album-2.jpg",
        url: "https://nthungulumusic.us-southeast-1.linodeobjects.com/nthungulu2%2FAkim%20Simukonda%20Bana%20Bandi%20Zambian%20Legend%20Series.mp3" // Add your song URL here
    },
    {
        id: 10,
        title: "Aboola Jesu",
        artist: "Sydeny De Captain",
        album: "Aboola Jesu",
        duration: "4:18",
        cover: "album-3.jpg",
        url: "https://nthungulumusic.us-southeast-1.linodeobjects.com/nthungulu2%2FAboola%20Jesu%20Aboola%20by%20Sydney%20de%20Captain.mp3" // Add your song URL here
    },
    {
        id: 11,
        title: "Ni Maggie",
        artist: "ALfred Kalusha",
        album: "Alfred Kalusha",
        duration: "3:22",
        cover: "album-2.jpg",
        url: "https://nthungulumusic.us-southeast-1.linodeobjects.com/nthungulu2%2FAlfred%20C.Kalusha%20Ni%20Maggie.mp3" // Add your song URL here
    },
    {
        id: 12,
        title: "Amalume",
        artist: "Mulemena Boys",
        album: "Amalume",
        duration: "4:18",
        cover: "album-3.jpg",
        url: "https://nthungulumusic.us-southeast-1.linodeobjects.com/nthungulu2%2FAmalume.mp3" // Add your song URL here
    },
    {
        id: 13,
        title: "Munise Munise",
        artist: "Amayange",
        album: "Munise Munise",
        duration: "3:22",
        cover: "album-2.jpg",
        url: "https://nthungulumusic.us-southeast-1.linodeobjects.com/nthungulu2%2FAmayenge%20Munise%20Munise.mp3" // Add your song URL here
    },
    {
        id: 14,
        title: "Bbaala Ng'ombe",
        artist: "Smokey Haangala",
        album: "Bbaala Ng'ombe",
        duration: "4:40",
        cover: "album-3.jpg",
        url: "https://nthungulumusic.us-southeast-1.linodeobjects.com/nthungulu2%2FBbla%20Ngombe%20Smokey%20Haangala.mp3" // Add your song URL here
    },
    {
        id: 15,
        title: "Chipondo Chandi",
        artist: "Ackim Simukonda",
        album: "Chipondo Chandi",
        duration: "4:30",
        cover: "album-2.jpg",
        url: "https://nthungulumusic.us-southeast-1.linodeobjects.com/nthungulu2%2FChipondo%20Chandi%20Ackim%20Simukonda%20Zambian%20Music.mp3" // Add your song URL here
    },
    {
        id: 16,
        title: "Nona Ndong u",
        artist: "Jeska",
        album: "Jeska",
        duration: "4:18",
        cover: "album-3.jpg",
        url: "https://nthungulumusic.us-southeast-1.linodeobjects.com/nthungulu2%2FJeska%20Nona%20Ndong%20u%20Official.mp3" // Add your song URL here
    }
    // Removed IDs 17-50 (duplicates)
];

// HTML5 Audio Element
const audio = new Audio();
audio.preload = 'metadata';

// State
let currentTrack = null;
let isPlaying = false;
let progress = 0;
let volume = 75;
let isMuted = false;
let isShuffled = false;
let repeatMode = 'off'; // 'off', 'all', 'one'
let progressInterval = null;
let likedSongs = JSON.parse(localStorage.getItem('likedSongs') || '[]');
let customPlaylists = JSON.parse(localStorage.getItem('customPlaylists') || '[]');

// DOM Elements
const quickAccessGrid = document.getElementById('quickAccessGrid');
const trackList = document.getElementById('trackList');
const trackCount = document.getElementById('trackCount');
const heroBg = document.getElementById('heroBg');
const playerCover = document.getElementById('playerCover');
const playerTitle = document.getElementById('playerTitle');
const playerArtist = document.getElementById('playerArtist');
const progressBar = document.getElementById('progressBar');
const currentTimeEl = document.getElementById('currentTime');
const durationEl = document.getElementById('duration');
const playBtn = document.getElementById('playBtn');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const shuffleBtn = document.getElementById('shuffleBtn');
const repeatBtn = document.getElementById('repeatBtn');
const volumeBtn = document.getElementById('volumeBtn');
const volumeSlider = document.getElementById('volumeSlider');
const playAllBtn = document.getElementById('playAllBtn');

// Initialize
function init() {
    renderQuickAccess();
    renderTrackList();
    renderLibraryTrackList();
    updateTrackCount();
    updateLibraryStats();
    setupEventListeners();
    selectTrack(tracks[0]);
}

// Render Quick Access Cards
function renderQuickAccess() {
    const html = tracks.slice(0, 4).map(track => `
        <div class="quick-card" data-track-id="${track.id}">
            <img src="${track.cover}" alt="${track.album}" class="quick-card-cover">
            <h3 class="quick-card-title">${track.title}</h3>
            <p class="quick-card-artist">${track.artist}</p>
        </div>
    `).join('');
    quickAccessGrid.innerHTML = html;

    // Add click handlers
    document.querySelectorAll('.quick-card').forEach(card => {
        card.addEventListener('click', () => {
            const trackId = parseInt(card.dataset.trackId);
            const track = tracks.find(t => t.id === trackId);
            selectTrack(track);
            play();
        });
    });
}

// Render Track List
function renderTrackList() {
    const html = tracks.map((track, index) => `
        <div class="track-item" data-track-id="${track.id}">
            <div class="track-index">
                <span class="track-index-number">${index + 1}</span>
                <svg class="track-play-icon" viewBox="0 0 24 24" fill="currentColor">
                    <polygon points="5 3 19 12 5 21 5 3"></polygon>
                </svg>
                <div class="track-playing-indicator">
                    <div class="playing-bar"></div>
                    <div class="playing-bar"></div>
                    <div class="playing-bar"></div>
                </div>
            </div>
            <img src="${track.cover}" alt="${track.album}" class="track-cover">
            <div class="track-info">
                <h4 class="track-title">${track.title}</h4>
                <p class="track-artist">${track.artist}</p>
            </div>
            <div class="track-album">${track.album}</div>
            <div class="track-actions">
                <span class="track-duration">${track.duration}</span>
            </div>
        </div>
    `).join('');
    trackList.innerHTML = html;

    // Add click handlers
    document.querySelectorAll('.track-item').forEach(item => {
        item.addEventListener('click', () => {
            const trackId = parseInt(item.dataset.trackId);
            const track = tracks.find(t => t.id === trackId);
            if (currentTrack && currentTrack.id === track.id) {
                togglePlayPause();
            } else {
                selectTrack(track);
                play();
            }
        });
    });
}

// Update Track Count
function updateTrackCount() {
    trackCount.textContent = `${tracks.length} songs`;
}

// Select Track
function selectTrack(track) {
    currentTrack = track;
    progress = 0;
    
    // Load audio if URL is provided
    if (track.url) {
        audio.src = track.url;
        audio.load();
    }
    
    updatePlayerUI();
    updateTrackListUI();
    updateHeroBg();
    updateMediaSessionMetadata();
}

// Update Player UI
function updatePlayerUI() {
    if (!currentTrack) return;
    
    playerCover.src = currentTrack.cover;
    playerTitle.textContent = currentTrack.title;
    playerArtist.textContent = currentTrack.artist;
    durationEl.textContent = currentTrack.duration;
    progressBar.value = progress;
    updateCurrentTime();
    updateLikeButton();
}

// Update Like Button
function updateLikeButton() {
    const likeBtn = document.getElementById('likeBtn');
    if (!likeBtn || !currentTrack) return;
    
    const heartOutline = likeBtn.querySelector('.heart-outline');
    const heartFilled = likeBtn.querySelector('.heart-filled');
    const isLiked = likedSongs.includes(currentTrack.id);
    
    if (isLiked) {
        heartOutline.classList.add('hidden');
        heartFilled.classList.remove('hidden');
        likeBtn.classList.add('active');
    } else {
        heartOutline.classList.remove('hidden');
        heartFilled.classList.add('hidden');
        likeBtn.classList.remove('active');
    }
}

// Toggle Like Song
function toggleLikeSong() {
    if (!currentTrack) return;
    
    const isLiked = likedSongs.includes(currentTrack.id);
    
    if (isLiked) {
        // Unlike
        likedSongs = likedSongs.filter(id => id !== currentTrack.id);
        showNotification(`Removed "${currentTrack.title}" from Liked Songs`);
    } else {
        // Like
        likedSongs.push(currentTrack.id);
        showNotification(`Added "${currentTrack.title}" to Liked Songs ❤️`);
    }
    
    // Save to localStorage
    localStorage.setItem('likedSongs', JSON.stringify(likedSongs));
    updateLikeButton();
}

// Update Track List UI
function updateTrackListUI() {
    document.querySelectorAll('.track-item').forEach(item => {
        const trackId = parseInt(item.dataset.trackId);
        if (currentTrack && trackId === currentTrack.id) {
            item.classList.add('active');
            if (isPlaying) {
                item.classList.add('playing');
            } else {
                item.classList.remove('playing');
            }
        } else {
            item.classList.remove('active', 'playing');
        }
    });
}

// Update Hero Background
function updateHeroBg() {
    if (!currentTrack) return;
    heroBg.style.backgroundImage = `url(${currentTrack.cover})`;
}

// Play
function play() {
    if (!currentTrack) return;
    
    // Play audio if URL exists
    if (currentTrack.url && audio.src) {
        audio.play().catch(err => {
            console.warn('Audio playback failed:', err);
            // Fallback to simulated playback
            isPlaying = true;
            updatePlayButtonUI();
            updateTrackListUI();
            startProgress();
        });
    } else {
        // Simulated playback when no URL
        isPlaying = true;
        updatePlayButtonUI();
        updateTrackListUI();
        startProgress();
    }
}

// Pause
function pause() {
    // Pause audio if playing
    if (audio.src && !audio.paused) {
        audio.pause();
    }
    
    isPlaying = false;
    updatePlayButtonUI();
    updateTrackListUI();
    stopProgress();
}

// Toggle Play/Pause
function togglePlayPause() {
    if (isPlaying) {
        pause();
    } else {
        play();
    }
}

// Update Play Button UI
function updatePlayButtonUI() {
    const playIcon = playBtn.querySelector('.play-icon');
    const pauseIcon = playBtn.querySelector('.pause-icon');
    
    if (isPlaying) {
        playIcon.classList.add('hidden');
        pauseIcon.classList.remove('hidden');
    } else {
        playIcon.classList.remove('hidden');
        pauseIcon.classList.add('hidden');
    }
}

// Start Progress
function startProgress() {
    stopProgress();
    progressInterval = setInterval(() => {
        if (!currentTrack) return;
        
        progress += 0.5;
        if (progress >= 100) {
            progress = 0;
            handleTrackEnd();
        }
        progressBar.value = progress;
        updateCurrentTime();
    }, 100);
}

// Stop Progress
function stopProgress() {
    if (progressInterval) {
        clearInterval(progressInterval);
        progressInterval = null;
    }
}

// Handle Track End
function handleTrackEnd() {
    if (repeatMode === 'one') {
        progress = 0;
        play();
    } else if (repeatMode === 'all' || isShuffled) {
        nextTrack();
    } else {
        // Always play next track, looping back to first after last
        nextTrack();
    }
}

// Next Track
function nextTrack() {
    if (!currentTrack) return;
    
    let nextTrack;
    if (isShuffled) {
        const randomIndex = Math.floor(Math.random() * tracks.length);
        nextTrack = tracks[randomIndex];
    } else {
        const currentIndex = tracks.findIndex(t => t.id === currentTrack.id);
        const nextIndex = (currentIndex + 1) % tracks.length;
        nextTrack = tracks[nextIndex];
    }
    
    selectTrack(nextTrack);
    if (isPlaying) {
        play();
    }
}

// Previous Track
function previousTrack() {
    if (!currentTrack) return;
    
    const currentIndex = tracks.findIndex(t => t.id === currentTrack.id);
    const prevIndex = currentIndex === 0 ? tracks.length - 1 : currentIndex - 1;
    const prevTrack = tracks[prevIndex];
    
    selectTrack(prevTrack);
    if (isPlaying) {
        play();
    }
}

// Update Current Time Display
function updateCurrentTime() {
    if (!currentTrack) return;
    
    const [minutes, seconds] = currentTrack.duration.split(':').map(Number);
    const totalSeconds = minutes * 60 + seconds;
    const currentSeconds = Math.floor((totalSeconds * progress) / 100);
    const mins = Math.floor(currentSeconds / 60);
    const secs = currentSeconds % 60;
    currentTimeEl.textContent = `${mins}:${secs.toString().padStart(2, '0')}`;
}

// Toggle Shuffle
function toggleShuffle() {
    isShuffled = !isShuffled;
    shuffleBtn.classList.toggle('active', isShuffled);
}

// Toggle Repeat
function toggleRepeat() {
    const modes = ['off', 'all', 'one'];
    const currentIndex = modes.indexOf(repeatMode);
    repeatMode = modes[(currentIndex + 1) % modes.length];
    
    repeatBtn.classList.toggle('active', repeatMode !== 'off');
    const repeatOne = repeatBtn.querySelector('.repeat-one');
    repeatOne.classList.toggle('hidden', repeatMode !== 'one');
}

// Toggle Mute
function toggleMute() {
    isMuted = !isMuted;
    updateVolumeUI();
}

// Update Volume UI
function updateVolumeUI() {
    const volumeIcon = volumeBtn.querySelector('.volume-icon');
    const muteIcon = volumeBtn.querySelector('.mute-icon');
    
    if (isMuted || volume === 0) {
        volumeIcon.classList.add('hidden');
        muteIcon.classList.remove('hidden');
        volumeSlider.value = 0;
    } else {
        volumeIcon.classList.remove('hidden');
        muteIcon.classList.add('hidden');
        volumeSlider.value = volume;
    }
}

// Render Sponsored Playlist
function renderSponsoredPlaylist(sponsor) {
    // Create a new section for the sponsored playlist
    const sectionId = `${sponsor}PlaylistSection`;
    let section = document.getElementById(sectionId);
    
    // If section doesn't exist, create it
    if (!section) {
        section = document.createElement('div');
        section.id = sectionId;
        section.className = 'content-section';
        document.querySelector('.content-inner').appendChild(section);
    }
    
    // Get tracks for this sponsor
    const playlistTracks = sponsoredPlaylists[sponsor] || [];
    const sponsorName = sponsor.charAt(0).toUpperCase() + sponsor.slice(1);
    
    // Render content
    if (playlistTracks.length === 0) {
        section.innerHTML = `<h1 class="section-title">${sponsorName} Sponsored Playlist</h1><p>No tracks available</p>`;
    } else {
        section.innerHTML = `
            <h1 class="section-title">${sponsorName} Sponsored Playlist</h1>
            <div class="all-tracks">
                <div class="section-header">
                    <h2 class="section-title">Featured Tracks</h2>
                    <span class="track-count">${playlistTracks.length} songs</span>
                </div>
                <div class="track-list">
                    ${playlistTracks.map((track, index) => `
                        <div class="track-item" data-track-id="${track.id}">
                            <div class="track-index">
                                <span class="track-index-number">${index + 1}</span>
                                <svg class="track-play-icon" viewBox="0 0 24 24" fill="currentColor">
                                    <polygon points="5 3 19 12 5 21 5 3"></polygon>
                                </svg>
                                <div class="track-playing-indicator">
                                    <div class="playing-bar"></div>
                                    <div class="playing-bar"></div>
                                    <div class="playing-bar"></div>
                                </div>
                            </div>
                            <img src="${track.cover}" alt="${track.album}" class="track-cover">
                            <div class="track-info">
                                <h4 class="track-title">${track.title}</h4>
                                <p class="track-artist">${track.artist}</p>
                            </div>
                            <div class="track-album">${track.album}</div>
                            <div class="track-actions">
                                <span class="track-duration">${track.duration}</span>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
        
        // Add click handlers for sponsored tracks
        section.querySelectorAll('.track-item').forEach(item => {
            item.addEventListener('click', () => {
                const trackId = parseInt(item.dataset.trackId);
                const track = playlistTracks.find(t => t.id === trackId);
                if (track) {
                    selectTrack(track);
                    play();
                }
            });
        });
    }
    
    // Switch to this section
    switchSection(`${sponsor}Playlist`);
}

// Setup Event Listeners
function setupEventListeners() {
    // Audio Event Listeners
    audio.addEventListener('play', () => {
        isPlaying = true;
        updatePlayButtonUI();
        updateTrackListUI();
    });
    
    audio.addEventListener('pause', () => {
        isPlaying = false;
        updatePlayButtonUI();
        updateTrackListUI();
    });
    
    audio.addEventListener('ended', () => {
        handleTrackEnd();
    });
    
    audio.addEventListener('timeupdate', () => {
        if (audio.duration && currentTrack && currentTrack.url) {
            progress = (audio.currentTime / audio.duration) * 100;
            progressBar.value = progress;
            updateProgressBarStyle();
            updateCurrentTimeFromAudio();
        }
    });
    
    audio.addEventListener('loadedmetadata', () => {
        if (audio.duration && !isNaN(audio.duration)) {
            const mins = Math.floor(audio.duration / 60);
            const secs = Math.floor(audio.duration % 60);
            durationEl.textContent = `${mins}:${secs.toString().padStart(2, '0')}`;
        }
    });
    
    // Set initial volume
    audio.volume = volume / 100;
    
    // Play/Pause
    playBtn.addEventListener('click', togglePlayPause);
    playAllBtn.addEventListener('click', () => {
        selectTrack(tracks[0]);
        play();
    });
    
    // Previous/Next
    prevBtn.addEventListener('click', previousTrack);
    nextBtn.addEventListener('click', nextTrack);
    
    // Shuffle/Repeat
    shuffleBtn.addEventListener('click', toggleShuffle);
    repeatBtn.addEventListener('click', toggleRepeat);
    
    // Volume
    volumeBtn.addEventListener('click', toggleMute);
    volumeSlider.addEventListener('input', (e) => {
        volume = parseInt(e.target.value);
        isMuted = false;
        audio.volume = volume / 100;
        updateVolumeUI();
    });
    
    // Progress Bar
    progressBar.addEventListener('input', (e) => {
        progress = parseFloat(e.target.value);
        if (currentTrack.url && audio.duration) {
            audio.currentTime = (progress / 100) * audio.duration;
        }
        updateCurrentTime();
    });
    
    progressBar.addEventListener('change', (e) => {
        progress = parseFloat(e.target.value);
        if (currentTrack.url && audio.duration) {
            audio.currentTime = (progress / 100) * audio.duration;
        }
        if (isPlaying && !currentTrack.url) {
            startProgress();
        }
    });
    
    // Navigation
    document.querySelectorAll('.nav-item[data-section]').forEach(item => {
        item.addEventListener('click', () => {
            const section = item.dataset.section;
            switchSection(section);
            
            document.querySelectorAll('.nav-item[data-section]').forEach(nav => {
                nav.classList.remove('active');
            });
            item.classList.add('active');
        });
    });
    
    // Sponsored Playlists button
    const sponsoredPlaylistsBtn = document.getElementById('sponsoredPlaylistsBtn');
    const sponsoredSubmenu = document.getElementById('sponsoredSubmenu');
    
    if (sponsoredPlaylistsBtn) {
        sponsoredPlaylistsBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            sponsoredPlaylistsBtn.classList.toggle('active');
            sponsoredSubmenu.classList.toggle('active');
        });
    }
    
    // Sponsored submenu items
    document.querySelectorAll('.submenu-item[data-sponsor]').forEach(item => {
        item.addEventListener('click', () => {
            const sponsor = item.dataset.sponsor;
            renderSponsoredPlaylist(sponsor);
            
            // Close submenu
            sponsoredPlaylistsBtn.classList.remove('active');
            sponsoredSubmenu.classList.remove('active');
        });
    });
    
    // Close submenu when clicking elsewhere
    document.addEventListener('click', (e) => {
        if (sponsoredSubmenu.classList.contains('active') && 
            !sponsoredPlaylistsBtn.contains(e.target) && 
            !sponsoredSubmenu.contains(e.target)) {
            sponsoredPlaylistsBtn.classList.remove('active');
            sponsoredSubmenu.classList.remove('active');
        }
    });
    
    // Radio button
    const radioBtn = document.getElementById('radioBtn');
    if (radioBtn) {
        radioBtn.addEventListener('click', () => {
            window.open('https://weradio.live', '_blank');
        });
    }
    
    // Search Input
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            handleSearch(e.target.value);
        });
    }
    
    // Mobile Search Input
    const mobileSearchInput = document.getElementById('mobileSearchInput');
    if (mobileSearchInput) {
        mobileSearchInput.addEventListener('input', (e) => {
            handleSearch(e.target.value);
            // Switch to search section when user starts typing
            switchSection('search');
        });
    }
    
    // Like Button
    const likeBtn = document.getElementById('likeBtn');
    if (likeBtn) {
        likeBtn.addEventListener('click', toggleLikeSong);
    }
    
    // Share Button
    const shareBtn = document.getElementById('shareBtn');
    if (shareBtn) {
        shareBtn.addEventListener('click', shareSong);
    }
    
    // Secondary Navigation (Create Playlist, Liked Songs)
    setupSecondaryNavigation();
    
    // Load Custom Playlists
    loadCustomPlaylists();
    
    // Keyboard shortcuts
    document.addEventListener('keydown', (e) => {
        if (e.code === 'Space' && !e.target.matches('input, textarea')) {
            e.preventDefault();
            togglePlayPause();
        } else if (e.code === 'ArrowRight') {
            e.preventDefault();
            nextTrack();
        } else if (e.code === 'ArrowLeft') {
            e.preventDefault();
            previousTrack();
        }
    });
    
    // PWA Install Prompt
    setupPWAInstall();
    
    // Media Session API for mobile controls
    setupMediaSession();
}

// Update current time from audio element
function updateCurrentTimeFromAudio() {
    if (!audio.currentTime) return;
    const currentSeconds = Math.floor(audio.currentTime);
    const mins = Math.floor(currentSeconds / 60);
    const secs = currentSeconds % 60;
    currentTimeEl.textContent = `${mins}:${secs.toString().padStart(2, '0')}`;
}

// PWA Install Prompt
let deferredPrompt;
function setupPWAInstall() {
    window.addEventListener('beforeinstallprompt', (e) => {
        e.preventDefault();
        deferredPrompt = e;
        // Show install button/banner if desired
        console.log('PWA install prompt available');
    });
    
    window.addEventListener('appinstalled', () => {
        console.log('PWA installed successfully');
        deferredPrompt = null;
    });
}

// Media Session API for mobile/system controls
function setupMediaSession() {
    if ('mediaSession' in navigator) {
        navigator.mediaSession.setActionHandler('play', () => play());
        navigator.mediaSession.setActionHandler('pause', () => pause());
        navigator.mediaSession.setActionHandler('previoustrack', () => previousTrack());
        navigator.mediaSession.setActionHandler('nexttrack', () => nextTrack());
        
        // Update metadata when track changes
        updateMediaSessionMetadata();
    }
}

// Update Media Session Metadata
function updateMediaSessionMetadata() {
    if ('mediaSession' in navigator && currentTrack) {
        navigator.mediaSession.metadata = new MediaMetadata({
            title: currentTrack.title,
            artist: currentTrack.artist,
            album: currentTrack.album,
            artwork: [
                { src: currentTrack.cover, sizes: '512x512', type: 'image/jpeg' }
            ]
        });
    }
}

// Switch between content sections
function switchSection(section) {
    // Hide all sections
    document.querySelectorAll('.content-section').forEach(sec => {
        sec.classList.remove('active');
    });
    
    // Show selected section
    const sectionMap = {
        'home': 'homeSection',
        'search': 'searchSection',
        'library': 'librarySection',
        'about us': 'aboutUsSection'
    };
    
    // Handle sponsored playlist sections
    if (section.endsWith('Playlist')) {
        const sponsor = section.replace('Playlist', '');
        const sectionId = `${sponsor}PlaylistSection`;
        const targetSection = document.getElementById(sectionId);
        if (targetSection) {
            targetSection.classList.add('active');
            return;
        }
    }
    
    const targetSection = document.getElementById(sectionMap[section]);
    if (targetSection) {
        targetSection.classList.add('active');
        
        // Focus search input when switching to search
        if (section === 'search') {
            setTimeout(() => {
                const searchInput = document.getElementById('searchInput');
                if (searchInput) searchInput.focus();
            }, 100);
        }
    }
}

// Handle search functionality
function handleSearch(query) {
    const searchResults = document.getElementById('searchResults');
    if (!searchResults) return;
    
    // Clear search if query is empty
    if (!query.trim()) {
        searchResults.innerHTML = '<p class="search-placeholder">Start typing to search for songs, artists, or albums...</p>';
        return;
    }
    
    // Filter tracks based on search query
    const filteredTracks = tracks.filter(track => {
        const searchLower = query.toLowerCase();
        return track.title.toLowerCase().includes(searchLower) ||
               track.artist.toLowerCase().includes(searchLower) ||
               track.album.toLowerCase().includes(searchLower);
    });
    
    // Display results
    if (filteredTracks.length === 0) {
        searchResults.innerHTML = '<p class="search-no-results">No results found for "' + query + '"</p>';
        return;
    }
    
    const html = `
        <div class="section-header">
            <h2 class="section-title">Search Results</h2>
            <span class="track-count">${filteredTracks.length} song${filteredTracks.length !== 1 ? 's' : ''}</span>
        </div>
        <div class="track-list">
            ${filteredTracks.map((track, index) => `
                <div class="track-item" data-track-id="${track.id}">
                    <div class="track-index">
                        <span class="track-index-number">${index + 1}</span>
                        <svg class="track-play-icon" viewBox="0 0 24 24" fill="currentColor">
                            <polygon points="5 3 19 12 5 21 5 3"></polygon>
                        </svg>
                        <div class="track-playing-indicator">
                            <div class="playing-bar"></div>
                            <div class="playing-bar"></div>
                            <div class="playing-bar"></div>
                        </div>
                    </div>
                    <img src="${track.cover}" alt="${track.album}" class="track-cover">
                    <div class="track-info">
                        <h4 class="track-title">${track.title}</h4>
                        <p class="track-artist">${track.artist}</p>
                    </div>
                    <div class="track-album">${track.album}</div>
                    <div class="track-actions">
                        <span class="track-duration">${track.duration}</span>
                    </div>
                </div>
            `).join('')}
        </div>
    `;
    
    searchResults.innerHTML = html;
    
    // Add click handlers to search results
    searchResults.querySelectorAll('.track-item').forEach(item => {
        item.addEventListener('click', () => {
            const trackId = parseInt(item.dataset.trackId);
            const track = tracks.find(t => t.id === trackId);
            if (currentTrack && currentTrack.id === track.id) {
                togglePlayPause();
            } else {
                selectTrack(track);
                play();
            }
        });
    });
}

// Render Library Track List
function renderLibraryTrackList() {
    const libraryTrackList = document.getElementById('libraryTrackList');
    if (!libraryTrackList) return;
    
    // Filter tracks to only show liked songs
    const likedTracks = tracks.filter(track => likedSongs.includes(track.id));
    
    if (likedTracks.length === 0) {
        libraryTrackList.innerHTML = '<p class="search-no-results">No liked songs yet. Like a song by clicking the heart ❤️ in the player!</p>';
        return;
    }
    
    const html = likedTracks.map((track, index) => `
        <div class="track-item" data-track-id="${track.id}">
            <div class="track-index">
                <span class="track-index-number">${index + 1}</span>
                <svg class="track-play-icon" viewBox="0 0 24 24" fill="currentColor">
                    <polygon points="5 3 19 12 5 21 5 3"></polygon>
                </svg>
                <div class="track-playing-indicator">
                    <div class="playing-bar"></div>
                    <div class="playing-bar"></div>
                    <div class="playing-bar"></div>
                </div>
            </div>
            <img src="${track.cover}" alt="${track.album}" class="track-cover">
            <div class="track-info">
                <h4 class="track-title">${track.title}</h4>
                <p class="track-artist">${track.artist}</p>
            </div>
            <div class="track-album">${track.album}</div>
            <div class="track-actions">
                <span class="track-duration">${track.duration}</span>
            </div>
        </div>
    `).join('');
    
    libraryTrackList.innerHTML = html;
    
    // Add click handlers
    libraryTrackList.querySelectorAll('.track-item').forEach(item => {
        item.addEventListener('click', () => {
            const trackId = parseInt(item.dataset.trackId);
            const track = likedTracks.find(t => t.id === trackId);
            if (currentTrack && currentTrack.id === track.id) {
                togglePlayPause();
            } else {
                selectTrack(track);
                play();
            }
        });
    });
}

// Update Library Stats
function updateLibraryStats() {
    const totalSongsEl = document.getElementById('totalSongs');
    if (totalSongsEl) {
        // Update to show count of liked songs
        totalSongsEl.textContent = likedSongs.length;
    }
}

// Setup Secondary Navigation
function setupSecondaryNavigation() {
    const secondaryNavItems = document.querySelectorAll('.secondary-nav .nav-item');
    
    secondaryNavItems.forEach(item => {
        item.addEventListener('click', () => {
            const itemText = item.textContent.trim();
            
            if (itemText === 'Create Playlist') {
                handleCreatePlaylist();
            } else if (itemText === 'Liked Songs') {
                handleLikedSongs();
            }
        });
    });
}

// Handle Create Playlist
function handleCreatePlaylist() {
    const playlistName = prompt('Enter playlist name:', 'My Playlist');
    
    if (playlistName && playlistName.trim()) {
        // Show success message
        showNotification(`Playlist "${playlistName}" created successfully!`);
        
        // Add to playlists list
        const playlistsList = document.querySelector('.playlists-list');
        if (playlistsList) {
            const newPlaylist = document.createElement('button');
            newPlaylist.className = 'playlist-item';
            newPlaylist.textContent = playlistName;
            newPlaylist.addEventListener('click', () => {
                showNotification(`Opening "${playlistName}" playlist...`);
            });
            playlistsList.appendChild(newPlaylist);
        }
    }
}

// Handle Liked Songs
function handleLikedSongs() {
    // Switch to library section
    switchSection('library');
    
    // Update nav highlighting
    document.querySelectorAll('.nav-item[data-section]').forEach(nav => {
        nav.classList.remove('active');
    });
    const libraryNav = document.querySelector('.nav-item[data-section="library"]');
    if (libraryNav) {
        libraryNav.classList.add('active');
    }
    
    // Render only liked songs
    renderLibraryTrackList();
    
    showNotification(`Showing ${likedSongs.length} liked song${likedSongs.length !== 1 ? 's' : ''}`);
}

// Share Song
function shareSong() {
    if (!currentTrack) {
        showNotification('No track selected to share');
        return;
    }
    
    const shareData = {
        title: currentTrack.title,
        text: `Check out "${currentTrack.title}" by ${currentTrack.artist} on Nthungulu.com`,
        url: window.location.href
    };
    
    if (navigator.share) {
        navigator.share(shareData)
            .then(() => console.log('Shared successfully'))
            .catch((error) => {
                console.log('Error sharing:', error);
                copyToClipboard(shareData.url);
            });
    } else {
        copyToClipboard(shareData.url);
    }
}

// Copy to clipboard function
function copyToClipboard(text) {
    const textarea = document.createElement('textarea');
    textarea.value = text;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
    showNotification('Link copied to clipboard!');
}

// Update progress bar style dynamically
function updateProgressBarStyle() {
    const progressBar = document.getElementById('progressBar');
    if (progressBar) {
        const value = (progressBar.value / progressBar.max) * 100;
        progressBar.style.setProperty('--seek-before-width', `${value}%`);
    }
}

// Show Notification
function showNotification(message) {
    // Create notification element if it doesn't exist
    let notification = document.getElementById('notification');
    
    if (!notification) {
        notification = document.createElement('div');
        notification.id = 'notification';
        notification.style.cssText = `
            position: fixed;
            bottom: 120px;
            left: 50%;
            transform: translateX(-50%);
            background: rgba(25, 138, 0, 0.95);
            color: white;
            padding: 12px 24px;
            border-radius: 8px;
            font-size: 14px;
            font-weight: 500;
            z-index: 1000;
            opacity: 0;
            transition: opacity 0.3s ease;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
        `;
        document.body.appendChild(notification);
    }
    
    notification.textContent = message;
    notification.style.opacity = '1';
    
    // Hide after 3 seconds
    setTimeout(() => {
        notification.style.opacity = '0';
    }, 3000);
}

// Load Custom Playlists
function loadCustomPlaylists() {
    const playlistsList = document.querySelector('.playlists-list');
    if (!playlistsList) return;
    
    // Load saved playlists from localStorage
    customPlaylists.forEach(playlistName => {
        const playlistItem = document.createElement('button');
        playlistItem.className = 'playlist-item custom-playlist';
        playlistItem.textContent = playlistName;
        
        // Right-click to delete
        playlistItem.addEventListener('contextmenu', (e) => {
            e.preventDefault();
            deletePlaylist(playlistName, playlistItem);
        });
        
        // Left-click to open
        playlistItem.addEventListener('click', () => {
            showNotification(`Opening "${playlistName}" playlist...`);
        });
        
        playlistsList.appendChild(playlistItem);
    });
}

// Delete Playlist
function deletePlaylist(playlistName, element) {
    const confirm = window.confirm(`Delete playlist "${playlistName}"?`);
    
    if (confirm) {
        // Remove from custom playlists array
        customPlaylists = customPlaylists.filter(name => name !== playlistName);
        
        // Save to localStorage
        localStorage.setItem('customPlaylists', JSON.stringify(customPlaylists));
        
        // Remove from DOM
        element.remove();
        
        showNotification(`Playlist "${playlistName}" deleted`);
    }
}

// Service Worker Registration
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
            .then(registration => {
                console.log('Service Worker registered:', registration.scope);
            })
            .catch(error => {
                console.log('Service Worker registration failed:', error);
            });
    });
}

// Hamburger menu functionality
document.addEventListener('DOMContentLoaded', () => {
    const hamburgerMenu = document.getElementById('hamburgerMenu');
    const mainNav = document.getElementById('mainNav');
    
    if (hamburgerMenu && mainNav) {
        hamburgerMenu.addEventListener('click', (e) => {
            e.stopPropagation();
            mainNav.classList.toggle('active');
        });
        
        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (mainNav.classList.contains('active') && 
                !mainNav.contains(e.target) && 
                e.target !== hamburgerMenu) {
                mainNav.classList.remove('active');
            }
        });
    }
    
    // Logo click event listeners
    const logoContainer = document.getElementById('logoContainer');
    const logoText = document.getElementById('logoText');
    
    if (logoContainer) {
        logoContainer.addEventListener('click', () => {
            switchSection('home');
            
            // Update nav highlighting
            document.querySelectorAll('.nav-item[data-section]').forEach(nav => {
                nav.classList.remove('active');
            });
            const homeNav = document.querySelector('.nav-item[data-section="home"]');
            if (homeNav) {
                homeNav.classList.add('active');
            }
        });
    }
    
    if (logoText) {
        logoText.addEventListener('click', () => {
            switchSection('home');
            
            // Update nav highlighting
            document.querySelectorAll('.nav-item[data-section]').forEach(nav => {
                nav.classList.remove('active');
            });
            const homeNav = document.querySelector('.nav-item[data-section="home"]');
            if (homeNav) {
                homeNav.classList.add('active');
            }
        });
    }
    
    // Initialize the app
    init();
});
