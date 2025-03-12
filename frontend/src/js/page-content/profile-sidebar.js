import { getProfiles } from "../database/database";

// 获取 HTML 元素
const avatarElement = document.getElementById("profile-avatar");
const emailElement = document.getElementById("profile-email");
const nameElement = document.getElementById("profile-name");

const description = document.getElementById("profile-description");

// media 元素 
const constellationElement = document.getElementById("profile-constellation");
const mbtiElement = document.getElementById("profile-mbti");
const hobbyElement = document.getElementById("profile-hobby");
const linkedElement = document.getElementById("profile-linked");
const xElement = document.getElementById("profile-x");
const wechatElement = document.getElementById("profile-weChat");


export const refreshProfileSidebarData = async () => {
    const profiles = await getProfiles();
    const mainUserProfile = profiles[0];

    // 更新元素内容
    avatarElement.src = mainUserProfile.avatar;
    nameElement.textContent = mainUserProfile.name;
    emailElement.textContent = mainUserProfile.email;
    description.textContent = mainUserProfile.description;

    // 设置其他信息
    constellationElement.textContent = mainUserProfile.constellation;
    mbtiElement.textContent = mainUserProfile.mbti;
    hobbyElement.textContent = mainUserProfile.hobby;
    linkedElement.textContent = mainUserProfile.linked;
    xElement.textContent = mainUserProfile.x;
    wechatElement.textContent = mainUserProfile.wechat;
};



const editProfileBtn = document.getElementById("edit-profile-btn");
const profileModal= document.getElementById("edit-profile-modal");


export const bindEditProfile = async () => { 
    editProfileBtn.addEventListener("click", async () => {
        profileModal.style.display = "block";

        document.getElementById("upload-avatar").src = avatarElement.src;
        document.getElementById("name").value = nameElement.textContent;
        document.getElementById("email").value = emailElement.textContent;
        document.getElementById("constellation").value = constellationElement.textContent;
        document.getElementById("MBTI").value = mbtiElement.textContent;
        document.getElementById("hobby").value = hobbyElement.textContent;
        document.getElementById("linked").value = linkedElement.textContent;
        document.getElementById("x").value = xElement.textContent;
        document.getElementById("weChat").value = wechatElement.textContent;
        document.getElementById("profile-introduction").value = description.textContent;
    });
};
