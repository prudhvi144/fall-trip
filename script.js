// Sunrise/Sunset times for October 2025 (New England area)
const sunTimes = {
    "2025-10-09": { sunrise: "6:52 AM", sunset: "6:12 PM" },
    "2025-10-10": { sunrise: "6:53 AM", sunset: "6:10 PM" },
    "2025-10-11": { sunrise: "6:54 AM", sunset: "6:08 PM" },
    "2025-10-12": { sunrise: "6:56 AM", sunset: "6:07 PM" },
    "2025-10-13": { sunrise: "6:57 AM", sunset: "6:05 PM" },
    "2025-10-14": { sunrise: "6:58 AM", sunset: "6:03 PM" }
};

// Temperature forecasts for October 2025 (New England area)
const temperatures = {
    "2025-10-09": { high: "62°F", low: "45°F", location: "Boston" },
    "2025-10-10": { high: "59°F", low: "43°F", location: "Boston/Lake Winnipesaukee" },
    "2025-10-11": { high: "55°F", low: "38°F", location: "Stowe, VT" },
    "2025-10-12": { high: "57°F", low: "40°F", location: "White Mountains, NH" },
    "2025-10-13": { high: "61°F", low: "44°F", location: "Mount Washington/Portland" },
    "2025-10-14": { high: "63°F", low: "46°F", location: "Return Home" }
};

// Trip Data Structure
const tripData = {
    "2025-10-09": {
        dayNumber: 1,
        title: "Arrival Day",
        date: "Thursday, October 9, 2025",
        preview: "Delaware → New Jersey → Boston",
        highlights: ["Delaware", "New Jersey", "Boston"],
        activities: [
            {
                time: "8:00 AM",
                title: "Delaware",
                description: "Start from Delaware",
                icon: "fas fa-car",
                meme: "images/brahmanamdam-telugu-comedy.gif",
                meme_title: "When you start a long road trip at 8 AM! 😄"
            },
            {
                time: "Morning",
                title: "Delaware → New Jersey",
                description: "Drive to New Jersey",
                icon: "fas fa-route",
                meme: "images/right-right-jrntr.gif",
                meme_title: " driving to NJ! 🚗"
            },
            {
                time: "Site Visit Time",
                title: "Site Visit in NJ",
                description: "⚠️ IMPORTANT: Stay focused on work - no deviations",
                icon: "fas fa-hard-hat",
                meme: "images/ooft-jealous-girlfriend.gif",
                meme_title: "Nithin"
            },
            {
                time: "4:45 PM",
                title: "Bathroom Break in NJ",
                description: "🚽 it NOW! ",
                icon: "fas fa-restroom",
                meme: "images/thondara-ga-vellali-ucha.gif",
                meme_title: "😅"
            },
            {
                time: "5:00 PM",
                title: "New Jersey → Boston",
                description: "🚗💨 ",
                icon: "fas fa-car",
                meme: "images/rajini-chewing-gum-style-rajini.gif",
                meme_title: "Prasanna"
            },
            {
                time: "9:30 PM",
                title: "Boston",
                description: "Arrive at Boston house",
                icon: "fas fa-home"
            },
            {
                time: "10:30 PM",
                title: "Dinner in Boston",
                description: "Dinner at Boston house",
                icon: "fas fa-utensils",
                meme: "images/nayak-jp.gif",
                meme_title: "Fooodu"
            },
            {
                time: "Late Night",
                title: "Chill",
                description: "Chill",
                icon: "fas fa-gamepad",
                meme: "images/brahmi-venky.gif",
                meme_title: "chill"
            }
        ],
        driving: {
            route: "Delaware → New Jersey → Boston",
            drivers: ["Nitin ", "Prasanna "],
            departure: "8:00 AM from Delaware, 5:00 PM from NJ",
            arrival: "9:30 PM in Boston",
            duration: "Delaware to NJ: ~2 hours, NJ to Boston: ~4.5 hours",
            rules: [
                "🌅 8:00 AM: Start from Delaware",
                "🚽 Use bathroom BEFORE 5:00 PM in NJ",
                "⏰ NJ departure is at 5:00 PM",
                "🔥 Nitin: Stay focused during site visit (no hot girl distractions!)",
                "🚗 Couples travel together: Nitin+Divya, Prasanna+Rachna"
            ],
            meme_image: "images/brahmanamdam-telugu-comedy.gif",
            meme_title: "When you start a long road trip at 8 AM! 😄"
        },
        travel: {
            from: "Delaware → New Jersey → Boston",
            to: "Boston house",
            method: "Car",
            duration: "8 AM - 9:30 PM",
            notes: "Delaware → NJ site visit → Boston. 5 PM NJ departure"
        }
    },
    "2025-10-10": {
        dayNumber: 2,
        title: "Lake & Mountain",
        date: "Friday, October 10, 2025",
        preview: "Chowrastha → Vambis House → Lake Winnipesaukee → Mount Major",
        highlights: ["Chowrastha", "Lake Winnipesaukee", "Mount Major", "USA Chicken"],
        activities: [
            {
                time: "Morning",
                title: "Chowrastha",
                description: "Breakfast at Chowrastha",
                icon: "fas fa-utensils"
            },
            {
                time: "Morning",
                title: "Work",
                description: "Work time",
                icon: "fas fa-laptop"
            },
            {
                time: "Lunch Time",
                title: "Vambis House",
                description: "Lunch at Vambis house",
                icon: "fas fa-home"
            },
            {
                time: "2:30 PM",
                title: "Departure to Lake Winnipesaukee",
                description: "Depart for the lake",
                icon: "fas fa-car",
                meme: "images/rajini-chewing-gum-style-rajini.gif",
                meme_title: "Prasanna"
            },
            {
                time: "Afternoon",
                title: "Lake Winnipesaukee",
                description: "Lake Winnipesaukee",
                icon: "fas fa-water"
            },
            {
                time: "Sunset Time",
                title: "Mount Major",
                description: "Hike Mount Major for sunset",
                icon: "fas fa-mountain"
            },
            {
                time: "Evening",
                title: "USA Chicken & Biscuit",
                description: "Dinner at USA Chicken & Biscuit",
                icon: "fas fa-drumstick-bite"
            }
        ],
        travel: {
            from: "House → Chowrastha → Vambis House → Lake Winnipesaukee → Mount Major",
            to: "USA Chicken & Biscuit",
            method: "Car",
            duration: "Full day",
            notes: "2:30 PM departure for lake. Mount Major sunset hike"
        }
    },
    "2025-10-11": {
        dayNumber: 3,
        title: "Mount Major & Scenic Route",
        date: "Saturday, October 11, 2025",
        preview: "Manchester → Mount Major → Eaton → Chocorua Lake → Bethel",
        highlights: ["Mount Major Hike", "Crystal Lake", "Chocorua Lake", "Bethel Airbnb"],
        activities: [
            {
                time: "9:30 AM",
                title: "Depart Manchester, NH",
                description: "Start journey from Manchester",
                icon: "fas fa-car",
                meme: "images/rajini-chewing-gum-style-rajini.gif",
                meme_title: "Road trip begins! 🚗"
            },
            {
                time: "9:30 → 10:05 AM",
                title: "Travel to Hopkinton",
                description: "Drive via Auburn (~35 min)",
                icon: "fas fa-route"
            },
            {
                time: "10:05 → 10:25 AM",
                title: "Break in Hopkinton",
                description: "Fuel, stretch",
                icon: "fas fa-gas-pump"
            },
            {
                time: "10:25 → 11:00 AM",
                title: "Drive to New London, NH",
                description: "~35 min drive",
                icon: "fas fa-car"
            },
            {
                time: "11:00 → 11:30 AM",
                title: "Lunch in New London",
                description: "Quick lunch",
                icon: "fas fa-utensils"
            },
            {
                time: "11:30 AM → 12:50 PM",
                title: "Drive to Mount Major",
                description: "Mount Major trailhead (Alton) ~1h 20m",
                icon: "fas fa-car"
            },
            {
                time: "12:50 → 3:20 PM",
                title: "Mount Major Hike",
                description: "2.5 hour hike",
                icon: "fas fa-hiking",
                duration: "2.5 hours",
                highlight: "Panoramic lake views",
                meme: "images/dj-tillu-siddhu-jonnalagadda.gif",
                meme_title: "Mount Major hike! 🏔️😄"
            },
            {
                time: "3:20 → 4:30 PM",
                title: "Drive to Eaton, NH",
                description: "~1h 10m via mountain routes",
                icon: "fas fa-route",
                meme: "images/rajini-chewing-gum-style-rajini.gif",
                meme_title: "Mountain roads! 🚗"
            },
            {
                time: "4:30 → 4:50 PM",
                title: "Crystal Lake & Little White Church",
                description: "Quick visit in Eaton, photos",
                icon: "fas fa-camera",
                duration: "~20 min"
            },
            {
                time: "4:50 → 5:05 PM",
                title: "Drive to Chocorua Lake",
                description: "Tamworth, NH (~15 min)",
                icon: "fas fa-car"
            },
            {
                time: "5:05 → 5:25 PM",
                title: "Chocorua Lake Stop",
                description: "Scenic views",
                icon: "fas fa-camera",
                highlight: "Mount Chocorua reflection"
            },
            {
                time: "5:25 → 6:35 PM",
                title: "Drive to Bethel, Maine",
                description: "~1h 10m",
                icon: "fas fa-car",
                meme: "images/rajini-chewing-gum-style-rajini.gif",
                meme_title: "Final stretch! 🚗"
            },
            {
                time: "~6:35 PM",
                title: "Arrive Bethel Airbnb",
                description: "Check in at Bethel Airbnb",
                icon: "fas fa-home",
                meme: "images/brahmi-venky.gif",
                meme_title: "Airbnb time! 🏠😄"
            },
            {
                time: "Evening",
                title: "Dinner & Rest",
                description: "Dinner and relaxation",
                icon: "fas fa-utensils"
            }
        ],
        driving: {
            route: "Manchester → Hopkinton → New London → Mount Major → Eaton → Chocorua Lake → Bethel",
            drivers: ["Group"],
            departure: "9:30 AM from Manchester",
            arrival: "~6:35 PM in Bethel",
            duration: "~9 hours (includes stops & hike)",
            rules: [
                "⛽ Fuel stop in Hopkinton",
                "🍽️ Lunch in New London",
                "🥾 2.5 hour Mount Major hike",
                "📸 Crystal Lake & Little White Church photos",
                "🏞️ Chocorua Lake scenic stop",
                "🏠 Arrive Bethel with buffer for dinner"
            ]
        },
        travel: {
            from: "Manchester, NH",
            to: "Bethel, ME Airbnb",
            method: "Car",
            duration: "9:30 AM - 6:35 PM",
            notes: "Mount Major hike + scenic mountain route via Eaton & Chocorua Lake"
        }
    },
    "2025-10-12": {
        dayNumber: 4,
        title: "Franconia to Dixville",
        date: "Sunday, October 12, 2025",
        preview: "Sugar Hill → Franconia Notch → North Conway → Kancamagus Highway → Dixville Notch.",
        highlights: ["Sugar Hill", "Franconia Notch", "North Conway", "Kancamagus Highway", "Dixville Notch"],
        activities: [
            {
                time: "6:15 AM",
                title: "Sugar Hill",
                description: "Sunrise at Sugar Hill",
                icon: "fas fa-sun",
                highlight: "Sunrise photography over Presidentials",
                meme: "images/telugu-comedy-actors-bigbosstelugu.gif",
                meme_title: "6:15 AM sunrise reaction! 😂"
            },
            {
                time: "7:00 AM",
                title: "Polly's Pancake Parlor",
                description: "Breakfast at Polly's Pancake Parlor",
                icon: "fas fa-utensils",
                optional: true,
                meme: "images/telugu-comedy.gif",
                meme_title: "Pancake time! 🥞😄"
            },
            {
                time: "8:00 AM",
                title: "The Basin",
                description: "The Basin (10-15 min)",
                icon: "fas fa-water",
                duration: "10-15 minutes",
                meme: "images/telugu-gifs.gif",
                meme_title: "Checking out The Basin! 💦😆"
            },
            {
                time: "9:00 AM",
                title: "Kinsman Falls",
                description: "Kinsman Falls",
                icon: "fas fa-mountain",
                duration: "Short walk",
                optional: true,
                meme: "images/telugu-memes-telugu-funny-memes (1).gif",
                meme_title: "Waterfall vibes! 🌊😄"
            },
            {
                time: "11:00 AM",
                title: "Cathedral Ledge",
                description: "Cathedral Ledge",
                icon: "fas fa-mountain",
                highlight: "Panoramic Saco Valley views"
            },
            {
                time: "11:30 AM",
                title: "Echo Lake",
                description: "Echo Lake",
                icon: "fas fa-water",
                duration: "Gentle stroll"
            },
            {
                time: "12:30 PM",
                title: "Diana's Baths",
                description: "Diana's Baths (20 min)",
                icon: "fas fa-leaf",
                duration: "20 minutes",
                highlight: "Perfect lunch spot"
            },
            {
                time: "2:00 PM",
                title: "Sabbaday Falls",
                description: "Sabbaday Falls (0.7 mile)",
                icon: "fas fa-water",
                duration: "0.7 mile round trip"
            },
            {
                time: "2:45 PM",
                title: "Rocky Gorge",
                description: "Rocky Gorge",
                icon: "fas fa-camera",
                duration: "Quick stop",
                meme: "images/telugu-memes-telugu-funny-memes.gif",
                meme_title: "When you're taking reflection photos! 📸😄"
            },
            {
                time: "3:15 PM",
                title: "Albany Covered Bridge",
                description: "Albany Covered Bridge",
                icon: "fas fa-bridge",
                highlight: "Classic New England photo op"
            },
            {
                time: "3:45 PM",
                title: "Lower Falls",
                description: "Lower Falls",
                icon: "fas fa-water",
                duration: "Easy pull-off"
            },
            {
                time: "5:15 PM",
                title: "Dixville Notch",
                description: "Arrive at Dixville Notch",
                icon: "fas fa-car"
            },
            {
                time: "5:30 PM",
                title: "Table Rock",
                description: "Hike to Table Rock (0.5 mile / 20 min)",
                icon: "fas fa-hiking",
                duration: "20 minutes",
                difficulty: "Steep but short",
                meme: "images/dj-tillu-siddhu-jonnalagadda.gif",
                meme_title: "When you start the steep Table Rock hike! 🪨😄"
            },
            {
                time: "6:00 PM",
                title: "Sunset at Table Rock",
                description: "Sunset at Table Rock",
                icon: "fas fa-sun",
                highlight: "Epic sunset finale",
                duration: "15 minutes"
            },
            {
                time: "6:45 PM",
                title: "Hike Down",
                description: "Hike down with headlamp",
                icon: "fas fa-moon",
                duration: "20 minutes"
            },
            {
                time: "7:30 PM",
                title: "Return to Airbnb",
                description: "Drive back to Airbnb",
                icon: "fas fa-home",
                meme: "images/brahmi-venky.gif",
                meme_title: "When you finally make it back to the Airbnb after an epic day! 🏠😄"
            }
        ],
        driving: {
            route: "Airbnb → Sugar Hill → Franconia → North Conway → Kancamagus → Dixville → Airbnb",
            drivers: ["Group"],
            departure: "6:00 AM",
            arrival: "7:30 PM", 
            duration: "13.5 hours",
            rules: [
                "🌅 Sunrise at Sugar Hill",
                "📱 Bring cameras",
                "🎒 Pack lunch for Diana's Baths",
                "🔦 Bring headlamps for Table Rock",
                "🏠 Return to Airbnb"
            ],
            route_highlights: [
                "Sugar Hill",
                "Franconia Notch",
                "North Conway", 
                "Kancamagus Highway",
                "Dixville Notch"
            ]
        },
        travel: {
            from: "Airbnb",
            to: "Airbnb (via Franconia → Conway → Kancamagus → Dixville)",
            method: "Car + Hikes",
            duration: "13.5 hours",
            notes: "Sugar Hill → Franconia Notch → North Conway → Kancamagus Highway → Dixville Notch → Airbnb"
        }
    },
    "2025-10-13": {
        dayNumber: 5,
        title: "Mount Washington to Maine Coast",
        date: "Monday, October 13, 2025",
        preview: "Mount Washington → Crawford Notch → Pinkham Notch → Portland → York",
        highlights: ["Mount Washington", "Crawford Notch", "Pinkham Notch", "Portland Head Light", "York"],
        activities: [
            {
                time: "7:30 AM",
                title: "Breakfast at Airbnb",
                description: "Breakfast at Airbnb",
                icon: "fas fa-coffee",
                meme: "images/brahmi-venky.gif",
                meme_title: "Morning vibes at the Airbnb! ☕😄"
            },
            {
                time: "8:00 AM",
                title: "Mount Washington Auto Road",
                description: "Drive to Mount Washington (6,288 ft). Bring layers",
                icon: "fas fa-mountain",
                duration: "2-3 hours total",
                highlight: "Highest peak in Northeast",
                warning: "Bring layers - weather is wild up there!"
            },
            {
                time: "11:00 AM",
                title: "Mount Washington Summit",
                description: "Mount Washington summit",
                icon: "fas fa-mountain",
                highlight: "360° views over Whites + Maine/Canada",
                meme: "images/very-reasonable-sunil.gif",
                meme_title: "Very reasonable summit! 😄"
            },
            {
                time: "12:00 PM",
                title: "Silver Cascade",
                description: "Silver Cascade (Crawford Notch)",
                icon: "fas fa-water",
                duration: "Quick photo stop"
            },
            {
                time: "12:30 PM",
                title: "Glen Ellis Falls",
                description: "Glen Ellis Falls (Pinkham Notch) - 0.6 mile",
                icon: "fas fa-water",
                duration: "0.6 mile round trip",
                highlight: "One of the best waterfalls in NH",
                meme: "images/dj-tillu-siddhu-jonnalagadda.gif",
                meme_title: "When you start the Glen Ellis Falls trail hike! 🏔️😄"
            },
            {
                time: "2:00 PM",
                title: "Conway Village",
                description: "Snacks at Conway Village",
                icon: "fas fa-utensils"
            },
            {
                time: "2:30 PM",
                title: "Sebago Lake",
                description: "Sebago Lake",
                icon: "fas fa-water",
                optional: true
            },
            {
                time: "4:00 PM",
                title: "Portland Head Light",
                description: "Portland Head Light",
                icon: "fas fa-lighthouse",
                highlight: "Maine's most iconic lighthouse"
            },
            {
                time: "5:00 PM",
                title: "Old Port District",
                description: "Old Port District, Portland",
                icon: "fas fa-utensils",
                highlight: "Cobblestone streets & seafood"
            },
            {
                time: "6:30 PM",
                title: "Nubble Light",
                description: "Nubble Light",
                icon: "fas fa-lighthouse",
                highlight: "Classic coastal photo at golden hour"
            },
            {
                time: "7:00 PM",
                title: "York Beach",
                description: "Short Sands or Long Sands Beach",
                icon: "fas fa-umbrella-beach",
                highlight: "Dip toes in the Atlantic Ocean"
            },
            {
                time: "8:00 PM",
                title: "Return to Airbnb",
                description: "Drive back to Airbnb",
                icon: "fas fa-home",
                meme: "images/harikrishna-enjoying.gif",
                meme_title: "When you finally make it back to the Airbnb after an epic day! 🏠😄"
            }
        ],
        driving: {
            route: "Airbnb → Mount Washington → Crawford/Pinkham Notches → Conway → Portland → York → Airbnb",
            drivers: ["Group"],
            departure: "8:00 AM",
            arrival: "8:00 PM", 
            duration: "12 hours",
            rules: [
                "🏔️ Mount Washington: Bring layers",
                "📱 Bring cameras",
                "🌊 Atlantic Ocean",
                "🏠 Return to Airbnb"
            ],
            route_highlights: [
                "Mount Washington",
                "Crawford & Pinkham Notches",
                "Portland Head Light",
                "York beaches"
            ]
        },
        travel: {
            from: "Airbnb",
            to: "Airbnb (via Mount Washington → Portland → York)",
            method: "Car + Auto Road",
            duration: "12 hours",
            notes: "Mount Washington → Waterfalls → Portland Head Light → York beaches → Airbnb"
        }
    },
    "2025-10-14": {
        dayNumber: 6,
        title: "Return Home",
        date: "Tuesday, October 14, 2025",
        preview: "Already Home → Friends Depart",
        highlights: ["Sleep in", "Pack up", "Friends depart"],
        activities: [
            {
                time: "9:00 AM",
                title: "Sleep In",
                description: "Sleep in at home",
                icon: "fas fa-bed"
            },
            {
                time: "10:00 AM",
                title: "Breakfast",
                description: "Breakfast at home",
                icon: "fas fa-coffee",
                meme: "images/brahmi-venky.gif",
                meme_title: "Home breakfast! ☕😄"
            },
            {
                time: "11:00 AM",
                title: "Pack Up",
                description: "Friends pack up",
                icon: "fas fa-suitcase"
            },
            {
                time: "12:00 PM",
                title: "Group Photos",
                description: "Group photos",
                icon: "fas fa-camera-retro"
            },
            {
                time: "1:00 PM",
                title: "Begin Journey Home",
                description: "Friends begin journey to their homes",
                icon: "fas fa-car",
                meme: "images/rajini-chewing-gum-style-rajini.gif",
                meme_title: "Rajini style journey home! 😎"
            },
            {
                time: "4:00 PM",
                title: "Rest Stop",
                description: "Rest stop on the way",
                icon: "fas fa-utensils"
            },
            {
                time: "7:00 PM",
                title: "Arrive Home",
                description: "Friends arrive at their homes",
                icon: "fas fa-home",
                meme: "images/yaa-yes.gif",
                meme_title: "Yaaa... Home! 🎉😄"
            },
            {
                time: "Evening",
                title: "Departure",
                description: "Trip complete",
                icon: "fas fa-heart",
                meme: "images/bye-tata.gif",
                meme_title: "Bye bye! Until next time! 👋😊"
            }
        ],
        travel: {
            from: "Home (already arrived previous night)",
            to: "Friends' Homes",
            method: "Car",
            duration: "3-4 hours for friends",
            notes: "Friends depart from your home to their respective homes"
        }
    }
};

// DOM Elements
const daysGrid = document.getElementById('daysGrid');
const modal = document.getElementById('dayModal');
const modalContent = document.getElementById('modalContent');
const closeModal = document.querySelector('.close');

// Initialize the website
// Play meme when activity is clicked
function playActivityMeme(memeUrl, memeTitle) {
    console.log('Playing meme:', memeUrl, memeTitle); // Debug log
    
    // Create meme modal
    const memeModal = document.createElement('div');
    memeModal.className = 'meme-modal';
    memeModal.innerHTML = `
        <div class="meme-modal-content">
            <div class="meme-modal-header">
                <h3>${memeTitle}</h3>
                <span class="meme-close">&times;</span>
            </div>
            <img src="${memeUrl}" alt="Activity Meme" class="meme-modal-gif" onload="console.log('Meme loaded successfully')" onerror="console.error('Failed to load meme:', this.src)">
        </div>
    `;
    
    document.body.appendChild(memeModal);
    
    // Show modal immediately
    memeModal.classList.add('show');
    
    // Auto-close after 5 seconds
    const autoClose = setTimeout(() => {
        closeMemeModal(memeModal);
    }, 5000);
    
    // Close on click
    memeModal.addEventListener('click', (e) => {
        if (e.target === memeModal || e.target.classList.contains('meme-close')) {
            clearTimeout(autoClose);
            closeMemeModal(memeModal);
        }
    });
    
    // Prevent event bubbling
    memeModal.querySelector('.meme-modal-content').addEventListener('click', (e) => {
        e.stopPropagation();
    });
}

function closeMemeModal(modal) {
    modal.classList.remove('show');
    setTimeout(() => {
        if (modal.parentNode) {
            modal.parentNode.removeChild(modal);
        }
    }, 300);
}

document.addEventListener('DOMContentLoaded', function() {
    setupEventListeners();
    initCustomCursor();
    setupChickenButton();
    initInteractiveMap();
    setupDaysCard();
});

// Setup Days Card Click
function setupDaysCard() {
    const daysCard = document.getElementById('daysStatCard');
    const daysGrid = document.getElementById('daysGrid');
    const itinerarySection = document.querySelector('.itinerary');
    
    // Initially hide the itinerary
    itinerarySection.style.display = 'none';
    
    daysCard.addEventListener('click', function() {
        // Show itinerary with animation
        itinerarySection.style.display = 'block';
        itinerarySection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        
        // Render days if not already rendered
        if (!daysGrid.children.length) {
            renderDays();
        }
        
        // Add animation class to days
        setTimeout(() => {
            document.querySelectorAll('.day-card').forEach((card, index) => {
                card.style.animation = `fadeInUp 0.5s ease forwards ${index * 0.1}s`;
            });
        }, 100);
        
        // Update card style
        this.style.background = 'linear-gradient(135deg, #dc2626, #f59e0b)';
        this.style.color = 'white';
        this.querySelector('.stat-hint').textContent = 'Day-wise plan revealed!';
        this.querySelector('.stat-hint').style.color = 'white';
        this.querySelector('i').style.color = 'white';
    });
}

// Custom Cursor Functionality
function initCustomCursor() {
    const cursor = document.getElementById('customCursor');
    
    // Track mouse movement
    document.addEventListener('mousemove', (e) => {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
    });
    
    // Add hover effects for clickable elements
    const clickableElements = document.querySelectorAll('button, .day-card, .destination-card, .close, a, .image-placeholder');
    
    clickableElements.forEach(element => {
        element.addEventListener('mouseenter', () => {
            cursor.classList.add('hover');
        });
        
        element.addEventListener('mouseleave', () => {
            cursor.classList.remove('hover');
        });
    });
    
    // Add click effect
    document.addEventListener('mousedown', () => {
        cursor.classList.add('click');
    });
    
    document.addEventListener('mouseup', () => {
        cursor.classList.remove('click');
    });
    
    // Hide cursor when leaving the window
    document.addEventListener('mouseleave', () => {
        cursor.style.opacity = '0';
    });
    
    document.addEventListener('mouseenter', () => {
        cursor.style.opacity = '1';
    });
}

// Chicken Button Functionality
function setupChickenButton() {
    const chickenButton = document.getElementById('chickenButton');
    const chickenReveal = document.getElementById('chickenReveal');
    const cursor = document.getElementById('customCursor');
    
    chickenButton.addEventListener('click', function() {
        // Show the reveal message
        chickenReveal.style.display = 'block';
        
        // Enable custom cursor and hide normal cursor
        document.body.style.cursor = 'none';
        cursor.style.display = 'block';
        
        // Change cursor to the chicken person image
        cursor.style.backgroundImage = "url('images/qj2GqQ1RQxqQ1RFuyvpJ3A.jpeg')";
        
        // Update button text
        chickenButton.innerHTML = '<i class="fas fa-egg"></i> Chicken Found! 🐔';
        chickenButton.style.background = 'linear-gradient(135deg, rgba(34, 197, 94, 0.1), rgba(34, 197, 94, 0.05))';
        chickenButton.style.borderColor = 'rgba(34, 197, 94, 0.3)';
        chickenButton.style.color = 'rgba(34, 197, 94, 0.9)';
        
        // Disable button
        chickenButton.disabled = true;
        chickenButton.style.cursor = 'none';
        
        // Add some fun effects
        chickenButton.style.transform = 'scale(1.05)';
        setTimeout(() => {
            chickenButton.style.transform = 'scale(1)';
        }, 200);
        
        // Re-attach cursor event listeners for the new cursor
        attachCursorListeners();
    });
}

// Separate function to attach cursor listeners
function attachCursorListeners() {
    const cursor = document.getElementById('customCursor');
    
    // Remove existing listeners and add new ones
    document.removeEventListener('mousemove', moveCursor);
    document.addEventListener('mousemove', moveCursor);
    
    function moveCursor(e) {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
    }
}

// Render day cards
function renderDays() {
    const sortedDates = Object.keys(tripData).sort();
    
    sortedDates.forEach(date => {
        const day = tripData[date];
        const dayCard = createDayCard(day, date);
        daysGrid.appendChild(dayCard);
    });
}

// Create individual day card
function createDayCard(day, date) {
    const card = document.createElement('div');
    card.className = 'day-card';
    card.setAttribute('data-date', date);
    
    card.innerHTML = `
        <div class="day-header">
            <div class="day-number">${day.dayNumber}</div>
            <div class="day-info">
                <h3>${day.title}</h3>
                <div class="day-date">${day.date}</div>
                <div class="weather-info">
                    <div class="temperature">
                        <i class="fas fa-temperature-high"></i>
                        <span class="temp-high">${temperatures[date].high}</span>
                        <span class="temp-separator">/</span>
                        <span class="temp-low">${temperatures[date].low}</span>
                    </div>
                    <div class="sun-times">
                        <div class="sunrise">
                            <i class="fas fa-sun"></i>
                            ${sunTimes[date].sunrise}
                        </div>
                        <div class="sunset">
                            <i class="fas fa-moon"></i>
                            ${sunTimes[date].sunset}
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="day-preview">
            ${day.preview}
        </div>
        <div class="day-highlights">
            ${day.highlights.map(highlight => 
                `<span class="highlight-tag">${highlight}</span>`
            ).join('')}
        </div>
    `;
    
    card.addEventListener('click', () => openDayDetail(date));
    
    return card;
}

// Open day detail modal with loading animation
function openDayDetail(date) {
    const day = tripData[date];
    const loadingOverlay = document.getElementById('loadingOverlay');
    
    // Show loading animation first
    loadingOverlay.style.display = 'flex';
    document.body.style.overflow = 'hidden';
    
    // Simulate loading time to show the GIF (2.5 seconds to match GIF duration)
    setTimeout(() => {
        const detailHTML = createDayDetailHTML(day, date);
        modalContent.innerHTML = detailHTML;
        
        // Hide loading and show modal
        loadingOverlay.style.display = 'none';
        modal.style.display = 'block';
    }, 2500); // 2.5 seconds to let the GIF play
}

// Create detailed day view HTML
function createDayDetailHTML(day, date) {
    // Add temperature meme for specific days
    let tempMemeClass = "";
    let tempMemeData = "";
    
    if (date === "2025-10-11" || date === "2025-10-13") {
        // Day 3 and Day 5 - new-post.gif
        tempMemeClass = "has-temp-meme";
        tempMemeData = `data-temp-meme="images/new-post.gif" data-temp-meme-title="Chala unfortunate idi! 😅"`;
    } else if (date === "2025-10-09" || date === "2025-10-10" || date === "2025-10-12" || date === "2025-10-14") {
        // Day 1, 2, 4, 6 - smile-gifs.gif
        tempMemeClass = "has-temp-meme";
        tempMemeData = `data-temp-meme="images/smile-gifs.gif" data-temp-meme-title="Perfect weather! 😊"`;
    }
    
    return `
        <div class="day-detail">
            <div class="day-detail-header">
                <h2>${day.title}</h2>
                <div class="day-detail-date">${day.date}</div>
                <div class="day-detail-weather">
                    <div class="temperature-detail ${tempMemeClass}" ${tempMemeData}>
                        <i class="fas fa-temperature-high"></i>
                        <span class="temp-high">${temperatures[date].high}</span>
                        <span class="temp-separator">/</span>
                        <span class="temp-low">${temperatures[date].low}</span>
                        <span class="temp-location">${temperatures[date].location}</span>
                    </div>
                    <div class="sun-times">
                        <div class="sunrise">
                            <i class="fas fa-sun"></i>
                            Sunrise: ${sunTimes[date].sunrise}
                        </div>
                        <div class="sunset">
                            <i class="fas fa-moon"></i>
                            Sunset: ${sunTimes[date].sunset}
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="activity-section">
                <h3><i class="fas fa-clock"></i> Daily Schedule</h3>
                <ul class="activity-list">
                    ${day.activities.map((activity, index) => `
                        <li class="activity-item ${activity.meme ? 'has-meme' : ''}" ${activity.meme ? `data-meme="${activity.meme}" data-meme-title="${activity.meme_title || 'Activity Meme'}"` : ''}>
                            <div class="activity-time">
                                <i class="${activity.icon}"></i> ${activity.time}
                            </div>
                            <strong>${activity.title} ${activity.meme ? '🎭' : ''}</strong>
                            <p>${activity.description}</p>
                        </li>
                    `).join('')}
                </ul>
            </div>
            
            <div class="travel-info">
                <h4><i class="fas fa-route"></i> Travel Information</h4>
                <p><strong>From:</strong> ${day.travel.from}</p>
                <p><strong>To:</strong> ${day.travel.to}</p>
                <p><strong>Method:</strong> ${day.travel.method}</p>
                <p><strong>Duration:</strong> ${day.travel.duration}</p>
                <p><strong>Notes:</strong> ${day.travel.notes}</p>
            </div>
        </div>
    `;
}

// Setup event listeners
function setupEventListeners() {
    const loadingOverlay = document.getElementById('loadingOverlay');
    
    // Close modal when clicking X
    closeModal.addEventListener('click', closeModalFunction);
    
    // Close modal when clicking outside
    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            closeModalFunction();
        }
        // Also close if clicking on loading overlay
        if (event.target === loadingOverlay) {
            closeModalFunction();
        }
    });
    
    // Event delegation for meme clicks
    document.addEventListener('click', function(event) {
        const activityItem = event.target.closest('.activity-item.has-meme');
        if (activityItem) {
            const memeUrl = activityItem.getAttribute('data-meme');
            const memeTitle = activityItem.getAttribute('data-meme-title');
            if (memeUrl) {
                console.log('Clicked activity with meme:', memeUrl, memeTitle);
                playActivityMeme(memeUrl, memeTitle);
            }
        }
        
        // Event delegation for temperature meme clicks
        const tempItem = event.target.closest('.temperature-detail.has-temp-meme');
        if (tempItem) {
            const memeUrl = tempItem.getAttribute('data-temp-meme');
            const memeTitle = tempItem.getAttribute('data-temp-meme-title');
            if (memeUrl) {
                console.log('Clicked temperature with meme:', memeUrl, memeTitle);
                playActivityMeme(memeUrl, memeTitle);
            }
        }
    });
    
    // Close modal with Escape key
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape' && (modal.style.display === 'block' || loadingOverlay.style.display === 'flex')) {
            closeModalFunction();
        }
    });
    
    // Smooth scrolling for internal links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Close modal function
function closeModalFunction() {
    const loadingOverlay = document.getElementById('loadingOverlay');
    modal.style.display = 'none';
    loadingOverlay.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Add some interactive animations
function addScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe all cards
    document.querySelectorAll('.day-card, .stat-card').forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });
}

// Initialize scroll animations after a short delay
setTimeout(addScrollAnimations, 500);

// Add some utility functions for potential future features
const utils = {
    formatDate: function(dateString) {
        const options = { 
            weekday: 'long', 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric' 
        };
        return new Date(dateString).toLocaleDateString('en-US', options);
    },
    
    calculateTripDuration: function() {
        const dates = Object.keys(tripData).sort();
        const startDate = new Date(dates[0]);
        const endDate = new Date(dates[dates.length - 1]);
        const timeDiff = endDate.getTime() - startDate.getTime();
        return Math.ceil(timeDiff / (1000 * 3600 * 24)) + 1;
    },
    
    getTotalActivities: function() {
        return Object.values(tripData).reduce((total, day) => {
            return total + day.activities.length;
        }, 0);
    }
};

// Update stats on page load
document.addEventListener('DOMContentLoaded', function() {
    // You can use these stats to update the overview section
    console.log(`Trip Duration: ${utils.calculateTripDuration()} days`);
    console.log(`Total Activities: ${utils.getTotalActivities()}`);
});

// Interactive Map Functionality
let tripMap;
let routingControl;
let currentMapLayer = 'street';

// Trip locations with coordinates
const tripLocations = [
    {
        name: "Home Base",
        coords: [42.3601, -71.0589], // Boston area (adjust to your actual location)
        date: "Oct 9",
        description: "Starting point",
        icon: "🏠"
    },
    {
        name: "Stowe, Vermont",
        coords: [44.4654, -72.6874],
        date: "Oct 11",
        description: "Stowe",
        icon: "🏔️"
    },
    {
        name: "White Mountains, NH",
        coords: [44.2619, -71.3025], // Crawford Notch area
        date: "Oct 12-13",
        description: "White Mountains",
        icon: "🥾"
    },
    {
        name: "Portland, Maine",
        coords: [43.6591, -70.2568],
        date: "Oct 14",
        description: "Portland",
        icon: "☕"
    }
];

function initInteractiveMap() {
    // Initialize the map
    tripMap = L.map('tripMap').setView([43.5, -71.5], 7);

    // Add OpenStreetMap tiles
    const streetLayer = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors'
    }).addTo(tripMap);

    // Satellite layer
    const satelliteLayer = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
        attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
    });

    // Create custom icons for different locations
    const createCustomIcon = (emoji, color) => {
        return L.divIcon({
            html: `<div style="background: ${color}; width: 40px; height: 40px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 18px; box-shadow: 0 4px 12px rgba(0,0,0,0.15); border: 3px solid white;">${emoji}</div>`,
            className: 'custom-div-icon',
            iconSize: [40, 40],
            iconAnchor: [20, 20],
            popupAnchor: [0, -20]
        });
    };

    // Add markers for each location
    const markers = [];
    tripLocations.forEach((location, index) => {
        const colors = ['#a16207', '#dc2626', '#f59e0b', '#ea580c'];
        const icon = createCustomIcon(location.icon, colors[index]);
        
        const marker = L.marker(location.coords, { icon: icon })
            .bindPopup(`
                <div class="popup-content">
                    <h4>${location.name}</h4>
                    <p class="popup-date">${location.date}</p>
                    <p>${location.description}</p>
                </div>
            `)
            .addTo(tripMap);
        
        markers.push(marker);
    });

    // Add routing
    const waypoints = tripLocations.map(loc => L.latLng(loc.coords[0], loc.coords[1]));
    
    routingControl = L.Routing.control({
        waypoints: waypoints,
        routeWhileDragging: false,
        addWaypoints: false,
        createMarker: function() { return null; }, // Don't create default markers
        lineOptions: {
            styles: [{ color: '#dc2626', weight: 4, opacity: 0.8 }]
        },
        router: L.Routing.osrmv1({
            serviceUrl: 'https://router.project-osrm.org/route/v1'
        })
    }).addTo(tripMap);

    // Setup map controls
    setupMapControls(streetLayer, satelliteLayer, markers);
}

function setupMapControls(streetLayer, satelliteLayer, markers) {
    const showFullRouteBtn = document.getElementById('showFullRoute');
    const showStopsBtn = document.getElementById('showStops');
    const satelliteBtn = document.getElementById('satelliteView');

    // Show full route
    showFullRouteBtn.addEventListener('click', function() {
        tripMap.fitBounds(routingControl.getBounds(), { padding: [20, 20] });
        setActiveButton(showFullRouteBtn);
    });

    // Show stops only
    showStopsBtn.addEventListener('click', function() {
        const group = new L.featureGroup(markers);
        tripMap.fitBounds(group.getBounds(), { padding: [50, 50] });
        setActiveButton(showStopsBtn);
    });

    // Toggle satellite view
    satelliteBtn.addEventListener('click', function() {
        if (currentMapLayer === 'street') {
            tripMap.removeLayer(streetLayer);
            tripMap.addLayer(satelliteLayer);
            currentMapLayer = 'satellite';
            satelliteBtn.textContent = 'Street View';
        } else {
            tripMap.removeLayer(satelliteLayer);
            tripMap.addLayer(streetLayer);
            currentMapLayer = 'street';
            satelliteBtn.textContent = 'Satellite View';
        }
        setActiveButton(satelliteBtn);
    });

    // Set initial active button
    setActiveButton(showFullRouteBtn);
}

function setActiveButton(activeBtn) {
    document.querySelectorAll('.map-btn').forEach(btn => btn.classList.remove('active'));
    activeBtn.classList.add('active');
}

// Things to Bring functionality
function initializeThingsToBring() {
    const bringItems = document.querySelectorAll('.bring-item');
    const bringDetails = document.querySelectorAll('.bring-details');
    
    bringItems.forEach(item => {
        item.addEventListener('click', () => {
            const category = item.getAttribute('data-category');
            const targetDetails = document.getElementById(category + 'Details');
            
            // Hide all details first
            bringDetails.forEach(detail => {
                detail.style.display = 'none';
            });
            
            // Remove active class from all items
            bringItems.forEach(bringItem => {
                bringItem.classList.remove('active');
            });
            
            // Show the selected details and add active class
            if (targetDetails) {
                targetDetails.style.display = 'block';
                item.classList.add('active');
            }
        });
    });
}

// Initialize everything when the page loads
document.addEventListener('DOMContentLoaded', function() {
    initializeThingsToBring();
});
