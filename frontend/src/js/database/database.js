import { getData, postData, deleteData, putData, patchData, getResourcePath } from "./utils";


export const getProfiles = async () => {
  const path = getResourcePath(['userProfiles']);
  const profiles = await getData(path);

  return profiles.data;
};

export const updateProfiles = async (profileData) => {
  const profilesPath = getResourcePath(["userProfiles", "1"]);
  const userProfiles = await patchData(profilesPath, profileData);

  return userProfiles.data;
}

export const getPosts = async () => {
  const postsPath = getResourcePath(["userPosts"]);
  const userPosts = await getData(postsPath);

  return userPosts.data;
}