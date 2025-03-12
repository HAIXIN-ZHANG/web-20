import { updateProfiles } from "../database/database";

export const bindEditProfileModal = async () => {
    // 获取 HTML 元素
    const modal = document.getElementById("edit-profile-modal");
    const close = document.getElementById("edit-profile-close");
    const cancel = document.getElementById("edit-profile-cancel");

    const save = document.getElementById("edit-profile-save");
    const userAvatar = document.getElementById("upload-avatar");

    // 点击关闭按钮时隐藏弹窗
    close.addEventListener("click", async () => {
        modal.style.display = "none";
    });

    // 点击取消按钮时隐藏弹窗
    cancel.addEventListener("click", async () => {
        modal.style.display = "none";
    });

    // save button
    save.addEventListener("click", async () => {
        // 获取表单中的信息
        const profileName = document.getElementById("name").value;
        const profileEmail = document.getElementById("email").value;
        const profileDescription = document.getElementById(
            "profile-introduction",
        ).value;
        const constellation = document.getElementById("constellation").value;
        const mbti = document.getElementById("MBTI").value;
        const hobby = document.getElementById("hobby").value;
        const linked = document.getElementById("linked").value;
        const x = document.getElementById("x").value;
        const weChat = document.getElementById("weChat").value;

        let updatedProfile = {
            name: profileName,
            email: profileEmail,
            description: profileDescription,
            hobby: hobby,
            constellation: constellation,
            mbti: mbti,
            linked: linked,
            x: x,
            wechat: weChat,
        };

        await updateProfiles(updatedProfile);

        modal.style.display = "none";
        // 刷新页面
        setTimeout(() => {
            location.reload();
        }, 500); // 延迟 0.5 秒
    });

};