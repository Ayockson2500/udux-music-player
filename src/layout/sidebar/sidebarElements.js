import homeIcon from "../../assets/icons/homeIcon.svg"
import discover from "../../assets/icons/discoverIcon.svg"
import libraryIcon from "../../assets/icons/libraryIcon.svg"
import likeIcon from "../../assets/icons/likeIcon.svg"
import recentplayIcon from "../../assets/icons/recentPlayedIcon.svg"
import createPlayList from "../../assets/icons/createplaylistIcon.svg"
import soundIcon from "../../assets/icons/soundIcon.svg"
import playlistIcon from "../../assets/icons/playlistIcon.svg";


export const sectionOneSideBarElements = [
    {
        title: "Home",
        url: "/home",
        icon: homeIcon,
        classNme: ""
    },
    {
        title: "Discover",
        url: "#",
        icon: discover,
        classNme: ""
    }
]

export const sectionTwoSideBarElements = [
    {
        title: "Your Library",
        url: "#",
        icon: libraryIcon,
        classNme: ""
    },
    {
        title: "Liked Songs",
        url: "#",
        icon: likeIcon,
        icons: soundIcon,
        classNme: "active-menu"
    },
    {
        title: "Recently Played",
        url: "#",
        icon: recentplayIcon,
        classNme: ""
    },
    {
        title: "Create Playlist",
        url: "#",
        icon: createPlayList,
        classNme: ""
    }
]
export const sectionThreeSideBarElements = [
    {
        title: "Riffs & Runs",
        url: "#",
        classNme: ""
    },
    {
        title: "African Heat",
        url: "#",
        classNme: ""
    },
    {
        title: "Gidi Nights",
        url: "#",
        classNme: ""
    },
    {
        title: "Running out of Playlist na....",
        url: "#",
        classNme: ""
    },
    {
        title: "Saturday was a Good Day",
        url: "#",
        classNme: ""
    },
    {
        title: "Gidi Nights",
        url: "#",
        classNme: ""
    }
    
]

export const sideBarMobileElements = [
    {
        icon: homeIcon,
        url: "#"
    },
    {
        icon: recentplayIcon,
        url: "#"
    },
    {
        icon: libraryIcon,
        url: "#"
    },
    {
        icon: playlistIcon,
        url: "#"
    }
]