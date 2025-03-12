import { refreshProfileSidebarData, bindEditProfile } from "./js/page-content/profile-sidebar";
import { bindEditProfileModal } from './js/page-content/edit-profile.js';
import { refreshPostData } from './js/page-content/post-content.js'; 


async function initialize() {
    await refreshProfileSidebarData()
    await refreshPostData()
    await bindEditProfile()
    await bindEditProfileModal()
}

initialize();